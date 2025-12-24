import { WaitlistForm } from "./WaitlistForm";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient & glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-3xl animate-glow-pulse" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Brand Name */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4 animate-fade-up"
          style={{ animationDelay: "0s" }}>
          <span className="text-gradient-emerald">Darté</span>
        </h1>

        {/* Headline */}
        <p
          className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s" }}>
          Shop smarter. <span className="text-emerald-600">Coming soon.</span>
        </p>

        {/* Subtext */}
        <p
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.2s" }}>
          Join other student in your university's marketplace. 
        </p>

        {/* Waitlist Form */}
        <WaitlistForm />
      </div>
    </section>
  );
}
