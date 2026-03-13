"use client";

import { useLiveStream } from "@/contexts/LiveStreamContext";

export default function LiveStreamModal() {
  const { isOpen, closeLiveStream } = useLiveStream();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Background */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-md"></div>

      {/* Modal */}
      <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] bg-white">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-600 to-red-700">
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="text-white font-semibold tracking-wide">
                LIVE
              </span>
            </div>

            <h2 className="text-white text-lg font-semibold">
              Papal Visit Africa – Live Broadcast
            </h2>
          </div>
        </div>

        {/* Video */}
        <div className="bg-black">
          <div className="relative w-full pb-[56.25%]">
            <video
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              playsInline
            >
              <source
                src="https://cdn3.wowza.com/1/ZVBYYXFLLzE0c3NC/Qk1FMURC/hls/live/playlist.m3u8"
                type="application/x-mpegURL"
              />
            </video>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t">
          
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            Live coverage of the Papal Visit
          </div>

          <button
            onClick={closeLiveStream}
            className="px-4 py-2 text-sm hover:cursor-pointer font-medium rounded-lg bg-gray-900 text-white hover:bg-black transition"
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
}