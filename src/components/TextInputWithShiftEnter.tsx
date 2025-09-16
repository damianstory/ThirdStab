'use client';

import { useState, FormEvent } from 'react';
import { Textarea } from './ui/textarea';

interface TextInputWithShiftEnterProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
  onSubmit?: (text: string) => void;
  submitOnEnter?: boolean;
}

export default function TextInputWithShiftEnter({ 
  placeholder = "Type your message... (Shift+Enter for new line, Enter to submit)", 
  buttonText = "Submit",
  className = "",
  onSubmit,
  submitOnEnter = true
}: TextInputWithShiftEnterProps) {
  const [text, setText] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');

  const handleSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    
    if (!text.trim()) {
      return;
    }

    setStatus('loading');
    
    try {
      // Call the provided onSubmit handler
      await onSubmit?.(text);
      setText('');
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setStatus('idle');
    }
  };

  const handleEnterSubmit = () => {
    if (submitOnEnter && text.trim()) {
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex flex-col gap-3">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          onEnterSubmit={handleEnterSubmit}
          allowLineBreaks={true}
          disabled={status === 'loading'}
          className="min-h-[100px]"
        />
        <button
          type="submit"
          disabled={status === 'loading' || !text.trim()}
          className="px-6 py-3 bg-[#0092ff] text-white font-medium rounded-lg hover:bg-[#0080e6] focus:outline-none focus:ring-2 focus:ring-[#0092ff] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 min-h-[44px] shadow-lg"
        >
          {status === 'loading' ? 'Submitting...' : buttonText}
        </button>
      </div>
      
      <div className="mt-2 text-xs text-gray-500">
        <p>💡 <strong>Tip:</strong> Press <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Shift + Enter</kbd> for a new line, <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Enter</kbd> to submit</p>
      </div>
    </form>
  );
}
