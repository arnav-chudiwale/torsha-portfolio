import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-field-paper px-6 text-center">
      <p className="font-display text-section-title text-slate-depth">Page not found</p>
      <p className="max-w-md font-mono text-body-sm text-silt">
        This coordinate is off the map.
      </p>
      <Link
        href="/#top"
        className="rounded border border-chalk px-4 py-2.5 font-mono text-body-sm text-watershed-teal hover:bg-limestone"
      >
        Return to terrain
      </Link>
    </div>
  );
}
