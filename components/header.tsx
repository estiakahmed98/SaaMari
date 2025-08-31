"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-heading text-2xl font-bold tracking-tight">SaaMari</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/philosophy"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Philosophy
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Curations
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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

        <Button
          variant="outline"
          className="hidden md:inline-flex border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
        >
          Your Gateway to Elegance
        </Button>
      </div>
    </header>
  )
}
