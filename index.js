// ====================================
// 1. ОБЪЕКТ С ПЕРЕВОДАМИ (DE, RU, EN, NL)
// ====================================

const translations = {
    // ------------------- НЕМЕЦКИЙ (DE) -------------------
    de: {
        // Заголовок
        pageTitle: 'Amarte Design Studio — Kunst, die berührt',

        // Навигация
        navHome: 'Startseite',
        navAbout: 'Über Uns',
        navServices: 'Leistungen',
        navGallery: 'Galerie',
        navPromo: 'Angebots',
        navContact: 'Kontakt',

        // Герой (главная)
        heroHeading: 'Kunst, die von Herzen kommt.',
        heroSub: '„Nicht jedes Geschenk braucht Glitzer. Manche brauchen einfach nur Herz.“ ✨',
        heroCTA: 'Ihr persönliches Geschenk jetzt bestellen',

        // О нас
        aboutHeading: 'Unsere Philosophie',
        aboutIntro: 'Wir glauben: Ein Geschenk ist mehr als nur ein Objekt – es ist ein Gefühl, das bleibt.',
        aboutText: '<strong>Amarte Design Studio</strong> ist Ihr Partner für einzigartige und gefühlvolle Kunstwerke. Wir transformieren Ihre Wünsche in handgefertigte Unikate, die eine Geschichte erzählen. <strong>Jedes Design wird von der Künstlerin persönlich entwickelt</strong> und fertiggestellt, wodurch wir höchste Qualität und absolute Individualität garantieren. Wir stehen für Kunst, die von Herzen kommt und Herzen berührt. Unser Fokus liegt auf detailverliebter, individueller Handarbeit.',

        // НОВЫЕ КЛЮЧИ ДЛЯ ЦЕНТРАЛЬНОГО БЛОКА МИССИИ
        missionHeading: 'Ihr Wunsch ist unser Rohstoff.',
        missionText1: 'Die Welt sehnt sich nach <strong>Echtheit</strong>. Nach Geschenken, die nicht von der Stange, sondern direkt aus dem Herzen kommen. Hier beginnt die Magie von Amarte.',
        missionText2: 'Wir sehen keine Objekte, wir sehen leere Leinwände. Ob es das Papier einer Visitenkarte, die Keramik eines Bechers, die Oberfläche einer Tür, eine leere Wand oder das digitale Format eines Porträts ist – jeder Gegenstand, den die Hand unseres Künstlers berührt, verwandelt sich in ein <strong>persönliches Meisterwerk</strong>.',
        missionText3: 'Wir sind Amarte: Das Herz für Kunst, der Verstand für die Technik. Gemeinsam füllen wir die leeren Räume Ihrer Welt mit <strong>Emotionen und Erinnerungen</strong>.',

        // Услуги (общий заголовок)
        servicesHeading: 'Unser Leistungsspektrum',
        servicesTagline: 'Von kleinen, liebevollen Details bis zu durchdachtem Corporate Design – wir gestalten Kunst, die persönlich, gefühlvoll und einzigartig ist.',

        // Базовые 4 услуги
        service1Title: 'Handgefertigte Unikate',
        service1Text: 'Geschenke für besondere Anlässe, die Emotionen wecken.',
        service1Ex1: 'Personalisierte Tassen & Gläser',
        service1Ex2: 'Individuelle Postkarten & Grußkarten',
        service1Ex3: 'Holz-Objekte mit Namen, Datum oder Zitaten',
        service1Ex4: 'Dekorative Objekte für Zuhause',

        service2Title: 'Porträts & Kunstwerke',
        service2Text: 'Porträts von Menschen, Paaren & Haustieren.',
        service2Ex1: 'Porträts von Personen & Familien',
        service2Ex2: 'Haustier-Porträts (Hunde, Katzen)',
        service2Ex3: 'Illustrationen nach Foto',
        service2Ex4: 'Digitale Artworks',

        service3Title: 'Buchzeichen & Kleinkunst',
        service3Text: 'Kleine Kunstwerke, die Freude schenken.',
        service3Ex1: 'Handbemalte Lesezeichen',
        service3Ex2: 'Mini-Artworks',
        service3Ex3: 'Kalender mit Illustrationen',
        service3Ex4: 'Geschenke für Bücherliebhaber',

        service4Title: 'Grafik & Corporate Design',
        service4Text: 'Logos, Visitenkarten & Werbematerial.',
        service4Ex1: 'Logo-Design',
        service4Ex2: 'Visitenkarten & Flyer',
        service4Ex3: 'Social Media Grafiken',
        service4Ex4: 'Brand Guide (Farben, Schriften)',

        servicesGuarantee: '⭐ Wir verwandeln Ihre Wünsche in handgemachte Realität!',

        // Доп. блок: Für wen?
        servicesForWhomTitle: 'Für wen ist Amarte Design Studio?',
        servicesForWhomText: 'Unsere Kunst ist für Menschen gedacht, die nicht „irgendwas“ schenken möchten, sondern etwas, das wirklich von Herzen kommt.',
        servicesForWhom1: 'Paare & Familien',
        servicesForWhom2: 'Freunde & Angehörige',
        servicesForWhom3: 'Selbstständige & kleine Unternehmen',
        servicesForWhom4: 'Alle, die persönliche Details lieben',

        // Доп. блок: Anlässe
        servicesOccasionsTitle: 'Anlässe & besondere Momente',
        servicesOccasionsText: 'Die meisten unserer Aufträge entstehen rund um emotionale Momente, an die man sich erinnern möchte:',
        servicesOcc1: 'Geburtstage, Taufen & Hochzeiten',
        servicesOcc2: 'Jubiläen & Jahrestage',
        servicesOcc3: 'Umzüge, Abschiede & Neuanfänge',
        servicesOcc4: '„Einfach so“ – um jemandem Danke zu sagen 💛',

        // Доп. блок: Prozess
        servicesProcessTitle: 'Wie läuft eine Bestellung ab?',
        servicesStep1: 'Kontakt: Sie schreiben uns Ihre Idee (z. B. über E-Mail oder WhatsApp).',
        servicesStep2: 'Abstimmung: Wir besprechen Stil, Farben, Format & Budget.',
        servicesStep3: 'Entwurf: Sie erhalten einen Entwurf oder eine Skizze zur Freigabe.',
        servicesStep4: 'Finalisierung: Das Kunstwerk wird liebevoll fertiggestellt.',
        servicesStep5: 'Übergabe: Übergabe oder Versand – bereit zum Verschenken. 🎁',

        // Галерея
        galleryHeading: 'Unsere Kunstwerke',
        galleryIntro: 'Entdecken Sie eine Auswahl unserer handgefertigten Unikate und Porträts. Jeder Klick öffnet eine Geschichte.',
        galleryViewDetails: 'Details anzeigen',
        galleryMore: '➜ Weiter zur Galerie', // КЛЮЧ ДЛЯ ССЫЛКИ НА ГЛАВНОЙ

        // КЛЮЧИ ДЛЯ ФИЛЬТРОВ И МОДАЛЬНОГО ОКНА
        filterAll: 'Alle', filterPortraits: 'Porträts', filterGifts: 'Unikate', filterDesign: 'Design',
        categoryPortraits: 'Portrait-Kunst', categoryGifts: 'Unikat / Geschenk', categoryDesign: 'Graphic Design',

        // Акция
        promoHeading: 'Ihr Weihnachtsgeschenk von uns!',
        promoDiscount: 'Sichern Sie sich <strong>10% Rabatt</strong> auf Ihre Bestellung!',
        promoText: 'Bestellen Sie jetzt Ihr persönliches Geschenk und sorgen Sie für sich und alle, die Sie lieben, für ein unvergessliches Unikat.',
        promoCTA: 'Jetzt mit Rabatt bestellen',

        // Контакты
        contactHeading: 'Kontakt',
        contactAddress: 'Adresse:',
        contactEmail: 'E-Mail:',
        footerNote: 'Amarte Design Studio startet offiziell im Januar 2026 – aber wir möchten euch schon jetzt überraschen!',
        footer: '© 2025 Amarte Design Studio. Alle Rechte vorbehalten.',
    },

    // ------------------- РУССКИЙ (RU) - ЗАКОММЕНТИРОВАН -------------------
    /*
    ru: {
        pageTitle: 'Amarte Design Studio — Искусство, которое трогает сердца',

        navHome: 'Главная',
        navAbout: 'О нас',
        navServices: 'Услуги',
        navGallery: 'Галерея',
        navPromo: 'Акция',
        navContact: 'Контакты',

        heroHeading: 'Искусство, Которое Идет От Сердца.',
        heroSub: '„Не каждому подарку нужен блеск. Некоторым нужно просто Сердце.“ ✨',
        heroCTA: 'Заказать Ваш Персональный Подарок',

        aboutHeading: 'Наша Философия',
        aboutIntro: 'Мы верим: Подарок — это больше, чем просто предмет; это чувство, которое остается.',
        aboutText: '<strong>Amarte Design Studio</strong> — ваш партнёр в создании уникальных и эмоциональных произведений искусства. Мы превращаем ваши идеи в рукотворные работы, которые рассказывают историю. Каждый дизайн разрабатывается и завершается лично художником, что гарантирует качество и индивидуальность.',
        
        // НОВЫЕ КЛЮЧИ ДЛЯ ЦЕНТРАЛЬНОГО БЛОКА МИССИИ
        missionHeading: 'Ваше Желание — Наше Сырье.',
        missionText1: 'Мир жаждет <strong>Подлинности</strong>. Подарков, сделанных не на конвейере, а пришедших прямо из сердца. Здесь начинается магия Amarte.',
        missionText2: 'Мы видим не объекты, а чистые холсты. Будь то бумага визитки, керамика кружки, поверхность двери, пустая стена или цифровой портрет — каждый предмет, к которому прикасается рука нашего художника, превращается в <strong>личное произведение искусства</strong>.',
        missionText3: 'Мы — Amarte: Сердце для искусства, Разум для технологий. Вместе мы заполняем пустые пространства вашего мира <strong>эмоциями и воспоминаниями</strong>.',

        servicesHeading: 'Наш Спектр Услуг',
        servicesTagline: 'От маленьких, душевных деталей до продуманного фирменного стиля — мы создаём искусство, которое трогает сердце.',

        service1Title: 'Подарки Ручной Работы',
        service1Text: 'Подарки для особых случаев, пробуждающие эмоции.',
        service1Ex1: 'Персонализированные кружки и бокалы',
        service1Ex2: 'Открытки и поздравительные карточки',
        service1Ex3: 'Деревянные изделия с именем или датой',
        service1Ex4: 'Декор для дома',

        service2Title: 'Портреты и Арт-работы',
        service2Text: 'Портреты людей, пар и домашних животных.',
        service2Ex1: 'Портреты семей и пар',
        service2Ex2: 'Портреты домашних животных',
        service2Ex3: 'Иллюстрации по фотографии',
        service2Ex4: 'Цифровые арт-работы',

        service3Title: 'Закладки и Мелкое Искусство',
        service3Text: 'Небольшие, но особенные произведения искусства.',
        service3Ex1: 'Ручные закладки',
        service3Ex2: 'Мини-картины',
        service3Ex3: 'Календари с иллюстрациями',
        service3Ex4: 'Подарки для любителей книг',

        service4Title: 'Графика и Корпоративный Дизайн',
        service4Text: 'Логотипы, визитки и рекламные материалы.',
        service4Ex1: 'Разработка логотипа',
        service4Ex2: 'Визитки и флаеры',
        service4Ex3: 'Графика для социальных сетей',
        service4Ex4: 'Простой бренд-гайд (цвета, шрифты)',

        servicesGuarantee: '⭐ Мы превращаем ваши желания в уникальную, ручную реальность!',

        servicesForWhomTitle: 'Для кого Amarte Design Studio?',
        servicesForWhomText: 'Для тех, кто не хочет дарить «что-нибудь», а ищет по-настоящему личный и тёплый подарок.',
        servicesForWhom1: 'Пары и семьи',
        servicesForWhom2: 'Друзья и близкие',
        servicesForWhom3: 'Небольшие компании и самозанятые',
        servicesForWhom4: 'Любители искусства и деталей',

        servicesOccasionsTitle: 'Поводы и особенные моменты',
        servicesOccasionsText: 'Наши работы часто создаются для важных и трогательных моментов:',
        servicesOcc1: 'Дни рождения и свадьбы',
        servicesOcc2: 'Крестины и юбилеи',
        servicesOcc3: 'Переезды, прощания и новые начала',
        servicesOcc4: '«Просто так» — чтобы сказать спасибо 💛',

        servicesProcessTitle: 'Как проходит заказ?',
        servicesStep1: 'Контакт: вы пишете нам свою идею.',
        servicesStep2: 'Обсуждение: стиль, цвета, формат, бюджет.',
        servicesStep3: 'Эскиз: вы получаете предварительный вариант.',
        servicesStep4: 'Завершение: работа аккуратно доводится до идеала.',
        servicesStep5: 'Передача: самовывоз или отправка готовой работы.',

        galleryHeading: 'Наши Произведения Искусства',
        galleryIntro: 'Посмотрите на наши уникальные изделия и портреты ручной работы. Каждый клик открывает историю.',
        galleryViewDetails: 'Показать детали',
        galleryMore: '➜ Перейти в Галерею', // КЛЮЧ ДЛЯ ССЫЛКИ НА ГЛАВНОЙ

        // КЛЮЧИ ДЛЯ ФИЛЬТРОВ И МОДАЛЬНОГО ОКНА
        filterAll: 'Все', filterPortraits: 'Портреты', filterGifts: 'Подарки', filterDesign: 'Дизайн',
        categoryPortraits: 'Портретное Искусство', categoryGifts: 'Уникальный Подарок', categoryDesign: 'Графический Дизайн',

        promoHeading: 'Ваш Рождественский Подарок от нас!',
        promoDiscount: 'Получите <strong>10% скидку</strong> на ваш заказ!',
        promoText: 'Заказать сейчас ваш личный подарок.',
        promoCTA: 'Заказать со скидкой',

        contactHeading: 'Контакты',
        contactAddress: 'Адрес:',
        contactEmail: 'E-Mail:',
        footerNote: 'Amarte Design Studio официально начинает работу в январе 2026 года.',
        footer: '© 2025 Amarte Design Studio. Все права защищены.',
    },
    */

    // ------------------- АНГЛИЙСКИЙ (EN) - ЗАКОММЕНТИРОВАН -------------------
    /*
    en: {
        pageTitle: 'Amarte Design Studio — Art that touches the heart',

        navHome: 'Home',
        navAbout: 'About Us',
        navServices: 'Services',
        navGallery: 'Gallery',
        navPromo: 'Promo',
        navContact: 'Contact',

        heroHeading: 'Art that comes from the heart.',
        heroSub: '“Not every gift needs glitter. Some just needs a heart.” ✨',
        heroCTA: 'Order your personalized gift now',

        aboutHeading: 'Our Philosophy',
        aboutIntro: 'We believe: A gift is more than just an object—it is a feeling that lasts.',
        aboutText: '<strong>Amarte Design Studio</strong> is your partner for unique and soulful artwork.',
        
        // НОВЫЕ КЛЮЧИ ДЛЯ ЦЕНТРАЛЬНОГО БЛОКА МИССИИ
        missionHeading: 'Your Wish Is Our Raw Material.',
        missionText1: 'The world craves <strong>Authenticity</strong>. For gifts that are not off-the-shelf but come directly from the heart. This is where the magic of Amarte begins.',
        missionText2: 'We see not objects, but blank canvases. Whether it\'s business card paper, the ceramic of a mug, the surface of a door, an empty wall, or a digital portrait—every object touched by our artist\'s hand transforms into a <strong>personal masterpiece</strong>.',
        missionText3: 'We are Amarte: The Heart for Art, the Mind for Tech. Together, we fill the empty spaces of your world with <strong>emotions and memories</strong>.',

        servicesHeading: 'Our Service Portfolio',
        servicesTagline: 'From small, heartfelt details to thoughtful corporate design – we create art that feels personal and unique.',

        service1Title: 'Handcrafted Unique Pieces',
        service1Text: 'Gifts for special occasions that evoke emotions.',
        service1Ex1: 'Personalized mugs & glasses',
        service1Ex2: 'Custom postcards & greeting cards',
        service1Ex3: 'Wooden items with names or dates',
        service1Ex4: 'Decor pieces for your home',

        service2Title: 'Portraits & Artworks',
        service2Text: 'Portraits of people, couples & pets.',
        service2Ex1: 'Portraits of families & couples',
        service2Ex2: 'Pet portraits',
        service2Ex3: 'Illustrations based on photos',
        service2Ex4: 'Digital artworks',

        service3Title: 'Bookmarks & Small Art',
        service3Text: 'Small artworks that bring joy.',
        service3Ex1: 'Hand-painted bookmarks',
        service3Ex2: 'Mini art pieces',
        service3Ex3: 'Illustrated calendars',
        service3Ex4: 'Gifts for book lovers',

        service4Title: 'Graphic & Corporate Design',
        service4Text: 'Logos, business cards & marketing material.',
        service4Ex1: 'Logo design',
        service4Ex2: 'Business cards & flyers',
        service4Ex3: 'Social media graphics',
        service4Ex4: 'Simple brand guides (colors, fonts)',

        servicesGuarantee: '⭐ We transform your wishes into handmade reality!',

        servicesForWhomTitle: 'Who is Amarte Design Studio for?',
        servicesForWhomText: 'For people who do not want to gift “just something”, but something truly personal and heartfelt.',
        servicesForWhom1: 'Couples & families',
        servicesForWhom2: 'Friends & loved ones',
        servicesForWhom3: 'Small businesses & freelancers',
        servicesForWhom4: 'Art and detail lovers',

        servicesOccasionsTitle: 'Occasions & special moments',
        servicesOccasionsText: 'Most of our works are created for emotional and memorable moments:',
        servicesOcc1: 'Birthdays & weddings',
        servicesOcc2: 'Baptisms & anniversaries',
        servicesOcc3: 'New beginnings & farewells',
        servicesOcc4: '"Just because" – to say thank thank you 💛',

        servicesProcessTitle: 'How does an order work?',
        servicesStep1: 'Contact: You send us your idea.',
        servicesStep2: 'Discussion: Style, colors, format & budget.',
        servicesStep3: 'Draft: You receive a first sketch.',
        servicesStep4: 'Finalization: The artwork is carefully completed.',
        servicesStep5: 'Delivery: Pickup or shipping of the finished piece.',

        galleryHeading: 'Our Artworks',
        galleryIntro: 'Explore our gallery of handcrafted pieces and portraits. Every click opens a story.',
        galleryViewDetails: 'Show Details',
        galleryMore: '➜ Continue to Gallery', // КЛЮЧ ДЛЯ ССЫЛКИ НА ГЛАВНОЙ

        // КЛЮЧИ ДЛЯ ФИЛЬТРОВ И МОДАЛЬНОГО ОКНА
        filterAll: 'All', filterPortraits: 'Portraits', filterGifts: 'Gifts', filterDesign: 'Design',
        categoryPortraits: 'Portrait Art', categoryGifts: 'Unique Gift', categoryDesign: 'Graphic Design',

        promoHeading: 'Your Christmas gift from us!',
        promoDiscount: 'Secure a <strong>10% discount</strong> on your order!',
        promoText: 'Order your personal gift now.',
        promoCTA: 'Order now',

        contactHeading: 'Contact',
        contactAddress: 'Address:',
        contactEmail: 'E-Mail:',
        footerNote: 'Amarte Design Studio launches in January 2026.',
        footer: '© 2025 Amarte Design Studio. All rights reserved.',
    },
    */

    // ------------------- ГОЛЛАНДСКИЙ (NL) - ЗАКОММЕНТИРОВАН -------------------
    /*
    nl: {
        pageTitle: 'Amarte Design Studio — Kunst die het hart raakt',

        navHome: 'Startpagina',
        navAbout: 'Over Ons',
        navServices: 'Diensten',
        navGallery: 'Galerij',
        navPromo: 'Actie',
        navContact: 'Contact',

        heroHeading: 'Kunst die uit het hart komt.',
        heroSub: '“Niet elk cadeau heeft glitter nodig. Sommige hebben gewoon een hart nodig.” ✨',
        heroCTA: 'Bestel nu uw persoonlijke geschenk',

        aboutHeading: 'Onze Filosofie',
        aboutIntro: 'Wij geloven: een geschenk is meer dan een object — het is een gevoel dat blijft.',
        aboutText: '<strong>Amarte Design Studio</strong> maakt unieke en gevoelige kunstwerken.',
        
        // НОВЫЕ КЛЮЧИ ДЛЯ ЦЕНТРАЛЬНОГО БЛОКА МИССИИ
        missionHeading: 'Uw Wens Is Onze Grondstof.',
        missionText1: 'De wereld verlangt naar <strong>Authenticiteit</strong>. Naar geschenken die niet van de band rollen, maar recht uit het hart komen. Hier begint de magie van Amarte.',
        missionText2: 'Wij zien geen objecten, maar lege doeken. Of het nu het papier van een visitekaartje is, het keramiek van een mok, het oppervlak van een deur, een lege muur of een digitaal portret – elk object dat onze kunstenaar aanraakt, verandert in een <strong>persoonlijk meesterwerk</strong>.',
        missionText3: 'Wij zijn Amarte: Het Hart voor Kunst, het Verstand voor Techniek. Samen vullen we de lege ruimtes van uw wereld met <strong>emoties en herinneringen</strong>.',

        servicesHeading: 'Ons Dienstenpakket',
        servicesTagline: 'Van kleine, liefdevolle details tot doordacht corporate design – wij creëren kunst die persoonlijk en uniek voelt.',

        service1Title: 'Handgemaakte Unieke Stukken',
        service1Text: 'Geschenken voor speciale gelegenheden.',
        service1Ex1: 'Gepersonaliseerde mokken & glazen',
        service1Ex2: 'Unieke kaarten & wenskaarten',
        service1Ex3: 'Houten items met naam of datum',
        service1Ex4: 'Decoratie voor thuis',

        service2Title: 'Portretten & Kunstwerken',
        service2Text: 'Portretten van mensen, koppels & huisdieren.',
        service2Ex1: 'Portretten van families & koppels',
        service2Ex2: 'Huisdierportretten',
        service2Ex3: 'Illustraties naar foto',
        service2Ex4: 'Digitale artworks',

        service3Title: 'Boekenleggers & Kleine Kunst',
        service3Text: 'Kleine kunstwerken die vreugde brengen.',
        service3Ex1: 'Handgeschilderde boekenleggers',
        service3Ex2: 'Mini-kunstwerken',
        service3Ex3: 'Kalenders met illustraties',
        service3Ex4: 'Cadeaus voor boekenliefhebbers',

        service4Title: 'Grafisch & Corporate Design',
        service4Text: 'Logo’s, visitekaartjes & promomateriaal.',
        service4Ex1: 'Logo-ontwerp',
        service4Ex2: 'Visitekaartjes & flyers',
        service4Ex3: 'Social media graphics',
        service4Ex4: 'Eenvoudige brandgids (kleuren, fonts)',

        servicesGuarantee: '⭐ We zetten uw wensen om in unieke, handgemaakte realiteit!',

        servicesForWhomTitle: 'Voor wie is Amarte Design Studio?',
        servicesForWhomText: 'Voor mensen die geen “zomaar iets” willen geven, maar een persoonlijk en hartelijk geschenk.',
        servicesForWhom1: 'Koppels & gezinnen',
        servicesForWhom2: 'Vrienden & familie',
        servicesForWhom3: 'Zelfstandigen & kleine bedrijven',
        servicesForWhom4: 'Liefhebbers van kunst & details',

        servicesOccasionsTitle: 'Gelegenheden & bijzondere momenten',
        servicesOccasionsText: 'Veel van onze opdrachten ontstaan rond emotionele momenten:',
        servicesOcc1: 'Verjaardagen & bruiloften',
        servicesOcc2: 'Doop & jubilea',
        servicesOcc3: 'Nieuwe starts & afscheid',
        servicesOcc4: 'Gewoon zomaar – om bedankt te zeggen 💛',

        servicesProcessTitle: 'Hoe verloopt een bestelling?',
        servicesStep1: 'Contact: u stuurt ons uw idee.',
        servicesStep2: 'Afstemming: stijl, kleuren, formaat & budget.',
        servicesStep3: 'Ontwerp: u ontvangt een eerste schets.',
        servicesStep4: 'Finalisering: het kunstwerk wordt afgewerkt.',
        servicesStep5: 'Overdracht: ophalen of verzending.',

        galleryHeading: 'Onze Kunstwerken',
        galleryIntro: 'Bekijk een selectie van onze handgemaakte werken. Elke klik opent een verhaal.',
        galleryViewDetails: 'Toon Details',
        galleryMore: '➜ Ga verder naar de Galerij', // КЛЮЧ ДЛЯ ССЫЛКИ НА ГЛАВНОЙ

        // КЛЮЧИ ДЛЯ ФИЛЬТРОВ И МОДАЛЬНОГО ОКНА
        filterAll: 'Alle', filterPortraits: 'Portretten', filterGifts: 'Geschenken', filterDesign: 'Design',
        categoryPortraits: 'Portretkunst', categoryGifts: 'Uniek Geschenk', categoryDesign: 'Grafisch Ontwerp',

        promoHeading: 'Uw Kerstgeschenk van ons!',
        promoDiscount: 'Ontvang <strong>10% korting</strong> op uw bestelling!',
        promoText: 'Bestel nu uw persoonlijke geschenk.',
        promoCTA: 'Bestel met korting',

        contactHeading: 'Contact',
        contactAddress: 'Adres:',
        contactEmail: 'E-mail:',
        footerNote: 'Amarte Design Studio lanceert officieel in januari 2026.',
        footer: '© 2025 Amarte Design Studio. Alle rechten voorbehouden.',
    },
    */
};


// ====================================
// 2. ФУНКЦИИ ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА
// (Оставлены для сохранения вашего кода, но неактивны)
// ====================================

function applyTranslations(lang) {
    // Временно жестко устанавливаем DE, если запрашиваемый язык не существует или не активен
    const effectiveLang = translations[lang] ? lang : 'de';
    const currentTranslations = translations[effectiveLang] || translations['de'];

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        let translation = currentTranslations[key] || '';

        // Используем .innerHTML для ключей, содержащих HTML или переводы миссии
        if (key === 'promoDiscount' || key === 'aboutText' || key === 'footer' || key === 'footerNote' || key.startsWith('missionText')) {
            element.innerHTML = translation;
        } else if (key === 'galleryMore') {
            // Специальная обработка для ссылки галереи, чтобы сохранить стрелку
            const galleryLink = document.querySelector('.gallery-more-link[data-key="galleryMore"]');
            if (galleryLink) {
                // Убеждаемся, что стрелка всегда в начале
                galleryLink.innerHTML = `➜ ${translation.replace('➜', '').trim()}`;
            }
        } else if (element.tagName === 'A' && element.classList.contains('cta-button')) {
            element.textContent = translation;
        } else {
            element.textContent = translation;
        }
    });

    // Обновление текста фильтров галереи (они не используют data-key)
    const filterAllBtn = document.querySelector('.filter-buttons [data-filter="all"]');
    const filterPortraitsBtn = document.querySelector('.filter-buttons [data-filter="portraits"]');
    const filterGiftsBtn = document.querySelector('.filter-buttons [data-filter="gifts"]');
    const filterDesignBtn = document.querySelector('.filter-buttons [data-filter="design"]');

    if (filterAllBtn) filterAllBtn.textContent = currentTranslations.filterAll;
    if (filterPortraitsBtn) filterPortraitsBtn.textContent = currentTranslations.filterPortraits;
    if (filterGiftsBtn) filterGiftsBtn.textContent = currentTranslations.filterGifts;
    if (filterDesignBtn) filterDesignBtn.textContent = currentTranslations.filterDesign;

    document.documentElement.lang = effectiveLang;
    document.title = currentTranslations.pageTitle;
}

function setLanguage(lang) {
    // Жестко устанавливаем DE, пока другие языки отключены
    const effectiveLang = 'de';

    applyTranslations(effectiveLang);

    // Логика активации кнопки DE (удаляем классы со всех, добавляем только DE)
    document.querySelectorAll('.lang-button').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`#lang-de`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Сохранение языка (временно DE)
    localStorage.setItem('websiteLang', 'de');
}


// ===========================================
// 3. HERO SLIDER LOGIC (Главная страница)
// ===========================================

function initHeroSlider() {
    const heroItems = document.querySelectorAll('.hero-bg-item');
    let currentIndex = 0;

    if (heroItems.length === 0) {
        console.warn("Hero items not found. Slider function disabled.");
        return;
    }

    // Убеждаемся, что только первый элемент активен при старте
    heroItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === 0) {
            item.classList.add('active');
        }
    });

    function showNextHeroItem() {
        heroItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % heroItems.length;
        heroItems[currentIndex].classList.add('active');
    }

    setInterval(showNextHeroItem, 5000);
}


// ===========================================
// 4. GALLERY FILTER LOGIC (ФИЛЬТРЫ НА gallery.html)
// ===========================================

function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.art-grid .gallery-item');

    // Если это не gallery.html — выходим
    if (!filterButtons.length || !items.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter') || 'all';

            items.forEach(item => {
                const cat = item.getAttribute('data-category') || '';
                const show = (filter === 'all') || (cat === filter);
                item.style.display = show ? '' : 'none';
            });
        });
    });
}


// ===========================================
// 5. GALLERY MODAL LOGIC (Модальное окно галереи)
// Работает и на главной, и на gallery.html
// ===========================================

function initGalleryModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementById('closeModal');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    // Если на странице нет модалки — выходим (например, на некоторых страницах)
    if (!modal || !modalImage || !captionText || !closeBtn || !prevButton || !nextButton) return;

    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    let currentImageIndex = -1;

    function getFullSrc(item) {
        const fullSrc = item.getAttribute && item.getAttribute('data-full');
        if (fullSrc) return fullSrc;

        // fallback: если это IMG (например, на главной)
        if (item.tagName === 'IMG') return item.src;

        const img = item.querySelector ? item.querySelector('img') : null;
        return img ? img.src : '';
    }

    function getTitle(item) {
        const dataTitle = item.getAttribute && item.getAttribute('data-title');
        if (dataTitle) return dataTitle;

        const img = item.querySelector ? item.querySelector('img') : null;
        if (img && img.alt) return img.alt;

        if (item.tagName === 'IMG' && item.alt) return item.alt;

        return '';
    }

    function updateModalContent(index) {
        if (index >= 0 && index < galleryItems.length) {
            const item = galleryItems[index];
            modalImage.src = getFullSrc(item);
            captionText.textContent = getTitle(item);
        }
    }

    // Открытие
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            modal.style.display = "flex";
            updateModalContent(currentImageIndex);
        });
    });

    // Закрытие
    closeBtn.onclick = () => {
        modal.style.display = "none";
        modalImage.src = "";
    };

    // Закрытие при клике на фон (только фон, не контент)
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            modalImage.src = "";
        }
    });

    // Навигация
    prevButton.onclick = (e) => {
        e.preventDefault();
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        updateModalContent(currentImageIndex);
    };

    nextButton.onclick = (e) => {
        e.preventDefault();
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        updateModalContent(currentImageIndex);
    };

    // Клавиши
    document.addEventListener('keydown', (e) => {
        if (modal.style.display !== "flex") return;

        if (e.key === "Escape") closeBtn.onclick();
        if (e.key === "ArrowLeft") prevButton.onclick(e);
        if (e.key === "ArrowRight") nextButton.onclick(e);
    });
}


// ===========================================
// 6. INITIALIZATION (Запуск функций после загрузки DOM)
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация переводов (временно принудительно DE)
    // Добавление data-key для элементов в секции контактов/футера
    if (document.querySelector('.contact-details p:nth-child(1) strong')) {
        document.querySelector('.contact-details p:nth-child(1) strong').setAttribute('data-key', 'contactAddress');
    }
    if (document.querySelector('.contact-details p:nth-child(2) strong')) {
        document.querySelector('.contact-details p:nth-child(2) strong').setAttribute('data-key', 'contactEmail');
    }
    if (document.querySelector('footer .container')) {
        document.querySelector('footer .container').setAttribute('data-key', 'footer');
    }
    if (document.querySelector('.footer-note')) {
        document.querySelector('.footer-note').setAttribute('data-key', 'footerNote');
    }
    setLanguage('de');
    // КОНЕЦ ИНИЦИАЛИЗАЦИИ ПЕРЕВОДОВ


    // Запуск слайдера только на главной странице
    if (document.getElementById('hero')) {
        initHeroSlider();
    }

    // ✅ ФИЛЬТРЫ НА gallery.html (там .art-grid)
    if (document.querySelector('.art-grid')) {
        initGalleryFilters();
    }

    // ✅ МОДАЛКА на gallery.html и на главной (если есть .gallery-item и есть #imageModal)
    if (document.querySelector('.gallery-item')) {
        initGalleryModal();
    }

    // ЗАКОММЕНТИРОВАН ОБРАБОТЧИК КНОПОК ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА
    /*
    document.querySelectorAll('.lang-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const lang = event.target.getAttribute('data-lang');
            setLanguage(lang);
            // Перезапуск галереи для обновления текущего языка и фильтров
            if (document.getElementById('artwork-grid')) {
                initGallery(); 
            }
        });
    });
    */
});