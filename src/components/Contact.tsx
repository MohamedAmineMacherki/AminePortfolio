import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create the email body
      const emailBody = `
New Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from your portfolio website contact form
      `;

      // Create mailto link
      const mailtoLink = `mailto:mohamedamine.macherki@ieee.org?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;

      // Open default email client
      window.location.href = mailtoLink;

      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setSubmitStatus('success');
      setShowNotification(true);

      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setShowNotification(true);

      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      content: "mohamedamine.macherki@ieee.org",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone'),
      content: "+216 56586061",
      color: "from-green-600 to-green-700"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.location'),
      content: t('hero.location'),
      color: "from-orange-600 to-orange-700"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/MohamedAmineMacherki",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamed-amine-macherki-b62a65200/",
      color: "hover:text-blue-600"
    }
  ];

  return (
      <section id="contact" className={`py-20 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
      } transition-colors duration-300 relative`}>

        {/* Notification Toast */}
        {showNotification && (
            <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-500 ${
                showNotification ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            } ${
                submitStatus === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
            }`}>
              <div className="flex items-center">
                {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 mr-2" />
                ) : (
                    <AlertCircle className="w-5 h-5 mr-2" />
                )}
                <span className="font-medium">
                {submitStatus === 'success'
                    ? 'Email client opened successfully!'
                    : 'Error opening email client. Please try again.'}
              </span>
              </div>
            </div>
        )}

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            } transform transition-all duration-300 hover:scale-105`}>
              {t('contact.title')}
            </h2>
            <p className={`text-xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in`}>
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 ${
                            darkMode
                                ? 'bg-gray-900 border border-gray-700 hover:border-gray-600'
                                : 'bg-white border border-gray-100 hover:border-gray-200'
                        }`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex items-center">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mr-4 transform transition-all duration-300 hover:scale-110`}>
                          {info.icon}
                        </div>
                        <div>
                          <h3 className={`text-lg font-semibold ${
                              darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {info.title}
                          </h3>
                          <p className={`text-sm ${
                              darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>

              {/* Social Links */}
              <div className={`mt-8 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  darkMode
                      ? 'bg-gray-900 border border-gray-700'
                      : 'bg-white border border-gray-100'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {t('contact.social')}
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                      <a
                          key={index}
                          href={social.url}
                          className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                              darkMode
                                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          } ${social.color}`}
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  darkMode
                      ? 'bg-gray-900 border border-gray-700'
                      : 'bg-white border border-gray-100'
              }`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <label className={`block text-sm font-medium mb-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {t('contact.form.name')} *
                      </label>
                      <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 transform hover:scale-105 ${
                              darkMode
                                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                          placeholder={t('contact.form.name.placeholder')}
                      />
                    </div>
                    <div className="transform transition-all duration-300 hover:scale-105">
                      <label className={`block text-sm font-medium mb-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {t('contact.form.email')} *
                      </label>
                      <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 transform hover:scale-105 ${
                              darkMode
                                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                          placeholder={t('contact.form.email.placeholder')}
                      />
                    </div>
                  </div>

                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('contact.form.subject')} *
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 transform hover:scale-105 ${
                            darkMode
                                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder={t('contact.form.subject.placeholder')}
                    />
                  </div>

                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none transform hover:scale-105 ${
                            darkMode
                                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder={t('contact.form.message.placeholder')}
                    />
                  </div>

                  <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-xl ${
                          isSubmitting
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 active:scale-95'
                      } text-white`}
                  >
                    {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          <span className="animate-pulse">Processing...</span>
                        </>
                    ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                          {t('contact.form.send')}
                        </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>
  );
};