import React, { useState } from 'react';
import { INITIAL_GUESTBOOK } from '../constants';
import { GuestbookEntry } from '../types';
import { Home, User } from 'lucide-react';

export const Guestbook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(INITIAL_GUESTBOOK);
  const [inputText, setInputText] = useState('');

  const handleAddEntry = () => {
    if (!inputText.trim()) return;
    
    // Calculate the next ID based on the maximum existing ID
    const nextId = entries.length > 0 ? Math.max(...entries.map(e => e.id)) + 1 : 1;
    
    const newEntry: GuestbookEntry = {
      id: nextId,
      author: '신채아',
      content: inputText,
      date: new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').slice(0, -1),
      // User requested specific avatar for Shin Chae-ah
      avatarUrl: 'https://cywd2.jjerrii.uk/S/1771059664730_01.png'
    };

    setEntries([newEntry, ...entries]);
    setInputText('');
  };

  return (
    <div className="h-full flex flex-col overflow-y-auto custom-scrollbar">
      <h2 className="text-cyworld-blue font-bold text-lg mb-4 border-b border-gray-300 pb-2">
        Guestbook
      </h2>

      {/* Input Area: Stack on mobile, Row on desktop */}
      <div className="bg-gray-100 p-3 mb-6 border border-gray-300 flex flex-col sm:flex-row gap-3">
        <div className="w-full h-32 sm:w-24 sm:h-24 bg-white border border-gray-200 flex items-center justify-center text-gray-300 text-xs overflow-hidden shrink-0">
           {/* Preview current user avatar */}
           <img src="https://cywd2.jjerrii.uk/S/1771059664730_01.png" alt="me" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 resize-none border border-gray-300 p-2 text-xs focus:outline-none focus:border-cyworld-blue mb-2 sm:mb-1 min-h-[80px]"
            placeholder="일촌평을 남겨주세요~!"
          />
          <div className="flex justify-end">
             <button 
               onClick={handleAddEntry}
               className="bg-white border border-gray-300 px-4 py-1 text-xs text-gray-600 hover:text-cyworld-orange hover:border-cyworld-orange w-full sm:w-auto"
             >
               확인
             </button>
          </div>
        </div>
      </div>

      {/* Entries */}
      <div className="space-y-4 pb-4">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-gray-50 p-3 border-t border-b border-gray-200">
             <div className="flex justify-between items-center mb-2 bg-gray-200 px-2 py-1 text-xs">
                <div className="flex items-center gap-1">
                   <span className="font-bold text-blue-700">NO. {entry.id}</span>
                   <span className="font-bold text-gray-700 ml-2">{entry.author}</span>
                   <Home size={10} className="text-orange-500 cursor-pointer" />
                </div>
                <span className="text-gray-500 font-sans text-[10px]">{entry.date}</span>
             </div>
             
             <div className="flex gap-3 sm:gap-4 pl-1 sm:pl-2">
                {/* Fixed size avatar */}
                <img src={entry.avatarUrl} alt="avatar" className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 p-0.5 bg-white object-cover shrink-0" />
                <div className="flex-1 text-xs text-gray-700 leading-relaxed pt-1 whitespace-pre-wrap">
                   {entry.content}
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};