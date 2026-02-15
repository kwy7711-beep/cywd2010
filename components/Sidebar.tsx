import React from 'react';
import { Heart, User } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Visitor Counter */}
      <div className="text-center mb-2 text-[10px] font-sans text-gray-600">
        TODAY <span className="text-red-500 font-bold">12,839</span> | TOTAL <span className="font-bold">8,931,203</span>
      </div>

      {/* Card Container: h-full을 제거하고 h-fit을 사용하여 내용만큼만 배경이 생기게 합니다 */}
      <div className="border border-gray-300 bg-white p-3 h-fit flex flex-col items-center rounded-lg shadow-sm">
        
        {/* Profile Image */}
        <div className="w-full aspect-[4/3] bg-gray-100 mb-3 border border-gray-200 p-1">
          <img 
            src="https://cywd2.jjerrii.uk/S/1771055633680_01.png" 
            alt="Profile" 
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
        </div>

        {/* Introduction: flex-1을 제거하여 여백을 강제로 만들지 않도록 합니다 */}
        <div className="text-center w-full mb-4">
          <p className="text-xs text-blue-800 mb-2 font-bold break-words px-2 border-b border-dashed border-gray-300 pb-2">
            건드리면 죽여.<br/>법보다 돈이 위니까.
          </p>
          <div className="text-[10px] text-gray-600 text-left px-1 leading-relaxed font-sans">
            설화그룹 전략기획실.<br/>
            <br/>
            잡상인, 기자, <br/>
            그리고 <span className="text-red-600 font-bold">천아개발(신채아)</span> 절대 사절.<br/>
            <br/>
            All or Nothing.
          </div>
        </div>

        {/* Mood Status: mt-auto를 제거하여 위 내용 바로 다음에 붙게 합니다 */}
        <div className="w-full pt-2 border-t border-dotted border-gray-200">
           <div className="mb-2">
            <span className="text-xs font-bold text-cyworld-blue">Today is..</span>
            <div className="flex items-center mt-1 border border-gray-200 rounded p-1">
               <Heart className="w-4 h-4 text-gray-500 mr-2 fill-current" />
               <span className="text-xs font-bold text-gray-600">짜증</span>
            </div>
           </div>
           
           <select className="w-full text-xs border border-gray-300 rounded p-1 mt-1 text-gray-600 bg-gray-50">
             <option>파도타기</option>
             <option>설화그룹 공식 홈</option>
             <option>천아개발(차단됨)</option>
           </select>
           
           <div className="flex items-center justify-center mt-3 space-x-1">
             <User size={12} className="text-gray-400"/>
             <span className="text-[10px] text-gray-400">설휘영 (Hwi-Young)</span>
           </div>
        </div>
      </div>
    </div>
  );
};
