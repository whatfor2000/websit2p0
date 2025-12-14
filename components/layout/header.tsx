import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 glass">
            <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">Cornosoft</span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        <Link
                            href="/services"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Services
                        </Link>
                        <Link
                            href="/showcase"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Showcase
                        </Link>
                        <Link
                            href="/about"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            About
                        </Link>
                        <Link
                            href="/#contact"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Add Search or other items if needed */}
                    </div>
                    <Button asChild size="sm">
                        <Link href="/#contact">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
