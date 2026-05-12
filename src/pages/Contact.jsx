import { Link } from "react-router-dom";
import { AppLayout } from "@/components/shared/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <AppLayout>
      {/* ── Illustrated Hero ── */}
      <section
        className="relative overflow-hidden py-16 sm:py-24 text-white"
        style={{ background: "linear-gradient(135deg, #142d50 0%, #0f2745 55%, #173861 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute -left-16 top-10 w-72 h-72 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-16 fill-background">
            <path d="M0,80 C300,0 900,80 1200,0 L1200,80 Z" />
          </svg>
        </div>
        <div className="container px-4 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 text-secondary text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-6">
            <MessageSquare className="h-3.5 w-3.5" /> Contact Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-5 leading-tight">
            We're Here to<br /><span className="text-secondary">Help You</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
            Whether you're a parent ready to enroll your child or an entrepreneur seeking a franchise opportunity — reach out and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      <div className="relative py-12 lg:py-24 overflow-hidden" style={{ background: "linear-gradient(160deg, #fffdf8 0%, #f7f8ff 100%)" }}>
        <div className="absolute -left-16 top-0 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-sky-200/15 blur-3xl pointer-events-none" />
        <div className="container px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <div className="rounded-[2rem] bg-white border border-border/60 shadow-xl p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-full px-5 py-2 text-sky-700 text-xs font-bold uppercase tracking-[0.3em] shadow-sm mb-5">
                  <MessageSquare className="h-3.5 w-3.5" /> Send a Message
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-7 leading-tight">
                  How can we <span className="text-secondary">help you?</span>
                </h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-semibold text-primary/80">Full Name</Label>
                      <Input id="name" placeholder="Your full name" className="rounded-xl h-11 bg-background/60 border-border/60 focus-visible:ring-secondary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-semibold text-primary/80">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="rounded-xl h-11 bg-background/60 border-border/60 focus-visible:ring-secondary" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-semibold text-primary/80">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" className="rounded-xl h-11 bg-background/60 border-border/60 focus-visible:ring-secondary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city" className="font-semibold text-primary/80">City</Label>
                      <Input id="city" placeholder="Bengaluru" className="rounded-xl h-11 bg-background/60 border-border/60 focus-visible:ring-secondary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program" className="font-semibold text-primary/80">Interested In</Label>
                    <Select>
                      <SelectTrigger className="rounded-xl h-11 bg-background/60 border-border/60">
                        <SelectValue placeholder="Select a program or inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="abacus">Abacus Program</SelectItem>
                        <SelectItem value="vedic">Vedic Mathematics</SelectItem>
                        <SelectItem value="brain">Brain Development</SelectItem>
                        <SelectItem value="franchise">Franchise Opportunity</SelectItem>
                        <SelectItem value="teacher">Teacher Training</SelectItem>
                        <SelectItem value="other">Other Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold text-primary/80">Your Message</Label>
                    <Textarea id="message" placeholder="Tell us more about what you're looking for..." className="min-h-[130px] rounded-xl bg-background/60 border-border/60 focus-visible:ring-secondary" />
                  </div>
                  <Button type="button" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base rounded-xl font-semibold shadow-lg shadow-primary/20">
                    Send Message <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-primary text-white border-none shadow-xl">
                <CardContent className="p-8 space-y-8">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-secondary mb-6">Contact Information</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-full h-fit shrink-0">
                          <MapPin className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Head Office</p>
                          <p className="text-white/80 text-sm leading-relaxed">
                          105, 1st Cross Rd,<br /> behind Petra Nilaya Convent,<br /> Kannuru, Bengaluru,<br /> Chikkagubbi, Karnataka 560077

                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-full h-fit shrink-0">
                          <Phone className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Phone</p>
                          <a href="tel:+919686801874" className="text-white/80 text-sm hover:text-secondary transition-colors block">+91 96868 01874</a>
                          <a href="tel:+918026645678" className="text-white/80 text-sm hover:text-secondary transition-colors block">+91 80 2664 5678</a>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-full h-fit shrink-0">
                          <Mail className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Email</p>
                          <a href="mailto:info@rabbiglobalacademy.com" className="text-white/80 text-sm hover:text-secondary transition-colors">info@rabbiglobalacademy.com</a>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-full h-fit shrink-0">
                          <Clock className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Office Hours</p>
                          <p className="text-white/80 text-sm">Mon – Sat: 9:30 AM – 6:30 PM</p>
                          <p className="text-white/80 text-sm">Sunday: Closed</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-3">
                      <a href="https://wa.me/919686801874" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="WhatsApp">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      </a>
                      <a href="https://www.facebook.com/rabbiglobalacademy" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="https://www.instagram.com/rabbiglobalacademy" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="Instagram">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="https://www.youtube.com/@rabbiglobalacademy" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="YouTube">
                        <Youtube className="h-5 w-5" />
                      </a>
                      <a href="https://www.linkedin.com/company/rabbiglobalacademy" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden border-2 border-secondary h-64 bg-muted relative flex flex-col items-center justify-center shadow-md">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #0e2a47 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                <MapPin className="h-12 w-12 text-secondary mb-3 z-10" />
                <p className="font-serif font-bold text-primary z-10 text-lg">Find us in Karnataka</p>
                <a
                  href="https://maps.google.com/?q=Jayanagar+4th+Block+Bengaluru+Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary underline underline-offset-2 z-10 mt-1 hover:text-primary transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ + CTA */}
      <section className="relative py-20 overflow-hidden border-t border-border/50" style={{ background: "linear-gradient(160deg, #f8f9ff 0%, #fffdf8 100%)" }}>
        <div className="absolute -right-16 top-0 w-72 h-72 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-72 h-72 rounded-full bg-sky-200/15 blur-3xl pointer-events-none" />
        <div className="container px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-sky-200 rounded-full px-5 py-2 text-sky-700 text-xs font-bold uppercase tracking-[0.3em] shadow-sm mb-5">
              <MessageSquare className="h-3.5 w-3.5" /> FAQs
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-4 leading-tight">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Quick answers for parents and aspiring franchise partners.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full mb-10">
            {[
              { q: "What is the right age to start Abacus?", a: "The ideal age to start abacus training is between 4 and 7 years. At this age, children's brains are highly receptive, making it easier for them to grasp visual arithmetic concepts and develop lifelong cognitive skills." },
              { q: "Will it interfere with regular school math?", a: "Not at all. In fact, it complements school math. While school teaches the theoretical concepts, abacus and Vedic math train the brain to process those calculations at lightning speed, boosting the child's overall academic confidence." },
              { q: "How often are the classes held?", a: "Classes are typically held once or twice a week, usually on weekends or after school hours, to ensure it doesn't overburden the student's regular academic schedule. Each session is roughly 2 hours long." },
              { q: "Do you provide online classes?", a: "Yes, we offer fully interactive online classes via our dedicated portal, maintaining the same high quality of instruction as our physical centers. We ship the physical abacus tool and study materials directly to your home." },
              { q: "Are your instructors certified?", a: "Absolutely. Every instructor at Rabbi Global Academy undergoes a rigorous training program and must clear our certification exams before they are authorized to teach." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-2xl mb-4 border border-border/60 shadow-sm">
                <AccordionTrigger className="text-left font-bold text-primary text-lg hover:no-underline py-6 hover:text-secondary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #142d50 0%, #0f2745 55%, #173861 100%)" }} />
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
            <div className="absolute -right-10 top-0 w-64 h-64 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:text-left md:items-center justify-between gap-6 p-7 md:p-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
                  <Sparkles className="h-3.5 w-3.5" /> Franchise Opportunity
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Looking to start an education business?</h3>
                <p className="text-white/70">Join 40+ successful franchise partners across Karnataka.</p>
              </div>
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 h-12 rounded-full font-semibold shrink-0 shadow-xl shadow-secondary/20">
                <Link to="/franchises">View Franchise Details <ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
