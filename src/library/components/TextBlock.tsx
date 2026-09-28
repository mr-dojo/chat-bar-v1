import type { ComponentDescriptor } from '../types';

type TextDescriptor = Extract<ComponentDescriptor, { type: 'text' }>;

export function TextBlock({ text }: TextDescriptor) {
  return <p className="lib-text">{text}</p>;
}
