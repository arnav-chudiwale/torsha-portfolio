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
    <article className="group border-b border-chalk/80 py-7 last:border-0">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-chalk px-2.5 py-1 font-mono text-meta-sm uppercase tracking-wide text-silt">
          {type}
        </span>
        <span className="type-meta-accent">{year}</span>
      </div>
      <p className="text-body leading-relaxed text-text-secondary">
        {highlightAuthor(authors)}.{" "}
        <em className="font-display text-body-lg italic text-slate-depth">
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
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-watershed-teal/30 px-4 py-1.5 font-mono text-meta text-watershed-teal transition hover:bg-watershed-teal/10"
        >
          {doi ? "DOI" : "Link"}
          <span className="transition group-hover:translate-x-0.5">→</span>
        </a>
      )}
    </article>
  );
}
