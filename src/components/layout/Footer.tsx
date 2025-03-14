
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const sections = [
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Components', href: '/components' },
        { label: 'Examples', href: '/examples' },
        { label: 'GitHub', href: 'https://github.com' },
      ]
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord Server', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'Contributors', href: '#' },
        { label: 'Open Collective', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ]
    }
  ];

  return (
    <footer className="border-t border-border/40 bg-muted/30 py-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-6 w-6 bg-primary rounded-sm flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-sm">A</span>
              </div>
              <span className="font-bold">AgentScape</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Beautiful, accessible, and customizable AI agent components that you can install with CLI and drop into your apps.
            </p>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-medium mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-border/40 mt-10 pt-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AgentScape. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
