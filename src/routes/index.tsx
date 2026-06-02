import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Star,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Check,
  Copy,
} from "lucide-react";
import logoAsset from "@/assets/weheal-logo.png.asset.json";
import heroImg from "@/assets/clinic-secondary.png";
import drHasnaImg from "@/assets/dr-hasna.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WeHeal Physio & Rehab Clinic — Bespoke Rehabilitation, Beruwala" },
      {
        name: "description",
        content:
          "Private boutique physiotherapy and neuro-rehabilitation in Beruwala. Led by Dr. Hasna. Bespoke, evidence-based recovery programs.",
      },
      { property: "og:title", content: "WeHeal Physio & Rehab Clinic" },
      {
        property: "og:description",
        content:
          "Bespoke physiotherapy and rehabilitation. Restore movement. Relieve pain. Rebuild lives.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "WeHeal Physio & Rehab Clinic",
          address: {
            "@type": "PostalAddress",
            streetAddress: "9/1A, Circular Road, China Fort Road",
            addressLocality: "Beruwala",
            postalCode: "12070",
            addressCountry: "LK",
          },
          telephone: "+94763288767",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            ratingCount: "50",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Discover", href: "#discover" },
  { label: "Services", href: "#services" },
  { label: "Clinical Approach", href: "#approach" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

function Logo({ size = 42 }: { size?: number }) {
  return (
    <img
      src={logoAsset.url}
      alt="WeHeal"
      width={size}
      height={size}
      style={{ height: size, width: "auto" }}
    />
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-xl bg-white/70 border-b border-hairline">
      <div className="container-luxe h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <Logo size={42} />
          <span className="font-display text-[15px] tracking-[0.32em] font-medium text-obsidian">
            WEHEAL
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a href="#booking" className="btn-obsidian">
            Book an Appointment
          </a>
        </div>
        <button
          className="lg:hidden text-obsidian"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-b border-hairline">
          <div className="container-luxe py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#booking" className="btn-obsidian mt-2 self-start" onClick={() => setOpen(false)}>
              Book an Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-40 pb-24 md:pt-[160px] md:pb-[160px] bg-background">
      <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-leaf text-leaf" />
              ))}
            </div>
            <span className="eyebrow">5.0 Google Rating · Clinical Excellence</span>
          </div>
          <h1 className="display-xl text-obsidian">
            Expert Physiotherapy
            <br />
            &amp; <span className="text-orchid italic font-normal">Rehabilitation</span> Care
          </h1>
          <p className="mt-10 max-w-xl text-[17px] leading-[1.65] text-platinum">
            Helping patients recover from pain, injury, neurological conditions, and movement
            limitations through highly bespoke, private rehabilitation programs.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
            <a href="#booking" className="btn-orchid">
              Book Appointment Now <ArrowRight size={16} className="ml-2" />
            </a>
            <a href="tel:+94763288767" className="link-underline inline-flex items-center gap-2">
              <Phone size={14} /> Direct Consultation: +94 76 328 8767
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-canvas">
            <img
              src={heroImg}
              alt="WeHeal premium physiotherapy clinic interior"
              width={1080}
              height={1350}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container-luxe mt-24 md:mt-32 pt-8 border-t border-hairline">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            "Stroke Rehabilitation Specialist",
            "Evidence-Based Treatment",
            "Personalized Care",
          ].map((p) => (
            <div key={p} className="eyebrow text-obsidian">
              · {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="discover" className="py-32 md:py-40 bg-background">
      <div className="container-luxe max-w-3xl text-center mx-auto">
        <p className="eyebrow mb-10">01 / Background</p>
        <h2 className="display-lg">Healing Through Movement</h2>
        <p className="mt-10 text-[17px] leading-[1.8] text-platinum">
          At WeHeal Physio &amp; Rehab Clinic, we believe every patient deserves personalized care.
          Our rehabilitation programs are designed to reduce pain, restore movement, improve
          function, and help patients return to their daily lives with confidence. Located in the
          exclusive therapeutic hub of Beruwala, we combine clinical intelligence with a private
          boutique touch to guide your recovery completely seamlessly.
        </p>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    num: "02",
    tag: "Musculoskeletal",
    title: "Advanced Musculoskeletal Care",
    blurb: "Tailored therapies addressing structural imbalances.",
    items: ["Back & Neck Pain", "Joint Pain Conditions", "Elite Sports Injuries", "Chronic Arthritis Management"],
  },
  {
    num: "03",
    tag: "Neurological",
    title: "Neurological Rehabilitation",
    blurb: "Specialized clinical pathways for nervous system restoration.",
    items: ["Advanced Stroke Rehabilitation", "Complex Balance Disorders", "Functional Mobility Training", "Nerve Pathologies"],
  },
  {
    num: "04",
    tag: "Pediatric",
    title: "Pediatric Physiotherapy",
    blurb: "Gentle, metrics-driven developmental support for young patients.",
    items: ["Early Developmental Support", "Pediatric Movement Training", "Dedicated Pediatric Rehab"],
  },
  {
    num: "05",
    tag: "Women's Health",
    title: "Women's Health & Wellness",
    blurb: "Private and deeply compassionate care frameworks.",
    items: ["Prenatal Structural Care", "Postnatal Restorative Recovery", "Targeted Pelvic Floor Health"],
  },
  {
    num: "06",
    tag: "Chest Physio",
    title: "Chest & Respiratory Therapy",
    blurb: "Advanced interventions to maximize respiratory efficiency.",
    items: ["Pulmonary Rehabilitation", "Specialized Breathing Exercises", "Lung Function Optimization"],
  },
  {
    num: "07",
    tag: "Orthopedic",
    title: "Orthopedic Rehabilitation",
    blurb: "Post-surgical support designed to fast-track joint efficiency.",
    items: ["Post-Surgical Recovery Path", "Structural Injury Rehabilitation", "Complete Mobility Restoration"],
  },
];

function Services() {
  return (
    <section id="services" className="py-32 md:py-40 bg-canvas border-y border-hairline">
      <div className="container-luxe">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-4">
            <p className="eyebrow">Specialty Atlas</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-lg">Six clinical disciplines, one boutique sanctuary.</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 border-t border-hairline">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`group p-10 md:p-12 border-b border-hairline transition-colors duration-500 hover:bg-background ${
                i % 3 !== 2 ? "md:border-r" : ""
              }`}
            >
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-[13px] text-orchid font-medium">{s.num}</span>
                <span className="eyebrow text-platinum">{s.tag}</span>
              </div>
              <h3 className="display-md mb-4">{s.title}</h3>
              <p className="text-platinum text-[15px] leading-relaxed mb-8">{s.blurb}</p>
              <ul className="space-y-3 border-t border-hairline pt-6">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-obsidian">
                    <span className="mt-2 w-1 h-1 rounded-full bg-leaf shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TECHNIQUES = [
  "Manual Therapy",
  "Therapeutic Exercises",
  "Electrotherapy",
  "Dry Needling",
  "Taping",
  "Clinical Pilates",
  "Cupping Therapy",
];

function Techniques() {
  return (
    <section className="py-24 bg-background">
      <div className="container-luxe">
        <p className="eyebrow mb-10 text-center">Treatment Techniques</p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {TECHNIQUES.map((t, i) => (
            <span key={t} className="flex items-center gap-6">
              <span className="text-[15px] md:text-[18px] text-obsidian tracking-tight">{t}</span>
              {i < TECHNIQUES.length - 1 && <span className="text-platinum text-xs">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Physiotherapist() {
  return (
    <section id="approach" className="py-32 md:py-40 bg-background border-t border-hairline">
      <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden bg-canvas">
            <img
              src={drHasnaImg}
              alt="Dr. Hasna, Senior Physiotherapist"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow mb-8">Clinical Leadership</p>
          <h2 className="display-lg">
            Led by <span className="italic font-normal text-orchid">Dr. Hasna</span>
          </h2>
          <p className="mt-6 text-[13px] uppercase tracking-[0.18em] text-platinum">
            Senior Physiotherapist · Neuro-Rehabilitation Specialist
          </p>
          <p className="mt-10 text-[17px] leading-[1.75] text-platinum max-w-xl">
            A clinical professional dedicated to achieving measurable physiological milestones. Dr.
            Hasna pairs advanced dry needling and neurological modalities with evidence-based
            therapeutic exercise to create unparalleled outcomes.
          </p>

          <div className="mt-12">
            <p className="eyebrow mb-6">Areas of Mastery</p>
            <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
              {[
                "Stroke Rehabilitation Pathways",
                "Elite Orthopedic Physiotherapy",
                "Neurological Restorative Management",
                "Pediatric Physical Training",
                "Women's Health & Pelvic Care",
                "Certified Dry Needling Practitioner",
              ].map((m) => (
                <li key={m} className="text-[14px] text-obsidian border-b border-hairline pb-3">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const REASONS: [string, string][] = [
  ["Bespoke Treatment Plans", "Every medical framework is built entirely from scratch to suit your physiological profile."],
  ["Elite Clinical Mastery", "Direct access to specialized therapeutic skills and international-standard diagnostics."],
  ["Modern Modalities", "Integration of advanced electrical stimulation, clinical pilates, and structural dry needling."],
  ["Uncompromising Support", "A quiet, highly attentive clinical partnership throughout your recovery."],
  ["Evidence-Based Protocols", "Every manipulation and exercise is fully supported by modern medical literature."],
  ["Sanctuary Environment", "A perfectly sterile, private, and relaxing facility optimized for restorative health."],
];

function WhyChoose() {
  return (
    <section className="py-32 md:py-40 bg-canvas border-y border-hairline">
      <div className="container-luxe">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <p className="eyebrow">The WeHeal Standard</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-lg">Six commitments. Zero compromise.</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 border-t border-hairline">
          {REASONS.map(([title, body], i) => (
            <div
              key={title}
              className={`group p-10 border-b border-hairline transition-colors duration-500 hover:bg-background ${
                i % 3 !== 2 ? "md:border-r" : ""
              }`}
            >
              <div className="text-[13px] font-medium text-orchid mb-6">0{i + 1}</div>
              <h3 className="font-display text-[22px] tracking-tight font-medium mb-4">{title}</h3>
              <p className="text-platinum text-[15px] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "I arrived with severe knee pain and received truly exceptional care. The physical assessment was thorough, logical, and the treatment plan produced real results rapidly.",
    name: "Punyalatha Assalarachchi",
  },
  {
    quote:
      "The absolute premier clinic for joint and muscle recovery. After only two targeted sessions, I experienced total relief from chronic pain.",
    name: "Travel Life",
  },
  {
    quote:
      "Dr. Hasna is undeniably one of the finest, most precise physiotherapists practicing today.",
    name: "Aseel Hazan",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section id="stories" className="py-32 md:py-40 bg-background">
      <div className="container-luxe">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="eyebrow mb-6">Patient Stories</p>
            <h2 className="display-lg max-w-xl">A quiet record of measurable recoveries.</h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-12 h-12 border border-obsidian flex items-center justify-center hover:bg-obsidian hover:text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setI((i + 1) % TESTIMONIALS.length)}
              className="w-12 h-12 border border-obsidian flex items-center justify-center hover:bg-obsidian hover:text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="max-w-4xl">
          <div className="flex gap-1 mb-10">
            {[...Array(5)].map((_, k) => (
              <Star key={k} size={14} className="fill-leaf text-leaf" />
            ))}
          </div>
          <blockquote className="font-display text-[26px] md:text-[36px] leading-[1.25] tracking-[-0.03em] text-obsidian">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="mt-10 eyebrow">— {t.name}</p>
        </div>

        <div className="mt-12 flex gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-[2px] transition-all ${k === i ? "w-12 bg-orchid" : "w-6 bg-hairline"}`}
              aria-label={`Story ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const SPECIALIZATIONS = [
  "Stroke Rehabilitation Specialist",
  "Musculoskeletal Care",
  "Pediatric Physiotherapy",
  "Women's Health & Wellness",
  "Chest & Respiratory Therapy",
  "Orthopedic Rehabilitation",
  "Other",
];

const TIMES = ["09:00 AM", "10:30 AM", "1:00 PM", "3:30 PM", "5:00 PM"];

const CLINIC_WHATSAPP = "964770682786"; // +964 770 682 786
const finalServiceLabel = (s: string, other: string) => (s === "Other" ? other : s);

function generateBookingCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 6; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return `WH-${out}`;
}

function BookingWizard() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState(SPECIALIZATIONS[0]);
  const [otherService, setOtherService] = useState("");
  const [date, setDate] = useState(15);
  const [time, setTime] = useState(TIMES[0]);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [bookingCode, setBookingCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const steps = ["Service", "Date & Time", "Your Details", "Confirm"];

  const resolvedService = finalServiceLabel(service, otherService);
  const dateLabel = `June ${date}, 2026`;

  const handleConfirm = () => {
    const code = generateBookingCode();
    setBookingCode(code);
  };

  const handleReset = () => {
    setBookingCode(null);
    setStep(0);
    setPatientName("");
    setPatientPhone("");
    setPatientEmail("");
    setService(SPECIALIZATIONS[0]);
    setOtherService("");
    setCopied(false);
  };

  const whatsappMessage =
    `*New Booking — WeHeal Physio & Rehab Clinic*%0A%0A` +
    `Booking Code: *${bookingCode ?? ""}*%0A` +
    `Patient: ${encodeURIComponent(patientName)}%0A` +
    `Phone: ${encodeURIComponent(patientPhone)}%0A` +
    (patientEmail ? `Email: ${encodeURIComponent(patientEmail)}%0A` : "") +
    `Specialization: ${encodeURIComponent(resolvedService)}%0A` +
    `Date: ${encodeURIComponent(dateLabel)}%0A` +
    `Time: ${encodeURIComponent(time)}%0A` +
    `Clinician: Dr. Hasna%0A%0A` +
    `Sent from wehealclinic.com`;

  const whatsappHref = `https://wa.me/${CLINIC_WHATSAPP}?text=${whatsappMessage}`;

  const mailtoHref =
    `mailto:?subject=${encodeURIComponent(`New Booking ${bookingCode ?? ""} — WeHeal`)}` +
    `&body=${encodeURIComponent(
      `New Booking — WeHeal Physio & Rehab Clinic\n\n` +
        `Booking Code: ${bookingCode ?? ""}\n` +
        `Patient: ${patientName}\n` +
        `Phone: ${patientPhone}\n` +
        (patientEmail ? `Email: ${patientEmail}\n` : "") +
        `Specialization: ${resolvedService}\n` +
        `Date: ${dateLabel}\n` +
        `Time: ${time}\n` +
        `Clinician: Dr. Hasna\n`,
    )}`;

  const copyCode = async () => {
    if (!bookingCode) return;
    try {
      await navigator.clipboard.writeText(bookingCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  const detailsValid =
    patientName.trim().length >= 2 && patientPhone.trim().length >= 6;

  return (
    <section id="booking" className="py-32 md:py-40 bg-canvas border-y border-hairline">
      <div className="container-luxe">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Bespoke Appointment</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-lg">Secure your slot in under two minutes.</h2>
          </div>
        </div>

        <div className="bg-background border border-hairline">
          {!bookingCode && (
            <div className="flex border-b border-hairline overflow-x-auto">
              {steps.map((s, k) => (
                <button
                  key={s}
                  onClick={() => setStep(k)}
                  className={`flex-1 min-w-[140px] py-6 px-6 text-left transition-colors ${
                    k === step ? "bg-background" : "bg-canvas"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[11px] font-medium tracking-[0.2em] ${
                        k === step ? "text-orchid" : "text-platinum"
                      }`}
                    >
                      0{k + 1}
                    </span>
                    <span
                      className={`text-[12px] uppercase tracking-[0.18em] ${
                        k === step ? "text-obsidian" : "text-platinum"
                      }`}
                    >
                      {s}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          <div className="p-8 md:p-12 min-h-[420px]">
            {bookingCode ? (
              <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-leaf/15 text-leaf mb-8">
                  <Check size={26} />
                </div>
                <p className="eyebrow mb-3">Reservation Confirmed</p>
                <h3 className="display-md mb-4">Thank you, {patientName.split(" ")[0]}.</h3>
                <p className="text-[15px] text-platinum max-w-md mx-auto mb-10">
                  Your appointment is locked in. Share the booking code below with the
                  clinic to complete confirmation.
                </p>

                <div className="border border-hairline bg-canvas px-8 py-8 mb-10">
                  <p className="eyebrow mb-3">Your Booking Code</p>
                  <div className="flex items-center justify-center gap-4">
                    <span className="font-mono text-[28px] md:text-[34px] tracking-[0.25em] text-obsidian">
                      {bookingCode}
                    </span>
                    <button
                      onClick={copyCode}
                      className="inline-flex items-center justify-center h-10 w-10 border border-hairline hover:border-obsidian transition-colors"
                      aria-label="Copy booking code"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                <dl className="border-t border-hairline text-left mb-10">
                  {[
                    ["Patient", patientName],
                    ["Phone", patientPhone],
                    ...(patientEmail ? ([["Email", patientEmail]] as [string, string][]) : []),
                    ["Specialization", resolvedService],
                    ["Date", dateLabel],
                    ["Time", time],
                    ["Clinician", "Dr. Hasna"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-4 border-b border-hairline">
                      <dt className="eyebrow">{k}</dt>
                      <dd className="text-[14px] text-obsidian">{v}</dd>
                    </div>
                  ))}
                </dl>

                <p className="eyebrow mb-4">Notify The Clinic</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-orchid"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    Send to Clinic on WhatsApp
                  </a>
                  <a href={mailtoHref} className="btn-obsidian">
                    Send by Email
                  </a>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-10 text-[12px] uppercase tracking-[0.2em] text-platinum hover:text-obsidian transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <>
                {step === 0 && (
                  <div className="max-w-xl">
                    <label className="eyebrow block mb-4">Select Specialization</label>
                    <div className="relative">
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full appearance-none bg-transparent border-b border-obsidian py-4 pr-8 text-[17px] text-obsidian focus:outline-none"
                      >
                        {SPECIALIZATIONS.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown size={18} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {service === "Other" && (
                      <div className="mt-8">
                        <label className="eyebrow block mb-4">Please specify</label>
                        <input
                          type="text"
                          value={otherService}
                          onChange={(e) => setOtherService(e.target.value)}
                          placeholder="Describe the care you're seeking"
                          className="w-full bg-transparent border-b border-obsidian py-4 text-[17px] text-obsidian placeholder:text-platinum focus:outline-none"
                        />
                      </div>
                    )}
                    <button
                      onClick={() => setStep(1)}
                      disabled={service === "Other" && !otherService.trim()}
                      className="btn-orchid mt-12 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                )}
                {step === 1 && (
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <label className="eyebrow block mb-6">June 2026</label>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {["S", "M", "T", "W", "T", "F", "S"].map((d, k) => (
                          <div key={k} className="text-[10px] tracking-[0.2em] text-platinum py-2">
                            {d}
                          </div>
                        ))}
                        {Array.from({ length: 30 }, (_, k) => k + 1).map((d) => (
                          <button
                            key={d}
                            onClick={() => setDate(d)}
                            className={`aspect-square text-[13px] transition-colors ${
                              d === date ? "bg-obsidian text-white" : "text-obsidian hover:bg-canvas"
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="eyebrow block mb-6">Available Slots</label>
                      <div className="grid grid-cols-2 gap-2">
                        {TIMES.map((tt) => (
                          <button
                            key={tt}
                            onClick={() => setTime(tt)}
                            className={`py-4 text-[13px] border transition-colors ${
                              tt === time
                                ? "border-obsidian bg-obsidian text-white"
                                : "border-hairline text-obsidian hover:border-obsidian"
                            }`}
                          >
                            {tt}
                          </button>
                        ))}
                      </div>
                      <button onClick={() => setStep(2)} className="btn-orchid mt-10">
                        Continue <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="max-w-xl">
                    <p className="eyebrow mb-6">Your Details</p>
                    <div className="space-y-8">
                      <div>
                        <label className="eyebrow block mb-3">Full Name</label>
                        <input
                          type="text"
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="Jane Doe"
                          className="w-full bg-transparent border-b border-obsidian py-4 text-[17px] text-obsidian placeholder:text-platinum focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="eyebrow block mb-3">Phone (WhatsApp preferred)</label>
                        <input
                          type="tel"
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          placeholder="+964 770 000 0000"
                          className="w-full bg-transparent border-b border-obsidian py-4 text-[17px] text-obsidian placeholder:text-platinum focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="eyebrow block mb-3">
                          Email <span className="text-platinum normal-case tracking-normal text-[11px]">(optional)</span>
                        </label>
                        <input
                          type="email"
                          value={patientEmail}
                          onChange={(e) => setPatientEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full bg-transparent border-b border-obsidian py-4 text-[17px] text-obsidian placeholder:text-platinum focus:outline-none"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!detailsValid}
                      className="btn-orchid mt-12 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                )}
                {step === 3 && (
                  <div className="max-w-xl">
                    <p className="eyebrow mb-6">Confirm Reservation</p>
                    <dl className="border-t border-hairline">
                      {[
                        ["Patient", patientName],
                        ["Phone", patientPhone],
                        ...(patientEmail ? ([["Email", patientEmail]] as [string, string][]) : []),
                        ["Specialization", resolvedService],
                        ["Date", dateLabel],
                        ["Time", time],
                        ["Clinician", "Dr. Hasna"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between py-4 border-b border-hairline">
                          <dt className="eyebrow">{k}</dt>
                          <dd className="text-[14px] text-obsidian">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                      <button onClick={handleConfirm} className="btn-orchid">
                        Confirm Booking
                      </button>
                      <button className="btn-obsidian">Emergency Treatment Request</button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const PROCESS: [string, string][] = [
  ["Clinical Assessment & Diagnosis", "Detailed evaluation of structural, mechanical, and neurological movement parameters."],
  ["Bespoke Treatment Mapping", "Crafting an exclusive, targeted recovery timeline built entirely around your needs."],
  ["Elite Rehabilitation Sessions", "Execution of precision therapy, manual adjustment, and advanced clinical techniques."],
  ["Metric-Driven Recovery Monitoring", "Continuous scientific reassessments to tweak parameters as function returns."],
  ["Long-Term Systemic Wellness", "Discharging with highly specialized preventative knowledge and home health routines."],
];

function Process() {
  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container-luxe grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow mb-6">The Journey</p>
          <h2 className="display-lg">Treatment Process</h2>
        </div>
        <div className="md:col-span-8">
          <ol className="relative">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-hairline" />
            {PROCESS.map(([title, body], i) => (
              <li key={title} className="relative pl-12 pb-12 last:pb-0">
                <div className="absolute left-[-3px] top-2 w-[7px] h-[7px] rounded-full bg-orchid" />
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-[12px] font-medium tracking-[0.2em] text-orchid">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-[22px] tracking-tight font-medium">{title}</h3>
                </div>
                <p className="text-platinum text-[15px] leading-relaxed max-w-lg">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const FAQS: [string, string][] = [
  ["What conditions do you treat?", "We provide premium care across orthopedics (spine and joint pain), advanced neurological conditions (stroke), pediatrics, pre/postnatal wellness, and acute sports injuries."],
  ["How long does a physiotherapy session take?", "Every session is highly thorough and comprehensive, lasting between 45 to 60 minutes of direct, undivided clinical attention."],
  ["Do I need a referral?", "No. As a private facility, patients can access our elite diagnostic and treatment services directly without prior medical referrals."],
  ["How many sessions will I need?", "This depends entirely on your initial diagnosis. Dr. Hasna provides a clear, transparent, and structured timeline at the conclusion of your first consult."],
  ["Can I book online?", "Yes. Our real-time digital booking suite secures your specialized slot instantly in under two minutes."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-32 md:py-40 bg-canvas border-y border-hairline">
      <div className="container-luxe grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="eyebrow mb-6">Inquiries</p>
          <h2 className="display-lg">Frequently Asked</h2>
        </div>
        <div className="md:col-span-8">
          <div className="border-t border-hairline">
            {FAQS.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="border-b border-hairline">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-8 text-left"
                  >
                    <span className="font-display text-[18px] md:text-[22px] tracking-tight font-medium text-obsidian pr-6">
                      {q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180 text-orchid" : "text-platinum"}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-platinum text-[15px] leading-[1.75] max-w-2xl">{a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-background">
      <div className="container-luxe grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="eyebrow mb-6">Sanctuary Location</p>
          <h2 className="display-lg mb-12">Visit the clinic.</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin size={18} className="text-orchid shrink-0 mt-1" />
              <div>
                <p className="eyebrow mb-2">The Clinic</p>
                <p className="text-[15px] text-obsidian leading-relaxed">
                  9/1A, Circular Road, China Fort Road
                  <br />
                  Beruwala 12070, Sri Lanka
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={18} className="text-orchid shrink-0 mt-1" />
              <div>
                <p className="eyebrow mb-2">Telephone</p>
                <a href="tel:+94763288767" className="text-[15px] text-obsidian">
                  +94 76 328 8767
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock size={18} className="text-orchid shrink-0 mt-1" />
              <div>
                <p className="eyebrow mb-2">Clinical Hours</p>
                <ul className="text-[15px] text-obsidian leading-relaxed space-y-1">
                  <li>Monday – Friday · 8:00 AM – 7:00 PM</li>
                  <li>Saturday · 8:00 AM – 4:00 PM</li>
                  <li className="text-platinum">Sunday · Emergency Services Only</li>
                </ul>
              </div>
            </div>
          </div>

          <a href="https://wa.me/94763288767" className="btn-outline-thin mt-12 gap-3">
            <MessageCircle size={14} /> Initiate WhatsApp Consultation
          </a>
        </div>

        <div className="aspect-[4/5] lg:aspect-auto bg-canvas border border-hairline overflow-hidden min-h-[480px]">
          <iframe
            title="WeHeal Clinic Location"
            src="https://www.google.com/maps?q=Beruwala+12070,+Sri+Lanka&output=embed"
            className="w-full h-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 md:py-40 bg-orchid text-white">
      <div className="container-luxe text-center max-w-3xl mx-auto">
        <p className="eyebrow !text-white/70 mb-8">Begin</p>
        <h2 className="display-xl !text-white">Start Your Recovery Journey Today</h2>
        <p className="mt-10 text-[17px] leading-[1.7] text-white/80 max-w-xl mx-auto">
          Book your appointment online and begin your path to better movement, less pain, and
          improved quality of life.
        </p>
        <a
          href="#booking"
          className="inline-flex items-center justify-center mt-12 bg-white text-obsidian px-10 py-5 text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-obsidian hover:text-white transition-colors"
        >
          Book an Evaluation Now <ArrowRight size={16} className="ml-3" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline">
      <div className="container-luxe py-20 grid md:grid-cols-4 gap-12">
        <div>
          <Logo size={30} />
          <p className="mt-6 text-[13px] text-platinum leading-relaxed max-w-[200px]">
            Restore Movement. Relieve Pain. Rebuild Lives.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="space-y-3 text-[13px] text-obsidian">
            {["Home", "About", "Services", "Patient Reviews", "Contact"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-orchid transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Clinical Focus</p>
          <ul className="space-y-3 text-[13px] text-obsidian">
            {["Musculoskeletal", "Neuro Rehab", "Women's Health", "Pediatrics"].map((l) => (
              <li key={l}>
                <a href="#services" className="hover:text-orchid transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Credentials</p>
          <ul className="space-y-3 text-[13px] text-obsidian">
            <li className="flex items-center gap-2">
              <Star size={11} className="fill-leaf text-leaf" /> Verified 5.0 Google Reviews
            </li>
            <li>
              <a
                href="https://web.facebook.com/Drhasnapt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orchid transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/drhasnapt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orchid transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="container-luxe py-6 text-center text-[11px] tracking-[0.12em] text-platinum">
          © 2026 WeHeal Physio &amp; Rehab Clinic. All Rights Reserved. · Developed by mintrolabs.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Techniques />
      <Physiotherapist />
      <WhyChoose />
      <Testimonials />
      <BookingWizard />
      <Process />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
