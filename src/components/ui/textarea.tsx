'use client';

import { forwardRef, KeyboardEvent, TextareaHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onEnterSubmit?: () => void;
  allowLineBreaks?: boolean;
  className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onEnterSubmit, allowLineBreaks = true, onKeyDown, ...props }, ref) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
      // Call the original onKeyDown if provided
      onKeyDown?.(e);
      
      // Handle Enter key behavior
      if (e.key === 'Enter') {
        if (e.shiftKey && allowLineBreaks) {
          // Shift+Enter: Allow default behavior (create line break)
          return;
        } else if (!e.shiftKey && onEnterSubmit) {
          // Enter without Shift: Submit if handler provided
          e.preventDefault();
          onEnterSubmit();
        }
        // If allowLineBreaks is false and no onEnterSubmit, prevent default
        else if (!allowLineBreaks && !onEnterSubmit) {
          e.preventDefault();
        }
      }
    };

    return (
      <textarea
        className={clsx(
          // Base styles
          'flex min-h-[80px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3',
          'text-base placeholder:text-gray-400',
          // Focus styles
          'focus:outline-none focus:ring-2 focus:ring-[#0092ff] focus:border-transparent',
          // Disabled styles
          'disabled:cursor-not-allowed disabled:opacity-50',
          // Resize behavior
          'resize-none',
          // Mobile optimization
          'min-h-[44px] shadow-lg',
          className
        )}
        ref={ref}
        onKeyDown={handleKeyDown}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
