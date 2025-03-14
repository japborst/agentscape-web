
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md text-center py-20">
          <div className="relative mb-6 mx-auto">
            <div className="h-40 w-40 bg-primary/10 rounded-full mx-auto animate-pulse-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-7xl font-bold text-primary">404</h1>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-3">Page not found</h2>
          <p className="text-muted-foreground mb-6">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
