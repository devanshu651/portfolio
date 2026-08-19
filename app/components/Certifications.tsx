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

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when modal is open
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
        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      certificates: [
        { title: "Solutions Architecture Job Simulation", issuer: "AWS (via Forage)", period: "September 2025", file: "/certificates/AWS_solution_Ar.jpg" },
        { title: "Data Analytics Job Simulation", issuer: "Deloitte (via Forage)", period: "August 2025", file: "/certificates/deloitte_forage.jpg" },
        { title: "GenAI Powered Data Analytics Job Simulation", issuer: "Tata Group (via Forage)", period: "August 2025", file: "/certificates/tata_genai_forage.jpg" },
        { title: "Software Engineering Job Simulation", issuer: "Hewlett Packard Enterprise (via Forage)", period: "October 2025", file: "/certificates/HEP.jpg" },
      ],
    },
    {
      title: "Virtual Internships",
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      certificates: [
        { title: "Employability Skill Job Ready Virtual Internship", issuer: "EduSkills Academy (Supported by Wadhwani Foundation)", period: "October–December 2025", details: "10-week program", file: "/certificates/Eduskill_Employ.jpg" },
        { title: "Java Full Stack Development With Project — Virtual Internship", issuer: "EduSkills Academy", period: "April–June 2026", details: "8-week program", file: "/certificates/Eduskill_Javafull_Stack.jpg" },
      ],
    },
    {
      title: "Technical Training",
      icon: (
        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      certificates: [
        { title: "Java Training", issuer: "IIT Bombay (EduPyramids, SINE)", period: "June 2026", details: "Score: 95%, Credits: 4, Credential ID: 4779071I9Y", file: "/certificates/IIT.htm" },
        { title: "Cybersecurity Awareness Quiz", issuer: "", period: "", details: "", file: "/certificates/DEVANSHU-RAUT-Participant-Certificate.pdf" },
        { title: "R Programming Bootcamp for Absolute Beginners (2025)", issuer: "Udemy", period: "2025", details: "", file: "/certificates/Udemey_R_lan.jpg" },
      ],
    },
    {
      title: "Professional Certifications",
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      certificates: [
        { title: "Introduction to MS Excel", issuer: "Microsoft", period: "August 2025", details: "", file: "/certificates/mirosoft_msexcel.jpg" },
        { title: "AI Skills Passport", issuer: "EY & Microsoft", period: "", details: "", file: "/certificates/MS-Skill_ai.jpg" },
        { title: "Data Analytics — Certificate of Achievement", issuer: "OneRoadmap", period: "", details: "", file: "/certificates/oneroad_data_ana.jpg" },
        { title: "Supply Chain Operations Academy (S.C.O.A) — Data Entry", issuer: "Flipkart", period: "", details: "", file: "/certificates/flipcard_data_entry.jpg" },
      ],
    },
  ];

  return (
    <>
      <section id="certifications" className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t border-white/10 reveal">
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-display tracking-tight text-white mb-4">
            Certifications
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base leading-relaxed">
            Verified credentials and training programs that validate my skills across software engineering, AI/ML, and cloud architecture.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {categories.map((category, i) => (
            <div
              key={category.title}
              className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/15 transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center transition-colors group-hover:bg-white/[0.08]">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-medium font-display tracking-wide text-sm">
                    {category.title}
                  </h3>
                </div>

                {/* Certificates List */}
                <div className="flex flex-col gap-3">
                  {category.certificates.map((cert, j) => (
                    <div
                      key={j}
                      className="relative p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200 group/item flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                    >
                      <div className="flex flex-col gap-1 pr-4">
                        <h4 className="text-sm font-medium text-white group-hover/item:text-zinc-200 transition-colors">
                          {cert.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500 font-mono">
                          {cert.issuer && <span>{cert.issuer}</span>}
                          {cert.issuer && cert.period && <span className="text-white/20">&bull;</span>}
                          {cert.period && <span>{cert.period}</span>}
                        </div>
                        {cert.details && (
                          <p className="text-[11px] text-zinc-600 mt-1">{cert.details}</p>
                        )}
                      </div>

                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-zinc-300 hover:text-white transition-all border border-transparent hover:border-white/10 active:scale-95"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View
                      </button>
                    </div>
                  ))}
                </div>
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCert(null)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-5xl flex flex-col max-h-full rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-zinc-900/50">
              <div className="flex flex-col pr-4">
                <h3 className="text-white font-medium">{selectedCert.title}</h3>
                <p className="text-xs text-zinc-400 font-mono">
                  {selectedCert.issuer} {selectedCert.period ? `(${selectedCert.period})` : ""}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="shrink-0 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative flex-1 overflow-auto bg-zinc-950 flex items-center justify-center p-4 min-h-[50vh]">
              {selectedCert.file.match(/\.(pdf|htm|html)$/i) ? (
                <iframe
                  src={selectedCert.file}
                  className="w-full h-[70vh] rounded bg-white"
                  title={selectedCert.title}
                />
              ) : (
                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[70vh] object-contain rounded"
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
