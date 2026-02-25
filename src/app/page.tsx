import Image from "next/image";

/* ─── Icon Components ─── */

function WoodworkDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Carpenter's square and measurement lines */}
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
          <line
            x1="100"
            y1="100"
            x2="190"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.15"
          />
          <line
            x1="180"
            y1="95"
            x2="180"
            y2="105"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.2"
          />
        </g>
      ))}
    </svg>
  );
}

/* ─── Data ─── */

const services = [
  {
    step: "01",
    title: "Custom Woodwork",
    text: "Shelving, built-ins, mantels, and furniture pieces designed to complement your colonial, Cape Cod, or farmhouse home.",
  },
  {
    step: "02",
    title: "Cabinet & Trim Work",
    text: "Kitchen and bathroom cabinet repairs, crown molding, baseboards, and finish carpentry that honors your home\u2019s character.",
  },
  {
    step: "03",
    title: "Home Repairs",
    text: "Door fixes, drywall patches, fixture installs, and all those small jobs that pile up \u2014 especially after a tough New England winter.",
  },
  {
    step: "04",
    title: "Historic Home Care",
    text: "Sensitive repairs and restorations for older Connecticut homes. Preserving original details while adding modern function.",
  },
];

const trustFeatures = [
  "30+ years of carpentry experience",
  "Punctual \u2014 I show up when I say I will",
  "Clean worksite, every time",
  "Clear communication, no surprises",
  "Experienced with historic and colonial homes",
  "One-off repairs or seasonal maintenance plans",
  "Serving Fairfield County and communities across Connecticut",
];

/* ─── Page ─── */

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Andrey the Carpenter Logo"
              width={44}
              height={44}
              priority
            />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">ANDREY</span>
              <span className="text-accent"> THE CARPENTER</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Why Choose Me</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-cream font-semibold px-5 py-2 rounded-full text-sm transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background woodwork decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <WoodworkDecor className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] text-primary animate-rotate-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/10">
              <Image
                src="/andrey-portrait.jpg"
                alt="Andrey Rodnenko — carpenter and craftsman"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <p className="mt-4 text-sm text-foreground/40 italic">
              Andrey Rodnenko — SVA Graduate &amp; Self-Taught Carpenter
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient-primary">Quality Carpentry</span>
            <br />
            <span className="text-foreground">&amp; Home Repairs</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/60 mb-4 font-light">
            An artist&apos;s eye meets master craftsmanship — handcrafted woodwork and reliable repairs for Connecticut homeowners
          </p>

          <div className="mt-10 mb-12">
            <div className="inline-flex items-baseline gap-1 bg-surface-medium/60 border border-primary/20 rounded-2xl px-8 py-4">
              <span className="text-2xl md:text-3xl font-bold text-gradient-primary">30+ Years</span>
              <span className="text-lg text-foreground/50"> Experience</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-cream font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              className="border border-foreground/20 hover:border-primary/50 text-foreground font-medium px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent" />
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="divider-line" />

      {/* ─── Services ─── */}
      <section id="services" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-background to-surface-dark opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-foreground">Built with </span>
            <span className="text-gradient-accent">Care</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-16 leading-relaxed">
            Whether it&apos;s a custom bookshelf, kitchen cabinet refresh, or a list of small fixes around the house — I bring the same attention to detail and respect for your home to every job. Serving colonials, Capes, and historic homes across Fairfield County and beyond.
          </p>

          {/* Service steps */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((item) => (
              <div key={item.step} className="group relative p-8 rounded-2xl border border-primary/10 bg-surface-medium/30 hover:border-primary/30 transition-all">
                <div className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="divider-line" />

      {/* ─── Trust/Pricing ─── */}
      <section id="pricing" className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-medium/20 to-background" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-block rounded-full bg-primary/10 border border-primary/20 px-4 py-1 text-primary text-sm font-medium mb-8">
            Why homeowners trust Andrey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Free Estimates</span>
          </h2>
          <p className="text-foreground/60 text-lg mb-2">Reliable, respectful, and always on time.</p>
          <p className="text-foreground/40 text-sm mb-12">No job too big or small — let&apos;s discuss your project.</p>

          <div className="bg-surface-medium/40 border border-primary/15 rounded-3xl p-8 md:p-12 text-left">
            <ul className="space-y-4">
              {trustFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="divider-line" />

      {/* ─── Contact ─── */}
      <section id="contact" className="relative py-32 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Talk About Your <span className="text-gradient-primary">Project</span>
          </h2>
          <p className="text-foreground/60 text-lg mb-12 leading-relaxed">
            Whether you need a custom piece built or just a few things fixed around the house, I&apos;m happy to come take a look. Call, email, or send a message — free estimates, always.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:andrey@andreythecarpenter.com?subject=Project%20Quote%20Request"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-cream font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            <a
              href="tel:203-555-0173"
              className="inline-flex items-center gap-3 border border-foreground/20 hover:border-primary/50 text-foreground font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (561) 555-0173
            </a>
          </div>

          <div className="text-sm text-foreground/40">
            <p className="mb-2">andrey@andreythecarpenter.com</p>
            <p>Serving Fairfield County, CT &amp; surrounding areas • Same day response</p>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-primary/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Andrey the Carpenter"
              width={32}
              height={32}
            />
            <span className="font-semibold text-sm">
              <span className="text-primary">ANDREY</span>
              <span className="text-accent"> THE CARPENTER</span>
              <span className="text-foreground/30 ml-2">Quality Craftsmanship</span>
            </span>
          </div>
          <p className="text-foreground/30 text-sm">
            &copy; {new Date().getFullYear()} Andrey the Carpenter LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}