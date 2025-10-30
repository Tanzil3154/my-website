import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  imageUrl?: string;
  idx?: number;
};

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  link,
  tags = [],
  imageUrl,
  idx = 0,
}) => {
  return (
    <motion.article
      className="group card-surface overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
        delay: Math.min(idx * 0.05, 0.2),
      }}
    >
      <div className="p-5">
        <div className="aspect-video rounded-md relative border border-gray-200/70 dark:border-gray-700/70 overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${title} preview`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 grid place-items-center text-gray-400 text-sm">
              Preview
            </div>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-gray-200 dark:border-gray-700 px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-3 py-1.5 text-sm"
          >
            Live <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
