import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Devanshu Raut",
  description: "Contact Devanshu Raut for internships, collaborations, and projects.",
};

export default function ContactPage() {
  return (
    <div className="page-shell contact-page">
      <ContactSection expanded />
    </div>
  );
}
