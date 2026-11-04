import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProjectArchitecture from './ProjectArchitecture';
import useEmblaCarousel from 'embla-carousel-react';


const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const viewport = emblaApi.rootNode();
    let accumulatedDelta = 0;
    let lastScrollTime = -Infinity;
    let lastDirection = 0;
    let gestureTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleWheel = (event: WheelEvent) => {
      // Leave vertical scrolling and pinch-to-zoom to the browser.
      if (event.ctrlKey) return;
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (!horizontal && !event.shiftKey) return;

      const delta = horizontal ? event.deltaX : event.deltaY;
      if (!delta) return;
      event.preventDefault();
      setIsAutoplayEnabled(false);

      clearTimeout(gestureTimeout);
      gestureTimeout = setTimeout(() => {
        accumulatedDelta = 0;
      }, 200);

      const normalizedDelta = delta * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientWidth : 1);
      const direction = Math.sign(normalizedDelta);
      const now = performance.now();
      // Allow a direction change immediately; pace sustained scrolling so
      // momentum events don't queue several transitions at once.
      if (direction === lastDirection && now - lastScrollTime < 400) {
        accumulatedDelta = 0;
        return;
      }
      if (direction !== Math.sign(accumulatedDelta)) accumulatedDelta = 0;
      accumulatedDelta += normalizedDelta;
      if (Math.abs(accumulatedDelta) < 50) return;

      lastScrollTime = now;
      lastDirection = direction;
      accumulatedDelta = 0;
      if (direction > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
    };

    viewport.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      viewport.removeEventListener('wheel', handleWheel);
      clearTimeout(gestureTimeout);
    };
  }, [emblaApi]);

  // Autoplay effect
  useEffect(() => {
    if (!emblaApi || isHovered || !isAutoplayEnabled) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [emblaApi, isHovered, isAutoplayEnabled]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

const projects = [
  // {
  //   //id: 1,
  //   title: 'Factory QA',
  //   subtitle: 'Factory Floor QA Platform',
  //   summary: 'Developed a full-stack platform to digitize factory floor operations, replacing manual reporting with real-time, data-driven insights.',
  //   implementation: 'The system leveraged Spring Boot microservices for backend logic and a React.js frontend for an interactive dashboard. I implemented WebSocket-based UI updates and used Kafka for real-time machine telemetry, significantly reducing incident response time. The platform was containerized with Docker and deployed to AWS using CI/CD pipelines managed by GitLab CI and Jenkins, ensuring scalable and reliable multi-environment deployment. I also configured the ELK Stack and AWS CloudWatch for real-time performance monitoring and error diagnostics.',
  //   image: project1,
  //   technologies: ['React.js', 'Spring Boot', 'Kafka', 'PostgreSQL', 'AWS EC2'],
  
  //   featured: true,
  // },
  {
    //id: 2,
    title: 'Cloud-Native Manufacturing Execution System',
    architecture: 'mes',
    // subtitle: 'Digital Manufacturing MES',
    summary: 'Led the technical implementation of a cloud-native MES to digitize shop-floor quality inspections, automate validation workflows, and enable real-time production visibility.',
    implementation: 'Designed event-driven Spring Boot services with Kafka and WebSockets, developed interactive React dashboards, and implemented secure REST APIs with JWT and role-based access control. Optimized PostgreSQL queries and HikariCP connection pooling, automated Docker-based deployments using GitLab CI and Jenkins, and strengthened production monitoring through CloudWatch and the ELK Stack,End-to-end MES technical implementation,Event-driven services and PostgreSQL optimization,Secure APIs, containerized deployments, and monitoring',
    technologies: ['React.js', 'Spring Boot', 'Kafka', 'WebSocket', 'Docker'],
    featured: true,
  },
  {
    //id: 3,
    title: 'Real-Time Quality Intelligence Platform',
    architecture: 'quality',
    // subtitle: 'Real-Time Quality Intelligence Platform',
    summary: 'Engineered an event-driven manufacturing platform connecting factory operations, ERP systems, and real-time quality monitoring through Spring Boot, React.js, and Apache Kafka.',
    implementation: 'Developed interactive React dashboards with Redux Toolkit and Tailwind CSS, integrated ERP-backed Spring Boot services, and implemented Kafka and WebSocket workflows for real-time sensor alerts. Deployed containerized services on AWS with automated CI/CD pipelines and centralized monitoring to improve operational visibility, troubleshooting, and release reliability,Event-driven microservices and ERP integrations,Real-time sensor monitoring and WebSocket alerts,AWS deployments, CI/CD automation, and observability',
    technologies: ['React.js', 'Spring Boot', 'Kafka', 'Redis', 'websockets', 'AWS', 'Docker'],
    
    featured: false,
  },
    {
    //id: 4,
    title: 'Enterprise Generative AI Platform',
    architecture: 'ai',
    // subtitle: 'Enterprise Generative AI Platform',
    summary: 'Designed and developed an enterprise AI platform integrating Claude AI with React.js, AEM, and Spring Boot to deliver intelligent, context-aware customer experiences.',
    implementation:'Engineered reusable AEM-integrated design system components, AI-powered conversational interfaces, and secure Spring Boot integrations. Implemented custom React hooks, centralized state management, and session persistence to improve UI consistency, maintainability, and responsiveness across enterprise AI workflows.Reusable, configurable React and AEM component architecture,context-aware AI conversations and state management,Secure OAuth 2.0 and JWT-based service integration',
    technologies: ['React.js', 'Spring Boot', 'Claude AI', 'Redis', 'AEM','Redux','OAuth 2.0'],
    featured: false,
  },
];

  const scrollPrev = () => {
    setIsAutoplayEnabled(false);
    emblaApi?.scrollPrev();
  };
  const scrollNext = () => {
    setIsAutoplayEnabled(false);
    emblaApi?.scrollNext();
  };

  return (
    <section id="projects" className="py-5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Featured <span className="bg-gradient-cosmic bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent works that showcase my skills in 
            full-stack development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Carousel Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-bounce"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-bounce"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Projects Carousel */}
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex items-start">
              {projects.map((project, index) => (
                <div
                  key={index}
                  role="group"
                  aria-label={`${project.title}. Press Enter to center this project.`}
                  tabIndex={0}
                  onClick={(event) => {
                    if ((event.target as HTMLElement).closest('a, button, summary, details')) return;
                    setIsAutoplayEnabled(false);
                    emblaApi?.scrollTo(index);
                  }}
                  onKeyDown={(event) => {
                    if (event.target !== event.currentTarget) return;
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setIsAutoplayEnabled(false);
                      emblaApi?.scrollTo(index);
                    }
                  }}
                  className="flex-[0_0_92%] sm:flex-[0_0_75%] md:flex-[0_0_65%] lg:flex-[0_0_55%] max-w-[680px] min-w-0 px-3 cursor-pointer rounded-[20px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2196F3] focus-visible:outline-offset-[-2px]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-[20px] bg-[#141619] border border-[#263345] hover:border-[#2196F3] hover:shadow-[0_0_24px_rgba(33,150,243,0.18)] transition-[border-color,box-shadow] duration-300"
                  >
                    <ProjectArchitecture architecture={project.architecture} />

                    {/* Project Info */}
                    <div className="p-5">
                      <h3 className="text-[26px] md:text-[30px] font-poppins font-bold text-[#2196F3] mb-3 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-[#94A3B8] text-[15px] md:text-[17px] mb-4 leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-[#08C8B5] text-[#141619] hover:bg-[#08C8B5] border-transparent cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <details
                        className="group/case border-t border-[#263345] pt-4"
                        onToggle={(event) => {
                          if (event.currentTarget.open) setIsAutoplayEnabled(false);
                          emblaApi?.reInit();
                        }}
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded text-[#2196F3] font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2196F3] [&::-webkit-details-marker]:hidden">
                          View case study
                          <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform group-open/case:rotate-180" />
                        </summary>
                        <div className="pt-4 text-[15px] md:text-[17px] leading-relaxed text-[#94A3B8]">
                          <h4 className="mb-2 font-semibold text-[#2196F3]">Implementation and impact</h4>
                          <p>{project.implementation}</p>
                        </div>
                      </details>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Projects;
