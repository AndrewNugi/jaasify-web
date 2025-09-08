"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import countryCodes from "../../CountryCodes.json";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

async function addLeads(name: string, email: string, selectedCode: string, mobile: string, country: string, message: string, status: string) {
    try {
        const docRef = await addDoc(collection(db, "leads"), {
            name,
            email,
            selectedCode,
            mobile,
            country,
            message,
            status,
            timestamp: new Date()
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
    const [selectedCode, setSelectedCode] = useState("+254"); // Default to Kenya country code 
    const [country, setCountry] = useState("Kenya");
    const [status] = useState("not_contacted");
    const [upstreamServerSuccessMsg, setUpstreamServerSuccessMsg] = useState("");
    const [upstreamServerErrorMsg, setUpstreamServerErrorMsg] = useState("");

    const countWords = (text: string) => {
        return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const name = `${firstName} ${lastName}`.trim();
        const messageWordCount = countWords(message);

        if (!name || !email || !mobile || !message) {
            setUpstreamServerSuccessMsg("")
            setUpstreamServerErrorMsg("Please fill in all required fields.");
            setTimeout(() => {
                setUpstreamServerErrorMsg("");
            }, 5000);
            return;
        }

        if (messageWordCount > 100) {
            setUpstreamServerSuccessMsg("")
            setUpstreamServerErrorMsg("Please limit your message to 100 words or less.");
            setTimeout(() => {
                setUpstreamServerErrorMsg("");
            }, 5000);
            return;
        }

        const success = await addLeads(name, email, selectedCode, mobile, country, message, status);
        if (success) {
            setFirstName("");
            setLastName("");
            setEmail("");
            setMobile("");
            setMessage("");
            setUpstreamServerErrorMsg("")
            setUpstreamServerSuccessMsg("Thank you for contacting us. We will get back to you soon!");

            setTimeout(() => {
                setUpstreamServerErrorMsg("");
            }, 5000);
        } else {
            setUpstreamServerSuccessMsg("")
            setUpstreamServerErrorMsg("There was an error submitting the form. Please try again.");

            setTimeout(() => {
                setUpstreamServerErrorMsg("");
            }, 5000);
        }
    }

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
                    <div className="p-4 m-2 bg-green-50 border border-green-200 rounded-md">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <i className="fa fa-check-circle text-green-500 text-xl"></i>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-green-700">{upstreamServerSuccessMsg}</p>
                            </div>
                        </div>
                    </div>
                )}

                {upstreamServerErrorMsg && (
                    <div className="p-4 m-2 bg-red-50 border border-red-200 rounded-md">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <i className="fa fa-exclamation-circle text-red-500 text-xl"></i>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">{upstreamServerErrorMsg}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                        />
                    </div>
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    />
                </div>

                <div>
                    {/* Country code dropdown */}
                    <select
                        value={selectedCode}
                        onChange={(e) => {
                            const dialCode = e.target.value;
                            const countryObj = countryCodes.find(c => c.dial_code === dialCode);
                            setSelectedCode(dialCode);
                            setCountry(countryObj?.name ?? '');
                        }}
                        id="countryCode"
                        className="w-full mb-2 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    >
                        {countryCodes.map((country) => (
                            <option
                                key={country.code}
                                value={country.dial_code}
                                className="text-black"
                            >
                                {country.name} ({country.dial_code})
                            </option>
                        ))}
                    </select>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                    />
                </div>

                <div>
                    <textarea
                        placeholder="Enquiry"
                        id="message"
                        value={message}
                        rows={4}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
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
                    Send Message
                </motion.button>
            </form>
        </motion.div>
    );
}