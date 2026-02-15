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
    
    // Special styling for Secret tab
    if (tab === 'secret') {
        return `
          cursor-pointer 
          w-full py-2 px-1 mb-1 
          text-center text-xs 
          border border-red-900 rounded-r-md 
          ${isActive 
            ? 'bg-red-800 text-white font-bold border-l-red-800 ml-[-1px] shadow-inner' 
            : 'bg-black text-red-500 hover:bg-gray-900'}
        `;
    }

    // Special styling for Gallery tab (hidden mostly, but if active, show nicely)
    if (tab === 'gallery') {
         return `
          cursor-pointer 
          w-full py-2 px-1 mb-1 
          text-center text-xs 
          border border-gray-400 rounded-r-md 
          ${isActive 
            ? 'bg-white text-cyworld-blue font-bold border-l-white ml-[-1px] shadow-sm' 
            : 'bg-gray-200 text-gray-500 hover:bg-gray-300'}
        `;
    }

    return `
      cursor-pointer 
      w-full py-2 px-1 mb-1 
      text-center text-xs 
      border border-[#7e7e7e] rounded-r-md 
      ${isActive 
        ? 'bg-white text-black font-bold border-l-white ml-[-1px]' 
        : 'bg-[#238db4] text-white hover:bg-[#1a6d8c]'}
    `;
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex justify-center items-center font-pixel">
      {/* Outer Gray Background Container */}
      <div className="relative bg-cyworld-bg p-1 rounded-xl shadow-2xl max-w-[1024px] w-full">
        
        {/* Dotted Inner Line */}
        <div className="border-2 border-dashed border-white rounded-lg p-2 md:p-5 h-full bg-cyworld-bg">
          
          {/* Main White Content Area with "Book Binding" effect */}
          <div className="relative bg-cyworld-inner rounded-xl p-4 md:p-6 shadow-lg h-[650px] md:h-[600px] flex flex-col">
            
            {/* Header / Title Bar */}
            <div className="flex justify-between items-center mb-4">
               <div className="flex items-end gap-2">
                 {/* Title */}
                 <h1 className="text-lg md:text-xl font-bold text-cyworld-blue tracking-tighter">
                   설휘영의 미니홈피
                 </h1>
                 <span className="text-xs text-cyworld-orange font-bold">www.cyworld.com/seolhwa_0</span>
               </div>
               <div className="hidden md:block">
                 <MusicPlayer />
               </div>
            </div>

            {/* Main Content Layout */}
            <div className="flex flex-col md:flex-row h-full gap-4 relative">
              
              {/* Left Column (Profile) */}
              <div className="w-full md:w-64 flex-shrink-0 z-10">
                <Sidebar />
              </div>

              {/* Right Column (Content) */}
              <div className="flex-1 bg-white border border-gray-300 rounded-lg p-4 md:p-6 relative z-10 overflow-hidden shadow-sm h-full">
                <div className="h-full w-full">
                  {renderContent()}
                </div>
              </div>

              {/* Right Side Vertical Tabs (Absolute positioned for desktop, generic for mobile) */}
              <div className="hidden md:flex flex-col absolute -right-[88px] top-10 w-20 z-0">
                <button onClick={() => setActiveTab('home')} className={getTabStyle('home')}>홈</button>
                <button onClick={() => setActiveTab('profile')} className={getTabStyle('profile')}>프로필</button>
                <button onClick={() => setActiveTab('photos')} className={getTabStyle('photos')}>사진첩</button>
                <button onClick={() => setActiveTab('board')} className={getTabStyle('board')}>게시판</button>
                <button onClick={() => setActiveTab('guestbook')} className={getTabStyle('guestbook')}>방명록</button>
                <div className="h-4"></div> {/* Spacer */}
                <button onClick={() => setActiveTab('secret')} className={getTabStyle('secret')}>★비밀★</button>
                {/* Dynamically show Gallery tab only when active */}
                {activeTab === 'gallery' && (
                  <button onClick={() => {}} className={getTabStyle('gallery')}>Gallery</button>
                )}
              </div>

              {/* Mobile Tabs */}
              <div className="md:hidden flex overflow-x-auto gap-1 mb-2">
                <button onClick={() => setActiveTab('home')} className={`px-3 py-1 text-xs border rounded ${activeTab === 'home' ? 'bg-cyworld-blue text-white' : 'bg-white'}`}>홈</button>
                <button onClick={() => setActiveTab('profile')} className={`px-3 py-1 text-xs border rounded ${activeTab === 'profile' ? 'bg-cyworld-blue text-white' : 'bg-white'}`}>프로필</button>
                <button onClick={() => setActiveTab('photos')} className={`px-3 py-1 text-xs border rounded ${activeTab === 'photos' ? 'bg-cyworld-blue text-white' : 'bg-white'}`}>사진첩</button>
                <button onClick={() => setActiveTab('board')} className={`px-3 py-1 text-xs border rounded ${activeTab === 'board' ? 'bg-cyworld-blue text-white' : 'bg-white'}`}>게시판</button>
                <button onClick={() => setActiveTab('guestbook')} className={`px-3 py-1 text-xs border rounded ${activeTab === 'guestbook' ? 'bg-cyworld-blue text-white' : 'bg-white'}`}>방명록</button>
                <button onClick={() => setActiveTab('secret')} className={`px-3 py-1 text-xs border rounded ${activeTab === 'secret' ? 'bg-red-800 text-white' : 'bg-black text-red-500'}`}>비밀</button>
              </div>

            </div>
          </div>
          
          {/* Ring Binding Effect */}
          <div className="hidden md:block absolute left-1/2 top-10 transform -translate-x-1/2 z-20 space-y-48 pointer-events-none">
             {/* Not easy to render realistic rings with just tailwind, skipping for clean look or could use simple circles */}
          </div>

        </div>
      </div>
    </div>
  );
}