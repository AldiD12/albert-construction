import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/services/loft-conversions", label: "Loft Conversions" },
  { href: "/services/extensions", label: "Extensions" },
  { href: "/services/general-renovations", label: "Renovations" },
  { href: "/services/commercial-offices", label: "Commercial Offices" },
  { href: "/services/bathroom-renovations", label: "Bathrooms" },
  { href: "/services/kitchen-fitting", label: "Kitchens" },
  { href: "/services/plastering", label: "Plastering" },
  { href: "/services/painting-decorating", label: "Painting & Decorating" },
];

const locationLinks = [
  { href: "/locations/barnet", label: "North London" },
  { href: "/locations/wembley", label: "South London" },
  { href: "/locations/wood-green", label: "East London" },
  { href: "/locations/harrow", label: "West London" },
  { href: "/locations/edgware", label: "Central London" },
  { href: "/locations/stanmore", label: "North West London" },
  { href: "/locations/watford", label: "South West London" },
  { href: "/locations/st-albans", label: "South East London" },
];

export function Footer() {
  return (
    <footer className="bg-primary w-full pt-20 pb-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Image
              src="/logo-albertconstruction.png"
              alt="Albert Construction Ltd Logo"
              width={140}
              height={52}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 font-body text-sm leading-relaxed mb-4">
              Trusted builders across London. Loft conversions, extensions, renovations, and commercial offices.
            </p>
            <p className="text-white/50 text-xs font-label">
              London based
            </p>
          </div>

          {/* Services */}
          <div>
            <span className="font-label font-bold uppercase tracking-widest text-xs text-secondary mb-4 block">
              Services
            </span>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <span className="font-label font-bold uppercase tracking-widest text-xs text-secondary mb-4 block">
              Areas We Serve
            </span>
            <div className="flex flex-col gap-2">
              {locationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 text-sm hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="font-label font-bold uppercase tracking-widest text-xs text-secondary mb-4 block">
              Contact
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="tel:07478606507"
                className="text-white/70 text-sm hover:text-secondary transition-colors"
                aria-label="Call Albert Construction Ltd on 07478 606 507"
              >
                07478 606 507
              </a>
              <a
                href="mailto:albertconstructionltd@outlook.com"
                className="text-white/70 text-sm hover:text-secondary transition-colors break-all"
                aria-label="Email Albert Construction Ltd"
              >
                albertconstructionltd@outlook.com
              </a>
              <Link
                href="/contact"
                className="mt-2 inline-block bg-secondary text-white font-label font-bold py-3 px-6 rounded-full text-sm text-center hover:bg-secondary/90 transition-colors"
                aria-label="Get a free quote for your building project"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-white/40 text-xs font-label">
            <p>&copy; {new Date().getFullYear()} Albert Construction Ltd. All rights reserved.</p>
            <p className="mt-1">VAT Reg. 268304985 | £10M Public Liability Insurance</p>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-white/40 text-xs font-label hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
