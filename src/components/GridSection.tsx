interface GridSectionProps {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  id?: string;
  bgClass?: string;
  className?: string;
}

export default function GridSection({ number, title, subtitle, children, id, bgClass, className }: GridSectionProps) {
  const isFirstSection = className?.includes('pt-[');
  return (
    <section className={`grid-section ${bgClass || ''} ${className || ''} ${isFirstSection ? 'first-section' : ''}`} id={id}>
      <div className="sticky-col">
        <span className="u-caps text-[var(--accent)]">{number} / {title}</span>
        <span className="u-caps text-[var(--text-muted)]">{subtitle}</span>
      </div>
      <div className="content-col">
        {children}
      </div>
    </section>
  );
}
