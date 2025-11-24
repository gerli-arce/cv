import React, { useState } from 'react';
import {
    AlertCircle,
    CheckCircle,
    Loader2,
    Send,
    Mail,
    Phone,
    MapPin,
    Clock,
    Sparkles,
    LaptopMinimal,
    MessageSquare,
    ChevronDown,
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        topic: '',
        message: '',
    });
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
            // Simulacion de exito
            setStatus('success');
            setFormData({ name: '', email: '', company: '', topic: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1400);
    };

    const phoneHref = contactInfo.phone.replace(/\s+/g, '');

    return (
        <section className="relative section-divider overflow-hidden bg-gradient-to-br from-[#050612] via-[#090c1c] to-[#040510] py-24">
            <div className="pointer-events-none absolute -left-12 top-10 h-72 w-72 rounded-full bg-indigo-500/14 blur-3xl" />
            <div className="pointer-events-none absolute right-4 bottom-4 h-80 w-80 rounded-full bg-purple-500/12 blur-3xl" />

            <div className="mx-auto max-w-5xl px-6 sm:px-8">
                <div className="mb-12 text-center" data-animate="fade-up">
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200 shadow-[0_12px_36px_-24px_rgba(99,102,241,0.65)]">
                        <Sparkles className="h-4 w-4" />
                        Contacto directo
                    </div>
                    <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Cuéntame sobre tu proyecto</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200/85">
                        Respondo en menos de 24h con pasos accionables. Podemos revisar arquitectura, performance, IA aplicada o
                        desplegar tu proximo release.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-100">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Timezone GMT-5</span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Respondo &lt;24h</span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Propuestas accionables</span>
                    </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-white/6 shadow-[0_26px_80px_-46px_rgba(0,0,0,0.9)] backdrop-blur md:flex-row">
                    <div className="flex flex-col justify-between bg-gradient-to-br from-indigo-700 to-purple-700 p-10 text-white md:w-2/5" data-animate="fade-right">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">Hablemos y ejecutemos</h3>
                            <p className="leading-relaxed text-indigo-50">
                                Rutas claras: discovery rapido, propuestas en 48h y entregables con pruebas, monitoreo y handoff.
                            </p>
                            <div className="grid grid-cols-1 gap-3 text-sm">
                                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-2">
                                    <Clock className="h-4 w-4" />
                                    <span>Slots: Lun - Sab / 8am - 8pm GMT-5</span>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-2">
                                    <LaptopMinimal className="h-4 w-4" />
                                    <span>Modalidad: Remoto, con entregas y demos semanales</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4 text-indigo-50">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-white/25"
                            >
                                <div className="rounded-lg bg-white/15 p-3 backdrop-blur-sm">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-semibold">{contactInfo.email}</span>
                            </a>
                            <a
                                href={`tel:${phoneHref}`}
                                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-white/25"
                            >
                                <div className="rounded-lg bg-white/15 p-3 backdrop-blur-sm">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-semibold">{contactInfo.phone}</span>
                            </a>
                            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                                <div className="rounded-lg bg-white/15 p-3 backdrop-blur-sm">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <span className="text-sm font-semibold">{contactInfo.location}</span>
                            </div>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-800 transition-all hover:-translate-y-0.5"
                            >
                                <MessageSquare className="h-4 w-4" />
                                Escribeme en LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="md:w-3/5 p-10" data-animate="fade-left" style={{ '--delay': '0.1s' }}>
                        {status === 'success' ? (
                            <div className="flex h-full flex-col items-center justify-center text-center animate-fade-in-up">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="mb-2 text-2xl font-bold text-white">Mensaje enviado!</h3>
                                <p className="text-sm text-slate-200/85">Gracias por contactarme. Te respondere a la brevedad.</p>
                                <button
                                    type="button"
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 text-sm font-semibold text-indigo-200 transition-colors hover:text-white"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-white">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-white">
                                            Correo electronico
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                                            placeholder="ejemplo@correo.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-semibold text-white">
                                            Empresa (opcional)
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                                            placeholder="Nombre de la empresa"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="topic" className="text-sm font-semibold text-white">
                                            Que necesitas
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="topic"
                                                name="topic"
                                                required
                                                value={formData.topic}
                                                onChange={handleChange}
                                                className="w-full appearance-none rounded-lg border border-white/12 bg-slate-900/70 px-4 py-3 pr-12 text-sm text-white outline-none transition-all focus:border-indigo-300 focus:ring-2 focus:ring-indigo-400/30"
                                            >
                                                <option value="">Selecciona</option>
                                                <option value="proyecto">Proyecto nuevo / MVP</option>
                                                <option value="escalamiento">Escalar producto y performance</option>
                                                <option value="ia">IA aplicada / automatizacion</option>
                                                <option value="consultoria">Consultoria tecnica</option>
                                                <option value="soporte">Soporte y mantenimiento</option>
                                            </select>
                                            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-200" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-white">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30"
                                        placeholder="Cuentame contexto, objetivos y deadlines..."
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 rounded-lg bg-red-50/10 p-3 text-sm text-red-200 animate-shake">
                                        <AlertCircle className="h-4 w-4" />
                                        {errorMessage || 'Hubo un problema, intentarlo de nuevo.'}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_-18px_rgba(99,102,241,0.6)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_-20px_rgba(167,139,250,0.7)] disabled:cursor-not-allowed disabled:opacity-70"
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

                                <div className="text-xs text-slate-400">
                                    Respuesta garantizada en 24h. Tambien puedo enviar un outline de plan/horas estimadas con la info que
                                    compartas aqui.
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
