import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const MinimiChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '신채아? 네가 여길 감히 어떻게 알고 들어와. 당장 나가. (ㅡㅡ)' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const history = messages.map(m => `${m.role === 'user' ? 'Shin Chae-ah' : 'Seol Hwi-young'}: ${m.text}`);
    const responseText = await sendMessageToGemini(input, history);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 border border-gray-400 p-2 rounded-sm shadow-inner h-64 flex flex-col">
      <div className="bg-gray-700 text-white text-xs px-2 py-1 mb-1 font-bold flex items-center">
        <Sparkles size={12} className="mr-1" /> 설휘영 본부장님과 1:1 대화
      </div>
      <div className="flex-1 overflow-y-auto bg-white border border-gray-300 p-2 mb-2 text-xs font-sans space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-2 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-purple-100 text-purple-900 border border-purple-200' 
                : 'bg-gray-800 text-white border border-gray-600'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-gray-400 text-center text-[10px]">입력 중...</div>}
      </div>
      <div className="flex gap-1">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="말을 걸어보세요..."
          className="flex-1 border border-gray-300 text-xs p-1 focus:outline-none focus:border-cyworld-orange"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="bg-white border border-gray-300 px-3 hover:bg-gray-50 text-gray-600"
        >
          <Send size={12} />
        </button>
      </div>
    </div>
  );
};