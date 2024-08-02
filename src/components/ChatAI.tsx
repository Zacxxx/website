import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

const ChatAI: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Je comprends votre besoin. Comment puis-je vous aider davantage ?", isUser: false }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-inner p-4 no-backdrop-filter">
      <div className="bg-gray-100 rounded-lg h-96 overflow-y-auto mb-4 p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start mb-4 ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
            {!msg.isUser && <Bot className="w-6 h-6 mr-2 text-blue-500" />}
            <div className={`p-3 rounded-lg max-w-xs ${msg.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {msg.text}
            </div>
            {msg.isUser && <User className="w-6 h-6 ml-2 text-blue-500" />}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Décrivez votre besoin..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors"
        >
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ChatAI;
