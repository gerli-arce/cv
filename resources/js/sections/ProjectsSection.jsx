import React from 'react';
import { ExternalLink, Github, CalendarClock, Gauge, Layers, Rocket, CheckCircle, ArrowRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects as projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
    const [featured, ...restProjects] = projectsData;
    const categories = Array.from(new Set(projectsData.map((project) => project.category)));

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#050612] via-[#090c1c] to-[#040510] py-20">
            <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-indigo-500/14 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/12 blur-3xl" />

            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                <div className="mb-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-6" data-animate="fade-right" style={{ '--delay': '0.05s' }}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200 shadow-[0_12px_36px_-22px_rgba(99,102,241,0.65)]">
                            <Rocket className="h-4 w-4" />
                            Proyectos listos para produccion
                        </div>
                        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Casos fullstack, IA y DevOps</h2>
                        <p className="max-w-2xl text-base text-slate-200/85">
                            Productos que equilibran backend robusto, interfaces claras y pipelines automatizados. Desde dashboards
                            e-commerce hasta asistentes IA y bots de soporte, con metricas claras de impacto.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <span
                                    key={category}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 backdrop-blur"
                                >
                                    <Layers className="h-4 w-4 text-indigo-200" />
                                    {category}
                                </span>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/12 bg-white/6 p-4 text-sm text-slate-100 shadow-[0_14px_44px_-34px_rgba(0,0,0,0.85)] backdrop-blur">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-200">Performance</p>
                                <p className="mt-1 text-sm text-slate-50">Caching, colas, monitoreo y SLA claros.</p>
                            </div>
                            <div className="rounded-2xl border border-white/12 bg-white/6 p-4 text-sm text-slate-100 shadow-[0_14px_44px_-34px_rgba(0,0,0,0.85)] backdrop-blur">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-200">UX + data</p>
                                <p className="mt-1 text-sm text-slate-50">Dashboards accionables con datos en tiempo real.</p>
                            </div>
                            <div className="rounded-2xl border border-white/12 bg-white/6 p-4 text-sm text-slate-100 shadow-[0_14px_44px_-34px_rgba(0,0,0,0.85)] backdrop-blur">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-200">IA & automatizacion</p>
                                <p className="mt-1 text-sm text-slate-50">RAG, bots y pipelines que ahorran horas al equipo.</p>
                            </div>
                        </div>
                    </div>

                    {featured ? (
                        <article
                            className="group relative overflow-hidden rounded-3xl border border-indigo-300/20 bg-gradient-to-br from-indigo-500/14 via-slate-900/70 to-slate-950 p-1 shadow-[0_26px_80px_-50px_rgba(79,70,229,0.6)] backdrop-blur"
                            data-animate="fade-left"
                            style={{ '--delay': '0.08s' }}
                        >
                            <div className="relative h-full rounded-[22px] bg-slate-950/80">
                                <div className="relative h-56 w-full overflow-hidden rounded-t-[22px]">
                                    <img
                                        src={featured.image}
                                        alt={featured.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-50">
                                        {featured.category}
                                    </div>
                                    <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-950">
                                        {featured.status}
                                    </div>
                                </div>

                                <div className="space-y-4 p-6">
                                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/90">
                                        <CalendarClock className="h-4 w-4" />
                                        <span>{featured.year}</span>
                                        <span className="h-1 w-1 rounded-full bg-indigo-300" />
                                        <Cpu className="h-4 w-4" />
                                        <span>Stack mixto</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-indigo-100">
                                        {featured.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-200/90">{featured.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {featured.tags?.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-100"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {featured.metrics?.map((item) => (
                                            <span
                                                key={item}
                                                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200"
                                            >
                                                <CheckCircle className="h-4 w-4" />
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <a
                                            href={featured.demoUrl || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 transition-all hover:-translate-y-0.5 hover:text-white"
                                        >
                                            Ver demo
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                        <a
                                            href={featured.codeUrl || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
                                        >
                                            Codigo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ) : null}
                </div>

                <div className="mb-4 flex items-center justify-between gap-4" data-animate="fade-up" style={{ '--delay': '0.12s' }}>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200">Proyectos recientes</p>
                        <h3 className="text-2xl font-semibold text-white">Construidos con foco en impacto medible</h3>
                        <p className="text-sm text-slate-200/80">Performance, observabilidad y entregables claros.</p>
                    </div>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:text-white"
                    >
                        Agendemos
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {restProjects.map((project, idx) => (
                        <article
                            key={project.id}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/6 shadow-[0_22px_64px_-52px_rgba(0,0,0,0.85)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200/30 hover:shadow-[0_26px_76px_-50px_rgba(99,102,241,0.35)]"
                            data-animate="fade-up"
                            style={{ '--delay': `${0.14 + idx * 0.06}s` }}
                        >
                            <div className="relative h-40 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute left-3 top-3 inline-flex items-center rounded-full bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-100">
                                    {project.category}
                                </div>
                                <div className="absolute right-3 top-3 inline-flex items-center rounded-full bg-emerald-500/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-950">
                                    {project.status}
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col space-y-3 p-5">
                                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200/90">
                                    <span>{project.year}</span>
                                    <span className="h-1 w-1 rounded-full bg-indigo-300" />
                                    <Gauge className="h-4 w-4" />
                                    <span>Entrega rapida</span>
                                </div>
                                <h4 className="text-lg font-semibold text-white group-hover:text-indigo-100">{project.title}</h4>
                                <p className="flex-1 text-sm leading-relaxed text-slate-200/85">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags?.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-100"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.metrics?.map((metric) => (
                                        <span
                                            key={metric}
                                            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200"
                                        >
                                            <CheckCircle className="h-4 w-4" />
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 border-t border-white/10 pt-4">
                                    <a
                                        href={project.demoUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_30px_-18px_rgba(99,102,241,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-20px_rgba(167,139,250,0.7)]"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Ver demo
                                    </a>
                                    <a
                                        href={project.codeUrl || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-indigo-100 transition-all hover:-translate-y-0.5 hover:border-indigo-300/30 hover:text-white"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Codigo
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div
                    className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/18 via-indigo-500/12 to-purple-500/16 p-8 shadow-[0_26px_80px_-50px_rgba(99,102,241,0.55)] backdrop-blur lg:flex-row lg:items-center"
                    data-animate="fade-up"
                    style={{ '--delay': '0.2s' }}
                >
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200">Vamos al siguiente release</p>
                        <h4 className="mt-2 text-xl font-semibold text-white">Construyamos tu siguiente dashboard o asistente IA</h4>
                        <p className="mt-1 max-w-2xl text-sm text-slate-200/85">
                            Integro backend, frontend, datos y DevOps con entregables claros, pruebas y monitoreo desde el dia uno.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-900/40 transition-all hover:-translate-y-1 hover:bg-indigo-400"
                        >
                            Hablemos
                        </Link>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100 transition-all hover:-translate-y-1 hover:border-indigo-200 hover:text-white"
                        >
                            <Github className="h-4 w-4" />
                            Ver repositorios
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
