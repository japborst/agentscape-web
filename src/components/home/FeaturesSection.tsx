
import React from 'react';
import { Code, Database, Layout, Puzzle, Shield, Zap } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Puzzle className="h-8 w-8 text-primary" />,
      title: 'Composable',
      description: 'Combine different agents for powerful workflows. Build exactly what you need.'
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Developer-first',
      description: 'Designed to integrate seamlessly with your existing codebase and workflow.'
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Fast & Efficient',
      description: 'Optimized for performance with minimal latency and resource overhead.'
    },
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      title: 'Customizable',
      description: 'Easily style and configure each agent to match your application needs.'
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'Multiple LLM Support',
      description: 'Works with your favorite LLM providers including OpenAI, Anthropic, and more.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Production Ready',
      description: 'Thoroughly tested and ready for deployment in production environments.'
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need to build AI-powered apps
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            AgentScape provides the foundation for your AI interfaces, with production-ready
            components that are easy to implement and customize.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col p-6 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
