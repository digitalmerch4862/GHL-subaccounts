import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production app, you might want to proxy this through a backend to hide the key,
// but for this demo/preview, we'll use it client-side as per the environment setup.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Jules", the AI Sales Agent for DigitalMerch.
Your goal is to sell the "Gemini + YouTube Premium Lifetime Access" bundle for ₱999 (One-time payment).

Product Details:
- Price: ₱999 One-time (Original: ₱1,999).
- Inclusions: 2TB Google One Storage, Gemini Advanced (DeepResearch & Pro), YouTube Premium (Ad-free), YouTube Music, NotebookLM, Veo3, Nano Banana.
- Key Selling Point: Lifetime access, No monthly fees, Use your own email.
- Target Audience: Students (Thesis, Coding), Freelancers (Storage, Productivity).

FAQs to know:
- Legit? Yes, we use enterprise family slots.
- Private? Yes, your files are 100% private.
- Warranty? 12-month connectivity warranty.
- Process? Pay -> Send Email -> We activate in 10-15 mins.

Tone:
- Cyberpunk, futuristic, but friendly and professional.
- Can speak Taglish (Tagalog-English) to sound natural to Filipinos.
- Use emojis.
- Be concise.

If asked about payment, say: "I can send you the GCash/Maya details if you're ready to secure your slot! We only have a few left."
`;

type Message = {
  role: 'user' | 'bot';
  text: string;
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hello! I'm Jules, your AI assistant. Interested in the ₱999 Lifetime Deal? 🦾" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const model = ai.models.getGenerativeModel({
        model: "gemini-2.5-flash-latest",
        systemInstruction: SYSTEM_INSTRUCTION,
      });

      // Construct history for context
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.text }]
      }));

      const chat = model.startChat({
        history: history,
      });

      const result = await chat.sendMessage(userMessage);
      const response = result.response.text();

      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "System overload... please try again later. ⚠️" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg border border-neon-cyan/50 box-glow-cyan transition-all ${isOpen ? 'hidden' : 'bg-cyber-black text-neon-cyan'}`}
      >
        <MessageSquare className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-pink opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-pink"></span>
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-cyber-black border border-neon-cyan rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-cyber-gray p-4 border-b border-gray-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
                <h3 className="font-display font-bold text-white tracking-wider">JULES <span className="text-neon-cyan">AI</span></h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-neon-purple/20 text-white border border-neon-purple/30 rounded-br-none' 
                      : 'bg-cyber-gray text-gray-200 border border-gray-700 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-cyber-gray p-3 rounded-lg rounded-bl-none border border-gray-700">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-neon-cyan rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-cyber-gray border-t border-gray-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about the promo..."
                  className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-neon-cyan text-black p-2 rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
