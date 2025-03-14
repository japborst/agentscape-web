
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="clip-path-hero relative overflow-hidden pb-20 lg:pb-28 pt-16 bg-gradient-to-br from-secondary via-background to-background">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
      <div className="absolute h-[500px] w-[500px] rounded-full bg-primary/20 blur-[150px] -top-40 -right-40"></div>
      <div className="absolute h-[400px] w-[600px] rounded-full bg-accent/10 blur-[130px] bottom-0 -left-40"></div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10">
        <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-6">
          <span className="bg-primary/20 text-primary rounded-sm px-1.5 py-0.5 text-xs mr-2">NEW</span>
          <span className="text-muted-foreground">Introducing AgentScape v1.0</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
          Build AI agents with<br />beautifully designed components
        </h1>
        
        <p className="text-muted-foreground max-w-[700px] text-lg mb-8">
          A collection of open source, production-ready AI agent components. 
          Simply install with CLI and integrate — just like shadcn.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/docs" className="gap-2">
              Get started 
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/components" className="gap-2">
              Browse components
            </Link>
          </Button>
        </div>

        <div className="mt-12 w-full max-w-3xl mx-auto overflow-hidden rounded-lg border bg-card shadow">
          <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-destructive/70"></div>
            <div className="h-2 w-2 rounded-full bg-accent/70"></div>
            <div className="h-2 w-2 rounded-full bg-primary/70"></div>
            <div className="text-xs text-muted-foreground ml-2">Terminal</div>
          </div>
          <div className="relative bg-muted/20 p-4 font-mono text-sm overflow-x-auto">
            <pre className="text-left">
              <code className="flex flex-col">
                <span className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-muted-foreground" /> 
                  <span className="text-muted-foreground">$</span> 
                  <span className="text-foreground">npx agent-cli@latest init</span>
                </span>
                <span className="mt-2 flex items-center gap-2">
                  <span className="text-accent">✓</span> 
                  <span>Would you like to install search agent? <span className="text-primary font-bold">Yes</span></span>
                </span>
                <span className="mt-2 flex items-center gap-2">
                  <span className="text-accent">✓</span> 
                  <span>Installing dependencies...</span>
                </span>
                <span className="mt-2 flex items-center gap-2">
                  <span className="text-accent">✓</span> 
                  <span>Creating component files...</span>
                </span>
                <span className="mt-2 flex items-center gap-2">
                  <span className="text-accent">✓</span> 
                  <span>Success! Agent installed and ready to use.</span>
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
