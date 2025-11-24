import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Bot } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export default function FloatingWhatsApp() {
    const [open, setOpen] = useState(false);
    const cardRef = useRef(null);

    const whatsappLink = useMemo(() => {
        const digits = (contactInfo.phone || '').replace(/\D/g, '');
        if (!digits) return null;
        return `https://wa.me/${digits}`;
    }, []);

    const botCommandLink = useMemo(() => {
        if (!whatsappLink) return null;
        return `${whatsappLink}?text=${encodeURIComponent('/bot')}`;
    }, [whatsappLink]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const options = [
        { label: 'Empecemos un proyecto', text: 'Hola Yon, quiero empezar un proyecto nuevo.' },
        { label: 'Escalar producto / performance', text: 'Hola Yon, necesito escalar mi producto y mejorar performance.' },
        { label: 'Consultoria rapida', text: 'Hola Yon, busco una consultoria rapida sobre arquitectura/DevOps.' },
    ];

    if (!whatsappLink) return null;

    return (
        <div className="fixed bottom-5 right-5 z-50" ref={cardRef}>
            <button
                type="button"
                aria-label="Abrir opciones de WhatsApp"
                onClick={() => setOpen((prev) => !prev)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-[0_16px_40px_-18px_rgba(16,185,129,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_46px_-18px_rgba(16,185,129,0.85)]"
            >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
                        <path
                            d="M16.04 4C9.86 4 4.86 8.96 4.86 15.08c0 2.05.55 4.01 1.58 5.75L4 28l7.32-2.3c1.67.92 3.55 1.4 5.5 1.4 6.18 0 11.18-4.96 11.18-11.08C28 8.96 22.22 4 16.04 4Z"
                            fill="#25D366"
                        />
                        <path
                            d="M16.82 7.57c-4.16 0-7.52 3.35-7.52 7.47 0 1.64.51 3.15 1.39 4.37l-.92 3.37 3.46-.9c1.18.64 2.5.99 3.93.99 4.15 0 7.52-3.36 7.52-7.52 0-4.12-3.37-7.47-7.46-7.47Zm4.36 10.37c-.19.52-.95.99-1.6 1.12-.43.09-.99.16-2.87-.61-2.4-.99-3.94-3.44-4.06-3.6-.12-.17-.97-1.3-.97-2.48 0-1.18.62-1.76.84-2 .21-.23.46-.29.62-.29h.44c.14 0 .33-.05.52.4.19.47.65 1.62.7 1.73.06.12.09.26.02.42-.07.15-.11.24-.22.37-.12.14-.23.31-.33.41-.11.1-.22.21-.09.41.13.2.57.94 1.23 1.53.85.76 1.56 1 1.79 1.1.22.09.35.08.48-.05.14-.14.55-.64.69-.86.14-.23.29-.18.48-.11.19.06 1.21.57 1.42.67.21.11.35.16.4.25.06.1.06.58-.14 1.1Z"
                            fill="#fff"
                        />
                    </svg>
                </div>
            </button>

            {open && botCommandLink && (
                <a
                    href={botCommandLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir chat bot"
                    onClick={() => setOpen(false)}
                    className="absolute bottom-0 -left-16 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-[0_14px_36px_-20px_rgba(99,102,241,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgba(129,140,248,0.85)]"
                >
                    <Bot className="h-8 w-8" />
                </a>
            )}

            {open && (
                <div className="absolute bottom-16 right-0 w-64 rounded-2xl border border-white/12 bg-slate-950/90 p-3 text-sm text-white shadow-[0_18px_48px_-26px_rgba(15,23,42,0.8)] backdrop-blur">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">Enviar mensaje</p>
                    <div className="flex flex-col gap-2">
                        {options.map((option) => {
                            const url = `${whatsappLink}?text=${encodeURIComponent(option.text)}`;
                            return (
                                <a
                                    key={option.label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm font-semibold text-slate-100 transition-all hover:-translate-y-0.5 hover:border-emerald-300/40 hover:text-white"
                                    onClick={() => setOpen(false)}
                                >
                                    {option.label}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
