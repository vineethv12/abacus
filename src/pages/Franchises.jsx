import { Link } from "react-router-dom";
import { AppLayout } from "@/components/shared/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ShieldCheck, BookOpen, TrendingUp, Users, Search, MapPin, Phone,
  Sparkles, BadgeCheck, ArrowRight, Star, Handshake, Rocket, FileSignature, PartyPopper
} from "lucide-react";

const centers = [
  { city: "Bengaluru",  area: "Jayanagar",       name: "RGA Main Center",          phone: "+91 98450 11111", head: "Mrs. Ananya S" },
  { city: "Bengaluru",  area: "Whitefield",       name: "RGA Whitefield",           phone: "+91 98450 22222", head: "Mr. Rajesh K" },
  // { city: "Bengaluru",  area: "Yelahanka",        name: "RGA Yelahanka Excellence", phone: "+91 98450 33333", head: "Mrs. Sunita R" },
  // { city: "Mysuru",     area: "Saraswathipuram",  name: "RGA Mysuru South",         phone: "+91 98450 44444", head: "Mr. Karthik N" },
  // { city: "Mysuru",     area: "Vijayanagar",      name: "RGA Academy Mysuru",       phone: "+91 98450 55555", head: "Mrs. Meera P" },
  // { city: "Mangaluru",  area: "Kadioor",          name: "RGA Coastal Mangaluru",    phone: "+91 98450 66666", head: "Mr. D'Souza" },
  // { city: "Hubballi",   area: "Vidya Nagar",      name: "RGA Hubli Center",         phone: "+91 98450 77777", head: "Mrs. Patil" },
  // { city: "Belagavi",   area: "Tilakwadi",        name: "RGA Belgaum",              phone: "+91 98450 88888", head: "Mr. Kulkarni" },
  // { city: "Tumakuru",   area: "Siddaganga Ext",   name: "RGA Tumkur Heights",       phone: "+91 98450 99999", head: "Mrs. Gowda" },
];

const reasons = [
  { icon: BookOpen,   bg: "bg-sky-100",    iconColor: "text-sky-700",    title: "Proven Curriculum",     desc: "17+ years of refined, result-oriented syllabus that parents across Karnataka trust." },
  { icon: Users,      bg: "bg-emerald-100",iconColor: "text-emerald-700", title: "Extensive Training",    desc: "Complete teacher training, admin support, and a dedicated academic coordinator for your center." },
  { icon: ShieldCheck,bg: "bg-violet-100", iconColor: "text-violet-700", title: "Brand Strength",        desc: "Leverage an established brand with a network of 40+ successful centers and ISO certification." },
  { icon: TrendingUp, bg: "bg-amber-100",  iconColor: "text-amber-700",  title: "High ROI",              desc: "A low-risk model designed for quick breakeven, stable recurring revenue, and sustainable growth." },
];

const steps = [
  { step: 1, icon: Handshake,      title: "Inquire",  desc: "Submit the franchise inquiry form with your details." },
  { step: 2, icon: Users,          title: "Meet",     desc: "Discussion and Q&A with our expansion team." },
  { step: 3, icon: FileSignature,  title: "Sign",     desc: "Finalise location, territory, and agreement." },
  { step: 4, icon: PartyPopper,    title: "Launch",   desc: "Training, marketing support, and grand inauguration." },
];

export function Franchises() {
  return (
    <AppLayout>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, #142d50 0%, #0f2745 55%, #173861 100%)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="absolute -left-16 top-10 w-72 h-72 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-sky-300/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-background">
            <path d="M0,80 C300,0 900,80 1200,0 L1200,80 Z" />
          </svg>
        </div>

        <div className="container px-4 relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left — text content, padded top/bottom */}
            <div className="py-12 sm:py-16 lg:py-20">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-secondary text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-5">
                <Rocket className="h-3.5 w-3.5" /> Franchise Opportunity
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-5 leading-tight">
                Build a Legacy<br />
                <span className="text-secondary">in Education</span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg mb-7">
                Partner with Rabbi Global Academy to start a profitable, respected, and impact-driven education business in your city with our proven franchise model.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {["Low Investment", "High ROI", "40+ Centers", "Full Training", "ISO Certified"].map(f => (
                  <div key={f} className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-white text-xs font-medium backdrop-blur-sm">
                    <BadgeCheck className="h-3.5 w-3.5 text-secondary" /> {f}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 h-12 text-base font-semibold shadow-xl shadow-secondary/20 w-full sm:w-auto">
                  Apply for Franchise <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 text-white shadow-xl">
                  <Star className="h-5 w-5 text-secondary flex-shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Join Our Network</p>
                    <p className="text-sm font-semibold">40+ Centers Across Karnataka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — illustration, transparent top clipped */}
            <div className="relative hidden lg:flex items-end justify-center overflow-hidden" style={{ height: "520px" }}>
              {/* Radial glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(201,162,75,0.22) 0%, rgba(100,160,255,0.10) 50%, transparent 72%)" }} />
              {/* Decorative floaters */}
              <div className="absolute top-8 right-4 text-secondary/35 text-4xl font-black select-none animate-float">✦</div>
              <div className="absolute top-16 left-6 text-white/15 text-3xl font-black select-none animate-float-delayed">🎓</div>
              <div className="absolute bottom-32 right-2 text-sky-300/25 text-3xl font-black select-none animate-float-slow">✦</div>
              <div className="absolute bottom-20 left-4 text-secondary/20 text-2xl font-black select-none animate-float">★</div>
              {/* Illustration — 3:4 portrait, fills full container height */}
              <img
                src="/images/franchise-hero-new.png"
                alt="Franchise partnership illustration"
                className="relative z-10 h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_24px_70px_rgba(0,0,0,0.45)]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Partner ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #fffdf8 0%, #f7f8ff 100%)" }}
      >
        <div className="pointer-events-none absolute -right-12 top-0 w-80 h-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #c4b5fd, transparent 70%)" }} />
        <div className="pointer-events-none absolute -left-10 bottom-0 w-72 h-72 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #6ee7b7, transparent 70%)" }} />

        <div className="container px-4 max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2.5 text-amber-700 text-xs font-bold uppercase tracking-[0.3em] shadow-sm mb-5">
              <Sparkles className="h-3.5 w-3.5 text-secondary" /> Why Partner With Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 leading-tight">
              Everything You Need to<br />
              <span className="text-secondary">Succeed from Day One</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We provide not just a curriculum but a complete business system — training, marketing, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {reasons.map((r) => (
              <div key={r.title} className="group relative rounded-[2rem] border border-border/60 bg-white p-7 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-14 h-14 rounded-2xl ${r.bg} flex items-center justify-center mb-5`}>
                  <r.icon className={`h-7 w-7 ${r.iconColor}`} />
                </div>
                <h3 className={`font-serif font-bold text-xl ${r.iconColor} mb-2`}>{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                <div className={`mt-5 h-1 w-10 rounded-full ${r.bg}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inquiry Form + Steps ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f0f4ff 0%, #fff8f0 100%)" }}
      >
        <div className="container px-4 max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-12 items-start">
            {/* Steps */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-violet-200 rounded-full px-5 py-2.5 text-violet-600 text-xs font-bold uppercase tracking-[0.3em] shadow-sm mb-6">
                <Rocket className="h-3.5 w-3.5 text-secondary" /> How It Works
              </div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-3 leading-tight">
                Four Steps to<br /><span className="text-secondary">Launch Your Center</span>
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">From first inquiry to grand opening, our team guides you every step of the way.</p>

              <div className="space-y-5">
                {steps.map((s, idx) => (
                  <div key={s.step} className="flex items-start gap-5 group">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                        <s.icon className="h-6 w-6 text-secondary" />
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="absolute left-1/2 top-14 bottom-0 w-0.5 h-5 bg-border -translate-x-1/2 mt-0.5" />
                      )}
                    </div>
                    <div className="pt-1">
                      <div className="text-[11px] font-black text-secondary uppercase tracking-widest mb-0.5">Step {s.step}</div>
                      <h4 className="font-serif font-bold text-xl text-primary mb-1">{s.title}</h4>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="rounded-[2rem] border border-border/60 bg-white shadow-xl overflow-hidden">
              <div className="bg-primary px-8 py-6">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-secondary text-xs font-semibold mb-3">
                  <Handshake className="h-3.5 w-3.5" /> Franchise Inquiry
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Apply for Franchise</h3>
                <p className="text-white/70 text-sm mt-1">We'll get back to you within 24 hours.</p>
              </div>
              <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="fname">Full Name</Label>
                  <Input id="fname" className="h-11 bg-muted/40" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fphone">Phone Number</Label>
                  <Input id="fphone" className="h-11 bg-muted/40" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fcity">Target City / Area</Label>
                  <Input id="fcity" className="h-11 bg-muted/40" placeholder="Where do you want to open?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="finvestment">Investment Capacity</Label>
                  <Select>
                    <SelectTrigger className="h-11 bg-muted/40">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-5">₹2 Lakhs – ₹5 Lakhs</SelectItem>
                      <SelectItem value="5-10">₹5 Lakhs – ₹10 Lakhs</SelectItem>
                      <SelectItem value="10+">Above ₹10 Lakhs</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-semibold rounded-xl text-base mt-2">
                  Submit Inquiry <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Centers Directory ── */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #fde68a, transparent 70%)" }} />
        <div className="container px-4 max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-full px-5 py-2.5 text-sky-700 text-xs font-bold uppercase tracking-[0.3em] shadow-sm mb-5">
              <MapPin className="h-3.5 w-3.5 text-secondary" /> Our Network
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-3">Our Existing Centers</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Find a Rabbi Global Academy near you in Karnataka.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search city or area..." className="pl-10 bg-white h-11" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[160px] bg-white h-11">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                <SelectItem value="bengaluru">Bengaluru</SelectItem>
                <SelectItem value="mysuru">Mysuru</SelectItem>
                <SelectItem value="mangaluru">Mangaluru</SelectItem>
                <SelectItem value="hubballi">Hubballi</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centers.map((center, i) => (
              <div key={i} className="group rounded-[1.75rem] border border-border/60 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif font-bold text-lg text-primary leading-tight">{center.name}</h3>
                    <span className="text-xs font-semibold bg-secondary/10 text-secondary px-3 py-1 rounded-full flex-shrink-0 ml-2">
                      {center.city}
                    </span>
                  </div>
                  <div className="space-y-2.5 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{center.area}, {center.city}, Karnataka</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary shrink-0" />
                      <span>{center.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2.5 mt-2 border-t border-border/50">
                      <Users className="h-4 w-4 text-secondary shrink-0" />
                      <span>Head: <strong className="text-primary font-semibold">{center.head}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="rounded-full px-8 h-12 font-semibold">
              Load More Centers <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #142d50 0%, #0f2745 55%, #173861 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute -left-16 top-0 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="container px-4 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 text-secondary text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-6">
            <PartyPopper className="h-3.5 w-3.5" /> Start Your Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
            Ready to Own a<br />
            <span className="text-secondary">Rabbi Global Academy?</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Join 40+ franchise partners who are running successful, impact-driven education centers across Karnataka.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/franchises#inquiry" className="w-full sm:w-auto">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 h-12 text-base font-semibold shadow-xl shadow-secondary/20 w-full">
                Apply for Franchise <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12 text-base w-full">
                Contact Us First
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
