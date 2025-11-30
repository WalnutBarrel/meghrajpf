"use client";
import { useRef } from "react";

export default function RippleButton({ children, className="", onClick }) {
  const btnRef = useRef(null);

  function handleClick(e) {
    const ripple = document.createElement("span");
    const rect = btnRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size/2 + "px";
    ripple.style.top = e.clientY - rect.top - size/2 + "px";
    ripple.className = "ripple";

    btnRef.current.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    if (onClick) onClick();
  }

  return (
    <button ref={btnRef} onClick={handleClick}
      className={`relative overflow-hidden select-none ${className}`}
    >
      {children}
    </button>
  );
}
