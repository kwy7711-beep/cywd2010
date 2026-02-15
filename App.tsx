import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MusicPlayer } from './components/MusicPlayer';
import { TabId } from './types';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Photos } from './pages/Photos';
import { Board } from './pages/Board';
import { Guestbook } from './pages/Guestbook';
import { Secret } from './pages/Secret';
import { CharacterGallery } from './pages/CharacterGallery';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [galleryCharacterId, setGalleryCharacterId] = useState<string | null>(null);

  const handleOpenGallery = (characterId: string) => {
    setGalleryCharacterId(characterId);
    setActiveTab('gallery');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'profile': return <Profile />;
      case 'photos': return <Photos />;
      case 'board': return <Board />;
      case 'guestbook': return <Guestbook />;
      case 'secret': return <Secret onOpenGallery={handleOpenGallery} />;
      case 'gallery': return <CharacterGallery characterId={galleryCharacterId} onBack={() => setActiveTab('secret')} />;
      default: return <Home />;
    }
  };

  const getTabStyle = (tab: TabId) => {
    const isActive = activeTab === tab;
    
    if (tab === 'secret') {
        return `
          cursor-pointer w-full py-2 px-1 mb-1 text-center text-[11px] border border-red-900 rounded-r-md transition-all
          ${isActive 
            ? 'bg-red-800 text-white font-bold border-l-red-800 ml-[-1px] shadow-inner translate-x-1' 
            : 'bg-black text-red-500 hover:bg-gray-900'}
        `;
    }

    if (tab === 'gallery') {
         return `
          cursor-pointer w-full py-2 px-1 mb-1 text-center text-[11px] border border-gray-400 rounded-r-md transition-all
          ${isActive 
            ? 'bg-white text-cyworld-blue font-bold border-l-white ml-[-1px] shadow-sm translate-x-1' 
            : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}
        `;
    }

    return `
      cursor-pointer w-full py-2 px-1 mb-1 text-center text-[11px] border border-[#7e7e7e] rounded-r-md transition-all
      ${isActive 
        ? 'bg-white text-black font-bold border-l-white ml-[-1px] translate-x-1' 
        : 'bg-[#238db4] text-white hover:bg-[#1a6d8c]'}
    `;
  };

  const getMobileTabStyle = (tab: TabId) => {
      const isActive = activeTab === tab;
      
      if (tab === 'secret') {
          return `flex-1 py-2 text-[10px] border-b-2 whitespace-nowrap transition-colors ${isActive ? 'border-red-600 font-bold text-red-700 bg-red-50' : 'border-transparent text-gray-500 hover:bg-gray-50'}`;
      }
      
      return `flex-1 py-2 text-[10px] border-b-2 whitespace-nowrap transition-colors ${isActive ? 'border-cyworld-blue font-bold text-cyworld-blue bg-blue-50' : 'border-transparent text-gray-500 hover:bg-gray-50'}`;
  };

  return (
    /* 최상위 컨테이너: 모바일 패딩 축소 (p-2), 데스크탑 패딩 유지 (md:p-8) */
    <div className="min-h-screen p-2 md:p-8 md:pr-24 flex justify-center items-center font-pixel bg-[#eeeeee] overflow-x-hidden">
      
      {/* Outer Gray Background Container */}
      <div className="relative bg-cyworld-bg p-1 md:p-2 rounded-lg md:rounded-xl shadow-2xl max-w-[1024px] w-full">
        
        {/* Dotted Inner Line */}
        <div className="border border-dashed border-white rounded md:rounded-lg p-1 md:p-4 h-full bg-cyworld-bg">
          
          {/* Main White Content Area */}
          <div className="relative bg-cyworld-inner rounded-lg md:rounded-xl p-3 md:p-6 shadow-lg min-h-[600px] md:min-h-[650px] h-auto flex flex-col">
            
            {/* Header / Title Bar */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 md:mb-4 border-b border-gray-300 pb-2">
               <div className="flex items-end gap-2 justify-between w-full md:w-auto">
                 <div className="flex items-end gap-2">
                    <h1 className="text-base md:text-xl font-bold text-cyworld-blue tracking-tighter truncate">
                    설휘영의 미니홈피
                    </h1>
                    <span className="text-[9px] md:text-[10px] text-cyworld-orange font-bold pb-1 truncate">
                    www.cyworld.com/seolhwa_0
                    </span>
                 </div>
                 {/* Mobile Music Player Icon (simplified) could go here */}
               </div>
               <div className="hidden md:block mt-2 md:mt-0">
                 <MusicPlayer />
               </div>
            </div>

            {/* Mobile Tabs (Moved to Top for better UX) */}
            <div className="md:hidden flex overflow-x-auto w-full mb-3 border-b border-gray-200 bg-white no-scrollbar sticky top-0 z-20">
              <button onClick={() => setActiveTab('home')} className={getMobileTabStyle('home')}>홈</button>
              <button onClick={() => setActiveTab('profile')} className={getMobileTabStyle('profile')}>프로필</button>
              <button onClick={() => setActiveTab('photos')} className={getMobileTabStyle('photos')}>사진첩</button>
              <button onClick={() => setActiveTab('board')} className={getMobileTabStyle('board')}>게시판</button>
              <button onClick={() => setActiveTab('guestbook')} className={getMobileTabStyle('guestbook')}>방명록</button>
              <button onClick={() => setActiveTab('secret')} className={getMobileTabStyle('secret')}>비밀</button>
            </div>

            {/* Main Content Layout */}
            <div className="flex flex-col md:flex-row h-full gap-3 md:gap-4 relative">
              
              {/* Left Column (Profile) */}
              <div className="w-full md:w-56 flex-shrink-0 z-10">
                <Sidebar />
              </div>

              {/* Right Column (Content) */}
              <div className="flex-1 bg-white border border-gray-300 rounded-lg p-3 md:p-6 relative z-10 shadow-sm h-full min-h-[400px] md:min-h-[450px]">
                <div className="h-full w-full overflow-y-auto custom-scrollbar">
                  {renderContent()}
                </div>
              </div>

              {/* Right Side Vertical Tabs (Desktop Only) */}
              <div className="hidden md:flex flex-col absolute -right-[76px] top-10 w-[75px] z-0">
                <button onClick={() => setActiveTab('home')} className={getTabStyle('home')}>홈</button>
                <button onClick={() => setActiveTab('profile')} className={getTabStyle('profile')}>프로필</button>
                <button onClick={() => setActiveTab('photos')} className={getTabStyle('photos')}>사진첩</button>
                <button onClick={() => setActiveTab('board')} className={getTabStyle('board')}>게시판</button>
                <button onClick={() => setActiveTab('guestbook')} className={getTabStyle('guestbook')}>방명록</button>
                <div className="h-4"></div>
                <button onClick={() => setActiveTab('secret')} className={getTabStyle('secret')}>★비밀★</button>
                {activeTab === 'gallery' && (
                  <button onClick={() => {}} className={getTabStyle('gallery')}>Gallery</button>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}