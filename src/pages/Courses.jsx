import { useState } from "react";
import { AppLayout } from "@/components/shared/AppLayout";
import { Button } from "@/components/ui/button";
import {
  BookOpen, BrainCircuit, GraduationCap, Users, Clock, ArrowRight,
  Star, Zap, Target, Ear, Layers, Award, Trophy, Rocket, Wind,
  ChevronRight, Sparkles, Heart, Baby, Eye,
  Calculator, FlipHorizontal, Binary, Fingerprint, Lightbulb, Flame,
  Plane, Bike, CarFront, BadgeCheck, PartyPopper
} from "lucide-react";

const CATEGORIES = ["All Programs", "Abacus Levels", "Skill Programs", "Learning Tools", "Special Programs"];

const journeyCards = [
  {
    key: "pre",
    title: "Pre",
    age: "3–5 Years",
    image: "/images/journey/pre-nobg.png",
    bg: "bg-violet-100",
    accent: "bg-violet-500",
    accentText: "text-violet-600",
    icon: Heart,
    description: "Introduces the very youngest learners to numbers through play, building curiosity and a love of learning before formal schooling begins.",
  },
  {
    key: "starters",
    title: "Starters",
    age: "5–6 Years",
    image: "/images/journey/starters-nobg.png",
    bg: "bg-yellow-100",
    accent: "bg-yellow-500",
    accentText: "text-yellow-700",
    icon: Lightbulb,
    description: "Foundation of the graded program. Children learn correct posture, bead identity, and sitting focus through joyful play-way exercises.",
  },
  {
    key: "movers",
    title: "Movers",
    age: "6–7 Years",
    image: "/images/journey/movers-nobg.png",
    bg: "bg-emerald-100",
    accent: "bg-emerald-500",
    accentText: "text-emerald-700",
    icon: Rocket,
    description: "Speed writing begins and visualization is activated. Children start encoding numbers as vivid mental images, engaging the right brain.",
  },
  {
    key: "riders",
    title: "Riders",
    age: "7–8 Years",
    image: "/images/journey/riders-nobg.png",
    bg: "bg-rose-100",
    accent: "bg-rose-500",
    accentText: "text-rose-700",
    icon: Bike,
    description: "Listening-based calculations sharpen auditory skills. Multi-digit problems are tackled with growing confidence and expanded visualization.",
  },
  {
    key: "racers",
    title: "Racers",
    age: "8–9 Years",
    image: "/images/journey/racers-nobg.png",
    bg: "bg-sky-100",
    accent: "bg-sky-500",
    accentText: "text-sky-700",
    icon: CarFront,
    description: "Fingering speed translates directly into faster mental calculations. Concentration strengthens appreciably and visualization range expands.",
  },
  {
    key: "flyers",
    title: "Flyers",
    age: "9–10 Years",
    image: "/images/journey/flyers-nobg.png",
    bg: "bg-orange-100",
    accent: "bg-orange-500",
    accentText: "text-orange-700",
    icon: Plane,
    description: "Multiplication joins addition and subtraction. The mental image bank grows rapidly, enabling competition-level accuracy and speed.",
  },
  {
    key: "endeavours",
    title: "Endeavours",
    age: "10–11 Years",
    image: "/images/journey/endeavours-nobg.png",
    bg: "bg-teal-100",
    accent: "bg-teal-600",
    accentText: "text-teal-700",
    icon: Flame,
    description: "Division is mastered and complex calculations deepen memory skills. Students develop near-pure mental arithmetic with pre-competition training.",
  },
  {
    key: "achievers",
    title: "Achievers / Stars",
    age: "12–14 Years",
    image: "/images/journey/achievers-card-transparent.png",
    bg: "bg-purple-100",
    accent: "bg-purple-600",
    accentText: "text-purple-700",
    icon: BadgeCheck,
    description: "The pinnacle of the program. Decimal mastery, peak speed, and Concentration, Visualization & Listening skills become lifelong abilities.",
  }
];

const programs = [
  /* ─── ABACUS LEVELS ─────────────────────────────────── */
  {
    id: "lkg-ukg",
    category: "Abacus Levels",
    badge: "Pre-Primary",
    badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
    accentColor: "from-pink-400 to-rose-500",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    level: "Pre",
    icon: Baby,
    title: "LKG & UKG",
    subtitle: "Abacus for Play Schools",
    age: "3–5 Years",
    duration: "2 Years (LKG + UKG)",
    sessions: "Class-room based",
    description: "A specially designed abacus program for play schools covering LKG and UKG. Introduces the very youngest learners to number structure, slider manipulation, basic addition and subtraction — building a strong math foundation before formal schooling.",
    highlights: [
      "Understanding the structure of the abacus",
      "Place value of the number system",
      "Manipulation of Slider Abacus",
      "Learning number structure through Abacus",
      "Introduction to basic addition",
      "Introduction to basic subtraction",
      "Improves Visualization, Concentration, Memory & Listening Skills"
    ],
    skills: ["Number Sense", "Slider Abacus", "Addition", "Subtraction"]
  },
  {
    id: "beginners",
    category: "Abacus Levels",
    badge: "Beginner",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    accentColor: "from-orange-400 to-amber-500",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    level: "B",
    icon: BookOpen,
    title: "Beginners",
    subtitle: "First Steps into Abacus",
    age: "5–6 Years",
    duration: "3 Months",
    sessions: "2 per week",
    description: "The ideal starting point for children beginning their abacus journey. Students learn the fundamentals of the abacus tool — bead identity, column placement, basic finger technique — and develop the discipline and sitting practice essential for all future levels.",
    highlights: [
      "Introduction to the abacus and its construction",
      "Bead identification — Upper bead (5) and Lower bead (1)",
      "Column values — ones, tens, hundreds",
      "Correct finger technique for bead movement",
      "Single-digit addition and subtraction on abacus",
      "Sitting posture, discipline, and focus training",
      "Play-way activities to create genuine interest"
    ],
    skills: ["Bead ID", "Finger Technique", "Column Values", "Discipline"]
  },
  {
    id: "starters",
    category: "Abacus Levels",
    badge: "Level 1",
    badgeColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
    accentColor: "from-yellow-400 to-lime-500",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-700",
    level: "1",
    icon: Layers,
    title: "Starters",
    subtitle: "Foundation of Abacus Skill",
    age: "5–7 Years",
    duration: "3 Months",
    sessions: "2 per week",
    description: "The entry point of the graded Indian Abacus program. Children learn correct body posture and how to hold the abacus and pencil properly. Play-way learning creates genuine interest and trains children to sit focused from day one.",
    highlights: [
      "Correct sitting posture — discipline inculcated",
      "Palms on table, Holding of Abacus & Pencil — prerequisites to skill-learning",
      "Introduced to play-way learning that creates genuine interest",
      "Children trained to sit focused for extended periods",
      "Basic bead value recognition on all columns",
      "Simple single-row addition using abacus",
      "Foundation exercises for concentration skills"
    ],
    skills: ["Discipline", "Focus", "Bead Basics", "Concentration"]
  },
  {
    id: "movers",
    category: "Abacus Levels",
    badge: "Level 2",
    badgeColor: "bg-lime-100 text-lime-700 border-lime-200",
    accentColor: "from-lime-400 to-green-500",
    iconBg: "bg-lime-50",
    iconColor: "text-lime-700",
    level: "2",
    icon: Fingerprint,
    title: "Movers",
    subtitle: "Speed Writing & Visualization Begins",
    age: "6–7 Years",
    duration: "3 Months",
    sessions: "2 per week",
    description: "Students advance to speed writing while maintaining quality. They start playing with numbers and are introduced to image-based visualization — activating the right hemisphere of the brain and beginning the journey toward mental arithmetic.",
    highlights: [
      "Speed Writing skill introduced — children learn to write fast and maintain quality",
      "Familiarize with numbers and playing with numbers",
      "Numbers related to images — visual memory encoding begins",
      "Introduced to Visualization (skill) — activation of the Right brain",
      "Two-digit addition and subtraction with carry",
      "Multi-row sums introduced",
      "Concentration exercises extended in duration"
    ],
    skills: ["Speed Writing", "Number Play", "Visualization", "Right Brain"]
  },
  {
    id: "riders",
    category: "Abacus Levels",
    badge: "Level 3",
    badgeColor: "bg-teal-100 text-teal-700 border-teal-200",
    accentColor: "from-teal-400 to-cyan-500",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
    level: "3",
    icon: Ear,
    title: "Riders",
    subtitle: "Listening Calculations & Multi-Digit",
    age: "7–8 Years",
    duration: "3 Months",
    sessions: "2 per week",
    description: "Speed writing is strengthened further. Students are introduced to listening-based calculations that sharpen auditory processing and expand the calculation range to multiple digits and rows with more complex image visualizations.",
    highlights: [
      "Speed Writing skill strengthened further",
      "Playing with numbers in varying orders for flexibility",
      "Introduced to Listening-based calculations — improves listening skills",
      "More digits, more rows of numbers — expanded calculation range",
      "More images involved for enhanced visualization",
      "Visualization skill practice taken to next level",
      "Three-digit addition and subtraction"
    ],
    skills: ["Listening", "Multi-digit", "Visualization", "Speed Writing"]
  },
  {
    id: "racers",
    category: "Abacus Levels",
    badge: "Level 4",
    badgeColor: "bg-sky-100 text-sky-700 border-sky-200",
    accentColor: "from-sky-400 to-blue-500",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-700",
    level: "4",
    icon: Zap,
    title: "Racers",
    subtitle: "Concentration & Fingering Speed",
    age: "8–9 Years",
    duration: "3 Months",
    sessions: "2 per week",
    description: "Concentration skills strengthen appreciably at this stage. Increased fingering exercise speed directly translates to faster mental calculation, and visualization range expands significantly — students begin to handle more complex problem sets with confidence.",
    highlights: [
      "Concentration skills strengthen appreciably at this level",
      "Increased speed in Fingering Exercise",
      "Fingering speed results directly in calculation speed increase",
      "Visualization skills stretch further",
      "Visualization range increases significantly",
      "Complex multi-row, multi-digit mental sums",
      "Addition and subtraction with higher digit counts"
    ],
    skills: ["Concentration", "Fingering Speed", "Mental Math", "Extended Range"]
  },
  {
    id: "flyers",
    category: "Abacus Levels",
    badge: "Level 5",
    badgeColor: "bg-violet-100 text-violet-700 border-violet-200",
    accentColor: "from-violet-400 to-purple-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-700",
    level: "5",
    icon: Wind,
    title: "Flyers",
    subtitle: "Multiplication & Image Bank Growth",
    age: "9–10 Years",
    duration: "3 Months",
    sessions: "2 per week",
    description: "Students transition into multiplication alongside continued addition and subtraction of larger numbers. The visualization image bank grows rapidly, enabling faster mental recall and more accurate calculations with improved brain hemisphere synchronization.",
    highlights: [
      "Multiplication introduced and practised with abacus",
      "Subtraction and addition of larger multi-digit numbers",
      "Image bank grows — mental recall becomes faster",
      "Brain hemisphere synchronization deepens",
      "Increased listening sum complexity and speed",
      "Speed benchmarks assessed and targeted",
      "Competition-level problem exposure begins"
    ],
    skills: ["Multiplication", "Image Bank", "Brain Sync", "Speed Benchmarks"]
  },
  {
    id: "endeavours",
    category: "Abacus Levels",
    badge: "Level 6",
    badgeColor: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
    accentColor: "from-fuchsia-400 to-pink-500",
    iconBg: "bg-fuchsia-50",
    iconColor: "text-fuchsia-700",
    level: "6",
    icon: Target,
    title: "Endeavours",
    subtitle: "Complex Calculations & Memory Mastery",
    age: "10–11 Years",
    duration: "3 Months",
    sessions: "2 per week",
    description: "More complicated calculations strengthen better concentration skills for faster and more accurate image manipulations. Memory skills strengthen further at this level, forming the foundation for the advanced stages that follow.",
    highlights: [
      "More complicated calculations — new challenges in concentration",
      "Practice strengthens concentration for faster, accurate image manipulation",
      "Memory skills strengthen further at this stage",
      "Division of numbers introduced",
      "Mental arithmetic transitions toward pure mind calculation",
      "Listening-based sums of greater complexity",
      "Pre-competition training and speed standards"
    ],
    skills: ["Complex Calculations", "Memory", "Division", "Image Accuracy"]
  },
  {
    id: "achievers",
    category: "Abacus Levels",
    badge: "Level 7",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
    accentColor: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    level: "7",
    icon: Award,
    title: "Achievers",
    subtitle: "Decimal Sums & Peak Listening",
    age: "11–12 Years",
    duration: "3 Months",
    sessions: "2 per week",
    description: "Decimal sum calculations introduce new challenges to concentration and speed. Intensive practice at this level simultaneously strengthens both concentration and speed, while listening-based calculations reinforce auditory processing skills to peak performance.",
    highlights: [
      "Decimal sum calculations bring new challenges to concentration and speed",
      "Practice in the level strengthens both concentration and speed",
      "Listening-based calculations strengthen Listening skills",
      "Visualization accuracy at all-time high",
      "National-level competition preparation",
      "Cross-verification and checking techniques introduced",
      "Eligible for Global Grading Examination"
    ],
    skills: ["Decimals", "Peak Listening", "Competition Ready", "Accuracy"]
  },
  {
    id: "stars",
    category: "Abacus Levels",
    badge: "Level 8 — Master",
    badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-300",
    accentColor: "from-yellow-400 to-amber-500",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-700",
    level: "8",
    icon: Star,
    title: "Stars",
    subtitle: "Mastery — Lifelong Mental Skills",
    age: "12–14 Years",
    duration: "3 Months",
    sessions: "2 per week",
    description: "The pinnacle of the abacus program. Speed in writing and mental calculations reaches its peak. Division sums bring fresh challenges, and the student emerges with Concentration, Visualization, and Listening skills that are made into lifelong abilities.",
    highlights: [
      "Speed in writing and speed in calculations reach a peak",
      "Division sums bring in new challenges and are mastered",
      "Over all Concentration, Visualization and Listening skills strengthen further",
      "Students become highly skilled — skills could be practised and made Life time skills",
      "Eligible for Global Grading Examination (GGE)",
      "Level Completion Certificate and Master Certificate awarded",
      "National competition and world record eligibility"
    ],
    skills: ["Mastery", "Lifetime Skills", "GGE Eligible", "Peak Speed"]
  },

  /* ─── SKILL PROGRAMS ────────────────────────────────── */
  {
    id: "mathskills",
    category: "Skill Programs",
    badge: "Skill Program",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    accentColor: "from-indigo-500 to-blue-600",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    level: null,
    icon: Calculator,
    title: "Math Skills",
    subtitle: "Speed Mathematics & Brain Training",
    age: "6–14 Years",
    duration: "Ongoing",
    sessions: "Flexible",
    description: "A dedicated speed-mathematics and brain-training program. According to science, the human brain functions best through mathematical stimulation. This program uses numbers, shapes, logic, quantity, and arrangements to enhance IQ and cognitive development from an early age.",
    highlights: [
      "Speed mathematics training — maths sums at high pace",
      "Listening skills integrated into every math session",
      "Brain function enhancement through number science",
      "Logic, shapes, quantity, and spatial arrangements",
      "Elevates baby's IQ and enhances cognitive development",
      "Math is the study of numbers and their real-world relationships",
      "Olympiad and competitive exam readiness"
    ],
    skills: ["Speed Math", "Listening", "Logic & IQ", "Olympiad Prep"]
  },

  /* ─── LEARNING TOOLS ────────────────────────────────── */
  {
    id: "identify-bead",
    category: "Learning Tools",
    badge: "Interactive Tool",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    accentColor: "from-emerald-400 to-teal-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    level: null,
    icon: Eye,
    title: "Identify Bead Values",
    subtitle: "Flash Card — Bead & Number Recognition",
    age: "All Levels",
    duration: "Practice Tool",
    sessions: "Self-paced",
    description: "An interactive flash card training module that tests and builds a student's ability to instantly identify bead positions and their corresponding numerical values. Covers both directions — Bead to Number and Number to Bead — for complete fluency.",
    highlights: [
      "Identify the Bead value and enter the correct numbers",
      "Image Flash cards — rapid visual recognition",
      "Multi-digit bead configurations (2-digit, 4-digit, and more)",
      "Dual-mode practice: Bead to Number & Number to Bead",
      "Timed exercises to build speed and accuracy",
      "Tracks progress and improvement over sessions",
      "Suitable for all levels from Starters to Stars"
    ],
    skills: ["Bead Recognition", "Visual Speed", "Accuracy", "Dual Mode"]
  },
  {
    id: "flash-bead-number",
    category: "Learning Tools",
    badge: "Flash Card",
    badgeColor: "bg-cyan-100 text-cyan-700 border-cyan-200",
    accentColor: "from-cyan-400 to-sky-500",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    level: null,
    icon: Binary,
    title: "Flash Cards (Bead to Numbers)",
    subtitle: "Identify the Bead Value",
    age: "All Levels",
    duration: "Practice Tool",
    sessions: "Self-paced",
    description: "A focused flash card exercise where students are shown abacus bead configurations and must identify the correct numerical value. Trains the eye and mind to instantly decode bead positions into numbers — a critical mental arithmetic skill.",
    highlights: [
      "Shown an abacus bead image — must identify the number",
      "Multi-column bead configurations across all digit ranges",
      "Timed flash exposure builds instant recognition speed",
      "Builds the bridge between physical beads and mental images",
      "Progresses from single-digit to multi-digit configurations",
      "Core practice for visualization and mental abacus training",
      "Essential for Levels 3–8 speed development"
    ],
    skills: ["Bead → Number", "Visual Recall", "Speed Recognition", "Mental Bridge"]
  },
  {
    id: "flash-number-bead",
    category: "Learning Tools",
    badge: "Flash Card",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    accentColor: "from-blue-400 to-indigo-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    level: null,
    icon: FlipHorizontal,
    title: "Flash Cards (Number to Bead)",
    subtitle: "Identify the Flash Card Value",
    age: "All Levels",
    duration: "Practice Tool",
    sessions: "Self-paced",
    description: "The reverse flash card exercise — a number is displayed and students must mentally construct the correct bead configuration on the abacus. Reinforces the mental model of abacus bead placement, strengthening the right brain's visualization ability.",
    highlights: [
      "Shown a number — must identify the correct bead configuration",
      "Reinforces mental construction of abacus bead positions",
      "Strengthens right-brain visualization and spatial reasoning",
      "Single and multi-digit number-to-bead mapping",
      "Timed sessions to build mental encoding speed",
      "Complements Bead-to-Number practice for complete fluency",
      "Directly supports Mind Calculation skill development"
    ],
    skills: ["Number → Bead", "Spatial Reasoning", "Right Brain", "Visualization"]
  },

  /* ─── SPECIAL PROGRAMS ──────────────────────────────── */
  {
    id: "pregnant-mothers",
    category: "Special Programs",
    badge: "Workshop",
    badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
    accentColor: "from-rose-400 to-pink-500",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    level: null,
    icon: Heart,
    title: "Pregnant Mothers",
    subtitle: "Prenatal Cognitive Stimulation Workshop",
    age: "Expecting Mothers",
    duration: "Workshop Series",
    sessions: "Regular workshops",
    description: "A unique workshop program — \"The Genius of Your Child's Development\" — designed for pregnant mothers. Scientific evidence shows that prenatal exposure to mathematical stimulation and structured learning environments positively shapes the cognitive development of the unborn child.",
    highlights: [
      "Prenatal cognitive stimulation for the unborn child",
      "\"The Genius of Your Child's Development\" workshop series",
      "Based on scientific research into prenatal brain development",
      "Number and math exposure during pregnancy",
      "Abacus sounds and rhythm for in-womb stimulation",
      "Guidance on post-birth early learning environment",
      "Empowers mothers with knowledge of child brain development"
    ],
    skills: ["Prenatal Stimulation", "Brain Development", "Early Learning", "Cognitive Boost"]
  },
  {
    id: "more-features",
    category: "Special Programs",
    badge: "Product Features",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    accentColor: "from-slate-500 to-gray-600",
    iconBg: "bg-slate-50",
    iconColor: "text-slate-600",
    level: null,
    icon: Sparkles,
    title: "More Features",
    subtitle: "Salient Features of the Indian Abacus",
    age: "All Programs",
    duration: "Product Feature",
    sessions: "Integrated in all levels",
    description: "The Indian Abacus is engineered with four salient product features that make it vastly superior to conventional abacus tools — enabling stress-free, error-free, and faster learning for every student from Beginner to Master level.",
    highlights: [
      "The Sliders Stay Put — values don't change when abacus is vertical, giving firm, stable, perfect answers",
      "Unhide and Hide the Colour Images — student can show/hide color images, making visualization stronger, faster, stress-free and error-free",
      "Stress Free View — colour and non-colour positions remove confusion; memory registry becomes easier",
      "Zero Value Positions — slider positions show colours that make zero-value positions logically clear and always visible",
      "Superior to conventional abacus in every design dimension",
      "ISO 9001:2015 certified product quality",
      "Patented and trademark-protected innovation"
    ],
    skills: ["Sliders Stay Put", "Colour Images", "Stress-Free", "Zero Value View"]
  }
];

export function Courses() {
  const [activeCategory, setActiveCategory] = useState("All Programs");
  const [expandedCard, setExpandedCard] = useState(null);

  const filtered = activeCategory === "All Programs"
    ? programs
    : programs.filter(p => p.category === activeCategory);

  const abacusLevels = programs.filter(p => p.category === "Abacus Levels");

  const categoryCounts = {
    "All Programs": programs.length,
    "Abacus Levels": programs.filter(p => p.category === "Abacus Levels").length,
    "Skill Programs": programs.filter(p => p.category === "Skill Programs").length,
    "Learning Tools": programs.filter(p => p.category === "Learning Tools").length,
    "Special Programs": programs.filter(p => p.category === "Special Programs").length,
  };

  return (
    <AppLayout>
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #142d50 0%, #0f2745 55%, #173861 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_34%)]" />
        <div className="absolute -left-20 top-8 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-background">
            <path d="M0,80 C300,0 900,80 1200,0 L1200,80 Z" />
          </svg>
        </div>
        <div className="container px-4 pt-14 pb-24 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 text-white/55 text-sm font-medium mb-6">
                <span>Home</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-secondary">Courses Offered</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-secondary text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <Rocket className="h-3.5 w-3.5" /> Rabbi Global Academy
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Academic Programs<br />
                <span className="text-secondary">&amp; Courses</span>
              </h1>
              <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl">
                Every program offered at Rabbi Global Academy — from Prenatal Workshops and Pre-Primary Abacus to 8 graded levels of mastery, interactive learning tools, and skill enhancement courses.
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-10">
                {[
                  { value: "8", label: "Abacus Levels" },
                  { value: "3–14", label: "Age Range" },
                  { value: programs.length + "+", label: "Programs" },
                  { value: "ISO", label: "9001:2015 Certified" },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-serif font-bold text-secondary">{stat.value}</div>
                    <div className="text-white/65 text-sm mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Hero illustration — transparent PNG floating on navy */}
            <div className="relative hidden lg:flex items-center justify-center min-h-[460px]">
              {/* Soft radial glow behind the character */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(201,162,75,0.18) 0%, rgba(100,160,255,0.10) 50%, transparent 72%)" }} />

              {/* Floating decorative numbers */}
              <div className="absolute top-8 left-8 text-secondary/40 text-5xl font-black select-none animate-float">7</div>
              <div className="absolute top-16 right-6 text-white/20 text-4xl font-black select-none animate-float-delayed">×</div>
              <div className="absolute bottom-24 left-4 text-sky-300/30 text-3xl font-black select-none animate-float-slow">9</div>
              <div className="absolute top-32 right-10 text-secondary/30 text-2xl font-black select-none animate-float">✦</div>
              <div className="absolute bottom-16 right-8 text-white/20 text-5xl font-black select-none animate-float-slow">+</div>
              <div className="absolute bottom-8 left-20 text-secondary/25 text-2xl font-black select-none animate-float-delayed">★</div>

              {/* The character — transparent PNG, no box, no border */}
              <img
                src="/images/journey/achievers-nobg.png"
                alt="Champion-level abacus student with trophy"
                className="relative z-10 w-full max-w-[420px] h-[420px] object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              />

              {/* Floating badge — ISO / Achievers */}
              <div className="absolute bottom-10 left-2 z-20 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 text-white shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">ISO Certified</span>
                </div>
                <p className="text-sm font-semibold leading-snug">
                  Achievers · Ages 12–14<br />
                  <span className="text-xs font-normal text-white/70">Abacus Mastery — Champion Level</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Level Journey Roadmap ── */}
      <section
        id="journey"
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #fdf6ff 0%, #fffbf0 40%, #f0fbff 100%)" }}
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #c4b5fd, transparent 70%)" }} />
        <div className="pointer-events-none absolute top-10 right-0 w-64 h-64 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #fde68a, transparent 70%)" }} />
        <div className="pointer-events-none absolute bottom-0 left-1/2 w-96 h-40 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #6ee7b7, transparent 70%)" }} />

        <div className="container px-4 relative z-10">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-violet-200 rounded-full px-5 py-2 text-violet-600 text-xs font-bold uppercase tracking-[0.3em] shadow-sm mb-5">
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
              Abacus Learning Journey
              <Sparkles className="h-3.5 w-3.5 text-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 leading-tight">
              From Tiny Tots to
              <span className="text-secondary"> Champions!</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
              Eight joyful stages of growth — each illustrated as a cheerful cartoon learning adventure your child will love.
            </p>
          </div>

          {/* Journey cards grid — 4 per row on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyCards.map((card, idx) => (
              <div
                key={card.key}
                className="group relative flex flex-col rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-white"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Step badge */}
                <div className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 border-2 border-white shadow-lg flex items-center justify-center">
                  <span className="text-[11px] font-black text-primary">{idx === 0 ? "Pre" : idx}</span>
                </div>

                {/* Illustration area */}
                <div className={`relative ${card.bg} pt-10 px-4 pb-0 flex-shrink-0`}>
                  {/* Age pill */}
                  <div className={`absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 ${card.accent} text-white rounded-full px-3 py-1 text-[11px] font-bold shadow-md`}>
                    <card.icon className="h-3 w-3" />
                    {card.age}
                  </div>
                  {/* Cartoon illustration — transparent PNG floating in pastel */}
                  <img
                    src={card.image}
                    alt={`${card.title} — Abacus level illustration`}
                    className="w-full h-52 object-contain object-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                    loading="lazy"
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 px-5 pt-4 pb-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${card.accent}`} />
                    <h3 className={`text-lg font-serif font-bold leading-tight ${card.accentText}`}>{card.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{card.description}</p>
                  {/* Bottom accent stripe */}
                  <div className={`mt-4 h-1 w-12 rounded-full ${card.accent} opacity-50`} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom legend */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {journeyCards.map((card) => (
              <div key={card.key} className="flex items-center gap-2 bg-white/80 border border-border rounded-full px-4 py-2 shadow-sm">
                <div className={`w-2.5 h-2.5 rounded-full ${card.accent}`} />
                <span className="text-xs font-semibold text-primary">{card.title}</span>
                <span className="text-xs text-muted-foreground">({card.age})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-xl border-b border-border/60 shadow-sm">
        <div className="container px-4">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {[
              { cat: "All Programs",    emoji: "🌟" },
              { cat: "Abacus Levels",   emoji: "🔢" },
              { cat: "Skill Programs",  emoji: "🧠" },
              { cat: "Learning Tools",  emoji: "🃏" },
              { cat: "Special Programs",emoji: "💛" },
            ].map(({ cat, emoji }) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md scale-105"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/60"
                }`}
              >
                <span className="text-base leading-none">{emoji}</span>
                {cat}
                <span className={`ml-0.5 text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                  activeCategory === cat ? "bg-white/25 text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {categoryCounts[cat]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program Cards ── */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #fffdf8 0%, #f8f9ff 100%)" }}
      >
        {/* Soft blobs */}
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #fde68a, transparent 70%)" }} />
        <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #a5f3fc, transparent 70%)" }} />

        <div className="container px-4 relative z-10">
          {/* Section intro */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-amber-200 rounded-full px-5 py-2 text-amber-700 text-xs font-bold uppercase tracking-[0.3em] shadow-sm mb-5">
              <BookOpen className="h-3.5 w-3.5" />
              Our Programs
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-3">
              Every Child, Every Stage,
              <span className="text-secondary"> Every Goal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {activeCategory === "All Programs"
                ? `${programs.length} programs spanning prenatal to mastery — find the perfect fit for your child.`
                : `Showing ${categoryCounts[activeCategory]} programs in the ${activeCategory} category.`}
            </p>
          </div>

          {/* Category groups or flat grid */}
          {activeCategory === "All Programs" ? (
            <div className="space-y-16">
              {[
                { cat: "Abacus Levels",    emoji: "🔢", label: "Abacus Level Programs",      sub: "LKG/UKG through 8 graded levels to mastery",                         pill: "bg-rose-100 text-rose-700 border-rose-200" },
                { cat: "Skill Programs",   emoji: "🧠", label: "Skill Enhancement Programs",  sub: "Targeted skill development beyond the main abacus curriculum",        pill: "bg-indigo-100 text-indigo-700 border-indigo-200" },
                { cat: "Learning Tools",   emoji: "🃏", label: "Interactive Learning Tools",   sub: "Flash card and bead recognition practice modules",                   pill: "bg-teal-100 text-teal-700 border-teal-200" },
                { cat: "Special Programs", emoji: "💛", label: "Special Programs",             sub: "Unique workshops, product features & prenatal programs",              pill: "bg-amber-100 text-amber-700 border-amber-200" },
              ].map(({ cat, emoji, label, sub, pill }) => {
                const catPrograms = programs.filter(p => p.category === cat);
                if (!catPrograms.length) return null;
                return (
                  <div key={cat}>
                    {/* Category divider banner */}
                    <div className="flex items-center gap-4 mb-7">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold shadow-sm ${pill}`}>
                        <span className="text-lg leading-none">{emoji}</span>
                        {label}
                      </div>
                      <span className="flex-1 h-px bg-border/60" />
                      <span className="text-xs text-muted-foreground">{sub}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {catPrograms.map(prog => (
                        <ProgramCard
                          key={prog.id}
                          prog={prog}
                          isExpanded={expandedCard === prog.id}
                          onToggle={() => setExpandedCard(expandedCard === prog.id ? null : prog.id)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(prog => (
                <ProgramCard
                  key={prog.id}
                  prog={prog}
                  isExpanded={expandedCard === prog.id}
                  onToggle={() => setExpandedCard(expandedCard === prog.id ? null : prog.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Four Core Skills ── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #eef6ff 0%, #fdf4ff 45%, #fffbf0 100%)" }}
      >
        {/* Background blobs */}
        <div className="pointer-events-none absolute -right-10 top-0 w-96 h-96 rounded-full opacity-25" style={{ background: "radial-gradient(circle, #c4b5fd, transparent 70%)" }} />
        <div className="pointer-events-none absolute -left-10 bottom-0 w-80 h-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #6ee7b7, transparent 70%)" }} />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #fde68a, transparent 70%)" }} />

        {/* Floating math symbols — decorative */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
          {[
            { sym: "+", top: "8%",  left: "6%",  size: "text-5xl", op: "opacity-[0.06]", anim: "animate-float-slow" },
            { sym: "×", top: "15%", left: "90%", size: "text-4xl", op: "opacity-[0.05]", anim: "animate-float" },
            { sym: "=", top: "75%", left: "4%",  size: "text-6xl", op: "opacity-[0.05]", anim: "animate-float-delayed" },
            { sym: "÷", top: "70%", left: "92%", size: "text-4xl", op: "opacity-[0.06]", anim: "animate-float-slow" },
            { sym: "∑", top: "40%", left: "2%",  size: "text-3xl", op: "opacity-[0.04]", anim: "animate-float" },
            { sym: "π", top: "30%", left: "96%", size: "text-3xl", op: "opacity-[0.04]", anim: "animate-float-delayed" },
            { sym: "9", top: "55%", left: "50%", size: "text-[120px]", op: "opacity-[0.03]", anim: "animate-float-slow" },
          ].map((item, i) => (
            <span key={i} className={`absolute font-black text-primary ${item.size} ${item.op} ${item.anim}`}
              style={{ top: item.top, left: item.left }}>
              {item.sym}
            </span>
          ))}
        </div>

        <div className="container px-4 max-w-6xl relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-purple-200 rounded-full px-5 py-2.5 text-purple-600 text-xs font-bold uppercase tracking-[0.3em] shadow-sm mb-5">
              <Sparkles className="h-3.5 w-3.5 text-secondary animate-shimmer" />
              Brain Skills Built for Life
              <Sparkles className="h-3.5 w-3.5 text-secondary animate-shimmer delay-300" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 leading-tight">
              Four Lifelong Skills,<br />
              <span className="text-secondary">Unlocked Through Abacus</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-base">
              Every program at Rabbi Global Academy systematically builds these four core abilities in every student from day one.
            </p>
          </div>

          {/* Skill cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              {
                icon: BrainCircuit, title: "Concentration",
                topBg: "bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100",
                glowBg: "from-sky-400/20 via-blue-300/10 to-transparent",
                ringColor: "shadow-blue-100",
                iconColor: "text-blue-700",
                iconBg: "bg-blue-50",
                border: "border-blue-100/80",
                number: "01",
                mathSymbol: "+",
                mathColor: "text-blue-300",
                desc: "Sustained attention span that helps students excel in classrooms and competitive exams.",
                img: "/images/journey/skill-concentration-nobg.png",
                floatClass: "animate-float",
              },
              {
                icon: Eye, title: "Visualization",
                topBg: "bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100",
                glowBg: "from-amber-400/20 via-orange-300/10 to-transparent",
                ringColor: "shadow-amber-100",
                iconColor: "text-amber-700",
                iconBg: "bg-amber-50",
                border: "border-amber-100/80",
                number: "02",
                mathSymbol: "×",
                mathColor: "text-orange-300",
                desc: "Ability to picture and manipulate numbers as vivid mental images for faster, accurate recall.",
                img: "/images/journey/skill-visualization-nobg.png",
                floatClass: "animate-float-delayed",
              },
              {
                icon: Ear, title: "Listening",
                topBg: "bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100",
                glowBg: "from-emerald-400/20 via-teal-300/10 to-transparent",
                ringColor: "shadow-emerald-100",
                iconColor: "text-emerald-700",
                iconBg: "bg-emerald-50",
                border: "border-emerald-100/80",
                number: "03",
                mathSymbol: "÷",
                mathColor: "text-teal-300",
                desc: "Sharp auditory processing that improves comprehension, instruction-following, and memory.",
                img: "/images/journey/skill-listening-nobg.png",
                floatClass: "animate-float-slow",
              },
              {
                icon: Zap, title: "Speed & Accuracy",
                topBg: "bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100",
                glowBg: "from-violet-400/20 via-fuchsia-300/10 to-transparent",
                ringColor: "shadow-violet-100",
                iconColor: "text-violet-700",
                iconBg: "bg-violet-50",
                border: "border-violet-100/80",
                number: "04",
                mathSymbol: "=",
                mathColor: "text-fuchsia-300",
                desc: "Lightning-fast, error-free calculation skills that build academic confidence for life.",
                img: "/images/journey/skill-speed-nobg.png",
                floatClass: "animate-float",
              },
            ].map(skill => (
              <div
                key={skill.title}
                className={`group relative rounded-[2.5rem] border ${skill.border} bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Ambient glow layer */}
                <div className={`absolute inset-0 bg-gradient-to-b ${skill.glowBg} pointer-events-none`} />
                {/* Soft halo behind illustration */}
                <div className="absolute inset-x-6 top-4 h-32 rounded-full blur-3xl bg-white/50 pointer-events-none" />

                {/* ── Illustrated top ── */}
                <div className={`${skill.topBg} relative overflow-hidden`}>
                  {/* Soft radial light from top-center */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.60),_transparent_65%)] pointer-events-none" />

                  {/* Floating math symbol — card-specific */}
                  <span className={`absolute right-5 top-5 font-black text-4xl ${skill.mathColor} opacity-30 pointer-events-none select-none ${skill.floatClass}`}>
                    {skill.mathSymbol}
                  </span>

                  {/* Cartoon illustration */}
                  <img
                    src={skill.img}
                    alt={skill.title}
                    className="relative z-10 w-full h-56 object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Bottom gradient fade into white card */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />

                  {/* Numbered skill badge */}
                  <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-1.5 flex items-center gap-2 shadow-md">
                    <div className={`w-6 h-6 rounded-lg ${skill.iconBg} flex items-center justify-center`}>
                      <skill.icon className={`h-3.5 w-3.5 ${skill.iconColor}`} />
                    </div>
                    <span className={`text-[11px] font-black ${skill.iconColor}`}>{skill.number}</span>
                  </div>

                  {/* Glowing orb dots */}
                  <div className="absolute right-4 bottom-4 z-20 flex items-end gap-1.5">
                    <span className={`h-2.5 w-2.5 rounded-full bg-white/90 animate-glow-pulse ${skill.ringColor}`} style={{ boxShadow: "0 0 10px 4px rgba(255,255,255,0.7)" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60 delay-200" style={{ boxShadow: "0 0 8px 2px rgba(255,255,255,0.5)" }} />
                    <span className="h-1 w-1 rounded-full bg-white/40 delay-500" style={{ boxShadow: "0 0 6px 2px rgba(255,255,255,0.4)" }} />
                  </div>
                </div>

                {/* ── Card body ── */}
                <div className="relative z-10 px-6 pt-5 pb-6">
                  <h3 className={`font-serif font-bold text-xl ${skill.iconColor} mb-2 leading-tight`}>{skill.title}</h3>
                  <p className="text-muted-foreground/90 text-sm leading-relaxed">{skill.desc}</p>

                  {/* Decorative bottom accent line */}
                  <div className={`mt-5 h-1 w-12 rounded-full bg-gradient-to-r ${skill.topBg} opacity-60`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Comparison Table ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)" }}
      >
        <div className="pointer-events-none absolute top-0 left-1/2 w-96 h-40 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #fde68a, transparent 70%)" }} />

        <div className="container px-4 max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-full px-5 py-2 text-sky-700 text-xs font-bold uppercase tracking-[0.3em] shadow-sm mb-5">
              <GraduationCap className="h-3.5 w-3.5" />
              All Programs at a Glance
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-3">Complete Program Overview</h2>
            <p className="text-muted-foreground">All {programs.length} programs — age group, category, and duration in one place.</p>
          </div>

          <div className="rounded-[2rem] border border-border/60 overflow-hidden shadow-lg bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #142d50 0%, #173861 100%)" }} className="text-white">
                    <th className="text-left px-6 py-4 font-semibold">Program</th>
                    <th className="text-left px-6 py-4 font-semibold">Level</th>
                    <th className="text-left px-6 py-4 font-semibold">Age Group</th>
                    <th className="text-left px-6 py-4 font-semibold">Duration</th>
                    <th className="text-left px-6 py-4 font-semibold">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((prog, i) => (
                    <tr key={prog.id} className={`border-b border-border/30 transition-colors hover:bg-secondary/5 ${i % 2 === 0 ? "bg-white" : "bg-muted/10"}`}>
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-lg ${prog.iconBg} flex items-center justify-center flex-shrink-0`}>
                            <prog.icon className={`h-3.5 w-3.5 ${prog.iconColor}`} />
                          </div>
                          <span className="font-semibold text-primary">{prog.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-3.5">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${prog.badgeColor}`}>
                          {prog.badge}
                        </span>
                      </td>
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Users className="h-3 w-3" />
                          {prog.age}
                        </div>
                      </td>
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {prog.duration}
                        </div>
                      </td>
                      <td className="px-6 py-3.5 text-muted-foreground text-xs">{prog.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.10),_transparent_40%)]" />

        <div className="container px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_0.55fr] gap-12 items-center max-w-5xl mx-auto">
            {/* Text side */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-secondary text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6">
                <PartyPopper className="h-3.5 w-3.5" />
                Start Your Child's Journey Today
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
                Ready to Begin<br />
                <span className="text-secondary">the Journey?</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
                Our academic counselors offer a free assessment to place your child in exactly the right program and level — no commitment needed.
              </p>
              {/* Feature chips */}
              <div className="flex flex-wrap gap-3 mb-10">
                {["Free Assessment", "Age-Matched Level", "Certified Program", "ISO 9001:2015"].map(f => (
                  <div key={f} className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-white text-xs font-medium backdrop-blur-sm">
                    <BadgeCheck className="h-3.5 w-3.5 text-secondary" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-secondary/20">
                  Book Free Assessment <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base">
                  Call Us Now
                </Button>
              </div>
            </div>

            {/* Illustration side */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 rounded-[2rem] bg-white/10 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow-2xl">
                <img
                  src="/images/journey/achievers.png"
                  alt="Champion abacus learner"
                  className="w-full h-72 object-cover rounded-[1.5rem] border border-white/20"
                />
                <div className="mt-3 flex items-center gap-3 px-1">
                  {journeyCards.slice(0, 4).map(c => (
                    <img key={c.key} src={c.image} alt={c.title}
                      className="w-12 h-12 rounded-xl object-cover border-2 border-white/30 shadow-md"
                    />
                  ))}
                  <div className="text-white/70 text-xs font-medium ml-1">+{journeyCards.length - 4} more levels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}

function ProgramCard({ prog, isExpanded, onToggle }) {
  return (
    <div className={`group relative flex flex-col rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-border/50 ${isExpanded ? "ring-2 ring-primary/20 shadow-xl" : ""}`}>

      {/* Illustrated top banner */}
      <div className={`relative bg-gradient-to-br ${prog.accentColor} pt-6 pb-0 px-6 overflow-hidden`}>
        {/* Decorative circles */}
        <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/10" />
        <div className="absolute -right-2 top-8 w-14 h-14 rounded-full bg-white/10" />

        <div className="relative z-10 flex items-start justify-between mb-4">
          {/* Big icon */}
          <div className="w-14 h-14 rounded-2xl bg-white/25 backdrop-blur flex items-center justify-center shadow-md">
            <prog.icon className="h-7 w-7 text-white" />
          </div>
          {/* Badge */}
          <span className="bg-white/20 text-white border border-white/30 text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm leading-tight text-center max-w-[130px]">
            {prog.badge}
          </span>
        </div>

        <div className="relative z-10 pb-5">
          <h3 className="text-xl font-serif font-bold text-white mb-0.5">{prog.title}</h3>
          <p className="text-white/75 text-xs font-semibold uppercase tracking-wider">{prog.subtitle}</p>
        </div>

        {/* Wave bottom edge */}
        <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full h-5 fill-white">
            <path d="M0,20 C100,0 300,20 400,0 L400,20 Z" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4 pb-4 border-b border-border/50">
          <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {prog.age}</span>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {prog.duration}</span>
          <span className="flex items-center gap-1"><Award className="h-3.5 w-3.5" /> {prog.sessions}</span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{prog.description}</p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {prog.skills.map(s => (
            <span key={s} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${prog.iconBg} ${prog.iconColor} border ${prog.badgeColor}`}>
              {s}
            </span>
          ))}
        </div>

        {/* Expanded highlights */}
        {isExpanded && (
          <div className="mb-4 pt-4 border-t border-border/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-secondary" /> What You'll Learn
            </h4>
            <ul className="space-y-2">
              {prog.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className={`h-1.5 w-1.5 rounded-full mt-2 shrink-0 bg-gradient-to-br ${prog.accentColor}`} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="mt-auto flex gap-2 pt-2">
          <button
            onClick={onToggle}
            className={`flex-1 text-sm font-semibold py-2.5 px-4 rounded-xl border transition-all ${
              isExpanded
                ? "bg-primary text-white border-primary"
                : "border-border text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
            }`}
          >
            {isExpanded ? "Show Less" : "View Details"}
          </button>
          <Button className={`flex-shrink-0 bg-gradient-to-r ${prog.accentColor} text-white border-none hover:opacity-90 rounded-xl py-2.5 px-4 text-sm font-semibold shadow-md`}>
            Enroll
          </Button>
        </div>
      </div>
    </div>
  );
}
