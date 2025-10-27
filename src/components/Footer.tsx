import { ArrowUp, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl md:text-2xl gradient-primary bg-clip-text rounded-full text-center text-white mb-4">
              Vaibhav Mishra
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Transforming businesses through strategic human capital management and excellence in HR solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base md:text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary smooth-transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary smooth-transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary smooth-transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary smooth-transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base md:text-lg">Services</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="text-muted-foreground">Recruitment</li>
              <li className="text-muted-foreground">Training & Development</li>
              <li className="text-muted-foreground">HR Consulting</li>
              <li className="text-muted-foreground">Performance Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base md:text-lg">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-white smooth-transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-white smooth-transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@vaibhavmishra.com"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-white smooth-transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Kanpur, Uttar Pradesh, India
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm md:text-base text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Vaibhav Mishra. All rights reserved.
          </p>
          <Button
            onClick={scrollToTop}
            size="icon"
            className="gradient-primary text-white hover:scale-110 smooth-transition"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
