export function Placeholder({ rows = 1 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-3 mt-1">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="animate-pulse h-2 rounded bg-gray-300" />
      ))}
    </div>
  );
}
