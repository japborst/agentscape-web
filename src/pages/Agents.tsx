
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, MessageSquare, Code2, BrainCircuit, Bot, ExternalLink } from "lucide-react";

const Agents = () => {
  const agents = [
    {
      title: "Search Agent",
      description: "AI-powered search with natural language understanding and semantic retrieval.",
      longDescription: "Connect to data sources and enable users to search through documents, knowledge bases, and websites with natural language queries. Features include relevance ranking, citation generation, and contextual understanding.",
      icon: <Search className="h-6 w-6" />,
      tags: ["Retrieval", "Search", "Web"],
      path: "/components/search-agent",
      usage: `import { SearchAgent } from "agentscape/agents";\n\nconst MyComponent = () => {\n  return (\n    <SearchAgent \n      sources={["docs", "knowledge-base"]} \n      apiKey={process.env.API_KEY}\n    />\n  );\n};`,
    },
    {
      title: "Chat Agent",
      description: "Conversational interface with context-awareness and streaming responses.",
      longDescription: "Build interactive chat experiences with streaming responses, message history, and contextual awareness. Perfect for customer support, interactive assistants, and conversational interfaces.",
      icon: <MessageSquare className="h-6 w-6" />,
      tags: ["Dialog", "Streaming", "Memory"],
      path: "/components/chat-agent",
      usage: `import { ChatAgent } from "agentscape/agents";\n\nconst MyComponent = () => {\n  return (\n    <ChatAgent \n      systemPrompt="You are a helpful assistant" \n      apiKey={process.env.API_KEY}\n    />\n  );\n};`,
    },
    {
      title: "Code Agent",
      description: "Code generation, review, and explanation with language model assistance.",
      longDescription: "Generate, review, and explain code with specialized language models. Features syntax highlighting, contextual suggestions, and language-specific optimizations for various programming languages.",
      icon: <Code2 className="h-6 w-6" />,
      tags: ["Code", "Generation", "Analysis"],
      path: "/components/code-agent",
      usage: `import { CodeAgent } from "agentscape/agents";\n\nconst MyComponent = () => {\n  return (\n    <CodeAgent \n      language="python" \n      apiKey={process.env.API_KEY}\n    />\n  );\n};`,
    },
    {
      title: "Function Agent",
      description: "Versatile tool-using agent for executing functions and API calls.",
      longDescription: "Connect AI agents to your backend services and APIs. Define functions that the agent can use to perform actions, retrieve data, and interact with other systems through a type-safe interface.",
      icon: <Bot className="h-6 w-6" />,
      tags: ["Functions", "Tools", "Automation"],
      path: "/components/function-agent",
      usage: `import { FunctionAgent } from "agentscape/agents";\n\nconst MyComponent = () => {\n  return (\n    <FunctionAgent \n      functions={[searchProducts, addToCart]} \n      apiKey={process.env.API_KEY}\n    />\n  );\n};`,
    },
    {
      title: "Reasoning Agent",
      description: "Step-by-step reasoning agent with chain-of-thought capabilities.",
      longDescription: "Enable complex problem solving with step-by-step reasoning and chain-of-thought capabilities. Useful for planning, decision making, and explaining complex concepts with logical steps.",
      icon: <BrainCircuit className="h-6 w-6" />,
      tags: ["Reasoning", "Planning", "Logic"],
      path: "/components/reasoning-agent",
      usage: `import { ReasoningAgent } from "agentscape/agents";\n\nconst MyComponent = () => {\n  return (\n    <ReasoningAgent \n      showSteps={true} \n      apiKey={process.env.API_KEY}\n    />\n  );\n};`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-gradient-to-b from-background to-background/60">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                AGENTSCAPE AGENTS
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                AI Agent Components for Your Applications
              </h1>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Ready-to-use, customizable AI agent components with Python-based backend integration.
                Start building with minimal configuration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" asChild>
                  <Link to="/docs/installation">
                    Get Started
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/japborst/agentscape" target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Agents List */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-12">
                {agents.map((agent, index) => (
                  <Card key={index} className="flex flex-col md:flex-row overflow-hidden shadow-md border-primary/10">
                    <div className="md:w-1/3 p-6 bg-primary/5 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/10 p-3 rounded-md">
                          {agent.icon}
                        </div>
                        <CardTitle className="text-2xl">{agent.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-4">{agent.longDescription}</p>
                      <div className="flex flex-wrap gap-2 mt-auto pt-4">
                        {agent.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-lg font-medium mb-4">Installation</h3>
                      <div className="bg-muted/70 rounded-lg p-3 font-mono text-sm mb-6 overflow-x-auto">
                        <code>uv tool install agentscape</code>
                      </div>
                      
                      <h3 className="text-lg font-medium mb-4">Usage</h3>
                      <div className="bg-muted/70 rounded-lg p-3 font-mono text-sm mb-6 whitespace-pre overflow-x-auto">
                        <code>{agent.usage}</code>
                      </div>
                      
                      <div className="flex justify-between items-center mt-auto">
                        <Button variant="ghost" size="sm" className="gap-1 text-primary" asChild>
                          <Link to={agent.path}>
                            View documentation <ArrowRight className="h-3 w-3" />
                          </Link>
                        </Button>
                        
                        <Button variant="outline" size="sm" className="gap-1" asChild>
                          <a href={`https://github.com/japborst/agentscape/tree/main/agents/${agent.title.toLowerCase().replace(' ', '-')}`} target="_blank" rel="noreferrer">
                            View source <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Agents;
