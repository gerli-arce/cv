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
        title: 'E-Commerce Dashboard',
        description:
            'Panel de administracion para tiendas online. Gestion de inventario, pedidos y analitica de ventas en tiempo real con graficos interactivos.',
        image: '/general-data-dashboard.png',
        tags: ['Laravel', 'React', 'Inertia', 'Tailwind'],
        demoUrl: '#',
        codeUrl: '#',
    },
    {
        id: 2,
        title: 'Task Management App',
        description:
            'Aplicacion colaborativa tipo Kanban con autenticacion, actualizaciones en tiempo real y asignacion de roles.',
        image: '/kanban-board.png',
        tags: ['React', 'Vite', 'Firebase', 'Redux'],
        demoUrl: '#',
        codeUrl: '#',
    },
    {
        id: 3,
        title: 'Real Estate Platform',
        description:
            'Plataforma de bienes raices con busqueda avanzada, mapas interactivos y sistema de citas optimizado para SEO.',
        image: '/real-estate.jpg',
        tags: ['Laravel', 'MySQL', 'Vue.js', 'Bootstrap'],
        demoUrl: '#',
        codeUrl: '#',
    },
];

export const posts = [
    {
        id: 1,
        title: 'Como estructuro un backend en Laravel',
        summary: 'Decisiones de arquitectura, organizacion de modulos y patrones que uso para mantener proyectos escalables.',
        date: '15 Nov 2024',
        readTime: '7 min',
    },
    {
        id: 2,
        title: 'State management en React sin complicarse',
        summary: 'Cu?ndo usar context, reducers o librerias, con ejemplos practicos y criterios claros.',
        date: '02 Oct 2024',
        readTime: '5 min',
    },
    {
        id: 3,
        title: 'Mejores practicas con Vite y Tailwind',
        summary: 'Optimizacion de build, purgado de estilos y trucos para mantener CSS pequeno y rapido.',
        date: '18 Ago 2024',
        readTime: '4 min',
    },
];

export const contactInfo = {
    email: 'yoninfantearce@gmail.com',
    phone: '+51 940 781 831',
    location: 'Chanchamayo, Junin - Peru',
};
