function highlightAuthor(authors: string) {
  const parts = authors.split(/(Goswami,?\s*T\.?)/gi);
  return parts.map((part, i) =>
    /^Goswami/i.test(part) ? (
      <strong key={i} className="font-medium text-watershed-teal">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

type PubEntryProps = {
  authors: string;
  title: string;
  venue: string;
  detail?: string;
  year: string;
  doi?: string;
  url?: string;
  type: string;
  location?: string;
};

export function PubEntry({
  authors,
  title,
  venue,
  detail,
  year,
  doi,
  url,
  type,
  location,
}: PubEntryProps) {
  const link = doi ?? url;

  return (
    <article className="group relative py-7 transition-colors duration-300 hover:bg-limestone/25 dark:hover:bg-surface/25">
      <div className="contour-divider absolute left-0 top-0" aria-hidden />
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-chalk bg-limestone/60 px-2.5 py-1 font-mono text-meta-sm uppercase tracking-wide text-silt shadow-[0_1px_0_rgba(255,255,255,0.4)_inset] dark:bg-surface/50">
          {type}
        </span>
        <span className="type-meta-accent">{year}</span>
      </div>
      <p className="text-body leading-relaxed text-text-secondary transition-[letter-spacing] duration-300 group-hover:tracking-[0.01em]">
        {highlightAuthor(authors)}.{" "}
        <em className="font-display text-body-lg italic text-slate-depth transition-colors group-hover:text-watershed-teal">
          {title}
        </em>
        .{" "}
        <span className="font-body">
          {venue}
          {detail ? `, ${detail}` : ""}.
        </span>
      </p>
      {location && <p className="type-meta mt-2">{location}</p>}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="tag-wipe mt-4 inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-watershed-teal/30 px-4 py-2 font-mono text-meta text-watershed-teal"
        >
          {doi ? "DOI" : "Link"}
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      )}
    </article>
  );
}
