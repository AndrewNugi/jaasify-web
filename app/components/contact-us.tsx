"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
  const [upstreamServerSuccessMsg, setUpstreamServerSuccessMsg] = useState("");
  const [upstreamServerErrorMsg, setUpstreamServerErrorMsg] = useState("");

  const countWords = (text: string) => {
    return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = `${firstName} ${lastName}`.trim();
    const messageWordCount = countWords(message);

    if (!name || !email || !mobile || !message) {
      setUpstreamServerSuccessMsg("");
      setUpstreamServerErrorMsg("Please fill in all required fields.");
      setTimeout(() => {
        setUpstreamServerErrorMsg("");
      }, 5000);
      return;
    }

    if (messageWordCount > 100) {
      setUpstreamServerSuccessMsg("");
      setUpstreamServerErrorMsg(
        "Please limit your message to 100 words or less."
      );
      setTimeout(() => {
        setUpstreamServerErrorMsg("");
      }, 5000);
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
      setUpstreamServerErrorMsg("");
      setUpstreamServerSuccessMsg(
        "Thank you for contacting us. We will get back to you soon!"
      );

      setTimeout(() => {
        setUpstreamServerSuccessMsg("");
      }, 5000);
    } else {
      setUpstreamServerSuccessMsg("");
      setUpstreamServerErrorMsg(
        "There was an error submitting the form. Please try again."
      );

      setTimeout(() => {
        setUpstreamServerErrorMsg("");
      }, 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
    >
      <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>

      <div className="space-y-2">
        {upstreamServerSuccessMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-400/30 rounded-lg"
          >
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-green-300 mt-0.5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-green-100">
                {upstreamServerSuccessMsg}
              </p>
            </div>
          </motion.div>
        )}

        {upstreamServerErrorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/20 border border-red-400/30 rounded-lg"
          >
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-red-300 mt-0.5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-red-100">{upstreamServerErrorMsg}</p>
            </div>
          </motion.div>
        )}
      </div>

      <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="First name"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last name"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            placeholder="you@company.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-2">
          <select
            value={selectedCode}
            onChange={(e) => {
              const dialCode = e.target.value;
              const countryObj = countryCodes.find(
                (c) => c.dial_code === dialCode
              );
              setSelectedCode(dialCode);
              setCountry(countryObj?.name ?? "");
            }}
            id="countryCode"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
          >
            {countryCodes.map((country) => (
              <option
                key={country.code}
                value={country.dial_code}
                className="bg-gray-800 text-white"
              >
                {country.name} ({country.dial_code})
              </option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <textarea
            placeholder="Leave us a message..."
            id="message"
            value={message}
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-200/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none transition-all"
          ></textarea>
        </div>

        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)",
            cursor: "pointer",
          }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-purple-50 transition-all duration-300"
        >
          Send message
        </motion.button>
      </form>
    </motion.div>
  );
}
