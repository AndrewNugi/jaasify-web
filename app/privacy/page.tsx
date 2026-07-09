"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#39BFE1] mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1C3462] leading-tight">Privacy Policy</h1>
          <p className="mt-4 text-gray-500 text-sm">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-gray prose-sm">
          <p>
            At JaaSify, accessible from <Link href="/" className="text-[#39BFE1] hover:underline">https://jaasify.com</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by JaaSify and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to <Link href="/contact" className="text-[#39BFE1] hover:underline">contact us</Link>.
          </p>
          <p>
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in JaaSify. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>

          <h2 className="text-xl font-bold text-[#1C3462] mt-10 mb-4">Consent</h2>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

          <h2 className="text-xl font-bold text-[#1C3462] mt-10 mb-4">Information we collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
          <p>
            When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
          </p>

          <h2 className="text-xl font-bold text-[#1C3462] mt-10 mb-4">How we use your information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, including for customer service, updates, and marketing purposes</li>
            <li>Send you emails</li>
            <li>Find and prevent fraud</li>
          </ul>

         

          <h2 className="text-xl font-bold text-[#1C3462] mt-10 mb-4">Cookies and Web Beacons</h2>
          <p>
            Like any other website, JaaSify uses &ldquo;cookies&rdquo;. These cookies are used to store information including visitors&rsquo; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&rsquo; experience by customizing our web page content based on visitors&rsquo; browser type and/or other information.
          </p>

          <h2 className="text-xl font-bold text-[#1C3462] mt-10 mb-4">CCPA Privacy Rights</h2>
          <p>Under the CCPA, among other rights, California consumers have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>Request that a business discloses the categories and specific pieces of personal data collected about consumers.</li>
            <li>Request that a business deletes any personal data about the consumer that it has collected.</li>
            <li>Request that a business that sells a consumer&rsquo;s personal data, not sell the consumer&rsquo;s personal data.</li>
          </ul>
          <p className="mt-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

          <h2 className="text-xl font-bold text-[#1C3462] mt-10 mb-4">GDPR Data Protection Rights</h2>
          <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>The right to access &mdash; You have the right to request copies of your personal data.</li>
            <li>The right to rectification &mdash; You have the right to request that we correct any information you believe is inaccurate.</li>
            <li>The right to erasure &mdash; You have the right to request that we erase your personal data, under certain conditions.</li>
            <li>The right to restrict processing &mdash; You have the right to request that we restrict the processing of your personal data.</li>
            <li>The right to object to processing &mdash; You have the right to object to our processing of your personal data.</li>
            <li>The right to data portability &mdash; You have the right to request that we transfer the data we have collected to another organization.</li>
          </ul>
          <p className="mt-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

          <h2 className="text-xl font-bold text-[#1C3462] mt-10 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:info@jaasify.com" className="text-[#39BFE1] hover:underline">info@jaasify.com</a>.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/" className="text-sm text-gray-400 hover:text-[#39BFE1] transition-colors">&larr; Back to home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
