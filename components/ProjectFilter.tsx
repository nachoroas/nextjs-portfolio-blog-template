"use client";

import { useState } from "react";
import type { ProjectType } from "@/lib/projects";

interface ProjectFilterProps {
  projects: Array<{ type: ProjectType }>;
  onFilterChange: (type: ProjectType | "All") => void;
}

export default function ProjectFilter({
  projects,
  onFilterChange,
}: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "All">("All");

  const filterTypes: Array<ProjectType | "All"> = [
    "All",
    "Professional",
    "Academic",
    "Personal",
  ];

  const handleFilterClick = (type: ProjectType | "All") => {
    setActiveFilter(type);
    onFilterChange(type);
  };

  return (
    <div className="mb-8 flex flex-wrap gap-4">
      {filterTypes.map((type) => {
        const count =
          type === "All"
            ? projects.length
            : projects.filter((p) => p.type === type).length;

        return (
          <button
            key={type}
            onClick={() => handleFilterClick(type)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeFilter === type
                ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {type} ({count})
          </button>
        );
      })}
    </div>
  );
}
