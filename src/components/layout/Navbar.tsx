
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();

  const navItems = [
    { label: "Docs", href: "/docs" },
    { label: "Agents", href: "/agents" },
    { label: "Examples", href: "/examples" },
  ];

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          className={`text-sm font-medium transition-colors ${
            isActiveRoute(item.href)
              ? "text-foreground font-semibold"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-primary rounded-sm flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-sm">A</span>
            </div>
            <span className="font-bold hidden md:inline-block">Agentscape</span>
          </Link>
        </div>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center flex-1">
            <nav className="flex items-center ml-6 space-x-6 text-sm font-medium">
              <NavLinks />
            </nav>
            <div className="flex items-center space-x-4 ml-auto">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/japborst/agentscape"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button size="sm">
                <span>Get Started</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
