const iconPaths = {
    ai: 'M12 2a3 3 0 0 1 3 3v1h1a3 3 0 0 1 3 3v1h1a2 2 0 1 1 0 4h-1v1a3 3 0 0 1-3 3h-1v1a3 3 0 1 1-6 0v-1H8a3 3 0 0 1-3-3v-1H4a2 2 0 1 1 0-4h1V9a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3Zm-3 6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H9Zm1 3h2v2h-2v-2Zm4 0h2v2h-2v-2Z',
    mobile: 'M8 2h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8Zm2 13h4v2h-4v-2Z',
    web: 'M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5v2h3v2H7v-2h3v-2H5a2 2 0 0 1-2-2V5Zm2 0v10h14V5H5Z',
    docs: 'M6 2h8l5 5v15H6V2Zm7 2H8v16h9V8h-4V4Zm-2 8h4v2h-4v-2Zm-1 4h5v2h-5v-2Z',
    automation: 'M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6l-8-4Zm0 2.2 6 3V12c0 3.6-2.3 6.3-6 7.8-3.7-1.5-6-4.2-6-7.8V7.2l6-3ZM9 11h6v2H9v-2Z',
    game: 'M7 9h10a5 5 0 0 1 4.8 3.6l.7 2.5a3 3 0 0 1-5 2.9L15.6 16H8.4l-1.9 2a3 3 0 0 1-5-2.9l.7-2.5A5 5 0 0 1 7 9Zm1 2v2H6v2H4v-2H2v-2h2V9h2v2h2Zm9 .5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z'
};

const projects = [
    {
        title: 'rep-servicios-procesos',
        description: 'Repositorio JavaScript reciente para prácticas y tooling de servicios/procesos, incorporado al snapshot público más actual.',
        tech: ['JavaScript', 'Procesos', 'Tooling'],
        status: 'Actualizado Jun 2026',
        repo: 'https://github.com/Pausiar/rep-servicios-procesos',
        icon: 'automation'
    },
    {
        title: 'ADA-rep',
        description: 'Trabajo JavaScript de análisis, diseño y algoritmos, incluido entre los repositorios recientes del perfil.',
        tech: ['JavaScript', 'Algorithms', 'Academic'],
        status: 'Actualizado Jun 2026',
        repo: 'https://github.com/Pausiar/ADA-rep',
        icon: 'docs'
    },
    {
        title: 'Fit Track Android',
        description: 'App Android de seguimiento personal con foco mobile, experiencia práctica y evolución dentro del portfolio técnico.',
        tech: ['Kotlin', 'Android', 'Mobile UI'],
        status: 'Actualizado Jun 2026',
        repo: 'https://github.com/Pausiar/fit-track-android',
        icon: 'mobile'
    },
    {
        title: 'Openfy',
        description: 'Proyecto Kotlin destacado dentro del ecosistema de Pausiar, orientado a producto y desarrollo móvil/open-source.',
        tech: ['Kotlin', 'Open-source', 'Product'],
        status: 'Actualizado Jun 2026',
        repo: 'https://github.com/Pausiar/openfy',
        icon: 'mobile'
    },
    {
        title: 'Realtime Translate',
        description: 'App Android para traducción de voz en tiempo real; el repositorio público la describe como traducción de polaco a español.',
        tech: ['Kotlin', 'Android', 'IA aplicada'],
        status: 'Actualizado Jun 2026',
        repo: 'https://github.com/Pausiar/realtime-translate',
        icon: 'mobile'
    },
    {
        title: 'correturnos-pamesa',
        description: 'Aplicación Kotlin reciente orientada a gestión operativa de turnos y procesos, incorporada al portfolio 2026.',
        tech: ['Kotlin', 'Android', 'Operations'],
        status: 'Actualizado Jun 2026',
        repo: 'https://github.com/Pausiar/correturnos-pamesa',
        icon: 'mobile'
    },
    {
        title: 'Premium Scripting Docs',
        description: 'Documentación pública para scripts premium, pensada para instalación rápida, soporte y consulta.',
        tech: ['Docs', 'HTML', 'CSS'],
        status: '2 stars · GitHub Pages',
        repo: 'https://github.com/Pausiar/ps_scripts-documentation',
        demo: 'https://pausiar.github.io/ps_scripts-documentation/',
        icon: 'docs'
    },
    {
        title: 'School Bus Live Tracker',
        description: 'Proyecto Java de tracking en tiempo real para transporte escolar con enfoque práctico y datos vivos.',
        tech: ['Java', 'Real-time', 'Tracking'],
        status: '1 star',
        repo: 'https://github.com/Pausiar/proyecto-final-school-bus',
        icon: 'web'
    },
    {
        title: 'Twitch Downloader',
        description: 'Herramienta para descargar streams completos de Twitch y conservarlos, editarlos o integrarlos en otros flujos.',
        tech: ['HTML', 'Twitch', 'Automation'],
        status: 'Automation tool',
        repo: 'https://github.com/Pausiar/TwitchDowloader',
        icon: 'automation'
    },
    {
        title: 'Check Space',
        description: 'Utilidad para encontrar qué archivos ocupan más almacenamiento y evitar quedarse sin espacio.',
        tech: ['JavaScript', 'Storage', 'Utility'],
        status: 'Developer tool',
        repo: 'https://github.com/Pausiar/check-space',
        icon: 'automation'
    },
    {
        title: 'Talleres Mañes Web',
        description: 'Sitio web oficial para Talleres Mañes, ejemplo de trabajo web real y publicado dentro del perfil.',
        tech: ['CSS', 'Web', 'Client site'],
        status: '1 star',
        repo: 'https://github.com/Pausiar/talleres-manes-web',
        icon: 'web'
    }
];

const projectsGrid = document.querySelector('#projects-grid');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');

function svgIcon(name) {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${iconPaths[name] || iconPaths.web}"/></svg>`;
}

function renderProjects() {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map((project) => {
        const links = project.repo
            ? `<a href="${project.repo}" target="_blank" rel="noopener noreferrer" aria-label="Repositorio de ${project.title}">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/></svg>
                </a>`
            : '<span class="project-link-muted">Pendiente</span>';

        return `
            <article class="project-card reveal">
                <div class="project-top">
                    <div class="project-icon">${svgIcon(project.icon)}</div>
                    <div class="project-links">
                        ${links}
                        ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Demo de ${project.title}">${svgIcon('web')}</a>` : ''}
                    </div>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">${project.tech.map((tech) => `<span>${tech}</span>`).join('')}</div>
                <span class="project-status">${project.status}</span>
            </article>
        `;
    }).join('');
}

function initNav() {
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        document.body.classList.toggle('menu-open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-open');
            document.body.classList.remove('menu-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function initReveal() {
    const elements = document.querySelectorAll('.section-heading, .service-item, .stack-card, .about-card, .contact-card, .legal-card, .reveal');
    elements.forEach((element) => element.classList.add('reveal'));

    if (!('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14 });

    elements.forEach((element) => observer.observe(element));
}

renderProjects();
initNav();
initReveal();
