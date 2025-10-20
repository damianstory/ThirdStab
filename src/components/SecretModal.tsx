'use client'

import Modal from './Modal'
import Link from 'next/link'

interface SecretModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SecretModal({ isOpen, onClose }: SecretModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
        {/* Blue header with emoji */}
        <div className="bg-[#0092ff] p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">👀</span>
          </div>
        </div>
        
        {/* Modal content */}
        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">
            It&apos;s a secret...for now
          </h2>
          
          {/* Incentive tag placeholder */}
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 bg-[#0092ff]/10 text-[#0092ff] text-xs sm:text-sm font-semibold rounded-full">
              Example
            </span>
          </div>
          
          <p className="text-gray-600 text-center mb-6 text-sm sm:text-base leading-relaxed">
            But the first people to find out which companies are participating, 
            and what incentives are available, are going to be the people on our mailing list.
          </p>
          
          <Link
            href="#stay-informed"
            onClick={onClose}
            className="block w-full bg-[#0092ff] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#0082e6] transition-colors text-center"
          >
            Sign up
          </Link>
        </div>
      </div>
    </Modal>
  )
}