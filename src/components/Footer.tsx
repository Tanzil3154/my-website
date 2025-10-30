import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { profile } from "../data/profile";

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-gray-200/70 dark:border-gray-800/70">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600 dark:text-gray-400">
        <div>
          © {new Date().getFullYear()} {profile.name}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          {profile.links?.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          )}
          {profile.links?.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
