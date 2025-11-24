import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects as projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0c1a] via-[#0a0d1f] to-[#0a0c1a] py-20">
            <div className="pointer-events-none absolute -left-12 top-8 h-72 w-72 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                <div className="mb-14 text-center" data-animate="fade-up">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Proyectos destacados</h2>
                    <div className="mx-auto mt-4 h-1 w-24 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                    </div>
                    <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-200/85">
                        Seleccion de proyectos fullstack con enfasis en rendimiento, UX y automatizacion de procesos.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project, idx) => (
                        <div
                            key={project.id}
                            className="group overflow-hidden rounded-2xl border border-white/8 bg-white/8 shadow-[0_24px_70px_-44px_rgba(0,0,0,0.9)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-48px_rgba(99,102,241,0.45)]"
                            data-animate="zoom-in"
                            style={{ '--delay': `${idx * 0.08}s` }}
                        >
                            <div className="relative h-48 overflow-hidden bg-slate-900/50">
                                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="translate-y-4 rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 group-hover:translate-y-0">
                                        Ver proyecto
                                    </span>
                                </div>
                                <img
                                    src={project.image || '/placeholder.svg'}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-indigo-300">
                                    {project.title}
                                </h3>
                                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-200/85">{project.description}</p>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[11px] font-semibold text-indigo-100 shadow-inner shadow-white/5 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-300/40 hover:shadow-[0_10px_30px_-20px_rgba(129,140,248,0.7)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 border-t border-white/10 pt-4">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_30px_-18px_rgba(99,102,241,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-20px_rgba(167,139,250,0.7)]"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Ver demo
                                    </a>
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-indigo-100 transition-all hover:-translate-y-0.5 hover:border-indigo-300/30 hover:text-white"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Codigo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
