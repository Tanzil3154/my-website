import React from "react";

type Props = {
  id?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeader: React.FC<Props> = ({
  id,
  kicker,
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <div id={id} className={align === "center" ? "text-center" : "text-left"}>
      {kicker && (
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-slate-900/50 px-2.5 py-1 text-xs text-gray-600 dark:text-gray-300 backdrop-blur">
          <span className="size-1.5 rounded-full bg-primary" />
          {kicker}
        </div>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight font-display gradient-title">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 text-gray-600 dark:text-gray-300 ${
            align === "center" ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
