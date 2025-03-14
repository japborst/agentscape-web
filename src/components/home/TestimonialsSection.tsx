
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "AgentScape has completely transformed how we build AI features. The components are beautifully designed and incredibly easy to integrate.",
      name: "Alex Rivera",
      title: "CTO at FutureStack",
      avatar: "AR"
    },
    {
      quote: "As a solo developer, AgentScape saved me months of work. I was able to add sophisticated AI capabilities to my app in just a few days.",
      name: "Sarah Chen",
      title: "Indie Developer",
      avatar: "SC"
    },
    {
      quote: "The documentation is excellent and the component API is so intuitive. This is how all AI libraries should be built.",
      name: "Michael Osei",
      title: "Lead Engineer at DevTools",
      avatar: "MO"
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute h-[400px] w-[600px] rounded-full bg-primary/5 blur-[130px] top-40 -right-40"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <Quote className="h-10 w-10 text-primary mx-auto mb-4 opacity-70" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Loved by developers
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
            Here's what the community is saying about AgentScape components.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <p className="mb-6 italic text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
