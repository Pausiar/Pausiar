/* ═══════════════════════════════════════════════════════
   APP.JS — Portfolio Application Logic
   GSAP Animations · Projects · Filters · Preview Modal
   3D Card Hover · Custom Cursor · Navigation
   ═══════════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ───────────────────────────────────────────────────
       PROJECT DATA
       ─────────────────────────────────────────────────── */
    const projects = [
        {
            title: 'JARVIS',
            description:
                'AI-powered personal assistant built with Python. Voice recognition, task automation, and natural language processing capabilities.',
            tech: ['Python', 'AI', 'NLP'],
            category: 'tools',
            icon: 'fas fa-robot',
            github: 'https://github.com/Pausiar/JARVIS',
            stars: 1,
            featured: true,
        },
        {
            title: 'School Bus Tracker',
            description:
                'Real-time school bus tracking application with route management, notifications, and live GPS monitoring.',
            tech: ['JavaScript', 'Node.js', 'Real-time'],
            category: 'web',
            icon: 'fas fa-bus',
            github: 'https://github.com/Pausiar/proyecto-final-school-bus',
            stars: 1,
            featured: true,
        },
        {
            title: 'Talleres Mañes',
            description:
                'Professional website for an auto repair workshop. Clean responsive design with modern UI and service catalog.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            category: 'web',
            icon: 'fas fa-wrench',
            github: 'https://github.com/Pausiar/talleres-manes-web',
            live: 'https://pausiar.github.io/talleres-manes-web/',
            stars: 1,
            featured: true,
        },
        {
            title: 'Twitch Stream Downloader',
            description:
                'Tool to download full Twitch streams for archiving, editing, or personal use. Automated VOD retrieval system.',
            tech: ['Python', 'API', 'Automation'],
            category: 'tools',
            icon: 'fab fa-twitch',
            github: 'https://github.com/Pausiar/TwitchDowloader',
        },
        {
            title: 'Twitch Bot Viewer',
            description:
                'Automated Twitch viewing bot with configurable settings, proxy support, and session management.',
            tech: ['Python', 'Twitch API', 'Bot'],
            category: 'tools',
            icon: 'fab fa-twitch',
            github: 'https://github.com/Pausiar/Twitch-bot-viewer',
            stars: 2,
        },
        {
            title: 'Valorant Wintrading Checker',
            description:
                'Analytics tool to detect wintrading patterns in Valorant competitive matches using the Riot Games API.',
            tech: ['Python', 'Data Analysis', 'Riot API'],
            category: 'tools',
            icon: 'fas fa-crosshairs',
            github: 'https://github.com/Pausiar/wintrading-checker-valorant',
        },
        {
            title: 'FiveM Anti-Cheat Dashboard',
            description:
                'Web dashboard for monitoring and managing anti-cheat detections in FiveM roleplay servers. Real-time alerts.',
            tech: ['JavaScript', 'Dashboard', 'FiveM'],
            category: 'gaming',
            icon: 'fas fa-shield-alt',
            github: 'https://github.com/Pausiar/ps-anticheat-dashboard',
            featured: true,
        },
        {
            title: 'Beach Tycoon',
            description:
                'Sustainability-focused beach management game. Plan resources, manage waste, and keep the environment clean!',
            tech: ['Java', 'Game Dev', 'Education'],
            category: 'gaming',
            icon: 'fas fa-umbrella-beach',
            github: 'https://github.com/Pausiar/JuegoSostenibilidad-BeachTycoon',
        },
        {
            title: 'FiveM Inventory Reskin',
            description:
                'Complete UI redesign for ox_inventory in FiveM servers. Custom HTML/CSS theme with smooth animations.',
            tech: ['Lua', 'HTML/CSS', 'FiveM'],
            category: 'gaming',
            icon: 'fas fa-boxes-stacked',
            github: 'https://github.com/Pausiar/ox_inventory-reskin',
            stars: 1,
        },
        {
            title: 'FiveM Scripts Docs',
            description:
                'Documentation website for FiveM scripting resources — guides, API references, and setup tutorials.',
            tech: ['HTML', 'CSS', 'Docs'],
            category: 'web',
            icon: 'fas fa-book',
            github: 'https://github.com/Pausiar/ps_scripts-documentation',
            live: 'https://pausiar.github.io/ps_scripts-documentation/',
            stars: 2,
        },
        {
            title: 'ProCoach',
            description:
                'Android coaching app for fitness and personal training management with workout tracking and scheduling.',
            tech: ['Java', 'Android', 'Mobile'],
            category: 'mobile',
            icon: 'fas fa-dumbbell',
            github: 'https://github.com/Pausiar/Android-ProCoach',
        },
        {
            title: 'TheMovieDB App',
            description:
                'Android app consuming TheMovieDB API to browse movies, TV shows, ratings, and cast information.',
            tech: ['Java', 'Android', 'REST API'],
            category: 'mobile',
            icon: 'fas fa-film',
            github: 'https://github.com/Pausiar/Android-TheMovieDB',
        },
        {
            title: 'AutoClipStudio',
            description:
                'Automated clip creation and editing tool. Streamline your content workflow with smart video processing.',
            tech: ['HTML', 'Automation', 'Video'],
            category: 'tools',
            icon: 'fas fa-scissors',
            github: 'https://github.com/Pausiar/AutoClipStudio-DOCS',
            live: 'https://pausiar.github.io/AutoClipStudio-DOCS/',
        },
        {
            title: 'Music Website',
            description:
                'Aesthetic music-themed website with modern design, playlist integration, and creative UI animations.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            category: 'web',
            icon: 'fas fa-music',
            github: 'https://github.com/Pausiar/web-musica',
            live: 'https://pausiar.github.io/web-musica/',
        },
        {
            title: 'Content Warning Menu',
            description:
                'Custom menu mod for the Content Warning game built with C# and Unity modding framework.',
            tech: ['C#', 'Unity', 'Modding'],
            category: 'gaming',
            icon: 'fas fa-ghost',
            github: 'https://github.com/Pausiar/content-warning-menu',
        },
        {
            title: 'Aura Flow',
            description:
                'Aesthetic visual flow website featuring creative CSS animations, gradients, and interactive elements.',
            tech: ['CSS', 'HTML', 'Design'],
            category: 'web',
            icon: 'fas fa-wand-magic-sparkles',
            github: 'https://github.com/Pausiar/aura-flow',
            live: 'https://pausiar.github.io/aura-flow/',
        },
        {
            title: 'Booking Creator',
            description:
                'Booking management system for businesses. Companies set up their own profile, services, and accept reservations with payment integration.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            category: 'web',
            icon: 'fas fa-calendar-check',
            github: 'https://github.com/Pausiar/proyecto-final',
            stars: 1,
        },
        {
            title: 'Social Media Tools',
            description:
                'Set of tools to boost social media channels with automation utilities for content scheduling and engagement.',
            tech: ['HTML', 'JavaScript', 'Automation'],
            category: 'tools',
            icon: 'fas fa-share-nodes',
            github: 'https://github.com/Pausiar/social-media-tools',
        },
        {
            title: 'TikTok Boost',
            description:
                'Automated TikTok growth tool to help boost visibility and engagement on the TikTok platform.',
            tech: ['HTML', 'JavaScript', 'Automation'],
            category: 'tools',
            icon: 'fab fa-tiktok',
            github: 'https://github.com/Pausiar/tiktok_boost',
        },
        {
            title: 'CS Gambling Site',
            description:
                'Counter-Strike themed gambling/gaming site with custom UI and interactive design.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            category: 'web',
            icon: 'fas fa-dice',
            github: 'https://github.com/Pausiar/cs_gamglinb_site',
        },
        {
            title: 'Typo Mod',
            description:
                'Styled text generator with small caps conversion, emoji selector, bracket styles, and real-time preview.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            category: 'tools',
            icon: 'fas fa-font',
            github: 'https://github.com/Pausiar/Typo_Mod',
            live: 'https://pausiar.github.io/Typo_Mod',
        },
        {
            title: 'Check Space',
            description:
                'File storage analyzer that quickly identifies which files are consuming the most disk space.',
            tech: ['JavaScript', 'Node.js', 'CLI'],
            category: 'tools',
            icon: 'fas fa-hard-drive',
            github: 'https://github.com/Pausiar/check-space',
        },
        {
            title: 'SEO Analyzer',
            description:
                'SEO analysis tool that inspects web pages and provides actionable insights to improve search engine rankings.',
            tech: ['JavaScript', 'SEO', 'Web'],
            category: 'tools',
            icon: 'fas fa-magnifying-glass-chart',
            github: 'https://github.com/Pausiar/SEO-Analyzer',
        },
        {
            title: 'Google MCPs',
            description:
                'Google MCP (Model Context Protocol) integrations for Google Search Console and Google AdSense.',
            tech: ['Python', 'MCP', 'AI'],
            category: 'tools',
            icon: 'fab fa-google',
            github: 'https://github.com/Pausiar/Google-MCPs',
        },
        {
            title: 'FiveM Anti-Tank',
            description:
                'FiveM script that prevents players from dying to headshots, balancing combat in roleplay servers.',
            tech: ['Lua', 'FiveM', 'Script'],
            category: 'gaming',
            icon: 'fas fa-shield-halved',
            github: 'https://github.com/Pausiar/ps_antitank',
            stars: 1,
        },
        {
            title: 'ox_target Reskin',
            description:
                'Custom UI redesign for the ox_target FiveM resource with modern styling and smooth interactions.',
            tech: ['Lua', 'HTML/CSS', 'FiveM'],
            category: 'gaming',
            icon: 'fas fa-crosshairs',
            github: 'https://github.com/Pausiar/ox_target-reskin',
        },
        {
            title: 'Anti-VDM Redesign',
            description:
                'UI redesign for the nova_antiVDM resource in FiveM servers with improved Spanish localization.',
            tech: ['Lua', 'HTML/CSS', 'FiveM'],
            category: 'gaming',
            icon: 'fas fa-car-burst',
            github: 'https://github.com/Pausiar/nova_antiVDM-redesign-ESP-',
        },
        {
            title: 'okokReports Redesign',
            description:
                'Complete UI redesign for the okokReports FiveM resource with a cleaner, more modern interface.',
            tech: ['Lua', 'HTML/CSS', 'FiveM'],
            category: 'gaming',
            icon: 'fas fa-flag',
            github: 'https://github.com/Pausiar/okokReports-redesign',
        },
        {
            title: 'FiveM Maps',
            description:
                'Custom map additions and modifications for FiveM roleplay servers built with mapping tools.',
            tech: ['Lua', 'FiveM', 'Mapping'],
            category: 'gaming',
            icon: 'fas fa-map-location-dot',
            github: 'https://github.com/Pausiar/mapeados',
        },
        {
            title: 'Scoreboard Reskin',
            description:
                'UI reskin for the omes_scoreboard FiveM resource with a redesigned player list and server stats.',
            tech: ['Lua', 'HTML/CSS', 'FiveM'],
            category: 'gaming',
            icon: 'fas fa-table-list',
            github: 'https://github.com/Pausiar/omes_scoreboard-reskin',
        },
        {
            title: 'Announces Reskin',
            description:
                'Custom UI redesign for the lux-announces FiveM resource with smooth animations and modern look.',
            tech: ['Lua', 'CSS', 'FiveM'],
            category: 'gaming',
            icon: 'fas fa-bullhorn',
            github: 'https://github.com/Pausiar/lux-announces-reskin',
        },
        {
            title: 'Multijob Reskin',
            description:
                'UI redesign for the ec-multijob FiveM resource, improving the job selection and management interface.',
            tech: ['Lua', 'HTML/CSS', 'FiveM'],
            category: 'gaming',
            icon: 'fas fa-briefcase',
            github: 'https://github.com/Pausiar/ec-multijob-reskin',
        },
        {
            title: 'FiveM Robbery',
            description:
                'Ammu-Nation robbery script for FiveM servers with configurable settings and reward system.',
            tech: ['Lua', 'FiveM', 'Script'],
            category: 'gaming',
            icon: 'fas fa-gun',
            github: 'https://github.com/Pausiar/ps_ammurobery',
        },
        {
            title: 'FiveM Suelo',
            description:
                'Ground-based interaction script for FiveM servers adding terrain crawling and prone mechanics.',
            tech: ['Lua', 'FiveM', 'Script'],
            category: 'gaming',
            icon: 'fas fa-person-falling',
            github: 'https://github.com/Pausiar/ps_suelo',
        },
        {
            title: 'FiveM No Radio',
            description:
                'Script that disables the radio UI in FiveM servers for a cleaner roleplay experience.',
            tech: ['Lua', 'FiveM', 'Script'],
            category: 'gaming',
            icon: 'fas fa-radio',
            github: 'https://github.com/Pausiar/ps_noradio',
        },
        {
            title: 'Appearance Reskin',
            description:
                'UI reskin for the illenium-appearance FiveM resource with a modern character customization interface.',
            tech: ['Lua', 'HTML/CSS', 'FiveM'],
            category: 'gaming',
            icon: 'fas fa-user-pen',
            github: 'https://github.com/Pausiar/illenium-appearance-reskin',
        },
        {
            title: 'FiveM Car Crash',
            description:
                'Realistic car crash script for FiveM that triggers injury effects and emergency services on high-impact collisions.',
            tech: ['Lua', 'FiveM', 'Script'],
            category: 'gaming',
            icon: 'fas fa-car-crash',
            github: 'https://github.com/Pausiar/ps_carcrash',
        },
        {
            title: 'FiveM Suicide',
            description:
                'Roleplay suicide/respawn script for FiveM servers with configurable animations and respawn options.',
            tech: ['Lua', 'FiveM', 'Script'],
            category: 'gaming',
            icon: 'fas fa-skull',
            github: 'https://github.com/Pausiar/ps_suicide',
        },
        {
            title: 'Arkanoid',
            description:
                'Classic Arkanoid brick-breaker game built with C# and Unity, featuring multiple levels and power-ups.',
            tech: ['C#', 'Unity', 'Game Dev'],
            category: 'gaming',
            icon: 'fas fa-gamepad',
            github: 'https://github.com/Pausiar/Arkanoid',
        },
        {
            title: 'Amplya',
            description:
                'Android application with a landing page and APK distribution. A mobile utility app with modern UI.',
            tech: ['Java', 'Android', 'HTML'],
            category: 'mobile',
            icon: 'fas fa-mobile-screen',
            github: 'https://github.com/Pausiar/Amplya-In-Out',
        },
        {
            title: 'Real-Time Translate',
            description:
                'Android app for real-time speech translation from Polish to Spanish using on-device processing.',
            tech: ['Kotlin', 'Android', 'ML'],
            category: 'mobile',
            icon: 'fas fa-language',
            github: 'https://github.com/Pausiar/realtime-translate',
        },
        {
            title: 'Contador Vidas',
            description:
                'Android life counter app for board games and card games with customizable player tracking.',
            tech: ['Kotlin', 'Android', 'Mobile'],
            category: 'mobile',
            icon: 'fas fa-heart',
            github: 'https://github.com/Pausiar/Android-ContadorVidas',
        },
        {
            title: 'NotesDeVeu',
            description:
                'Android notes application with voice recording support for creating and organizing audio notes.',
            tech: ['Java', 'Android', 'Mobile'],
            category: 'mobile',
            icon: 'fas fa-microphone',
            github: 'https://github.com/Pausiar/Android-NotesDeVeu',
        },
    ];

    /* ───────────────────────────────────────────────────
       DOM REFERENCES
       ─────────────────────────────────────────────────── */
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const loader = $('#loader');
    const cursorDot = $('#cursor-dot');
    const cursorOutline = $('#cursor-outline');
    const navbar = $('#navbar');
    const navToggle = $('#nav-toggle');
    const mobileMenu = $('#mobile-menu');
    const projectsGrid = $('#projects-grid');
    const previewModal = $('#preview-modal');
    const previewIframe = $('#preview-iframe');
    const previewUrl = $('#preview-url');
    const previewClose = $('#preview-close');

    /* ───────────────────────────────────────────────────
       LOADER
       ─────────────────────────────────────────────────── */
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            initAnimations();
        }, 2200);
    });

    /* ───────────────────────────────────────────────────
       CUSTOM CURSOR
       ─────────────────────────────────────────────────── */
    if (window.innerWidth > 768) {
        let cx = 0, cy = 0;
        let ox = 0, oy = 0;

        document.addEventListener('mousemove', (e) => {
            cx = e.clientX;
            cy = e.clientY;
        });

        function updateCursor() {
            // Dot follows immediately
            cursorDot.style.left = cx + 'px';
            cursorDot.style.top = cy + 'px';

            // Outline follows with delay
            ox += (cx - ox) * 0.12;
            oy += (cy - oy) * 0.12;
            cursorOutline.style.left = ox + 'px';
            cursorOutline.style.top = oy + 'px';

            requestAnimationFrame(updateCursor);
        }
        updateCursor();

        // Hover state on interactive elements
        const interactiveEls = 'a, button, .btn, .filter-btn, .project-card, .social-link, .project-preview-btn, .project-link, .nav-toggle';

        document.addEventListener('mouseover', (e) => {
            if (e.target.closest(interactiveEls)) {
                cursorDot.classList.add('hovering');
                cursorOutline.classList.add('hovering');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest(interactiveEls)) {
                cursorDot.classList.remove('hovering');
                cursorOutline.classList.remove('hovering');
            }
        });
    }

    /* ───────────────────────────────────────────────────
       NAVIGATION
       ─────────────────────────────────────────────────── */
    // Scroll — add background
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        navbar.classList.toggle('scrolled', scrollY > 50);
        lastScroll = scrollY;
    });

    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    $$('.mobile-link').forEach((link) => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active nav link on scroll
    const sections = $$('.section');
    const navLinks = $$('.nav-link');

    function updateActiveNav() {
        const scrollPos = window.pageYOffset + 200;
        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach((link) => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav);

    /* ───────────────────────────────────────────────────
       SMOOTH SCROLL (for nav links)
       ─────────────────────────────────────────────────── */
    $$('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.offsetTop - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    /* ───────────────────────────────────────────────────
       GSAP ANIMATIONS
       ─────────────────────────────────────────────────── */
    function initAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        /* ── Hero Entrance ── */
        const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        heroTl
            .to('.hero-word', {
                y: 0,
                duration: 1.2,
                stagger: 0.15,
            })
            .to(
                '.hero-badge',
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.6'
            )
            .to(
                '.hero-subtitle',
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.4'
            )
            .to(
                '.hero-description',
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.4'
            )
            .to(
                '.hero-cta',
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.4'
            );

        /* ── Immersive Zoom-In from Hero ── */
        gsap.to('.hero-content', {
            scale: 1.8,
            opacity: 0,
            filter: 'blur(10px)',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: '80% top',
                scrub: 1.5,
            },
        });

        gsap.to('.scroll-indicator', {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero',
                start: '10% top',
                end: '30% top',
                scrub: true,
            },
        });

        /* ── Section Reveals ── */
        $$('[data-reveal]').forEach((el, i) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    end: 'top 60%',
                    onEnter: () => el.classList.add('revealed'),
                },
            });
        });

        /* ── Parallax on About Section ── */
        gsap.to('.about-text', {
            y: -40,
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });

        gsap.to('.about-stats', {
            y: -20,
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
        });

        /* ── 3D Keyboard Stagger ── */
        gsap.from('.key', {
            y: 60,
            opacity: 0,
            rotationX: 30,
            stagger: 0.06,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.keyboard-body',
                start: 'top 80%',
            },
        });

        gsap.from('.skill-info-panel', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.skill-info-panel',
                start: 'top 90%',
            },
        });

        /* ── Project Cards 3D Stagger ── */
        function animateProjectCards() {
            gsap.from('.project-card:not(.hidden)', {
                y: 100,
                opacity: 0,
                rotationY: 10,
                scale: 0.95,
                stagger: 0.1,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 85%',
                },
            });
        }

        // Initial render & animate
        renderProjects();
        animateProjectCards();

        /* ── Counter Animation ── */
        $$('[data-count]').forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-count'));
            gsap.to(counter, {
                innerText: target,
                duration: 2,
                snap: { innerText: 1 },
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: counter,
                    start: 'top 85%',
                },
            });
        });

        /* ── Contact Section ── */
        gsap.from('.contact-content', {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 90%',
            },
        });

        gsap.from('.social-link', {
            y: 30,
            opacity: 0,
            scale: 0.8,
            stagger: 0.1,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.social-links',
                start: 'top 95%',
            },
        });

        /* ── Parallax Story — Section Backgrounds ── */
        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { backgroundPositionY: '-20%' },
                {
                    backgroundPositionY: '20%',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );
        });
    }

    /* ───────────────────────────────────────────────────
       RENDER PROJECTS
       ─────────────────────────────────────────────────── */
    function renderProjects(filter = 'all') {
        projectsGrid.innerHTML = '';

        const filtered =
            filter === 'all'
                ? projects
                : projects.filter((p) => p.category === filter);

        filtered.forEach((project) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.dataset.category = project.category;

            const starsHtml = project.stars
                ? `<div class="project-stars">
                       <i class="fas fa-star"></i>
                       <span>${project.stars}</span>
                   </div>`
                : '';

            const featuredHtml = project.featured
                ? `<span class="featured-badge">Featured</span>`
                : '';

            const liveLink = project.live
                ? `<a href="${project.live}" target="_blank" rel="noopener" class="project-link" title="Live Demo">
                       <i class="fas fa-external-link-alt"></i>
                   </a>`
                : '';

            const previewBtn = project.live
                ? `<button class="project-preview-btn" data-url="${project.live}" data-title="${project.title}">
                       <i class="fas fa-eye"></i> Live Preview
                   </button>`
                : '';

            card.innerHTML = `
                ${featuredHtml}
                <div class="card-shine"></div>
                <div class="project-card-inner">
                    <div class="project-header">
                        <div class="project-icon">
                            <i class="${project.icon}"></i>
                        </div>
                        <div class="project-links">
                            <a href="${project.github}" target="_blank" rel="noopener" class="project-link" title="GitHub">
                                <i class="fab fa-github"></i>
                            </a>
                            ${liveLink}
                        </div>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map((t) => `<span class="project-tech-tag">${t}</span>`).join('')}
                    </div>
                    <div class="project-footer">
                        ${starsHtml}
                        ${previewBtn}
                    </div>
                </div>
            `;

            projectsGrid.appendChild(card);
        });

        // Attach 3D hover
        attach3DHover();

        // Attach preview buttons
        attachPreviewButtons();
    }

    /* ───────────────────────────────────────────────────
       PROJECT FILTERS
       ─────────────────────────────────────────────────── */
    $$('.filter-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            $$('.filter-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            renderProjects(filter);

            // Re-animate cards
            gsap.from('.project-card', {
                y: 60,
                opacity: 0,
                scale: 0.9,
                rotationY: 8,
                stagger: 0.08,
                duration: 0.6,
                ease: 'power3.out',
            });
        });
    });

    /* ───────────────────────────────────────────────────
       3D CARD HOVER EFFECT
       ─────────────────────────────────────────────────── */
    function attach3DHover() {
        if (window.innerWidth <= 768) return;

        $$('.project-card').forEach((card) => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -8;
                const rotateY = ((x - centerX) / centerX) * 8;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;

                // Update shine position
                card.style.setProperty('--mouse-x', x + 'px');
                card.style.setProperty('--mouse-y', y + 'px');
                card.style.setProperty('--shine-x', x + 'px');
                card.style.setProperty('--shine-y', y + 'px');
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

    /* ───────────────────────────────────────────────────
       PREVIEW MODAL (Live Website Previews)
       ─────────────────────────────────────────────────── */
    function attachPreviewButtons() {
        $$('.project-preview-btn').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const url = btn.dataset.url;
                const title = btn.dataset.title;
                openPreview(url, title);
            });
        });
    }

    function openPreview(url, title) {
        previewIframe.src = url;
        previewUrl.textContent = url;
        previewModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePreview() {
        previewModal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            previewIframe.src = '';
        }, 400);
    }

    previewClose.addEventListener('click', closePreview);

    previewModal.addEventListener('click', (e) => {
        if (e.target === previewModal) closePreview();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePreview();
    });

    // Preview size controls
    $$('.preview-size').forEach((btn) => {
        btn.addEventListener('click', () => {
            $$('.preview-size').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            const width = btn.dataset.width;
            previewIframe.style.width =
                width === '100%' ? '100%' : width + 'px';
        });
    });

    /* ───────────────────────────────────────────────────
       MAGNETIC EFFECT (Buttons)
       ─────────────────────────────────────────────────── */
    if (window.innerWidth > 768) {
        $$('.magnetic').forEach((el) => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0)';
            });
        });
    }

    /* ───────────────────────────────────────────────────
       TYPEWRITER EFFECT
       ─────────────────────────────────────────────────── */
    const typewriterEl = $('#typewriter');
    const titles = [
        'Full-Stack Developer',
        'AI Enthusiast',
        'FiveM Developer',
        'Creative Coder',
        'Mobile App Developer',
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeWriter() {
        const current = titles[titleIndex];

        if (isDeleting) {
            typewriterEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typewriterEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === current.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // Start after loader
    setTimeout(typeWriter, 3000);

    /* ───────────────────────────────────────────────────
       TILT EFFECT ON STAT CARDS
       ─────────────────────────────────────────────────── */
    if (window.innerWidth > 768) {
        $$('.stat-card').forEach((card) => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            });
        });
    }

    /* ───────────────────────────────────────────────────
       3D KEYBOARD INTERACTIONS
       ─────────────────────────────────────────────────── */
    const skillData = {
        lua:        { title: 'Lua',        desc: 'Extensive experience writing FiveM server scripts, game logic, and NUI resource bridges.', level: 90 },
        java:       { title: 'Java',       desc: 'Backend services, Spring Boot APIs, and Android applications. Strong OOP foundation.', level: 85 },
        python:     { title: 'Python',     desc: 'Automation scripts, AI/ML prototypes, Discord bots, and data processing pipelines.', level: 80 },
        javascript: { title: 'JavaScript', desc: 'Full-stack web dev — frontend UIs, Node.js servers, DOM manipulation, and interactive experiences.', level: 85 },
        html5:      { title: 'HTML5',      desc: 'Semantic markup, accessibility-first design, canvas, and custom web components.', level: 90 },
        css3:       { title: 'CSS3',       desc: 'Advanced layouts, animations, 3D transforms, responsive design, and custom properties.', level: 88 },
        csharp:     { title: 'C#',         desc: 'Unity game scripts, .NET utilities, and Windows desktop tooling.', level: 65 },
        kotlin:     { title: 'Kotlin',     desc: 'Modern Android development with Jetpack Compose, coroutines, and MVVM architecture.', level: 70 },
        spring:     { title: 'Spring',     desc: 'RESTful APIs with Spring Boot, security, JPA/Hibernate, and microservice patterns.', level: 75 },
        react:      { title: 'React',      desc: 'Component-driven UIs, hooks, state management, and single-page applications.', level: 72 },
        nodejs:     { title: 'Node.js',    desc: 'Express/Fastify servers, real-time sockets, REST APIs, and build tooling.', level: 78 },
        docker:     { title: 'Docker',     desc: 'Containerised deployments, Docker Compose stacks, and CI/CD pipeline images.', level: 60 },
        git:        { title: 'Git',        desc: 'Version control, branching strategies, pull requests, and collaborative workflows.', level: 85 },
        android:    { title: 'Android',    desc: 'Native apps in Java & Kotlin, Material Design, and Play Store deployments.', level: 70 },
        linux:      { title: 'Linux',      desc: 'Server administration, shell scripting, and development environment management.', level: 65 },
        fivem:      { title: 'FiveM & Game Modding', desc: 'Custom game servers, Lua scripting, NUI interfaces, ox_lib, ESX & QBCore frameworks.', level: 95 },
    };

    function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
    }

    const keys = $$('.key');
    const infoTitle = $('#skill-info-title');
    const infoDesc  = $('#skill-info-desc');
    const infoIcon  = $('#skill-info-icon');
    const infoBarFill = $('#skill-info-bar-fill');
    const infoLevel = $('#skill-info-level');

    keys.forEach((key) => {
        const color = key.dataset.color;
        if (color) {
            const { r, g, b } = hexToRgb(color);
            key.style.setProperty('--key-r', r);
            key.style.setProperty('--key-g', g);
            key.style.setProperty('--key-b', b);
        }

        key.addEventListener('mouseenter', () => {
            const skill = key.dataset.skill;
            const data = skillData[skill];
            if (!data) return;
            const iconEl = key.querySelector('i');
            if (infoIcon) infoIcon.innerHTML = iconEl ? iconEl.outerHTML : '';
            if (infoTitle) infoTitle.textContent = data.title;
            if (infoDesc)  infoDesc.textContent  = data.desc;
            if (infoBarFill) infoBarFill.style.width = data.level + '%';
            if (infoLevel) {
                let lvl = 'Beginner';
                if (data.level >= 85) lvl = 'Advanced';
                else if (data.level >= 70) lvl = 'Proficient';
                else if (data.level >= 50) lvl = 'Intermediate';
                infoLevel.textContent = lvl + ' — ' + data.level + '%';
            }
            if (color) {
                const panel = $('#skill-info-panel');
                if (panel) panel.style.borderColor = color;
            }
        });

        key.addEventListener('click', () => {
            key.classList.add('pressed');
            setTimeout(() => key.classList.remove('pressed'), 200);
        });
    });

    /* ───────────────────────────────────────────────────
       SAKURA PARTICLE GENERATOR
       ─────────────────────────────────────────────────── */
    const sakuraContainer = $('#sakura-container');
    function spawnSakura() {
        if (!sakuraContainer) return;
        const petal = document.createElement('div');
        petal.className = 'sakura-petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.setProperty('--drift', (Math.random() * 160 - 80) + 'px');
        const dur = 8 + Math.random() * 7;
        petal.style.animationDuration = dur + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';
        const size = 8 + Math.random() * 10;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        sakuraContainer.appendChild(petal);
        setTimeout(() => petal.remove(), (dur + 2) * 1000);
    }

    // Spawn petals periodically
    setInterval(spawnSakura, 1200);
    // Initial burst
    for (let i = 0; i < 8; i++) setTimeout(spawnSakura, i * 300);

    /* ───────────────────────────────────────────────────
       PARALLAX MOUSE MOVEMENT ON HERO
       ─────────────────────────────────────────────────── */
    if (window.innerWidth > 768) {
        const heroContent = $('.hero-content');

        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;

            if (heroContent) {
                heroContent.style.transform = `translate(${x * 10}px, ${y * 8}px)`;
            }
        });
    }

    /* ───────────────────────────────────────────────────
       INTERSECTION OBSERVER FOR REVEALS
       (Fallback if GSAP scroll trigger didn't apply)
       ─────────────────────────────────────────────────── */
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    $$('[data-reveal]').forEach((el) => observer.observe(el));
})();
