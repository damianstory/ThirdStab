'use client';

import TextInputWithShiftEnter from '@/components/TextInputWithShiftEnter';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function TestTextareaPage() {
  const [submissions, setSubmissions] = useState<string[]>([]);

  const handleSubmit = async (text: string) => {
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setSubmissions(prev => [...prev, text]);
    console.log('Submitted text:', text);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Shift+Enter Textarea Demo
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Demo Component */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Interactive Text Input</h2>
              <p className="text-gray-600 mb-4">
                Try typing some text with multiple lines using <strong>Shift+Enter</strong> for line breaks, 
                then press <strong>Enter</strong> to submit.
              </p>
              
              <TextInputWithShiftEnter
                placeholder="Type your message here... 
Use Shift+Enter for new lines
Press Enter to submit"
                buttonText="Send Message"
                onSubmit={handleSubmit}
                className="mb-6"
              />
            </div>

            {/* Basic Textarea */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Basic Textarea Component</h2>
              <p className="text-gray-600 mb-4">
                This is just the base textarea component without submission logic.
              </p>
              
              <Textarea
                placeholder="Basic textarea - Shift+Enter for new lines"
                className="mb-4"
                onEnterSubmit={() => alert('Enter pressed!')}
              />
            </div>
          </div>

          {/* Submissions Display */}
          {submissions.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Submitted Messages</h2>
              <div className="space-y-3">
                {submissions.map((submission, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="text-sm text-blue-600 mb-1">Message #{index + 1}</div>
                    <pre className="whitespace-pre-wrap text-gray-800 font-mono text-sm">
                      {submission}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">How it works:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <strong>Shift + Enter:</strong> Creates a new line in the textarea
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <strong>Enter (alone):</strong> Submits the form (if there's text)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <strong>Empty text:</strong> Enter key is ignored to prevent empty submissions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
