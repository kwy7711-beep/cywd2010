export type TabId = 'home' | 'profile' | 'photos' | 'board' | 'guestbook' | 'secret' | 'gallery';

export interface GuestbookEntry {
  id: number;
  author: string;
  content: string;
  date: string;
  avatarUrl: string;
}

export interface CharacterProfile {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  themeColor: string;
  secret?: string; // New field for the Secret Tab
  weakness?: string; // New field for the Secret Tab
  galleryImages?: string[]; // New field for the Gallery Tab
}

export interface BoardPost {
  id: number;
  title: string;
  date: string;
  views: number;
}

export interface PhotoEntry {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Ilchonpyeong {
  id: number;
  name: string;
  content: string;
}