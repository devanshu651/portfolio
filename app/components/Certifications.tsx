"use client";

import React, { useState, useEffect } from "react";

type Certificate = {
  title: string;
  issuer: string;
  period: string;
  details?: string;
  file: string;
};

type CertificationCategory = {
  title: string;
  icon: React.ReactNode;
  certificates: Certificate[];
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  const categories: CertificationCategory[] = [
    {
      title: "Industry Job Simulations",
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      certificates: [
        { title: "Solutions Architecture Job Simulation", issuer: "AWS (via Forage)", period: "September 2025", file: "/certificates/AWS.jpg" },
        { title: "Data Analytics Job Simulation", issuer: "Deloitte (via Forage)", period: "August 2025", file: "/certificates/DATAANLAYAST.jpg" },
        { title: "GenAI Powered Data Analytics Job Simulation", issuer: "Tata Group (via Forage)", period: "August 2025", file: "/certificates/GENAI.jpg" },
        { title: "Software Engineering Job Simulation", issuer: "Hewlett Packard Enterprise (via Forage)", period: "October 2025", file: "/certificates/HEP.jpg" },
      ],
    },
    {
      title: "Virtual Internships",
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      certificates: [
        { title: "Employability Skill Job Ready Virtual Internship", issuer: "EduSkills Academy (Supported by Wadhwani Foundation)", period: "October–December 2025", details: "10-week program", file: "/certificates/employeebilityskill.jpg" },
        { title: "Java Full Stack Development With Project — Virtual Internship", issuer: "EduSkills Academy", period: "April–June 2026", details: "8-week program", file: "/certificates/javafullstack.jpg" },
        { title: "Prompt Engineering for AI Virtual Internship", issuer: "EduSkills Academy", period: "", details: "", file: "/certificates/Prompt Engineering for AI Virtual Internship.pdf" },
        { title: "Python Full Stack Development With Project Virtual Internship", issuer: "EduSkills Academy", period: "", details: "", file: "/certificates/Python Full Stack Development With Project Virtual Internship.pdf" },
      ],
    },
    {
      title: "Technical Training",
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      certificates: [
        { title: "Java Training", issuer: "IIT Bombay (EduPyramids, SINE)", period: "June 2026", details: "Score: 95%, Credits: 4, Credential ID: 4779071I9Y", file: "/certificates/java-traning.jpg" },
        { title: "Cybersecurity Awareness Quiz", issuer: "", period: "", details: "", file: "/certificates/DEVANSHU-RAUT-Participant-Certificate.pdf" },
        { title: "R Programming Bootcamp for Absolute Beginners (2025)", issuer: "Udemy", period: "2025", details: "", file: "/certificates/R-PROGRAMING.jpg" },
      ],
    },
    {
      title: "Professional Certifications",
      icon: (
        <svg className="w-5 h-5 text-[var(--ink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      certificates: [
        { title: "Introduction to MS Excel", issuer: "Microsoft", period: "August 2025", details: "", file: "/certificates/ms-EXCEL.jpg" },
        { title: "AI Skills Passport", issuer: "EY & Microsoft", period: "", details: "", file: "/certificates/MS-AIskill.jpg" },
        { title: "Data Analytics — Certificate of Achievement", issuer: "OneRoadmap", period: "", details: "", file: "/certificates/Oneroad.jpg" },
        { title: "Supply Chain Operations Academy (S.C.O.A) — Data Entry", issuer: "Flipkart", period: "", details: "", file: "/certificates/FLIPCARD.jpg" },
        { title: "Acquiring Data", issuer: "", period: "", details: "", file: "/certificates/Acquringdata.jpg" },
        { title: "Microsoft Learn Achievement (wv26jqtn)", issuer: "Microsoft Learn", period: "", details: "Online Badge", file: "https://learn.microsoft.com/en-us/users/devanshuraut-2185/achievements/wv26jqtn?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
        { title: "Microsoft Learn Achievement (9rytp8wu)", issuer: "Microsoft Learn", period: "", details: "Online Badge", file: "https://learn.microsoft.com/en-us/users/devanshuraut-2185/achievements/9rytp8wu?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
        { title: "Microsoft Learn Achievement (wv26jqtn) - 2", issuer: "Microsoft Learn", period: "", details: "Online Badge", file: "https://learn.microsoft.com/en-us/users/devanshuraut-2185/achievements/wv26jqtn?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
        { title: "Microsoft Learn Achievement (wv26jqtn) - 3", issuer: "Microsoft Learn", period: "", details: "Online Badge", file: "https://learn.microsoft.com/en-us/users/devanshuraut-2185/achievements/wv26jqtn?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
        { title: "AI Attendee", issuer: "Global AI Community", period: "", details: "Online Badge", file: "https://globalai.community/badges/1c9afae3-7e6c-4b7b-9c1a-b35ad269355c/" },
      ],
    },
  ];

  return (
    <>
      <section id="certifications" className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-[var(--ink)]/15">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
            § 05 — CREDENTIALS &amp; AUDITS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-[var(--ink)] font-normal mb-3">
            Certifications
          </h2>
          <p className="text-[var(--muted)] max-w-2xl text-base leading-relaxed font-sans">
            Verified credentials and training programs validating skills across software engineering, AI/ML, and cloud architecture.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {categories.map((category, i) => (
            <div
              key={category.title}
              className="border border-[var(--ink)]/15 bg-[var(--paper)] p-6 hover:border-[var(--accent)] transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--ink)]/10">
                <span className="font-mono text-[10px] text-[var(--muted)]">0{i + 1}</span>
                <span className="text-[var(--ink)]">{category.icon}</span>
              </div>

              <h3 className="font-serif text-2xl text-[var(--ink)] font-normal mb-6">
                {category.title}
              </h3>

              {/* Certificates List */}
              <div className="flex flex-col gap-3">
                {category.certificates.map((cert, j) => (
                  <div
                    key={j}
                    className="p-4 border border-[var(--ink)]/10 bg-[var(--paper)] hover:border-[var(--accent)] transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                  >
                    <div className="flex flex-col gap-1 pr-4">
                      <h4 className="font-serif text-lg text-[var(--ink)] font-normal">
                        {cert.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--muted)] font-mono">
                        {cert.issuer && <span>{cert.issuer}</span>}
                        {cert.issuer && cert.period && <span>·</span>}
                        {cert.period && <span>{cert.period}</span>}
                      </div>
                      {cert.details && (
                        <p className="text-[11px] text-[var(--muted)] mt-1 font-mono">{cert.details}</p>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        if (cert.file.startsWith("http")) {
                          window.open(cert.file, "_blank", "noopener,noreferrer");
                        } else {
                          setSelectedCert(cert);
                        }
                      }}
                      className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--ink)]/20 text-xs font-mono uppercase tracking-wider text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors active:scale-95"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      VIEW ↗
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[var(--ink)]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCert(null)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-5xl flex flex-col max-h-full border border-[var(--ink)]/20 bg-[var(--paper)] shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[var(--ink)]/15 bg-[var(--paper)]">
              <div className="flex flex-col pr-4">
                <h3 className="font-serif text-xl text-[var(--ink)] font-normal">{selectedCert.title}</h3>
                <p className="text-xs text-[var(--muted)] font-mono">
                  {selectedCert.issuer} {selectedCert.period ? `(${selectedCert.period})` : ""}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="shrink-0 p-2 font-mono text-xs uppercase border border-[var(--ink)]/20 text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
                aria-label="Close"
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative flex-1 overflow-auto bg-[var(--paper)] flex items-center justify-center p-4 min-h-[50vh]">
              {selectedCert.file.match(/\.(pdf|htm|html)$/i) ? (
                <iframe
                  src={selectedCert.file}
                  className="w-full h-[70vh] border border-[var(--ink)]/10 bg-white"
                  title={selectedCert.title}
                />
              ) : (
                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[70vh] object-contain border border-[var(--ink)]/10"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
