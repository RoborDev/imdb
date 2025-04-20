"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="">{children}</div>

      {/* <div className="dark:bg-gray-700  text-gray-700 transition-colors duration-300 bg-gray-100">
        {children}
      </div> */}
    </ThemeProvider>
  );
}
