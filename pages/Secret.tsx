import React, { useState } from 'react';
import { Lock, FileWarning, EyeOff, AlertTriangle, BookOpen, Clock, MapPin, UserCheck, ZoomIn, Terminal, X } from 'lucide-react';
import { SCENARIO_SETTINGS, CHARACTERS } from '../constants';

interface SecretProps {
  onOpenGallery: (characterId: string) => void;
}

export const Secret: React.FC<SecretProps> = ({ onOpenGallery }) => {
  const [selectedCharId, setSelectedCharId] = useState(CHARACTERS[0].id);
  const [showCommands, setShowCommands] = useState(false);

  const selectedChar = CHARACTERS.find(c => c.id === selectedCharId) || CHARACTERS[0];
  
  // Gallery is disabled for Shin Chae-ah (User)
  const isGalleryEnabled = selectedChar.id !== 'chae-ah';

  return (
    <div className="h-full overflow-y-auto pr-2 custom-scrollbar bg-gray-50 p-2 relative">
      
      {/* Commands Modal Overlay */}
      {showCommands && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-gray-900 border-2 border-green-500 p-5 w-full max-w-sm shadow-2xl relative font-mono text-green-500 rounded-sm">
             <button 
                onClick={() => setShowCommands(false)}
                className="absolute top-2 right-2 text-green-700 hover:text-green-400 transition-colors"
             >
               <X size={20} />
             </button>
             
             <div className="flex items-center mb-4 border-b border-green-800 pb-2">
               <Terminal size={18} className="mr-2 animate-pulse" /> 
               <h3 className="text-lg font-bold tracking-wider">SYSTEM COMMANDS</h3>
             </div>
             
             <ul className="space-y-3 text-xs leading-relaxed">
               <li className="flex gap-2">
                 <span className="font-bold text-white min-w-[80px]">!요약</span>
                 <span className="text-gray-400">: 15~20턴 요약</span>
               </li>
               <li className="flex gap-2">
                 <span className="font-bold text-white min-w-[80px]">!문체점검</span>
                 <span className="text-gray-400">: 방이 고장났을때 점검</span>
               </li>
               <li className="flex gap-2">
                 <span className="font-bold text-white min-w-[80px]">!이미지점검</span>
                 <span className="text-gray-400">: 외부이미지 찐빠시 이미지 점검</span>
               </li>
               <li className="flex gap-2">
                 <span className="font-bold text-white min-w-[80px]">!ㅇㅇ홈피</span>
                 <span className="text-gray-400">: 캐릭터들의 미니홈피<br/>(휘영/하늘/승준/하빈/민)</span>
               </li>
               <li className="flex gap-2">
                 <span className="font-bold text-white min-w-[80px]">!버디</span>
                 <span className="text-gray-400">: 버디버디 출력</span>
               </li>
             </ul>
             
             <div className="mt-6 text-[10px] text-green-800 border-t border-green-900 pt-2 flex justify-between">
               <span>{"> _ACCESS_LEVEL: ADMIN"}</span>
               <span className="animate-pulse">_CURSOR_BLINKING...</span>
             </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-red-900 text-white p-3 mb-6 flex items-center justify-between rounded-sm shadow-md border-2 border-red-700">
        <div className="flex items-center gap-2">
          <Lock size={16} className="text-red-200" />
          <span className="font-bold text-sm tracking-wider">TOP SECRET</span>
        </div>
        <div className="flex items-center gap-2">
            <button 
                onClick={() => setShowCommands(true)}
                className="text-[10px] bg-black text-green-500 px-2 py-1 rounded border border-green-700 hover:bg-green-900 hover:text-white transition-colors flex items-center gap-1 shadow-sm"
            >
                <Terminal size={10} />
                <span className="font-bold">명령어</span>
            </button>
            <span className="text-[10px] bg-red-800 px-2 py-1 rounded border border-red-600 hidden sm:inline-block">ID: Shin Chae-ah</span>
        </div>
      </div>

      {/* Awakening Scenario (Possession Point) */}
      <div className="mb-8 border-2 border-dashed border-gray-400 bg-white p-5 shadow-sm relative">
        <div className="absolute top-0 left-0 bg-black text-white text-[10px] px-2 py-1 font-bold">THE AWAKENING (빙의)</div>
        <div className="absolute top-0 right-0 bg-gray-200 text-gray-500 text-[10px] px-2 py-1 font-mono">2010.11.20</div>
        
        <h3 className="text-lg font-bold text-gray-900 mt-4 mb-4 border-b border-gray-800 pb-2">
          <BookOpen className="inline-block mr-2 mb-1" size={16} />
          {SCENARIO_SETTINGS.title}
        </h3>
        
        <div className="bg-gray-100 p-3 rounded-sm text-xs space-y-3 font-sans text-gray-800 border-l-4 border-red-500">
           <div className="flex items-start gap-2">
             <MapPin size={14} className="mt-0.5 text-gray-500" />
             <p><span className="font-bold">장소:</span> {SCENARIO_SETTINGS.location}</p>
           </div>
           <div className="flex items-start gap-2">
             <UserCheck size={14} className="mt-0.5 text-gray-500" />
             <p><span className="font-bold">상황:</span> {SCENARIO_SETTINGS.situation}</p>
           </div>
           <div className="flex items-start gap-2">
             <Clock size={14} className="mt-0.5 text-red-600 animate-pulse" />
             <p><span className="font-bold text-red-600">위기:</span> {SCENARIO_SETTINGS.time_limit}</p>
           </div>
           <hr className="border-gray-300"/>
           <p className="leading-relaxed">
             <span className="font-bold bg-yellow-200 px-1">SYSTEM:</span> {SCENARIO_SETTINGS.meta_info}
             <br/><br/>
             테이블 위에는 <span className="font-bold text-red-600 underline">유산유도제</span>가 들어있는 포도주스가 올려져 있습니다.
             앞에 앉은 윤하늘은 불안한 눈빛으로 가방을 챙겨 일어나려 합니다.
             <br/><br/>
             지금 포도주스를 건네시겠습니까? 아니면...
           </p>
        </div>
      </div>

      {/* Character Dossiers - Tabbed Interface */}
      <div className="flex items-center mb-2 pl-1 border-l-4 border-black h-6">
        <EyeOff className="mr-2" size={16} />
        <h3 className="text-sm font-bold text-gray-800">CHARACTER INTELLIGENCE</h3>
      </div>

      <div className="bg-white border border-gray-300 shadow-sm flex flex-col">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-300 bg-gray-100 scrollbar-hide">
          {CHARACTERS.map((char) => (
            <button
              key={char.id}
              onClick={() => setSelectedCharId(char.id)}
              className={`
                px-3 py-2 text-xs font-bold whitespace-nowrap transition-colors
                ${selectedCharId === char.id 
                  ? 'bg-white text-red-700 border-t-2 border-t-red-600 border-r border-r-gray-200' 
                  : 'text-gray-500 hover:bg-gray-200 border-r border-gray-200'}
              `}
            >
              {char.name}
            </button>
          ))}
        </div>

        {/* Selected Character Content */}
        <div className="p-4 relative min-h-[250px]">
          <div className="absolute top-2 right-2 border-2 border-red-600 text-red-600 px-2 py-0.5 font-bold text-[10px] bg-white bg-opacity-90 rounded-sm shadow-sm rotate-[-5deg] z-10">
              CONFIDENTIAL
          </div>

          <div className="flex flex-col md:flex-row gap-4">
             {/* Photo (Clickable only if gallery is enabled) */}
             <div 
               className={`w-24 h-24 bg-gray-200 shrink-0 self-center md:self-start border border-gray-400 p-1 relative transition-colors ${isGalleryEnabled ? 'cursor-pointer group hover:border-red-400' : ''}`}
               onClick={() => isGalleryEnabled && onOpenGallery(selectedChar.id)}
             >
                <img 
                  src={selectedChar.imageUrl} 
                  alt={selectedChar.name} 
                  className="w-full h-full object-cover transition-all duration-500" 
                />
                
                {/* Overlay Hint - only show if gallery is enabled */}
                {isGalleryEnabled && (
                    <>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all">
                            <div className="bg-white bg-opacity-90 rounded-full p-1 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all shadow-md">
                                <ZoomIn size={16} className="text-red-800" />
                            </div>
                        </div>
                        <div className="absolute -bottom-5 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] bg-black text-white px-1 py-0.5 rounded">Gallery View</span>
                        </div>
                    </>
                )}
             </div>

             {/* Info */}
             <div className="flex-1 space-y-3">
               <div>
                 <h4 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                   {selectedChar.name}
                   <span className={`text-[10px] px-1.5 py-0.5 text-white rounded-sm ${selectedChar.themeColor === 'red' ? 'bg-red-700' : 'bg-gray-600'}`}>
                     {selectedChar.tagline}
                   </span>
                 </h4>
                 <p className="text-[10px] text-gray-400 font-mono mt-0.5">ID_CODE: {selectedChar.id.toUpperCase()}_2010</p>
               </div>

               <div className="text-xs text-gray-700 font-sans leading-relaxed bg-gray-50 p-2 border border-gray-200">
                 <span className="font-bold text-gray-900">Summary:</span> {selectedChar.description}
               </div>

               {/* Secret & Weakness */}
               <div className="space-y-2 mt-2">
                 {selectedChar.secret && (
                    <div className="bg-red-50 border border-red-200 p-2 rounded-sm flex items-start gap-2">
                      <AlertTriangle size={14} className="text-red-600 shrink-0 mt-0.5" />
                      <div className="text-xs">
                        <span className="font-bold text-red-800 block mb-1">SECRET (비밀)</span>
                        <span className="text-gray-800">{selectedChar.secret}</span>
                      </div>
                    </div>
                 )}
                 {selectedChar.weakness && (
                    <div className="bg-blue-50 border border-blue-200 p-2 rounded-sm flex items-start gap-2">
                      <div className="w-3.5 h-3.5 shrink-0 flex items-center justify-center font-bold text-blue-600 text-[10px] border border-blue-400 rounded-full mt-0.5">W</div>
                      <div className="text-xs">
                        <span className="font-bold text-blue-800 block mb-1">WEAKNESS (약점)</span>
                        <span className="text-gray-800">{selectedChar.weakness}</span>
                      </div>
                    </div>
                 )}
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
