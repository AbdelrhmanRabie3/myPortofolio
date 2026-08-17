import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  chapterNum?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  chapterNum,
  className = "",
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-14 ${className}`}>
      {chapterNum && (
        <div className="flex items-center gap-4 mb-5">
          <span className="chapter-badge">{chapterNum}</span>
          <div className="h-px flex-1 bg-border-subtle" />
        </div>
      )}
      <h2
        className="font-bold text-text-primary"
        style={{
          fontFamily: "var(--font-heading)",
          letterSpacing: "-0.025em",
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
        }}
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary mt-2 text-lg max-w-2xl">{subtitle}</p>
      )}
    </AnimatedSection>
  );
}
