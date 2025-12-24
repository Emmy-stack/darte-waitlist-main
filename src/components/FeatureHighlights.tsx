import { ShoppingBag, Shield, Rocket, Gem } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Curated Collections",
    description: "Handpicked products from top sellers",
  },
  {
    icon: Shield,
    title: "Secure Checkout",
    description: "Shop with complete confidence",
  },
  {
    icon: Rocket,
    title: "Early Access",
    description: "Waitlist members get first dibs",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Only the best makes it to Darté",
  },
];

export function FeatureHighlights() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full
                           bg-surface-elevated border border-border mb-4
                           group-hover:border-emerald-600/50
                           transition-all duration-300
                           group-hover:shadow-lg group-hover:shadow-emerald-600/10">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-emerald-600 mb-2 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
