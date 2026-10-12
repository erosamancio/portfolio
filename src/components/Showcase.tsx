"use client";

import { useState } from "react";
import type { Tag } from "@/content/site";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

// The opening profile and the project list share one filter: picking a technology in perfil.ts narrows the list.
export function Showcase() {
  const [filter, setFilter] = useState<Tag | null>(null);

  const pickFromProfile = (tag: Tag) => {
    const next = filter === tag ? null : tag;
    setFilter(next);
    if (next) document.getElementById("trabalhos")?.scrollIntoView({ block: "start" });
  };

  return (
    <>
      <Hero filter={filter} onFilter={pickFromProfile} />
      <Projects filter={filter} onFilter={setFilter} />
    </>
  );
}
