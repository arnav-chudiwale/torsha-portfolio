type TagProps = {
  label: string;
  variant?: "teal" | "green";
};

export function Tag({ label, variant = "teal" }: TagProps) {
  const colors =
    variant === "green"
      ? "text-riparian-green border-riparian-green/30"
      : "text-watershed-teal border-watershed-teal/30";

  return (
    <span
      className={`tag-wipe inline-block rounded-full border px-3 py-1 font-mono text-tag ${colors}`}
    >
      {label}
    </span>
  );
}
