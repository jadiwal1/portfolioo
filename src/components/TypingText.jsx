"use client";

import { useEffect, useState } from "react";

const roles = [
  "Web Designing",
  "Web Development",
  "Frontend Development",
  "Backend Development",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 90);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-red-800 font-bold">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
