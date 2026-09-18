// Режиссура / Directing
// Editorial motion like Fathom: staggered rises, scroll cues, page enter/leave.
// Does not change layout, colors, or images.

(function initDirecting() {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    root.classList.add('directing');

    if (reduced) {
        root.classList.add('directing-reduced', 'directing-ready');
        return;
    }

    root.classList.add('directing-enter');

    const HERO_SELECTORS = [
        '.hero-content > *',
        '.services-hero .container > *',
        '.gallery-hero .container > *',
        '.promo-hero .container > *',
        '.contact-hero-section .container > *'
    ].join(', ');

    const COPY_SELECTORS = [
        'section h1',
        'section h2',
        'section .intro-text',
        'section .services-tagline',
        'section .gallery-tagline',
        'section .discount-text',
        'section .guarantee-text',
        'section .mission-intro',
        'section .mission-conclusion',
        'section .promo-lead',
        '.filter-buttons',
        '.gallery-more',
        '.business-offer-inner > *',
        '.price-note-section .container > h2',
        '.price-note-section .container > p',
        '.about-section p',
        '.promo-section p',
        '.contact-section .contact-details',
        '.contact-section .social-links',
        '.contact-section .footer-note'
    ].join(', ');

    const CARD_SELECTORS = [
        '.service-item',
        '.value-item',
        '.flip-card',
        '.offer-card',
        '.step-card',
        '.highlight',
        '.form-area-wrapper',
        '.details-area-wrapper'
    ].join(', ');

    const MEDIA_SELECTORS = [
        '.gallery-grid > .gallery-item',
        '.art-grid > .gallery-item'
    ].join(', ');

    function mark(el, preset, delay) {
        if (!el || el.hasAttribute('data-direct')) return;
        if (el.closest('[data-direct]')) return;
        el.setAttribute('data-direct', preset);
        el.style.setProperty('--direct-delay', delay + 'ms');
    }

    function markGroup(nodeList, preset, stagger, baseDelay) {
        Array.from(nodeList).forEach((el, index) => {
            mark(el, preset, (baseDelay || 0) + index * stagger);
        });
    }

    markGroup(document.querySelectorAll(HERO_SELECTORS), 'hero', 110, 80);
    markGroup(document.querySelectorAll(CARD_SELECTORS), 'rise', 90, 0);
    markGroup(document.querySelectorAll(MEDIA_SELECTORS), 'media', 80, 0);
    markGroup(document.querySelectorAll(COPY_SELECTORS), 'rise', 70, 0);

    root.classList.add('directing-ready');

    const staged = Array.from(document.querySelectorAll('[data-direct]'));

    function reveal(el) {
        if (!el || el.classList.contains('is-in')) return;
        el.classList.add('is-in');

        const delay = parseFloat(el.style.getPropertyValue('--direct-delay')) || 0;
        window.setTimeout(() => {
            el.removeAttribute('data-direct');
            el.style.removeProperty('--direct-delay');
        }, delay + 1100);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            reveal(entry.target);
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
    });

    staged.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const inFirstScreen = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
        if (inFirstScreen) {
            reveal(el);
        } else {
            observer.observe(el);
        }
    });

    const heroLayer = document.querySelector('.hero-backgrounds');
    if (heroLayer) {
        let ticking = false;

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const y = window.scrollY;
                const shift = Math.min(y * 0.22, 140);
                heroLayer.style.transform = 'translate3d(0, ' + shift + 'px, 0) scale(1.06)';
                ticking = false;
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function restageVisibleGallery() {
        const items = Array.from(document.querySelectorAll('.art-grid .gallery-item'));
        items.forEach((item) => {
            item.classList.remove('is-in');
            item.removeAttribute('data-direct');
            item.style.removeProperty('--direct-delay');
        });

        window.requestAnimationFrame(() => {
            let visibleIndex = 0;
            items.forEach((item) => {
                if (item.style.display === 'none') return;
                mark(item, 'media', visibleIndex * 70);
                visibleIndex += 1;
                observer.observe(item);
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    reveal(item);
                    observer.unobserve(item);
                }
            });
        });
    }

    document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            window.setTimeout(restageVisibleGallery, 30);
        });
    });

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href]');
        if (!link) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (link.target === '_blank' || link.hasAttribute('download')) return;

        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) {
            return;
        }

        const next = new URL(link.href, window.location.href);
        if (next.origin !== window.location.origin) return;
        if (next.pathname === window.location.pathname && next.hash) return;

        event.preventDefault();
        root.classList.remove('directing-enter');
        root.classList.add('directing-leave');
        window.setTimeout(() => {
            window.location.href = link.href;
        }, 280);
    });
})();
