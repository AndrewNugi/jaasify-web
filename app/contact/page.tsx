"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import ContactForm from "../components/contact-us";

export default function ContactPage() {
  return (
    <>
      {/* ─────── HERO ─────── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">
              § 06 — Contact
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1C3462] leading-tight">
              Have something
              <br />
              serious to build?
            </h1>
            <p className="mt-4 text-gray-500 max-w-lg leading-relaxed">
              Short engagements start around four weeks. Longer retainers by
              conversation. Fill out the form and we&apos;ll get back to you
              within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ─────── FORM + INFO ─────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-sm font-bold text-[#1C3462] mb-3">
                  Email
                </h3>
                <a
                  href="mailto:info@jaasify.com"
                  className="text-[#39BFE1] hover:underline text-sm"
                >
                  info@jaasify.com ↗
                </a>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#1C3462] mb-3">
                  Phone
                </h3>
                <a
                  href="tel:+254713666622"
                  className="text-gray-600 hover:text-[#39BFE1] text-sm"
                >
                  +254 713 666 622
                </a>
              </div>
              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-sm font-bold text-[#1C3462] mb-3">
                  Studio Status
                </h3>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>Availability: Q3 2026</p>
                  <p>Response: &lt; 24 hours</p>
                  <p>Languages: EN · SW</p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-8">
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-[#39BFE1] transition-colors"
                >
                  ← Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
