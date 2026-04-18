/* ═══════════════════════════════════════════════════════
   THREE.JS — 3D Background Scene
   Star particles · Floating geometry · Mouse parallax
   ═══════════════════════════════════════════════════════ */

(function () {
    'use strict';

    const canvas = document.getElementById('three-canvas');
    if (!canvas) return;

    /* ───── Renderer ───── */
    const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /* ───── Scene & Camera ───── */
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.0008);

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        2000
    );
    camera.position.set(0, 0, 600);

    /* ───── Mouse tracking ───── */
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    document.addEventListener('mousemove', (e) => {
        mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    /* ───── Scroll tracking ───── */
    let scrollY = 0;
    window.addEventListener('scroll', () => {
        scrollY = window.pageYOffset;
    });

    /* ═══════════ STAR PARTICLES ═══════════ */
    const STAR_COUNT = 2500;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(STAR_COUNT * 3);
    const starColors = new Float32Array(STAR_COUNT * 3);
    const starSizes = new Float32Array(STAR_COUNT);

    const palette = [
        new THREE.Color(0x00d4ff),   // cyan
        new THREE.Color(0x7c3aed),   // purple
        new THREE.Color(0xff006e),   // pink
        new THREE.Color(0xffffff),   // white
        new THREE.Color(0x00ff88),   // green
    ];

    for (let i = 0; i < STAR_COUNT; i++) {
        const i3 = i * 3;
        // Distribute in a sphere
        const radius = 300 + Math.random() * 700;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        starPositions[i3]     = radius * Math.sin(phi) * Math.cos(theta);
        starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        starPositions[i3 + 2] = radius * Math.cos(phi);

        const color = palette[Math.floor(Math.random() * palette.length)];
        starColors[i3]     = color.r;
        starColors[i3 + 1] = color.g;
        starColors[i3 + 2] = color.b;

        starSizes[i] = Math.random() * 3 + 0.5;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

    /* Custom shader for size attenuation & glow */
    const starMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uPixelRatio: { value: renderer.getPixelRatio() },
        },
        vertexShader: `
            attribute float size;
            varying vec3 vColor;
            uniform float uTime;
            uniform float uPixelRatio;

            void main() {
                vColor = color;
                vec3 pos = position;

                // Subtle oscillation
                pos.x += sin(uTime * 0.3 + position.z * 0.01) * 2.0;
                pos.y += cos(uTime * 0.2 + position.x * 0.01) * 2.0;

                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                gl_PointSize = size * uPixelRatio * (200.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;

            void main() {
                float dist = length(gl_PointCoord - vec2(0.5));
                if (dist > 0.5) discard;

                float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
                alpha *= 0.8;

                gl_FragColor = vec4(vColor, alpha);
            }
        `,
        transparent: true,
        depthWrite: false,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    /* ═══════════ GALAXY RING ═══════════ */
    const RING_COUNT = 1200;
    const ringGeometry = new THREE.BufferGeometry();
    const ringPositions = new Float32Array(RING_COUNT * 3);
    const ringSizes = new Float32Array(RING_COUNT);

    for (let i = 0; i < RING_COUNT; i++) {
        const i3 = i * 3;
        const angle = (i / RING_COUNT) * Math.PI * 2;
        const radius = 180 + Math.random() * 60;
        const spread = (Math.random() - 0.5) * 30;

        ringPositions[i3]     = Math.cos(angle) * radius + (Math.random() - 0.5) * 20;
        ringPositions[i3 + 1] = spread;
        ringPositions[i3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 20;

        ringSizes[i] = Math.random() * 2 + 0.5;
    }

    ringGeometry.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
    ringGeometry.setAttribute('size', new THREE.BufferAttribute(ringSizes, 1));

    const ringMaterial = new THREE.PointsMaterial({
        color: 0x00d4ff,
        size: 2,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
    });

    const galaxyRing = new THREE.Points(ringGeometry, ringMaterial);
    galaxyRing.rotation.x = Math.PI * 0.3;
    scene.add(galaxyRing);

    /* ═══════════ FLOATING GEOMETRY ═══════════ */
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    // Wireframe material
    const wireMat = (color, opacity = 0.3) =>
        new THREE.MeshBasicMaterial({
            color,
            wireframe: true,
            transparent: true,
            opacity,
        });

    // Icosahedron — center
    const icosaGeo = new THREE.IcosahedronGeometry(60, 1);
    const icosa = new THREE.Mesh(icosaGeo, wireMat(0x00d4ff, 0.2));
    floatingGroup.add(icosa);

    // Inner icosahedron
    const icosaInner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(35, 0),
        wireMat(0x7c3aed, 0.25)
    );
    floatingGroup.add(icosaInner);

    // Torus — orbiting
    const torusGeo = new THREE.TorusGeometry(100, 2, 16, 100);
    const torus = new THREE.Mesh(torusGeo, wireMat(0x00d4ff, 0.12));
    torus.rotation.x = Math.PI * 0.5;
    floatingGroup.add(torus);

    // Second torus
    const torus2 = new THREE.Mesh(
        new THREE.TorusGeometry(130, 1.5, 16, 100),
        wireMat(0x7c3aed, 0.08)
    );
    torus2.rotation.x = Math.PI * 0.3;
    torus2.rotation.y = Math.PI * 0.2;
    floatingGroup.add(torus2);

    // Octahedron — side
    const octaGeo = new THREE.OctahedronGeometry(25, 0);
    const octa = new THREE.Mesh(octaGeo, wireMat(0xff006e, 0.3));
    octa.position.set(180, 80, -50);
    floatingGroup.add(octa);

    // Tetrahedron — other side
    const tetraGeo = new THREE.TetrahedronGeometry(20, 0);
    const tetra = new THREE.Mesh(tetraGeo, wireMat(0x00ff88, 0.3));
    tetra.position.set(-170, -60, 40);
    floatingGroup.add(tetra);

    // Small dodecahedron
    const dodecaGeo = new THREE.DodecahedronGeometry(18, 0);
    const dodeca = new THREE.Mesh(dodecaGeo, wireMat(0xffd700, 0.25));
    dodeca.position.set(-120, 120, -80);
    floatingGroup.add(dodeca);

    /* ═══════════ CONNECTING LINES (constellation effect) ═══════════ */
    const linesMaterial = new THREE.LineBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.06,
    });

    function createConstellationLines() {
        const points = [];
        for (let i = 0; i < 40; i++) {
            const x = (Math.random() - 0.5) * 800;
            const y = (Math.random() - 0.5) * 800;
            const z = (Math.random() - 0.5) * 400;
            points.push(new THREE.Vector3(x, y, z));
        }

        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dist = points[i].distanceTo(points[j]);
                if (dist < 250) {
                    const lineGeo = new THREE.BufferGeometry().setFromPoints([
                        points[i],
                        points[j],
                    ]);
                    const line = new THREE.Line(lineGeo, linesMaterial);
                    scene.add(line);
                }
            }
        }
    }
    createConstellationLines();

    /* ═══════════ AMBIENT LIGHT PARTICLES ═══════════ */
    const ambientCount = 100;
    const ambientGeometry = new THREE.BufferGeometry();
    const ambientPositions = new Float32Array(ambientCount * 3);

    for (let i = 0; i < ambientCount; i++) {
        ambientPositions[i * 3]     = (Math.random() - 0.5) * 1500;
        ambientPositions[i * 3 + 1] = (Math.random() - 0.5) * 1500;
        ambientPositions[i * 3 + 2] = (Math.random() - 0.5) * 600;
    }

    ambientGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(ambientPositions, 3)
    );

    const ambientMaterial = new THREE.PointsMaterial({
        color: 0x7c3aed,
        size: 4,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
    });

    const ambientParticles = new THREE.Points(ambientGeometry, ambientMaterial);
    scene.add(ambientParticles);

    /* ═══════════ ANIMATION LOOP ═══════════ */
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);

        const elapsed = clock.getElapsedTime();

        // Update shader uniforms
        starMaterial.uniforms.uTime.value = elapsed;

        // Smooth mouse follow
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Camera parallax
        camera.position.x = mouse.x * 50;
        camera.position.y = -mouse.y * 30;
        camera.lookAt(0, 0, 0);

        // Scroll-based camera Z (zoom-in effect)
        const scrollFactor = scrollY * 0.15;
        camera.position.z = 600 - Math.min(scrollFactor, 400);

        // Rotate star field
        stars.rotation.y = elapsed * 0.02;
        stars.rotation.x = elapsed * 0.005;

        // Rotate galaxy ring
        galaxyRing.rotation.z = elapsed * 0.05;

        // Floating geometry animations
        icosa.rotation.x = elapsed * 0.15;
        icosa.rotation.y = elapsed * 0.1;

        icosaInner.rotation.x = -elapsed * 0.2;
        icosaInner.rotation.y = elapsed * 0.15;

        torus.rotation.z = elapsed * 0.08;
        torus2.rotation.z = -elapsed * 0.06;
        torus2.rotation.x = Math.PI * 0.3 + Math.sin(elapsed * 0.1) * 0.2;

        octa.rotation.x = elapsed * 0.3;
        octa.rotation.z = elapsed * 0.2;
        octa.position.y = 80 + Math.sin(elapsed * 0.5) * 30;

        tetra.rotation.y = elapsed * 0.4;
        tetra.rotation.z = elapsed * 0.25;
        tetra.position.y = -60 + Math.cos(elapsed * 0.4) * 25;

        dodeca.rotation.x = elapsed * 0.2;
        dodeca.rotation.y = elapsed * 0.3;
        dodeca.position.y = 120 + Math.sin(elapsed * 0.3) * 20;

        // Floating group parallax with mouse
        floatingGroup.rotation.y = mouse.x * 0.15;
        floatingGroup.rotation.x = mouse.y * 0.1;

        // Ambient particles drift
        ambientParticles.rotation.y = elapsed * 0.01;
        ambientParticles.rotation.x = elapsed * 0.005;

        // Fade geometry based on scroll
        const fadeStart = 300;
        const fadeEnd = 1200;
        const scrollOpacity = 1 - Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
        floatingGroup.children.forEach((child) => {
            if (child.material) {
                child.material.opacity = child.userData.baseOpacity
                    ? child.userData.baseOpacity * scrollOpacity
                    : child.material.opacity;
            }
        });

        // Store base opacity on first frame
        if (elapsed < 0.1) {
            floatingGroup.children.forEach((child) => {
                if (child.material) {
                    child.userData.baseOpacity = child.material.opacity;
                }
            });
        }

        renderer.render(scene, camera);
    }

    animate();

    /* ═══════════ RESIZE HANDLER ═══════════ */
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }, 100);
    });
})();
