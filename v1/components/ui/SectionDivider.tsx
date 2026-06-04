type SectionDividerProps = {
  path: string;
};

export function SectionDivider({ path }: SectionDividerProps) {
  return (
    <div className="relative my-section h-16 w-full max-w-cards overflow-hidden opacity-100">
      <svg
        viewBox="0 0 960 120"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden
      >
        <path
          d={path}
          className="contour-path"
          strokeWidth={1.5}
          style={{ strokeOpacity: 0.2 }}
          fill="none"
        />
      </svg>
    </div>
  );
}
