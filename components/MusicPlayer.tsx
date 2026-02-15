import React from 'react';
import { Music } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 text-xs text-gray-600 bg-transparent">
      <span className="font-bold text-cyworld-orange">BGM</span>
      <div className="flex-1 bg-white border border-gray-300 px-2 py-0.5 rounded-sm flex items-center overflow-hidden w-48">
        <Music size={12} className="mr-2 text-gray-400" />
        <div className="whitespace-nowrap overflow-hidden">
          <p className="animate-marquee inline-block">
            프리스타일 - Y (Please tell me why...) ♬ 싸이월드 감성 BGM ♬
          </p>
        </div>
      </div>
    </div>
  );
};