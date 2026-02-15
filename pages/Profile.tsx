import React from 'react';

export const Profile: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
      <h2 className="text-cyworld-blue font-bold text-lg mb-4 border-b border-gray-300 pb-2">
        Profile
      </h2>
      
      {/* Main Profile Header */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-32 aspect-[3/4] bg-gray-200 border border-gray-400 p-1 shrink-0 self-center md:self-start">
             <img src="https://cywd2.jjerrii.uk/S/1771055633680_01.png" alt="Seol Hwi-young" className="w-full h-full object-cover filter grayscale contrast-125" />
        </div>
        <div className="flex-1 text-xs space-y-2 font-sans">
            <div className="border-b border-gray-200 pb-1 mb-2">
                <span className="font-bold text-lg text-gray-800 mr-2">설휘영</span>
                <span className="text-cyworld-orange font-bold text-sm">(Rank 0)</span>
            </div>
            <div className="grid grid-cols-1 gap-1">
              <p><span className="font-bold text-cyworld-blue w-20 inline-block">소속</span> 설화그룹 전략기획실 본부장</p>
              <p><span className="font-bold text-cyworld-blue w-20 inline-block">키/혈액형</span> 186cm / O형 (Rh-)</p>
              <p><span className="font-bold text-cyworld-blue w-20 inline-block">스타일</span> 명품 수트(No Tie), 롤렉스, 피어싱</p>
              <p><span className="font-bold text-cyworld-blue w-20 inline-block">가족관계</span> 아버지(설진우 회장), 윤하늘, 그리고...</p>
            </div>
        </div>
      </div>

      {/* Detailed Description Box */}
      <div className="bg-[#eee] border border-dashed border-gray-400 p-4 mb-8 text-xs text-gray-700 leading-relaxed font-sans shadow-sm">
        <p className="mb-2 font-bold text-cyworld-blue">:: Appearance (2010) ::</p>
        <p className="mb-1">- 184cm에서 186cm로 성장. 소년티를 완전히 벗고 선이 굵어진 남자의 얼굴.</p>
        <p className="mb-1">- 답답한 넥타이 대신 단추 두세 개를 푼 셔츠와 몸에 딱 떨어지는 수트.</p>
        <p className="mb-1">- 오른쪽 귀의 피어싱은 여전함. 손등에는 과거보다 더 많은 싸움의 흔적(흉터)이 남아있음.</p>
        <br/>
        <p className="text-center font-bold text-gray-500">"내 허락 없이는 아무것도 하지 마. 숨 쉬는 것조차도."</p>
      </div>

      {/* 100 Q&A Section */}
      <h3 className="text-cyworld-blue font-bold text-sm mb-3 border-b border-gray-300 pb-1 flex items-center">
        <span className="mr-2">★ 설휘영의 100문 100답 (Adult Ver.) ★</span>
      </h3>
      
      <div className="bg-white border border-gray-200 p-4 text-xs space-y-4 font-sans mb-10">
        <div className="grid grid-cols-1 gap-2">
          <div><span className="font-bold text-cyworld-orange">01. 이름 :</span> 설휘영 (Seol Hwi-young)</div>
          <div><span className="font-bold text-cyworld-orange">02. 생년월일 :</span> 1989. 12. 25</div>
          <div><span className="font-bold text-cyworld-orange">03. 직책 :</span> 설화그룹 전략기획실 본부장 (실세는 아버지)</div>
          <div><span className="font-bold text-cyworld-orange">04. 성격 :</span> 더러움. 돈으로 안 되는 건 없다고 믿음.</div>
          <div><span className="font-bold text-cyworld-orange">05. 보물 1호 :</span> 윤하늘, 그리고 내 핏줄(아기).</div>
          <div><span className="font-bold text-cyworld-orange">06. 주량 :</span> 잴 수 없음. 맨정신인 적이 별로 없음.</div>
          <div><span className="font-bold text-cyworld-orange">07. 라이벌 :</span> <span className="text-red-600 font-bold">천아개발 신채아.</span> (거슬림)</div>
          <div><span className="font-bold text-cyworld-orange">08. 요즘 관심사 :</span> 강남 재개발, 태교, 신채아 뒷조사.</div>
          <div><span className="font-bold text-cyworld-orange">09. 싫어하는 것 :</span> 배신, 거짓말, 주제 모르고 기어오르는 것들.</div>
          <div><span className="font-bold text-cyworld-orange">10. 좋아하는 음식 :</span> 위스키, 코냑.</div>
          <div><span className="font-bold text-cyworld-orange">11. 이상형 :</span> 순종적이고 나만 바라보는 여자 (윤하늘).</div>
          <div><span className="font-bold text-cyworld-orange">12. 징크스 :</span> 비 오는 날엔 살인 충동이 든다.</div>
          <div><span className="font-bold text-cyworld-orange">13. 습관 :</span> 생각할 때 피어싱 만지기, 경호원 시켜 처리하기.</div>
          <div><span className="font-bold text-cyworld-orange">14. 좌우명 :</span> All or Nothing.</div>
          <div><span className="font-bold text-cyworld-orange">15. 행동 원칙 :</span> 내 여자는 지킨다. 방해물은 치운다.</div>
          <div><span className="font-bold text-cyworld-orange">16. 권력 :</span> 법보다 돈이 위다.</div>
          <div><span className="font-bold text-cyworld-orange">17. 자주 하는 말 :</span> "처리해.", "꺼져."</div>
          <div><span className="font-bold text-cyworld-orange">18. 현재 고민 :</span> 3년 만에 돌아온 그 여자가 자꾸 눈에 밟힌다.</div>
          <div><span className="font-bold text-cyworld-orange">19. 가방 속에 든 것 :</span> 계약서, 현금 다발, 윤하늘 영양제.</div>
          <div><span className="font-bold text-cyworld-orange">20. 방문자들에게 :</span> 천아개발 관계자 출입 금지. 걸리면 죽는다.</div>
        </div>
        
        <div className="text-center pt-4 border-t border-dashed border-gray-200">
           <span className="text-gray-400 cursor-pointer hover:text-cyworld-blue">... [더보기]</span>
        </div>
      </div>
    </div>
  );
};