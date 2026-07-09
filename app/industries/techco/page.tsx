"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

const challenges = [
  { title: "Scaling Infrastructure", desc: "Your user base is growing fast. Can your architecture handle 10x the traffic without crumbling?" },
  { title: "Team Expansion", desc: "Hiring is hard. Keeping velocity while growing the team is harder. We help you scale engineering culture." },
  { title: "Security & Compliance", desc: "Customers and regulators demand enterprise-grade security. We embed it into your pipeline." },
  { title: "Performance Optimization", desc: "Slow products lose users. We help you measure, profile, and optimize at every layer." },
];

const process = [
  { step: "01", title: "Tell Us Your Story", desc: "We learn about your product, your team, and your constraints." },
  { step: "02", title: "Architect Together", desc: "We design a solution that fits your stack, timeline, and budget." },
  { step: "03", title: "Build & Scale", desc: "Our engineers work alongside your team to ship production-grade code." },
  { step: "04", title: "Grow with Confidence", desc: "We hand over knowledge, documentation, and runbooks so you own the outcome." },
];

const services = [
  { title: "Cloud Infrastructure", desc: "AWS, Azure, GCP — architecture, migration, and cost optimization." },
  { title: "DevOps & SRE", desc: "CI/CD pipelines, monitoring, incident response, and platform reliability." },
  { title: "SaaS Platform Development", desc: "Multi-tenant architectures, billing integration, and API design." },
  { title: "Data Engineering", desc: "Data pipelines, warehouses, real-time analytics, and ML infrastructure." },
  { title: "Data Migration", desc: "Move from legacy systems to modern infrastructure with zero downtime." },
];

export default function TechCoPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#1C3462] to-[#0f1f3d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,191,225,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(57,191,225,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">TechCo</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Built for Tech Companies,
                <br />
                <span className="text-[#39BFE1]">by Tech People</span>
              </h1>
              <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
                You focus on product and customers. We handle the complex engineering challenges — infrastructure, scale, security, and delivery.
              </p>
              <div className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8">
                {["10+ years expertise", "Proven SaaS scaling", "Cloud-native", "Security-first", "Flexible engagement"].map((tag) => (
                  <span key={tag} className="px-4 py-2 border border-white/10 text-sm text-white/60">{tag}</span>
                ))}
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/software-engineering.jpg"
                alt="Software engineering for tech companies"
                width={600}
                height={500}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C3462]/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">The Challenges</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">What tech companies struggle with.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="border border-gray-200 p-6">
                <h3 className="font-bold text-[#1C3462] mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">A process that ships.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white border border-gray-200 p-6">
                <span className="text-[#39BFE1] text-2xl font-mono">{p.step}</span>
                <h3 className="font-bold text-[#1C3462] mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Service Areas</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C3462] leading-tight">What we deliver.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="border border-gray-200 p-6 hover:border-[#39BFE1] transition-all">
                <h3 className="font-bold text-[#1C3462] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1C3462] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mx-auto">Ready to build something amazing?</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">Let&apos;s talk about your engineering challenges.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#39BFE1] text-[#1C3462] px-6 py-3 text-sm font-bold hover:bg-[#39BFE1]/90 transition-colors">
              Start the conversation <ArrowRight size={14} />
            </Link>
            <Link href="/industries" className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-6 py-3 text-sm font-medium hover:border-white/50 transition-colors">
              <ArrowLeft size={14} /> All industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
