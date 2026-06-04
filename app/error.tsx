"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-field-paper px-6 text-center">
      <p className="font-display text-section-title text-slate-depth">
        Something went wrong
      </p>
      <p className="max-w-md font-mono text-body-sm text-silt">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="rounded border border-chalk px-4 py-2.5 font-mono text-body-sm text-watershed-teal hover:bg-limestone"
      >
        Try again
      </button>
    </div>
  );
}
