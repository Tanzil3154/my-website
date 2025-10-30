import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center h-11 w-11 rounded-full bg-primary text-white shadow-soft hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/60"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ScrollToTop;
