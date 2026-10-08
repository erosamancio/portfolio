/** The one azulejo every pattern on the site is built from. Rendered once, reused with <use>. */
export function TileDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" style={{ position: "absolute" }}>
      <defs>
        <symbol id="azulejo" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="var(--tile-ground)" />
          <path d="M0 0H100A100 100 0 0 1 0 100Z" fill="var(--tile-ink)" />
          <path d="M0 0H64A64 64 0 0 1 0 64Z" fill="var(--tile-ground)" />
          <path d="M0 0H36A36 36 0 0 1 0 36Z" fill="var(--tile-ink)" />
          <rect x="80" y="80" width="20" height="20" fill="var(--tile-ink)" />
        </symbol>
      </defs>
    </svg>
  );
}
