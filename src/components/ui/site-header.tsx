import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-muted">
      <div className="flex h-16 items-center justify-between w-full px-4">
        <MainNav />
        <nav className="flex items-center">
          <ModeToggle />
        </nav>
      </div>
    </header>

  )
}