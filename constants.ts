import { GuestbookEntry, CharacterProfile, BoardPost, PhotoEntry, Ilchonpyeong } from './types';

export const SCENARIO_SETTINGS = {
  title: "빙의 시점: 2010년 11월, 파멸의 서막",
  location: "강남 설화호텔 라운지 VIP룸 (비 오는 밤)",
  situation: "신채아(User)가 윤하늘에게 '유산유도제'를 꺼내려는 찰나 빙의됨.",
  immediate_goal: "윤하늘을 붙잡거나, 보내거나. 선택의 순간.",
  time_limit: "설휘영 도착까지 30분 전.",
  meta_info: "당신은 원작 <서열0위 길들이기> 1부를 다 읽고, 2부 초반 이 장면에서 잠들었다 깨어났습니다. 3년 후 성인이 된 그들은 더 치밀하고 잔혹해졌습니다."
};

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: 1,
    author: '윤하늘',
    content: '휘영아... 오늘 늦게 들어와? 아기가 발로 차는 것 같아.. 무서워 ㅠㅠ',
    date: '2010.11.20',
    avatarUrl: 'https://cywd2.jjerrii.uk/E/a/1.png'
  },
  {
    id: 2,
    author: '우하빈',
    content: '형! 오늘 클럽 VIP룸 비워뒀어. 천아개발(신채아네) 쪽 사람들 왔다던데? ㅋㅋ',
    date: '2010.11.19',
    avatarUrl: 'https://cywd2.jjerrii.uk/C/a/1.png'
  },
  {
    id: 3,
    author: '지승준',
    content: '천아개발 재건축 건, 서류 확인해. 김전무(신채아 측근) 움직임이 수상해.',
    date: '2010.11.18',
    avatarUrl: 'https://cywd2.jjerrii.uk/B/a/1.png'
  }
];

export const INITIAL_ILCHONPYEONG: Ilchonpyeong[] = [
  { id: 1, name: '지승준', content: '감정 빼고 일해. 회장님 지시야.' },
  { id: 2, name: '우하빈', content: '형ㅋㅋ 어제 누나(신채아) 봤어? 와 진짜 독해졌더라.' },
  { id: 3, name: '윤하늘', content: '사랑해 휘영아..♡ 일찍 와..' },
  { id: 4, name: '김비서', content: '본부장님, 설진우 회장님 호출이십니다.' },
];

export const CHARACTERS: CharacterProfile[] = [
  {
    id: 'chae-ah',
    name: '신채아 (User)',
    tagline: '천아개발 대표 / 악녀의 귀환',
    description: '21세. 몰락한 가문을 3년 만에 재건하고 돌아온 복수의 화신. 설화그룹이 노리는 강남 재개발 구역의 핵심 키를 쥐고 있다.',
    imageUrl: 'https://cywd2.jjerrii.uk/S/1771059664730_01.png',
    themeColor: 'red',
    secret: '[서사] 3년 전 가문 몰락 후, 부친의 최측근이었던 김태진 전무를 영입해 건설업에 뛰어듬. 본가(문화재단) 인맥을 활용해 역사문화지구 재개발이라는 틈새시장을 공략, 막대한 현금력을 확보함. 현재 설화그룹을 무너뜨리기 위한 설계도를 완성한 상태.',
    weakness: '아직 설휘영에게 남아있는 미련(애증), 그리고 과거의 폭력에 대한 트라우마.',
    galleryImages: [
      'https://picsum.photos/300/400?random=990',
      'https://picsum.photos/300/400?random=991',
    ]
  },
  {
    id: 'hwi-young',
    name: '설휘영',
    tagline: '설화그룹 후계자 (Rank 0)',
    description: '22세. 설화그룹 전략기획실 본부장. 명목상 후계자지만 실권은 아버지(설진우 회장)에게 있다. 더러운 일(폭력/협박)을 도맡아 하는 그룹의 칼.',
    imageUrl: 'https://cywd2.jjerrii.uk/A/a/1.png',
    themeColor: 'red',
    secret: '신채아가 건네려던 약의 정체(유산유도제)를 알게 되면 즉시 살인도 불사할 상태임. 겉으론 채아를 경멸하지만, 독기 품은 그녀에게 본능적으로 끌리고 있음.',
    weakness: '윤하늘의 뱃속 아이 (자신의 핏줄이라 맹신함), 아버지 설진우 회장의 인정.',
    galleryImages: [
      'https://cywd2.jjerrii.uk/A/a/1.png',
      'https://cywd2.jjerrii.uk/A/a/2.png',
      'https://cywd2.jjerrii.uk/A/a/3.png',
      'https://cywd2.jjerrii.uk/A/a/4.png',
      'https://cywd2.jjerrii.uk/A/a/5.png',
    ]
  },
  {
    id: 'ha-neul',
    name: '윤하늘',
    tagline: '가짜 비련의 여주',
    description: '21세. 현재 임신 5개월. 휘영의 보호 아래 호화로운 생활을 누리지만, 신채아의 등장으로 입지가 흔들릴까 전전긍긍한다.',
    imageUrl: 'https://cywd2.jjerrii.uk/E/a/1.png',
    themeColor: 'purple',
    secret: '치명적 비밀: 뱃속의 아이는 설휘영의 아이가 아님. 휘영을 사랑하는 게 아니라 배경(설화그룹)을 사랑함.',
    weakness: '신채아가 자신의 비밀을 폭로할까 봐 공포에 질려있음.',
    galleryImages: [
      'https://cywd2.jjerrii.uk/E/a/1.png',
      'https://cywd2.jjerrii.uk/E/a/2.png',
      'https://cywd2.jjerrii.uk/E/a/3.png',
      'https://cywd2.jjerrii.uk/E/a/4.png',
      'https://cywd2.jjerrii.uk/E/a/5.png',
    ]
  },
  {
    id: 'seung-jun',
    name: '지승준',
    tagline: '스타트업 CEO (Rank 2)',
    description: '22세. 명문대 경영 수석이자 IT 스타트업 대표. 감정을 배제한 완벽주의자. 신채아의 사업적 수완을 높이 평가한다.',
    imageUrl: 'https://cywd2.jjerrii.uk/B/a/1.png',
    themeColor: 'purple',
    secret: '설휘영의 폭주가 그룹에 해가 된다면 그를 제거할 계획(Plan B)을 세우고 있음. 합리적 이익을 위해서라면 신채아와 손잡을 용의가 있음.',
    weakness: '예상치 못한 변수(빙의한 신채아의 돌발 행동).',
    galleryImages: [
      'https://cywd2.jjerrii.uk/B/a/1.png',
      'https://cywd2.jjerrii.uk/B/a/2.png',
      'https://cywd2.jjerrii.uk/B/a/3.png',
      'https://cywd2.jjerrii.uk/B/a/4.png',
      'https://cywd2.jjerrii.uk/B/a/5.png',
    ]
  },
  {
    id: 'ha-bin',
    name: '우하빈',
    tagline: '클럽 오너 (Rank 3)',
    description: '20세. 강남 유명 클럽 오너 겸 모델. 신채아에게 누나라고 부르며 위험한 플러팅을 건다. 밤의 정보를 쥐고 있다.',
    imageUrl: 'https://cywd2.jjerrii.uk/C/a/1.png',
    themeColor: 'yellow',
    secret: '천아개발(신채아 회사)의 주식을 몰래 매집 중. 채아를 여자로서 욕망함.',
    weakness: '지루한 것.',
    galleryImages: [
      'https://cywd2.jjerrii.uk/C/a/1.png',
      'https://cywd2.jjerrii.uk/C/a/2.png',
      'https://cywd2.jjerrii.uk/C/a/3.png',
      'https://cywd2.jjerrii.uk/C/a/4.png',
      'https://cywd2.jjerrii.uk/C/a/5.png',
    ]
  },
  {
    id: 'go-min',
    name: '독고민',
    tagline: '경호실장 (Rank 4)',
    description: '21세. 설휘영의 개인 경호실장. 휘영의 그림자. 휘영의 명령이라면 살인도 마다하지 않는 충직한 사냥개.',
    imageUrl: 'https://cywd2.jjerrii.uk/D/a/1.png',
    themeColor: 'blue',
    secret: '현재 호텔 로비에서 대기 중. 신채아를 감시하라는 명령을 받음.',
    weakness: '설휘영의 명령.',
    galleryImages: [
      'https://cywd2.jjerrii.uk/D/a/1.png',
      'https://cywd2.jjerrii.uk/D/a/2.png',
      'https://cywd2.jjerrii.uk/D/a/3.png',
      'https://cywd2.jjerrii.uk/D/a/4.png',
      'https://cywd2.jjerrii.uk/D/a/5.png',
    ]
  },
];

export const BOARD_POSTS: BoardPost[] = [
  { id: 1, title: '설화그룹 전략기획실 공지 (보안등급 A)', date: '2010.11.20', views: 999 },
  { id: 2, title: '접근 금지 명령 (특히 천아개발)', date: '2010.11.15', views: 450 },
  { id: 3, title: '....', date: '2010.11.10', views: 102 },
  { id: 4, title: '[스크랩] 강남 재개발 구역 현황 보고', date: '2010.11.01', views: 330 },
];

export const PHOTOS: PhotoEntry[] = [
  { 
    id: 1, 
    title: 'Business', 
    imageUrl: 'https://cywd2.jjerrii.uk/S/%E1%84%8B%E1%85%B5%E1%86%AF.png', 
    description: '설화건설 인수 합병 건. 시끄러운 쥐새끼들이 너무 많아.', 
    date: '2010.11.20' 
  },
  { 
    id: 2, 
    title: 'VIP Suite', 
    imageUrl: 'https://cywd2.jjerrii.uk/S/%E1%84%89%E1%85%AE%E1%86%AF.png', 
    description: '위스키, 그리고 침묵.', 
    date: '2010.11.15' 
  },
];