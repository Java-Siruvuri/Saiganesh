  import { motion } from 'framer-motion';
  import CountUp from 'react-countup';
 import { Globe, Brain, Database, Code2, Layers, CheckSquare } from 'lucide-react';



  const stats = [
    { number: 17, label: 'Projects Accomplished', suffix: '+' },
    { number: 6, label: 'Years Experience', suffix: '+' },
    { number: 95, label: 'Production Uptime', suffix: '%' },
    { number: 20, label: 'Tech Stack Tools', suffix: '+' },
  ];


  const skills = [
    {
      name: 'Architecture & distributed systems', icon: Layers,
      description: 'Design modular services, event-driven workflows, and secure APIs for enterprise applications.',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'RabbitMQ', 'REST', 'GraphQL', 'WebSockets'],
    },
    {
      name: 'Frontend & experience engineering', icon: Globe,
      description: 'Build reusable component systems and responsive interfaces with predictable application state.',
      technologies: ['React.js', 'AEM', 'Redux Toolkit', 'React Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      name: 'Generative AI integration', icon: Brain,
      description: 'Integrate context-aware conversations and AI workflows into enterprise customer experiences.',
      technologies: ['Claude AI', 'LLM APIs', 'Prompt design', 'AI orchestration'],
    },
    {
      name: 'Cloud & delivery automation', icon: Code2,
      description: 'Deliver containerized applications with repeatable infrastructure and automated release pipelines.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitLab CI', 'Jenkins', 'Maven'],
    },
    {
      name: 'Security, data & reliability', icon: Database,
      description: 'Secure service access, optimize data performance, and make production behavior observable.',
      technologies: ['Spring Security', 'OAuth 2.0', 'JWT', 'RBAC', 'PostgreSQL', 'Redis', 'HikariCP', 'ELK', 'CloudWatch', 'Prometheus', 'Grafana'],
    },
    {
      name: 'Engineering quality & delivery', icon: CheckSquare,
      description: 'Support maintainable releases through automated testing, reusable engineering patterns, and structured delivery practices.',
      technologies: ['JUnit', 'Mockito', 'Selenium', 'Agile', 'JIRA', 'Confluence'],
    },
  ];



    const experiences = [
      {
      year: 'Oct 2025 - Present',
      title: 'Senior Software Developer',
      company: 'Prudential, Newark',
      description:
      'At Prudential, I designed and developed scalable, enterprise-grade applications by integrating Claude AI to enable intelligent, context-aware interactions and automated insights. I architected reusable, configurable React.js components and integrated them with Adobe Experience Manager (AEM) through custom Design System components, ensuring consistency and maintainability across applications. I developed AI-powered conversational interfaces, implemented custom React hooks for seamless API integrations, and leveraged Redux and React Context API for efficient state management, session persistence, and real-time updates. Additionally, I optimized Spring Boot microservices to enhance backend performance, reliability, and scalability while implementing secure authentication and authorization using OAuth 2.0 and JWT. My contributions focused on delivering secure, high-performance, and user-centric digital experiences by combining Generative AI, modern frontend architecture, and robust backend engineering.',
    },
    {
      year: 'Feb 2024 - Sep 2025',
      title: 'Senior Software Developer',
      company: 'Encore, Illinois',
      description:
      'At Encore, I engineered a real-time quality inspection and factory floor management platform using Spring Boot, React.js, and Apache Kafka, enabling efficient manufacturing operations and data-driven decision-making. I designed and developed interactive dashboards with React, Redux Toolkit, and Tailwind CSS, streamlining reporting workflows and improving quality assurance efficiency. I architected scalable backend APIs integrated with ERP systems and implemented WebSocket-based real-time alerts to accelerate responses to critical sensor events. I containerized microservices using Docker, deployed cloud-native solutions on AWS, and automated build and deployment workflows through GitLab CI and Jenkins. Additionally, I strengthened application security using Spring Security, AWS IAM, and JWT, while leveraging Amazon CloudWatch and the ELK Stack to enhance system observability, streamline troubleshooting, and reduce incident resolution time.',
    },
    {
      year: 'Jan 2021 - Aug 2023',
      title: 'Software Developer',
      company: 'Tata Consultancy Services | Hyderabad',
      description:
      'At Tata Consultancy Services, I took end-to-end technical ownership of developing a cloud-native Manufacturing Execution System (MES), driving architectural design, full-stack implementation, and deployment using React.js, Spring Boot, Apache Kafka, and WebSockets. I designed scalable, event-driven backend services and real-time dashboards to modernize shop-floor quality assurance, automate validation workflows, and improve operational visibility. I established secure API architecture using Spring Security, JWT, and role-based access control (RBAC), while optimizing PostgreSQL queries and HikariCP connection pooling to enhance application performance. I owned microservice containerization with Docker, streamlined CI/CD workflows using GitLab CI and Jenkins, and strengthened production reliability through Amazon CloudWatch and the ELK Stack. Throughout the project, I collaborated with cross-functional teams to translate complex manufacturing requirements into maintainable, high-performance solutions, driving improvements in QA efficiency, deployment consistency, and incident resolution.',
    },
//     {
//       year: 'Nov 2019 - May 2021',
//       title: 'Software Developer',
//       company: 'Independent Bank, Michigan',
//       description:
//       'I played a key role in modernizing an enterprise digital banking platform, taking ownership of full-stack development, backend service optimization, and secure system integrations. I designed and developed responsive, cross-platform user interfaces using React.js and Bootstrap, contributing to a 40% increase in user session duration. I engineered scalable Spring Boot microservices to enable real-time transaction visibility and implemented event-driven processing using Apache Kafka and WebSockets to support instant fraud detection and alerts. I optimized high-frequency API performance through Redis caching, ensuring efficient data retrieval during peak transaction loads. I strengthened application security by implementing Spring Security, JWT authentication, and role-based access controls to protect sensitive financial data. Additionally, I streamlined CI/CD pipelines using Jenkins, Git, and Maven, ensuring reliable deployments across multiple environments. I enhanced system observability and operational reliability through ELK Stack monitoring while collaborating with cross-functional teams to deliver secure, scalable, and high-performance banking solutions.',
//     },
//     {
//       year: 'Oct 2018 - Oct 2019',
//       title: 'Software Engineer',
//       company: 'Kinara Capital, Bengaluru',
//       description:
//       'I contributed to the development of a scalable digital lending platform for micro-entrepreneurs, gaining hands-on experience in full-stack development, backend integrations, and application performance optimization. I developed responsive React.js interfaces with Formik-based onboarding forms and validation mechanisms to improve data accuracy and streamline loan processing. I built interactive dashboards to track loan disbursements and key performance indicators, supporting branch-level decision-making. On the backend, I developed RESTful APIs using Spring Boot and integrated Aadhaar and PAN verification services to automate KYC workflows, contributing to a 40% increase in daily applicant throughput. I optimized MongoDB aggregation queries to improve application performance and implemented secure authentication and authorization using OAuth 2.0, JWT, and Spring Security. I also worked with Docker and GitLab CI/CD pipelines to support containerized deployments and application reliability. Throughout the project, I collaborated with senior developers and cross-functional teams, strengthening my expertise in enterprise application development, secure API design, and scalable software engineering practices',
//     },
  ];


export const About = () => (
  <section id="about" className="py-10 scroll-mt-24 relative overflow-hidden">
    <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Full Stack Software Engineer with 5+ years of experience designing, developing, and delivering enterprise-grade applications across diverse projects. I specialize in Java, Spring Boot, React.js, Angular, AWS, and microservices architecture, with expertise in building secure RESTful APIs, scalable backend systems, and responsive user interfaces.
            I've collaborated with cross-functional teams to translate complex business requirements into reliable, production-ready solutions. My experience also includes Generative AI integration with Claude AI, cloud-native development, system design, and performance optimization, with a strong focus on clean architecture, maintainability, and engineering best practices.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-glow-primary transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  <CountUp
                    end={stat.number}
                    duration={2}
                    delay={index * 0.2}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

    </div>
  </section>
);

export const TechnicalSkills = () => (
  <section id="skills" className="py-10 scroll-mt-24 relative overflow-hidden">
    <div className="container mx-auto px-6">
          {/* Engineering capabilities */}
          <section aria-labelledby="engineering-heading" className="mx-auto mb-20 max-w-6xl">
            <div className="mb-8 max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Technical expertise</p>
              <h3 id="engineering-heading" className="mb-4 text-3xl md:text-4xl font-poppins font-bold tracking-tight">
                Technical <span className="text-secondary">Skills</span>
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                From system design to production delivery: building secure, maintainable platforms across enterprise AI, manufacturing, and financial services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.article
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="flex flex-col rounded-2xl border border-[#263345] bg-[#141619] p-6 transition-colors hover:border-secondary/50"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-lg border border-secondary/20 bg-secondary/10 p-2.5 text-secondary">
                      <skill.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                  </div>
                  <h4 className="mb-3 text-lg font-semibold leading-snug text-slate-100">{skill.name}</h4>
                  <p className="mb-5 text-sm leading-relaxed text-slate-400">{skill.description}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 border-t border-[#263345] pt-4" aria-label={`${skill.name} technologies`}>
                    {skill.technologies.map(technology => (
                      <li key={technology} className="rounded-md border border-slate-700/60 bg-slate-800/40 px-2.5 py-1 text-xs leading-relaxed text-slate-300">{technology}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </section>


    </div>
  </section>
);

export const ProfessionalExperience = () => (
  <section id="experience" className="py-10 scroll-mt-24 relative overflow-hidden">
    <div className="container mx-auto px-6">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-poppins font-bold text-center mb-12">
              Professional <span className="text-accent">Experience</span>
            </h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="p-6 rounded-xl bg-card border border-border hover:shadow-glow-accent transition-all duration-300 hover-bounce">
                      <span className="text-sm font-semibold text-accent">{exp.year}</span>
                      <h4 className="text-xl font-bold text-foreground mb-1">{exp.title}</h4>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
    </div>
  </section>
);

export const EducationCertifications = () => (
  <section id="education" className="py-10 scroll-mt-24 relative overflow-hidden">
    <div className="container mx-auto px-6">
          {/* Education Section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="mb-20"
>
  <h3 className="text-3xl font-poppins font-bold text-center mb-12">
    Education <span className="text-primary">& Certifications</span>
  </h3>

  <div className="space-y-8 max-w-full mx-auto">
    {/* Master's Degree */}
    <div className="p-6 bg-card border border-border rounded-xl hover:shadow-glow-primary transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <h4 className="text-xl font-bold text-foreground">
          Master of Science in Operations Management & Information Technology
        </h4>
        {/* <span className="text-sm font-semibold text-muted-foreground">
          Aug 2023 - May 2025
        </span> */}
      </div>
      <p className="text-muted-foreground">
        Northern Illinois University, Chicago, IL
      </p>
    </div>

    {/* Bachelor's Degree */}
    <div className="p-6 bg-card border border-border rounded-xl hover:shadow-glow-primary transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
        <h4 className="text-xl font-bold text-foreground">
          Bachelor of Technology in Computer Science
        </h4>
        {/* <span className="text-sm font-semibold text-muted-foreground">
          Oct 2017 - Jun 2021
        </span> */}
      </div>
      <p className="text-muted-foreground">
        Vignan Institute of Information and Technology, India
      </p>
    </div>
  </div>
</motion.div>




{/* Certification Badge */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="mb-20 text-center"
>
  <h3 className="text-3xl font-poppins font-bold text-center mb-6">
    Certification <span className="text-yellow-500">Badge</span>
  </h3>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
    <a
      href="https://www.credly.com/badges/9bb15b40-f99d-47cc-9f68-2f31d71ec7bf"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transition-transform duration-300"
    >
      <img
        src="/aws-certified-developer-associate.png"
        alt="AWS Certified Developer Associate"
        className="w-32 h-32 rounded-lg shadow-md border border-border"
      />
    </a>
    <p className="text-muted-foreground max-w-xs text-sm sm:text-base">
      <strong>AWS Certified Developer – Associate</strong><br />
      Demonstrates validated expertise in cloud development, deployment, and debugging on AWS infrastructure.
    </p>
  </div>
</motion.div>

    </div>
  </section>
);

export default About;
