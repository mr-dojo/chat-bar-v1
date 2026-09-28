import { useEffect, useRef } from 'react';
import type { ChatMessage } from '../library/types';
import { Message } from './Message';

interface MessageListProps {
  messages: ChatMessage[];
}

export function MessageList({ messages }: MessageListProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="message-list" role="log" aria-live="polite">
      {messages.length === 0 ? (
        <p className="message-list-empty">Send a message to start the demo.</p>
      ) : null}
      {messages.map((m) => (
        <Message key={m.id} message={m} />
      ))}
      <div ref={endRef} />
    </div>
  );
}
