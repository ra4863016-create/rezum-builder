import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles } from "lucide-react";

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">
            Resume<span className="gradient-text">Craft</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/templates"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/templates" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Templates
          </Link>
          <Link
            to="/builder"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/builder" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Builder
          </Link>
        </nav>

        <Link to="/builder">
          <Button variant="hero" size="lg" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Create Resume
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
