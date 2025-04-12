"use client";

import { useEffect } from 'react';

export default function ScrollbarProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Fallback initialization
    const html = document.documentElement;
    html.style.setProperty('--sb-size', '10px');
    html.style.overflowY = 'scroll';
    
    // Cleanup function
    return () => {
      html.style.removeProperty('--sb-size');
      html.style.removeProperty('overflow-y');
    };
  }, []);

  return <>{children}</>;
}