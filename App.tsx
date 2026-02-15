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

  return (
    /* 최상위 컨테이너: md:pr-24를 추가해 오른쪽 탭 공간을 확보했습니다. */
    <div className="min-h-screen p-4 md:p-8 md:pr-24 flex justify-center items-center font-pixel bg-[#eeeeee]">
      
      {/* Outer Gray Background Container */}
      <div className="relative bg-cyworld-bg p-2 rounded-xl shadow-2xl max-w-[1024px] w-full overflow-visible">
        
        {/* Dotted Inner Line */}
        <div className="border-2 border-dashed border-white rounded-lg p-2 md:p-4 h-full bg-cyworld-bg">
          
          {/* Main White Content Area */}
          <div className="relative bg-cyworld-inner rounded-xl p-4 md:p-6 shadow-lg min-h-[650px] h-auto flex flex-col">
            
            {/* Header / Title Bar */}
            <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
               <div className="flex items-end gap-2">
                 <h1 className="text-lg md:text-xl font-bold text-cyworld-blue tracking-tighter">
                   설휘영의 미니홈피
                 </h1>
                 <span className="text-[10px] text-cyworld-orange font-bold pb-1">www.cyworld.com/seolhwa_0</span>
               </div>
               <div className="hidden md:block">
                 <MusicPlayer />
               </div>
            </div>

            {/* Main Content Layout */}
            <div className="flex flex-col md:flex-row h-full gap-4 relative">
              
              {/* Left Column (Profile) */}
              <div className="w-full md:w-56 flex-shrink-0 z-10">
                <Sidebar />
              </div>

              {/* Right Column (Content) */}
              <div className="flex-1 bg-white border border-gray-300 rounded-lg p-4 md:p-6 relative z-10 shadow-sm h-full min-h-[450px]">
                <div className="h-full w-full overflow-y-auto">
                  {renderContent()}
                </div>
              </div>

              {/* Right Side Vertical Tabs (Desktop 전용) */}
              {/* -right-[76px]로 위치를 조정하여 본체에 딱 붙게 만들었습니다. */}
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

              {/* Mobile Tabs (모바일에서는 하단에 표시) */}
              <div className="md:hidden flex overflow-x-auto gap-1 mt-4 pb-2">
                <button onClick={() => setActiveTab('home')} className={`px-3 py-1 text-[10px] border rounded whitespace-nowrap ${activeTab === 'home' ? 'bg-cyworld-blue text-white' : 'bg-white'}`}>홈</button>
                <button onClick={() => setActiveTab('profile')} className={`px-3 py-1 text-[10px] border rounded whitespace-nowrap ${activeTab === 'profile' ? 'bg-cyworld-blue text-white' : 'bg-white'}`}>프로필</button>
                <button onClick={() => setActiveTab('photos')} className={`px-3 py-1 text-[10px] border rounded whitespace-nowrap ${activeTab === 'photos' ? 'bg-cyworld-blue text-white' : 'bg-white'}`}>사진첩</button>
                <button onClick={() => setActiveTab('board')} className={`px-3 py-1 text-[10px] border rounded whitespace-nowrap ${activeTab === 'board' ? 'bg-cyworld-blue text-white' : 'bg-white'}`}>게시판</button>
                <button onClick={() => setActiveTab('guestbook')} className={`px-3 py-1 text-[10px] border rounded whitespace-nowrap ${activeTab === 'guestbook' ? 'bg-cyworld-blue text-white' : 'bg-white'}`}>방명록</button>
                <button onClick={() => setActiveTab('secret')} className={`px-3 py-1 text-[10px] border rounded whitespace-nowrap ${activeTab === 'secret' ? 'bg-red-800 text-white' : 'bg-black text-red-500'}`}>비밀</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
