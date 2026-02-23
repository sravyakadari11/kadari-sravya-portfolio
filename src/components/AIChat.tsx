import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, User, Bot, Loader2 } from 'lucide-react';
import { getChatResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Sravya's AI assistant. Ask me anything about her skills, projects, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getChatResponse(userMessage, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-[2rem] flex flex-col overflow-hidden shadow-2xl border border-slate-200"
          >
            {/* Header */}
            <div className="p-6 bg-slate-900 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg leading-none">Sravya AI</p>
                  <p className="text-[10px] font-sans uppercase tracking-widest text-white/50 mt-1">Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50"
            >
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 border border-slate-200 ${
                      msg.role === 'user' ? 'bg-white' : 'bg-blue-100 text-brand'
                    }`}>
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm font-sans leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-brand text-white rounded-tr-none' 
                        : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 items-center bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none">
                    <Loader2 size={14} className="animate-spin text-brand" />
                    <span className="text-[10px] font-sans uppercase tracking-widest text-slate-400">Processing</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-slate-100">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask a question..."
                  className="flex-1 bg-slate-100 border-none rounded-full px-6 py-3 text-sm font-sans focus:ring-2 focus:ring-brand outline-none placeholder:text-slate-400"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-3 bg-slate-900 text-white rounded-full hover:bg-brand disabled:opacity-50 transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-brand hover:scale-110 active:scale-95 transition-all"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}
