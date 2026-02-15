import React from 'react';
import { PHOTOS } from '../constants';

export const Photos: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto pr-2">
      <h2 className="text-cyworld-blue font-bold text-lg mb-4 border-b border-gray-300 pb-2">
        Photo Album
      </h2>
      
      <div className="space-y-8">
        {PHOTOS.map((photo) => (
          <div key={photo.id} className="bg-white p-4 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-end mb-2 border-b border-dashed border-gray-200 pb-2">
              <h3 className="font-bold text-sm text-gray-700">{photo.title}</h3>
              <span className="text-[10px] text-gray-400">{photo.date}</span>
            </div>
            
            <div className="flex justify-center my-4 bg-gray-50 p-2 border border-gray-100">
               <img src={photo.imageUrl} alt={photo.title} className="max-w-full max-h-[300px] object-contain shadow-md" />
            </div>
            
            <div className="text-xs text-gray-600 leading-relaxed whitespace-pre-line font-sans">
              {photo.description}
            </div>
            
            <div className="mt-4 flex gap-2">
               <button className="text-[10px] text-cyworld-blue font-bold hover:underline">스크랩(0)</button>
               <span className="text-[10px] text-gray-300">|</span>
               <button className="text-[10px] text-cyworld-blue font-bold hover:underline">댓글달기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};