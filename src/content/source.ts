import { readFileSync } from "node:fs";
import path from "node:path";

export type Token = ["kw" | "fn" | "st" | "ty" | "cm" | null, string];
export type SourceExcerpt = { file: string; start: number; lines: Token[][] };

const keywords = new Set([
  "const",
  "let",
  "function",
  "return",
  "if",
  "else",
  "for",
  "of",
  "new",
  "export",
  "import",
  "from",
  "type",
]);

// A small highlighter for TypeScript lines: comments, strings, keywords, calls and type annotations.
function tokenize(line: string): Token[] {
  const out: Token[] = [];
  const re =
    /(\/\/.*$)|(`[^`]*`|"[^"]*"|'[^']*')|\b([A-Za-z_$][\w$]*)\b(?=\s*[(<])|\b([A-Za-z_$][\w$]*)\b|([^A-Za-z_$"'`/]+|\/)/g;
  let m: RegExpExecArray | null;
  let prev = "";
  while ((m = re.exec(line))) {
    const [text, comment, str, call, word] = m;
    if (comment) out.push(["cm", text]);
    else if (str) out.push(["st", text]);
    else if (call) out.push([keywords.has(call) ? "kw" : "fn", text]);
    else if (word) {
      const kind = keywords.has(word) ? "kw" : /^[A-Z]/.test(word) || /:\s*$|<$/.test(prev) ? "ty" : null;
      out.push([kind, text]);
    } else out.push([null, text]);
    prev = text;
  }
  return out;
}

/**
 * Reads a function from src/ at build time, so the code shown on the page is the code that runs.
 * The excerpt runs from the line that declares `name` to the first line that closes it.
 */
export function excerpt(file: string, name: string): SourceExcerpt {
  // Scoped to src/ so the build traces only the source folder.
  const all = readFileSync(path.join(process.cwd(), "src", file), "utf8").split("\n");
  const from = all.findIndex((l) => l.startsWith(`function ${name}`) || l.startsWith(`export function ${name}`));
  if (from === -1) throw new Error(`${name} not found in ${file}`);
  const to = all.findIndex((l, i) => i > from && l === "}");
  return { file: `src/${file}`, start: from + 1, lines: all.slice(from, to + 1).map(tokenize) };
}
