import React, { useState } from 'react';
import {
    AlertCircle,
    ArrowDown,
    CheckCircle,
    Database,
    ExternalLink,
    Github,
    Layout,
    Linkedin,
    Loader2,
    Send,
    Server,
    Terminal,
} from 'lucide-react';

function AboutMe() {
    const skills = [
        'Responsabilidad',
        'Proactividad',
        'Comunicación efectiva',
        'Resolución de problemas',
        'Trabajo en equipo',
        'Aprendizaje continuo',
    ];

    const milestones = [
        {
            year: '2021',
            title: 'Inicios en desarrollo web',
            description:
                'Comencé mi camino aprendiendo HTML, CSS y JavaScript, creando mis primeros proyectos personales.',
        },
        {
            year: '2022',
            title: 'Especialización en Laravel y React',
            description:
                'Profundicé en el ecosistema de Laravel y la creación de SPAs modernas con React y Vite.',
        },
        {
            year: '2024',
            title: 'Desarrollador Full Stack',
            description:
                'Construyendo aplicaciones completas y escalables, integrando las mejores prácticas del sector.',
        },
    ];

    return (
        <section className="bg-white py-20" id="about">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <div className="mb-16 text-center animate-fade-in-up">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Sobre mí</h2>
                    <div className="mx-auto h-1 w-20 rounded-full bg-indigo-600" />
                </div>

                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                    <div className="space-y-8 animate-fade-in-left">
                        <div className="prose prose-lg text-gray-600">
                            <p className="leading-relaxed">
                                Soy un desarrollador apasionado por transformar ideas complejas en experiencias
                                digitales elegantes y funcionales. Con un fuerte enfoque en el ecosistema{' '}
                                <span className="font-semibold text-indigo-600">Laravel</span> y{' '}
                                <span className="font-semibold text-indigo-600">React</span>, disfruto creando
                                arquitecturas limpias y mantenibles. Me motiva el desafío constante de optimizar el
                                rendimiento y la usabilidad en cada proyecto que abordo.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">Habilidades personales</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="cursor-default rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:bg-indigo-50 hover:text-indigo-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="animate-fade-in-right rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                        <h3 className="mb-6 flex items-center text-xl font-semibold text-gray-900">
                            <svg className="mr-2 h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Mi trayectoria
                        </h3>

                        <div className="relative space-y-8 border-l-2 border-indigo-200 pl-8">
                            {milestones.map((milestone) => (
                                <div key={milestone.year} className="relative">
                                    <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-indigo-600 bg-white" />
                                    <div className="mb-1 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                                        <h4 className="text-lg font-bold text-gray-900">{milestone.title}</h4>
                                        <span className="mt-1 w-fit rounded-full bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-600 sm:mt-0">
                                            {milestone.year}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-gray-600">{milestone.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const SkillCategory = ({ title, icon: Icon, skills, colorClass }) => (
    <div className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="mb-6 flex items-center gap-3">
            <div className={`rounded-xl p-3 transition-transform duration-300 group-hover:scale-110 ${colorClass}`}>
                <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="select-none rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors duration-200 hover:border-indigo-100 hover:bg-indigo-50 hover:text-indigo-600"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

function TechSkills() {
    const categories = [
        {
            title: 'Frontend',
            icon: Layout,
            colorClass: 'bg-gradient-to-br from-blue-500 to-cyan-400',
            skills: ['React', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
        },
        {
            title: 'Backend',
            icon: Server,
            colorClass: 'bg-gradient-to-br from-red-500 to-orange-400',
            skills: ['Laravel', 'PHP 8+', 'Node.js', 'RESTful APIs', 'Express'],
        },
        {
            title: 'Datos y arquitectura',
            icon: Database,
            colorClass: 'bg-gradient-to-br from-emerald-500 to-teal-400',
            skills: ['MySQL', 'PostgreSQL', 'Eloquent ORM', 'Database design'],
        },
        {
            title: 'DevOps y herramientas',
            icon: Terminal,
            colorClass: 'bg-gradient-to-br from-slate-700 to-slate-500',
            skills: ['Git', 'GitHub', 'Docker', 'Linux (Bash)', 'Composer', 'NPM/Yarn'],
        },
    ];

    return (
        <section className="bg-gray-50 py-20" id="skills">
            <div className="mx-auto max-w-6xl px-6 sm:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Arsenal tecnológico</h2>
                    <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-indigo-600" />
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Herramientas modernas seleccionadas para construir aplicaciones web rápidas, escalables y robustas.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                    {categories.map((category) => (
                        <SkillCategory key={category.title} {...category} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Projects() {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Dashboard',
            description:
                'Panel de administración para tiendas online. Gestión de inventario, pedidos y analítica de ventas en tiempo real con gráficos interactivos.',
            image: '/general-data-dashboard.png',
            tags: ['Laravel', 'React', 'Inertia', 'Tailwind'],
            demoUrl: '#',
            codeUrl: '#',
        },
        {
            id: 2,
            title: 'Task Management App',
            description:
                'Aplicación colaborativa tipo Kanban con autenticación, actualizaciones en tiempo real y asignación de roles.',
            image: '/kanban-board.png',
            tags: ['React', 'Vite', 'Firebase', 'Redux'],
            demoUrl: '#',
            codeUrl: '#',
        },
        {
            id: 3,
            title: 'Real Estate Platform',
            description:
                'Plataforma de bienes raíces con búsqueda avanzada, mapas interactivos y sistema de citas optimizado para SEO.',
            image: '/real-estate.jpg',
            tags: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap'],
            demoUrl: '#',
            codeUrl: '#',
        },
    ];

    return (
        <section id="projects" className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Proyectos destacados</h2>
                    <div className="mx-auto h-1 w-20 rounded-full bg-indigo-600" />
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                        Una selección de trabajos recientes que muestran mi experiencia construyendo productos full stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-200">
                                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="translate-y-4 rounded-lg border-2 border-white px-4 py-2 font-semibold tracking-wider text-white transition-transform duration-300 group-hover:translate-y-0">
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
                                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
                                    {project.title}
                                </h3>
                                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">{project.description}</p>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 border-t border-gray-100 pt-4">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex flex-1 items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-indigo-700 hover:shadow-lg"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Ver demo
                                    </a>
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-indigo-200 hover:bg-gray-50 hover:text-indigo-600"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        Código
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

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
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
        <section id="contact" className="bg-white py-24">
            <div className="mx-auto max-w-4xl px-6 sm:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Contáctame</h2>
                    <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-indigo-600" />
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        ¿Tienes un proyecto en mente o quieres colaborar? Déjame un mensaje y responderé lo antes posible.
                    </p>
                </div>

                <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-xl md:flex-row">
                    <div className="flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-purple-700 p-10 text-white md:w-2/5">
                        <div>
                            <h3 className="mb-6 text-2xl font-bold">Hablemos</h3>
                            <p className="mb-8 leading-relaxed text-indigo-100">
                                Disponible para nuevas oportunidades y colaboraciones. No dudes en contactarme.
                            </p>
                        </div>

                        <div className="space-y-6 text-indigo-100">
                            <div className="flex items-center space-x-4">
                                <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <span>tu.email@ejemplo.com</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <span>Ciudad, País</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-3/5 p-10">
                        {status === 'success' ? (
                            <div className="flex h-full flex-col items-center justify-center text-center animate-fade-in-up">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="mb-2 text-2xl font-bold text-gray-900">¡Mensaje enviado!</h3>
                                <p className="text-gray-600">Gracias por contactarme. Te responderé a la brevedad.</p>
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
                                        Correo electrónico
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
                                        placeholder="Cuéntame sobre tu proyecto..."
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600 animate-shake">
                                        <AlertCircle className="h-4 w-4" />
                                        {errorMessage || 'Hubo un problema, inténtalo de nuevo.'}
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

export default function PortfolioPage() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <div className="flex flex-grow items-center justify-center px-6 py-20 sm:px-8">
                <div className="w-full max-w-4xl space-y-12 text-center">
                    <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-lg opacity-75 animate-pulse" />
                        <img
                            className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-xl transition-transform duration-300 hover:scale-105"
                            src="/developer-portrait.png"
                            alt="Retrato"
                        />
                    </div>

                    <div className="space-y-6">
                        <h1 className="animate-fade-in-down text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                            Hola, soy{' '}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Tu Nombre
                            </span>
                        </h1>

                        <h2 className="animate-fade-in-up delay-100 text-xl font-medium text-gray-600 sm:text-2xl">
                            Full Stack Developer | Laravel & React
                        </h2>

                        <p className="animate-fade-in-up delay-200 mx-auto max-w-2xl text-lg leading-relaxed text-gray-500">
                            Construyo soluciones web robustas y escalables. Especializado en crear experiencias de usuario
                            fluidas con React integradas perfectamente en backends de Laravel.
                        </p>
                    </div>

                    <div className="animate-fade-in-up delay-300 flex flex-wrap justify-center gap-4">
                        <a
                            href="#about"
                            className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-500/30"
                        >
                            <ArrowDown className="mr-2 h-5 w-5" />
                            Conóceme más
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-gray-200 bg-white px-8 py-3 font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600"
                        >
                            <Linkedin className="mr-2 h-5 w-5" />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-gray-200 bg-white px-8 py-3 font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-1 hover:border-gray-900 hover:text-gray-900"
                        >
                            <Github className="mr-2 h-5 w-5" />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            <AboutMe />
            <TechSkills />
            <Projects />
            <ContactForm />
        </div>
    );
}
