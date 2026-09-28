export function Fallback({ type }: { type: string }) {
  return (
    <div className="lib-fallback" role="note">
      Unknown component type: <code>{type}</code>
    </div>
  );
}
