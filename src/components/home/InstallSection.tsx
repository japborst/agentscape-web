import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy, Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const InstallSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const installCommand = "uv tool install agentscape";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "Installation command copied to clipboard",
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-2 bg-muted rounded-full mb-4">
            <Terminal className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Installation is simple
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mb-8">
            Get started with Agentscape in seconds. Use Python's uv package manager to install
            components directly into your project.
          </p>

          <div className="w-full max-w-2xl mx-auto bg-muted rounded-lg overflow-hidden mb-8">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <Terminal className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium">Terminal</span>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <div className="bg-card p-4 border-t">
              <pre className="text-sm overflow-x-auto">
                <code>$ {installCommand}</code>
              </pre>
            </div>
          </div>

          <div className="flex flex-col space-y-2 text-left bg-muted/50 p-4 rounded-lg border border-border/50 w-full max-w-2xl mx-auto">
            <p className="text-sm font-medium">After installation, import and use:</p>
            <pre className="bg-card p-3 rounded text-sm overflow-x-auto">
              <code>{`from agentscape.agents import SearchAgent

# Create a search agent to find specific information
result = SearchAgent.run("Find recent breakthroughs in quantum computing and summarize them")`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
