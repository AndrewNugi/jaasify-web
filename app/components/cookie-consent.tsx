"use client";

import React, { useState, useEffect } from "react";

const STORAGE_KEY = "jaasify_cookies_accepted";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = (value: string) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          We use cookies to improve your experience. By using this site you agree to our{" "}
          <a href="/privacy" className="text-[#39BFE1] hover:underline">Privacy Policy</a>.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => accept("false")}
            className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Necessary Only
          </button>
          <button
            onClick={() => accept("true")}
            className="px-4 py-2 text-sm font-medium text-white bg-[#1C3462] hover:bg-[#1C3462]/90 transition-colors cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
