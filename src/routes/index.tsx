import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  FileText,
  Code2,
  Database,
  Globe,
  Cpu,
  Sparkles,
  GraduationCap,
  Briefcase,
  Award,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vasu Gumber — BCA Student & MERN Developer" },
      { name: "description", content: "Portfolio of Vasu Gumber — BCA student, MERN stack developer, and Gemini Student Ambassador building impactful web products." },
      { property: "og:title", content: "Vasu Gumber — BCA Student & MERN Developer" },
      { property: "og:description", content: "Portfolio of Vasu Gumber — BCA student, MERN stack developer, and Gemini Student Ambassador." },
    ],
  }),
  component: Index,
});

const EMAIL = "vxsugumber@gmail.com";

const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

function Nav() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const onCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <header className="sticky top-0 z-50 relative px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-border/60 bg-card/80 px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.02),0_8px_30px_-12px_rgba(0,0,0,0.08)]">
        <button onClick={onCopy} className="flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition">
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          <span className="truncate max-w-[140px] sm:max-w-[180px] hidden xs:inline sm:inline">{copied ? "Copied" : EMAIL}</span>
          <span className="xs:hidden sm:hidden">Email</span>
        </button>
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="rounded-full px-3 py-1.5 text-muted-foreground hover:bg-background hover:text-foreground transition">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition">
          Hire me <ArrowUpRight className="size-3.5" />
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="lg:hidden inline-flex size-9 items-center justify-center rounded-full bg-background border border-border text-foreground hover:bg-accent transition"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden absolute left-0 right-0 top-full z-50 mx-3 mt-2 max-w-6xl rounded-3xl border border-border/60 bg-card/95 backdrop-blur-md p-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] sm:mx-4">
          <nav className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-foreground/80 hover:bg-background transition"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`mailto:${"vxsugumber@gmail.com"}`}
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              Hire me <ArrowUpRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Card({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl rounded-3xl bg-card px-5 py-12 sm:px-12 sm:py-20 shadow-[0_1px_0_rgba(0,0,0,0.02)] ${className}`}>
      {children}
    </section>
  );
}

function Hero() {
  return (
    <Card className="!py-16 sm:!py-28 text-center">
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex items-center">
          <div className="size-14 rounded-full bg-gradient-to-br from-accent to-secondary border border-border flex items-center justify-center text-lg font-medium text-foreground/70">VG</div>
          <div className="absolute left-full ml-2 flex items-center gap-1.5 rounded-full bg-background border border-border px-3 py-1 text-xs whitespace-nowrap shadow-sm">
            Vasu Gumber <span>👋</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Hey there, I'm Vasu Gumber</p>
        <h1 className="text-[2.5rem] sm:text-7xl leading-[1.02] sm:leading-[0.95] max-w-3xl">
          Ready to build something <em className="italic text-muted-foreground">impactful.</em>
        </h1>
        <p className="text-base text-muted-foreground">BCA Student · 2025 – 28</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
            Let's talk <ArrowUpRight className="size-4" />
          </a>
          <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-accent transition">
            <FileText className="size-4" /> About me
          </a>
        </div>
      </div>
    </Card>
  );
}

const SKILLS = ["MERN Stack Developer", "Gemini Student Ambassador", "Digital Marketer", "Video Editor", "Canva Designing"];

function About() {
  return (
    <Card id="about">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1 text-xs text-muted-foreground">About</span>
        <h2 className="mt-6 text-[1.75rem] sm:text-5xl leading-tight">
          Turning ideas into <em className="italic text-muted-foreground">working web products.</em>
        </h2>
      </div>
      <div className="mx-auto mt-10 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted-foreground">
        <p>I'm a Second-Year BCA student at D.A.V. College, Abohar, passionate about turning ideas into working web products. My stack of choice is MERN — Express.js, React.js, and Node.js — and I enjoy the full journey from designing a clean UI to wiring up a backend API.</p>
        <p>Beyond coding, I serve as a <span className="text-foreground">Gemini Student Ambassador</span> for Google, where I introduce fellow students to AI-powered tools and developer ecosystems. I believe technology should be understood, not just used — so I make it a habit to break down problems, document solutions clearly, and keep learning in public.</p>
        <p>When I'm not building projects, I'm exploring digital marketing and SEO to understand how products reach and grow their audience — because great software deserves great reach.</p>
        <p>I'm actively looking for a <span className="text-foreground">web development internship</span> where I can contribute to a real product, work with a team, and level up fast. If that sounds like a fit, let's connect.</p>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {SKILLS.map((s) => (
          <span key={s} className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs text-foreground/80">{s}</span>
        ))}
      </div>
    </Card>
  );
}

const SYLLABUS = [
  { icon: Code2, title: "Core Programming", body: "Foundations in C, C++, and Java — Object-Oriented Programming and memory management." },
  { icon: Cpu, title: "Data Structures & Algorithms", body: "Organizing data and writing efficient code — the backbone of cracking technical interviews." },
  { icon: Database, title: "Database Management", body: "Designing, querying, and managing data using SQL — crucial for backend and full-stack apps." },
  { icon: Globe, title: "Web Development", body: "The foundational trio of HTML, CSS, and JavaScript that powers the modern web." },
];

function Education() {
  return (
    <Card id="education">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1 text-xs text-muted-foreground"><GraduationCap className="size-3.5" /> Education</span>
        <h2 className="mt-6 text-[1.75rem] sm:text-5xl leading-tight">D.A.V. College, Abohar</h2>
        <p className="mt-3 text-muted-foreground">Bachelor of Computer Applications · 2025 – 2028</p>
      </div>
      <div className="mt-12 border-t border-border/70 pt-10">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">Syllabus overview</p>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {SYLLABUS.map((s) => (
            <div key={s.title}>
              <s.icon className="size-5 text-foreground/70" strokeWidth={1.5} />
              <h3 className="mt-4 font-sans text-sm font-semibold tracking-normal">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

const EXPERIENCE = [
  {
    role: "Gemini Student Ambassador",
    org: "Google",
    period: "May 2026 — Present",
    bullets: [
      "Organizing on-campus workshops to introduce students to Gemini AI tools and the Google developer ecosystem.",
      "Building and nurturing a student network to foster peer learning, collaboration, and community growth.",
      "Serving as the direct connection between the student body and Google's Gemini platform — making AI accessible and relatable.",
      "Developing skills in event coordination, public communication, and community engagement.",
    ],
  },
  {
    role: "Web Development Intern",
    org: "Inamigos",
    period: "May 2026 — Present",
    bullets: [
      "Building and maintaining client portfolio websites from scratch.",
      "Implementing responsive design across mobile, tablet, and desktop breakpoints.",
      "Writing clean, structured frontend code following professional standards.",
    ],
  },
];

function Experience() {
  return (
    <Card id="experience">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1 text-xs text-muted-foreground"><Briefcase className="size-3.5" /> Experience</span>
        <h2 className="mt-6 text-[1.75rem] sm:text-5xl leading-tight">Where I'm <em className="italic text-muted-foreground">currently building.</em></h2>
      </div>
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-border/70">
        {EXPERIENCE.map((e) => (
          <div key={e.role} className="grid gap-6 py-10 sm:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="font-sans text-base font-semibold tracking-normal">{e.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
              <p className="mt-1 text-xs text-muted-foreground">{e.period}</p>
            </div>
            <ul className="space-y-3 text-[14px] leading-relaxed text-muted-foreground">
              {e.bullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 size-1 flex-none rounded-full bg-foreground/40" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
}

const CERTS = [
  { title: "Digital Marketing", org: "HubSpot Academy", year: "2026", body: "Content strategy, SEO fundamentals, and inbound marketing techniques to grow and position products online." },
  { title: "Intro to Cybersecurity Job Simulation", org: "Commonwealth Bank · Forage", year: "2026", body: "Stepped into a cybersecurity analyst role — identifying threats, analyzing suspicious activity, thinking defensively." },
  { title: "Cyber Job Simulation", org: "Deloitte Australia · Forage", year: "2026", body: "Enterprise-level cyber risk, threat analysis, and secure problem-solving via Deloitte's professional program." },
  { title: "Start Writing Prompts Like a Pro", org: "Google", year: "2026", body: "Prompt engineering — crafting clear, structured prompts for precise, high-quality outputs from models like Gemini." },
  { title: "Google AI Essentials", org: "Google", year: "2026", body: "Foundations of AI and ML — model training, responsible AI practices, and real-world application." },
];

function Certifications() {
  return (
    <Card id="certifications">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-background border border-border px-3 py-1 text-xs text-muted-foreground"><Award className="size-3.5" /> Certifications</span>
        <h2 className="mt-6 text-[1.75rem] sm:text-5xl leading-tight">Always <em className="italic text-muted-foreground">learning in public.</em></h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
        {CERTS.map((c, i) => (
          <div key={i} className="group rounded-2xl border border-border bg-background p-6 hover:border-foreground/30 transition">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-sans text-[15px] font-semibold tracking-normal">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.org} · {c.year}</p>
              </div>
              <Sparkles className="size-4 text-muted-foreground/60 group-hover:text-foreground transition" strokeWidth={1.5} />
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Contact() {
  return (
    <Card id="contact" className="text-center">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-background border border-border">
        <MessageCircle className="size-5 text-foreground/70" strokeWidth={1.5} />
      </div>
      <h2 className="mt-6 text-[2.25rem] sm:text-6xl leading-tight">Tell me about your <em className="italic text-muted-foreground">next project.</em></h2>
      <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">Open to internships, freelance builds, and friendly intros. I usually reply within a day.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a href={`mailto:${"vxsugumber@gmail.com"}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
          <Mail className="size-4" /> Email me
        </a>
        <a href="https://t.me/Vx5uu?text=Hello%20Vasu,%20Can%20We%20Connect" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-accent transition">
          Telegram
        </a>
      </div>
    </Card>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} Vasu Gumber. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/in/vasugumber/" className="hover:text-foreground transition">LinkedIn</a>
        <span>/</span>
        <a href="https://github.com/Vasu-G01" className="hover:text-foreground transition">GitHub</a>
        <span>/</span>
        <a href="https://www.instagram.com/vx5uu/" className="hover:text-foreground transition">Instagram</a>
      </div>
    </footer>
  );
}

function Index() {
  useEffect(() => {
    const id = "fonts-instrument";
    if (document.getElementById(id)) return;
    const l = document.createElement("link");
    l.id = id;
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap";
    document.head.appendChild(l);
  }, []);

  return (
    <div className="min-h-screen pb-6">
      <Nav />
      <main className="flex flex-col gap-6 px-4 pt-6">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
