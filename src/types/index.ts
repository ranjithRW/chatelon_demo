export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  createdAt: Date;
}
export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  cover: string;
}

export interface Author {
  id: number;
  name: string;
  genre: string;
  photo: string;
  bio: string;
}