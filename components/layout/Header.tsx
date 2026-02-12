"use client";

import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Palmtree } from "lucide-react";
import { useEffect, useState } from "react";
import { PottedPlant } from "@/components/icons/PottedPlant";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <Container>
        <nav className="flex items-center justify-center py-4 px-8 md:px-16 lg:px-24 gap-8">
          {/* Navigation with Icons Bookending (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {/* Left: Potted Plant Icon */}
            <PottedPlant className="text-white" size={32} strokeWidth={2} />

            {/* Center: Navigation */}
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground hover:text-primary-500 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}

            {/* Right: Palm Tree Icon */}
            <Palmtree className="text-white scale-x-[-1]" size={32} strokeWidth={2} />
          </div>

          {/* Mobile: Just Potted Plant on left, Menu on right */}
          <PottedPlant className="md:hidden text-white absolute left-8" size={28} strokeWidth={2} />

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground hover:text-primary-500 transition-colors font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  );
}
