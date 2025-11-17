'use client';

import { useState, useRef, useEffect } from 'react';
import type { Message } from '@/lib/portal/types';

interface ProjectMessagingProps {
  projectId: string;
  initialMessages: Message[];
  clientName: string;
  clientEmail: string;
}

export default function ProjectMessaging({
  projectId,
  initialMessages,
  clientName,
  clientEmail,
}: ProjectMessagingProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    setSending(true);
    try {
      const res = await fetch(`/api/portal/projects/${projectId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newMessage.trim() }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages([...messages, data.message]);
        setNewMessage('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-deepOcean/50 backdrop-blur-sm border border-moonlightSilver/20 rounded-lg overflow-hidden flex flex-col h-[600px]">
      {/* Header */}
      <div className="px-6 py-4 border-b border-moonlightSilver/10">
        <h3 className="text-xl font-semibold text-moonlightSilver">Messages</h3>
        <p className="text-sm text-moonlightSilver/70 mt-1">
          Chat with our team
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-moonlightSilver/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-moonlightSilver/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <p className="text-moonlightSilver/70">No messages yet</p>
            <p className="text-sm text-moonlightSilver/60 mt-2">
              Start the conversation!
            </p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.from === 'client' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-3 ${
                  message.from === 'client'
                    ? 'bg-lunarGold/20 border border-lunarGold/30'
                    : 'bg-midnight/50 border border-moonlightSilver/20'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-moonlightSilver/80">
                    {message.from === 'client' ? clientName : 'Moonlit Studios'}
                  </span>
                  <span className="text-xs text-moonlightSilver/40">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
                <p className="text-sm text-moonlightSilver whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="px-6 py-4 border-t border-moonlightSilver/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 bg-midnight/50 border border-moonlightSilver/20 rounded-lg text-moonlightSilver placeholder-moonlightSilver/40 focus:outline-none focus:border-lunarGold/50 focus:ring-2 focus:ring-lunarGold/20 text-sm"
            disabled={sending}
          />
          <button
            type="submit"
            disabled={!newMessage.trim() || sending}
            className="px-4 py-2 bg-lunarGold text-midnight rounded-lg font-medium hover:bg-starlight transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {sending ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}
