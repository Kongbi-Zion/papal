"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LiveStreamContextType {
  isOpen: boolean;
  openLiveStream: () => void;
  closeLiveStream: () => void;
}

const LiveStreamContext = createContext<LiveStreamContextType | undefined>(undefined);

export function useLiveStream() {
  const context = useContext(LiveStreamContext);
  if (context === undefined) {
    throw new Error("useLiveStream must be used within a LiveStreamProvider");
  }
  return context;
}

interface LiveStreamProviderProps {
  children: ReactNode;
}

export function LiveStreamProvider({ children }: LiveStreamProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openLiveStream = () => setIsOpen(true);
  const closeLiveStream = () => setIsOpen(false);

  return (
    <LiveStreamContext.Provider value={{ isOpen, openLiveStream, closeLiveStream }}>
      {children}
    </LiveStreamContext.Provider>
  );
}
