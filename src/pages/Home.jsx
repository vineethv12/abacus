import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppLayout } from "@/components/shared/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowRight,
  PlayCircle,
  Star,
  Quote,
  Calendar,
  MapPin,
  Trophy,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const HERO_PROMOS = [
  { src: "/images/promos/01-less-stress.png", title: "Less Stress at Home" },
  {
    src: "/images/promos/02-upgrade-thinking.png",
    title: "Upgrade Your Child's Thinking",
  },
  {
    src: "/images/promos/03-galaxy-of-greatness.png",
    title: "Enter the Galaxy of Greatness",
  },
  {
    src: "/images/promos/04-mental-arithmetic.png",
    title: "Mental Arithmetic Program",
  },
  { src: "/images/promos/05-seconds-matter.png", title: "Seconds Matter" },
  {
    src: "/images/promos/06-franchise-partner.png",
    title: "Welcome Our Franchise Partner",
  },
  {
    src: "/images/promos/07-classes-now.png",
    title: "Classes Now @ Little Millenium",
  },
  {
    src: "/images/promos/08-switch-on-brains.png",
    title: "Switch Off Screens, Switch On Brains",
  },
];

function HeroPromoShowcase() {
  const [active, setActive] = useState(0);
  const total = HERO_PROMOS.length;

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % total), 4500);
    return () => clearInterval(id);
  }, [total]);

  const go = (dir) => setActive((i) => (i + dir + total) % total);
  const prevIdx = (active - 1 + total) % total;
  const nextIdx = (active + 1) % total;

  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      {/* Soft glow behind stack */}
      <div className="absolute -inset-10 bg-secondary/15 blur-3xl rounded-full pointer-events-none" />

      {/* Stage */}
      <div className="relative h-[560px] sm:h-[600px]">
        {HERO_PROMOS.map((p, i) => {
          let pos = "opacity-0 scale-90 translate-x-0 z-0";
          if (i === active) {
            pos = "opacity-100 scale-100 translate-x-0 z-30";
          } else if (i === prevIdx) {
            pos = "opacity-40 scale-[0.82] -translate-x-[58%] -rotate-6 z-10";
          } else if (i === nextIdx) {
            pos = "opacity-40 scale-[0.82] translate-x-[58%] rotate-6 z-10";
          }
          return (
            <div
              key={p.src}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${pos}`}
            >
              <div className="relative w-[78%] aspect-[4/5]">
                <div className="absolute -inset-1.5 rounded-[1.75rem] bg-gradient-to-br from-secondary/80 via-secondary/30 to-transparent" />
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10 bg-white">
                  <img
                    src={p.src}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* Nav arrows */}
        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-primary shadow-xl flex items-center justify-center transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-primary shadow-xl flex items-center justify-center transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {HERO_PROMOS.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-secondary" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Home() {
  return (
    <AppLayout>
      {/* 1. Hero */}
      <section className="relative bg-primary overflow-hidden">
        {/* Decorative background pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft gold glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-3xl" />

        <div className="container relative z-10 px-4 pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/15 border border-secondary/30 mb-6 sm:mb-8 flex-wrap justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="text-secondary text-[11px] font-semibold tracking-[0.2em] uppercase">
                  Karnataka's #1 Abacus Academy
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-semibold text-white leading-[1.08] mb-6 sm:mb-7 tracking-tight">
                RABBI GLOBAL
                <span className="block text-secondary font-medium">
                  ACADEMY
                </span>
              </h1>
              <p className="text-base md:text-lg text-white/70 mb-8 sm:mb-10 max-w-lg leading-relaxed font-light">
                Karnataka's premier institution for Abacus, Vedic Mathematics,
                and cognitive development — shaping young minds for a lifetime
                of confidence, speed, and accuracy.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-12 items-stretch sm:items-center">
                {/* Cartoon mascot enroll button */}
                <Link
                  to="/contact"
                  className="group relative flex items-center justify-center sm:justify-start h-14 rounded-full shadow-xl shadow-secondary/30 hover:shadow-secondary/50 transition-all duration-300 hover:-translate-y-0.5 overflow-visible w-full sm:w-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, #D4A843 0%, #C9A84C 50%, #B8922A 100%)",
                  }}
                >
                  {/* Cartoon boy on the left - overlapping the button */}
                  <div className="relative -ml-2 w-16 sm:w-20 h-[76px] sm:h-[90px] shrink-0 flex items-end justify-center">
                    <img
                      src="/images/hero/hero-mascot-boy.png"
                      alt=""
                      className="h-[76px] sm:h-[90px] w-auto object-contain object-bottom drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                      style={{
                        filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.4))",
                      }}
                    />
                  </div>
                  {/* Button text */}
                  <span className="pl-2 pr-5 sm:pr-6 text-[14px] sm:text-[15px] font-bold text-white tracking-wide whitespace-nowrap flex items-center gap-2">
                    Watch Your Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                {/* <Button
                  variant="outline"
                className="h-14 px-6 sm:px-8 text-sm sm:text-base rounded-full font-medium bg-transparent text-white border-white/25 hover:bg-white/10 hover:text-white tracking-wide w-full sm:w-auto"
                >
                  <PlayCircle className="mr-2 w-5 h-5 text-secondary" /> Watch
                  Our Story
                </Button> */}
              </div>

              {/* Inline trust stats with cartoon icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl pt-8 border-t border-white/10">
                {[
                  {
                    img: "/images/hero/hero-stat-students.png",
                    num: "10K+",
                    label: "Students Trained",
                  },
                  {
                    img: "/images/hero/hero-stat-school.png",
                    num: "40+",
                    label: "Centers in Karnataka",
                  },
                  {
                    img: "/images/hero/hero-stat-trophy.png",
                    num: "17+",
                    label: "Years of Trust",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      src={s.img}
                      alt={s.label}
                      className="w-14 h-14 object-contain mb-1.5"
                      style={{
                        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))",
                      }}
                    />
                    <div className="text-2xl md:text-3xl font-serif font-semibold text-secondary leading-tight tracking-tight">
                      {s.num}
                    </div>
                    <div className="text-[10px] md:text-[11px] text-white/55 font-medium tracking-wider uppercase mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Premium promo flyer showcase */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <HeroPromoShowcase />
            </div>
          </div>
        </div>

        {/* Bottom partner / accreditation strip */}
        <div className="relative z-10 border-t border-white/10 bg-primary/40 backdrop-blur-sm">
          <div className="container px-4 py-5 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-widest text-white/50 font-semibold">
              Recognised &amp; Trusted by
            </span>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-white/70 text-sm font-semibold">
              <span>Karnataka Skill Dev. Authority</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>ISO 9001:2015 Certified</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>MSME Registered</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>40+ Partner Schools</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Snapshot + Stats */}
      <section
        className="py-12 lg:py-14 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #FEFCF5 0%, #F8F4E8 40%, #FDFBF4 100%)",
        }}
      >
        <div
          className="absolute top-8 right-8 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            width: 180,
            height: 180,
          }}
        />
        <div
          className="absolute bottom-8 left-8 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0A2240 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            width: 140,
            height: 140,
          }}
        />

        <div className="container px-4 relative z-10">
          {/* ── Top: text left | founder photos right ── */}
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-10 items-center mb-8">
            {/* LEFT: badge + heading + text + CTA */}
            <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 bg-secondary/8 mb-3 self-center lg:self-start">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-secondary"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary">
                  Legacy of Excellence
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-[2.75rem] font-serif font-bold leading-[1.1] mb-2 tracking-tight">
                <span className="text-primary">About Rabbi </span>
                <span className="text-secondary">Global Academy</span>
              </h3>

              <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                <span className="h-px w-10 bg-secondary/40 rounded-full" />
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#C9A84C"
                  className="opacity-70"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="h-px w-10 bg-secondary/40 rounded-full" />
              </div>

              <div className="space-y-3 mb-4">
                <p className="text-[15px] text-primary/60 leading-relaxed">
                  With over 17 years of proven excellence, we deliver impactful,
                  skill-oriented learning solutions built on a strong foundation
                  of academic expertise and innovation.
                </p>
                <p className="text-[15px] text-primary/60 leading-relaxed">
                  Focusing on Abacus, Vedic Mathematics, and cognitive skill
                  development, our curriculum is meticulously tailored for
                  children aged 4 to 18, emphasizing conceptual clarity and
                  mental agility.
                </p>
                <p className="text-[15px] text-primary/60 leading-relaxed">
                  Our holistic approach transforms learning into an engaging
                  experience, enabling students to achieve speed, accuracy, and
                  confidence while strengthening concentration and analytical
                  thinking.
                </p>
              </div>

              <Button
                variant="link"
                className="text-secondary font-semibold px-0 hover:no-underline group text-[15px] self-center lg:self-start"
              >
                Read our full story{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* RIGHT: founder photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {[
                {
                  img: "/images/founders/founder-basha.png",
                  name: "Grace",
                  title: "Founder & Director",
                },
                {
                  img: "/images/founders/founder-parveen.png",
                  name: "Mathew",
                  title: "Founder & Director",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-md border border-secondary/12 bg-white group"
                >
                  <div
                    className="aspect-square overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(170deg, #FDF3C8 0%, #F5E090 60%, #EDD060 100%)",
                    }}
                  >
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-3 py-2 text-center border-t border-secondary/10 bg-white">
                    <div className="text-[12px] font-bold text-primary">
                      {f.name}
                    </div>
                    <div className="text-[11px] text-secondary font-semibold mt-0.5">
                      {f.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom: full-width 4-col stat cards ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              {
                num: "10,000+",
                label: "Students",
                desc: "Trained successfully",
                icon: "/images/icons/icon-students.png",
              },
              {
                num: "40+",
                label: "Franchises",
                desc: "Across the state",
                icon: "/images/icons/icon-franchises.png",
              },
              {
                num: "17+",
                label: "Years",
                desc: "Of educational excellence",
                icon: "/images/icons/icon-years.png",
              },
              {
                num: "100%",
                label: "India",
                desc: "Statewide presence",
                icon: "/images/icons/icon-india.png",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl py-5 px-4 flex flex-col items-center text-center shadow-md shadow-primary/6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-secondary/10"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-3 p-2.5"
                  style={{
                    background:
                      "linear-gradient(135deg, #FDF3C8 0%, #F5E090 100%)",
                  }}
                >
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-2xl font-serif font-bold italic text-secondary leading-none mb-1">
                  {stat.num}
                </div>
                <div className="text-[13px] font-bold text-primary">
                  {stat.label}
                </div>
                <div className="text-[11px] text-primary/40 leading-snug mt-0.5">
                  {stat.desc}
                </div>
                <div className="w-5 h-[2px] rounded-full bg-secondary mt-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose / Benefits Grid */}
      <section
        className="py-20 lg:py-28 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #EEF4FF 0%, #F5F0FF 35%, #FFF8EE 70%, #F0FFF8 100%)",
        }}
      >
        {/* Subtle decorative stars */}
        <div className="absolute top-10 left-10 text-secondary/20 text-4xl pointer-events-none select-none">
          ✦
        </div>
        <div className="absolute top-16 right-16 text-blue-300/30 text-3xl pointer-events-none select-none">
          ✦
        </div>
        <div className="absolute bottom-10 left-1/3 text-purple-300/25 text-2xl pointer-events-none select-none">
          ✦
        </div>
        <div className="absolute bottom-16 right-10 text-secondary/15 text-4xl pointer-events-none select-none">
          ✦
        </div>

        <div className="container px-4 relative">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-secondary/35 bg-white shadow-sm mb-6">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#C9A84C">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-primary/70">
                Why Choose Us
              </span>
            </div>

            {/* Two-tone heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-[1.1] mb-3 tracking-tight">
              <span className="text-primary">Why Choose </span>
              <span className="text-secondary">Rabbi Global Academy</span>
            </h2>

            {/* Decorative underline with star */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-12 bg-secondary/40 rounded-full" />
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#C9A84C"
                className="opacity-80"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="h-px w-12 bg-secondary/40 rounded-full" />
            </div>

            <p className="text-primary/55 text-base md:text-lg leading-relaxed">
              Beyond mathematics, we develop essential life skills that prepare
              your child for future academic challenges.
            </p>
          </div>

          {/* 3×2 benefit cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[
              {
                img: "/images/benefits/concentration.png",
                circleBg: "#DBEAFE",
                title: "Concentration",
                titleColor: "#1D4ED8",
                desc: "Deepens focus and attention span through visualized mental math techniques.",
                icon: (
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-full h-full"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="17"
                      stroke="#3B82F6"
                      strokeWidth="2.2"
                      fill="none"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="11"
                      stroke="#3B82F6"
                      strokeWidth="1.8"
                      fill="none"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="5"
                      stroke="#3B82F6"
                      strokeWidth="1.8"
                      fill="none"
                    />
                    <circle cx="18" cy="18" r="2" fill="#3B82F6" />
                  </svg>
                ),
                iconBg: "#DBEAFE",
              },
              {
                img: "/images/benefits/memory.png",
                circleBg: "#FEF3C7",
                title: "Memory Retention",
                titleColor: "#D97706",
                desc: "Strengthens visual memory and the ability to recall information instantly.",
                icon: (
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M18 6C13 6 9 10 9 15C9 18 10.5 20.5 13 22V26H23V22C25.5 20.5 27 18 27 15C27 10 23 6 18 6Z"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      fill="#FED7AA"
                      fillOpacity="0.5"
                    />
                    <path
                      d="M18 6C18 6 18 11 14 13"
                      stroke="#F97316"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 6C18 6 18 11 22 13"
                      stroke="#F97316"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="13"
                      y1="26"
                      x2="23"
                      y2="26"
                      stroke="#F97316"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <line
                      x1="14"
                      y1="29"
                      x2="22"
                      y2="29"
                      stroke="#F97316"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                iconBg: "#FEF3C7",
              },
              {
                img: "/images/benefits/speed.png",
                circleBg: "#D1FAE5",
                title: "Speed & Accuracy",
                titleColor: "#059669",
                desc: "Calculations performed mentally faster than relying on a calculator.",
                icon: (
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-full h-full"
                  >
                    <circle
                      cx="18"
                      cy="19"
                      r="13"
                      stroke="#10B981"
                      strokeWidth="2.2"
                      fill="none"
                    />
                    <path
                      d="M18 6V4"
                      stroke="#10B981"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 7L13 5.3"
                      stroke="#10B981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22 7L23 5.3"
                      stroke="#10B981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 19L18 12"
                      stroke="#10B981"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 19L23 14"
                      stroke="#10B981"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle cx="18" cy="19" r="2" fill="#10B981" />
                    <path
                      d="M18 28V30"
                      stroke="#10B981"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                iconBg: "#D1FAE5",
              },
              {
                img: "/images/benefits/wholebrain.png",
                circleBg: "#EDE9FE",
                title: "Whole-Brain Development",
                titleColor: "#7C3AED",
                desc: "Stimulates both left and right hemispheres simultaneously.",
                icon: (
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M18 8C14 8 10 11 10 16C10 18 11 20 12 21C11 22 10 23.5 10 25C10 27 12 29 14 29H18"
                      stroke="#A855F7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="#DDD6FE"
                      fillOpacity="0.4"
                    />
                    <path
                      d="M18 8C22 8 26 11 26 16C26 18 25 20 24 21C25 22 26 23.5 26 25C26 27 24 29 22 29H18"
                      stroke="#A855F7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="#DDD6FE"
                      fillOpacity="0.4"
                    />
                    <line
                      x1="18"
                      y1="8"
                      x2="18"
                      y2="29"
                      stroke="#A855F7"
                      strokeWidth="1.5"
                      strokeDasharray="2 2"
                    />
                    <circle cx="13" cy="16" r="1.5" fill="#A855F7" />
                    <circle cx="23" cy="16" r="1.5" fill="#A855F7" />
                    <circle cx="13" cy="22" r="1.5" fill="#A855F7" />
                    <circle cx="23" cy="22" r="1.5" fill="#A855F7" />
                  </svg>
                ),
                iconBg: "#EDE9FE",
              },
              {
                img: "/images/benefits/confidence.png",
                circleBg: "#BFDBFE",
                title: "Confidence",
                titleColor: "#2563EB",
                desc: "Builds self-esteem by completely removing the fear of numbers.",
                icon: (
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-full h-full"
                  >
                    <circle
                      cx="18"
                      cy="10"
                      r="5"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      fill="#BFDBFE"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M10 30C10 24.5 13.5 21 18 21C22.5 21 26 24.5 26 30"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 21V16"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 22L13 26"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 22L23 26"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                iconBg: "#BFDBFE",
              },
              {
                img: "/images/benefits/creativity.png",
                circleBg: "#FCE7F3",
                title: "Visualization & Creativity",
                titleColor: "#BE185D",
                desc: "Enhances imaginative thinking through mental bead visualization.",
                icon: (
                  <svg
                    viewBox="0 0 36 36"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M18 6C14 6 11 9 11 13C11 16 13 18.5 16 19.5V23H20V19.5C23 18.5 25 16 25 13C25 9 22 6 18 6Z"
                      stroke="#EC4899"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      fill="#FBCFE8"
                      fillOpacity="0.5"
                    />
                    <line
                      x1="16"
                      y1="23"
                      x2="20"
                      y2="23"
                      stroke="#EC4899"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <line
                      x1="15"
                      y1="26"
                      x2="21"
                      y2="26"
                      stroke="#EC4899"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="8"
                      cy="11"
                      r="1.5"
                      fill="#EC4899"
                      fillOpacity="0.5"
                    />
                    <circle
                      cx="28"
                      cy="11"
                      r="1.5"
                      fill="#EC4899"
                      fillOpacity="0.5"
                    />
                    <circle
                      cx="10"
                      cy="19"
                      r="1"
                      fill="#EC4899"
                      fillOpacity="0.4"
                    />
                    <circle
                      cx="26"
                      cy="19"
                      r="1"
                      fill="#EC4899"
                      fillOpacity="0.4"
                    />
                    <path
                      d="M18 3V5"
                      stroke="#EC4899"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                iconBg: "#FCE7F3",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-gray-100"
              >
                {/* Top row: illustration circle + icon badge + title */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Circular illustration */}
                  <div
                    className="shrink-0 w-28 h-28 rounded-full overflow-hidden flex items-center justify-center"
                    style={{ background: b.circleBg }}
                  >
                    <img
                      src={b.img}
                      alt={b.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right: icon + title */}
                  <div className="flex-1 pt-1">
                    {/* Small icon badge */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 p-2"
                      style={{ background: b.iconBg }}
                    >
                      {b.icon}
                    </div>

                    {/* Title */}
                    <h4
                      className="text-lg font-bold leading-snug mb-1.5"
                      style={{ color: "#0A2240" }}
                    >
                      {b.title}
                    </h4>

                    {/* Colored underline */}
                    <div
                      className="w-8 h-[3px] rounded-full"
                      style={{ background: b.titleColor }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-[14px] text-primary/55 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Levels */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #FEFCF5 0%, #FAF6EA 50%, #FEFCF5 100%)",
        }}
      >
        {/* Dot grid decorations */}
        <div
          className="absolute top-6 right-6 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            width: 200,
            height: 200,
          }}
        />
        <div
          className="absolute bottom-6 left-6 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            width: 160,
            height: 160,
          }}
        />

        <div className="container px-4 relative z-10">
          {/* Section header — exactly like reference */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-secondary/50 rounded-full" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-secondary">
                Our Methodology
              </span>
              <span className="h-px w-12 bg-secondary/50 rounded-full" />
            </div>
            <h3 className="text-4xl md:text-[2.75rem] font-serif font-bold text-primary mb-4 leading-tight">
              A Structured 8-Level Journey
            </h3>
            {/* Gold diamond divider */}
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-16 bg-secondary/40 rounded-full" />
              <svg width="10" height="10" viewBox="0 0 10 10" fill="#C9A84C">
                <polygon points="5,0 10,5 5,10 0,5" />
              </svg>
              <span className="h-px w-16 bg-secondary/40 rounded-full" />
            </div>
          </div>

          {/* 3 level cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                img: "/images/methodology/method-foundation.png",
                title: "Foundation",
                levels: "Levels 1 & 2",
                age: "Ages 4–7",
                duration: "24 Weeks",
                desc: "Introduction to numbers, basic bead movement, and developing finger dexterity.",
              },
              {
                img: "/images/methodology/method-intermediate.png",
                title: "Intermediate",
                levels: "Levels 3, 4 & 5",
                age: "Ages 7–10",
                duration: "36 Weeks",
                desc: "Mental arithmetic visualization, speed building, and complex addition/subtraction.",
              },
              {
                img: "/images/methodology/method-advanced.png",
                title: "Advanced",
                levels: "Levels 6, 7 & 8",
                age: "Ages 10–14",
                duration: "36 Weeks",
                desc: "Mastery over multiplication, division, decimals, and rapid mental calculations.",
              },
            ].map((level, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 border border-secondary/8 flex flex-col items-center text-center px-7 py-8"
              >
                {/* Cartoon illustration in warm cream circle */}
                <div
                  className="w-44 h-44 rounded-full flex items-center justify-center mb-5 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #FDF6DC 0%, #F5E8AA 100%)",
                  }}
                >
                  <img
                    src={level.img}
                    alt={level.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Title */}
                <h4 className="text-[1.5rem] font-serif font-bold text-primary mb-1">
                  {level.title}
                </h4>

                {/* Gold subtitle */}
                <p className="text-secondary font-semibold text-[15px] mb-1">
                  {level.levels}
                </p>

                {/* Gold dot divider */}
                <div className="flex items-center justify-center gap-1.5 mb-5">
                  <span className="h-px w-8 bg-secondary/30 rounded-full" />
                  <span className="w-1 h-1 rounded-full bg-secondary/60" />
                  <span className="h-px w-8 bg-secondary/30 rounded-full" />
                </div>

                {/* Info pills */}
                <div className="flex justify-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-gray-100 text-primary/60 text-[12px] font-medium px-3 py-1 rounded-full">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                    {level.age}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-gray-100 text-primary/60 text-[12px] font-medium px-3 py-1 rounded-full">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {level.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-primary/50 text-[14px] leading-relaxed mb-6 flex-1">
                  {level.desc}
                </p>

                {/* View Curriculum link with gold underline */}
                <Link
                  to="/courses"
                  className="inline-flex items-center text-primary font-semibold text-[14px] hover:text-secondary transition-colors group border-b-2 border-secondary pb-0.5"
                >
                  View Curriculum{" "}
                  <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Course Structure */}
      <section
        className="py-14 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #FEFCF5 0%, #FAF6EA 50%, #FEFCF5 100%)",
        }}
      >
        <div
          className="absolute top-6 right-6 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            width: 180,
            height: 180,
          }}
        />
        <div className="container px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* LEFT: heading + list */}
            <div>
              {/* Small abacus icon + heading */}
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/images/icon-calendar.png"
                  alt=""
                  className="w-8 h-8 object-contain opacity-80"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <rect
                    x="4"
                    y="16"
                    width="40"
                    height="26"
                    rx="3"
                    fill="#C9A84C"
                    fillOpacity="0.18"
                    stroke="#C9A84C"
                    strokeWidth="2"
                  />
                  <line
                    x1="4"
                    y1="24"
                    x2="44"
                    y2="24"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="20" r="2" fill="#C9A84C" />
                  <circle cx="24" cy="20" r="2" fill="#C9A84C" />
                  <circle cx="36" cy="20" r="2" fill="#C9A84C" />
                  <circle
                    cx="12"
                    cy="30"
                    r="2"
                    fill="#0A2240"
                    fillOpacity="0.5"
                  />
                  <circle
                    cx="24"
                    cy="30"
                    r="2"
                    fill="#0A2240"
                    fillOpacity="0.5"
                  />
                  <circle
                    cx="36"
                    cy="30"
                    r="2"
                    fill="#0A2240"
                    fillOpacity="0.5"
                  />
                  <circle
                    cx="12"
                    cy="36"
                    r="2"
                    fill="#0A2240"
                    fillOpacity="0.5"
                  />
                  <circle
                    cx="24"
                    cy="36"
                    r="2"
                    fill="#0A2240"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>
              <h2 className="text-4xl md:text-[2.6rem] font-serif font-bold text-primary mb-3 leading-tight">
                Course Structure
              </h2>
              <div className="w-14 h-1 bg-secondary rounded-full mb-8" />

              {/* List items with cartoon thumbnails */}
              <ul className="space-y-5">
                {[
                  {
                    img: "/images/course/thumb-weeks.png",
                    text: (
                      <>
                        Designed for exactly{" "}
                        <span className="text-secondary font-bold">
                          12 weeks
                        </span>{" "}
                        per level
                      </>
                    ),
                  },
                  {
                    img: "/images/course/thumb-hours.png",
                    text: (
                      <>
                        Weekly{" "}
                        <span className="text-secondary font-bold">
                          2 hours
                        </span>{" "}
                        per session for optimal retention
                      </>
                    ),
                  },
                  {
                    img: "/images/course/thumb-ratio.png",
                    text: (
                      <>
                        Strict teacher-to-student ratio of{" "}
                        <span className="text-secondary font-bold">1:15</span>
                      </>
                    ),
                  },
                  {
                    img: "/images/course/thumb-cert.png",
                    text: (
                      <>
                        Awarded level-wise{" "}
                        <span className="text-secondary font-bold">
                          certificates
                        </span>{" "}
                        upon completion
                      </>
                    ),
                  },
                  {
                    img: "/images/course/thumb-verify.png",
                    text: (
                      <>
                        Certificates globally{" "}
                        <span className="text-secondary font-bold">
                          verifiable
                        </span>{" "}
                        online
                      </>
                    ),
                  },
                  {
                    img: "/images/course/thumb-hybrid.png",
                    text: (
                      <>
                        <span className="text-secondary font-bold">
                          Hybrid delivery
                        </span>{" "}
                        combining online and classroom modes
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl shrink-0 overflow-hidden shadow-sm border border-secondary/15"
                      style={{
                        background:
                          "linear-gradient(135deg, #FDF6DC 0%, #F5E8AA 80%)",
                      }}
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[19px] text-primary/90 font-semibold leading-snug">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: 2×2 cartoon cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  img: "/images/course/course-weeks.png",
                  label: "12 Weeks / Level",
                },
                { img: "/images/course/course-ratio.png", label: "1:15 Ratio" },
                {
                  img: "/images/course/course-certificate.png",
                  label: "Level Certificates",
                },
                {
                  img: "/images/course/course-hybrid.png",
                  label: "Online + Offline",
                },
              ].map((tile, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-secondary/8 overflow-hidden flex flex-col items-center text-center pb-5"
                >
                  {/* Cartoon illustration */}
                  <div
                    className="w-full aspect-square overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #FDF6DC 0%, #F5E8AA 80%)",
                    }}
                  >
                    <img
                      src={tile.img}
                      alt={tile.label}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  {/* Gold diamond divider */}
                  <div className="flex items-center justify-center gap-1.5 mt-4 mb-2">
                    <span className="h-px w-6 bg-secondary/30 rounded-full" />
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 10 10"
                      fill="#C9A84C"
                    >
                      <polygon points="5,0 10,5 5,10 0,5" />
                    </svg>
                    <span className="h-px w-6 bg-secondary/30 rounded-full" />
                  </div>
                  <p className="text-[15px] font-bold text-primary px-3">
                    {tile.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Activities in Abacus Class */}
      <section
        className="py-14 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #FEFCF5 0%, #FAF6EA 50%, #FEFCF5 100%)",
        }}
      >
        <div
          className="absolute bottom-6 left-6 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            width: 160,
            height: 160,
          }}
        />
        <div className="container px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* Left: 2×2 cartoon cards */}
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {[
                {
                  img: "/images/activities/act-image-flash.png",
                  label: "Image Flash",
                },
                {
                  img: "/images/activities/act-speed-writing.png",
                  label: "Speed Writing",
                },
                {
                  img: "/images/activities/act-speed-math.png",
                  label: "Speed Math",
                },
                {
                  img: "/images/activities/act-listening.png",
                  label: "Listening Exercises",
                },
              ].map((tile, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col border border-secondary/8"
                >
                  {/* Illustration */}
                  <div
                    className="w-full aspect-square overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #FDF6DC 0%, #F5E8AA 80%)",
                    }}
                  >
                    <img
                      src={tile.img}
                      alt={tile.label}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  {/* Label + gold diamond divider */}
                  <div className="py-4 px-3 text-center">
                    <p className="font-bold text-primary text-[15px] leading-tight">
                      {tile.label}
                    </p>
                    <div className="flex items-center justify-center gap-1.5 mt-2">
                      <span className="h-px w-6 bg-secondary/40 rounded-full" />
                      <svg
                        width="7"
                        height="7"
                        viewBox="0 0 10 10"
                        fill="#C9A84C"
                      >
                        <polygon points="5,0 10,5 5,10 0,5" />
                      </svg>
                      <span className="h-px w-6 bg-secondary/40 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: heading + numbered list */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-[2.6rem] font-serif font-bold text-primary mb-3 leading-tight">
                Activities in Class
              </h2>
              <div className="w-14 h-1 bg-secondary rounded-full mb-3" />
              {/* Gold sparkle dots */}
              <div className="flex items-center gap-1.5 mb-8">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="#C9A84C">
                  <polygon points="5,0 10,5 5,10 0,5" />
                </svg>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 10 10"
                  fill="#C9A84C"
                  opacity="0.5"
                >
                  <polygon points="5,0 10,5 5,10 0,5" />
                </svg>
              </div>

              <ol className="space-y-5">
                {[
                  {
                    text: "100% practical, hands-on sessions",
                    img: "/images/activities/act-image-flash.png",
                  },
                  {
                    text: "Timed speed-writing exercises to boost motor skills",
                    img: "/images/activities/act-speed-writing.png",
                  },
                  {
                    text: "Image Flash — identifying and calling out visualized numbers",
                    img: "/images/activities/act-image-flash.png",
                  },
                  {
                    text: "Timed exercises using the physical student abacus",
                    img: "/images/activities/act-speed-math.png",
                  },
                  {
                    text: "Oral Sums — rapid verbal arithmetic with the tutor",
                    img: "/images/activities/act-listening.png",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0 text-white font-bold text-sm shadow-md">
                      {i + 1}
                    </div>
                    <span className="flex-1 text-[17px] text-primary/85 font-semibold leading-snug">
                      {item.text}
                    </span>
                    <div
                      className="shrink-0 w-16 h-16 rounded-xl overflow-hidden shadow-sm border border-secondary/15"
                      style={{
                        background:
                          "linear-gradient(135deg, #FDF6DC 0%, #F5E8AA 80%)",
                      }}
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Featured Event Banner */}
      <section className="relative py-24 lg:py-28 overflow-hidden">
        {/* Landscape background image */}
        <div className="absolute inset-0">
          <img
            src="/images/championship-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-[#0A2240]/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-secondary/10 blur-3xl rounded-full pointer-events-none" />

        <div className="container relative z-10 px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary text-[11px] font-semibold tracking-[0.22em] uppercase">
                Featured Upcoming Event
              </span>
            </div>
            <p className="text-white/60 text-sm font-light">
              Mark your calendars — registrations now open
            </p>
          </div>

          <Card className="overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl shadow-black/50 bg-white/[0.04] backdrop-blur-xl">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-3 p-10 flex flex-col items-center justify-center text-center text-white relative border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-transparent to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-secondary mb-3">
                    December
                  </div>
                  <div className="text-7xl lg:text-8xl font-serif font-semibold leading-none mb-3 text-white">
                    15
                  </div>
                  <div className="text-xs font-medium tracking-wider text-white/65 mb-7">
                    to 17, 2026
                  </div>
                  <div className="pt-6 border-t border-white/15">
                    <Trophy className="w-6 h-6 mx-auto mb-2 text-secondary" />
                    <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                      8th Edition
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-9 p-8 lg:p-12 text-white">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-red-300">
                    Registrations Open
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif font-semibold text-white leading-[1.1] mb-4 tracking-tight">
                  Rabbi Global Academy
                  <span className="block text-secondary font-medium mt-1">
                    National Abacus Championship 2026
                  </span>
                </h2>
                <p className="text-white/65 text-base md:text-lg mb-9 max-w-2xl leading-relaxed font-light">
                  Three days of high-stakes mental arithmetic where 1,500+
                  students from across INDIA compete for the National title and
                  a ₹5 Lakh scholarship pool.
                </p>

                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                  {[
                    { icon: MapPin, label: "Venue", value: "Bengaluru" },
                    {
                      icon: Calendar,
                      label: "Format",
                      value: "Onsite + Live Stream",
                    },
                    {
                      icon: Users,
                      label: "Expected",
                      value: "1,500+ Participants",
                    },
                  ].map((info, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm"
                    >
                      <div className="w-9 h-9 rounded-lg bg-secondary/15 border border-secondary/25 flex items-center justify-center shrink-0">
                        <info.icon className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/50 mb-1">
                          {info.label}
                        </div>
                        <div className="text-sm font-semibold text-white leading-tight truncate">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-white/50 mb-3">
                    Competition Categories
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Sub-Junior", age: "Ages 4–7" },
                      { name: "Junior", age: "Ages 8–11" },
                      { name: "Senior", age: "Ages 12–16" },
                      { name: "Open / Pro", age: "All Levels" },
                    ].map((cat, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/15"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="font-semibold text-white text-sm">
                          {cat.name}
                        </span>
                        <span className="text-xs text-white/55 font-light">
                          {cat.age}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-white/10">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 h-12 font-semibold flex-1 sm:flex-initial shadow-lg shadow-secondary/30 tracking-wide">
                    Register for Championship{" "}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full px-8 h-12 border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white font-medium flex-1 sm:flex-initial tracking-wide"
                  >
                    Download Brochure
                  </Button>
                  <span className="text-xs text-white/50 sm:ml-auto font-light">
                    Last date to register:{" "}
                    <span className="font-semibold text-white/85">
                      30 Nov 2026
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 9. Awards & Recognition Gallery */}
      <section className="py-24 bg-[#FCFBF8] border-y border-border/40">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-bold tracking-widest text-secondary uppercase mb-4 block">
              Awards &amp; Recognition
            </span>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4 relative inline-block">
              Honoured on National Stages
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-secondary rounded-full" />
            </h2>
            <p className="text-muted-foreground text-lg mt-6">
              Our founders and master trainers have been felicitated by leading
              national and international abacus federations for excellence in
              education.
            </p>
          </div>

          {/* Photo gallery — large left + two stacked right */}
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
            {/* Large photo — left */}
            <div className="lg:w-[58%] group relative rounded-3xl overflow-hidden shadow-xl shadow-primary/10 aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
              <img
                src="/images/founders/award-trophy-couple.png"
                alt="Founders receiving Arithmetic Competition trophy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-3 text-[10px] uppercase tracking-widest">
                  National Award
                </Badge>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2 leading-tight">
                  National Arithmetic Competition — Excellence in Coaching
                </h3>
                <p className="text-white/80 text-sm">
                  Founders honoured for outstanding contribution to abacus
                  education across India.
                </p>
              </div>
            </div>

            {/* Two stacked photos — right */}
            <div className="lg:w-[42%] flex flex-col gap-6">
              <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-primary/10 aspect-[4/3]">
                <img
                  src="/images/founders/award-plaque-couple.png"
                  alt="Felicitation by Indian Abacus Federation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <Badge className="bg-white/15 text-white hover:bg-white/20 mb-2 text-[10px] uppercase tracking-widest border-white/20">
                    Federation
                  </Badge>
                  <h4 className="text-base lg:text-lg font-serif font-bold text-white leading-tight">
                    Indian Abacus Federation Honour
                  </h4>
                </div>
              </div>
              <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-primary/10 aspect-[4/3]">
                <img
                  src="/images/founders/award-cup-trio.png"
                  alt="Championship trophy presentation at Convention Centre Chennai"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <Badge className="bg-white/15 text-white hover:bg-white/20 mb-2 text-[10px] uppercase tracking-widest border-white/20">
                    Chennai 2024
                  </Badge>
                  <h4 className="text-base lg:text-lg font-serif font-bold text-white leading-tight">
                    National Championship Trophy
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Recognition stat strip */}
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "27", label: "National Awards" },
              { num: "12", label: "International Felicitations" },
              { num: "150+", label: "Trophies Won by Students" },
              { num: "8", label: "Federation Memberships" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-2xl p-6 shadow-sm"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-1">
                  {s.num}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Curriculum Model Stepper */}
      {/* <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Proven Learning Model</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A systematic approach to mastering mental arithmetic.</p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0" />
            <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              {[
    { step: "01", name: "Concept", desc: "Understanding the abacus instrument and bead values." },
    { step: "02", name: "Practice", desc: "Repetitive physical manipulation to build muscle memory." },
    { step: "03", name: "Mastery", desc: "Transitioning from physical beads to mental visualization." },
    { step: "04", name: "Application", desc: "Solving complex arithmetic problems entirely mentally." }
  ].map((item, i) => <div key={i} className="flex flex-col items-center text-center bg-background p-4">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-secondary flex items-center justify-center text-2xl font-serif font-bold text-primary mb-6 shadow-xl relative">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section> */}

      {/* 10. Programs Overview */}
      <section className="py-24 bg-primary/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Explore Our Programs
            </h2>
            <p className="text-muted-foreground">
              Tailored educational paths for comprehensive cognitive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "icon-abacus.png",
                title: "Abacus Learning",
                desc: "Our flagship program using the ancient tool to build unparalleled mental arithmetic speed and accuracy.",
              },
              {
                icon: "icon-vedic.png",
                title: "Vedic Mathematics",
                desc: "Ancient Indian sutras that simplify complex calculations for higher academic performance.",
              },
              {
                icon: "icon-whole-brain.png",
                title: "Brain Development",
                desc: "Specialized exercises designed to enhance focus, memory, and overall cognitive abilities.",
              },
            ].map((prog, i) => (
              <Card
                key={i}
                className="bg-white border-none rounded-3xl shadow-md hover:shadow-xl transition-all p-8 flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 mb-6">
                  <img
                    src={`/images/${prog.icon}`}
                    alt={prog.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-2xl font-serif font-bold text-primary mb-3">
                  {prog.title}
                </h4>
                <p className="text-muted-foreground mb-8 flex-1">{prog.desc}</p>
                <Link
                  to="/courses"
                  className="text-secondary font-bold hover:text-primary transition-colors flex items-center"
                >
                  Explore Program <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Partnered With */}
      {/* <section className="py-24 bg-background border-y border-border/50">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative p-4">
              <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform rotate-3" />
              <img src="/images/franchise-handshake.png" alt="Partnership signing" className="relative z-10 rounded-2xl shadow-xl w-full object-cover border border-white" />
            </div>

            <div>
              <span className="text-sm font-bold tracking-widest text-secondary uppercase mb-4 block">
                Partnered With
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                India Skill Development Initiative
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Rabbi Global Academy actively collaborates with India skill development bodies and educational boards to bring abacus-based cognitive learning to government and private schools across the state. Together, we are building a foundation of strong mathematical literacy for the next generation.
              </p>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full px-8 font-semibold">
                Know More
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* 11b. Hear From Our Founders — Video Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-[#0F2D52] to-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-secondary/15 blur-3xl rounded-full" />

        <div className="container relative z-10 px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="text-sm font-bold tracking-widest text-secondary uppercase mb-4 block">
                Voices of the Academy
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Hear From Our
                <br />
                <span className="text-secondary italic">
                  Founders &amp; Master Trainers
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 text-center lg:text-left">
              <p className="text-white/70 text-lg leading-relaxed">
                Meet the people behind Rabbi Global Academy — their journey,
                their philosophy, and the vision that has shaped 10,000+ young
                minds across India.
              </p>
            </div>
          </div>

          {/* Featured video + supporting videos */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Featured large video */}
            <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden aspect-video shadow-2xl shadow-black/40 cursor-pointer w-full">
              <img
                src="/images/founders/award-trophy-couple.png"
                alt="Founder interview"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-primary/10" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-secondary/40 animate-ping" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <PlayCircle
                      className="w-10 h-10 md:w-12 md:h-12"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>HD · 4:32</span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary mb-3 text-[10px] uppercase tracking-widest">
                  Founders' Story
                </Badge>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight mb-2">
                  "Why we built Rabbi Global Academy"
                </h3>
                <p className="text-white/80 text-sm">
                  A 17-year journey, told by our founders.
                </p>
              </div>
            </div>

            {/* Supporting videos column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                {
                  img: "/images/founders/award-plaque-couple.png",
                  badge: "Co-Founder",
                  title: "The Vision Behind Our Curriculum",
                  duration: "3:18",
                  meta: "Mrs. Lakshmi B. \u2014 Co-Founder &amp; Head of Curriculum",
                },
                {
                  img: "/images/founders/award-cup-trio.png",
                  badge: "Master Trainer",
                  title: "Coaching Champions on the National Stage",
                  duration: "2:54",
                  meta: "Mr. Ravi K. \u2014 Senior Master Trainer",
                },
              ].map((v, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:border-secondary/40 transition-all cursor-pointer flex flex-col sm:flex-row"
                >
                  <div className="relative w-full sm:w-2/5 shrink-0 aspect-[4/3] sm:aspect-square overflow-hidden">
                    <img
                      src={v.img}
                      alt={v.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded">
                      {v.duration}
                    </div>
                  </div>
                  <div className="flex-1 p-5 flex flex-col justify-center text-center sm:text-left">
                    <Badge className="bg-secondary/15 text-secondary hover:bg-secondary/20 border border-secondary/30 mb-2 text-[10px] uppercase tracking-widest w-fit">
                      {v.badge}
                    </Badge>
                    <h4 className="text-base md:text-lg font-serif font-bold text-white leading-snug mb-1.5">
                      {v.title}
                    </h4>
                    <p
                      className="text-xs text-white/60"
                      dangerouslySetInnerHTML={{ __html: v.meta }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Watch all CTA */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="rounded-full px-8 h-12 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white font-semibold"
            >
              <PlayCircle className="mr-2 w-5 h-5 text-secondary" />
              Watch All Founder Stories
            </Button>
          </div>
        </div>
      </section>

      {/* 12. Testimonials */}
      <section className="py-24 bg-[#FCFBF8]">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4 relative inline-block">
            What Our Students Say
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-secondary rounded-full" />
          </h2>
          <p className="text-muted-foreground mt-6 mb-16 max-w-2xl mx-auto">
            Hear from parents and students who have experienced the Rabbi Global
            Academy transformation firsthand.
          </p>

          <Carousel
            className="max-w-6xl mx-auto mb-16"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="-ml-4">
              {[
                {
                  name: "Priya Sharma",
                  role: "Parent of Arjun, Class 4",
                  quote:
                    "Since joining the foundation level, Arjun's concentration has improved drastically. He no longer fears math; he treats calculations like a fun game. The teachers are incredibly supportive.",
                },
                {
                  name: "Rahul Desai",
                  role: "Student, Level 6",
                  quote:
                    "I can now calculate large numbers faster than my friends can type them into a calculator. The Image Flash exercises are my favorite part of the class. It feels like magic.",
                },
                {
                  name: "Dr. Ananya Reddy",
                  role: "Parent of Diya, Class 7",
                  quote:
                    "The structured approach and the 1:15 ratio ensure that every child gets attention. Diya's overall academic performance has improved because her memory retention is so much better now.",
                },
              ].map((test, i) => (
                <CarouselItem
                  key={i}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="bg-white border-none shadow-lg h-full rounded-3xl p-8 text-left">
                    <div className="flex gap-1 text-secondary mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-secondary" />
                      ))}
                    </div>
                    <p className="text-primary/80 italic mb-8 leading-relaxed">
                      "{test.quote}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                        {test.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-primary">{test.name}</h5>
                        <p className="text-sm text-muted-foreground">
                          {test.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="position-static transform-none" />
              <CarouselNext className="position-static transform-none" />
            </div>
          </Carousel>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-border/50">
            {[
              { icon: "icon-analytical.png", label: "Analytical Skill" },
              {
                icon: "icon-whole-brain.png",
                label: "Whole Brain Development",
              },
              { icon: "icon-academic.png", label: "Academic Performance" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3">
                <img
                  src={`/images/${badge.icon}`}
                  alt=""
                  className="w-8 h-8 object-contain mix-blend-multiply"
                />
                <span className="font-semibold text-primary">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Franchise Opportunity */}
      {/* <section className="py-24 bg-background">
        <div className="container px-4">
          <Card className="bg-primary overflow-hidden rounded-[3rem] border-none shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                  Rabbi Global Academy Franchise Opportunity
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Join our growing network of 40+ successful centers across India. Benefit from our proven curriculum, comprehensive training systems, strong brand presence, and continuous operational support to build a profitable educational enterprise.
                </p>
                <Link to="/franchises" className="inline-flex items-center text-secondary font-bold text-lg hover:text-white transition-colors w-fit">
                  Become a Partner <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="bg-white/5 relative min-h-[300px]">
                <img src="/images/franchise-handshake.png" alt="Franchise growth" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </Card>
        </div>
      </section> */}

      {/* 14. FAQ */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 relative inline-block">
              Common Questions from Parents
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-secondary rounded-full" />
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "What age is best to start the Abacus program?",
                a: "The ideal age to begin abacus learning is between 4 and 7 years old, which is covered by our Foundation level. During these formative years, the brain rapidly develops neural pathways, making it the perfect time to introduce visual and motor-skill based learning.",
              },
              {
                q: "How long is each level and the full program?",
                a: "Our structured program consists of 8 levels. Each level is designed to take exactly 12 weeks to complete, with 2 hours of class time per week. The entire journey typically spans about 2 to 2.5 years.",
              },
              {
                q: "Are classes online, offline, or both?",
                a: "We offer a hybrid delivery model. You can choose to enroll your child in traditional classroom sessions at any of our 40+ centers, or opt for interactive online classes, both maintaining the same high standards and curriculum.",
              },
              {
                q: "How is Rabbi Global Academy different from other abacus institutes?",
                a: "With 17+ years of excellence, our curriculum goes beyond rote learning. We focus on whole-brain development integrating activities like Image Flash, speed writing, and listening exercises, maintaining a strict 1:15 teacher-to-student ratio.",
              },
              {
                q: "Will my child receive certificates?",
                a: "Yes, students are awarded level-wise certificates upon successfully passing the assessment at the end of each 12-week level. These certificates are globally recognized and can be verified online.",
              },
              {
                q: "What is the teacher-to-student ratio?",
                a: "We maintain a strict teacher-to-student ratio of 1:15 in all our classes. This ensures that every child receives personalized attention, guidance, and support from our certified trainers.",
              },
              {
                q: "Do you offer franchise opportunities?",
                a: "Yes! We are actively expanding across India and beyond. We offer a comprehensive franchise model with training, curriculum access, and operational support. Visit our 'Our Franchises' page to learn more.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white px-6 rounded-2xl mb-4 border border-border shadow-sm"
              >
                <AccordionTrigger className="text-left font-bold text-primary text-lg hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 15. Final CTA Banner */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container relative z-10 px-4 text-center">
          <img
            src="/images/rabbi-logo.jpeg"
            alt="Logo"
            className="w-16 h-16 rounded-full mx-auto mb-8 border-2 border-secondary shadow-lg"
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-10 max-w-4xl mx-auto leading-tight">
            Give Your Child the Lifelong Gift of{" "}
            <span className="text-secondary italic">Mental Mastery</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-10 text-lg rounded-full font-semibold shadow-xl w-full sm:w-auto">
              Enroll Your Child
            </Button>
            <Button
              variant="outline"
              className="h-14 px-10 text-lg rounded-full font-semibold border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
            >
              Find Your Nearest Center
            </Button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
