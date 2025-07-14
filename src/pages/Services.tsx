import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Code,
  Palette,
  Cloud,
  BarChart
} from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies, responsive design, and optimal performance for your business needs.",
      features: [
        "React & Next.js Development",
        "Node.js Backend Solutions",
        "Database Integration",
        "Cloud Deployment",
        "SEO Optimization",
        "Performance Optimization"
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "Python", "PostgreSQL"],
      startingPrice: "$5,000",
      timeline: "4-12 weeks"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      features: [
        "iOS & Android Development",
        "React Native Solutions",
        "Flutter Applications",
        "App Store Publishing",
        "Push Notifications",
        "Offline Functionality"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      startingPrice: "$8,000",
      timeline: "6-16 weeks"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & API Development",
      description: "Scalable backend infrastructure with secure APIs, robust database architectures, and microservices implementation.",
      features: [
        "RESTful API Development",
        "GraphQL Implementation",
        "Microservices Architecture",
        "Database Design & Optimization",
        "Third-party Integrations",
        "Real-time Data Processing"
      ],
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker"],
      startingPrice: "$4,000",
      timeline: "3-10 weeks"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Comprehensive security implementations to protect your digital assets and ensure compliance with industry standards.",
      features: [
        "Security Audits",
        "Authentication Systems",
        "Data Encryption",
        "GDPR Compliance",
        "Penetration Testing",
        "Security Monitoring"
      ],
      technologies: ["OAuth", "JWT", "SSL/TLS", "OWASP", "Encryption"],
      startingPrice: "$3,000",
      timeline: "2-8 weeks"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Advanced optimization techniques to ensure your applications run at peak performance with excellent user experience.",
      features: [
        "Speed Optimization",
        "SEO Enhancement",
        "Analytics Implementation",
        "Monitoring & Alerting",
        "CDN Configuration",
        "Caching Strategies"
      ],
      technologies: ["Lighthouse", "GTmetrix", "Google Analytics", "New Relic"],
      startingPrice: "$2,500",
      timeline: "2-6 weeks"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consulting & Strategy",
      description: "Expert guidance and strategic planning to help you make informed technology decisions and optimize your development process.",
      features: [
        "Technical Consulting",
        "Architecture Planning",
        "Code Reviews",
        "Team Training",
        "Technology Selection",
        "Project Management"
      ],
      technologies: ["Agile", "Scrum", "DevOps", "CI/CD"],
      startingPrice: "$150/hour",
      timeline: "Ongoing"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces and experiences that engage users and drive business results.",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design Systems",
        "Responsive Design"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      startingPrice: "$3,500",
      timeline: "3-8 weeks"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications with high availability and performance.",
      features: [
        "AWS/Azure/GCP Setup",
        "Container Orchestration",
        "Auto-scaling Configuration",
        "Backup & Recovery",
        "Monitoring & Logging",
        "Cost Optimization"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      startingPrice: "$4,500",
      timeline: "3-10 weeks"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with custom analytics solutions and business intelligence dashboards.",
      features: [
        "Data Pipeline Development",
        "Business Intelligence Dashboards",
        "Real-time Analytics",
        "Data Visualization",
        "Machine Learning Integration",
        "Reporting Automation"
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark"],
      startingPrice: "$6,000",
      timeline: "4-12 weeks"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, requirements, and constraints to create a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team designs the user experience and technical architecture, ensuring scalability and maintainability."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies with continuous testing and quality assurance."
    },
    {
      step: "04",
      title: "Deployment & Launch",
      description: "We deploy your application to production with proper monitoring and ensure a smooth launch."
    },
    {
      step: "05",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to ensure your solution continues to perform optimally."
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to accelerate your business growth and technological advancement. 
            From concept to deployment, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-xl font-bold text-gray-900">{service.startingPrice}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Timeline</p>
                    <p className="font-semibold text-gray-900">{service.timeline}</p>
                  </div>
                </div>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center block"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from start to finish
            </p>
          </div>
          
          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Our Services */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Expert Team",
                description: "Senior developers with years of experience in cutting-edge technologies"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Delivery",
                description: "Agile development process ensures rapid delivery without compromising quality"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assured",
                description: "Rigorous testing and quality assurance processes for every project"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Ongoing support and maintenance to ensure continued success"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/projects"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all inline-flex items-center justify-center space-x-2"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;