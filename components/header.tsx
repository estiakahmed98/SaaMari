"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileCurationsOpen, setMobileCurationsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl font-bold tracking-tight">SaaMari</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/philosophy"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Philosophy
          </Link>

          {/* Desktop dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Curations
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-200">
              <Link
                href="/curations/sanovia"
                className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted"
              >
                Sanovia
              </Link>
              <Link
                href="/curations/mediora"
                className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted"
              >
                Mediora
              </Link>
              <Link
                href="/curations/aurevia"
                className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted"
              >
                Aurevia
              </Link>
            </div>
          </div>

          <Link
            href="/journals"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Journals
          </Link>
          <Link
            href="/leadership"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Leadership
          </Link>
          <Link
            href="/impact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Impact
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Button
          variant="outline"
          className="hidden md:inline-flex border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
        >
          Your Gateway to Elegance
        </Button>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 transition"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-muted/60"
            onClick={() => setMobileOpen(false)}
          >
            Philosophy
          </Link>

          {/* Mobile Curations (accordion) */}
          <div className="rounded-md">
            <button
              className="w-full flex items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-foreground/90 hover:bg-muted/60"
              aria-expanded={mobileCurationsOpen}
              onClick={() => setMobileCurationsOpen((o) => !o)}
            >
              <span>Curations</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileCurationsOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`pl-3 transition-all ${
                mobileCurationsOpen ? "max-h-48 py-1" : "max-h-0"
              } overflow-hidden`}
            >
              <Link
                href="/curations/sanovia"
                className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted/60"
                onClick={() => setMobileOpen(false)}
              >
                Sanovia
              </Link>
              <Link
                href="/curations/mediora"
                className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted/60"
                onClick={() => setMobileOpen(false)}
              >
                Mediora
              </Link>
              <Link
                href="/curations/aurevia"
                className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted/60"
                onClick={() => setMobileOpen(false)}
              >
                Aurevia
              </Link>
            </div>
          </div>

          <Link
            href="/journals"
            className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-muted/60"
            onClick={() => setMobileOpen(false)}
          >
            Journals
          </Link>
          <Link
            href="/leadership"
            className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-muted/60"
            onClick={() => setMobileOpen(false)}
          >
            Leadership
          </Link>
          <Link
            href="/impact"
            className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-muted/60"
            onClick={() => setMobileOpen(false)}
          >
            Impact
          </Link>
          <Link
            href="/contact"
            className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-muted/60"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile CTA */}
          <div className="pt-2">
            <Button
              variant="outline"
              className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              onClick={() => setMobileOpen(false)}
            >
              Your Gateway to Elegance
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
