import React from 'react';
import Header from './components/Header';
import Converter from './components/Converter';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
              <div className="text-center py-8 px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Free Morse Code Converter
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Convert text to Morse code and Morse code to text instantly. 
                  Fast, accurate, and easy to use with real-time conversion and copy functionality.
                </p>
              </div>
              
              <Converter />
              
              {/* Additional Content for SEO */}
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    How to Use the Morse Code Converter
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Text to Morse Code
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Select "Text to Morse" mode</li>
                        <li>Type or paste your text in the input area</li>
                        <li>The Morse code will appear automatically</li>
                        <li>Click the copy button to copy the result</li>
                      </ol>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Morse Code to Text
                      </h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Select "Morse to Text" mode</li>
                        <li>Enter Morse code using dots (.) and dashes (-)</li>
                        <li>Separate letters with spaces</li>
                        <li>The decoded text will appear automatically</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Morse Code Quick Reference
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="space-y-1">
                        <div><strong>A:</strong> .-</div>
                        <div><strong>B:</strong> -...</div>
                        <div><strong>C:</strong> -.-.</div>
                        <div><strong>D:</strong> -..</div>
                        <div><strong>E:</strong> .</div>
                      </div>
                      <div className="space-y-1">
                        <div><strong>F:</strong> ..-.</div>
                        <div><strong>G:</strong> --.</div>
                        <div><strong>H:</strong> ....</div>
                        <div><strong>I:</strong> ..</div>
                        <div><strong>J:</strong> .---</div>
                      </div>
                      <div className="space-y-1">
                        <div><strong>K:</strong> -.-</div>
                        <div><strong>L:</strong> .-..</div>
                        <div><strong>M:</strong> --</div>
                        <div><strong>N:</strong> -.</div>
                        <div><strong>O:</strong> ---</div>
                      </div>
                      <div className="space-y-1">
                        <div><strong>P:</strong> .--.</div>
                        <div><strong>Q:</strong> --.-</div>
                        <div><strong>R:</strong> .-.</div>
                        <div><strong>S:</strong> ...</div>
                        <div><strong>T:</strong> -</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar with Ad */}
            <div className="lg:col-span-3 p-4">
              <div className="sticky top-4">
                <AdBanner position="sidebar" className="mb-6" />
                
                {/* Additional Info */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Why Use Our Tool?
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      100% Free to use
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      No registration required
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Real-time conversion
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Works offline
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Mobile friendly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer Ad */}
      <div className="flex justify-center py-4 bg-white border-t">
        <AdBanner position="footer" />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;