import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, ArrowRight, GraduationCap } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses Offered", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Our Franchises", href: "/franchises" },
  { label: "Learn Abacus Videos", href: "/learn-abacus" },
  { label: "Contact Us", href: "/contact" },
];

const programs = [
  { label: "Abacus Foundation", href: "/courses" },
  { label: "Vedic Mathematics", href: "/courses" },
  { label: "Brain Development", href: "/courses" },
  { label: "Teacher Training", href: "/courses" },
  { label: "Franchise Program", href: "/franchises" },
  { label: "National Championship", href: "/" },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/rabbiglobalacademy", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/rabbiglobalacademy", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@rabbiglobalacademy", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/rabbiglobalacademy", label: "LinkedIn" },
];

function FooterHeading({ children }) {
  return (
    <h3 className="text-white font-serif font-bold text-base mb-5 flex items-center gap-2.5">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
      {children}
      <span className="flex-1 h-px bg-white/10" />
    </h3>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Pre-footer CTA band */}
      <div className="relative overflow-hidden border-t-4 border-secondary">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="absolute -top-16 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 rounded-full px-4 py-1.5 text-secondary text-[11px] font-bold uppercase tracking-[0.25em] mb-3">
                <GraduationCap className="h-3.5 w-3.5" /> Enroll Today
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                Give Your Child the Gift of <span className="text-secondary">Mental Agility</span>
              </h2>
              <p className="text-white/60 text-sm mt-2 max-w-lg">
                Join 10,000+ students across Karnataka who have transformed their mathematical abilities with Rabbi Global Academy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-7 py-3 font-semibold text-sm shadow-xl shadow-secondary/20 transition-all hover:scale-105 whitespace-nowrap"
              >
                Enroll Your Child <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/919686801874?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Rabbi%20Global%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-full px-7 py-3 font-semibold text-sm transition-all whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Col 1: Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-5 group">
                <img
                  src="/images/rabbi-logo.jpeg"
                  alt="Rabbi Global Academy"
                  className="h-14 w-14 rounded-full object-cover border-2 border-secondary group-hover:scale-105 transition-transform"
                />
                <div>
                  <p className="font-serif font-bold text-lg leading-tight text-white">RABBI GLOBAL ACADEMY</p>
                  <p className="text-xs text-secondary font-semibold tracking-widest uppercase mt-0.5">Learn From Master</p>
                </div>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Empowering young minds with world-class Abacus and Vedic Mathematics. Over 17 years of excellence in skill-based education across Karnataka.
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <FooterHeading>Quick Links</FooterHeading>
              <ul className="space-y-2.5">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-white/60 hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-secondary shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Programs */}
            <div>
              <FooterHeading>Our Programs</FooterHeading>
              <ul className="space-y-2.5">
                {programs.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-white/60 hover:text-secondary transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-secondary shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <FooterHeading>Contact Us</FooterHeading>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="leading-relaxed">Rabbi Global Academy<br />105, 1st Cross Rd, behind Petra Nilaya Convent, Kannuru, Bengaluru, Chikkagubbi,<br />Karnataka 560077</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-secondary" />
                  </div>
                  <a href="tel:+919686801874" className="hover:text-secondary transition-colors">+91 96868 01874</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4 text-secondary" />
                  </div>
                  <a href="mailto:info@rabbiglobalacademy.com" className="hover:text-secondary transition-colors">info@rabbiglobalacademy.com</a>
                </li>
              </ul>

              {/* Certifications */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["ISO 9001:2015", "MSME Reg.", "40+ Centers"].map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/8 border border-white/15 text-white/50"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {year} Rabbi Global Academy. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
