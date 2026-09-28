import type { ComponentDescriptor } from '../types';

type ImageDescriptor = Extract<ComponentDescriptor, { type: 'image' }>;

export function ImageBlock({ src, alt }: ImageDescriptor) {
  return (
    <img className="lib-image" src={src} alt={alt ?? ''} loading="lazy" />
  );
}
