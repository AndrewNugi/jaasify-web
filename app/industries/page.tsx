"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { FaUniversity, FaShieldAlt, FaHandsHelping, FaLaptopCode, FaHotel, FaBolt } from "react-icons/fa";

const industries = [
  { id: "banking", title: "Banking", icon: FaUniversity, desc: "Secure, scalable digital solutions that enhance customer experience and operational efficiency." },
  { id: "insurance", title: "Insurance", icon: FaShieldAlt, desc: "Intelligent automation, data-driven underwriting, and seamless claims management." },
  { id: "saccos", title: "SACCOs", icon: FaHandsHelping, desc: "Modern financial technology that streamlines operations and drives member growth." },
  { id: "techco", title: "TechCo", icon: FaLaptopCode, desc: "Tailored technology solutions that scale with your growth and accelerate innovation." },
  { id: "hospitality", title: "Hospitality", icon: FaHotel, desc: "Cutting-edge technology that elevates guest experiences and drives revenue." },
  { id: "utilities", title: "Utilities", icon: FaBolt, desc: "Smarter infrastructure through IoT, automation, and data-driven management." },
  { id: "cyber-security", title: "Cyber Security", icon: Shield, desc: "Security programs that protect your critical assets without slowing you down." },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">
              § 03 — Industries
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1C3462] leading-tight">
              Industries we
              <br />
              <span className="text-[#39BFE1]">serve.</span>
            </h1>
            <p className="mt-4 text-gray-500 max-w-lg leading-relaxed">
              We deliver tailored technology solutions across diverse industries,
              helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.id}
                  href={`/industries/${ind.id}`}
                  className="group border border-gray-200 p-8 hover:border-[#39BFE1] hover:shadow-sm transition-all"
                >
                  <div className="p-2 bg-[#39BFE1]/10 rounded-lg w-fit mb-5 text-[#39BFE1] group-hover:bg-[#39BFE1] group-hover:text-white transition-all">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1C3462] mb-2 group-hover:text-[#39BFE1] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#39BFE1] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
