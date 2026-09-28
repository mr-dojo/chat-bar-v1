import type { ComponentDescriptor } from '../types';

type ButtonDescriptor = Extract<ComponentDescriptor, { type: 'button' }>;

export function ButtonBlock({ label, href, action }: ButtonDescriptor) {
  const handleClick = () => {
    if (action) {
      // Local-only demo: surface the action id without a backend
      window.alert(`Action: ${action}`);
    }
  };

  if (href) {
    return (
      <a className="lib-button" href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <button type="button" className="lib-button" onClick={handleClick}>
      {label}
    </button>
  );
}
