import React, { useState } from 'react';
import { FileText, ChevronDown, Download } from 'lucide-react';

export default function CvSection() {
    const [open, setOpen] = useState(false);
    const pdfUrl = '/pdf/cv.pdf';

    return (
        <section className="relative section-divider overflow-hidden bg-gradient-to-br from-[#090c1d] via-[#0a0d1c] to-[#0a0f24] py-16" data-animate="fade-up">
            <div className="pointer-events-none absolute -left-10 top-6 h-64 w-64 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-4 bottom-0 h-72 w-72 rounded-full bg-purple-500/12 blur-3xl" />

            <div className="mx-auto max-w-5xl px-6 sm:px-8">
                <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_26px_90px_-48px_rgba(0,0,0,0.85)] backdrop-blur">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/20 text-white">
                                <FileText className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">Curriculum Vitae</p>
                                <h3 className="text-lg font-semibold text-white">Ver CV en PDF</h3>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <button
                                type="button"
                                onClick={() => setOpen((prev) => !prev)}
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_36px_-20px_rgba(99,102,241,0.6)] transition-all hover:-translate-y-0.5"
                            >
                                {open ? 'Ocultar' : 'Desplegar PDF'}
                                <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                            </button>
                            <a
                                href={pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-indigo-100 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
                            >
                                <Download className="h-4 w-4" />
                                Descargar
                            </a>
                        </div>
                    </div>

                    {open && (
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-inner shadow-indigo-900/25">
                            <iframe
                                title="Curriculum Vitae"
                                src={pdfUrl}
                                className="h-[70vh] w-full"
                                loading="lazy"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
