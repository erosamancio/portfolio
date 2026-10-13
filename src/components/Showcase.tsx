"use client";

import { useState, type ReactNode } from "react";
import type { Tag } from "@/content/site";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

// The opening profile and the project list share one filter: picking a technology in perfil.ts narrows the list.
export function Showcase({ children }: { children?: ReactNode }) {
  const [filter, setFilter] = useState<Tag | null>(null);
  // The list animates cards in only after a filter change, never on the first paint.
  const [filtered, setFiltered] = useState(false);

  const applyFilter = (tag: Tag | null) => {
    setFilter(tag);
    setFiltered(true);
  };

  const pickFromProfile = (tag: Tag) => {
    const next = filter === tag ? null : tag;
    applyFilter(next);
    if (next) document.getElementById("trabalhos")?.scrollIntoView({ block: "start" });
  };

  return (
    <>
      <Hero filter={filter} onFilter={pickFromProfile} />
      {children}
      <Projects filter={filter} onFilter={setFilter} />
    </>
  );
}
