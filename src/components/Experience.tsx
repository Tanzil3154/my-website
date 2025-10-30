import { Calendar } from "lucide-react";
import React from "react";
import { resume } from "../data/resume";
import SectionHeader from "./ui/SectionHeader";

const Experience: React.FC = () => {
  if (!resume.experience || resume.experience.length === 0) return null;

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Experience"
          subtitle="Professional roles and responsibilities."
        />

        <div className="mt-12 space-y-6">
          {resume.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6">
              <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <div className="border-l border-gray-200 dark:border-gray-700 ml-1 pl-5">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    {exp.title}
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="text-gray-700 dark:text-gray-300">
                    {exp.company}
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {exp.period}
                  </span>
                  {exp.location && <span>• {exp.location}</span>}
                </div>
                {exp.bullets?.length > 0 && (
                  <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
                {exp.stack?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-gray-200 dark:border-gray-700 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
