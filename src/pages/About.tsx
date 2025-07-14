import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Users, Award, Target, ArrowRight, CheckCircle } from 'lucide-react';

function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CODX</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of developers, designers, and innovators dedicated to creating 
            exceptional digital experiences that drive business growth and technological advancement.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2019 with a vision to bridge the gap between innovative technology and practical business solutions, 
              CODX has grown from a small startup to a trusted partner for businesses worldwide.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our journey began when our founders recognized the need for a development company that truly understood 
              both the technical complexities and business requirements of modern digital transformation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we continue to push boundaries, embrace new technologies, and deliver solutions that not only 
              meet current needs but anticipate future challenges.
            </p>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Work With Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Team collaboration"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses through innovative technology solutions that drive growth, 
              efficiency, and success in the digital age.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading technology partner that transforms ideas into reality, 
              setting new standards for innovation and excellence.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Innovation, integrity, and collaboration guide everything we do, 
              ensuring we deliver exceptional value to our clients and partners.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">75+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Support Available</div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose CODX?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that truly make a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team consists of senior developers, designers, and strategists with years of experience in cutting-edge technologies."
              },
              {
                title: "Agile Methodology",
                description: "We follow agile development practices to ensure flexibility, transparency, and rapid delivery of high-quality solutions."
              },
              {
                title: "Client-Centric Approach",
                description: "Every project is tailored to meet specific client needs, with regular communication and feedback throughout the process."
              },
              {
                title: "Cutting-Edge Technology",
                description: "We stay ahead of technology trends, using the latest tools and frameworks to build future-ready applications."
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality assurance processes ensure that every deliverable meets the highest standards."
              },
              {
                title: "Ongoing Support",
                description: "Our relationship doesn't end at deployment. We provide ongoing support and maintenance to ensure continued success."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Preview */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionary leaders driving CODX's mission and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Founder",
                description: "Visionary leader with 10+ years in tech innovation and business strategy.",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Sarah Chen",
                role: "CTO",
                description: "Technical expert specializing in scalable architecture and emerging technologies.",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Michael Rodriguez",
                role: "Head of Development",
                description: "Full-stack developer passionate about creating exceptional user experiences.",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((member, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/team"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors font-semibold"
            >
              <span>Meet the Full Team</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into reality with our expertise and innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/projects"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              View Our Work
            </Link>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;