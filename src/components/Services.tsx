import { useEffect, useRef, useState } from 'react';
import { Users, GraduationCap, Briefcase, FileText, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Users,
    title: 'Executive Recruitment',
    description: 'End-to-end recruitment solutions including mandate understanding, sourcing, screening, and coordination.',
    features: ['Talent Acquisition', 'Profile Screening', 'Interview Coordination', 'Joining Support'],
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Comprehensive training programs designed to enhance team capabilities and drive performance.',
    features: ['Sales Training', 'POSH Training', 'Cultural Training', 'Team Development'],
  },
  {
    icon: Briefcase,
    title: 'HR Consulting',
    description: 'Strategic HR advisory services to optimize your human capital management.',
    features: ['HR Audit', 'Turnkey Projects', 'Policy Development', 'HR Outsourcing'],
  },
  {
    icon: TrendingUp,
    title: 'Performance Management',
    description: 'Design and implement performance management systems that drive results.',
    features: ['Goal Setting', 'Performance Reviews', 'KPI Development', 'Feedback Systems'],
  },
  {
    icon: FileText,
    title: 'HR Documentation',
    description: 'Complete documentation and compliance solutions for your HR needs.',
    features: ['Employee Handbooks', 'Job Descriptions', 'HR Policies', 'Compliance'],
  },
  {
    icon: Award,
    title: 'Employee Engagement',
    description: 'Build engaged, motivated teams through strategic engagement initiatives.',
    features: ['Engagement Surveys', 'Reward Programs', 'Team Building', 'Culture Development'],
  },
];

export const Services = () => {
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
    <section id="services" className="py-16 md:py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive HR solutions tailored to your business needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl smooth-transition border-2 hover:border-primary/50 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm md:text-base text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Us?</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering exceptional results through proven expertise and commitment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center p-8 md:p-10 bg-card border-2 border-border rounded-2xl hover:scale-105 smooth-transition hover:border-primary/30 group card-shadow">
              <div className="mb-4 inline-flex items-center justify-center w-40 h-25 rounded-full gradient-primary">
                <span className="text-3xl font-bold text-white px-3">15+</span>
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-primary smooth-transition">Years of Excellence</h4>
              <p className="text-sm md:text-base text-muted-foreground">
                Proven track record in HR consulting across multiple industries
              </p>
            </div>
            <div className="text-center p-8 md:p-10 bg-card border-2 border-border rounded-2xl hover:scale-105 smooth-transition hover:border-primary/30 group card-shadow">
              <div className="mb-4 inline-flex items-center justify-center w-40 h-25 rounded-full gradient-primary">
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-primary smooth-transition">Organizations Served</h4>
              <p className="text-sm md:text-base text-muted-foreground">
                Trusted partner for businesses from startups to Fortune 500 companies
              </p>
            </div>
            <div className="text-center p-8 md:p-10 bg-card border-2 border-border rounded-2xl hover:scale-105 smooth-transition hover:border-primary/30 group card-shadow">
              <div className="mb-4 inline-flex items-center justify-center w-40 h-25 rounded-full gradient-primary">
                <span className="text-3xl font-bold text-white">98%</span>
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-primary smooth-transition">Client Satisfaction</h4>
              <p className="text-sm md:text-base text-muted-foreground">
                Consistently exceeding expectations with tailored HR solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
