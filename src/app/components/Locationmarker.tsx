import React from "react";
interface LocationMarkerProps {
  size?: "small" | "large";
  className?: string;
}
export default function LocationMarker({
  size = "small",
  className = "",
}: LocationMarkerProps) {
  const sizeClasses =
    size === "large"
      ? "w-6 h-6 before:w-6 before:h-6"
      : "w-4 h-4 before:w-4 before:h-4";
  return (
    <div className={`relative ${className}`}>
      <div
        className={`
        ${sizeClasses}
        absolute
        rounded-full
        bg-orange-500
        before:content-['']
        before:absolute
        before:rounded-full
        before:bg-orange-500/50
        before:animate-ping
      `}
      >
        <div
          className={`
          absolute
          inset-1
          rounded-full
          bg-white
        `}
        />
      </div>
    </div>
  );
}
