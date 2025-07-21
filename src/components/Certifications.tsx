import React from 'react';
import { ExternalLink, Download } from 'lucide-react';

const Certifications: React.FC = () => {

    const certifications = [
        {
            title: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2023",
            credlyUrl: "https://www.credly.com/users/mohamed-amine-machrki",
            icon: "☁️"
        },
        {
            title: "Microsoft Azure Fundamentals",
            issuer: "Microsoft",
            date: "2023",
            credlyUrl: "https://www.credly.com/users/mohamed-amine-machrki",
            icon: "🔷"
        },
        {
            title: "Google Cloud Digital Leader",
            issuer: "Google Cloud",
            date: "2023",
            credlyUrl: "https://www.credly.com/users/mohamed-amine-machrki",
            icon: "🌐"
        },
        {
            title: "Scrum Master Certified",
            issuer: "Scrum Alliance",
            date: "2023",
            credlyUrl: "https://www.credly.com/badges/d2c56bf9-48dc-4d63-a421-6d9b740bd987",
            icon: "🏃‍♂️"
        },
        {
            title: "OCA Java SE 8 Programmer",
            issuer: "Oracle",
            date: "2023",
            oracleUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5533391123D32B4209BCEE940E6D8A9D5C271E491917FCC6AF5985F97FB86A08",
            icon: "☕"
        },
        {
            title: "ECo-c – European communication certificate",
            issuer: "IPKEurope",
            date: "2023",
            credlyUrl: "https://www.linkedin.com/posts/mohamed-amine-macherki-b62a65200_communication-network-softskills-activity-6996743225692569600-5lnn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADNqBjoBAWY6sTDqG2-00iv8Yko-My1j1y4",
            pdfUrl: "/ECo-C-certif-mohamed-amine.pdf",
            icon: "🗪"
        }
    ];

    const downloadCertificate = (pdfUrl: string, title: string) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${title.replace(/\s+/g, '_')}_Certificate.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="achievements" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements & Certifications</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>

                {/* Certifications */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Professional Certifications</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className="text-center">
                                    <div className="text-4xl mb-4">{cert.icon}</div>
                                    <h4 className="font-bold text-gray-800 mb-2">{cert.title}</h4>
                                    <p className="text-blue-600 text-sm mb-2">{cert.issuer}</p>
                                    <p className="text-gray-500 text-xs mb-4">{cert.date}</p>

                                    <div className="flex flex-col gap-2">
                                        {cert.credlyUrl && (
                                        <a
                                            href={cert.credlyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                                        >
                                            View on Credly
                                            <ExternalLink className="w-3 h-3 ml-1" />
                                        </a>  )}
                                        {cert.oracleUrl && (
                                        <a
                                            href={cert.oracleUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                                        >
                                            View on Oracle
                                            <ExternalLink className="w-3 h-3 ml-1" />
                                        </a>
                                        )}
                                        {cert.pdfUrl && (
                                            <button
                                                onClick={() => downloadCertificate(cert.pdfUrl!, cert.title)}
                                                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                            >
                                                <Download className="w-4 h-4 mr-1" />
                                                Download PDF
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a
                            href="https://www.credly.com/users/mohamed-amine-machrki"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            View all my certifications
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;