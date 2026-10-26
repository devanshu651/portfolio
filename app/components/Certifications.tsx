"use client";

import React, { useState, useEffect, useMemo } from "react";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  period: string;
  details?: string;
  file: string;
  category: "simulations" | "internships" | "training" | "certifications";
  categoryLabel: string;
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    simulations: true,
    internships: true,
    training: true,
    certifications: true,
  });

  // Modal ESC listener
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

  // Complete, unaltered inventory of all 21 certificates
  const allCertificates: Certificate[] = useMemo(
    () => [
      // 1. Simulations
      {
        id: "SIM-01",
        title: "Solutions Architecture Job Simulation",
        issuer: "AWS (via Forage)",
        period: "September 2025",
        file: "/certificates/AWS.jpg",
        category: "simulations",
        categoryLabel: "Industry Job Simulations",
      },
      {
        id: "SIM-02",
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte (via Forage)",
        period: "August 2025",
        file: "/certificates/DATAANLAYAST.jpg",
        category: "simulations",
        categoryLabel: "Industry Job Simulations",
      },
      {
        id: "SIM-03",
        title: "GenAI Powered Data Analytics Job Simulation",
        issuer: "Tata Group (via Forage)",
        period: "August 2025",
        file: "/certificates/GENAI.jpg",
        category: "simulations",
        categoryLabel: "Industry Job Simulations",
      },
      {
        id: "SIM-04",
        title: "Software Engineering Job Simulation",
        issuer: "Hewlett Packard Enterprise (via Forage)",
        period: "October 2025",
        file: "/certificates/HEP.jpg",
        category: "simulations",
        categoryLabel: "Industry Job Simulations",
      },

      // 2. Virtual Internships
      {
        id: "INT-01",
        title: "Employability Skill Job Ready Virtual Internship",
        issuer: "EduSkills Academy (Supported by Wadhwani Foundation)",
        period: "October–December 2025",
        details: "10-week program",
        file: "/certificates/employeebilityskill.jpg",
        category: "internships",
        categoryLabel: "Virtual Internships",
      },
      {
        id: "INT-02",
        title: "Java Full Stack Development With Project — Virtual Internship",
        issuer: "EduSkills Academy",
        period: "April–June 2026",
        details: "8-week program",
        file: "/certificates/javafullstack.jpg",
        category: "internships",
        categoryLabel: "Virtual Internships",
      },
      {
        id: "INT-03",
        title: "Prompt Engineering for AI Virtual Internship",
        issuer: "EduSkills Academy",
        period: "",
        details: "Virtual Internship",
        file: "/certificates/Prompt Engineering for AI Virtual Internship.pdf",
        category: "internships",
        categoryLabel: "Virtual Internships",
      },
      {
        id: "INT-04",
        title: "Python Full Stack Development With Project Virtual Internship",
        issuer: "EduSkills Academy",
        period: "",
        details: "Virtual Internship",
        file: "/certificates/Python Full Stack Development With Project Virtual Internship.pdf",
        category: "internships",
        categoryLabel: "Virtual Internships",
      },

      // 3. Technical Training
      {
        id: "TRN-01",
        title: "Java Training",
        issuer: "IIT Bombay (EduPyramids, SINE)",
        period: "June 2026",
        details: "Score: 95%, Credits: 4, Credential ID: 4779071I9Y",
        file: "/certificates/java-traning.jpg",
        category: "training",
        categoryLabel: "Technical Training",
      },
      {
        id: "TRN-02",
        title: "Cybersecurity Awareness Quiz",
        issuer: "National Cybersecurity Initiative",
        period: "",
        details: "Participant Certificate",
        file: "/certificates/DEVANSHU-RAUT-Participant-Certificate.pdf",
        category: "training",
        categoryLabel: "Technical Training",
      },
      {
        id: "TRN-03",
        title: "R Programming Bootcamp for Absolute Beginners (2025)",
        issuer: "Udemy",
        period: "2025",
        details: "Bootcamp Certificate",
        file: "/certificates/R-PROGRAMING.jpg",
        category: "training",
        categoryLabel: "Technical Training",
      },

      // 4. Professional Certifications & Online Badges
      {
        id: "CRT-01",
        title: "Introduction to MS Excel",
        issuer: "Microsoft",
        period: "August 2025",
        file: "/certificates/ms-EXCEL.jpg",
        category: "certifications",
        categoryLabel: "Professional Certifications",
      },
      {
        id: "CRT-02",
        title: "AI Skills Passport",
        issuer: "EY & Microsoft",
        period: "",
        file: "/certificates/MS-AIskill.jpg",
        category: "certifications",
        categoryLabel: "Professional Certifications",
      },
      {
        id: "CRT-03",
        title: "Data Analytics — Certificate of Achievement",
        issuer: "OneRoadmap",
        period: "",
        file: "/certificates/Oneroad.jpg",
        category: "certifications",
        categoryLabel: "Professional Certifications",
      },
      {
        id: "CRT-04",
        title: "Supply Chain Operations Academy (S.C.O.A) — Data Entry",
        issuer: "Flipkart",
        period: "",
        file: "/certificates/FLIPCARD.jpg",
        category: "certifications",
        categoryLabel: "Professional Certifications",
      },
      {
        id: "CRT-05",
        title: "Acquiring Data",
        issuer: "Technical Data Foundation",
        period: "",
        file: "/certificates/Acquringdata.jpg",
        category: "certifications",
        categoryLabel: "Professional Certifications",
      },
      {
        id: "CRT-06",
        title: "Microsoft Learn Achievement (wv26jqtn)",
        issuer: "Microsoft Learn",
        period: "",
        details: "Online Badge",
        file: "https://learn.microsoft.com/en-us/users/devanshuraut-2185/achievements/wv26jqtn?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        category: "certifications",
        categoryLabel: "Professional Certifications",
      },
      {
        id: "CRT-07",
        title: "Microsoft Learn Achievement (9rytp8wu)",
        issuer: "Microsoft Learn",
        period: "",
        details: "Online Badge",
        file: "https://learn.microsoft.com/en-us/users/devanshuraut-2185/achievements/9rytp8wu?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        category: "certifications",
        categoryLabel: "Professional Certifications",
      },
      {
        id: "CRT-08",
        title: "Microsoft Learn Achievement (wv26jqtn) - 2",
        issuer: "Microsoft Learn",
        period: "",
        details: "Online Badge",
        file: "https://learn.microsoft.com/en-us/users/devanshuraut-2185/achievements/wv26jqtn?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        category: "certifications",
        categoryLabel: "Professional Certifications",
      },
      {
        id: "CRT-09",
        title: "Microsoft Learn Achievement (wv26jqtn) - 3",
        issuer: "Microsoft Learn",
        period: "",
        details: "Online Badge",
        file: "https://learn.microsoft.com/en-us/users/devanshuraut-2185/achievements/wv26jqtn?ref=https%3A%2F%2Fwww.linkedin.com%2F",
        category: "certifications",
        categoryLabel: "Professional Certifications",
      },
      {
        id: "CRT-10",
        title: "AI Attendee",
        issuer: "Global AI Community",
        period: "",
        details: "Online Badge",
        file: "https://globalai.community/badges/1c9afae3-7e6c-4b7b-9c1a-b35ad269355c/",
        category: "certifications",
        categoryLabel: "Professional Certifications",
      },
    ],
    []
  );

  // Filtered certificates based on search query and active tab
  const filteredCerts = useMemo(() => {
    return allCertificates.filter((cert) => {
      const matchesTab = activeTab === "all" || cert.category === activeTab;
      if (!matchesTab) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.id.toLowerCase().includes(q) ||
        (cert.details && cert.details.toLowerCase().includes(q)) ||
        (cert.period && cert.period.toLowerCase().includes(q))
      );
    });
  }, [allCertificates, searchQuery, activeTab]);

  // Group filtered results by category
  const categoriesGrouped = useMemo(() => {
    const groups: { key: string; label: string; items: Certificate[] }[] = [
      { key: "simulations", label: "Industry Job Simulations", items: [] },
      { key: "internships", label: "Virtual Internships", items: [] },
      { key: "training", label: "Technical Training & Academics", items: [] },
      { key: "certifications", label: "Professional Certifications & Badges", items: [] },
    ];

    filteredCerts.forEach((cert) => {
      const g = groups.find((grp) => grp.key === cert.category);
      if (g) g.items.push(cert);
    });

    return groups.filter((g) => g.items.length > 0);
  }, [filteredCerts]);

  const toggleCategory = (key: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-36 border-t border-[var(--ink)]/15"
    >
      {/* Section Header */}
      <div className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] block mb-2">
            § 06 / CREDENTIALS &amp; INDUSTRY SIMULATIONS
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight text-[var(--ink)] font-normal leading-[0.95]">
            Certifications
          </h2>
        </div>
        <div className="font-mono text-xs text-[var(--muted)] uppercase space-y-1 text-left md:text-right">
          <p className="text-[var(--ink)]">21 VERIFIED RECORDS</p>
          <p>SEARCHABLE ACCORDION ARCHIVE</p>
        </div>
      </div>

      {/* FILTER & SEARCH CONTROL BAR */}
      <div className="mb-10 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Filter credentials by name, issuer, or ID (e.g. "AWS", "IIT", "Deloitte", "4779071I9Y")...'
            className="w-full bg-[var(--paper)] border border-[var(--ink)]/20 px-4 py-3.5 pl-10 font-mono text-xs sm:text-sm text-[var(--ink)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-xs text-[var(--muted)]">
            ⌕
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 font-mono text-xs text-[var(--muted)] hover:text-[var(--accent)]"
            >
              CLEAR ✕
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider">
          {[
            { id: "all", label: `ALL (${allCertificates.length})` },
            { id: "simulations", label: "SIMULATIONS (4)" },
            { id: "internships", label: "INTERNSHIPS (4)" },
            { id: "training", label: "TRAINING (3)" },
            { id: "certifications", label: "CERTS (10)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 border transition-colors ${
                activeTab === tab.id
                  ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                  : "border-[var(--ink)]/15 text-[var(--muted)] hover:border-[var(--ink)]/40 hover:text-[var(--ink)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ACCORDION / GROUPED TABLE */}
      {categoriesGrouped.length > 0 ? (
        <div className="space-y-6">
          {categoriesGrouped.map((grp) => {
            const isExpanded = expandedCategories[grp.key] !== false;

            return (
              <div
                key={grp.key}
                className="border border-[var(--ink)]/15 bg-[var(--paper)] overflow-hidden"
              >
                {/* Category Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(grp.key)}
                  className="w-full flex items-center justify-between p-5 md:p-6 bg-[var(--ink)]/[0.02] hover:bg-[var(--ink)]/[0.05] transition-colors border-b border-[var(--ink)]/10 text-left font-mono"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent)] font-semibold text-xs">§</span>
                    <span className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-normal">
                      {grp.label}
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)] ml-2">
                      [{grp.items.length}]
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[var(--muted)]">
                    {isExpanded ? "COLLAPSE ▲" : "EXPAND ▼"}
                  </span>
                </button>

                {/* Table Rows */}
                {isExpanded && (
                  <div className="divide-y divide-[var(--ink)]/10">
                    {grp.items.map((cert) => (
                      <div
                        key={cert.id + cert.title}
                        className="p-5 md:p-6 hover:bg-[var(--ink)]/[0.02] transition-colors group flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                      >
                        {/* Title and Metadata */}
                        <div className="space-y-1.5 max-w-3xl">
                          <div className="flex items-center gap-3 font-mono text-[11px] uppercase text-[var(--muted)]">
                            <span className="text-[var(--accent)] font-semibold">{cert.id}</span>
                            {cert.issuer && <span>{cert.issuer}</span>}
                            {cert.period && <span>· {cert.period}</span>}
                          </div>

                          <h4 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-normal group-hover:text-[var(--accent)] transition-colors link-sweep inline-block">
                            {cert.title}
                          </h4>

                          {cert.details && (
                            <p className="font-mono text-xs text-[var(--muted)]">
                              ↳ {cert.details}
                            </p>
                          )}
                        </div>

                        {/* Action Button */}
                        <button
                          onClick={() => {
                            if (cert.file.startsWith("http")) {
                              window.open(cert.file, "_blank", "noopener,noreferrer");
                            } else {
                              setSelectedCert(cert);
                            }
                          }}
                          data-cursor="OPEN ↗"
                          className="shrink-0 inline-flex items-center gap-2 border border-[var(--ink)]/20 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors active:scale-95"
                        >
                          <span>{cert.file.startsWith("http") ? "VERIFY BADGE" : "VIEW ARTIFACT"}</span>
                          <span>↗</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="p-12 text-center border border-[var(--ink)]/15 bg-[var(--paper)] font-mono text-xs text-[var(--muted)] uppercase">
          No credentials found matching &ldquo;{searchQuery}&rdquo;.
        </div>
      )}

      {/* LIGHTBOX MODAL (For viewing certificate images & PDFs) */}
      {selectedCert && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[var(--ink)]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCert(null)}
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-5xl flex flex-col max-h-[92vh] border border-[var(--ink)]/20 bg-[var(--paper)] shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--ink)]/15 bg-[var(--paper)]">
              <div className="space-y-0.5 pr-4">
                <span className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest block">
                  {selectedCert.id} · {selectedCert.categoryLabel}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-normal leading-tight">
                  {selectedCert.title}
                </h3>
                <p className="font-mono text-xs text-[var(--muted)]">
                  {selectedCert.issuer} {selectedCert.period ? `(${selectedCert.period})` : ""}{" "}
                  {selectedCert.details ? `— ${selectedCert.details}` : ""}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="shrink-0 p-2.5 font-mono text-xs uppercase border border-[var(--ink)]/20 text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
                aria-label="Close certificate preview"
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative flex-1 overflow-auto bg-[var(--paper)] flex items-center justify-center p-4 sm:p-8 min-h-[50vh]">
              {selectedCert.file.match(/\.(pdf)$/i) ? (
                <iframe
                  src={selectedCert.file}
                  className="w-full h-[70vh] border border-[var(--ink)]/15 bg-white"
                  title={selectedCert.title}
                />
              ) : (
                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[70vh] object-contain border border-[var(--ink)]/15 shadow-md"
                  loading="lazy"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 border-t border-[var(--ink)]/10 font-mono text-[10px] uppercase text-[var(--muted)] flex justify-between items-center">
              <span>PRESS ESC TO CLOSE</span>
              <a
                href={selectedCert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] hover:text-[var(--accent)] link-sweep"
              >
                OPEN RAW FILE ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
