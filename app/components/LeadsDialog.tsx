"use client"

import React from 'react';

interface Lead {
    id: string;
    name: string;
    email: string;
    mobile: string;
    selectedCode: string;
    country: string;
    message: string;
    status: string;
    timestamp: {
        seconds: number;
    };
}

interface LeadDetailsModalProps {
    lead: Lead;
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadDialog({ lead, isOpen, onClose }: LeadDetailsModalProps) {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // const handleEscapeKey = (e: React.KeyboardEvent) => {
    //     if (e.key === 'Escape') {
    //         onClose();
    //     }
    // };

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-5 "
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden animate-fadeIn scale-95">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-[#1C3461]">
                    <h2 className="text-2xl font-semibold text-white pl-2">Lead Details</h2>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white text-3xl font-bold transition-colors"
                    >
                        ×
                    </button>
                </div>

                <div className="overflow-y-scroll">
                    {/* Modal Content */}
                    <div className="flex flex-col md:flex-row h-[calc(90vh-120px)]">
                        {/* Left Panel - Contact Information */}
                        <div className="md:w-1/2 py-4 px-6 bg-white to-white">
                            <h3 className="text-lg font-semibold text-[#1C3461] mb-4 flex items-center">
                                <span className="w-2 h-2 bg-[#33c0e3] rounded-full mr-2"></span>
                                Contact Information
                            </h3>

                            <div className="space-y-5">
                                {[
                                    ["Name", lead.name],
                                    ["Email", (
                                        <a
                                            href={`mailto:${lead.email}`}
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            {lead.email}
                                        </a>
                                    )],
                                    ["Country Code", (
                                        <a
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            {lead.selectedCode}
                                        </a>
                                    )],
                                    ["Mobile", (
                                        <a
                                            href={`tel:${lead.mobile}`}
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            {lead.mobile}
                                        </a>
                                    )],
                                    ["Country", lead.country],
                                    ["Submitted", new Date(lead.timestamp.seconds * 1000).toLocaleString()],
                                ].map(([label, value], index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-medium text-gray-500">{label}</label>
                                        <p className="text-base text-gray-900">{value}</p>
                                    </div>
                                ))}

                                {/* Status Badge */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-500">Status</label>
                                    <span
                                        className={`mt-1 inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold 
                                            ${lead.status === "contacted" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                                    >
                                        {lead.status === "contacted" ? "Contacted" : "Not Contacted"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel - Enquiry Details */}
                        <div className="lg:w-3/4 p-4 bg-white">
                            <h3 className="text-lg font-semibold text-[#1C3461] mb-6 flex items-center">
                                <span className="w-2 h-2 bg-[#33c0e3] rounded-full mr-2"></span>
                                Enquiry Details
                            </h3>

                            <div className="space-y-6">
                                {/* Message */}
                                <div className="flex-1 bg-white rounded-lg p-4 w-full sm:min-w-[500px] min-h-[200px] border-[1px] border border-gray-100 shadow-inner">
                                    <p className="text-gray-800 whitespace-pre-wrap leading-relaxed text-base">
                                        {lead.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}