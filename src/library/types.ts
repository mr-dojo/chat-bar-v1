export type ComponentDescriptor =
  | { type: 'text'; text: string }
  | { type: 'card'; title?: string; children: ComponentDescriptor[] }
  | { type: 'button'; label: string; href?: string; action?: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'list'; items: string[] }
  | { type: 'stack'; children: ComponentDescriptor[] };

export type ChatRole = 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  /** Plain text for user messages */
  text?: string;
  /** Descriptor tree for assistant messages */
  content?: ComponentDescriptor | ComponentDescriptor[];
}
