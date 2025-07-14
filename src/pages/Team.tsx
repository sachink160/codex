import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';

function Team() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      expertise: "Full-Stack Development & Business Strategy",
      description: "Visionary leader with 10+ years in tech innovation. Alex founded CODX with the mission to bridge the gap between cutting-edge technology and practical business solutions.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["Leadership", "Strategy", "Full-Stack Development", "Business Development"],
      experience: "10+ years",
      education: "MS Computer Science, Stanford University",
      achievements: [
        "Founded 3 successful tech startups",
        "Led teams of 50+ developers",
        "Raised $10M+ in funding"
      ]
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "System Architecture & Cloud Solutions",
      description: "Technical expert specializing in scalable architecture and emerging technologies. Sarah ensures our technical solutions are robust, scalable, and future-ready.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["System Architecture", "Cloud Computing", "DevOps", "Team Leadership"],
      experience: "8+ years",
      education: "PhD Computer Engineering, MIT",
      achievements: [
        "Architected systems serving 10M+ users",
        "AWS Certified Solutions Architect",
        "Published 15+ technical papers"
      ]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Development",
      expertise: "Frontend Development & User Experience",
      description: "Full-stack developer with a passion for creating exceptional user experiences. Michael leads our development team in building beautiful, functional applications.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["React", "Node.js", "UI/UX Design", "Team Management"],
      experience: "7+ years",
      education: "BS Software Engineering, UC Berkeley",
      achievements: [
        "Led development of 50+ web applications",
        "Google Developer Expert",
        "Open source contributor"
      ]
    },
    {
      name: "Emma Davis",
      role: "Product Manager",
      expertise: "Strategy & Planning",
      description: "Strategic product manager who drives product vision and ensures client success. Emma bridges the gap between business requirements and technical implementation.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["Product Strategy", "Project Management", "Client Relations", "Analytics"],
      experience: "6+ years",
      education: "MBA, Harvard Business School",
      achievements: [
        "Managed $50M+ in project portfolios",
        "PMP Certified",
        "98% client satisfaction rate"
      ]
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      expertise: "Cloud Infrastructure & Automation",
      description: "DevOps specialist ensuring robust and scalable deployment solutions. James automates processes and maintains high-availability systems for our clients.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
      experience: "6+ years",
      education: "MS Information Systems, Carnegie Mellon",
      achievements: [
        "Reduced deployment time by 80%",
        "Maintained 99.9% uptime",
        "Kubernetes Certified Administrator"
      ]
    },
    {
      name: "Lisa Thompson",
      role: "Senior Designer",
      expertise: "UI/UX Design & Brand Identity",
      description: "Creative designer who creates beautiful and intuitive user interfaces. Lisa ensures our applications not only work well but also provide delightful user experiences.",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "User Research"],
      experience: "5+ years",
      education: "BFA Graphic Design, RISD",
      achievements: [
        "Designed 100+ user interfaces",
        "Won 5 design awards",
        "Improved user engagement by 40%"
      ]
    },
    {
      name: "David Kim",
      role: "Mobile Developer",
      expertise: "iOS & Android Development",
      description: "Mobile development specialist creating native and cross-platform applications. David brings mobile expertise to deliver exceptional mobile experiences.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI"],
      experience: "5+ years",
      education: "BS Computer Science, UCLA",
      achievements: [
        "Published 20+ mobile apps",
        "App Store featured developer",
        "1M+ app downloads"
      ]
    },
    {
      name: "Rachel Green",
      role: "QA Engineer",
      expertise: "Quality Assurance & Testing",
      description: "Quality assurance expert ensuring every deliverable meets the highest standards. Rachel implements comprehensive testing strategies for reliable software.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: ["Test Automation", "Manual Testing", "Performance Testing", "Security Testing"],
      experience: "4+ years",
      education: "BS Information Technology, Georgia Tech",
      achievements: [
        "Reduced bug reports by 70%",
        "ISTQB Certified Tester",
        "Automated 90% of test cases"
      ]
    }
  ];

  const departments = [
    {
      name: "Development",
      count: 12,
      description: "Full-stack developers, mobile specialists, and frontend experts"
    },
    {
      name: "Design",
      count: 4,
      description: "UI/UX designers and visual design specialists"
    },
    {
      name: "DevOps",
      count: 3,
      description: "Infrastructure and deployment automation experts"
    },
    {
      name: "Management",
      count: 5,
      description: "Project managers and business strategists"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The talented professionals behind CODX's success. Our diverse team brings together expertise 
            from various disciplines to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {departments.map((dept, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{dept.count}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</div>
              <div className="text-sm text-gray-600">{dept.description}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-blue-600 font-semibold text-sm mb-2">{member.expertise}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div>
                    <p className="font-semibold">Experience</p>
                    <p>{member.experience}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Education</p>
                    <p>{member.education}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {member.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3 pt-4 border-t">
                  <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We believe in fostering an environment where creativity, innovation, and collaboration thrive
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation First</h3>
              <p className="opacity-90">We encourage experimentation and embrace new technologies to stay ahead of the curve.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="opacity-90">We work together as one team, sharing knowledge and supporting each other's growth.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="opacity-90">We strive for excellence in everything we do, from code quality to client relationships.</p>
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence. 
            Explore opportunities to grow your career with CODX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>Send Your Resume</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;