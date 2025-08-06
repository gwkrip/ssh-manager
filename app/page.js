'use client'
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Star, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  CheckCircle, 
  Play,
  ChevronDown,
  Globe,
  Smartphone,
  Lock,
  TrendingUp,
  Award,
  MessageSquare
} from 'lucide-react';

import '../styles/landingPage.css'

export default function home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigationItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with end-to-end encryption to protect your data.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance delivering results in milliseconds, not seconds.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for teams of any size, anywhere.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Powerful analytics to track performance and make data-driven decisions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your work from anywhere in the world with our global infrastructure.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Fully responsive design that works perfectly on all devices.',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      image: '👩‍💼',
      quote: 'This platform has transformed how we manage our business. The analytics are incredible!'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, StartupXYZ',
      image: '👨‍💻',
      quote: 'The best investment we made this year. Our productivity increased by 300%.'
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager, InnovateCo',
      image: '👩‍🎨',
      quote: 'User-friendly interface with powerful features. Our team loves it!'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '99,000',
      period: 'month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 team members',
        'Basic analytics',
        'Email support',
        '10GB storage',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '299,000',
      period: 'month',
      description: 'Best for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced analytics',
        'Priority support',
        '100GB storage',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited team members',
        'Enterprise analytics',
        '24/7 dedicated support',
        'Unlimited storage',
        'Custom development',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '150+', label: 'Countries' }
  ];

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <div className="brand-logo">
              <div className="logo-icon">
                <BarChart3 size={28} />
              </div>
              <span className="brand-text">AdminPro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navigationItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="nav-actions">
            <a href="/login" className="btn-secondary">Sign In</a>
            <a href="/register" className="btn-primary">
              Get Started
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-nav-links">
              {navigationItems.map((item) => (
                <a key={item.label} href={item.href} className="mobile-nav-link">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mobile-nav-actions">
              <a href="/login" className="btn-secondary">Sign In</a>
              <a href="/register" className="btn-primary">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Star className="badge-icon" size={16} />
              <span>Trusted by 10,000+ companies</span>
            </div>
            
            <h1 className="hero-title">
              Manage Your Business
              <span className="gradient-text"> Like a Pro</span>
            </h1>
            
            <p className="hero-description">
              Transform your workflow with our powerful admin dashboard. 
              Get insights, manage teams, and scale your business with ease.
            </p>
            
            <div className="hero-actions">
              <button className="btn-primary-large">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="btn-demo">
                <Play size={16} />
                Watch Demo
              </button>
            </div>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="mockup-content">
                <div className="mockup-sidebar">
                  <div className="mockup-nav-item active"></div>
                  <div className="mockup-nav-item"></div>
                  <div className="mockup-nav-item"></div>
                  <div className="mockup-nav-item"></div>
                </div>
                <div className="mockup-main">
                  <div className="mockup-cards">
                    <div className="mockup-card"></div>
                    <div className="mockup-card"></div>
                    <div className="mockup-card"></div>
                    <div className="mockup-card"></div>
                  </div>
                  <div className="mockup-chart">
                    <div className="chart-bars">
                      {[40, 70, 45, 80, 60, 90, 55].map((height, i) => (
                        <div key={i} className="chart-bar" style={{height: `${height}%`}}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-description">
              Everything you need to manage your business efficiently
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <div className={`feature-icon bg-gradient-to-r ${feature.color}`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">
                Built for Modern Businesses
              </h2>
              <p className="about-description">
                Our platform combines cutting-edge technology with intuitive design 
                to deliver an admin experience that grows with your business.
              </p>
              
              <div className="about-features">
                <div className="about-feature">
                  <CheckCircle size={20} className="feature-check" />
                  <span>Real-time data synchronization</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} className="feature-check" />
                  <span>Advanced security protocols</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} className="feature-check" />
                  <span>Scalable infrastructure</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} className="feature-check" />
                  <span>24/7 expert support</span>
                </div>
              </div>

              <button className="btn-secondary">
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="about-visual">
              <div className="about-card">
                <div className="card-header">
                  <TrendingUp size={24} className="card-icon" />
                  <span>Performance Analytics</span>
                </div>
                <div className="card-content">
                  <div className="metric">
                    <span className="metric-label">Revenue Growth</span>
                    <span className="metric-value positive">+24.5%</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Active Users</span>
                    <span className="metric-value">12,543</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Conversion Rate</span>
                    <span className="metric-value positive">+8.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-description">
              Join thousands of satisfied customers worldwide
            </p>
          </div>

          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <MessageSquare size={24} />
                </div>
                <blockquote className="testimonial-quote">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonials[activeTestimonial].image}
                  </div>
                  <div className="author-info">
                    <div className="author-name">{testimonials[activeTestimonial].name}</div>
                    <div className="author-role">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-description">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">
                    <Award size={16} />
                    Most Popular
                  </div>
                )}
                
                <div className="pricing-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    {plan.price !== 'Custom' && 'Rp '}
                    <span className="price-amount">{plan.price}</span>
                    {plan.period && <span className="price-period">/{plan.period}</span>}
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="plan-feature">
                      <CheckCircle size={16} className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`btn-plan ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Join thousands of businesses that trust AdminPro for their operations
            </p>
            <div className="cta-actions">
              <button className="btn-primary-large">
                Start Your Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-logo">
                <div className="logo-icon">
                  <BarChart3 size={28} />
                </div>
                <span className="brand-text">AdminPro</span>
              </div>
              <p className="footer-description">
                Empowering businesses with intelligent admin solutions
              </p>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#integrations">Integrations</a>
                <a href="#api">API</a>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#careers">Careers</a>
                <a href="#blog">Blog</a>
                <a href="#press">Press</a>
              </div>
              <div className="link-group">
                <h4>Support</h4>
                <a href="#help">Help Center</a>
                <a href="#contact">Contact</a>
                <a href="#status">Status</a>
                <a href="#security">Security</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 AdminPro. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}