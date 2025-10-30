import React from "react";
import { profile } from "../data/profile";
import ProjectCard from "./ui/ProjectCard";
import SectionHeader from "./ui/SectionHeader";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          kicker="Featured"
          title="Projects"
          subtitle="Selected work built with React and modern tooling."
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((p, idx) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              link={p.link}
              tags={["React", "TypeScript"]}
              idx={idx}
              imageUrl={p.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
