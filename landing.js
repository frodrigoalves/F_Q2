const hubOverlay = document.getElementById('hub-overlay');
const hubGrid = document.getElementById('hub-grid');
const btnIrAoSite = document.getElementById('btn-ir-ao-site');
const btnExperiencia = document.getElementById('btn-experiencia');
const btnCloseHub = document.getElementById('btn-close-hub');

const hubPages = [
    { id: '01', title: 'Core Systems', description: 'Blockchain, privacy, AI orchestration, and contracts.', href: 'pagina01/' },
    { id: '02', title: 'Tokenomics', description: 'SGL economy design and compliance controls.', href: 'pagina02/' },
    { id: '03', title: 'Hardware', description: 'Secure biometric devices and trusted channels.', href: 'pagina03/' },
    { id: '04', title: 'B2B White Label', description: 'Institutional modules for finance and legal partners.', href: 'pagina04/' },
    { id: '05', title: 'Frontend', description: 'User experiences across dashboards and builders.', href: 'pagina05/' },
    { id: '06', title: 'Backend Services', description: 'APIs, microservices, and data governance.', href: 'pagina06/' },
    { id: '07', title: 'Documentation', description: 'Architecture, business, legal, and integration guides.', href: 'pagina07/' },
    { id: '08', title: 'Particle Agglutination', description: 'Cyber-organic cohesion model for avatar legacy.', href: 'pagina08/' }
];

function renderHub() {
    hubGrid.innerHTML = '';
    hubPages.forEach((page) => {
        const link = document.createElement('a');
        link.className = 'nav-card';
        link.href = page.href;
        link.innerHTML = `
            <span class="nav-index">${page.id}</span>
            <div>
                <h3>${page.title}</h3>
                <p>${page.description}</p>
            </div>
        `;
        hubGrid.appendChild(link);
    });
}

function openHub() {
    hubOverlay.classList.add('is-open');
    hubOverlay.setAttribute('aria-hidden', 'false');
}

function closeHub() {
    hubOverlay.classList.remove('is-open');
    hubOverlay.setAttribute('aria-hidden', 'true');
}

btnIrAoSite.addEventListener('click', () => {
    openHub();
});

btnExperiencia.addEventListener('click', () => {
    document.getElementById('portal').scrollIntoView({ behavior: 'smooth' });
});

btnCloseHub.addEventListener('click', () => closeHub());

hubOverlay.addEventListener('click', (event) => {
    if (event.target === hubOverlay) {
        closeHub();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeHub();
    }
});

renderHub();

if (window.location.hash === '#hub') {
    openHub();
}

if (window.location.hash === '#portal') {
    setTimeout(() => {
        document.getElementById('portal').scrollIntoView({ behavior: 'smooth' });
    }, 200);
}
