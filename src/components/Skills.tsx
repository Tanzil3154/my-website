import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import React from "react";
import { profile } from "../data/profile";
import SectionHeader from "./ui/SectionHeader";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Skills"
          subtitle="Core technical stack, soft skills and languages."
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Core Skills */}
          <motion.div
            className="card-surface p-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-primary" /> Core
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-sm bg-white/70 dark:bg-slate-900/60 border border-gray-200/70 dark:border-gray-700/70 text-gray-800 dark:text-gray-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="card-surface p-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Soft
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.softSkills?.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-sm bg-white/70 dark:bg-slate-900/60 border border-gray-200/70 dark:border-gray-700/70 text-gray-800 dark:text-gray-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            className="card-surface p-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="inline-block size-2 rounded-full bg-primary"></span>
              Languages
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.languages?.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-sm bg-white/70 dark:bg-slate-900/60 border border-gray-200/70 dark:border-gray-700/70 text-gray-800 dark:text-gray-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
