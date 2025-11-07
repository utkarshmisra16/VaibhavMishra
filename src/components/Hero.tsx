import { useEffect, useState } from 'react';
import { ArrowDown, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';
import heroAvatar from '@/assets/hero-avatar.png';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const titles = [
    'HR Consulting Professional',
    'Recruitment Specialist',
    'Training Expert',
    'People Solutions Leader'
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setDisplayText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 animate-scale-in">
                Welcome to My Portfolio
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Vaibhav Mishra
              </span>
            </h1>

            <div className="h-16 sm:h-20 md:h-24">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Transforming businesses through strategic human capital management. 
              Specializing in recruitment, training, and comprehensive HR solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={scrollToWork}
                size="lg"
                variant="gradient"
                className="px-8 py-6 text-lg"
              >
                View My Services
              </Button>
              <Button
                onClick={scrollToContact}
                variant="hero"
                size="lg"
                className="px-8 py-6 text-lg"
              >
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://www.linkedin.com/in/atmanirbharchanakya/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-foreground hover:bg-primary hover:text-white hover:border-primary smooth-transition hover:scale-110 active:scale-95"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:Mishravaibhav1403@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-foreground hover:bg-primary hover:text-white hover:border-primary smooth-transition hover:scale-110 active:scale-95"
                aria-label="Mail"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Avatar Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,hsl(42_95%_60%_/_0.45),hsl(28_60%_40%_/_0.1)_75%)]"></div>
              <img
                src={heroAvatar}
                alt="Vaibhav Mishra"
                className="relative w-96 h-96 m-7 sm:w-80 sm:h-80 lg:w- 96 lg:h-96 rounded-full object-cover border-4 border-primary/40 shadow-amber-600"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
