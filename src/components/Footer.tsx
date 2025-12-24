import { Instagram, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 rounded-full bg-surface-elevated border border-border
                         flex items-center justify-center
                         text-emerald-500
                         hover:text-emerald-400 hover:border-emerald-400/50
                         transition-all duration-300
                         hover:shadow-lg hover:shadow-emerald-500/10">
              <social.icon className="w-5 h-5" />
            </a>
          ))}

          {/* TikTok custom icon */}
          <a
            href="https://www.tiktok.com/@darte.universe?_r=1&_t=ZS-92UBfORnS2z"
            aria-label="TikTok"
            className="w-10 h-10 rounded-full bg-surface-elevated border border-border
                       flex items-center justify-center
                       text-emerald-500
                       hover:text-emerald-400 hover:border-emerald-400/50
                       transition-all duration-300
                       hover:shadow-lg hover:shadow-emerald-500/10">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>

        {/* Logo & Copyright */}
        <div className="text-center">
          <p className="font-display text-lg font-semibold text-gold mb-1">
            Darté
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Darté. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
