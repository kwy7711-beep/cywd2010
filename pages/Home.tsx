import React, { useState } from 'react';
import { ChevronRight, X, AlertTriangle, Eye } from 'lucide-react';
import { INITIAL_ILCHONPYEONG } from '../constants';
import { Ilchonpyeong } from '../types';

export const Home: React.FC = () => {
  const [ilchonList, setIlchonList] = useState<Ilchonpyeong[]>(INITIAL_ILCHONPYEONG);
  const [newIlchon, setNewIlchon] = useState('');
  
  // Easter Egg States
  const [pokeCount, setPokeCount] = useState(0);
  const [speechBubble, setSpeechBubble] = useState('뭘 봐?');
  const [showSecretLayer, setShowSecretLayer] = useState(false);
  const [shakeAnimation, setShakeAnimation] = useState(false);

  // 미니미 클릭 핸들러 (이스터에그 트리거)
  const handleMinimiClick = () => {
    const newCount = pokeCount + 1;
    setPokeCount(newCount);
    setShakeAnimation(true);

    if (newCount === 1) setSpeechBubble("...?");
    else if (newCount === 2) setSpeechBubble("거슬리게 하지 마.");
    else if (newCount === 3) setSpeechBubble("할 짓 없냐?");
    else if (newCount === 4) setSpeechBubble("그만 좀 찔러. 짜증나게.");
    else if (newCount >= 5) {
      setShowSecretLayer(true);
      setPokeCount(0);
      setSpeechBubble("야, 신채아.");
    }

    setTimeout(() => setShakeAnimation(false), 200);
  };

  const handleAddIlchon = () => {
    if (!newIlchon.trim()) return;
    const newItem: Ilchonpyeong = {
      id: Date.now(),
      name: '신채아', 
      content: newIlchon
    };
    setIlchonList([newItem, ...ilchonList]);
    setNewIlchon('');
  };

  return (
    <div className="h-full flex flex-col gap-4 overflow-y-auto relative pr-1 custom-scrollbar">
      
      {/* EASTER EGG OVERLAY */}
      {showSecretLayer && (
        <div className="absolute inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center justify-center p-6 text-gray-800 animate-in fade-in duration-300">
           <div className="border-2 border-gray-400 bg-gray-200 p-6 max-w-sm w-full relative shadow-2xl rounded-sm">
              <button 
                onClick={() => setShowSecretLayer(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center mb-4">
                 <AlertTriangle className="text-red-600 mb-2 animate-pulse" size={40} />
                 <h2 className="text-black font-bold text-lg tracking-wider border-b-2 border-black pb-1 font-sans">WARNING</h2>
              </div>

              <div className="space-y-4 text-xs font-sans leading-relaxed text-gray-800 text-center">
                <p className="font-bold text-sm">"너, 내가 우습냐?"</p>
                <p>
                  남의 홈피에서 염탐이나 하고...<br/>
                  천아개발 사장님이 그렇게 한가한 줄은 몰랐네.
                </p>
                <p>
                  계속 알짱거리는데, <span className="text-red-600 font-bold">재미없어.</span><br/>
                  볼일 없으면 당장 나가.
                </p>
                
                <div className="bg-white border border-gray-400 p-2 mt-4 text-left shadow-inner">
                   <div className="flex items-center gap-1 mb-1">
                      <Eye size={10} className="text-gray-500"/>
                      <span className="text-[10px] text-gray-500 font-mono">System Message</span>
                   </div>
                   <p className="text-gray-700 text-[11px] font-mono leading-tight">
                      {"> 설휘영님이 회원님의 접근을 불쾌해합니다."}<br/>
                      {"> 강제 퇴장 당하기 전에 나가시겠습니까?"}
                   </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                 <button 
                   onClick={() => setShowSecretLayer(false)}
                   className="bg-gray-800 text-white text-xs font-bold py-2 px-6 hover:bg-black transition-colors border border-gray-600"
                 >
                   (기분 나빠서 나간다)
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* Recent Posts Section */}
      <div className="space-y-1">
        <h3 className="text-cyworld-blue text-sm font-bold border-b border-gray-300 pb-1 mb-2">Recent News</h3>
        <ul className="text-xs space-y-1 text-gray-600 list-disc list-inside">
          <li><span className="text-red-600 font-bold">[공지]</span> 천아개발 관련 루머 법적 대응 <span className="text-[10px] text-red-400">New</span></li>
          <li><span className="text-blue-500 font-bold">[사진]</span> 신화호텔 스위트룸 파티 (출입금지)</li>
          <li><span className="text-gray-500">[일상]</span> 하늘이랑 병원 다녀오는 길...</li>
          <li><span className="text-gray-500">[스크랩]</span> 2010 S/S 명품 컬렉션</li>
        </ul>
      </div>

      <div className="border-t border-dashed border-gray-300 my-1"></div>

      {/* Miniroom Area */}
      <div className="flex-1 min-h-[300px] flex flex-col">
        <h3 className="text-cyworld-blue text-sm font-bold mb-2">Miniroom</h3>
        
        {/* Mobile: Aspect 4/3, Desktop: Aspect 16/7 */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/7] bg-[#1a1a1b] border border-gray-400 rounded-sm mb-4 overflow-hidden group select-none shadow-inner">
          
          <img 
            src="https://cywd2.jjerrii.uk/S/IMG_3117.jpg" 
            className="absolute inset-0 w-full h-full object-cover md:object-contain pointer-events-none"
            alt="Miniroom Background"
          />
          
          {/* Avatar (Hwi-young) */}
          <div 
            onClick={handleMinimiClick}
            className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 cursor-pointer transition-transform ${shakeAnimation ? 'translate-x-[-52%]' : '-translate-x-1/2'}`}
          >
             <div className={`bg-white text-black text-[10px] px-2 py-0.5 border border-black mb-1 opacity-90 shadow-sm whitespace-nowrap ${pokeCount > 0 ? 'text-red-800 font-bold border-red-800' : ''}`}>
               {speechBubble}
             </div>
             
             <img 
               src="https://cywd2.jjerrii.uk/S/IMG_3118.PNG" 
               className="h-20 md:h-24 w-auto object-contain drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] transition-all hover:scale-105 active:scale-95"
               alt="Minimi" 
             />
             <div className="text-[10px] font-bold mt-1 text-white bg-black bg-opacity-60 px-2 py-0.5 rounded-sm backdrop-blur-[1px]">설휘영</div>
          </div>
        </div>

        {/* Ilchonpyeong Section */}
        <div className="bg-gray-100 p-2 rounded-sm border border-gray-300 mb-2">
           <div className="flex items-center text-cyworld-blue font-bold text-xs mb-2">
             <span className="mr-2">일촌평</span>
             <div className="flex-1 h-[1px] bg-gray-300"></div>
           </div>
           
           <div className="flex mb-3 gap-1 flex-wrap">
             <span className="text-[11px] font-bold text-gray-600 flex items-center shrink-0">일촌평 : </span>
             <div className="flex flex-1 gap-1">
                <input 
                  type="text" 
                  value={newIlchon}
                  onChange={(e) => setNewIlchon(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddIlchon()}
                  className="flex-1 border border-gray-300 text-[11px] px-2 py-1 focus:outline-none focus:border-cyworld-blue min-w-[100px]"
                  placeholder="일촌평을 입력하세요..."
                />
                <button 
                  onClick={handleAddIlchon}
                  className="bg-white border border-gray-300 text-[11px] px-2 text-gray-600 hover:bg-gray-50 active:bg-gray-100 whitespace-nowrap"
                >
                  확인
                </button>
             </div>
           </div>

           <div className="space-y-1 max-h-[100px] overflow-y-auto pr-1">
             {ilchonList.map((item) => (
               <div key={item.id} className="text-[11px] flex items-start gap-1">
                 <span className="font-bold text-cyworld-blue cursor-pointer hover:underline shrink-0">{item.name}</span>
                 <span className="text-gray-600 break-all flex-1">{item.content}</span>
                 <span className="text-gray-400 text-[9px] shrink-0 pt-0.5 hidden sm:inline-block">(2010.05.20)</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};