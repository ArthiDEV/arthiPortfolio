import React, { useState, useEffect, useMemo, useCallback } from "react";
import PageTransition from "./PageTransition";
import AboutSkeleton from "./AboutSkeleton";
import Copyright from "./Copyright";
import profile from "../assets/profile/arthi pic.png";
import { Link } from "react-router-dom";
import OptimizedImage from "./OptimizedImage";

function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets and content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second loading time

    return () => clearTimeout(timer);
  }, []);

  // Handle network issues or slow loading
  useEffect(() => {
    const handleOnline = () => {
      if (navigator.onLine) {
        setIsLoading(false);
      }
    };

    const handleOffline = () => {
      setIsLoading(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Callback for image load - must be before any conditional returns
  const handleImageLoad = useCallback(() => {
    if (navigator.onLine) {
      setIsLoading(false);
    }
  }, []);

  // Render skill cards with memoization - must be before any conditional returns
  const renderSkillCards = useCallback((skills, title) => (
    <div className="mb-4 sm:mb-6 lg:mb-8">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary-400 mb-2 sm:mb-3 lg:mb-4 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-6">
        {skills.map((item, index) => (
          <div
            key={`${title}-${index}`}
            className="hover-effect bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-3 sm:p-4 hover:border-secondary-500/40 transition-all duration-300 text-center"
          >
            <span className="text-2xl sm:text-3xl mb-2 block">
              {item.icon}
            </span>
            <h4 className="text-light-50 text-xs sm:text-sm font-semibold">
              {item.skill}
            </h4>
          </div>
        ))}
      </div>
    </div>
  ), []);

  // Memoize skills data to prevent re-renders
  const skillsData = useMemo(() => ({
    programmingLanguages: [
      { skill: "JavaScript", icon: "🟨" },
      { skill: "Python", icon: "🐍" },
      { skill: "Go", icon: "🐹" },
      { skill: "Shell Scripting", icon: "🐚" },
    ],
    frontend: [
      { skill: "React.js", icon: "⚛️" },
      { skill: "Vite.js", icon: "⚡" },
      { skill: "Next.js", icon: "▲" },
      { skill: "HTML5", icon: "🌐" },
      { skill: "CSS", icon: "🎨" },
      { skill: "Tailwind CSS", icon: "🎭" },
      { skill: "SCSS", icon: "💎" },
      { skill: "Bootstrap", icon: "🅱️" },
      { skill: "Context API", icon: "🔄" },
    ],
    backend: [
      { skill: "Node.js", icon: "🟢" },
      { skill: "Express.js", icon: "🚀" },
      { skill: "REST APIs", icon: "🔗" },
      { skill: "JWT", icon: "🔐" },
    ],
    database: [
      { skill: "MongoDB", icon: "🍃" },
      { skill: "DynamoDB", icon: "⚡" },
      { skill: "Firebase", icon: "🔥" },
      { skill: "Atlas Cloud", icon: "☁️" },
    ],
    devops: [
      { skill: "Docker", icon: "🐳" },
      { skill: "AWS EC2", icon: "🟠" },
      { skill: "AWS S3", icon: "📦" },
      { skill: "AWS Lambda", icon: "⚡" },
      { skill: "GraphQL", icon: "📊" },
      { skill: "CloudFormation", icon: "🏗️" },
      { skill: "EventBridge", icon: "🌉" },
      { skill: "Firebase Hosting", icon: "🔥" },
      { skill: "GitHub Actions", icon: "⚙️" },
      { skill: "CI/CD Pipelines", icon: "🔄" },
    ],
    tools: [
      { skill: "GitHub", icon: "🐙" },
      { skill: "JIRA", icon: "📋" },
      { skill: "Figma", icon: "🎨" },
      { skill: "WordPress", icon: "📝" },
      { skill: "VS Code", icon: "💻" },
    ],
  }), []);

  if (isLoading) {
    return <AboutSkeleton />;
  }

  return (
    <PageTransition>
      <div
        id="about-page"
        className="h-screen w-full bg-gradient-to-br from-dark-800 via-dark-900 to-black relative overflow-hidden overflow-x-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary-500/10 to-transparent" />
        </div>



        {/* Fixed Background Rectangle Container */}
        <div className="absolute inset-x-2 top-16 bottom-2 sm:inset-x-4 sm:top-20 sm:bottom-4 lg:inset-12 bg-dark-800/30 backdrop-blur-sm border border-primary-500/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          {/* Scrollable Content Inside Rectangle */}
          <div className="h-full overflow-y-auto overflow-x-hidden">
            {/* Main Content */}
            <div className="relative z-10 pb-16">
              {/* Hero Section */}
              <section
                id="about"
                className="relative z-10 flex items-center justify-center min-h-screen px-3 sm:px-6 lg:px-8 pt-4 sm:pt-8 lg:pt-0"
              >
                <div className="max-w-6xl w-full">
                       <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-50 mb-4 sm:mb-6 lg:mb-8 text-center">
                    ABOUT{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-purple-400">
                  ME
                    </span>
                    </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Profile Image */}
                    <div
                      id="about"
                      className="flex justify-center lg:justify-end order-1 lg:order-1"
                    >
                
                      <div className="relative">
                         <div className="w-50 h-50 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-500/30">
                          <OptimizedImage
                            src={profile}
                            alt="Arthi Harikrishnan Profile"
                            className="w-full h-full object-cover"
                            // width={320}
                            // height={320}
                            priority={true}
                            onLoad={handleImageLoad}
                            sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                          />
                        </div>
                        {/* <div className="w-50 h-50 md:w-64 md:h-64 lg:w-full lg:h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-500/30">
                          <img
                            src={profile}
                            alt="Arthi Harikrishnan Profile"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          {/* Fallback placeholder if image fails to load */}
                          {/* <div
                            className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-600 flex items-center justify-center"
                            style={{ display: "none" }}
                          >
                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold">
                              AH
                            </div>
                          </div> */}
                        {/* </div> */} 
                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-secondary-500/20 rounded-full blur-xl" />
                        <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-primary-500/20 rounded-full blur-xl" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center lg:text-left order-2 lg:order-2">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-light-50 mb-3 sm:mb-4 lg:mb-6 leading-tight">
                        ARTHI{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-purple-400">
                          HARIKRISHNAN
                        </span>
                      </h1>

                      <div className="mb-4 sm:mb-6 lg:mb-8">
                        <p className="text-light-200 text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4 leading-relaxed">
                          Take a look at my work to see how I turn <span className="text-primary-400 font-semibold">ideas</span> into
                          <span className="text-primary-400 font-semibold"> scalable</span> and <span className="text-primary-400 font-semibold">user-friendly</span> web applications.
                        </p>
                        <p className="text-light-300 max-sm:text-justify text-xs sm:text-sm lg:text-base leading-relaxed">
                          I'm a <span className="text-secondary-400 font-semibold">MERN Stack</span> Developer with 2+ years of experience
                          in building scalable, cloud-powered applications.
                          Skilled in <span className="text-secondary-400 font-semibold">React.js</span>, <span className="text-secondary-400 font-semibold">Node.js</span>, <span className="text-secondary-400 font-semibold">MongoDB</span>, and <span className="text-secondary-400 font-semibold">Express.js</span>,
                          I also bring expertise in <span className="text-secondary-400 font-semibold">AWS</span> services (EC2, S3,
                          Lambda, DynamoDB), <span className="text-secondary-400 font-semibold">Firebase</span>, and modern workflows like
                          <span className="text-secondary-400 font-semibold"> CI/CD</span> and <span className="text-secondary-400 font-semibold">Agile</span>. My focus is on writing clean,
                          efficient code and delivering high-performance web
                          solutions that create real business value.
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
                        <Link
                          to="/project"
                          className="bg-secondary-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-secondary-600 hover:shadow-lg uppercase tracking-wider text-xs sm:text-sm lg:text-base"
                        >
                          VIEW PROJECTS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section
                id="education"
                className="relative z-10 flex items-center px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-16"
              >
                <div className="max-w-6xl mx-auto w-full">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-50 mb-4 sm:mb-6 lg:mb-8 text-center">
                    MY{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-purple-400">
                      EDUCATION
                    </span>
                  </h2>
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {[
                      {
                        institution:
                          "Rajiv Gandhi College of Engineering and Technology",
                        degree:
                          "Bachelor of Engineering in Electronics and Communication Engineering",
                        period: "2015 - 2019",
                        desc: "Comprehensive program covering electronics, communication systems, digital signal processing, and embedded systems. Strong foundation in engineering principles with practical applications in modern technology.",
                        gpa: "CGPA: 7.42",
                      },
                      {
                        institution:
                          "Professor Annousamy Higher Secondary School in Bahour",
                        degree:
                          "Higher Secondary Certificate (HSC) - Computer Science",
                        period: "2014 - 2015",
                        desc: "Specialized in Computer Science with focus on programming fundamentals, data structures, and computer applications. Built strong analytical and problem-solving skills.",
                        gpa: "Percentage: 73%",
                      },
                    ].map((edu, index) => (
                      <div
                        key={index}
                        className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-4 sm:p-6 lg:p-8 hover:border-secondary-500/40 transition-all duration-300"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-3 lg:mb-4">
                          <div className="mb-3 lg:mb-0 flex-1">
                            <h3 className="text-lg  sm:text-2xl font-bold text-light-50 mb-1 lg:mb-2">
                              {edu.degree}
                            </h3>
                            <h4 className="text-secondary-400 text-base sm:text-lg font-semibold mb-2">
                              {edu.institution}
                            </h4>
                            <p className="text-light-300 leading-relaxed text-sm sm:text-base">
                              {edu.desc}
                            </p>
                          </div>
                          <div className="lg:ml-6 flex sm:flex-col gap-3 items-start lg:items-end">
                            <span className="bg-secondary-500/20 text-secondary-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-secondary-500/30 mb-2">
                              {edu.period}
                            </span>
                            <span className="bg-primary-500/20 text-primary-300 px-3 sm:px-4 py-1 rounded-full text-xs font-medium border border-primary-500/30">
                              {edu.gpa}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section
                id="skills"
                className="relative z-10 flex items-center px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-16"
              >
                <div className="max-w-6xl mx-auto w-full">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-light-50 mb-4 sm:mb-6 lg:mb-8 text-center">
                    MY{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-purple-400">
                      SKILLS
                    </span>
                  </h2>

                  {/* Programming Languages */}
                  {renderSkillCards(skillsData.programmingLanguages, "Programming Languages")}

                  {/* Frontend Skills */}
                  {renderSkillCards(skillsData.frontend, "Frontend Development")}

                  {/* Backend Skills */}
                  {renderSkillCards(skillsData.backend, "Backend Development")}

                  {/* Database Skills */}
                  {renderSkillCards(skillsData.database, "Database & Storage")}

                  {/* DevOps & Cloud Skills */}
                  {renderSkillCards(skillsData.devops, "Cloud & DevOps")}

                  {/* Tools & Platforms */}
                  {renderSkillCards(skillsData.tools, "Tools & Platforms")}
                </div>
              </section>

              {/* Certificate Section */}
              <section
                id="certificate"
                className="relative z-10 flex items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
              >
                <div className="max-w-6xl mx-auto w-full">
                  <h2 className="text-3xl sm:text-4xl font-bold text-light-50 mb-6 lg:mb-8 text-center">
                    MY{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-purple-400">
                      CERTIFICATES
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {[
                      {
                        title: "MERN Stack Developer",
                        issuer: "Ocean Academy, Pondicherry",
                        date: "2022-2023",
                        level: "Professional",
                        icon: "⚛️",
                        description:
                          "Comprehensive full-stack development program covering MongoDB, Express.js, React.js, and Node.js. Hands-on projects and real-world application development.",
                      },
                    ].map((cert, index) => (
                      <div
                        key={index}
                        className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-4 sm:p-6 lg:p-8 hover:border-secondary-500/40 transition-all duration-300"
                      >
                        <div className="flex  max-sm:flex-col max-sm:gap-5 items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl">{cert.icon}</span>
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-light-50 mb-1">
                                {cert.title}
                              </h3>
                              <p className="text-secondary-400 text-sm sm:text-base font-semibold">
                                {cert.issuer}
                              </p>
                            </div>
                          </div>
                          <div className="text-right max-sm:flex items-center gap-3">
                            <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30 block mb-1">
                              {cert.date}
                            </span>
                            <span className="bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-xs font-medium border border-primary-500/30">
                              {cert.level}
                            </span>
                          </div>
                        </div>
                        <p className="text-light-300 text-sm sm:text-base leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Experience Section */}
              <section
                id="experience"
                className="relative z-10 flex items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
              >
                <div className="max-w-6xl mx-auto w-full">
                  <h2 className="text-3xl sm:text-4xl font-bold text-light-50 mb-6 lg:mb-8 text-center">
                    MY{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-purple-400">
                      EXPERIENCE
                    </span>
                  </h2>
                  <div className="space-y-6 lg:space-y-8">
                    {[
                      {
                        company: "Cloudbees Tech",
                        role: "Web Developer",
                        period: "Sep 2023 - Present",
                        desc: "Leading a small team of 3 members, successfully completed 8+ projects with hands-on development and project management. Responsible for task assignment, team guidance, and ensuring project deliverables meet quality standards and deadlines.",
                      },

                      // {
                      //   company: "Freelance",
                      //   role: "Web Developer",
                      //   period: "Nov 2024 - Present",
                      //   desc: "Worked with various clients to create custom websites and web applications tailored to their specific needs.",
                      // },
                    ].map((exp, index) => (
                      <div
                        key={index}
                        className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-4 sm:p-6 lg:p-8 hover:border-secondary-500/40 transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row lg:items-center justify-between mb-3 lg:mb-4">
                          <div className="mb-3 lg:mb-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-light-50 mb-1 lg:mb-2">
                              {exp.role}
                            </h3>
                            <h4 className="text-secondary-400 text-base sm:text-lg font-semibold">
                              {exp.company}
                            </h4>
                          </div>
                          <span className="bg-secondary-500/20 max-sm:max-w-[150px] max-sm:w-[100%] text-secondary-300 px-3 my-auto sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border border-secondary-500/30 inline-block">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-light-300 leading-relaxed text-sm sm:text-base">
                          {exp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        
        {/* Copyright Component */}
        <Copyright />
      </div>
    </PageTransition>
  );
}

export default About;
