import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Globe, Smartphone, Database } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovative Solutions for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              At CODX, we craft cutting-edge software solutions that transform businesses and drive growth. 
              From web applications to mobile apps, we bring your vision to life with precision and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do Best</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Web Development",
                description: "Custom web applications built with modern technologies and responsive design.",
                link: "/services"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android.",
                link: "/services"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Backend Systems",
                description: "Scalable backend infrastructure with secure APIs and robust architectures.",
                link: "/services"
              }
            ].map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
              <p className="text-xl text-gray-600">
                Showcasing our latest work and innovations
              </p>
            </div>
            <Link 
              to="/projects"
              className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors font-semibold"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "E-Commerce Platform",
                category: "Web Development",
                image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Modern e-commerce solution with advanced features"
              },
              {
                id: 2,
                title: "Healthcare Mobile App",
                category: "Mobile Development",
                image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
                description: "Patient management system for healthcare providers"
              },
              {
                id: 3,
                title: "Financial Dashboard",
                category: "Web Application",
                image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
                description: "Real-time analytics dashboard for financial data"
              }
            ].map((project) => (
              <Link 
                key={project.id}
                to={`/projects/${project.id}`}
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">{project.category}</span>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link 
              to="/projects"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors font-semibold"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-xl text-gray-600">
                Stay updated with our thoughts on technology and innovation
              </p>
            </div>
            <Link 
              to="/blog"
              className="hidden md:flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors font-semibold"
            >
              <span>View All Posts</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                slug: "future-of-web-development",
                title: "The Future of Web Development",
                excerpt: "Exploring emerging trends and technologies shaping the web development landscape.",
                date: "March 15, 2024",
                readTime: "5 min read",
                image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                slug: "mobile-app-best-practices",
                title: "Mobile App Development Best Practices",
                excerpt: "Essential guidelines for creating successful mobile applications in 2024.",
                date: "March 10, 2024",
                readTime: "7 min read",
                image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                slug: "ai-in-software-development",
                title: "AI's Impact on Software Development",
                excerpt: "How artificial intelligence is revolutionizing the way we build software.",
                date: "March 5, 2024",
                readTime: "6 min read",
                image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((post) => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8 md:hidden">
            <Link 
              to="/blog"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors font-semibold"
            >
              <span>View All Posts</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help bring your vision to life with our expertise and innovation.
          </p>
          <Link 
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;