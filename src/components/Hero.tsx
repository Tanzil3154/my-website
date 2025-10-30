import { motion } from "framer-motion";
import { Download, Github, Linkedin } from "lucide-react";
import React from "react";
import profilePic from "../data/1.jpg";
import { profile } from "../data/profile";

const Hero: React.FC = () => {
  return (
    <section className="py-16 relative">
      {/* background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-[420px] bg-[radial-gradient(600px_200px_at_20%_0%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(600px_200px_at_80%_-20%,rgba(14,165,233,0.14),transparent_60%)]"
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Left: Text */}
          <motion.div
            className="md:col-span-3 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-slate-900/50 px-2.5 py-1 text-xs text-gray-600 dark:text-gray-300 backdrop-blur">
              <span className="size-1.5 rounded-full bg-emerald-400"></span>
              Available for new opportunities
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight font-display gradient-title">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg font-semibold text-primary">
              {profile.role}
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {profile.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {profile.links?.resume && (
                <a
                  href={profile.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-4 py-2.5 text-sm hover:text-primary transition-colors"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
              )}
              {profile.links?.github && (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-4 py-2.5 text-sm hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {profile.links?.linkedin && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-4 py-2.5 text-sm hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="md:col-span-2 flex md:justify-end justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-primary/25 via-sky-400/20 to-transparent blur-lg"
                aria-hidden
              ></div>
              <img
                src={profilePic}
                alt={`${profile.name} portrait`}
                className="relative h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-2xl object-cover ring-1 ring-gray-200/70 dark:ring-gray-700/60 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
