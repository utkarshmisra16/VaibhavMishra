import { useEffect, useRef, useState } from 'react';
import { Award, Users, Target, TrendingUp, Briefcase, GraduationCap, LineChart, UserCheck, Heart, FileCheck } from 'lucide-react';

const skills = [
  { name: 'Recruitment & Talent Acquisition', icon: UserCheck, level: 'Expert' },
  { name: 'HR Consulting & Strategy', icon: Briefcase, level: 'Expert' },
  { name: 'Training & Development', icon: GraduationCap, level: 'Advanced' },
  { name: 'Performance Management', icon: LineChart, level: 'Advanced' },
  { name: 'Employee Engagement', icon: Heart, level: 'Expert' },
  { name: 'HR Documentation & Compliance', icon: FileCheck, level: 'Advanced' },
];

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Target, value: '1000+', label: 'Projects Completed' },
  { icon: TrendingUp, value: '98%', label: 'Success Rate' },
];

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section id="about" className="py-16 md:py-24 bg-muted border-t border-border" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate HR professional dedicated to delivering excellence in human capital solutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-card border border-border p-6 rounded-xl text-center hover:scale-105 smooth-transition card-shadow ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-primary" />
              <div className="text-2xl md:text-3xl font-bold gradient-primary bg-clip-text rounded-2xl text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Living Our Values, Delivering Excellence
            </h3>
            <div className="space-y-4 text-muted-foreground text-base md:text-lg">
              <p>
                With over 15 years of experience in HR consulting, I've helped organizations 
                transform their human capital strategies and achieve sustainable growth.
              </p>
              <p>
                My approach combines <strong>integrity, trust, and openness</strong> with a 
                deep commitment to client success. I believe in delivering practical, flexible, 
                and committed solutions that drive real results.
              </p>
              <p>
                Specializing in recruitment, training, and comprehensive HR solutions, I work 
                with leading businesses across multiple industries to build high-performing teams 
                and create cultures of excellence.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-primary/10">
                <h4 className="font-semibold text-primary mb-2">Core Value</h4>
                <p className="text-sm text-muted-foreground">Integrity & Trust</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/10">
                <h4 className="font-semibold text-secondary mb-2">Commitment</h4>
                <p className="text-sm text-muted-foreground">24-Hour Response</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className={isVisible ? 'animate-slide-in-right' : 'opacity-0'}>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Core Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card border border-border p-5 rounded-xl hover:scale-105 smooth-transition card-shadow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 smooth-transition">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm md:text-base mb-2">
                        {skill.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                          skill.level === 'Expert' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-secondary/20 text-secondary'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
