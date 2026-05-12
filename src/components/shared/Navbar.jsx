import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";


const links = [
  { label: "Home", href: "/" },
  { label: "Courses Offered", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Our Franchises", href: "/franchises" },
  { label: "Learn Abacus", href: "/learn-abacus" },
  { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact", href: "/contact" },
];

const desktopLinkClass = ({ isActive }) =>
  `relative text-sm font-medium transition-colors duration-200 py-1 ${
    isActive
      ? "text-secondary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-secondary"
      : "text-foreground/75 hover:text-primary"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `text-base font-medium transition-colors border-b border-border/50 pb-3 ${
    isActive ? "text-secondary font-semibold" : "text-foreground/80 hover:text-secondary"
  }`;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/rabbi-logo.jpeg"
            alt="Rabbi Global Academy"
            className="h-12 w-12 rounded-full object-cover shadow-sm group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none tracking-tight text-primary">
              RABBI GLOBAL ACADEMY
       </span>
            <span className="text-xs text-secondary tracking-widest mt-1 font-['cursive'] italic">
           Learn From Master
          </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.href === "/"}
              className={desktopLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6 font-semibold shadow-md">
              Enroll Now
            </Button>
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background w-[88vw] max-w-[340px] border-l-border">
            <div className="flex flex-col gap-1 pt-10">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <img src="/images/rabbi-logo.jpeg" alt="Logo" className="h-9 w-9 rounded-full object-cover" />
                <span className="font-serif font-bold text-primary text-sm leading-tight">
                  RABBI GLOBAL ACADEMY
                </span>
              </Link>
              {links.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  end={link.href === "/"}
                  className={mobileLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" className="mt-4">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-semibold">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
