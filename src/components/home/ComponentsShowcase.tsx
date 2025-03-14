
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bot, Search, MessageSquare, Code2, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ComponentsShowcase = () => {
  const components = [
    {
      title: 'Search Agent',
      description: 'AI-powered search with natural language understanding and semantic retrieval.',
      icon: <Search className="h-5 w-5" />,
      tags: ['Retrieval', 'Search', 'Web'],
      path: '/components/search-agent'
    },
    {
      title: 'Chat Agent',
      description: 'Conversational interface with context-awareness and streaming responses.',
      icon: <MessageSquare className="h-5 w-5" />,
      tags: ['Dialog', 'Streaming', 'Memory'],
      path: '/components/chat-agent'
    },
    {
      title: 'Code Agent',
      description: 'Code generation, review, and explanation with language model assistance.',
      icon: <Code2 className="h-5 w-5" />,
      tags: ['Code', 'Generation', 'Analysis'],
      path: '/components/code-agent'
    },
    {
      title: 'Function Agent',
      description: 'Versatile tool-using agent for executing functions and API calls.',
      icon: <Bot className="h-5 w-5" />,
      tags: ['Functions', 'Tools', 'Automation'],
      path: '/components/function-agent'
    },
    {
      title: 'Reasoning Agent',
      description: 'Step-by-step reasoning agent with chain-of-thought capabilities.',
      icon: <BrainCircuit className="h-5 w-5" />,
      tags: ['Reasoning', 'Planning', 'Logic'],
      path: '/components/reasoning-agent'
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Components</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Explore our collection of production-ready AI agent components, designed for modern applications.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/components" className="gap-2">
              View all components <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <Card key={index} className="transition-all hover:shadow-md hover:border-primary/50 overflow-hidden bg-card">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-primary/10 p-2 rounded-md">
                    {component.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{component.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{component.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {component.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="gap-1 text-primary" asChild>
                  <Link to={component.path}>
                    View details <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
