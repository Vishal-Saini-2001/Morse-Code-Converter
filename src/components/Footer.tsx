import React, { useState } from 'react';
import Modal from './Modal';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modal: string) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Free Morse Code Converter</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                The most comprehensive free online Morse code converter and telegraph translator. 
                Convert text to Morse code and decode Morse code to text instantly. Perfect for 
                amateur radio operators, students, and telegraph enthusiasts worldwide.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Free Tool</span>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Real-time</span>
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">No Registration</span>
                <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">Mobile Friendly</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Morse Code Tools</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection('converter')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    Text to Morse Converter
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('converter')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    Morse to Text Decoder
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('morse-alphabet')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    Morse Code Alphabet Chart
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about-morse')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    About Morse Code
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('faq')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    FAQ & Help
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources & Info</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => openModal('about')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    About This Tool
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('how-to-use')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    How to Use Guide
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about-morse')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    Morse Code History
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal('privacy')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal('contact')}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    Contact Support
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Keywords footer for SEO */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="text-center mb-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                Related searches: morse code converter online free | text to morse code translator | 
                morse code decoder | telegraph code generator | international morse code alphabet | 
                ham radio morse practice | SOS morse code | CW morse converter | dots and dashes translator | 
                amateur radio tools | morse code chart printable | morse code generator free online
              </p>
            </div>
            <div className="text-center text-sm text-gray-400">
              <p>© 2025 MorseCodeConverter.tech - Free Online Morse Code Tools</p>
              <p className="text-xs mt-1">
                Best free Morse code converter for text-to-morse and morse-to-text translation
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* About Modal */}
      <Modal
        isOpen={activeModal === 'about'}
        onClose={closeModal}
        title="About Morse Code Converter"
      >
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            Morse Code Converter is a free online tool that allows you to easily convert text to Morse code 
            and Morse code back to text. Our tool is designed to be simple, fast, and accurate.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">What is Morse Code?</h3>
          <p>
            Morse code is a method used in telecommunication to encode text characters as standardized 
            sequences of two different signal durations, called dots and dashes. It was developed by 
            Samuel Morse in the 1830s and 1840s.
          </p>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Features</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Real-time conversion as you type</li>
            <li>Support for letters, numbers, and common punctuation</li>
            <li>Copy to clipboard functionality</li>
            <li>Conversion history tracking</li>
            <li>Mobile-friendly responsive design</li>
            <li>No registration required</li>
          </ul>
        </div>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title="Privacy Policy"
      >
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Information We Collect</h3>
          <p>
            We do not collect any personal information. All conversions are performed locally in your browser 
            and are not stored on our servers.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cookies</h3>
          <p>
            We may use cookies for analytics purposes through Google Analytics to understand how our service 
            is used and to improve user experience.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Third-Party Services</h3>
          <p>
            We may display advertisements through Google AdSense. Please refer to Google's privacy policy 
            for information about how they handle data.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Security</h3>
          <p>
            Since we don't store your data, there's no risk of your conversion history being compromised. 
            All processing happens locally in your browser.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our contact form.
          </p>
        </div>
      </Modal>

      {/* Contact Modal */}
      <Modal
        isOpen={activeModal === 'contact'}
        onClose={closeModal}
        title="Contact Us"
      >
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            We'd love to hear from you! Whether you have questions, suggestions, or feedback about our 
            Morse Code Converter tool, please don't hesitate to reach out.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg transition-colors duration-200">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Get in Touch</h3>
            <p className="text-sm">
              Email: contact@morsecodeconverter.tech
            </p>
            <p className="text-sm mt-2">
              We typically respond within 24-48 hours.
            </p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Feedback</h3>
          <p>
            Your feedback helps us improve our tool. Let us know about:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Feature requests</li>
            <li>Bug reports</li>
            <li>User experience improvements</li>
            <li>General suggestions</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Support</h3>
          <p>
            If you're having trouble using our tool, please include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Your browser and version</li>
            <li>Description of the issue</li>
            <li>Steps to reproduce the problem</li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Footer;