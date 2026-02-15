import React, { useState } from 'react';
import { ArrowLeft, Image as ImageIcon, X, AlertTriangle, Lock, Eye } from 'lucide-react';
import { CHARACTERS } from '../constants';

// ★ 성인 이미지 경로 설정하는 곳 ★
// 개수 조정됨: 설휘영(10), 지승준(10), 우하빈(10), 독고민(10), 윤하늘(5)
const ADULT_IMAGES: Record<string, string[]> = {
  // 1. 설휘영 (Rank 0) - 10장
  'hwi-young': [
    "https://cywd2.jjerrii.uk/A/b/1.png",
    "https://cywd2.jjerrii.uk/A/b/2.png",
    "https://cywd2.jjerrii.uk/A/b/3.png",
    "https://cywd2.jjerrii.uk/A/b/4.png",
    "https://cywd2.jjerrii.uk/A/b/5.png",
    "https://cywd2.jjerrii.uk/A/b/6.png",
    "https://cywd2.jjerrii.uk/A/b/7.png",
    "https://cywd2.jjerrii.uk/A/b/8.png",
    "https://cywd2.jjerrii.uk/A/b/9.png",
    "https://cywd2.jjerrii.uk/A/b/10.png",
  ],
  // 2. 윤하늘 (Rank Ex) - 5장
  'ha-neul': [
    "https://cywd2.jjerrii.uk/E/c/1.png",
    "https://cywd2.jjerrii.uk/E/c/2.png",
    "https://cywd2.jjerrii.uk/E/c/3.png",
    "https://cywd2.jjerrii.uk/E/c/4.png",
    "https://cywd2.jjerrii.uk/E/c/5.png",
  ],
  // 3. 지승준 (Rank 2) - 10장
  'seung-jun': [
    "https://cywd2.jjerrii.uk/B/b/1.png",
    "https://cywd2.jjerrii.uk/B/b/2.png",
    "https://cywd2.jjerrii.uk/B/b/3.png",
    "https://cywd2.jjerrii.uk/B/b/4.png",
    "https://cywd2.jjerrii.uk/B/b/5.png",
    "https://cywd2.jjerrii.uk/B/b/6.png",
    "https://cywd2.jjerrii.uk/B/b/7.png",
    "https://cywd2.jjerrii.uk/B/b/8.png",
    "https://cywd2.jjerrii.uk/B/b/9.png",
    "https://cywd2.jjerrii.uk/B/b/10.png",
  ],
  // 4. 우하빈 (Rank 3) - 10장
  'ha-bin': [
    "https://cywd2.jjerrii.uk/C/b/1.png",
    "https://cywd2.jjerrii.uk/C/b/2.png",
    "https://cywd2.jjerrii.uk/C/b/3.png",
    "https://cywd2.jjerrii.uk/C/b/4.png",
    "https://cywd2.jjerrii.uk/C/b/5.png",
    "https://cywd2.jjerrii.uk/C/b/6.png",
    "https://cywd2.jjerrii.uk/C/b/7.png",
    "https://cywd2.jjerrii.uk/C/b/8.png",
    "https://cywd2.jjerrii.uk/C/b/9.png",
    "https://cywd2.jjerrii.uk/C/b/10.png",
  ],
  // 5. 독고민 (Rank 4) - 10장
  'go-min': [
    "https://cywd2.jjerrii.uk/D/b/1.png",
    "https://cywd2.jjerrii.uk/D/b/2.png",
    "https://cywd2.jjerrii.uk/D/b/3.png",
    "https://cywd2.jjerrii.uk/D/b/4.png",
    "https://cywd2.jjerrii.uk/D/b/5.png",
    "https://cywd2.jjerrii.uk/D/b/6.png",
    "https://cywd2.jjerrii.uk/D/b/7.png",
    "https://cywd2.jjerrii.uk/D/b/8.png",
    "https://cywd2.jjerrii.uk/D/b/9.png",
    "https://cywd2.jjerrii.uk/D/b/10.png",
  ],
  // 기본값
  'default': Array.from({ length: 10 }, (_, i) => 
    `https://picsum.photos/seed/default_adult_${i}/600/800`
  )
};

interface CharacterGalleryProps {
  characterId: string | null;
  onBack: () => void;
}

export const CharacterGallery: React.FC<CharacterGalleryProps> = ({ characterId, onBack }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAdultVerify, setShowAdultVerify] = useState(false);
  const [showAdultContent, setShowAdultContent] = useState(false);
  
  const character = CHARACTERS.find(c => c.id === characterId);

  // 선택된 캐릭터에 맞는 이미지 가져오기 (없으면 default 사용)
  const currentAdultImages = characterId && ADULT_IMAGES[characterId] 
    ? ADULT_IMAGES[characterId] 
    : ADULT_IMAGES['default'];

  const handleAdultClick = () => {
    setShowAdultVerify(true);
  };

  const handleAdultConfirm = () => {
    setShowAdultVerify(false);
    setShowAdultContent(true);
  };

  const handleAdultCancel = () => {
    setShowAdultVerify(false);
  };

  if (!character) {
    return (
      <div className="h-full flex items-center justify-center flex-col text-gray-500">
        <p>캐릭터를 찾을 수 없습니다.</p>
        <button onClick={onBack} className="mt-4 text-xs text-cyworld-blue underline">돌아가기</button>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white relative">
      {/* Age Verification Modal */}
      {showAdultVerify && (
        <div className="fixed inset-0 z-[10000] bg-black bg-opacity-95 flex items-center justify-center p-4">
           <div className="bg-gray-900 border-2 border-red-600 p-6 max-w-sm w-full text-center shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-[10px] px-2 font-bold">
                 WARNING
              </div>
              <AlertTriangle size={48} className="mx-auto text-red-600 mb-4 animate-pulse" />
              <h3 className="text-white font-bold text-lg mb-2">19세 미만 열람 불가</h3>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                이 콘텐츠는 성인만을 위한 자료를 포함하고 있습니다.<br/>
                당신은 성인입니까?
              </p>
              <div className="flex gap-3 justify-center">
                 <button 
                   onClick={handleAdultConfirm}
                   className="flex-1 bg-red-700 hover:bg-red-600 text-white text-xs font-bold py-2 px-4 border border-red-500"
                 >
                   YES (확인)
                 </button>
                 <button 
                   onClick={handleAdultCancel}
                   className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold py-2 px-4 border border-gray-500"
                 >
                   NO (나가기)
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Modal for Full Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full flex flex-col items-center">
             <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 p-2"
            >
                <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Full view" 
              className="max-w-full max-h-[90vh] object-contain border-4 border-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`flex items-center justify-between border-b ${showAdultContent ? 'border-red-500 bg-red-50 p-2' : 'border-gray-300 pb-2 mb-4'} transition-colors`}>
        <div className="flex items-center gap-2">
            <h2 className={`${showAdultContent ? 'text-red-700' : 'text-cyworld-blue'} font-bold text-lg`}>
            {showAdultContent ? 'SECRET ARCHIVE' : `${character.name} Gallery`}
            </h2>
            <span className="text-xs text-gray-400 font-mono">
                ({showAdultContent ? currentAdultImages.length : (character.galleryImages?.length || 0) + 1})
            </span>
        </div>
        <button 
          onClick={showAdultContent ? () => setShowAdultContent(false) : onBack}
          className="flex items-center gap-1 text-xs bg-white hover:bg-gray-100 border border-gray-300 px-2 py-1 rounded text-gray-700 transition-colors"
        >
          <ArrowLeft size={12} />
          <span>{showAdultContent ? '일반 갤러리' : '비밀탭으로'}</span>
        </button>
      </div>

      {/* Grid */}
      <div className={`flex-1 overflow-y-auto pr-2 custom-scrollbar ${showAdultContent ? 'bg-gray-900 p-2' : ''}`}>
        {showAdultContent ? (
          /* Adult Content Grid */
          <div className="grid grid-cols-3 gap-2 pb-4">
             <div className="col-span-3 text-center mb-2">
                 <span className="bg-red-700 text-white text-[10px] px-3 py-1 rounded-full font-bold tracking-widest animate-pulse">
                     ADULT CONTENT UNLOCKED
                 </span>
             </div>
             {currentAdultImages.map((imgUrl, index) => (
              <div 
                key={`adult-${index}`} 
                onClick={() => setSelectedImage(imgUrl)}
                className="group relative bg-black border border-red-900 p-0.5 shadow-sm cursor-pointer hover:border-red-500 transition-colors"
              >
                <img 
                  src={imgUrl} 
                  alt={`Secret ${index + 1}`} 
                  className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                />
                <div className="absolute top-1 right-1 bg-red-600 text-white text-[8px] px-1 font-bold">19</div>
              </div>
            ))}
          </div>
        ) : (
          /* Standard Content Grid */
          (!character.galleryImages || character.galleryImages.length === 0) ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400 text-xs">
              <ImageIcon size={24} className="mb-2 opacity-50"/>
              <span>등록된 사진이 없습니다.</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 pb-4">
              {/* Standard Images */}
              {character.galleryImages.map((imgUrl, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedImage(imgUrl)}
                  className="group relative bg-gray-100 border border-gray-200 p-1 shadow-sm cursor-pointer hover:border-cyworld-blue transition-colors flex flex-col"
                >
                  <img 
                    src={imgUrl} 
                    alt={`${character.name} ${index + 1}`} 
                    className="w-full h-auto object-contain block" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all pointer-events-none"></div>
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-60 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <ImageIcon size={8} />
                      <span>View</span>
                  </div>
                </div>
              ))}

              {/* Adult Button (Next to 5th item) */}
              <div 
                onClick={handleAdultClick}
                className="group relative bg-black border-2 border-red-900 p-1 shadow-sm cursor-pointer hover:border-red-500 transition-colors flex flex-col items-center justify-center min-h-[150px]"
              >
                  <div className="border-4 border-red-700 rounded-full p-2 mb-2 group-hover:scale-110 transition-transform">
                     <span className="text-red-600 font-bold text-xl block leading-none pt-1">19</span>
                  </div>
                  <div className="text-red-600 font-bold text-xs tracking-widest bg-red-900 bg-opacity-20 px-2 py-1 mb-1">
                     ADULT ONLY
                  </div>
                  <div className="text-gray-500 text-[10px] flex items-center gap-1">
                     <Lock size={10} />
                     <span>Protected</span>
                  </div>
                  
                  {/* Warning tape effect */}
                  <div className="absolute top-2 -right-2 bg-yellow-400 text-black text-[8px] font-bold px-4 py-0.5 rotate-[45deg] border border-black shadow-sm">
                     WARNING
                  </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-auto pt-2 border-t border-dashed border-gray-200 text-center text-[10px] text-gray-400 font-mono">
        CONFIDENTIAL DATA - DO NOT LEAK
      </div>
    </div>
  );
};