import React, { useState, useEffect } from 'react';
import { Copy, RotateCcw, ArrowUpDown, Check } from 'lucide-react';
import { textToMorse, morseToText, isValidMorseCode } from '../utils/morseCode';

interface ConversionHistory {
  id: number;
  input: string;
  output: string;
  mode: 'textToMorse' | 'morseToText';
  timestamp: Date;
}

const Converter: React.FC = () => {
  const [mode, setMode] = useState<'textToMorse' | 'morseToText'>('textToMorse');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<ConversionHistory[]>([]);

  // Real-time conversion
  useEffect(() => {
    if (!input.trim()) {
      setOutput('');
      return;
    }

    let result = '';
    if (mode === 'textToMorse') {
      result = textToMorse(input);
    } else {
      if (isValidMorseCode(input)) {
        result = morseToText(input);
      } else {
        result = 'Invalid morse code format';
      }
    }
    setOutput(result);
  }, [input, mode]);

  const handleConvert = () => {
    if (!input.trim() || !output || output === 'Invalid morse code format') return;

    const newConversion: ConversionHistory = {
      id: Date.now(),
      input: input.trim(),
      output,
      mode,
      timestamp: new Date()
    };

    setHistory(prev => [newConversion, ...prev.slice(0, 4)]); // Keep last 5 conversions
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const toggleMode = () => {
    setMode(prev => prev === 'textToMorse' ? 'morseToText' : 'textToMorse');
    setInput('');
    setOutput('');
  };

  const loadFromHistory = (item: ConversionHistory) => {
    setMode(item.mode);
    setInput(item.input);
    setOutput(item.output);
  };

  return (
    <div id="converter" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 transition-colors duration-200">
        {/* Mode Toggle */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-lg flex items-center transition-colors duration-200">
            <button
              onClick={() => setMode('textToMorse')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                mode === 'textToMorse'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Text to Morse
            </button>
            <button
              onClick={toggleMode}
              className="p-2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ArrowUpDown className="h-4 w-4" />
            </button>
            <button
              onClick={() => setMode('morseToText')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                mode === 'morseToText'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Morse to Text
            </button>
          </div>
        </div>

        {/* Input Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {mode === 'textToMorse' ? 'Enter Text' : 'Enter Morse Code'}
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                mode === 'textToMorse'
                  ? 'Type your text here...'
                  : 'Enter morse code (use . - and spaces)...'
              }
              className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              maxLength={1000}
            />
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Characters: {input.length}/1000
            </div>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {mode === 'textToMorse' ? 'Morse Code Output' : 'Text Output'}
            </label>
            <div className="relative">
              <textarea
                value={output}
                readOnly
                placeholder="Output will appear here..."
                className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-600 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              {output && (
                <button
                  onClick={handleCopy}
                  className="absolute top-2 right-2 p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <button
            onClick={handleConvert}
            disabled={!input.trim() || !output || output === 'Invalid morse code format'}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
          >
            Add to History
          </button>
          <button
            onClick={handleClear}
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Clear
          </button>
        </div>

        {/* Conversion History */}
        {history.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Conversions</h3>
            <div className="space-y-3">
              {history.map((item) => (
                <div
                  key={item.id}
                  onClick={() => loadFromHistory(item)}
                  className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      {item.mode === 'textToMorse' ? 'Text → Morse' : 'Morse → Text'}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {item.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-700 dark:text-gray-300 truncate">{item.input}</div>
                    <div className="text-gray-900 dark:text-white font-mono truncate">{item.output}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Converter;