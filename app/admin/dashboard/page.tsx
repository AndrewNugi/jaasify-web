"use client"

import React, { useState, useEffect } from "react";
import { getDocs, collection, updateDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import LeadDetailsModal from '../../components/LeadsDialog';
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/images/Jaasify.png";
import {
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlinePhone,
} from "react-icons/hi2";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { auth } from "../../firebaseConfig";
import { motion, AnimatePresence } from "framer-motion";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Admin() {
    // const [user] = useAuthState(auth)
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    // const [session, setSession] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoading(false);
            } else {
                router.push("/");
            }
        });
        return () => unsubscribe();
    }, [router]);

    async function signOutUser() {
        if (auth) {
            await signOut(auth);
            router.push("/")
        }
    }

    async function getLeads() {
        try {
            const q = query(
                collection(db, "leads"),
                orderBy("timestamp", "desc") // 👈 sort by timestamp descending
            );
            const querySnapshot = await getDocs(q);
            const leads: any[] = [];
            querySnapshot.forEach((doc) => {
                leads.push({ id: doc.id, ...doc.data() });
            })
            return leads;
        } catch (e) {
            console.error("Error getting documents: ", e);
            return [];
        }
    }

    useEffect(() => {
        // Only run on client side
        if (typeof window !== "undefined") {
            const handleScroll = () => {
                setScrolled(window.scrollY > 10);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // useEffect(() => {
    //     const stored = sessionStorage.getItem("adminAuth");
    //     setSession(stored);
    // }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // useEffect(() => {
    //     if (!user && !session) {
    //         router.push("/admin");
    //     }
    // }, [user, router]);

    const [leads, setLeads] = useState<any[]>([])
    const [selectedLead, setSelectedLead] = useState<any>(null);

    useEffect(() => {
        async function fetchLeads() {
            const leadsData = await getLeads();
            setLeads(leadsData);
        }
        fetchLeads();
    }, []);




    const contactedCount = leads.filter((lead) => lead.status === "contacted").length;

    const toggleContactedStatus = async (lead: { id: string; name: string; status: string }, event: any) => {
        event.stopPropagation(); // Prevent row click from opening modal

        const newStatus = lead.status === "contacted" ? "not_contacted" : "contacted";

        try {
            // Update Firestore
            const leadRef = doc(db, "leads", lead.id);
            await updateDoc(leadRef, {
                status: newStatus,
                updatedAt: new Date(),
            });

            // Update local state
            setLeads(prevLeads =>
                prevLeads.map(l =>
                    l.id === lead.id ? { ...l, status: newStatus } : l
                )
            );

            console.log(`Status updated for ${lead.name}: ${newStatus}`);
        } catch (error) {
            console.error("Error updating status:", error);
            alert("Failed to update status. Please try again.");
        }
    };

    return (
        <div className="h-full bg-gradient-to-br from-gray-50 to-blue-50 overflow-auto">
            {/* Header Section */}
            {/* <div className="top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1C3461] to-[#33c0e3] text-white py-5 px-8 shadow-lg">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
                        <p className="text-blue-100 text-sm md:text-base">
                            Manage your leads and track conversions
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            signOut(auth);
                            sessionStorage.removeItem("adminAuth");
                        }}
                        className="ml-4 px-5 py-2 rounded-lg bg-white text-[#1C3461] font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-gray-100 transition-all duration-300"
                    >
                        Log out
                    </button>
                </div>
            </div> */}
            {/* Top contact bar */}
            <div className="bg-[#33c0e3] text-white py-3 px-4 sm:px-6 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm space-y-2 sm:space-y-0">
                    <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-4 sm:space-x-6">
                        <span className="flex items-center space-x-2">
                            <HiOutlineEnvelope className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                            <span>info@jaasify.com</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <HiOutlineMapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                            <span>Nairobi, Kenya</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <HiOutlinePhone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                            <span>+254 712 345 678</span>
                        </span>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-purple-300 transition-colors duration-200"
                        >
                            <FaFacebookF className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                        <a
                            href="#"
                            className="hover:text-purple-300 transition-colors duration-200"
                        >
                            <FaTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                        <a
                            href="#"
                            className="hover:text-purple-300 transition-colors duration-200"
                        >
                            <FaLinkedinIn className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="h-full bg-gradient-to-br from-gray-50 to-blue-50 overflow-auto">
                {isLoading ? (
                    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-100 to-blue-100">
                        <div className="flex space-x-2">
                            <span className="h-4 w-4 bg-pink-400 rounded-full animate-bounce"></span>
                            <span className="h-4 w-4 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="h-4 w-4 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.6s]"></span>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Navigation Bar */}
                        <nav
                            className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xs py-2" : "shadow-xs py-2"
                                }`}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                                <div className="flex justify-between items-center h-16">
                                    {/* Logo - Improved alignment */}
                                    <div className="flex items-center flex-shrink-0">
                                        <Image src={logo} alt="Jaasify Logo" className="h-10 w-auto" /> <span className="font-semibold text-3xl text-[#1C3461] italic">Admin</span>
                                    </div>

                                    {/* Desktop Navigation Links */}
                                    <div className="hidden md:flex space-x-1">
                                        <button
                                            onClick={async () => {
                                                await signOutUser();
                                                // sessionStorage.removeItem("adminAuth");
                                            }}
                                            className="p-2 rounded-xl bg-white text-[#1C3461] hover:-translate-y-0.2 hover:border-bottom-[1px] hover:border-[#1C3461] transition-all duration-300 cursor-pointer"
                                        >
                                            Log out
                                        </button>
                                    </div>

                                    {/* Mobile menu button */}
                                    <div className="md:hidden flex items-center">
                                        <button
                                            type="button"
                                            className="text-gray-500 hover:text-gray-900 focus:outline-none p-2 rounded-md"
                                            aria-controls="mobile-menu"
                                            aria-expanded={isMobileMenuOpen ? "true" : "false"}
                                            onClick={toggleMobileMenu}
                                        >
                                            <span className="sr-only">Open main menu</span>
                                            {isMobileMenuOpen ? (
                                                <FiX className="h-6 w-6" />
                                            ) : (
                                                <FiMenu className="h-6 w-6" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile menu - now absolutely positioned */}
                            <AnimatePresence>
                                {isMobileMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg z-50 relative"
                                        style={{ willChange: "transform, opacity" }}
                                    >
                                        <div>
                                            <button
                                                onClick={() => {
                                                    signOutUser();
                                                    router.push("/");
                                                }}
                                                className="px-4 py-2 absolute right-4 top-[-10px] rounded-lg bg-white text-[#1C3461] shadow-md text-sm font-medium 
                                           hover:bg-[#1C3461] hover:text-white hover:scale-105 transition-all duration-300"
                                            >
                                                Log out
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </nav>

                        {/* Main Content */}
                        <div className="max-w-7xl mx-auto px-6 py-8">
                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-white mr-4">
                                            <span className="text-xl">👥</span>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-[#1C3461]">{leads.length}</p>
                                            <p className="text-gray-600 font-medium">Total Leads</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-white mr-4">
                                            <span className="text-xl">📞</span>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-[#1C3461]">{contactedCount}</p>
                                            <p className="text-gray-600 font-medium">Contacted</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Leads Table */}
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                                <div className="bg-[#1C3461] text-white px-6 py-4 rounded-t-xl">
                                    <h2 className="text-xl font-bold">Enquiries</h2>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="py-4 px-6 text-left text-sm font-bold text-[#1C3461] uppercase tracking-wider">Name</th>
                                                <th className="py-4 px-6 text-left text-sm font-bold text-[#1C3461] uppercase tracking-wider">Email</th>
                                                <th className="py-4 px-6 text-left text-sm font-bold text-[#1C3461] uppercase tracking-wider">Mobile</th>
                                                <th className="py-4 px-6 text-left text-sm font-bold text-[#1C3461] uppercase tracking-wider">Country</th>
                                                <th className="py-4 px-6 text-left text-sm font-bold text-[#1C3461] uppercase tracking-wider">Enquiry</th>
                                                <th className="py-4 px-6 text-left text-sm font-bold text-[#1C3461] uppercase tracking-wider">Date</th>
                                                <th className="py-4 px-6 text-left text-sm font-bold text-[#1C3461] uppercase tracking-wider">Contacted</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {leads.map((lead) => (
                                                <tr
                                                    key={lead.id}
                                                    onClick={() => setSelectedLead(lead)}
                                                >
                                                    <td className="py-4 px-6">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 bg-[#1C3461] to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                                                {lead.name.charAt(0).toUpperCase()}
                                                            </div>
                                                            <span className="font-semibold text-gray-900">{lead.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-gray-700 font-medium">{lead.email}</td>
                                                    <td className="py-4 px-6 text-gray-700 font-medium">{lead.mobile}</td>
                                                    <td className="py-4 px-6">
                                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                            {lead.country}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <div className="max-w-xs truncate text-gray-600">
                                                            {/* {lead.message} */}
                                                            <button
                                                                onClick={() => setSelectedLead(lead)}
                                                                className="px-4 py-2 bg-white text-[#1C3461] text-sm font-small rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 cursor-pointer hover:scale-[1.01]"
                                                            >
                                                                View📝
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-gray-500 text-sm font-medium">
                                                        {new Date(lead.timestamp.seconds * 1000).toLocaleDateString()}
                                                    </td>
                                                    {/* <td className="py-4 px-4">
                                            <span
                                                className="block w-full text-center py-1 rounded-full text-sm"
                                            >
                                                {lead.status === "contacted" ? "✅" : "❌"}
                                            </span>
                                        </td> */}
                                                    <td className="py-4 px-4">
                                                        <button
                                                            onClick={(e) => toggleContactedStatus(lead, e)}
                                                            className="block w-full text-center py-1 rounded-full text-sm cursor-pointer"
                                                        // title={`Click to mark as ${lead.status === "contacted" ? "not contacted" : "contacted"}`}
                                                        >
                                                            <span className="text-lg">
                                                                {lead.status === "contacted" ? "✅" : "❌"}
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {leads.length === 0 && (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-2xl text-gray-400">📭</span>
                                        </div>
                                        <p className="text-gray-500 font-medium">No leads found</p>
                                        <p className="text-gray-400 text-sm">New leads will appear here when submitted</p>
                                    </div>
                                )}
                            </div>

                            {/* Lead Details Modal */}
                            <LeadDetailsModal
                                lead={selectedLead}
                                isOpen={selectedLead !== null}
                                onClose={() => setSelectedLead(null)}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}