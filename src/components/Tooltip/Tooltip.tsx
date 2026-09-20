import React, { useState, useRef, useEffect } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  delay?: number;
  trigger?: "hover" | "click"; 
}

export const Tooltip = ({
  children,
  content,
  side = "top",
  delay = 200,
  trigger = "hover",
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (trigger === "click") return;
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (trigger === "hover") setVisible(false);
  };

  const toggle = () => {
    if (trigger === "click") {
      setVisible((prev) => !prev);
    }
  };


  useEffect(() => {
    if (trigger !== "click" || !visible) return;

    const handleOutside = () => setVisible(false);
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, [visible, trigger]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={show}
      onMouseLeave={hide}
      onClick={(e) => {
        e.stopPropagation(); 
        toggle();
      }}
    >
      {children}

      {visible && (
        <div
          className={`absolute z-50 px-3 py-1.5 text-sm text-white bg-gray-900 rounded-md whitespace-nowrap shadow-lg ${positionClasses[side]}`}
        >
          {content}
        </div>
      )}
    </div>
  );
};