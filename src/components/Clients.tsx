import { useEffect, useRef, useState } from 'react';

const clients = [
  { name: 'American Express', logo: 'https://logo.clearbit.com/americanexpress.com' },
  { name: 'Birla Sun Life', logo: 'https://logo.clearbit.com/birlasunlife.com' },
  { name: 'Reliance', logo: 'https://logo.clearbit.com/ril.com' },
  { name: 'Toshiba', logo: 'https://logo.clearbit.com/toshiba.com' },
  { name: 'Larsen & Toubro', logo: 'https://logo.clearbit.com/larsentoubro.com' },
  { name: 'Fortis Hospitals', logo: 'https://logo.clearbit.com/fortishealthcare.com' },
  { name: 'Max Life', logo: 'https://logo.clearbit.com/maxlifeinsurance.com' },
  { name: 'Honda', logo: 'https://logo.clearbit.com/honda.com' },
  { name: 'JCB', logo: 'https://logo.clearbit.com/jcb.com' },
  { name: 'Carrier', logo: 'https://logo.clearbit.com/carrier.com' },
  { name: 'Travelex', logo: 'https://logo.clearbit.com/travelex.com' },
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Flipkart', logo: 'https://logo.clearbit.com/flipkart.com' },
  { name: 'P&G', logo: 'https://logo.clearbit.com/pg.com' },
  { name: 'Hero', logo: 'https://logo.clearbit.com/heromotocorp.com' },
  { name: 'Amul', logo: 'https://logo.clearbit.com/amul.com' },
  { name: 'HCL', logo: 'https://logo.clearbit.com/hcltech.com' },
  { name: 'Honeywell', logo: 'https://logo.clearbit.com/honeywell.com' },
];

export const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="clients" className="py-16 md:py-24 bg-muted border-t border-border" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Proud to work with some of the world's most respected organizations
          </p>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border p-6 md:p-8 rounded-xl flex flex-col items-center justify-center hover:scale-105 smooth-transition hover:border-primary/50 group card-shadow"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 smooth-transition"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{client.name.charAt(0)}</span>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-xs md:text-sm text-center text-foreground/80 group-hover:text-primary smooth-transition">{client.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-block px-6 py-3 rounded-full gradient-primary">
            <p className="text-white font-semibold text-base md:text-lg">
              500+ Organizations Worldwide
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6 md:p-8 bg-card border border-border rounded-xl card-shadow">
            <h4 className="text-lg md:text-xl font-bold mb-2">Multi-Industry Presence</h4>
            <p className="text-sm md:text-base text-muted-foreground">
              IT, Finance, Healthcare, Manufacturing, Retail & More
            </p>
          </div>
          <div className="text-center p-6 md:p-8 bg-card border border-border rounded-xl card-shadow">
            <h4 className="text-lg md:text-xl font-bold mb-2">Global Reach</h4>
            <p className="text-sm md:text-base text-muted-foreground">
              Serving clients across multiple countries and regions
            </p>
          </div>
          <div className="text-center p-6 md:p-8 bg-card border border-border rounded-xl card-shadow">
            <h4 className="text-lg md:text-xl font-bold mb-2">Long-term Partnerships</h4>
            <p className="text-sm md:text-base text-muted-foreground">
              Building lasting relationships with sustained value delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
