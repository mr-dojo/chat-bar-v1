import type { ComponentDescriptor } from '../types';

type ListDescriptor = Extract<ComponentDescriptor, { type: 'list' }>;

export function ListBlock({ items }: ListDescriptor) {
  return (
    <ul className="lib-list">
      {items.map((item, i) => (
        <li key={`${i}-${item}`}>{item}</li>
      ))}
    </ul>
  );
}
