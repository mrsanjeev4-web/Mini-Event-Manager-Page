import React from "react";
import Link from "next/link";

export const EventsHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo + Home */}
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-800 hover:text-blue-600 font-semibold transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m5 0h-4m-6 0H4"
            />
          </svg>
          <span>Home</span>
        </Link>

        {/* Center: Title */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Event Manager Pro
          </h1>
          <p className="text-sm text-gray-500">
            Create, organize & track your events
          </p>
        </div>

        {/* Right: Placeholder for future (e.g. settings / profile) */}
        <div className="w-12" />
      </div>
    </header>
  );
};
