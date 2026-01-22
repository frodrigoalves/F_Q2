import { brandAssets, colorPalette, logoVariations } from './brand_data.js';

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initHeroAnimation();
    renderLogos();
    renderColors();
    setupScrollAnimations();
});

function initHeroAnimation() {
    gsap.from("#hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    });
}

function renderLogos() {
    const container = document.getElementById('logo-grid');
    logoVariations.forEach((logo, index) => {
        const div = document.createElement('div');
        div.className = 'logo-card glass-card rounded-3xl p-8 border border-white/5 flex flex-col gap-6 opacity-0 translate-y-10';
        div.innerHTML = `
            <div class="aspect-square rounded-2xl overflow-hidden bg-black/40 border border-white/5 p-4 flex items-center justify-center">
                <img src="${logo.url}" alt="${logo.name}" class="w-full h-full object-contain">
            </div>
            <div>
                <h3 class="text-xl font-bold mb-1">${logo.name}</h3>
                <p class="text-white/40 text-sm leading-relaxed">${logo.description}</p>
            </div>
            <div class="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                <span class="text-[10px] uppercase tracking-widest text-white/30">Asset ID: 00${index + 1}</span>
                <i data-lucide="external-link" class="w-4 h-4 text-white/20 hover:text-[#26B0E2] cursor-pointer"></i>
            </div>
        `;
        container.appendChild(div);
    });
    
    gsap.to(".logo-card", {
        scrollTrigger: {
            trigger: "#logos",
            start: "top 70%"
        },
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1
    });
    
    setTimeout(() => lucide.createIcons(), 100);
}

function renderColors() {
    const container = document.getElementById('color-palette');
    colorPalette.forEach(color => {
        const div = document.createElement('div');
        div.className = 'color-swatch glass-card p-4 rounded-2xl border border-white/10 flex items-center gap-4';
        div.innerHTML = `
            <div class="w-16 h-16 rounded-xl border border-white/10" style="background-color: ${color.hex}"></div>
            <div class="flex-1">
                <p class="text-xs text-white/30 uppercase tracking-widest">${color.name}</p>
                <p class="font-mono font-bold text-lg">${color.hex}</p>
            </div>
            <button class="copy-btn p-2 hover:bg-white/5 rounded-lg transition-colors" data-hex="${color.hex}">
                <i data-lucide="copy" class="w-4 h-4 text-white/40"></i>
            </button>
        `;
        container.appendChild(div);
    });

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const hex = btn.getAttribute('data-hex');
            navigator.clipboard.writeText(hex).then(() => {
                const icon = btn.querySelector('i');
                const original = icon.getAttribute('data-lucide');
                icon.setAttribute('data-lucide', 'check');
                icon.classList.add('text-[#26B0E2]');
                lucide.createIcons();
                setTimeout(() => {
                    icon.setAttribute('data-lucide', original);
                    icon.classList.remove('text-[#26B0E2]');
                    lucide.createIcons();
                }, 2000);
            });
        });
    });
    
    lucide.createIcons();
}

function setupScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.mockup-group').forEach((group, i) => {
        gsap.from(group, {
            scrollTrigger: {
                trigger: group,
                start: "top 85%"
            },
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50,
            duration: 1.2,
            ease: "power2.out"
        });
    });
}
