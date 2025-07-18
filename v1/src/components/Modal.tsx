'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export default function Modal({ isOpen, onClose, children, className = '' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      // Store the current active element
      previousActiveElement.current = document.activeElement as HTMLElement
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
      
      // Focus on the modal
      modalRef.current?.focus()
      
      // Handle escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }
      
      document.addEventListener('keydown', handleEscape)
      
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = ''
        
        // Return focus to the previous element
        previousActiveElement.current?.focus()
      }
    }
  }, [isOpen, onClose])

  // Handle click outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Handle tab key for focus trap
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab' && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement?.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement?.focus()
      }
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fadeIn ${className}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md animate-modalSlideIn"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
        {children}
      </div>
    </div>
  )
}