"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export default function DashboardLayout({ children, session }) {
  useEffect(() => {
    // Set up theme detection
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && mediaQuery.matches)) {
      document.documentElement.classList.add('dark');
    }

    const handleThemeChange = (e) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  return (
    <SessionProvider session={session}>
      <div className="dashboard-layout">
        {children}
      </div>
    </SessionProvider>
  );
}