"use client";

import React, { useState } from "react";
import countryCodes from "../../CountryCodes.json";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

async function addLeads(
  name: string,
  email: string,
  selectedCode: string,
  mobile: string,
  country: string,
  message: string,
  status: string
) {
  try {
    const docRef = await addDoc(collection(db, "leads"), {
      name,
      email,
      selectedCode,
      mobile,
      country,
      message,
      status,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCode, setSelectedCode] = useState("+254");
  const [country, setCountry] = useState("Kenya");
  const [status] = useState("not_contacted");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const countWords = (text: string) => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = `${firstName} ${lastName}`.trim();
    const messageWordCount = countWords(message);

    if (!name || !email || !mobile || !message) {
      setSuccessMsg("");
      setErrorMsg("Please fill in all required fields.");
      setTimeout(() => setErrorMsg(""), 5000);
      return;
    }

    if (messageWordCount > 100) {
      setSuccessMsg("");
      setErrorMsg("Please limit your message to 100 words or less.");
      setTimeout(() => setErrorMsg(""), 5000);
      return;
    }

    const success = await addLeads(
      name,
      email,
      selectedCode,
      mobile,
      country,
      message,
      status
    );
    if (success) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setMessage("");
      setErrorMsg("");
      setSuccessMsg(
        "Thank you for contacting us. We will get back to you soon!"
      );
      setTimeout(() => setSuccessMsg(""), 5000);
    } else {
      setSuccessMsg("");
      setErrorMsg("There was an error submitting the form. Please try again.");
      setTimeout(() => setErrorMsg(""), 5000);
    }
  };

  return (
    <div>
      {successMsg && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6">
          <p className="text-sm text-green-800">{successMsg}</p>
        </div>
      )}
      {errorMsg && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p className="text-sm text-red-800">{errorMsg}</p>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39BFE1] focus:border-transparent text-sm"
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39BFE1] focus:border-transparent text-sm"
          />
        </div>

        <input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39BFE1] focus:border-transparent text-sm"
        />

        <div className="space-y-3">
          <select
            value={selectedCode}
            onChange={(e) => {
              const dialCode = e.target.value;
              const countryObj = countryCodes.find(
                (c: { dial_code: string }) => c.dial_code === dialCode
              );
              setSelectedCode(dialCode);
              setCountry((countryObj as { name: string })?.name ?? "");
            }}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#39BFE1] focus:border-transparent text-sm"
          >
            {countryCodes.map((c: { code: string; name: string; dial_code: string }) => (
              <option key={c.code} value={c.dial_code}>
                {c.name} ({c.dial_code})
              </option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39BFE1] focus:border-transparent text-sm"
          />
        </div>

        <textarea
          placeholder="Tell us about your project..."
          value={message}
          rows={4}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#39BFE1] focus:border-transparent resize-none text-sm"
        />

        <button
          type="submit"
          className="w-full bg-[#1C3462] text-white font-medium py-3 px-6 text-sm hover:bg-[#1C3462]/90 transition-colors"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
