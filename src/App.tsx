import Header from './components/Header';
import Converter from './components/Converter';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import BlogSection from './components/BlogSection';
import BlogPost from './components/BlogPost';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-200">
      <Header />

      {/* Top Ad Banner */}
      <div className="flex justify-center py-4">
        <AdBanner position="top" />
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-9">
              {/* Hero Section */}
              <div id="home" className="text-center py-8 px-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Free Online Morse Code Converter & Translator 2025
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                  Convert text to Morse code and decode Morse code to text instantly with our free online tool.
                  Fast, accurate telegraph code translator with real-time conversion, copy functionality, and mobile support.
                  Perfect for amateur radio operators, students learning Morse code, and telegraph enthusiasts.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">✨ 100% Free</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">⚡ Real-time Conversion</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">📱 Mobile Friendly</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">🔒 No Registration</span>
                </div>
              </div>

              <div id="converter">
                <Converter />
              </div>

              {/* Additional Content for SEO */}
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* How to Use Section */}
                <div id="how-to-use" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8 transition-colors duration-200">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    How to Use Our Morse Code Converter Tool
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        Text to Morse Code Translation
                      </h4>
                      <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Select "Text to Morse" conversion mode</li>
                        <li>Type or paste your message in the input text area</li>
                        <li>Watch as the Morse code appears automatically in real-time</li>
                        <li>Click the copy button to copy the Morse code result</li>
                        <li>Use the result for amateur radio, telegraph communication, or learning</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        Morse Code to Text Decoding
                      </h4>
                      <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Select "Morse to Text" decoding mode</li>
                        <li>Enter Morse code using dots (.) and dashes (-)</li>
                        <li>Separate individual letters with single spaces</li>
                        <li>Separate words with multiple spaces (5+ spaces)</li>
                        <li>The decoded text message will appear instantly</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Morse Code Reference */}
                <div id="morse-alphabet" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8 transition-colors duration-200">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Complete International Morse Code Alphabet Chart
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Learn the complete International Morse Code alphabet, numbers, and punctuation.
                    This reference chart shows the dot-dash patterns for each character used in telegraph communication.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Letters A-I</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">A:</span> <span className="dark:text-gray-300">.-</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">B:</span> <span className="dark:text-gray-300">-...</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">C:</span> <span className="dark:text-gray-300">-.-.</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">D:</span> <span className="dark:text-gray-300">-..</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">E:</span> <span className="dark:text-gray-300">.</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">F:</span> <span className="dark:text-gray-300">..-.</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">G:</span> <span className="dark:text-gray-300">--.</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">H:</span> <span className="dark:text-gray-300">....</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">I:</span> <span className="dark:text-gray-300">..</span></div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Letters J-R</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">J:</span> <span className="dark:text-gray-300">.---</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">K:</span> <span className="dark:text-gray-300">-.-</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">L:</span> <span className="dark:text-gray-300">.-..</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">M:</span> <span className="dark:text-gray-300">--</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">N:</span> <span className="dark:text-gray-300">-.</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">O:</span> <span className="dark:text-gray-300">---</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">P:</span> <span className="dark:text-gray-300">.--.</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">Q:</span> <span className="dark:text-gray-300">--.-</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">R:</span> <span className="dark:text-gray-300">.-.</span></div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Letters S-Z</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">S:</span> <span className="dark:text-gray-300">...</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">T:</span> <span className="dark:text-gray-300">-</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">U:</span> <span className="dark:text-gray-300">..-</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">V:</span> <span className="dark:text-gray-300">...-</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">W:</span> <span className="dark:text-gray-300">.--</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">X:</span> <span className="dark:text-gray-300">-..-</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">Y:</span> <span className="dark:text-gray-300">-.--</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">Z:</span> <span className="dark:text-gray-300">--..</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Numbers 0-9</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">0:</span> <span className="dark:text-gray-300">-----</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">1:</span> <span className="dark:text-gray-300">.----</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">2:</span> <span className="dark:text-gray-300">..---</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">3:</span> <span className="dark:text-gray-300">...--</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">4:</span> <span className="dark:text-gray-300">....-</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">5:</span> <span className="dark:text-gray-300">.....</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">6:</span> <span className="dark:text-gray-300">-....</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">7:</span> <span className="dark:text-gray-300">--...</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">8:</span> <span className="dark:text-gray-300">---..</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">9:</span> <span className="dark:text-gray-300">----.</span></div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Common Punctuation</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">Period (.):</span> <span className="dark:text-gray-300">.-.-.-</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">Comma (,):</span> <span className="dark:text-gray-300">--..--</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">Question (?):</span> <span className="dark:text-gray-300">..--..</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">Exclamation (!):</span> <span className="dark:text-gray-300">-.-.--</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">Colon (:):</span> <span className="dark:text-gray-300">---...</span></div>
                        <div className="flex justify-between"><span className="font-bold dark:text-gray-200">Semicolon (;):</span> <span className="dark:text-gray-300">-.-.-.</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Morse Code */}
                <div id="about-morse" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8 transition-colors duration-200">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    What is Morse Code? History and Applications
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <strong>Morse code</strong> is a communication method that uses standardized sequences of dots and dashes
                      to represent letters, numbers, and punctuation. Developed by Samuel Morse and Alfred Vail in the 1830s,
                      it revolutionized long-distance communication through telegraph systems.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Modern Uses of Morse Code</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                      <li><strong>Amateur Radio (Ham Radio):</strong> Emergency communications and hobby broadcasting</li>
                      <li><strong>Aviation:</strong> Navigation beacons and radio identification</li>
                      <li><strong>Maritime:</strong> Ship-to-shore communication and emergency signals</li>
                      <li><strong>Military:</strong> Covert communication and training exercises</li>
                      <li><strong>Education:</strong> Learning communication history and encoding principles</li>
                      <li><strong>Accessibility:</strong> Communication method for people with speech or hearing impairments</li>
                    </ul>

                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Famous Morse Code Signals</h4>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6 transition-colors duration-200">
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li><strong>SOS Emergency Signal:</strong> ... --- ... (Save Our Souls/Ship)</li>
                        <li><strong>CQ General Call:</strong> -.-. --.- (Calling any station)</li>
                        <li><strong>73 Best Wishes:</strong> --... ...-- (Amateur radio farewell)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div id="faq" className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors duration-200">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Frequently Asked Questions About Morse Code
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Is this Morse code converter free to use?
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Yes, our Morse code converter is completely free to use. No registration, subscription, or payment required.
                        You can convert unlimited text to Morse code and decode Morse code to text without any restrictions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Does the tool work offline?
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Once the page is loaded, the basic conversion functionality works offline. However, for the best experience
                        and access to all features, we recommend using the tool with an internet connection.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        What's the difference between dots and dashes in Morse code?
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        In Morse code, a dot (dit) is a short signal, while a dash (dah) is a long signal that's three times
                        the length of a dot. The timing relationship between dots and dashes is crucial for proper Morse code transmission.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Can I use this tool for amateur radio practice?
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Absolutely! Our tool is perfect for ham radio operators and amateur radio enthusiasts who want to practice
                        Morse code conversion, learn the alphabet, or prepare for licensing exams.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        How accurate is the Morse code translation?
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Our converter uses the official International Morse Code standard, ensuring 100% accuracy for all letters,
                        numbers, and common punctuation marks supported by the International Telecommunication Union.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar with Ad */}
            <div className="lg:col-span-3 p-4">
              <div className="sticky top-4 space-y-6">
                <AdBanner position="sidebar" className="mb-6" />

                {/* Key Features */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    🚀 Why Choose Our Morse Code Tool?
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span><strong>100% Free</strong> - No hidden costs or premium features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span><strong>No Registration</strong> - Start converting immediately</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span><strong>Real-time Conversion</strong> - See results as you type</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span><strong>Works Offline</strong> - No internet required after loading</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span><strong>Mobile Responsive</strong> - Perfect on all devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span><strong>Copy to Clipboard</strong> - Easy sharing and usage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-0.5">✓</span>
                      <span><strong>International Standard</strong> - ITU compliant Morse code</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Tips */}
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg shadow-sm p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-4">
                    💡 Morse Code Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                    <li>• Use single spaces between letters</li>
                    <li>• Use 5+ spaces between words</li>
                    <li>• Practice with SOS: ... --- ...</li>
                    <li>• Perfect for amateur radio practice</li>
                    <li>• Learn timing: dot = 1 unit, dash = 3 units</li>
                  </ul>
                </div>

                {/* Popular Searches */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    🔍 Popular Morse Code Searches
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">SOS Morse Code</span>
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Morse Alphabet</span>
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Telegraph Code</span>
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Ham Radio</span>
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">CW Practice</span>
                      <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">Morse Numbers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <BlogSection />
      </main>

      {/* Footer Ad */}
      <div className="flex justify-center py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <AdBanner position="footer" />
      </div>

      <Footer />
    </div>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation for anchor links
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  );
}

export default App;