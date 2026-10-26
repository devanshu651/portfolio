import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPARSH — Child Development Screening PWA",
  description:
    "Mobile-friendly Progressive Web App that helps Anganwadi workers screen children aged 0–6 for possible developmental concerns using age-based milestone questions.",
};

export default function SparshCaseStudy() {
  return (
    <article className="max-w-5xl mx-auto px-5 lg:px-12 pt-20 lg:pt-16 pb-24 lg:pb-32 min-w-0">
      {/* Back Link */}
      <div className="mb-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors link-sweep"
        >
          <span>←</span>
          <span>RETURN TO REPOSITORY INDEX</span>
        </Link>
      </div>

      {/* Header */}
      <header className="border-b border-[var(--ink)]/15 pb-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
          <span className="text-[var(--accent)] font-semibold">§ PLATE 01</span>
          <span>·</span>
          <span>CHILD DEVELOPMENT SCREENING PWA</span>
          <span>·</span>
          <span>COMMUNITY ENGAGEMENT</span>
        </div>

        <h1 className="font-serif text-[clamp(2.5rem,10vw,5.25rem)] lg:text-8xl font-normal tracking-tight text-[var(--ink)] leading-[0.98] lg:leading-[0.95] break-words">
          SPARSH
        </h1>

        <p className="mt-4 font-mono text-xs sm:text-sm uppercase tracking-wider text-[var(--accent)]">
          Smart Platform for Assessment of Response, Screening &amp; Holistic Development
        </p>

        <p className="mt-6 text-lg sm:text-xl text-[var(--ink)]/80 leading-relaxed font-sans max-w-3xl font-light">
          Mobile-friendly Progressive Web App that helps Anganwadi workers screen children aged 0–6 for possible developmental concerns using age-based milestone questions, with screening history for follow-up.
        </p>

        {/* Project Meta Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 pt-8 mt-8 border-t border-[var(--ink)]/10 font-mono text-xs min-w-0">
          <div>
            <span className="text-[var(--muted)] uppercase block mb-1">Project Role</span>
            <span className="text-[var(--ink)] leading-snug block">
              Team Leader · 11-member Team<br />
              Sem III Community Engagement
            </span>
          </div>
          <div>
            <span className="text-[var(--muted)] uppercase block mb-1">Institutional Context</span>
            <span className="text-[var(--ink)] leading-snug block">
              CSE (AI &amp; ML)<br />
              PRPCEM Amravati
            </span>
          </div>
          <div>
            <span className="text-[var(--muted)] uppercase block mb-1">External Channels</span>
            <div className="flex flex-wrap gap-3 pt-0.5">
              <a
                href="https://sparsh-tech.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] hover:text-[var(--accent)] underline decoration-[var(--accent)] underline-offset-4"
              >
                LIVE PWA ↗
              </a>
              <a
                href="https://github.com/devanshu651/SPARSH"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] hover:text-[var(--accent)] underline decoration-[var(--accent)] underline-offset-4"
              >
                SOURCE (GITHUB) ↗
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Visual Artifact Presentation — Typographic CSS Plate */}
      <div className="my-14 flex justify-center">
        <div className="relative max-w-2xl w-full border border-[var(--ink)]/20 bg-[var(--paper)] p-6 sm:p-8 shadow-2xl">
          <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>
          <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[var(--ink)]/40 pointer-events-none">+</span>

          {/* Internal Plate Blueprint Header */}
          <div className="border border-[var(--ink)]/15 p-6 bg-[var(--paper)] space-y-6">
            <div className="flex flex-wrap justify-between items-center gap-2 border-b border-[var(--ink)]/10 pb-3 font-mono text-[10px] uppercase text-[var(--muted)]">
              <span>PLATE 01.1 · ARCHITECTURAL SCHEMATIC</span>
              <span className="text-[var(--accent)] font-semibold">ANGドANWADI COHORT SPECIFICATION</span>
            </div>

            <div className="text-center py-4 space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                DEVELOPMENTAL MILESTONE TAXONOMY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal">
                SPARSH Core Screening Framework
              </h2>
              <p className="font-mono text-xs text-[var(--ink)]/70 max-w-md mx-auto">
                Target Demographic: Children Aged 0–6 Years · 5 Clinical Observation Domains
              </p>
            </div>

            {/* 5 Domains Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-2 border-t border-[var(--ink)]/10 font-mono text-center">
              {[
                { domain: "01", name: "Gross Motor", desc: "Balance, posture, locomotion" },
                { domain: "02", name: "Fine Motor", desc: "Object grasp, manipulation" },
                { domain: "03", name: "Language", desc: "Vocal, receptive, expressive" },
                { domain: "04", name: "Cognitive", desc: "Reasoning, exploration, recall" },
                { domain: "05", name: "Social-Emo", desc: "Interaction, affect, response" },
              ].map((d) => (
                <div key={d.domain} className="p-2.5 border border-[var(--ink)]/10 bg-[var(--ink)]/[0.02]">
                  <span className="text-[var(--accent)] text-[10px] block mb-0.5">{d.domain}</span>
                  <div className="font-serif text-sm text-[var(--ink)] font-normal">{d.name}</div>
                  <div className="text-[9px] text-[var(--muted)] mt-1">{d.desc}</div>
                </div>
              ))}
            </div>

            {/* Tiers summary */}
            <div className="flex flex-wrap justify-between items-center gap-3 pt-3 border-t border-[var(--ink)]/10 font-mono text-[10px] uppercase text-[var(--muted)]">
              <span>TIER: REACT 19 PWA + FASTAPI + CLOUD FIRESTORE</span>
              <span>OUTCOMES: LOW CONCERN · MONITOR · FURTHER EVAL</span>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-[var(--ink)]/10 flex justify-between items-center font-mono text-[10px] uppercase text-[var(--muted)]">
            <span>FIGURE 01.1 · TYPOGRAPHIC FIELD SPECIFICATION</span>
            <span>MOBILE-OPTIMIZED PROGRESSIVE WEB APP</span>
          </div>
        </div>
      </div>

      {/* Case Study Technical Dossier */}
      <div className="space-y-14">
        {/* Section 1: Problem */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            <span>§ 01</span>
            <span>·</span>
            <span>PROBLEM STATEMENT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal">
            The Surveillance Gap in Early Childhood Care
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-sans font-light">
            <p>
              In grassroots public healthcare setups across India, Anganwadi centres serve as the vital first line of observation for millions of children. However, routine monitoring is almost exclusively oriented around physical anthropometric metrics — specifically tracking weight and height.
            </p>
            <p>
              Critical early delays in physical movement, expressive speech, receptive hearing, and cognitive thinking often pass unnoticed during the foundational 0–6 developmental window. Furthermore, existing state applications such as Poshan Tracker are engineered around supplementary nutrition and ration accounting rather than structured developmental milestone screening.
            </p>
          </div>
        </section>

        {/* Section 2: Field Work */}
        <section className="pt-10 border-t border-[var(--ink)]/15 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            <span>§ 02</span>
            <span>·</span>
            <span>FIELD WORK &amp; PRIMARY INVESTIGATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal">
            Direct Field Visit and Pediatric Validation
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-sans font-light">
            <p>
              To ensure our screening methodology rested on sound pediatric science rather than abstract assumptions, our team initiated a multi-stage investigation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-[var(--ink)]/85">
              <li>
                <strong>Literature Review:</strong> Grounded the milestone catalog in established international and national pediatric guidelines, analyzing standards published by WHO, CDC, UNICEF, the Indian Academy of Pediatrics (IAP), and the Rashtriya Bal Swasthya Karyakram (RBSK).
              </li>
              <li>
                <strong>Field Visit (5 October 2026):</strong> Conducted an on-ground investigative visit to Anganwadi centres situated in Revasa, Amravati to observe daily operational workflows, record infrastructure constraints, and assess worker digital readiness.
              </li>
              <li>
                <strong>Structured Interviews:</strong> Completed structured interviews with 4 active Anganwadi workers on-site. All 4 workers confirmed that an intuitive, phone-based screening assistant would be readily integrated into their routine community rounds.
              </li>
              <li>
                <strong>Pediatrician Validation:</strong> Reviewed milestone question formulations, screening age brackets, and referral thresholds directly with practicing pediatricians to safeguard clinical appropriateness.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: What It Does */}
        <section className="pt-10 border-t border-[var(--ink)]/15 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            <span>§ 03</span>
            <span>·</span>
            <span>FUNCTIONALITY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal">
            Screening Workflow &amp; Assessment Engine
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {[
              {
                title: "Child Registration & Age Engine",
                desc: "Registers each child with date of birth and automatically computes exact chronological age into clinical developmental brackets.",
              },
              {
                title: "5 Developmental Domains",
                desc: "Screens across gross motor, fine motor, language, cognitive, and social-emotional milestones tailored to the child's exact bracket.",
              },
              {
                title: "Standardized Responses",
                desc: "Questions feature structured, low-friction answers: Yes, No, or Unsure, designed specifically for rapid assessment in field environments.",
              },
              {
                title: "Domain-Wise Outcomes",
                desc: "Calculates domain-level outcomes categorized as Low Concern, Monitor, or Further Evaluation to flag potential delays.",
              },
              {
                title: "Screening History for Follow-Up",
                desc: "Logs completed assessments over time so Anganwadi workers can track longitudinal trajectory across repeat community visits.",
              },
              {
                title: "Mobile-First PWA Design",
                desc: "Installable directly to home screens from the browser with lightweight resource usage suitable for basic field smartphones.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 border border-[var(--ink)]/15 bg-[var(--paper)]">
                <span className="font-mono text-xs text-[var(--accent)] block mb-1">§ 03.{idx + 1}</span>
                <h3 className="font-serif text-xl text-[var(--ink)] font-normal mb-1">{item.title}</h3>
                <p className="font-sans text-sm text-[var(--muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Engine */}
        <section className="pt-10 border-t border-[var(--ink)]/15 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            <span>§ 04</span>
            <span>·</span>
            <span>SCREENING ENGINE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal">
            Rule-Based Determinism &amp; Development Pipeline
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-sans font-light">
            <p>
              SPARSH is currently powered by a transparent, fully deterministic rule-based screening engine. Responses across the 5 developmental domains are evaluated against validated age-specific milestone thresholds, providing immediate, predictable outcome classifications without opaque black-box processing.
            </p>
            <div className="p-4 border border-[var(--ink)]/15 bg-[var(--ink)]/[0.02] font-mono text-xs text-[var(--ink)]/80 leading-relaxed">
              <span className="text-[var(--accent)] font-semibold block mb-1">ENGINE STATUS NOTICE:</span>
              The live production deployment relies strictly on the validated rule-based engine. An advanced AI-powered risk pattern engine is currently IN DEVELOPMENT to assist with longitudinal variance detection. No AI model is live in production today, and no artificial accuracy benchmarks are claimed.
            </div>
          </div>
        </section>

        {/* Section 5: Architecture */}
        <section className="pt-10 border-t border-[var(--ink)]/15 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            <span>§ 05</span>
            <span>·</span>
            <span>SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal">
            Three-Tier Technical Blueprint
          </h2>
          <div className="pt-2 border border-[var(--ink)]/15 divide-y divide-[var(--ink)]/10 font-mono text-xs">
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <span className="text-[var(--accent)] font-semibold uppercase block">Tier 01 · Frontend PWA</span>
                <span className="font-serif text-lg text-[var(--ink)] font-normal font-sans">
                  React 19 + Vite + Tailwind CSS
                </span>
                <p className="text-[var(--muted)] text-xs font-sans">
                  Progressive Web App shell delivering rapid response times, touch-friendly questionnaire interfaces, and field installation.
                </p>
              </div>
              <span className="border border-[var(--ink)]/15 px-3 py-1 text-[10px] uppercase text-[var(--muted)] self-start sm:self-center">
                Client Layer
              </span>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <span className="text-[var(--accent)] font-semibold uppercase block">Tier 02 · Service API</span>
                <span className="font-serif text-lg text-[var(--ink)] font-normal font-sans">
                  FastAPI + Pydantic Engine
                </span>
                <p className="text-[var(--muted)] text-xs font-sans">
                  Python backend handling strict schema validation, chronological age derivation, and milestone threshold scoring.
                </p>
              </div>
              <span className="border border-[var(--ink)]/15 px-3 py-1 text-[10px] uppercase text-[var(--muted)] self-start sm:self-center">
                Compute Engine
              </span>
            </div>

            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <span className="text-[var(--accent)] font-semibold uppercase block">Tier 03 · Data &amp; Auth</span>
                <span className="font-serif text-lg text-[var(--ink)] font-normal font-sans">
                  Firebase Authentication + Cloud Firestore
                </span>
                <p className="text-[var(--muted)] text-xs font-sans">
                  Role-based Anganwadi worker authentication, secure child record segregation, and historical screening log persistence.
                </p>
              </div>
              <span className="border border-[var(--ink)]/15 px-3 py-1 text-[10px] uppercase text-[var(--muted)] self-start sm:self-center">
                Persistence Layer
              </span>
            </div>
          </div>
        </section>

        {/* Section 6: Limits */}
        <section className="pt-10 border-t border-[var(--ink)]/15 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            <span>§ 06</span>
            <span>·</span>
            <span>SYSTEM BOUNDS &amp; LIMITS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--ink)] font-normal">
            Operational Boundaries and Ethical Constraints
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[var(--ink)]/85 leading-relaxed font-sans font-light">
            <p>
              Building responsible healthcare technology requires transparency about what an engineered system cannot and must not claim to do:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-[var(--ink)]/85">
              <li>
                <strong>Screening Support Only, Not a Diagnosis:</strong> SPARSH is exclusively a preliminary developmental surveillance aid. It does not provide medical diagnoses or replace licensed clinical evaluations by pediatric specialists.
              </li>
              <li>
                <strong>No Pilot Deployment Yet:</strong> While primary field interviews with 4 Anganwadi workers in Revasa and pediatric consultations have been successfully conducted, an official administrative pilot across public primary health infrastructure has not yet launched.
              </li>
              <li>
                <strong>AI Engine in Development:</strong> Automated machine learning models for anomaly detection and developmental clustering remain in active research and prototyping; they are deliberately withheld from live screening workflows until comprehensive clinical validation.
              </li>
            </ul>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="pt-10 border-t border-[var(--ink)]/15">
          <h2 className="font-serif text-3xl text-[var(--ink)] font-normal mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {[
              "React 19",
              "Vite",
              "Tailwind CSS",
              "PWA",
              "FastAPI",
              "Pydantic",
              "Firebase Auth",
              "Cloud Firestore",
            ].map((tech) => (
              <span
                key={tech}
                className="border border-[var(--ink)]/20 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[var(--ink)] bg-[var(--paper)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom Actions & Links */}
        <div className="pt-10 border-t border-[var(--ink)]/15 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://sparsh-tech.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent)] text-[var(--paper)] px-5 py-3 hover:bg-[var(--ink)] transition-colors inline-flex items-center gap-2"
            >
              <span>LAUNCH LIVE APP</span>
              <span>↗</span>
            </a>
            <a
              href="https://github.com/devanshu651/SPARSH"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--ink)]/20 text-[var(--ink)] px-5 py-3 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-2"
            >
              <span>GITHUB REPOSITORY</span>
              <span>↗</span>
            </a>
          </div>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 bg-[var(--ink)] text-[var(--paper)] px-6 py-3 hover:bg-[var(--accent)] transition-colors"
          >
            <span>BACK TO ALL PROJECTS</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
