'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface LiveStreamModalProps {
  isMobile?: boolean
}

export default function LiveStreamModal({ isMobile = false }: LiveStreamModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const buttonClass = isMobile 
    ? "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-300 flex items-center space-x-2 w-full"
    : "bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors duration-300 flex items-center space-x-2"

  return (
    <>
      {/* Modal Trigger Button */}
      <button 
        onClick={openModal}
        className={buttonClass}
      >
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span>Watch Live</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Background overlay - prevents closing */}
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
          
          {/* Modal container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-bold text-gray-900">Live Stream</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Modal body - Video Player */}
              <div className="p-4">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    controls
                    autoPlay
                    muted
                    playsInline
                  >
                    <source src="https://cdn3.wowza.com/1/ZVBYYXFLLzE0c3NC/Qk1FMURC/hls/live/playlist.m3u8" type="application/x-mpegURL" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              {/* Modal footer */}
              <div className="p-4 border-t bg-gray-50 rounded-b-lg">
                <p className="text-sm text-gray-600 text-center">
                  Live stream is currently active. Close this window to stop watching.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
