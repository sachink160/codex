import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Filter } from 'lucide-react';

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Development', 'Backend Systems', 'UI/UX Design'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      duration: "6 months",
      year: "2024"
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Patient management system enabling healthcare providers to track appointments, medical records, and prescriptions.",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      duration: "4 months",
      year: "2024"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "Web Development",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
      description: "Real-time analytics dashboard for financial data visualization with advanced charting and reporting capabilities.",
      technologies: ["Vue.js", "D3.js", "Python", "Redis"],
      duration: "3 months",
      year: "2024"
    },
    {
      id: 4,
      title: "Learning Management System",
      category: "Web Development",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive LMS platform with course management, student tracking, and interactive learning modules.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
      duration: "8 months",
      year: "2023"
    },
    {
      id: 5,
      title: "Restaurant Management App",
      category: "Mobile Development",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete restaurant management solution with order tracking, inventory management, and staff scheduling.",
      technologies: ["Flutter", "Firebase", "Node.js", "Stripe"],
      duration: "5 months",
      year: "2023"
    },
    {
      id: 6,
      title: "IoT Data Processing System",
      category: "Backend Systems",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Scalable backend system for processing and analyzing IoT sensor data with real-time monitoring capabilities.",
      technologies: ["Python", "Apache Kafka", "InfluxDB", "Docker"],
      duration: "7 months",
      year: "2023"
    },
    {
      id: 7,
      title: "Social Media Analytics Tool",
      category: "Web Development",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Advanced analytics platform for social media performance tracking with automated reporting and insights.",
      technologies: ["React", "GraphQL", "Node.js", "MongoDB"],
      duration: "4 months",
      year: "2023"
    },
    {
      id: 8,
      title: "Fitness Tracking App",
      category: "Mobile Development",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive fitness tracking application with workout planning, progress monitoring, and social features.",
      technologies: ["React Native", "Redux", "Node.js", "PostgreSQL"],
      duration: "6 months",
      year: "2023"
    },
    {
      id: 9,
      title: "Corporate Website Redesign",
      category: "UI/UX Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete redesign of corporate website with focus on user experience, accessibility, and modern design principles.",
      technologies: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
      duration: "3 months",
      year: "2023"
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in delivering 
            innovative solutions across various industries and technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and innovative approach.
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

export default Projects;