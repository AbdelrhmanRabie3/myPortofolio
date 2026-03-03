import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={`text-center mb-16 ${className}`}>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center gap-1.5">
        <span className="w-10 h-1 rounded-full bg-accent" />
        <span className="w-3 h-1 rounded-full bg-accent opacity-70" />
        <span className="w-2 h-1 rounded-full bg-accent opacity-40" />
      </div>
    </AnimatedSection>
  );
}
