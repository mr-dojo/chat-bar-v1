import type { ComponentDescriptor } from '../library/types';
import { resolveComponent } from '../library/registry';

interface DynamicRendererProps {
  descriptors: ComponentDescriptor | ComponentDescriptor[];
}

function renderOne(descriptor: ComponentDescriptor, index: number) {
  const Component = resolveComponent(descriptor.type);
  // Spread descriptor props; components pick the fields they need.
  return <Component key={`${descriptor.type}-${index}`} {...descriptor} />;
}

export function DynamicRenderer({ descriptors }: DynamicRendererProps) {
  const list = Array.isArray(descriptors) ? descriptors : [descriptors];
  return <>{list.map((d, i) => renderOne(d, i))}</>;
}
