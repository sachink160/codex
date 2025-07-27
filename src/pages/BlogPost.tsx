import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook, Tag, ArrowRight } from 'lucide-react';

function BlogPost() {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPosts = {
    'future-of-web-development': {
      title: "The Future of Web Development: Trends to Watch in 2024",
      author: "Alex Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["React", "Next.js", "AI", "WebAssembly"],
      content: `
        <p>Web development continues to evolve at a rapid pace, with new technologies and frameworks emerging regularly. As we move through 2024, several key trends are shaping the future of how we build and interact with web applications.</p>

        <h2>1. AI Integration Becomes Mainstream</h2>
        <p>Artificial Intelligence is no longer a futuristic concept—it's becoming an integral part of web development. From AI-powered code completion tools like GitHub Copilot to intelligent chatbots and personalized user experiences, AI is transforming how we build and interact with web applications.</p>

        <p>Developers are increasingly leveraging AI APIs to add smart features to their applications, such as:</p>
        <ul>
          <li>Natural language processing for better search functionality</li>
          <li>Image recognition and automated tagging</li>
          <li>Predictive analytics for user behavior</li>
          <li>Automated testing and bug detection</li>
        </ul>

        <h2>2. WebAssembly (WASM) Gains Momentum</h2>
        <p>WebAssembly is revolutionizing web performance by allowing developers to run high-performance applications in the browser. Languages like Rust, C++, and Go can now be compiled to WASM, bringing near-native performance to web applications.</p>

        <p>This technology is particularly exciting for:</p>
        <ul>
          <li>Gaming applications</li>
          <li>Image and video processing</li>
          <li>Scientific computing</li>
          <li>Legacy application migration</li>
        </ul>

        <h2>3. Edge Computing and CDN Evolution</h2>
        <p>Edge computing is bringing computation closer to users, reducing latency and improving performance. Modern CDNs are evolving beyond simple content delivery to become powerful computing platforms.</p>

        <p>Platforms like Cloudflare Workers, Vercel Edge Functions, and AWS Lambda@Edge are enabling developers to run server-side logic at the edge, providing:</p>
        <ul>
          <li>Faster response times</li>
          <li>Better user experiences globally</li>
          <li>Reduced server costs</li>
          <li>Improved scalability</li>
        </ul>

        <h2>4. Progressive Web Apps (PWAs) Mature</h2>
        <p>PWAs continue to bridge the gap between web and native applications. With improved browser support and new capabilities, PWAs are becoming more powerful and app-like.</p>

        <p>Recent improvements include:</p>
        <ul>
          <li>Better offline functionality</li>
          <li>Enhanced push notifications</li>
          <li>Improved app store integration</li>
          <li>Advanced caching strategies</li>
        </ul>

        <h2>5. Micro-Frontends Architecture</h2>
        <p>As applications grow in complexity, micro-frontends are becoming a popular architectural pattern. This approach allows teams to develop, deploy, and maintain different parts of a frontend application independently.</p>

        <p>Benefits include:</p>
        <ul>
          <li>Team autonomy and faster development</li>
          <li>Technology diversity</li>
          <li>Independent deployments</li>
          <li>Better fault isolation</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The future of web development is exciting and full of possibilities. As these trends continue to evolve, developers who stay current with these technologies will be well-positioned to build the next generation of web applications.</p>

        <p>The key is to remain curious, continue learning, and experiment with these new technologies as they mature. The web platform continues to grow more powerful, and we're just scratching the surface of what's possible.</p>
      `
    },
    'mobile-app-best-practices': {
      title: "Mobile App Development Best Practices for 2024",
      author: "Sarah Chen",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Mobile Development",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["React Native", "Flutter", "iOS", "Android"],
      content: `
        <p>Mobile app development has matured significantly over the past few years. With millions of apps in app stores and users becoming increasingly sophisticated, following best practices is crucial for success. Here are the essential guidelines for creating outstanding mobile applications in 2024.</p>

        <h2>1. User-Centric Design Principles</h2>
        <p>The foundation of any successful mobile app is exceptional user experience. Users expect intuitive, fast, and beautiful applications that solve real problems.</p>

        <h3>Key Design Considerations:</h3>
        <ul>
          <li><strong>Simplicity First:</strong> Keep interfaces clean and focused on core functionality</li>
          <li><strong>Consistent Navigation:</strong> Use familiar patterns and maintain consistency throughout the app</li>
          <li><strong>Accessibility:</strong> Design for users with disabilities from the start</li>
          <li><strong>Performance:</strong> Optimize for smooth animations and quick load times</li>
        </ul>

        <h2>2. Cross-Platform Development Strategy</h2>
        <p>Choosing the right development approach is crucial for project success. Consider your team's expertise, timeline, and specific requirements.</p>

        <h3>Popular Frameworks:</h3>
        <ul>
          <li><strong>React Native:</strong> Great for teams with React experience, excellent performance</li>
          <li><strong>Flutter:</strong> Google's framework with beautiful UI components and fast development</li>
          <li><strong>Native Development:</strong> Still the best choice for performance-critical applications</li>
        </ul>

        <h2>3. Performance Optimization</h2>
        <p>Mobile users are impatient. Apps that take more than 3 seconds to load often see high abandonment rates.</p>

        <h3>Optimization Strategies:</h3>
        <ul>
          <li>Implement lazy loading for images and content</li>
          <li>Use efficient data structures and algorithms</li>
          <li>Minimize network requests and optimize API calls</li>
          <li>Implement proper caching strategies</li>
          <li>Optimize images and assets for different screen densities</li>
        </ul>

        <h2>4. Security Best Practices</h2>
        <p>Mobile apps handle sensitive user data and must implement robust security measures.</p>

        <h3>Essential Security Measures:</h3>
        <ul>
          <li><strong>Data Encryption:</strong> Encrypt sensitive data both in transit and at rest</li>
          <li><strong>Authentication:</strong> Implement secure authentication mechanisms</li>
          <li><strong>API Security:</strong> Use HTTPS and implement proper API authentication</li>
          <li><strong>Code Obfuscation:</strong> Protect your code from reverse engineering</li>
        </ul>

        <h2>5. Testing and Quality Assurance</h2>
        <p>Comprehensive testing is essential for delivering high-quality mobile applications.</p>

        <h3>Testing Strategy:</h3>
        <ul>
          <li><strong>Unit Testing:</strong> Test individual components and functions</li>
          <li><strong>Integration Testing:</strong> Verify that different parts work together</li>
          <li><strong>UI Testing:</strong> Automate user interface testing</li>
          <li><strong>Device Testing:</strong> Test on various devices and operating system versions</li>
          <li><strong>Performance Testing:</strong> Monitor app performance under different conditions</li>
        </ul>

        <h2>6. App Store Optimization (ASO)</h2>
        <p>Getting discovered in app stores requires strategic optimization of your app listing.</p>

        <h3>ASO Best Practices:</h3>
        <ul>
          <li>Research and use relevant keywords in your app title and description</li>
          <li>Create compelling screenshots and preview videos</li>
          <li>Encourage positive reviews and ratings</li>
          <li>Regularly update your app with new features and bug fixes</li>
          <li>Localize your app for different markets</li>
        </ul>

        <h2>7. Analytics and User Feedback</h2>
        <p>Understanding how users interact with your app is crucial for continuous improvement.</p>

        <h3>Key Metrics to Track:</h3>
        <ul>
          <li>User acquisition and retention rates</li>
          <li>Session duration and frequency</li>
          <li>Feature usage and user flows</li>
          <li>Crash reports and error rates</li>
          <li>User feedback and reviews</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Building successful mobile applications requires attention to detail across multiple dimensions—from user experience and performance to security and marketing. By following these best practices and staying current with platform updates and user expectations, you'll be well-positioned to create mobile apps that users love and businesses benefit from.</p>

        <p>Remember that mobile app development is an iterative process. Launch with a solid foundation, gather user feedback, and continuously improve your application based on real-world usage and changing user needs.</p>
      `
    },
    'ai-in-software-development': {
      title: "How AI is Revolutionizing Software Development",
      author: "Michael Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "AI & Machine Learning",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["AI", "Machine Learning", "Automation", "GPT"],
      content: `
        <p>Artificial Intelligence is no longer a futuristic concept—it's actively transforming how we write, test, and deploy software. From intelligent code completion to automated testing and deployment, AI is revolutionizing every aspect of the software development lifecycle.</p>

        <h2>1. AI-Powered Code Generation</h2>
        <p>Tools like GitHub Copilot, Amazon CodeWhisperer, and OpenAI Codex are changing how developers write code. These AI assistants can generate entire functions, suggest optimizations, and even help with debugging.</p>

        <h3>Benefits of AI Code Generation:</h3>
        <ul>
          <li><strong>Increased Productivity:</strong> Developers can focus on high-level problem solving</li>
          <li><strong>Reduced Boilerplate:</strong> AI handles repetitive coding tasks</li>
          <li><strong>Learning Aid:</strong> Helps developers learn new languages and frameworks</li>
          <li><strong>Code Quality:</strong> AI can suggest best practices and optimizations</li>
        </ul>

        <h2>2. Intelligent Testing and Quality Assurance</h2>
        <p>AI is transforming software testing by automating test case generation, identifying edge cases, and predicting potential bugs before they occur.</p>

        <h3>AI Testing Applications:</h3>
        <ul>
          <li>Automated test case generation based on code analysis</li>
          <li>Visual testing for UI consistency across devices</li>
          <li>Performance testing with intelligent load simulation</li>
          <li>Bug prediction using machine learning models</li>
        </ul>

        <h2>3. Code Review and Security Analysis</h2>
        <p>AI-powered tools are becoming increasingly sophisticated at analyzing code for security vulnerabilities, performance issues, and adherence to coding standards.</p>

        <h3>Key Capabilities:</h3>
        <ul>
          <li><strong>Security Scanning:</strong> Identify potential vulnerabilities and security flaws</li>
          <li><strong>Code Quality:</strong> Enforce coding standards and best practices</li>
          <li><strong>Performance Analysis:</strong> Detect performance bottlenecks and optimization opportunities</li>
          <li><strong>Dependency Management:</strong> Monitor and update dependencies automatically</li>
        </ul>

        <h2>4. Natural Language to Code Translation</h2>
        <p>Advanced AI models can now translate natural language descriptions into working code, making programming more accessible to non-technical stakeholders.</p>

        <h3>Use Cases:</h3>
        <ul>
          <li>Rapid prototyping from business requirements</li>
          <li>Documentation generation from code</li>
          <li>API endpoint creation from descriptions</li>
          <li>Database query generation from natural language</li>
        </ul>

        <h2>5. Automated DevOps and Deployment</h2>
        <p>AI is streamlining DevOps processes by automating deployment decisions, optimizing resource allocation, and predicting system failures.</p>

        <h3>AI in DevOps:</h3>
        <ul>
          <li><strong>Intelligent Deployment:</strong> AI decides when and how to deploy based on various factors</li>
          <li><strong>Resource Optimization:</strong> Automatically scale resources based on predicted demand</li>
          <li><strong>Anomaly Detection:</strong> Identify unusual patterns that might indicate problems</li>
          <li><strong>Incident Response:</strong> Automated problem diagnosis and resolution</li>
        </ul>

        <h2>6. Personalized Development Environments</h2>
        <p>AI is creating more personalized development experiences by learning from individual developer preferences and coding patterns.</p>

        <h3>Personalization Features:</h3>
        <ul>
          <li>Customized code suggestions based on coding style</li>
          <li>Intelligent IDE configurations</li>
          <li>Personalized learning recommendations</li>
          <li>Context-aware documentation and help</li>
        </ul>

        <h2>7. Challenges and Considerations</h2>
        <p>While AI brings tremendous benefits to software development, it also presents challenges that teams must address.</p>

        <h3>Key Challenges:</h3>
        <ul>
          <li><strong>Code Quality Concerns:</strong> AI-generated code may not always follow best practices</li>
          <li><strong>Security Risks:</strong> AI tools might introduce vulnerabilities</li>
          <li><strong>Dependency on Tools:</strong> Over-reliance on AI might reduce fundamental coding skills</li>
          <li><strong>Bias and Fairness:</strong> AI models may perpetuate biases present in training data</li>
        </ul>

        <h2>Best Practices for AI Integration</h2>
        <p>To maximize the benefits of AI in software development while minimizing risks, consider these best practices:</p>

        <ul>
          <li><strong>Human Oversight:</strong> Always review and understand AI-generated code</li>
          <li><strong>Security First:</strong> Implement additional security scanning for AI-generated code</li>
          <li><strong>Continuous Learning:</strong> Stay updated with AI tool capabilities and limitations</li>
          <li><strong>Team Training:</strong> Ensure team members understand how to effectively use AI tools</li>
        </ul>

        <h2>The Future of AI in Development</h2>
        <p>As AI technology continues to advance, we can expect even more sophisticated tools that understand context better, generate higher-quality code, and integrate more seamlessly into development workflows.</p>

        <p>Future developments might include:</p>
        <ul>
          <li>AI architects that can design entire system architectures</li>
          <li>Intelligent project managers that optimize team workflows</li>
          <li>AI-powered code refactoring and modernization tools</li>
          <li>Advanced debugging assistants that can trace complex issues</li>
        </ul>

        <h2>Conclusion</h2>
        <p>AI is fundamentally changing software development, making developers more productive and enabling new possibilities. However, the key to success lies in thoughtful integration—using AI as a powerful assistant while maintaining human oversight and critical thinking.</p>

        <p>The developers who will thrive in this AI-enhanced future are those who embrace these tools while continuing to develop their fundamental skills and understanding of software engineering principles. AI is not replacing developers; it's empowering them to build better software faster.</p>
      `
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/blog/${slug}`;

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Share Buttons */}
            <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Share2 className="w-5 h-5" />
                <span className="font-semibold">Share this article:</span>
              </div>
              <div className="flex items-center space-x-3">
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-600 prose-ol:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Author Bio */}
        <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
              <p className="text-gray-600">Senior Developer at CODX</p>
              <p className="text-gray-600 mt-2">
                Passionate about creating innovative solutions and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedPost]) => (
                <Link 
                  key={key}
                  to={`/blog/${key}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span>{relatedPost.date}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600">
                      {relatedPost.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our expertise and innovative approach.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;