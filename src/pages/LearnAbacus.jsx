import { Link } from "react-router-dom";
import { AppLayout } from "@/components/shared/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, BarChart, Youtube, Sparkles, Star, ArrowRight, BookOpen, Brain, Zap, GraduationCap } from "lucide-react";

const categories = ["All", "Beginner", "Intermediate", "Advanced", "Vedic Math", "Tips & Tricks"];

const videos = [
  { title: "Introduction to Abacus Beads",         instructor: "Master Rajesh K.",  duration: "12:45", level: "Beginner",     views: "8,342",  color: "from-sky-500 to-blue-600" },
  { title: "Mental Addition Tricks",                instructor: "Mrs. Sunita R.",    duration: "09:30", level: "Intermediate", views: "5,218",  color: "from-emerald-500 to-teal-600" },
  { title: "Advanced Multiplication Mastery",       instructor: "Master Rajesh K.",  duration: "18:00", level: "Advanced",     views: "3,764",  color: "from-violet-500 to-purple-700" },
  { title: "Speed Writing — Level 2 Walkthrough",  instructor: "Mrs. Ananya S.",    duration: "14:20", level: "Beginner",     views: "6,901",  color: "from-amber-500 to-orange-600" },
  { title: "Vedic Math Shortcut: 11× Rule",        instructor: "Mr. Karthik N.",   duration: "07:55", level: "Vedic Math",   views: "11,430", color: "from-rose-500 to-pink-600" },
  { title: "Concentration Exercises for Kids",     instructor: "Mrs. Sunita R.",    duration: "11:10", level: "Tips & Tricks", views: "9,105", color: "from-lime-500 to-green-600" },
  { title: "Listening Skill Practice — Session 1", instructor: "Master Rajesh K.",  duration: "16:40", level: "Intermediate", views: "4,588",  color: "from-cyan-500 to-sky-600" },
  { title: "Visualization Techniques Deep Dive",   instructor: "Mrs. Ananya S.",    duration: "20:15", level: "Advanced",     views: "2,977",  color: "from-fuchsia-500 to-purple-600" },
  { title: "Abacus vs Calculator: Why Abacus Wins",instructor: "Mr. Karthik N.",   duration: "08:05", level: "Beginner",     views: "14,250", color: "from-orange-500 to-red-500" },
];

const levelBadgeColor = {
  "Beginner":     "bg-sky-100 text-sky-700",
  "Intermediate": "bg-amber-100 text-amber-700",
  "Advanced":     "bg-violet-100 text-violet-700",
  "Vedic Math":   "bg-rose-100 text-rose-700",
  "Tips & Tricks":"bg-lime-100 text-lime-700",
};

const featured = [
  { icon: BookOpen, label: "Abacus fundamentals" },
  { icon: Brain,    label: "Mental arithmetic shortcuts" },
  { icon: Zap,      label: "Speed-building practice" },
  { icon: GraduationCap, label: "Expert-led lessons" },
];

export function LearnAbacus() {
  return (
    <AppLayout>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, #142d50 0%, #0f2745 55%, #173861 100%)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_40%)]" />
        <div className="absolute -left-12 top-10 w-72 h-72 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-sky-300/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-background">
            <path d="M0,80 C300,0 900,80 1200,0 L1200,80 Z" />
          </svg>
        </div>

        <div className="container px-4 relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left — text */}
            <div className="py-12 sm:py-16 lg:py-20">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 text-secondary text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-sm mb-6">
                <Sparkles className="h-3.5 w-3.5" /> Video Learning Hub
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-5 leading-tight">
                Learn Abacus from<br />
                <span className="text-secondary">the Masters</span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg mb-7">
                Free tutorials, tips, and techniques directly from our expert instructors — from bead basics to competition-level mental math.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {featured.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5 bg-white/10 border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-sm">
                    <f.icon className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-white/90">{f.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 text-white shadow-xl w-fit">
                <Star className="h-5 w-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Featured Masterclass</p>
                  <p className="text-sm font-semibold">10× Faster Mental Calculation</p>
                </div>
              </div>
            </div>

            {/* Right — illustration */}
            <div className="relative hidden lg:flex items-end justify-center overflow-hidden" style={{ height: "520px" }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[440px] h-[440px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(201,162,75,0.18) 0%, rgba(100,160,255,0.08) 50%, transparent 72%)" }} />
              <div className="absolute top-8 right-6 text-secondary/35 text-4xl font-black select-none animate-float">×</div>
              <div className="absolute top-20 left-4 text-white/15 text-3xl font-black select-none animate-float-delayed">+</div>
              <div className="absolute bottom-48 right-4 text-sky-300/25 text-2xl font-black select-none animate-float-slow">✦</div>
              <div className="absolute bottom-36 left-8 text-secondary/25 text-xl font-black select-none animate-float">★</div>
              <img
                src="/images/learn-abacus-cartoon.png"
                alt="Abacus master teacher illustration"
                className="relative z-10 h-full w-full object-contain object-center drop-shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Video Library ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #fffdf8 0%, #f7f8ff 100%)" }}
      >
        <div className="absolute -right-20 top-0 w-80 h-80 rounded-full bg-amber-200/25 blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-72 h-72 rounded-full bg-sky-200/25 blur-3xl pointer-events-none" />

        <div className="container px-4 max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2.5 text-amber-700 text-xs font-bold uppercase tracking-[0.3em] shadow-sm mb-5">
              <PlayCircle className="h-3.5 w-3.5" /> Featured Lessons
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 leading-tight">
              Watch, Practice, <span className="text-secondary">Improve</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Browse bite-sized lessons for every level, from beginner bead handling to advanced mental math competition prep.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat, i) => (
              <Button
                key={cat}
                variant={i === 0 ? "default" : "outline"}
                className={i === 0
                  ? "bg-primary text-white rounded-full px-5 h-9 text-sm"
                  : "rounded-full bg-white px-5 h-9 text-sm hover:bg-primary hover:text-white transition-colors"
                }
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {videos.map((vid, i) => (
              <div key={i} className="group rounded-[1.75rem] border border-border/60 bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
                {/* Thumbnail */}
                <div className={`aspect-video relative bg-gradient-to-br ${vid.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-lg font-medium z-10 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {vid.duration}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${levelBadgeColor[vid.level] ?? "bg-muted text-muted-foreground"}`}>
                      {vid.level}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><BarChart className="w-3 h-3" /> {vid.views}</span>
                  </div>
                  <h4 className="font-bold text-primary mb-1.5 line-clamp-2 leading-snug group-hover:text-secondary transition-colors duration-200">{vid.title}</h4>
                  <p className="text-xs text-muted-foreground font-medium">{vid.instructor}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button variant="outline" className="rounded-full px-8 h-12 font-semibold hover:bg-primary hover:text-white transition-colors">
              Load More Lessons <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── YouTube CTA ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #142d50 0%, #0f2745 55%, #173861 100%)" }}
      >
        <div className="absolute -left-16 top-0 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-red-500/10 blur-3xl" />
        <div className="container px-4 relative z-10 text-center max-w-4xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-400/20 rounded-full px-5 py-2 text-red-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-6">
            <Youtube className="w-4 h-4" /> YouTube Channel
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-5 leading-tight">
            Never Miss a<br />
            <span className="text-secondary">Lesson</span>
          </h2>
          <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our official YouTube channel for weekly tips, student showcases, competition highlights, and full-length tutorial series.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://www.youtube.com/@rabbiglobalacademy" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 h-12 font-bold shadow-xl shadow-red-600/25 text-base w-full">
                <Youtube className="w-5 h-5 mr-2" /> Subscribe on YouTube
              </Button>
            </a>
            <Link to="/courses" className="w-full sm:w-auto">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 h-12 font-semibold w-full">
                View All Courses <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
