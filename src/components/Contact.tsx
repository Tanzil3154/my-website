import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";
import { profile } from "../data/profile";
import SectionHeader from "./ui/SectionHeader";

const Contact: React.FC = () => {
  function copyEmail() {
    navigator.clipboard?.writeText(profile.email);
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader align="center" kicker="Contact" title="Let's Connect!" />

        <div className="mt-8 card-surface p-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary px-4 py-2.5"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>

            {profile.links?.linkedin && (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost px-4 py-2.5 text-sm"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            )}
            {profile.links?.github && (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost px-4 py-2.5 text-sm"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
