import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Loader2, Send } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    return (
        <section className="relative section-divider overflow-hidden bg-gradient-to-br from-[#090b17] via-[#0a0c1c] to-[#090b17] py-24">
            <div className="pointer-events-none absolute -left-12 top-10 h-72 w-72 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-4 bottom-4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="mx-auto max-w-4xl px-6 sm:px-8">
                <div className="mb-16 text-center" data-animate="fade-up">
                    <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Contactame</h2>
                    <div className="mx-auto mb-6 h-1 w-20 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                    </div>
                    <p className="mx-auto max-w-2xl text-sm text-slate-200/85">
                        Tienes un proyecto en mente o quieres colaborar? Dejame un mensaje y respondere lo antes posible.
                    </p>
                </div>

                <div className="flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/6 shadow-[0_26px_80px_-46px_rgba(0,0,0,0.9)] backdrop-blur md:flex-row">
                    <div className="flex flex-col justify-between bg-gradient-to-br from-indigo-700 to-purple-700 p-10 text-white md:w-2/5" data-animate="fade-right">
                        <div>
                            <h3 className="mb-6 text-2xl font-bold">Hablemos</h3>
                            <p className="mb-8 leading-relaxed text-indigo-100">
                                Disponible para nuevas oportunidades y colaboraciones. No dudes en contactarme.
                            </p>
                        </div>

                        <div className="space-y-6 text-indigo-100">
                            <div className="flex items-center space-x-4">
                                <div className="rounded-lg bg-white/15 p-3 backdrop-blur-sm">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <span>{contactInfo.email} - {contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="rounded-lg bg-white/15 p-3 backdrop-blur-sm">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span>{contactInfo.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-3/5 p-10" data-animate="fade-left" style={{ '--delay': '0.1s' }}>
                        {status === 'success' ? (
                            <div className="flex h-full flex-col items-center justify-center text-center animate-fade-in-up">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="mb-2 text-2xl font-bold text-gray-900">Mensaje enviado!</h3>
                                <p className="text-gray-600">Gracias por contactarme. Te respondere a la brevedad.</p>
                                <button
                                    type="button"
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                        placeholder="Tu nombre"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                        Correo electronico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                        placeholder="ejemplo@correo.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                                        placeholder="Cuentame sobre tu proyecto..."
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600 animate-shake">
                                        <AlertCircle className="h-4 w-4" />
                                        {errorMessage || 'Hubo un problema, intentarlo de nuevo.'}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar mensaje
                                            <Send className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
