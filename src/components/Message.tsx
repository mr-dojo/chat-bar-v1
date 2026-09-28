import type { ChatMessage } from '../library/types';
import { DynamicRenderer } from './DynamicRenderer';

interface MessageProps {
  message: ChatMessage;
}

export function Message({ message }: MessageProps) {
  if (message.role === 'user') {
    return (
      <div className="message message-user">
        <div className="message-bubble">{message.text ?? ''}</div>
      </div>
    );
  }

  return (
    <div className="message message-assistant">
      <div className="message-content">
        {message.content ? (
          <DynamicRenderer descriptors={message.content} />
        ) : (
          <p className="lib-text">{message.text ?? ''}</p>
        )}
      </div>
    </div>
  );
}
