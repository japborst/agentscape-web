
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
      <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/10 blur-[130px] -bottom-80 -left-40"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Ready to build with AI?
          </h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mb-8">
            Start building with AgentScape today and transform your application
            with beautiful, functional AI components.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/docs/getting-started" className="gap-2">
                Get started now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/components">
                Explore components
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
