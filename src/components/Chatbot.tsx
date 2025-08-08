import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasUnreadMessage, setHasUnreadMessage] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you with any questions about Rotary Sand. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = [
    "What products do you offer?",
    "What is your B-BBEE level?",
    "How can I get a quote?",
    "Where are you located?",
    "What are your delivery options?",
    "Tell me about your quality standards"
  ];

  const companyKnowledge = {
    products: {
      keywords: ['product', 'sand', 'aggregate', 'material', 'filter', 'industrial', 'building', 'sports'],
      response: "We offer four main product categories:\n\n🔹 Filter Sands, Grits & Pebbles (0.3mm to 45mm)\n🔹 Industrial Sands & Grits (various microns, colored options)\n🔹 Building Sand, Grit & Stone (river sand, builder sand, plaster sand)\n🔹 Sports & Leisure Sands (beach volleyball, bunker sand, golf course sand)\n\nAll products come with quality certificates and comprehensive documentation."
    },
    bbee: {
      keywords: ['bbee', 'b-bbee', 'level', 'transformation', 'empowerment', 'contributor'],
      response: "Rotary Sand is a proud Level 1 B-BBEE Contributor and Empowering Supplier! 🏆\n\nThis means:\n✅ Enhanced scoring for your B-BBEE scorecard\n✅ Compliance support for procurement requirements\n✅ Community impact through our transformation initiatives\n✅ Preferred supplier status in tenders\n\nPartnering with us helps boost your own B-BBEE credentials."
    },
    quote: {
      keywords: ['quote', 'price', 'cost', 'estimate', 'pricing', 'order'],
      response: "Getting a quote is easy! 📋\n\n📞 Call us directly: +27 81 380 7867\n📧 Email: info@rotarysand.co.za\n💬 Use our contact form on the website\n\nWe'll need:\n• Product specifications\n• Quantity required\n• Delivery location\n• Timeline\n\nWe respond within 24 hours with competitive pricing!"
    },
    location: {
      keywords: ['location', 'where', 'address', 'delmas', 'bronkhorstspruit', 'mine'],
      response: "We're strategically located in Bronkhorstspruit, South Africa! 📍\n\n🏭 Our opencast mine is near Delmas\n🚛 Nationwide delivery coverage\n⏰ Business hours: Mon-Fri 7AM-5PM\n📞 Contact: +27 81 380 7867\n\nOur location provides optimal access to high-quality silica deposits and efficient distribution across South Africa."
    },
    delivery: {
      keywords: ['delivery', 'shipping', 'transport', 'logistics', 'nationwide'],
      response: "We offer comprehensive delivery solutions! 🚛\n\n✅ Nationwide coverage across South Africa\n✅ Specialized fleet of tankers\n✅ Both dry and wet product delivery\n✅ Flexible scheduling to meet your timeline\n✅ Professional logistics team\n\nOur modern infrastructure includes weighbridge facilities for accurate measurements and transparent transactions."
    },
    quality: {
      keywords: ['quality', 'iso', 'standard', 'certificate', 'testing', 'lab'],
      response: "Quality is our foundation! 🏆\n\n🔬 Stringent quality standards\n🧪 In-house laboratory testing\n🤝 Partner lab collaboration for complex analysis\n📜 Certificates provided with every delivery\n✅ Comprehensive quality control processes\n🔍 Regular testing and monitoring\n\nWe ensure every grain meets the highest industry specifications!"
    },
    services: {
      keywords: ['service', 'what do you do', 'capabilities', 'infrastructure'],
      response: "We provide end-to-end solutions! 🔧\n\n🔬 Product Development & Lab Testing\n🚛 Logistics & Delivery (nationwide)\n🏭 Infrastructure Support (mining, drying, weighbridge)\n⚙️ Custom product development\n📋 Quality assurance documentation\n🎯 Flexible scheduling and support\n\nFrom extraction to delivery, every step is optimized for quality and efficiency."
    },
    about: {
      keywords: ['about', 'company', 'history', 'since', 'experience', 'who are you'],
      response: "Rotary Sand has been South Africa's trusted sand & stone partner since 2015! 🏢\n\n📅 10+ years of excellence\n🏆 Level 1 B-BBEE Contributor\n🌍 Serving clients nationwide\n⭐ 1000+ projects completed\n🎯 Quality assured standards\n🌱 Committed to sustainability\n\nWe're more than suppliers - we're your partners in success!"
    },
    contact: {
      keywords: ['contact', 'phone', 'email', 'reach', 'talk', 'speak'],
      response: "Let's connect! 📞\n\n📱 Phone: +27 81 380 7867\n📧 Email: info@rotarysand.co.za\n⏰ Hours: Mon-Fri 7AM-5PM\n📍 Location: Bronkhorstspruit, South Africa\n\n💬 For urgent quotes, call us directly!\n📝 Use our website contact form for detailed inquiries\n⚡ We respond within 24 hours"
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setHasUnreadMessage(false);
    }
  }, [isOpen]);

  // Show welcome message when site loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasUnreadMessage(true);
      setHasShownWelcome(true);
    }, 1500); // Show after 1.5 seconds
    
    return () => clearTimeout(timer);
  }, [hasShownWelcome]);

  const findBestResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    let bestMatch = { category: '', score: 0 };

    Object.entries(companyKnowledge).forEach(([category, data]) => {
      const matchCount = data.keywords.filter(keyword => 
        message.includes(keyword.toLowerCase())
      ).length;
      
      if (matchCount > bestMatch.score) {
        bestMatch = { category, score: matchCount };
      }
    });

    if (bestMatch.score > 0) {
      return companyKnowledge[bestMatch.category as keyof typeof companyKnowledge].response;
    }

    // Default responses for unmatched queries
    const defaultResponses = [
      "I'd be happy to help! For specific technical questions, please contact our team at +27 81 380 7867 or info@rotarysand.co.za. They can provide detailed information tailored to your needs.",
      "That's a great question! Our experts can give you the most accurate information. Please reach out to us at +27 81 380 7867 or use our contact form for detailed assistance.",
      "I want to make sure you get the best answer! For specialized inquiries, our team at info@rotarysand.co.za can provide comprehensive details about our products and services."
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      if (!isOpen) {
        setHasUnreadMessage(true);
      }
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* Welcome Message Bubble */}
        {hasUnreadMessage && (
          <div className="absolute bottom-20 right-0 mb-2 animate-fade-in-up">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-100 p-5 max-w-sm relative backdrop-blur-sm">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl"></div>
              
              <button
                onClick={() => setHasUnreadMessage(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 z-10"
                aria-label="Close welcome message"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-black to-gray-800 p-3 rounded-full flex-shrink-0 shadow-lg">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <p className="text-sm font-bold text-gray-900">
                        Rotary Sand Assistant
                      </p>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">Online</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      👋 Hi there! I'm here to help with any questions about our sand and aggregate solutions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                        💬 Quick Answers
                      </span>
                      <span className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
                        📞 Get Quotes
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Call to action */}
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsOpen(true);
                      setHasUnreadMessage(false);
                    }}
                    className="w-full bg-gradient-to-r from-black to-gray-800 text-white text-sm font-semibold py-2 px-4 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Start Conversation →
                  </button>
                </div>
              </div>
              
              {/* Speech bubble arrow */}
              <div className="absolute bottom-0 right-8 transform translate-y-full">
                <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white drop-shadow-sm"></div>
              </div>
            </div>
          </div>
        )}
        
     {/* Chat Button */}
<button
  onClick={() => {
    setIsOpen(true);
    setHasUnreadMessage(false);
  }}
  className="bg-gradient-to-br from-black to-gray-800 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-110 relative overflow-hidden"
  aria-label="Open chat"
>
  
</button>

      </div>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-72 sm:w-80' : 'w-72 sm:w-80 md:w-96'
    }`}>
      {/* Chat Window */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-3 sm:p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-xs sm:text-sm">Rotary Sand Assistant</h3>
              <p className="text-xs text-gray-300">Online • Ready to help</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label={isMinimized ? "Maximize" : "Minimize"}
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-64 sm:h-80 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[90%] sm:max-w-[85%] ${
                    message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                  }`}>
                    <div className={`p-2 rounded-full flex-shrink-0 ${
                      message.isBot ? 'bg-black text-white' : 'bg-gray-300 text-gray-700'
                    }`}>
                      {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    <div className={`p-2 sm:p-3 rounded-2xl ${
                      message.isBot 
                        ? 'bg-white text-gray-800 border border-gray-200' 
                        : 'bg-black text-white'
                    }`}>
                      <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isBot ? 'text-gray-500' : 'text-gray-300'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="p-2 rounded-full bg-black text-white">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-white p-2 sm:p-3 rounded-2xl border border-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            <div className="p-2 sm:p-3 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2 font-medium">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestions.slice(0, 2).map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded-full transition-colors duration-200 border border-gray-200 hover:border-gray-300"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Rotary Sand..."
                  className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all text-xs sm:text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-black text-white p-2 sm:p-3 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;