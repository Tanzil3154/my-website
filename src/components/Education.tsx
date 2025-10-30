import { Calendar } from "lucide-react";
import React from "react";
import { resume } from "../data/resume";
import SectionHeader from "./ui/SectionHeader";

const Education: React.FC = () => {
  if (!resume.education || resume.education.length === 0) return null;

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          kicker="Academics"
          title="Education"
          subtitle="Degrees and qualifications."
        />

        <ul className="mt-8 space-y-4">
          {resume.education.map((ed, idx) => (
            <li key={idx} className="card-surface p-5">
              <div className="font-semibold">{ed.degree}</div>
              <div className="text-gray-700 dark:text-gray-300">
                {ed.school}
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {ed.period}
                {ed.location && <span>• {ed.location}</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
