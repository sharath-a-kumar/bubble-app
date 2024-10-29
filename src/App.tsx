import React from 'react';
import { Activity, Mic } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen bg-[#1f2937] overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        {/* Title at the top */}
        <div className="absolute top-8 text-white/80 text-xl font-light tracking-wider">
          babble
        </div>

        {/* Center circle with text */}
        <div className="relative">
          <div className="w-48 h-48 rounded-full border border-[#D4A373] flex items-center justify-center">
            <span className="text-[#D4A373] text-2xl font-light tracking-wider">
              Babble
            </span>
          </div>
          <div className="absolute inset-0 w-48 h-48 rounded-full border border-[#D4A373] opacity-50 animate-pulse" />
        </div>

        {/* Bottom buttons */}
        <div className="absolute bottom-12 flex gap-6">
          <button className="w-12 h-12 rounded-full bg-[#1f2937] border border-[#D4A373] flex items-center justify-center text-[#D4A373] transition-all hover:bg-[#D4A373] hover:text-white">
            <Activity size={20} />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#1f2937] border border-[#D4A373] flex items-center justify-center text-[#D4A373] transition-all hover:bg-[#D4A373] hover:text-white">
            <Mic size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;