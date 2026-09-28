import type { ComponentDescriptor } from '../types';
import { DynamicRenderer } from '../../components/DynamicRenderer';

type StackDescriptor = Extract<ComponentDescriptor, { type: 'stack' }>;

export function Stack({ children }: StackDescriptor) {
  return (
    <div className="lib-stack">
      <DynamicRenderer descriptors={children} />
    </div>
  );
}
