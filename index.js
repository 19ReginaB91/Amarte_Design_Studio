// ====================================
// 1. ОБЪЕКТ С ПЕРЕВОДАМИ (DE, RU, EN, NL)
// ====================================

const translations = {
    // ------------------- НЕМЕЦКИЙ (DE) -------------------
    de: {
        // Заголовок
        pageTitle: 'Amarte Design Studio — Kunst, die berührt',
        // Навигация
        navHome: 'Startseite', // НОВЫЙ КЛЮЧ
        navAbout: 'Über Uns',
        navServices: 'Leistungen',
        navGallery: 'Galerie', 
        navPromo: 'Aktion',
        navContact: 'Kontakt',
        // Герой
        heroHeading: 'Kunst, die von Herzen kommt.',
        heroSub: '„Nicht jedes Geschenk braucht Glitzer. Manche brauchen einfach nur Herz.“ ✨',
        heroCTA: 'Ihr persönliches Geschenk jetzt bestellen',
        // О нас
        aboutHeading: 'Unsere Philosophie',
        aboutIntro: 'Wir glauben: Ein Geschenk ist mehr als nur ein Objekt – es ist ein Gefühl, das bleibt.',
        aboutText: '<strong>Amarte Design Studio</strong> ist Ihr Partner für einzigartige und gefühlvolle Kunstwerke. Wir transformieren Ihre Wünsche in handgefertigte Unikate, die eine Geschichte erzählen. **Jedes Design wird von der Künstlerin persönlich entwickelt** und fertiggestellt, wodurch wir höchste Qualität und absolute Individualität garantieren. Wir stehen für Kunst, die von Herzen kommt und Herzen berührt. Unser Fokus liegt auf detailverliebter, individueller Handarbeit.',
        // Услуги
        servicesHeading: 'Unser Leistungsspektrum',
        service1Title: 'Handgefertigte Unikate',
        service1Text: 'Geschenke für besondere Anlässe, die Emotionen wecken. Von personalisierten Tassen, Postkarten bis hin zu individuellen Holzarbeiten und Schmuckstücken.',
        service2Title: 'Porträts & Kunstwerke',
        service2Text: 'Erstellen Sie ein unvergessliches Porträt (digital oder traditionell) von Menschen, Paaren oder Haustieren. Kunst als Ausdruck Ihrer Persönlichkeit und Erinnerung.',
        service3Title: 'Buchzeichen & Kleinkunst',
        service3Text: 'Ein kleines, aber feines Geschenk oder ein elegantes Accessoire für Sie selbst. Hochwertige, handbemalte Buchzeichen, Kalender oder andere individuelle Kleinkunstwerke.',
        service4Title: 'Grafik & Corporate Design',
        service4Text: 'Entwicklung Ihres Firmenlogos, Visitenkarten, Flyer und Werbebanner. Wir geben Ihrer Marke ein visuelles Herz und eine individuelle Identität.',
        servicesGuarantee: '⭐ Wir verwandeln Ihre Wünsche und Ideen in einzigartige, handgemachte Realität!',
        // Галерея
        galleryHeading: 'Unsere Kunstwerke', 
        galleryIntro: 'Entdecken Sie eine Auswahl unserer handgefertigten Unikate und Porträts. Klicken Sie auf ein Bild, um es in voller Größe zu sehen.', 
        galleryGuarantee: 'Alle Werke sind handgefertigt und einzigartig.', 
        // Акция
        promoHeading: 'Ihr Weihnachtsgeschenk von uns!',
        promoDiscount: 'Sichern Sie sich **10% Rabatt** auf Ihre Bestellung!',
        promoText: 'Bestellen Sie jetzt Ihr persönliches Geschenk und sorgen Sie für sich und alle, die Sie lieben, für ein unvergessliches Unikat.',
        promoCTA: 'Jetzt mit Rabatt bestellen',
        // Контакты
        contactHeading: 'Kontakt',
        contactAddress: 'Adresse:',
        contactEmail: 'E-Mail:',
        footerNote: 'Amarte Design Studio startet offiziell im Januar 2026 – aber wir möchten euch schon jetzt überraschen!',
        footer: '© 2025 Amarte Design Studio. Alle Rechte vorbehalten.',
    },
    // ------------------- РУССКИЙ (RU) -------------------
    ru: {
        // Заголовок
        pageTitle: 'Amarte Design Studio — Искусство, которое трогает сердца',
        // Навигация
        navHome: 'Главная', // НОВЫЙ КЛЮЧ
        navAbout: 'О нас',
        navServices: 'Услуги',
        navGallery: 'Галерея', 
        navPromo: 'Акция',
        navContact: 'Контакты',
        // Герой
        heroHeading: 'Искусство, Которое Идет От Сердца.',
        heroSub: '„Не каждому подарку нужен блеск. Некоторым нужно просто Сердце.“ ✨',
        heroCTA: 'Заказать Ваш Персональный Подарок',
        // О нас
        aboutHeading: 'Наша Философия',
        aboutIntro: 'Мы верим: Подарок — это больше, чем просто предмет; это чувство, которое остается.',
        aboutText: '<strong>Amarte Design Studio</strong> — ваш партнер в создании уникальных и эмоциональных произведений искусства. Мы трансформируем ваши идеи в рукотворные шедевры, которые рассказывают вашу историю. Каждый дизайн **разрабатывается и завершается лично художником**, что гарантирует высочайшее качество и абсолютную индивидуальность. Наша миссия — создавать искусство, которое трогает сердца. Мы фокусируемся на деталях и индивидуальной ручной работе.',
        // Услуги
        servicesHeading: 'Наш Спектр Услуг',
        service1Title: 'Подарки Ручной Работы',
        service1Text: 'Подарки для особых случаев, пробуждающие эмоции. От персонализированных кружек, открыток до индивидуальных деревянных изделий и украшений.',
        service2Title: 'Портреты и Арт-работы',
        service2Text: 'Создайте незабываемый портрет (цифровой или традиционный) людей, пар или домашних животных. Искусство как выражение вашей личности и память.',
        service3Title: 'Закладки и Мелкое Искусство',
        service3Text: 'Маленький, но изысканный подарок или элегантный аксессуар для себя. Качественные, расписанные вручную закладки, календари и другие индивидуальные предметы малого искусства.',
        service4Title: 'Графика и Корпоративный Дизайн',
        service4Text: 'Разработка вашего фирменного логотипа, визиток, флаеров и рекламных баннеров. Мы дадим вашему бренду визуальное сердце и индивидуальность.',
        servicesGuarantee: '⭐ Мы превращаем ваши желания и идеи в уникальную, ручную реальность!',
        // Галерея
        galleryHeading: 'Наши Произведения Искусства', 
        galleryIntro: 'Посмотрите на наши уникальные изделия и портреты ручной работы. Нажмите на изображение, чтобы увидеть его в полном размере.', 
        galleryGuarantee: 'Все работы сделаны вручную и уникальны.', 
        // Акция
        promoHeading: 'Ваш Рождественский Подарок от нас!',
        promoDiscount: 'Получите **10% Скидку** на Ваш заказ!',
        promoText: 'Закажите сейчас ваш личный подарок и позаботьтесь о себе и всех, кого вы любите, с помощью незабываемого уникального изделия.',
        promoCTA: 'Заказать со Скидкой',
        // Контакты
        contactHeading: 'Контакты',
        contactAddress: 'Адрес:',
        contactEmail: 'E-Mail:',
        footerNote: 'Amarte Design Studio официально начинает работу в январе 2026 года – но мы будем рады удивить вас уже сейчас!',
        footer: '© 2025 Amarte Design Studio. Все права защищены.',
    },
    // ------------------- АНГЛИЙСКИЙ (EN) -------------------
    en: {
        // Заголовок
        pageTitle: 'Amarte Design Studio — Art that touches the heart',
        // Навигация
        navHome: 'Home', // НОВЫЙ КЛЮЧ
        navAbout: 'About Us',
        navServices: 'Services',
        navGallery: 'Gallery',
        navPromo: 'Promo',
        navContact: 'Contact',
        // Герой
        heroHeading: 'Art that comes from the heart.',
        heroSub: '“Not every gift needs glitter. Some just need a heart.” ✨',
        heroCTA: 'Order your personalized gift now',
        // О нас
        aboutHeading: 'Our Philosophy',
        aboutIntro: 'We believe: A gift is more than just an object—it is a feeling that lasts.',
        aboutText: '<strong>Amarte Design Studio</strong> is your partner for unique and soulful artwork. We transform your wishes into handcrafted unique pieces that tell a story. **Every design is personally developed** and completed by the artist, guaranteeing the highest quality and absolute individuality. We stand for art that comes from the heart and touches hearts. Our focus is on detailed, individual handiwork.',
        // Услуги
        servicesHeading: 'Our Service Portfolio',
        service1Title: 'Handcrafted Unique Pieces',
        service1Text: 'Gifts for special occasions that evoke emotions. From personalized mugs, postcards to individual wooden items and jewelry.',
        service2Title: 'Portraits & Artworks',
        service2Text: 'Create an unforgettable portrait (digital or traditional) of people, couples, or pets. Art as an expression of your personality and memory.',
        service3Title: 'Bookmarks & Small Art',
        service3Text: 'A small but fine gift or an elegant accessory for yourself. High-quality, hand-painted bookmarks, calendars, or other individual small artworks.',
        service4Title: 'Graphic & Corporate Design',
        service4Text: 'Development of your company logo, business cards, flyers, and advertising banners. We give your brand a visual heart and an individual identity.',
        servicesGuarantee: '⭐ We transform your wishes and ideas into unique, handmade reality!',
        // Галерея
        galleryHeading: 'Our Artworks', 
        galleryIntro: 'Discover a selection of our handcrafted unique pieces and portraits. Click on an image to see it in full size.', 
        galleryGuarantee: 'All works are handcrafted and unique.', 
        // Акция
        promoHeading: 'Your Christmas gift from us!',
        promoDiscount: 'Secure a **10% discount** on your order!',
        promoText: 'Order your personal gift now and ensure an unforgettable unique piece for yourself and all those you love.',
        promoCTA: 'Order with discount now',
        // Контакты
        contactHeading: 'Contact',
        contactAddress: 'Address:',
        contactEmail: 'E-Mail:',
        footerNote: 'Amarte Design Studio officially launches in January 2026 – but we\'d love to surprise you now!',
        footer: '© 2025 Amarte Design Studio. All rights reserved.',
    },
    // ------------------- ГОЛЛАНДСКИЙ (NL) -------------------
    nl: {
        // Заголовок
        pageTitle: 'Amarte Design Studio — Kunst die het hart raakt',
        // Навигация
        navHome: 'Startpagina', // НОВЫЙ КЛЮЧ
        navAbout: 'Over Ons',
        navServices: 'Diensten',
        navGallery: 'Galerij', 
        navPromo: 'Actie',
        navContact: 'Contact',
        // Герой
        heroHeading: 'Kunst die uit het hart komt.',
        heroSub: '“Niet elk cadeau heeft glitter nodig. Sommige hebben gewoon een hart nodig.” ✨',
        heroCTA: 'Bestel nu uw persoonlijke geschenk',
        // О нас
        aboutHeading: 'Onze Filosofie',
        aboutIntro: 'Wij geloven: Een geschenk is meer dan alleen een object—het is een gevoel dat blijft.',
        aboutText: '<strong>Amarte Design Studio</strong> is uw partner voor unieke en gevoelige kunstwerken. Wij transformeren uw wensen in handgemaakte unieke stukken die een verhaal vertellen. **Elk ontwerp wordt persoonlijk ontwikkeld** en voltooid door de kunstenaar, wat de hoogste kwaliteit en absolute individualiteit garandeert. Wij staan voor kunst die uit het hart komt en harten raakt. Onze focus ligt op gedetailleerd, individueel handwerk.',
        // Услуги
        servicesHeading: 'Ons Dienstenpakket',
        service1Title: 'Handgemaakte Unieke Stukken',
        service1Text: 'Geschenken voor speciale gelegenheden die emoties oproepen. Van gepersonaliseerde mokken, ansichtkaarten tot individuele houten items en sieraden.',
        service2Title: 'Portretten & Kunstwerken',
        service2Text: 'Creëer een onvergetelijk portret (digitaal of traditioneel) van mensen, koppels of huisdieren. Kunst als uitdrukking van uw persoonlijkheid en herinnering.',
        service3Title: 'Boekenleggers & Kleine Kunst',
        service3Text: 'Een klein maar fijn geschenk of een elegant accessoire voor uzelf. Hoogwaardige, handgeschilderde boekenleggers, kalenders of andere individuele kleine kunstwerken.',
        service4Title: 'Grafisch & Corporate Design',
        service4Text: 'Ontwikkeling van uw bedrijfslogo, visitekaartjes, flyers en reclamebanners. Wij geven uw merk een visueel hart en een individuele identiteit.',
        servicesGuarantee: '⭐ We zetten uw wensen en ideeën om in unieke, handgemaakte realiteit!',
        // Галерея
        galleryHeading: 'Onze Kunstwerken', 
        galleryIntro: 'Ontdek een selectie van onze handgemaakte unieke stukken en portretten. Klik op een afbeelding om deze op volledige grootte te bekijken.', 
        galleryGuarantee: 'Alle werken zijn handgemaakt en uniek.', 
        // Акция
        promoHeading: 'Uw Kerstgeschenk van ons!',
        promoDiscount: 'Ontvang **10% korting** op uw bestelling!',
        promoText: 'Bestel nu uw persoonlijke geschenk en zorg voor een onvergetelijk uniek stuk voor uzelf en al uw dierbaren.',
        promoCTA: 'Bestel nu met korting',
        // Контакты
        contactHeading: 'Contact',
        contactAddress: 'Adres:',
        contactEmail: 'E-mail:',
        footerNote: 'Amarte Design Studio lanceert officieel in januari 2026 – maar we willen u nu al verrassen!',
        footer: '© 2025 Amarte Design Studio. Alle rechten voorbehouden.',
    },
};


// ====================================
// 2. ФУНКЦИИ ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА
// ====================================

/**
 * Применяет переводы к элементам на странице на основе data-key.
 * @param {string} lang - Код языка ('de', 'ru', 'en', 'nl').
 */
function applyTranslations(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        let translation = translations[lang][key];

        // Используем innerHTML для текста, содержащего форматирование (жирный, ссылки, и т.д.)
        if (key === 'promoDiscount' || key === 'aboutText' || key === 'footer' || key === 'footerNote') {
            element.innerHTML = translation;
        } else if (element.tagName === 'A' && element.classList.contains('cta-button')) {
            // Для CTA-кнопок используем textContent
            element.textContent = translation;
        } else {
            // Для всех остальных используем textContent
            element.textContent = translation;
        }
    });

    // Изменение атрибута lang у <html> и заголовка страницы
    document.documentElement.lang = lang;
    document.title = translations[lang].pageTitle;
}

/**
 * Устанавливает выбранный язык, обновляет кнопки и сохраняет выбор.
 * @param {string} lang - Код языка ('de', 'ru', 'en', 'nl').
 */
function setLanguage(lang) {
    applyTranslations(lang);
    
    // Обновление активного класса для кнопок
    document.querySelectorAll('.lang-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`#lang-${lang}`).classList.add('active');

    // Сохранение в локальном хранилище
    localStorage.setItem('websiteLang', lang);
}


// ====================================
// 3. ФУНКЦИЯ ДИНАМИЧЕСКОГО ФОНА
// ====================================

/**
 * Запускает циклическое переключение фоновых изображений в секции Hero.
 */
function startHeroImageSlider() {
    const images = document.querySelectorAll('.hero-bg-item');
    if (images.length <= 1) return; 
    
    let currentIndex = 0;

    function nextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(nextImage, 5000); 
}


// ====================================
// 4. ЛОГИКА ГАЛЕРЕИ (Модальное окно)
// ====================================

function initGallery() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementById('closeModal');
    const prevBtn = document.getElementById('prevButton');
    const nextBtn = document.getElementById('nextButton');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!modal || galleryItems.length === 0) return; // Выход, если элементов нет

    let currentIndex = 0;

    // Функция для показа изображения в модальном окне
    const showImage = (index) => {
        if (index < 0) {
            currentIndex = galleryItems.length - 1;
        } else if (index >= galleryItems.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const currentItem = galleryItems[currentIndex];
        modal.style.display = "block";
        modalImg.src = currentItem.getAttribute('data-full'); // Используем большое изображение
        captionText.innerHTML = currentItem.alt;
    };

    // Открытие модального окна при клике на превью
    galleryItems.forEach((item, index) => {
        item.onclick = function() {
            showImage(index);
        };
    });

    // Закрытие модального окна
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Переход к предыдущему/следующему
    prevBtn.onclick = () => showImage(currentIndex - 1);
    nextBtn.onclick = () => showImage(currentIndex + 1);

    // Закрытие по клику вне картинки (на черном фоне)
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
    
    // Закрытие по клавише ESC и навигация стрелками
    document.onkeydown = function(e) {
        e = e || window.event;
        if (modal.style.display === "block") {
            if (e.key === "Escape" || e.key === "Esc") {
                modal.style.display = "none";
            } else if (e.key === "ArrowLeft") {
                showImage(currentIndex - 1);
            } else if (e.key === "ArrowRight") {
                showImage(currentIndex + 1);
            }
        }
    };
}


// ====================================
// 5. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 5.1. Автоматическое присвоение data-key к элементам без них ---
    // Это нужно, чтобы переводы применялись ко всем элементам, которые мы не могли разметить в HTML
    if (document.querySelector('.contact-details p:nth-child(1) strong')) {
        document.querySelector('.contact-details p:nth-child(1) strong').setAttribute('data-key', 'contactAddress');
        document.querySelector('.contact-details p:nth-child(2) strong').setAttribute('data-key', 'contactEmail');
    }
    
    if (document.querySelector('footer .container')) {
        document.querySelector('footer .container').setAttribute('data-key', 'footer');
    }
    
    if (document.querySelector('.footer-note')) {
        document.querySelector('.footer-note').setAttribute('data-key', 'footerNote');
    }

    // --- 5.2. Инициализация языка ---
    const defaultLang = localStorage.getItem('websiteLang') || 'de';
    setLanguage(defaultLang);
    
    // --- 5.3. Добавление слушателей событий для кнопок языка ---
    document.querySelectorAll('.lang-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const lang = event.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // --- 5.4. Запуск слайдера фоновых изображений ---
    startHeroImageSlider();
    
    // --- 5.5. Инициализация Галереи ---
    initGallery();
});