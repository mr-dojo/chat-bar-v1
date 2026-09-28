import type { ComponentDescriptor } from '../types';
import { DynamicRenderer } from '../../components/DynamicRenderer';

type CardDescriptor = Extract<ComponentDescriptor, { type: 'card' }>;

export function Card({ title, children }: CardDescriptor) {
  return (
    <div className="lib-card">
      {title ? <h3 className="lib-card-title">{title}</h3> : null}
      <div className="lib-card-body">
        <DynamicRenderer descriptors={children} />
      </div>
    </div>
  );
}
