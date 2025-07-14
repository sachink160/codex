import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Users, ExternalLink, Github, CheckCircle, Star } from 'lucide-react';

function ProjectDetail() {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API
  const projects = {
    '1': {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "A comprehensive e-commerce solution built for a growing retail business, featuring advanced inventory management, seamless payment processing, and detailed analytics dashboard.",
      longDescription: "This project involved creating a full-stack e-commerce platform from the ground up. The client needed a robust solution that could handle high traffic volumes, manage complex inventory across multiple warehouses, and provide detailed insights into customer behavior and sales performance. We implemented a microservices architecture to ensure scalability and maintainability.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS", "Docker"],
      duration: "6 months",
      year: "2024",
      teamSize: "5 developers",
      client: "RetailCorp Inc.",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/codx/ecommerce-platform",
      challenges: [
        "Handling high-volume transactions during peak shopping seasons",
        "Implementing real-time inventory synchronization across multiple warehouses",
        "Creating a flexible product catalog system for diverse product types",
        "Ensuring PCI compliance for payment processing"
      ],
      solutions: [
        "Implemented horizontal scaling with load balancers and auto-scaling groups",
        "Built a real-time event-driven architecture using Redis and WebSockets",
        "Designed a flexible EAV (Entity-Attribute-Value) model for product data",
        "Integrated Stripe's secure payment processing with tokenization"
      ],
      features: [
        "Advanced product search and filtering",
        "Real-time inventory management",
        "Multi-payment gateway integration",
        "Comprehensive admin dashboard",
        "Mobile-responsive design",
        "SEO optimization",
        "Analytics and reporting",
        "Customer review system"
      ],
      results: [
        "40% increase in conversion rate",
        "60% reduction in page load times",
        "99.9% uptime during Black Friday sales",
        "25% increase in average order value"
      ],
      testimonial: {
        text: "CODX delivered an exceptional e-commerce platform that exceeded our expectations. The team's attention to detail and technical expertise helped us achieve remarkable growth in our online sales.",
        author: "Sarah Johnson",
        position: "CEO, RetailCorp Inc."
      },
      gallery: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    '2': {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description: "A comprehensive patient management system that enables healthcare providers to efficiently track appointments, manage medical records, and handle prescriptions.",
      longDescription: "This healthcare application was developed to streamline patient care and improve communication between healthcare providers and patients. The app includes features for appointment scheduling, telemedicine consultations, prescription management, and secure messaging. We prioritized security and HIPAA compliance throughout the development process.",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "Socket.io", "AWS"],
      duration: "4 months",
      year: "2024",
      teamSize: "4 developers",
      client: "MedCare Solutions",
      liveUrl: "https://app.medcare-solutions.com",
      githubUrl: "https://github.com/codx/healthcare-app",
      challenges: [
        "Ensuring HIPAA compliance for patient data",
        "Implementing secure real-time communication",
        "Creating an intuitive interface for elderly patients",
        "Integrating with existing hospital management systems"
      ],
      solutions: [
        "Implemented end-to-end encryption and secure data storage",
        "Built a secure WebRTC-based video calling system",
        "Designed a simplified, accessible user interface with large fonts and clear navigation",
        "Created RESTful APIs for seamless integration with legacy systems"
      ],
      features: [
        "Appointment scheduling and reminders",
        "Telemedicine video consultations",
        "Prescription management",
        "Medical record access",
        "Secure messaging",
        "Health tracking and monitoring",
        "Insurance verification",
        "Multi-language support"
      ],
      results: [
        "50% reduction in appointment no-shows",
        "30% increase in patient satisfaction scores",
        "80% reduction in administrative overhead",
        "100% HIPAA compliance maintained"
      ],
      testimonial: {
        text: "The healthcare app developed by CODX has transformed how we interact with our patients. The intuitive design and robust security features have made patient care more efficient and secure.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer, MedCare Solutions"
      },
      gallery: [
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386468/pexels-photo-4386468.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4386469/pexels-photo-4386469.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    '3': {
      title: "Financial Dashboard",
      category: "Web Application",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=1200",
      description: "A sophisticated real-time analytics dashboard for financial data visualization with advanced charting capabilities and comprehensive reporting features.",
      longDescription: "This financial dashboard was created for a fintech company that needed to visualize complex financial data in real-time. The platform aggregates data from multiple sources, processes it in real-time, and presents it through interactive charts and reports. The system handles millions of data points and provides insights that help traders and analysts make informed decisions.",
      technologies: ["Vue.js", "D3.js", "Python", "Redis", "WebSocket", "PostgreSQL", "Docker"],
      duration: "3 months",
      year: "2024",
      teamSize: "3 developers",
      client: "FinTech Analytics Corp",
      liveUrl: "https://dashboard.fintech-analytics.com",
      githubUrl: "https://github.com/codx/financial-dashboard",
      challenges: [
        "Processing and visualizing millions of data points in real-time",
        "Creating responsive and interactive charts",
        "Ensuring data accuracy and consistency",
        "Optimizing performance for large datasets"
      ],
      solutions: [
        "Implemented data streaming with WebSockets and Redis for real-time updates",
        "Used D3.js with canvas rendering for high-performance visualizations",
        "Built a robust data validation and reconciliation system",
        "Optimized database queries and implemented intelligent caching"
      ],
      features: [
        "Real-time data streaming",
        "Interactive charts and graphs",
        "Custom report generation",
        "Portfolio performance tracking",
        "Risk analysis tools",
        "Alert and notification system",
        "Data export capabilities",
        "Multi-currency support"
      ],
      results: [
        "90% faster data processing compared to legacy system",
        "Real-time updates with <100ms latency",
        "50% improvement in decision-making speed",
        "99.99% data accuracy maintained"
      ],
      testimonial: {
        text: "CODX created a powerful financial dashboard that has revolutionized how we analyze market data. The real-time capabilities and intuitive interface have significantly improved our trading operations.",
        author: "Jennifer Martinez",
        position: "Head of Trading, FinTech Analytics Corp"
      },
      gallery: [
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590021/pexels-photo-590021.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/590023/pexels-photo-590023.jpg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link 
            to="/projects"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/projects"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {project.description}
            </p>
            
            {/* Project Info */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="font-semibold">{project.year}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{project.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Team Size</p>
                  <p className="font-semibold">{project.teamSize}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <p className="font-semibold">{project.client}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Live Site</span>
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400 transition-all inline-flex items-center justify-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Project Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                  </div>
                  <p className="text-gray-600">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Solutions</h2>
            <div className="space-y-4">
              {project.solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl text-center">
                <p className="text-lg font-semibold">{result}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
            <blockquote className="text-xl text-gray-600 italic mb-6">
              "{project.testimonial.text}"
            </blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {project.testimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{project.testimonial.author}</p>
                <p className="text-gray-600">{project.testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in Similar Work?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create something amazing for your business too.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;