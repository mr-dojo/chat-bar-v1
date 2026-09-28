import { useCallback, useState } from 'react';
import { ChatBar } from './components/ChatBar';
import { MessageList } from './components/MessageList';
import type { ChatMessage } from './library/types';
import { getMockReply } from './mock/replies';

function nextId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSend = useCallback((text: string) => {
    const userMessage: ChatMessage = {
      id: nextId(),
      role: 'user',
      text,
    };

    const assistantMessage: ChatMessage = {
      id: nextId(),
      role: 'assistant',
      content: getMockReply(text),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Chat Bar V1</h1>
        <p className="app-subtitle">Descriptor → registry → React components</p>
      </header>
      <main className="app-main">
        <MessageList messages={messages} />
      </main>
      <ChatBar onSend={handleSend} />
    </div>
  );
}
