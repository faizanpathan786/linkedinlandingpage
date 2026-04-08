import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
            <Linkedin className="w-5 h-5" />
          </div>
          LinkedInFlow
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
          <Button>Start Free Trial</Button>
        </div>
      </div>
    </nav>
  );
}
