import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Development', 'AI & Machine Learning', 'DevOps', 'Design'];

  const blogPosts = [
    {
      slug: "future-of-web-development",
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Exploring emerging trends and technologies that are shaping the future of web development, from AI integration to new frameworks.",
      content: "Web development continues to evolve at a rapid pace...",
      author: "Alex Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Next.js", "AI", "WebAssembly"]
    },
    {
      slug: "mobile-app-best-practices",
      title: "Mobile App Development Best Practices for 2024",
      excerpt: "Essential guidelines and best practices for creating successful mobile applications that users love and businesses benefit from.",
      content: "Mobile app development has matured significantly...",
      author: "Sarah Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Mobile Development",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      slug: "ai-in-software-development",
      title: "How AI is Revolutionizing Software Development",
      excerpt: "Discover how artificial intelligence is transforming the way we write code, test applications, and deploy software solutions.",
      content: "Artificial Intelligence is no longer a futuristic concept...",
      author: "Michael Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "AI & Machine Learning",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["AI", "Machine Learning", "Automation", "GPT"]
    },
    {
      slug: "microservices-architecture-guide",
      title: "Complete Guide to Microservices Architecture",
      excerpt: "Learn how to design, implement, and manage microservices architecture for scalable and maintainable applications.",
      content: "Microservices architecture has become the go-to pattern...",
      author: "Emma Davis",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "DevOps",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Microservices", "Docker", "Kubernetes", "API"]
    },
    {
      slug: "ux-design-principles",
      title: "Essential UX Design Principles for Developers",
      excerpt: "Understanding key UX design principles that every developer should know to create better user experiences.",
      content: "User Experience design is not just about making things pretty...",
      author: "Lisa Thompson",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["UX", "UI", "Design", "User Research"]
    },
    {
      slug: "serverless-computing-benefits",
      title: "Why Serverless Computing is the Future",
      excerpt: "Exploring the benefits of serverless architecture and how it's changing the way we build and deploy applications.",
      content: "Serverless computing represents a paradigm shift...",
      author: "James Wilson",
      date: "February 20, 2024",
      readTime: "6 min read",
      category: "DevOps",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Serverless", "AWS Lambda", "Cloud", "Architecture"]
    },
    {
      slug: "react-performance-optimization",
      title: "Advanced React Performance Optimization Techniques",
      excerpt: "Deep dive into advanced techniques for optimizing React applications for better performance and user experience.",
      content: "React performance optimization is crucial for modern web applications...",
      author: "Alex Johnson",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Performance", "Optimization", "JavaScript"]
    },
    {
      slug: "cybersecurity-best-practices",
      title: "Cybersecurity Best Practices for Modern Applications",
      excerpt: "Essential security practices every developer should implement to protect applications and user data from threats.",
      content: "In today's digital landscape, cybersecurity is more important than ever...",
      author: "Sarah Chen",
      date: "February 10, 2024",
      readTime: "7 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Security", "Authentication", "Encryption", "HTTPS"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on the latest in technology, development, and digital innovation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <Link 
            to={`/blog/${featuredPost.slug}`}
            className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </span>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-4 text-blue-600 hover:text-purple-600 transition-colors font-semibold"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest insights and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;