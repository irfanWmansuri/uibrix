'use client';

import { useEffect, useState } from "react";
import { LogoIcon } from "@/_components/atoms/svgIcons/SvgIcons";
import { Navbar } from "@/_components/atoms/navbar/Navbar";
import { PrimaryButton } from "@/_components/atoms/buttons/Buttons";

export const MainHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseClass = "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 flex justify-between gap-4 items-center py-2 will-change-transform";
  const widthClass = scrolled ? "w-[50%]" : "w-[90%]";
  const effectClass = scrolled
  ? "px-[30px] backdrop-blur-[24px] bg-black/50 rounded-[40px] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.2),_0px_2px_8px_0px_rgba(0,0,0,0.16)] origin-center scale-[1.02] transform-gpu translate-y-0 opacity-100"
  : "transform-gpu -translate-y-2 opacity-90";

  return (
    <header className={`${baseClass} ${widthClass} ${effectClass}`}>
      <div className="logosec"><LogoIcon /></div>
      <div className="menusec"><Navbar />
        </div>
      <div className="ctasec"><PrimaryButton btnType="button">Contact Us</PrimaryButton></div>
    </header>
  );
};
