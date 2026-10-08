export type Pattern = "escamas" | "ondas" | "rosetas" | "cata-vento" | "diagonal";

const blocks: Record<Exclude<Pattern, "escamas" | "diagonal">, number[][]> = {
  ondas: [
    [0, 1],
    [2, 3],
  ],
  rosetas: [
    [2, 3],
    [1, 0],
  ],
  "cata-vento": [
    [1, 2],
    [0, 3],
  ],
};

/** Quarter turns (0–3) for the tile at a grid position. One tile, many patterns. */
export function rotationFor(pattern: Pattern, col: number, row: number): number {
  if (pattern === "escamas") return 0;
  if (pattern === "diagonal") return (col + row) % 4;
  return blocks[pattern][row % 2][col % 2];
}

/** Smallest forward turn from the current cumulative rotation to a target quarter. */
export function turnTo(current: number, target: number): number {
  return current + ((((target - current) % 4) + 4) % 4);
}
