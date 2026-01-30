  import { useEffect, useRef } from 'react';
  import { motion } from 'framer-motion';
  import CountUp from 'react-countup';
 import { Globe,Brain, Database, Code2, Settings, Smartphone, Server, Terminal, GitBranch, Box, Layers, CheckSquare, BarChart2, GitCommit, Send, HardDrive, LayoutDashboard } from 'lucide-react';

  const About = () => {
    const ref = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 12, label: 'Projects Accomplished', suffix: '+' },
    { number: 7, label: 'Years Experience', suffix: '+' },
    { number: 95, label: 'Production Uptime', suffix: '%' },
    { number: 20, label: 'Tech Stack Tools', suffix: '+' },
  ];


   const skills = [
  { name: 'Frontend (React.js, Tailwind)', percentage: 90, icon: Globe },
  { name: 'Backend (Java, Spring Boot)', percentage: 95, icon: Database },
  {name: 'AI Integration & GenAI (Claude AI, LLM APIs, Prompt Design)', percentage: 90, icon: Brain },   
  { name: 'Cloud & DevOps (AWS, Docker)', percentage: 85, icon: Code2 },
  { name: 'Microservices & Kafka', percentage: 88, icon: Settings },
  { name: 'WebSockets & Real-time Systems', percentage: 82, icon: Smartphone },
  { name: 'Security & Auth (Spring Security, JWT, RBAC)', percentage: 84, icon: Server },
  { name: 'Database Optimization (PostgreSQL, Redis, HikariCP)', percentage: 80, icon: Terminal },
  { name: 'CI/CD & Automation (GitLab CI, Jenkins, Maven)', percentage: 87, icon: GitBranch },
  { name: 'Containerization & Orchestration (Docker, Kubernetes)', percentage: 85, icon: Box },
  { name: 'API Development (RESTful APIs, GraphQL)', percentage: 92, icon: Layers },
  { name: 'Testing & Quality (JUnit, Mockito, Selenium)', percentage: 89, icon: CheckSquare },
  { name: 'Logging & Monitoring (ELK Stack, Prometheus, Grafana)', percentage: 86, icon: BarChart2 },
  { name: 'State Management (Redux Toolkit, React Hooks)', percentage: 91, icon: GitCommit },
  { name: 'Messaging & Streaming (Apache Kafka, RabbitMQ)', percentage: 88, icon: Send },
  { name: 'Infrastructure as Code (Terraform)', percentage: 80, icon: HardDrive },
  { name: 'Project Management & SDLC (Agile, JIRA, Confluence)', percentage: 85, icon: LayoutDashboard }
];



    const experiences = [
      {
      year: 'Oct 2025 - Present',
      title: 'Senior Software Developer',
      company: 'Prudential, Newark',
      description:
      'At Prudential, I integrated Claude AI into the platform to enable intelligent, context-aware interactions and automated insights. I designed and built custom reusable UI components using React.js, which were configurable and updatable through Adobe Experience Manager (AEM) by developing Design System (DS) components for consistent reuse across applications. I implemented custom React hooks for seamless API integrations and state handling, and developed interactive chat interfaces with rich illustrations, ensuring an intuitive user experience. I managed global application state using Redux and Context Store, enabling efficient data flow, session persistence, and real-time updates across AI-driven workflows. I optimized backend services with Spring Boot, enhancing performance and scalability to support AI workloads. Additionally, I ensured robust security measures by implementing OAuth2 and JWT for secure authentication and authorization across AI features.',
    },    
    {
      year: 'Feb 2024 - Sep 2025',
      title: 'Senior Software Developer',
      company: 'Encore, Illinois',
      description:
      'At Encore, I development of a real-time quality inspection and factory floor management platform using Spring Boot, React.js, and Kafka. I built dynamic dashboards with React, Redux Toolkit, and Tailwind, cutting manual reporting lag and improving QA accuracy. Backend APIs integrated with ERP systems and WebSocket-based alerts enabled faster response to sensor events. I containerized microservices via Docker and deployed them on AWS with CI/CD pipelines using GitLab CI and Jenkins. I also enforced secure access with Spring Security, IAM policies, and JWT while reducing incident resolution time using CloudWatch and ELK Stack monitoring.      ',
    },
    {
      year: 'Jun 2021 - Aug 2023',
      title: 'Software Developer',
      company: 'EVCO Plastics, Wisconsin',
      description:
      'At EVCO Plastics, I built a cloud-native manufacturing execution system using React.js, Spring Boot, Kafka, and WebSockets to digitize floor-level QA workflows. I developed React dashboards with real-time data visualizations, integrated Kafka-driven alerts, and boosted QA accuracy using dynamic validations. On the backend, I created REST APIs with Spring Boot and secured them using JWT and role-based access. PostgreSQL optimization and HikariCP helped reduce API response times. I containerized services with Docker and automated deployments using GitLab CI and Jenkins, significantly improving release cycles. Cloud observability was enhanced with ELK Stack and CloudWatch for faster error resolution.',
    },
    {
      year: 'Nov 2019 - May 2021',
      title: 'Software Developer',
      company: 'Independent Bank, Michigan',
      description:
      'Modernized a digital banking system by building responsive, cross-platform UIs using React.js and Bootstrap, resulting in a 40% increase in session duration. Designed backend services with Spring Boot for real-time transaction visibility and integrated Kafka producers with WebSocket listeners to enable instant fraud detection. Leveraged Redis caching to optimize high-frequency API response times during peak usage. Strengthened backend security using JWT and Spring Security for robust access control. Automated deployment pipelines with Jenkins, Git, and Maven, ensuring smooth CI/CD workflows. Enhanced observability and compliance by integrating ELK Stack monitoring and securing multi-environment deployment processes.',
    },
    {
      year: 'Oct 2018 - Oct 2019',
      title: 'Software Engineer',
      company: 'Kinara Capital, Bengaluru',
      description:
      'Developed a scalable digital lending solution tailored for micro-entrepreneurs, streamlining loan processing through secure, responsive React.js interfaces. Designed onboarding forms with Formik and validation logic to reduce rejection rates and improve data accuracy. Built real-time dashboards to track disbursals and KPIs, aiding branch-level decision-making. Integrated Aadhaar and PAN APIs into Spring Boot microservices, automating KYC checks and boosting daily applicant throughput by 40%. Enhanced backend performance through MongoDB aggregation optimizations. Enforced secure access with OAuth2, JWT, and Spring Security. Containerized the full stack with Docker and deployed via GitLab CI/CD, ensuring high availability during regional demand surges.',
    },
  ];


    return (
      <section id="about" className="py-5 relative overflow-hidden">
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
             Software Developer with 6+ years’ experience building scalable, AI-enabled applications using Spring Boot, React.js, Angular, and AWS—focused on integrating Claude AI, secure APIs, responsive UIs, and real-time business solutions.
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
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-poppins font-bold text-center mb-12">
              Technical <span className="text-secondary">Skills</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:shadow-glow-secondary transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-primary mr-4 group-hover:scale-110 transition-transform">
                      <skill.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <p className="text-muted-foreground">{skill.percentage}%</p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="mb-20"
>
  <h3 className="text-3xl font-poppins font-bold text-center mb-12">
    Education <span className="text-primary">Background</span>
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




          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-poppins font-bold text-center mb-12">
              Professional <span className="text-accent">Journey</span>
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
  };

  export default About;
