export const personalSkills = [
    'Analisis y organizacion',
    'Trabajo en equipo',
    'Comunicacion efectiva',
    'Orientacion a resultados',
    'Liderazgo tecnico',
    'Aprendizaje continuo',
];

export const milestones = [
    {
        year: '2024',
        title: 'Coord. y desarrollo fullstack',
        description:
            'Coordinacion, analisis y codificacion de apps web; administracion de servidores Linux/Windows; soporte e infraestructura en Multiservicios e Ingenieria Selva Central.',
        tag: 'ACTUAL',
        accent: 'from-indigo-400 via-purple-400 to-pink-400',
    },
    {
        year: '2022',
        title: 'Coordinacion y desarrollo remoto',
        description:
            'Rol remoto en coordinacion, analisis y codificacion de aplicaciones web; consolidacion de patrones en Laravel, Node.js y React.',
        tag: 'Checkpoint',
        accent: 'from-purple-500 via-fuchsia-400 to-rose-400',
    },
    {
        year: '2021',
        title: 'Practicas: almacen y soporte',
        description:
            'Area de almacen y soporte tecnico en FASTNETPERU: logistica, mantenimiento y soporte de equipos.',
        tag: 'Checkpoint',
        accent: 'from-indigo-500 via-blue-400 to-cyan-400',
    },
];

export const techCategories = [
    {
        title: 'Frontend',
        icon: 'Layout',
        colorClass: 'bg-gradient-to-br from-blue-500 to-cyan-400',
        skills: ['React', 'Vite', 'Tailwind CSS', 'JavaScript / TypeScript', 'HTML5', 'CSS3'],
    },
    {
        title: 'Backend',
        icon: 'Server',
        colorClass: 'bg-gradient-to-br from-red-500 to-orange-400',
        skills: ['PHP (Laravel)', 'Node.js (Express)', 'Python (Flask/Django)', 'Java', 'C#'],
    },
    {
        title: 'Datos y arquitectura',
        icon: 'Database',
        colorClass: 'bg-gradient-to-br from-emerald-500 to-teal-400',
        skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Eloquent ORM', 'Database design'],
    },
    {
        title: 'DevOps y herramientas',
        icon: 'Terminal',
        colorClass: 'bg-gradient-to-br from-slate-700 to-slate-500',
        skills: ['Git/GitHub/GitLab', 'Docker', 'Linux / Windows Server', 'CI/CD', 'Postman', 'VS Code / Visual Studio'],
    },
];

export const projects = [
    {
        id: 1,
        slug: 'ecommerce-dashboard',
        category: 'E-commerce',
        status: 'Produccion',
        title: 'E-Commerce Dashboard',
        description:
            'Panel de administracion para tiendas online. Gestion de inventario, pedidos y analitica de ventas en tiempo real con graficos interactivos.',
        image: '/general-data-dashboard.png',
        tags: ['Laravel', 'React', 'Inertia', 'Tailwind', 'Realtime'],
        metrics: ['+18% conversion', 'SLA 99.9%', 'Multi-tenant'],
        year: '2024',
        demoUrl: '#',
        codeUrl: '#',
    },
    {
        id: 2,
        slug: 'kanban-colaborativo',
        category: 'Productividad',
        status: 'Produccion',
        title: 'Task Management App',
        description:
            'Aplicacion colaborativa tipo Kanban con autenticacion, actualizaciones en tiempo real y asignacion de roles.',
        image: '/kanban-board.png',
        tags: ['React', 'Vite', 'Firebase', 'Redux', 'Realtime'],
        metrics: ['-30% tiempo ciclo', 'Roles RBAC', 'Push notif'],
        year: '2024',
        demoUrl: '#',
        codeUrl: '#',
    },
    {
        id: 3,
        slug: 'proptech-platform',
        category: 'Proptech',
        status: 'En linea',
        title: 'Real Estate Platform',
        description:
            'Plataforma de bienes raices con busqueda avanzada, mapas interactivos y sistema de citas optimizado para SEO.',
        image: '/real-estate.jpg',
        tags: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap', 'SEO'],
        metrics: ['+35% leads', 'Mapas y filtros', 'SEO Ready'],
        year: '2023',
        demoUrl: '#',
        codeUrl: '#',
    },
    {
        id: 4,
        slug: 'bots-automatizacion',
        category: 'Automatizacion',
        status: 'MVP',
        title: 'Bots de soporte y scraping',
        description:
            'Bots para soporte interno y scraping controlado con panel de alertas, colas y limites para no bloquear servicios.',
        image: '/placeholder.jpg',
        tags: ['Node.js', 'Puppeteer', 'Redis', 'Docker', 'Alerting'],
        metrics: ['-40% tareas manuales', 'Rate-limit safe', 'Dash realtime'],
        year: '2024',
        demoUrl: '#',
        codeUrl: '#',
    },
    {
        id: 5,
        slug: 'ia-documentos',
        category: 'IA aplicada',
        status: 'Lab',
        title: 'Asistente IA para documentos',
        description:
            'Ingestion de PDFs, embeddings y busqueda semantica para responder preguntas de negocio sobre manuales y reportes internos.',
        image: '/placeholder-user.jpg',
        tags: ['Python', 'FastAPI', 'LLM', 'Qdrant', 'Next.js'],
        metrics: ['RAG', 'Citas verificables', 'Panel admin'],
        year: '2025',
        demoUrl: '#',
        codeUrl: '#',
    },
];

export const projectsSeo = {
    title: 'Proyectos | Yon Infante - Fullstack, IA y DevOps',
    description:
        'Portfolio de proyectos fullstack con Laravel, React, Node.js e IA. Dashboards, automatizacion, realtime y pipelines listos para produccion.',
    image: '/general-data-dashboard.png',
    url: '/projects',
};

export const blogSeo = {
    title: 'Blog | Yon Infante - Ingenieria, IA y productividad',
    description:
        'Reflexiones tecnicas sobre backend con Laravel, arquitectura en React, DevOps y automatizacion con IA aplicable a proyectos reales.',
    image: '/images/profile.jpg',
    url: '/blog',
};

export const posts = [
    {
        id: 1,
        slug: 'backend-laravel-escalable',
        category: 'Backend',
        title: 'Como estructuro un backend en Laravel',
        summary: 'Decisiones de arquitectura, organizacion de modulos y patrones que uso para mantener proyectos escalables.',
        date: '15 Nov 2024',
        readTime: '7 min',
        tags: ['Laravel', 'Arquitectura', 'Escalabilidad'],
        image: '/general-data-dashboard.png',
        url: '#',
    },
    {
        id: 2,
        slug: 'state-management-react-simple',
        category: 'Frontend',
        title: 'State management en React sin complicarse',
        summary: 'Cuando usar context, reducers o librerias, con ejemplos practicos y criterios claros.',
        date: '02 Oct 2024',
        readTime: '5 min',
        tags: ['React', 'UX', 'Escalabilidad'],
        image: '/kanban-board.png',
        url: '#',
    },
    {
        id: 3,
        slug: 'vite-tailwind-mejores-practicas',
        category: 'Performance',
        title: 'Mejores practicas con Vite y Tailwind',
        summary: 'Optimizacion de build, purgado de estilos y trucos para mantener CSS pequeno y rapido.',
        date: '18 Ago 2024',
        readTime: '4 min',
        tags: ['Vite', 'Tailwind', 'Performance'],
        image: '/real-estate.jpg',
        url: '#',
    },
    {
        id: 4,
        slug: 'cicd-github-actions-laravel-react',
        category: 'DevOps',
        title: 'CI/CD con GitHub Actions para Laravel + React',
        summary: 'Pipelines listos para produccion: test, lint, build y despliegue con caches y seguridad de secretos.',
        date: '26 Jul 2024',
        readTime: '6 min',
        tags: ['CI/CD', 'GitHub Actions', 'Automatizacion'],
        image: '/placeholder.jpg',
        url: '#',
    },
];

export const contactInfo = {
    email: 'yoninfantearce@gmail.com',
    phone: '+51 940 781 831',
    location: 'Chanchamayo, Junin - Peru',
};

export const contactSeo = {
    title: 'Contacto | Yon Infante - Fullstack, IA y DevOps',
    description:
        'Agenda una llamada o escribe para planear tu siguiente release. Respondo en menos de 24h con propuestas claras y accionables.',
    image: '/images/profile.jpg',
    url: '/contact',
};
