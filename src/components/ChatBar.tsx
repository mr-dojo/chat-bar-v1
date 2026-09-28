import { useState, type FormEvent, type KeyboardEvent } from 'react';

interface ChatBarProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function ChatBar({ onSend, disabled }: ChatBarProps) {
  const [value, setValue] = useState('');

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <form className="chat-bar" onSubmit={handleSubmit}>
      <input
        className="chat-bar-input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message…"
        aria-label="Message"
        disabled={disabled}
        autoComplete="off"
      />
      <button
        className="chat-bar-send"
        type="submit"
        disabled={disabled || !value.trim()}
      >
        Send
      </button>
    </form>
  );
}
