import type { ComponentType } from 'react';
import type { ComponentDescriptor } from './types';
import { TextBlock } from './components/TextBlock';
import { Card } from './components/Card';
import { ButtonBlock } from './components/ButtonBlock';
import { ImageBlock } from './components/ImageBlock';
import { ListBlock } from './components/ListBlock';
import { Stack } from './components/Stack';
import { Fallback } from './components/Fallback';

type DescriptorType = ComponentDescriptor['type'];

// Each registered component accepts its matching descriptor props.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RegistryEntry = ComponentType<any>;

export const registry: Record<DescriptorType, RegistryEntry> = {
  text: TextBlock,
  card: Card,
  button: ButtonBlock,
  image: ImageBlock,
  list: ListBlock,
  stack: Stack,
};

export function resolveComponent(type: string): RegistryEntry {
  if (type in registry) {
    return registry[type as DescriptorType];
  }
  return function UnknownFallback() {
    return <Fallback type={type} />;
  };
}
