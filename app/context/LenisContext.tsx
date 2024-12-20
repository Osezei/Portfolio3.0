import Lenis from "@studio-freight/lenis";
import { useContext, createContext, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import { useEffect } from "react";
import React from "react";

const LenisContext = createContext<Lenis | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

export const LenisProvider = ({ children }: ProviderProps) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      //  smooth: true,
      duration: 1.4,
      touchMultiplier: 1.3,
      //  direction: 'vertical',
    });

    setLenis(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  useAnimationFrame((time) => {
    lenis?.raf(time);
  });

  return (
    <LenisContext.Provider value={lenis}> {children} </LenisContext.Provider>
  );
};

export const useLenis = () => {
  const lenis = useContext(LenisContext);

  if (lenis === undefined) {
    throw new Error("useLenis must be used within a LenisProvider");
  }

  return lenis;
};
