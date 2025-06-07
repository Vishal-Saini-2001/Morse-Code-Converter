import React, { useState } from 'react';
import Modal from './Modal';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modal: string) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Morse Code Converter</h3>
              <p className="text-gray-400 text-sm">
                Convert text to Morse code and Morse code to text with our free, easy-to-use online tool.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => openModal('about')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal('privacy')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal('contact')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Real-time conversion</li>
                <li>Copy to clipboard</li>
                <li>Conversion history</li>
                <li>Mobile responsive</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Morse Code Converter. All rights reserved.
          </div>
        </div>
      </footer>

      {/* About Modal */}
      <Modal
        isOpen={activeModal === 'about'}
        onClose={closeModal}
        title="About Morse Code Converter"
      >
        <div className="space-y-4 text-gray-700">
          <p>
            Morse Code Converter is a free online tool that allows you to easily convert text to Morse code 
            and Morse code back to text. Our tool is designed to be simple, fast, and accurate.
          </p>
          <h3 className="text-lg font-semibold text-gray-900">What is Morse Code?</h3>
          <p>
            Morse code is a method used in telecommunication to encode text characters as standardized 
            sequences of two different signal durations, called dots and dashes. It was developed by 
            Samuel Morse in the 1830s and 1840s.
          </p>
          <h3 className="text-lg font-semibold text-gray-900">Features</h3>
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
        <div className="space-y-4 text-gray-700">
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
          
          <h3 className="text-lg font-semibold text-gray-900">Information We Collect</h3>
          <p>
            We do not collect any personal information. All conversions are performed locally in your browser 
            and are not stored on our servers.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900">Cookies</h3>
          <p>
            We may use cookies for analytics purposes through Google Analytics to understand how our service 
            is used and to improve user experience.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900">Third-Party Services</h3>
          <p>
            We may display advertisements through Google AdSense. Please refer to Google's privacy policy 
            for information about how they handle data.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900">Data Security</h3>
          <p>
            Since we don't store your data, there's no risk of your conversion history being compromised. 
            All processing happens locally in your browser.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
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
        <div className="space-y-4 text-gray-700">
          <p>
            We'd love to hear from you! Whether you have questions, suggestions, or feedback about our 
            Morse Code Converter tool, please don't hesitate to reach out.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Get in Touch</h3>
            <p className="text-sm">
              Email: contact@morsecodeconverter.tech
            </p>
            <p className="text-sm mt-2">
              We typically respond within 24-48 hours.
            </p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900">Feedback</h3>
          <p>
            Your feedback helps us improve our tool. Let us know about:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Feature requests</li>
            <li>Bug reports</li>
            <li>User experience improvements</li>
            <li>General suggestions</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-gray-900">Support</h3>
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