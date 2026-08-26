
'use client';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return children;
}