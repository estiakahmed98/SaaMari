"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCurationsOpen, setMobileCurationsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  const isSection = (section: string) => pathname.startsWith(section);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#50000B] text-[#C2A36A]">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className={`${comfortaa.className} text-2xl font-normal tracking-tight`}>
            Saamari
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 ml-60">
          <Link
            href="/philosophy"
            aria-current={isActive("/philosophy") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/philosophy") ? "text-white" : "text-inherit"
            }`}
          >
            Philosophy
          </Link>

          {/* Desktop dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                isSection("/curations") ? "text-white" : "text-inherit"
              }`}
              aria-haspopup="true"
              aria-expanded={isSection("/curations")}
            >
              Curations
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-200">
              <Link
                href="/curations/sanovia"
                aria-current={
                  isActive("/curations/sanovia") ? "page" : undefined
                }
                className={`block px-4 py-2 text-sm hover:bg-muted ${
                  isActive("/curations/sanovia")
                    ? "bg-[#50000B] text-white"
                    : "text-inherit"
                }`}
              >
                Sanovia
              </Link>
              <Link
                href="/curations/mediora"
                aria-current={
                  isActive("/curations/mediora") ? "page" : undefined
                }
                className={`block px-4 py-2 text-sm hover:bg-muted ${
                  isActive("/curations/mediora")
                    ? "bg-[#50000B] text-white"
                    : "text-inherit"
                }`}
              >
                Mediora
              </Link>
              <Link
                href="/curations/aurevia"
                aria-current={
                  isActive("/curations/aurevia") ? "page" : undefined
                }
                className={`block px-4 py-2 text-sm hover:bg-muted ${
                  isActive("/curations/aurevia")
                    ? "bg-[#50000B] text-white"
                    : "text-inherit"
                }`}
              >
                Aurevia
              </Link>
            </div>
          </div>

          <Link
            href="/journals"
            aria-current={isActive("/journals") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/journals") ? "text-white" : "text-inherit"
            }`}
          >
            Journals
          </Link>
          <Link
            href="/leadership"
            aria-current={isActive("/leadership") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/leadership") ? "text-white" : "text-inherit"
            }`}
          >
            Leadership
          </Link>
          <Link
            href="/impact"
            aria-current={isActive("/impact") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/impact") ? "text-white" : "text-inherit"
            }`}
          >
            Impact
          </Link>
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={`text-sm font-medium transition-colors ${
              isActive("/contact") ? "text-white" : "text-inherit"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Button
          variant="outline"
          className="hidden md:inline-flex border-[#C2A36A] text-[#C2A36A] hover:bg-transparent hover:text-[#C2A36A] bg-transparent "
        >
          Your Gateway to Elegance
        </Button>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#C2A36A] hover:text-[#C2A36A] hover:bg-muted/50 transition"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 py-3 space-y-1">
          <Link
            href="/philosophy"
            aria-current={isActive("/philosophy") ? "page" : undefined}
            className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/60 ${
              isActive("/philosophy") ? "text-white" : "text-inherit"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Philosophy
          </Link>

          {/* Mobile Curations (accordion) */}
          <div className="rounded-md">
            <button
              className={`w-full flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-muted/60 ${
                isSection("/curations") ? "text-white" : "text-inherit"
              }`}
              aria-expanded={mobileCurationsOpen}
              onClick={() => setMobileCurationsOpen((o) => !o)}
            >
              <span>Curations</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  mobileCurationsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`pl-3 transition-all ${
                mobileCurationsOpen ? "max-h-48 py-1" : "max-h-0"
              } overflow-hidden`}
            >
              <Link
                href="/curations/sanovia"
                aria-current={
                  isActive("/curations/sanovia") ? "page" : undefined
                }
                className={`block rounded-md px-3 py-2 text-sm hover:bg-muted/60 ${
                  isActive("/curations/sanovia")
                    ? "bg-[#50000B] text-[#C2A36A]"
                    : "text-inherit"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Sanovia
              </Link>
              <Link
                href="/curations/mediora"
                aria-current={
                  isActive("/curations/mediora") ? "page" : undefined
                }
                className={`block rounded-md px-3 py-2 text-sm hover:bg-muted/60 ${
                  isActive("/curations/mediora")
                    ? "bg-[#50000B] text-[#C2A36A]"
                    : "text-inherit"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Mediora
              </Link>
              <Link
                href="/curations/aurevia"
                aria-current={
                  isActive("/curations/aurevia") ? "page" : undefined
                }
                className={`block rounded-md px-3 py-2 text-sm hover:bg-muted/60 ${
                  isActive("/curations/aurevia")
                    ? "bg-[#50000B] text-[#C2A36A]"
                    : "text-inherit"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Aurevia
              </Link>
            </div>
          </div>

          <Link
            href="/journals"
            aria-current={isActive("/journals") ? "page" : undefined}
            className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/60 ${
              isActive("/journals") ? "text-white" : "text-inherit"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Journals
          </Link>
          <Link
            href="/leadership"
            aria-current={isActive("/leadership") ? "page" : undefined}
            className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/60 ${
              isActive("/leadership") ? "text-white" : "text-inherit"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Leadership
          </Link>
          <Link
            href="/impact"
            aria-current={isActive("/impact") ? "page" : undefined}
            className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/60 ${
              isActive("/impact") ? "text-white" : "text-inherit"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Impact
          </Link>
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/60 ${
              isActive("/contact") ? "text-white" : "text-inherit"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile CTA */}
          <div className="pt-2">
            <Button
              variant="outline"
              className="w-full border-[#C2A36A] text-[#C2A36A] hover:bg-transparent hover:text-[#C2A36A] bg-transparent transform transition-all duration-300 hover:-translate-y-1"
              onClick={() => setMobileOpen(false)}
            >
              Your Gateway to Elegance
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
