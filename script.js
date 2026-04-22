// --- Translation System ---
const translations = {
    pt: {
        nav_home: "Início", nav_projects: "Projetos", nav_services: "Serviços", nav_about: "Sobre", nav_contact: "Contacto",
        hero_title: "Engenharia e Construção de Alta Precisão.",
        hero_subtitle: "Excelente arquitetura com precisão táctica e controlo operacional absoluto em Portugal e na Europa.",
        btn_discover: "Descobrir Projetos", btn_expertise: "Nossa Especialização",
        section_projects: "Portfólio de Excelência",
        projects_subtitle: "Uma galeria abrangente das nossas realizações estruturais, desde infraestruturas a projetos residenciais de luxo em toda a Europa.",
        section_services: "Especialização Técnica",
        services_subtitle: "Soluções estruturais de alto nível para projetos residenciais e comerciais de luxo em todo o Portugal.",
        about_tagline: "Artesanato Superior",
        about_title: "Construindo as Marcas do Amanhã Hoje.",
        about_p1: "A Exo Building é uma empresa de construção especializada em projetos residenciais e comerciais, entregando resultados de alta qualidade com precisão técnica, eficiência e controlo operacional total.",
        about_p2: "Com uma equipa interna dedicada de 30 profissionais qualificados e acesso a maquinaria pesada avançada, garantimos o cumprimento rigoroso dos prazos, eficiência de custos e mão-de-obra superior em cada fase da construção.",
        about_p3: "Empreiteiro de obras públicas certificado (Alvará n.º 120974 – Classe 6).",
        vision_title: "Nossa Visão",
        vision_subtitle: "Estabelecer o padrão internacional de mestria técnica na construção moderna.",
        vision_card1_t: "Construir Com Excelência",
        vision_card1_p: "Esforçamo-nos por entregar uma qualidade superior em cada projeto, garantindo durabilidade, precisão e artesanato que supera as expectativas.",
        vision_card2_t: "Entregar Confiança e Fiabilidade",
        vision_card2_p: "Estamos comprometidos em construir relacionamentos de longo prazo através de transparência, consistência e serviços fiáveis nos quais os nossos clientes podem confiar.",
        mission_title: "Nossa Missão",
        mission_subtitle: "Execução estratégica e integridade estrutural em toda a paisagem europeia.",
        mission_card1_t: "Fornecer Soluções de Custo Eficaz",
        mission_card1_p: "Aspiramos a entregar serviços de alta qualidade a preços competitivos, garantindo valor sem comprometer os padrões.",
        mission_card2_t: "Garantir a Satisfação do Cliente",
        mission_card2_p: "Focamo-nos em compreender as necessidades do cliente e entregar resultados que superem as expectativas através de qualidade, transparência e dedicação.",
        mission_card3_t: "Manter Elevados Padrões de Segurança",
        mission_card3_p: "Priorizamos a segurança em todas as fases dos nossos projetos, seguindo diretrizes rigorosas para proteger a nossa equipa e clientes.",
        section_projects_home: "Projetos Emblemáticos Recentes",
        projects_home_subtitle: "Uma seleção criteriosa das nossas reabilitações estruturais de alto nível e construções de luxo.",
        proj_abrantes: "Estação de Abrantes 4",
        proj_biscaia: "Villa Biscaia",
        proj_monaco: "Hotel Mónaco",
        proj_santarem: "Projeto de Santarém",
        serv_f_t: "Fundações e Escavações",
        serv_f_p: "Preparação do local e escavações especializadas de solo para garantir a estabilidade do projeto e excelência na capacidade de carga.",
        serv_c_t: "Colunas, Vigas e Lajes",
        serv_c_p: "Estruturas de betão armado projetadas para máxima durabilidade e longevidade estrutural em construções complexas.",
        serv_m_t: "Alvenaria e Tijolos",
        serv_m_p: "Trabalhos de tijolo e bloco de alta qualidade para estética residencial e soluções de divisórias robustas.",
        serv_fr_t: "Estrutura",
        serv_fr_p: "Execução profissional de cofragens e estruturas de betão para geometrias arquitetónicas complexas.",
        serv_fs_t: "Regularização de Pisos",
        serv_fs_p: "Nivelamento e acabamento de pisos estruturais para pavimentos de alta qualidade e acabamentos sofisticados.",
        serv_cr_t: "Carpintaria",
        serv_cr_p: "Carpintaria estrutural e decorativa para interiores, incluindo estruturas e acabamentos por medida.",
        serv_pr_t: "Estuque e Reboco",
        serv_pr_p: "Rebocos lisos e sistemas de estuque avançados para um acabamento arquitetónico impecável.",
        serv_et_t: "Isolamento Exterior (ETICS)",
        serv_et_p: "Sistemas avançados de isolamento térmico para melhorar a eficiência energética e a longevidade do edifício.",
        f_nav: "Navegação",
        f_serv: "Serviços",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço",
        contact_title: "Entre em Contacto",
        contact_subtitle: "Contacte a nossa equipa para consultoria técnica ou consultas de projetos.",
        office_title: "Escritório de Lisboa",
        form_name: "Nome Completo",
        form_email: "Endereço de Email",
        form_service: "Serviço Requerido",
        form_message: "Detalhes do Projeto",
        form_submit: "Enviar Pedido",
        form_name_p: "João Silva",
        form_email_p: "joao@exemplo.pt",
        form_msg_p: "Conte-nos sobre os requisitos do seu projeto...",
        form_serv_placeholder: "Selecione um Serviço",
        form_serv_opt_1: "Fundações e Escavações",
        form_serv_opt_2: "Colunas, Vigas e Lajes",
        form_serv_opt_3: "Alvenaria e Tijolos",
        form_serv_opt_4: "Estrutura",
        form_serv_opt_5: "Regularização de Pisos",
        form_serv_opt_6: "Carpintaria",
        form_serv_opt_7: "Estuque e Reboco",
        form_serv_opt_8: "Isolamento Exterior (ETICS)",
        form_serv_opt_9: "Consultoria Técnica",
        explore_services: "Explorar Todos os Serviços",
        lang_label: "Idioma",
        footer_brand: "Construção de vanguarda e consultoria técnica em Portugal e no resto da Europa.",
        phone_label: "Telefone",
        location_label: "Localização",
        web_label: "Web",
        copyright: "© 2022 EXO Building. Todos os direitos reservados.",
        quality_title: "Comprometidos com a Qualidade",
        quality_p: "Nossa equipe de 30 profissionais altamente qualificados trabalha com o que há de mais moderno em maquinário pesado para garantir que cada centímetro de sua obra seja perfeita.",
        quality_btn: "Fale com Especialista",
        worker_badge: "+30 Trabalhadores Especializados",
        skilled_specialists: "Especialistas Qualificados"
    },
    en: {
        nav_home: "Home", nav_projects: "Projects", nav_services: "Services", nav_about: "About", nav_contact: "Contact",
        hero_title: "High-End Precision Engineering & Construction.",
        hero_subtitle: "Delivering architectural excellence with tactical precision and absolute operational control across Portugal and Europe.",
        btn_discover: "Discover Projects", btn_expertise: "Our Expertise",
        section_projects: "Portfolio of Excellence",
        projects_subtitle: "A comprehensive gallery of our structural accomplishments, from infrastructure to luxury residential projects across Europe.",
        section_services: "Technical Precision",
        services_subtitle: "High-end structural solutions for luxury residential and commercial projects across Portugal.",
        about_tagline: "Superior Craftsmanship",
        about_title: "Building Tomorrow's Landmarks Today.",
        about_p1: "Exo Building is a construction company specialising in residential and commercial projects, delivering high-quality results with technical precision, efficiency, and full operational control.",
        about_p2: "With a dedicated in-house team of 30 skilled professionals and access to advanced heavy machinery, we ensure strict adherence to deadlines, cost efficiency, and superior workmanship across every phase of construction.",
        about_p3: "Certified public works contractor (Alvará No. 120974 – Class 6).",
        vision_title: "Our Vision",
        vision_subtitle: "Setting the international standard for technical mastery in modern construction.",
        vision_card1_t: "Build With Excellence",
        vision_card1_p: "We strive to deliver superior quality in every project, ensuring durability, precision, and craftsmanship that exceeds expectations.",
        vision_card2_t: "Deliver Trust and Reliability",
        vision_card2_p: "We are committed to building long-term relationships through transparency, consistency, and dependable services our clients can rely on.",
        mission_title: "Our Mission",
        mission_subtitle: "Strategic execution and structural integrity throughout the European landscape.",
        mission_card1_t: "Provide Cost-Effective Solutions",
        mission_card1_p: "We aim to deliver high-quality services at competitive prices, ensuring value without compromising on standards.",
        mission_card2_t: "Ensure Client Satisfaction",
        mission_card2_p: "We focus on understanding client needs and delivering results that exceed expectations through quality, transparency, and dedication.",
        mission_card3_t: "Maintain High Safety Standards",
        mission_card3_p: "We prioritize safety at every stage of our projects, following strict guidelines to protect our team and clients.",
        contact_title: "Get In Touch",
        contact_subtitle: "Contact our team for technical consultancy or project inquiries.",
        office_title: "Lisbon Office",
        form_name: "Full Name",
        form_email: "Email Address",
        form_service: "Required Service",
        form_message: "Project Details",
        form_submit: "Send Inquiry",
        form_name_p: "John Doe",
        form_email_p: "john@example.com",
        form_msg_p: "Tell us about your project requirements...",
        form_serv_placeholder: "Select a Service",
        form_serv_opt_1: "Foundations & Excavations",
        form_serv_opt_2: "Columns, Beams & Slabs",
        form_serv_opt_3: "Masonry & Brickwork",
        form_serv_opt_4: "Framework",
        form_serv_opt_5: "Floor Screeding",
        form_serv_opt_6: "Carpentry",
        form_serv_opt_7: "Plastering & Rendering",
        form_serv_opt_8: "Exterior Insulation (ETICS)",
        form_serv_opt_9: "Technical Consultancy",
        serv_f_t: "Foundations & Excavations",
        serv_f_p: "Site preparation and expert ground excavations for project stability and load-bearing excellence.",
        serv_c_t: "Columns, Beams & Slabs",
        serv_c_p: "Core reinforced structures designed for maximum durability and structural longevity in complex builds.",
        serv_m_t: "Masonry & Brickwork",
        serv_m_p: "High-quality brick and block works for residential aesthetics and robust partition solutions.",
        serv_fr_t: "Framework",
        serv_fr_p: "Professional concrete formwork and framework execution for complex architectural geometries.",
        serv_fs_t: "Floor Screeding",
        serv_fs_p: "Leveling and finishing of structural floors for premium tiling and sophisticated floor finishes.",
        serv_cr_t: "Carpentry",
        serv_cr_p: "Structural and decorative carpentry for interiors, including bespoke framework and finishes.",
        serv_pr_t: "Plastering & Rendering",
        serv_pr_p: "Smooth rendering and advanced plastering systems for a flawless, high-end architectural finish.",
        serv_et_t: "Exterior Insulation (ETICS)",
        serv_et_p: "Advanced thermal insulation systems to enhance energy efficiency and building longevity.",
        explore_services: "Explore All Services",
        lang_label: "Language",
        f_nav: "Navigation",
        f_serv: "Services",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        footer_brand: "State-of-the-art construction and technical consultancy across Portugal and Europe.",
        phone_label: "Phone",
        location_label: "Location",
        web_label: "Web",
        copyright: "© 2022 EXO Building. All rights reserved.",
        quality_title: "Committed to Quality",
        quality_p: "Our team of 30 highly skilled professionals works with the latest heavy machinery to ensure every inch of your construction is perfect.",
        quality_btn: "Speak with Specialist",
        worker_badge: "+30 Specialized Workers",
        skilled_specialists: "Skilled Specialists"
    },
    // Adding others briefly for now to keep it manageable, but I'll ensure PT is perfect as requested
    fr: {
        nav_home: "Accueil", nav_projects: "Projets", nav_services: "Services", nav_about: "À Propos", nav_contact: "Contact",
        hero_title: "Ingénierie et Construction de Haute Précision.",
        hero_subtitle: "Excellence architecturale avec précision tactique et contrôle opérationnel au Portugal et en Europe.",
        btn_discover: "Découvrir Projets", btn_expertise: "Notre Expertise",
        section_projects: "Portfolio d'Excellence",
        projects_subtitle: "Une galerie de nos réalisations structurelles, de l'infrastructure au résidentiel de luxe.",
        section_services: "Précision Technique",
        services_subtitle: "Solutions structurelles haut de gamme à travers le Portugal.",
        about_tagline: "Artisanat Supérieur",
        about_title: "Construire les monuments de demain aujourd'hui.",
        contact_title: "Contactez-nous",
        footer_brand: "Construction de pointe et conseil technique au Portugal et en Europe.",
        copyright: "© 2022 EXO Building. Tous droits réservés."
    },
    nl: {
        nav_home: "Home", nav_projects: "Projecten", nav_services: "Diensten", nav_about: "Over Ons", nav_contact: "Contact",
        hero_title: "Hoogwaardige Precisietechniek & Constructie.",
        hero_subtitle: "Architecturale uitmuntendheid met tactische precisie in Portugal en Europa.",
        btn_discover: "Ontdek Projecten", btn_expertise: "Onze Expertise",
        section_projects: "Portfolio van Uitmuntendheid",
        projects_subtitle: "Een galerij van onze structurele prestaties in heel Europa.",
        section_services: "Technische Precisie",
        about_tagline: "Superieur Vakmanschap",
        about_title: "Vandaag bouwen aan de monumenten van morgen.",
        contact_title: "Neem Contact Op",
        footer_brand: "State-of-the-art bouw en technisch advies in Portugal en Europa.",
        copyright: "© 2022 EXO Building. Alle rechten voorbehouden."
    },
    zh: {
        nav_home: "首页", nav_projects: "项目", nav_services: "服务", nav_about: "关于我们", nav_contact: "联系我们",
        hero_title: "高端精密工程与建筑",
        hero_subtitle: "在葡萄牙和整个欧洲交付卓越建筑。",
        btn_discover: "发现项目", btn_expertise: "我们的专业知识",
        section_projects: "卓越组合",
        about_tagline: "卓越工艺",
        about_title: "今天建造明天的地标",
        contact_title: "保持联系",
        footer_brand: "葡萄牙和欧洲最先进的建筑和技术咨询。",
        copyright: "© 2022 EXO Building. 版权所有。"
    },
    ur: {
        nav_home: "ہوم", nav_projects: "پراجیکٹس", nav_services: "خدمات", nav_about: "ہمارے بارے میں", nav_contact: "رابطہ",
        hero_title: "اعلی درجے کی درستگی انجینئرنگ اور تعمیر۔",
        hero_subtitle: "پرتگال اور یورپ بھر میں تعمیراتی عمدگی کی فراہمی۔",
        btn_discover: "پراجیکٹس دیکھیں", btn_expertise: "ہماری مہارت",
        section_projects: "عمدگی کا پورٹ فولیو",
        about_tagline: "اعلیٰ دستکاری",
        about_title: "آج کل کے سنگ میل کی تعمیر",
        contact_title: "رابطہ کریں",
        footer_brand: "پرتگال اور یورپ بھر میں تعمیرات اور تکنیکی مشاورت۔",
        copyright: "© 2022 EXO Building. جملہ حقوق محفوظ ہیں۔"
    }
};

function changeLanguage(lang) {
    sessionStorage.setItem('exo_lang', lang);
    document.documentElement.lang = lang;
    
    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update select options (dropdowns)
    document.querySelectorAll('select[data-i18n-select]').forEach(select => {
        const keyPrefix = select.getAttribute('data-i18n-select');
        Array.from(select.options).forEach((opt, idx) => {
            if (idx === 0) { // Handle the placeholder/first option
                const pKey = `${keyPrefix}_placeholder`;
                if (translations[lang] && translations[lang][pKey]) opt.text = translations[lang][pKey];
            } else {
                const optKey = `${keyPrefix}_opt_${idx}`;
                if (translations[lang] && translations[lang][optKey]) opt.text = translations[lang][optKey];
            }
        });
    });

    // Handle RTL for Urdu
    document.body.dir = (lang === 'ur') ? 'rtl' : 'ltr';
}


// Sticky Header & Logo Resize
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Scroll Reveal
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Counters Animation
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        const rect = counter.getBoundingClientRect();
        if(rect.top < window.innerHeight && counter.innerText === '0') {
            updateCount();
        }
    });
};

window.addEventListener('scroll', () => {
    animateCounters();
});

// --- Project Gallery Logic ---

const projectData = [
    { id: 'abrantes', name: 'Abrantes Station 4', images: [
        'abrantesastaiton4/image (5).png', 'abrantesastaiton4/image (6).png', 'abrantesastaiton4/image (7).png', 
        'abrantesastaiton4/image (8).png', 'abrantesastaiton4/image (9).png', 'abrantesastaiton4/img-1.JPG', 
        'abrantesastaiton4/img-2.JPG', 'abrantesastaiton4/img-3.JPG', 'abrantesastaiton4/img-4.JPG', 
        'abrantesastaiton4/img-5.jpeg', 'abrantesastaiton4/img-6.jpeg', 'abrantesastaiton4/img-7.jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.53 PM (1).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.53 PM (2).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.53 PM.jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.54 PM (1).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.54 PM (2).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.54 PM (3).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.54 PM (4).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.54 PM.jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (1).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (2).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (3).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (4).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (5).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (6).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (7).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM.jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.56 PM (1).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.56 PM (2).jpeg',
        'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.56 PM.jpeg'
    ]},
    { id: 'biscaia', name: 'Villa Biscaia', images: [
        'Biscaia/img-1.jpg', 'Biscaia/img-2.jpg', 'Biscaia/IMG-20240416-WA0102.jpg', 'Biscaia/IMG-20240417-WA0066.jpg', 
        'Biscaia/IMG-20240426-WA0078.jpg', 'Biscaia/IMG-20240504-WA0103.jpg', 'Biscaia/IMG-20240515-WA0100.jpg', 
        'Biscaia/IMG-20240530-WA0117.jpg', 'Biscaia/IMG-20240603-WA0230.jpg', 'Biscaia/IMG-20240706-WA0043.jpg', 
        'Biscaia/IMG-20240711-WA0043.jpg', 'Biscaia/IMG-20240909-WA0081.jpg', 'Biscaia/IMG-20241108-WA0048.jpg', 
        'Biscaia/IMG-20241108-WA0051.jpg', 'Biscaia/IMG-20241231-WA0047.jpg', 'Biscaia/IMG-20250222-WA0012.jpg', 
        'Biscaia/IMG-20250429-WA0075.jpg', 'Biscaia/IMG-20250714-WA0080.jpg', 'Biscaia/img-3.jpeg', 
        'Biscaia/img-4.jpg', 'Biscaia/img-5.jpg', 'Biscaia/img-6.jpg', 'Biscaia/img-7.png', 'Biscaia/img-8.png'
    ]},
    { id: 'monaco', name: 'Hotel Monaco', images: [
        'Hotel-MONACO/img-1.jpeg', 'Hotel-MONACO/0932a491-e337-42b4-9b28-40319f6b6615.jpeg', 'Hotel-MONACO/10c66cd7-c37b-4122-8a89-a513950bcbcb.jpeg', 
        'Hotel-MONACO/19b6da65-b917-4fe0-a829-82d10c7429e9.jpeg', 'Hotel-MONACO/239fa819-dc67-437b-b8f4-06306a220162.jpeg', 
        'Hotel-MONACO/2ec7b7db-6a8b-4931-9a87-86abbc5624a4.jpeg', 'Hotel-MONACO/32bb3200-5ebb-4bbd-8152-9769e659b0da.jpeg', 
        'Hotel-MONACO/38438262-d986-4e82-93bc-9374e59ee947.jpeg', 'Hotel-MONACO/3887c2b8-5694-4b6a-95f2-f04fc6755f9f.jpeg', 
        'Hotel-MONACO/44e24c43-7848-459e-a50e-a993e7e6f2d9.jpeg', 'Hotel-MONACO/48ea8b9e-c689-42e2-97aa-ba225dd9c97f.jpeg', 
        'Hotel-MONACO/5d4a065b-0ab6-4ab9-af53-8bcb337398b8.jpeg', 'Hotel-MONACO/6e65bbec-384a-4c0f-90ec-b85aaca1c3cc.jpeg', 
        'Hotel-MONACO/7a1b53e7-2154-4047-9c95-2705100aa1e4.jpeg', 'Hotel-MONACO/82e959d6-4921-440f-adf7-9167a124cf14.jpeg', 
        'Hotel-MONACO/8606c924-c90b-4483-8587-49f5836e491e.jpeg', 'Hotel-MONACO/97cf5d86-363a-4208-8664-7c8c9eaf9efd.jpeg', 
        'Hotel-MONACO/aabc08d1-2d59-4002-9aaa-5d2928ed13d6.jpeg', 'Hotel-MONACO/aad8fe56-019c-41de-a619-92ae25ec29b7.jpeg', 
        'Hotel-MONACO/adf149b9-7485-47ed-9fcb-fc1eeb8d2fd5.jpeg', 'Hotel-MONACO/bdd1fd0e-b131-4267-9fc2-4a8807625ab4.jpeg', 
        'Hotel-MONACO/c59bf451-58d5-4554-b6b9-5316caa08673.jpeg', 'Hotel-MONACO/d9308dd3-0cdd-412d-a343-c342f09bba72.jpeg', 
        'Hotel-MONACO/dce11c81-3b2e-4884-a067-0aa512fc74bf.jpeg', 'Hotel-MONACO/f8da48d2-edca-4b1a-b888-a9517142eafb.jpeg', 
        'Hotel-MONACO/fb44ac80-c1c6-41d0-b65e-436c4d603596.jpeg', 'Hotel-MONACO/fc4884d6-0cc9-4075-bb24-4a974d6265fa.jpeg', 
        'Hotel-MONACO/image (5).png', 'Hotel-MONACO/image (6).png'
    ]},
    { id: 'santarem', name: 'Santarém', images: [
        'santarem/img-1.png', 'santarem/image (5).png', 'santarem/image (6).png', 'santarem/image (7).png', 'santarem/image (8).png'
    ]}
];

// Auto-sort images to prioritize img-1, img-2, etc.
projectData.forEach(project => {
    project.images.sort((a, b) => {
        const getPriority = (path) => {
            const fileName = path.split('/').pop().toLowerCase();
            if (fileName.startsWith('img-')) {
                // Extract number, handle img-1, img-10 etc correctly
                const num = parseInt(fileName.match(/\d+/)) || 0;
                return num; 
            }
            return 999; // Lower priority for other names
        };

        const pA = getPriority(a);
        const pB = getPriority(b);

        if (pA !== pB) return pA - pB;
        return a.localeCompare(b); // Alphabetical for same priority
    });
});

function initGallery() {
    const gallery = document.getElementById('project-gallery');
    if (!gallery) return;

    projectData.forEach(project => {
        project.images.forEach(imgSrc => {
            const card = document.createElement('div');
            card.className = `project-card reveal ${project.id}`;
            card.innerHTML = `
                <img src="${imgSrc}" alt="${project.name}" loading="lazy">
                <div class="project-overlay">
                    <h3>${project.name}</h3>
                </div>
            `;
            card.addEventListener('click', () => openLightbox(imgSrc));
            gallery.appendChild(card);
            revealObserver.observe(card);
        });
    });

    initFilters();
}

function initFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // UI Toggle
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update Page Hero Background based on project first image
            const project = projectData.find(p => p.id === filter);
            if (project && project.images.length > 0) {
                const heroBg = document.querySelector('.projects-hero-bg');
                if (heroBg) {
                    heroBg.style.backgroundImage = `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.4)), url('${project.images[0]}')`;
                }
            }

            // Card Filter
            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Lightbox
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    lbImg.src = src;
    lb.classList.add('active');
}

document.getElementById('close-lightbox')?.addEventListener('click', () => {
    document.getElementById('lightbox').classList.remove('active');
});

// Final Initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Set Language
    const savedLang = sessionStorage.getItem('exo_lang') || 'pt';
    changeLanguage(savedLang);

    // 2. Init Gallery (if exists)
    initGallery();

    // 3. Trigger default filter (Abrantes)
    const activeBtn = document.querySelector('.filter-btn.active');
    if (activeBtn) activeBtn.click();

    // 4. Check for URL filters
    const params = new URLSearchParams(window.location.search);
    const filter = params.get('filter');
    if (filter) {
        setTimeout(() => {
            const btn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
            if (btn) btn.click();
        }, 100);
    }
    
    // 5. Observe Reveal Elements
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});
