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
        serv_mf_t: "Sistemas de Estrutura Metálica e Pladur",
        serv_mf_p: "Instalação de precisão de estruturas metálicas e pladur para divisórias interiores modernas.",
        serv_c_t: "Colunas, Vigas e Lajes",
        serv_c_p: "Elementos estruturais de betão projetados para máxima capacidade de carga e durabilidade.",
        serv_m_t: "Alvenaria e Tijolos",
        serv_m_p: "Trabalhos de tijolo e bloco de alta qualidade para soluções de paredes robustas e estéticas.",
        serv_fr_t: "Estrutura e Cofragem",
        serv_fr_p: "Execução especializada de cofragens e estruturas para projetos arquitetónicos complexos.",
        serv_fs_t: "Regularização de Pisos",
        serv_fs_p: "Nivelamento e preparação perfeita de pisos para todos os tipos de acabamentos de luxo.",
        serv_cr_t: "Carpintaria",
        serv_cr_p: "Carpintaria estrutural e decorativa personalizada para projetos residenciais de prestígio.",
        serv_rc_t: "Estruturas de Betão Armado",
        serv_rc_p: "Construção de estruturas duráveis e estáveis utilizando betão armado de alta qualidade.",
        serv_pr_t: "Estuque, Reboco e Acabamentos",
        serv_pr_p: "Acabamentos de superfície abrangentes, incluindo técnicas avançadas de estuque e reboco.",
        serv_ct_t: "Ladrilhagem e Cerâmica",
        serv_ct_p: "Instalação profissional de cerâmicas e porcelanatos de alta qualidade para pisos e paredes.",
        serv_f_t: "Fundações e Escavações",
        serv_f_p: "Preparação especializada do solo e escavações para fundações sólidas de edifícios.",
        serv_sr_t: "Armadura de Aço",
        serv_sr_p: "Colocação profissional de armaduras de aço para garantir a máxima integridade estrutural.",
        serv_pl_t: "Canalização e Pichelaria",
        serv_pl_p: "Soluções completas de canalização, incluindo sistemas de abastecimento de água e drenagem.",
        serv_et_t: "Isolamento Exterior (ETICS)",
        serv_et_p: "Sistemas avançados de ETICS para uma eficiência térmica superior e proteção do edifício.",
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
        form_serv_opt_1: "Sistemas de Estrutura Metálica e Pladur",
        form_serv_opt_2: "Colunas, Vigas e Lajes",
        form_serv_opt_3: "Alvenaria e Tijolos",
        form_serv_opt_4: "Estrutura e Cofragem",
        form_serv_opt_5: "Regularização de Pisos",
        form_serv_opt_6: "Carpintaria",
        form_serv_opt_7: "Estruturas de Betão Armado",
        form_serv_opt_8: "Estuque, Reboco e Acabamentos",
        form_serv_opt_9: "Ladrilhagem e Cerâmica",
        form_serv_opt_10: "Fundações e Escavações",
        form_serv_opt_11: "Armadura de Aço",
        form_serv_opt_12: "Canalização e Pichelaria",
        form_serv_opt_13: "Isolamento Exterior (ETICS)",
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
        skilled_specialists: "Especialistas Qualificados",
        about_home_title: "Construindo o Futuro com Precisão.",
        about_home_p1: "Na EXO Building, combinamos inovação técnica com os mais altos padrões de qualidade. A nossa equipa de especialistas é dedicada a transformar visões arquitetónicas em realidade estrutural.",
        about_home_p2: "Operamos em todo o território nacional e europeu, entregando projetos de luxo e infraestruturas complexas com eficiência e rigor inigualáveis.",
        about_bullet_1: "Engenharia de precisão",
        about_bullet_2: "Sustentabilidade e Inovação",
        about_bullet_3: "Equipa Especializada",
        btn_know_more: "Saber Mais"
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
        section_projects_home: "Recent Emblematic Projects",
        projects_home_subtitle: "A careful selection of our high-level structural rehabilitations and luxury constructions.",
        proj_abrantes: "Abrantes Station 4",
        proj_biscaia: "Villa Biscaia",
        proj_monaco: "Hotel Monaco",
        proj_santarem: "Santarém Project",
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
        form_serv_opt_1: "Metal framing and plasterboard systems",
        form_serv_opt_2: "Columns, beams, and slabs",
        form_serv_opt_3: "Masonry and brickwork",
        form_serv_opt_4: "Framework",
        form_serv_opt_5: "Floor Screeding",
        form_serv_opt_6: "Carpentry",
        form_serv_opt_7: "Reinforced concrete structures",
        form_serv_opt_8: "Plastering, rendering, and finishing works",
        form_serv_opt_9: "Ceramic tiling",
        form_serv_opt_10: "Foundations and excavations",
        form_serv_opt_11: "Steel Reinforcement",
        form_serv_opt_12: "Plumbing",
        form_serv_opt_13: "Exterior Insulation System",
        serv_mf_t: "Metal framing and plasterboard systems",
        serv_mf_p: "Precision installation of metal structures and plasterboard for modern interior partitions.",
        serv_c_t: "Columns, beams, and slabs",
        serv_c_p: "Structural concrete elements designed for maximum load-bearing capacity and durability.",
        serv_m_t: "Masonry and brickwork",
        serv_m_p: "High-quality brick and block work for robust and aesthetic wall solutions.",
        serv_fr_t: "Framework",
        serv_fr_p: "Expert formwork and framework execution for complex architectural designs.",
        serv_fs_t: "Floor Screeding",
        serv_fs_p: "Perfect floor leveling and preparation for all types of high-end finishes.",
        serv_cr_t: "Carpentry",
        serv_cr_p: "Custom structural and decorative woodwork for premium residential projects.",
        serv_rc_t: "Reinforced concrete structures",
        serv_rc_p: "Construction of durable and stable structures using high-grade reinforced concrete.",
        serv_pr_t: "Plastering, rendering, and finishing works",
        serv_pr_p: "Comprehensive surface finishing including advanced plastering and rendering techniques.",
        serv_ct_t: "Ceramic tiling",
        serv_ct_p: "Professional installation of high-quality ceramic and porcelain tiles for floors and walls.",
        serv_f_t: "Foundations and excavations",
        serv_f_p: "Specialized ground preparation and excavation for solid building foundations.",
        serv_sr_t: "Steel Reinforcement",
        serv_sr_p: "Professional placement of steel bars to ensure maximum structural integrity.",
        serv_pl_t: "Plumbing",
        serv_pl_p: "Complete plumbing solutions including water supply and drainage systems.",
        serv_et_t: "Exterior Insulation System",
        serv_et_p: "Advanced ETICS systems for superior thermal efficiency and building protection.",
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
        skilled_specialists: "Skilled Specialists",
        about_home_title: "Building the Future with Precision.",
        about_home_p1: "At EXO Building, we combine technical innovation with the highest quality standards. Our expert team is dedicated to turning architectural visions into structural reality.",
        about_home_p2: "We operate nationwide and across Europe, delivering luxury projects and complex infrastructure with unmatched efficiency and rigor.",
        about_bullet_1: "Precision engineering",
        about_bullet_2: "Sustainability and Innovation",
        about_bullet_3: "Specialized Team",
        btn_know_more: "Know More"
    },
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
        about_p1: "Exo Building est une entreprise de construction spécialisée dans les projets résidentiels et commerciaux, fournissant des résultats de haute qualité avec précision technique, efficacité et contrôle opérationnel total.",
        about_p2: "Avec une équipe interne dédiée de 30 professionnels qualifiés et l'accès à de la machinerie lourde avancée, nous garantissons le respect strict des délais, l'efficacité des coûts et une main-d'œuvre supérieure à chaque phase de la construction.",
        about_p3: "Entrepreneur de travaux publics certifié (Alvará n° 120974 – Classe 6).",
        vision_title: "Notre Vision",
        vision_subtitle: "Établir la norme internationale de maîtrise technique dans la construction moderne.",
        vision_card1_t: "Construire avec Excellence",
        vision_card1_p: "Nous nous efforçons de fournir une qualité supérieure dans chaque projet, garantissant durabilité, précision et savoir-faire.",
        vision_card2_t: "Délivrer Confiance et Fiabilité",
        vision_card2_p: "Nous nous engageons à établir des relations à long terme par la transparence et la cohérence.",
        mission_title: "Notre Mission",
        mission_subtitle: "Exécution stratégique et intégrité structurelle dans toute l'Europe.",
        mission_card1_t: "Solutions Rentables",
        mission_card1_p: "Nous visons à fournir des services de haute qualité à des prix compétitifs.",
        mission_card2_t: "Satisfaction Client",
        mission_card2_p: "Nous nous concentrons sur la compréhension des besoins des clients.",
        mission_card3_t: "Normes de Sécurité",
        mission_card3_p: "Nous privilégions la sécurité à chaque étape de nos projets.",
        proj_abrantes: "Gare d'Abrantes 4",
        proj_biscaia: "Villa Biscaia",
        proj_monaco: "Hôtel Monaco",
        proj_santarem: "Projet de Santarém",
        contact_title: "Contactez-nous",
        contact_subtitle: "Contactez notre équipe pour des conseils techniques ou des demandes de projets.",
        office_title: "Bureau de Lisbonne",
        form_name: "Nom complet",
        form_email: "Adresse e-mail",
        form_service: "Service requis",
        form_message: "Détails du projet",
        form_submit: "Envoyer la demande",
        form_name_p: "Jean Dupont",
        form_email_p: "jean@exemple.fr",
        form_msg_p: "Parlez-nous de vos besoins...",
        form_serv_placeholder: "Sélectionnez un service",
        form_serv_opt_1: "Systèmes de charpente métallique et plaques de plâtre",
        form_serv_opt_2: "Colonnes, poutres et dalles",
        form_serv_opt_3: "Maçonnerie et briquetage",
        form_serv_opt_4: "Charpente",
        form_serv_opt_5: "Chape de sol",
        form_serv_opt_6: "Menuiserie",
        form_serv_opt_7: "Structures en béton armé",
        form_serv_opt_8: "Plâtrerie, enduit et finitions",
        form_serv_opt_9: "Carrelage céramique",
        form_serv_opt_10: "Fondations et terrassements",
        form_serv_opt_11: "Armature en acier",
        form_serv_opt_12: "Plomberie",
        form_serv_opt_13: "Système d'isolation extérieure",
        serv_mf_t: "Systèmes de charpente métallique et plaques de plâtre",
        serv_mf_p: "Installation de précision de structures métalliques et placo pour cloisons modernes.",
        serv_c_t: "Colonnes, poutres et dalles",
        serv_c_p: "Éléments structurels en béton conçus pour une capacité de charge maximale.",
        serv_m_t: "Maçonnerie et briquetage",
        serv_m_p: "Travaux de brique et bloc de haute qualité pour des solutions murales robustes.",
        serv_fr_t: "Charpente",
        serv_fr_p: "Exécution experte de coffrages pour des conceptions architecturales complexes.",
        serv_fs_t: "Chape de sol",
        serv_fs_p: "Nivellement parfait des sols pour tous types de finitions haut de gamme.",
        serv_cr_t: "Menuiserie",
        serv_cr_p: "Travaux de bois structurels et décoratifs sur mesure.",
        serv_rc_t: "Structures en béton armé",
        serv_rc_p: "Construction de structures durables utilisant du béton armé de haute qualité.",
        serv_pr_t: "Plâtrerie, enduit et finitions",
        serv_pr_p: "Finitions de surface complètes incluant plâtrerie et enduit.",
        serv_ct_t: "Carrelage céramique",
        serv_ct_p: "Installation professionnelle de carreaux de céramique et porcelaine.",
        serv_f_t: "Fondations et terrassements",
        serv_f_p: "Préparation spécialisée du sol pour des fondations solides.",
        serv_sr_t: "Armature en acier",
        serv_sr_p: "Placement professionnel d'armatures en acier.",
        serv_pl_t: "Plomberie",
        serv_pl_p: "Solutions de plomberie complètes.",
        serv_et_t: "Système d'isolation extérieure",
        serv_et_p: "Systèmes ETICS avancés pour une efficacité thermique supérieure.",
        explore_services: "Explorer tous les services",
        lang_label: "Langue",
        f_nav: "Navigation",
        f_serv: "Services",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        footer_brand: "Construction de pointe et conseil technique au Portugal et en Europe.",
        phone_label: "Téléphone",
        location_label: "Emplacement",
        web_label: "Web",
        copyright: "© 2022 EXO Building. Tous droits réservés.",
        quality_title: "Engagé envers la qualité",
        quality_p: "Notre équipe de 30 professionnels hautement qualifiés garantit la perfection de chaque projet.",
        quality_btn: "Parler à un spécialiste",
        worker_badge: "+30 travailleurs spécialisés",
        skilled_specialists: "Spécialistes qualifiés",
        about_home_title: "Construire l'avenir avec précision.",
        about_home_p1: "Chez EXO Building, nous combinons innovation technique et normes de qualité élevées.",
        about_home_p2: "Nous opérons à l'échelle nationale et européenne.",
        about_bullet_1: "Ingénierie de précision",
        about_bullet_2: "Durabilité et innovation",
        about_bullet_3: "Équipe spécialisée",
        btn_know_more: "En savoir plus"
    },
    nl: {
        nav_home: "Home", nav_projects: "Projecten", nav_services: "Diensten", nav_about: "Over Ons", nav_contact: "Contact",
        hero_title: "Hoogwaardige Precisietechniek & Constructie.",
        hero_subtitle: "Architecturale uitmuntendheid met tactische precisie in Portugal en Europa.",
        btn_discover: "Ontdek Projecten", btn_expertise: "Onze Expertise",
        section_projects: "Portfolio van Uitmuntendheid",
        projects_subtitle: "Een galerij van onze structurele prestaties in heel Europa.",
        section_services: "Technische Precisie",
        services_subtitle: "Hoogwaardige structurele oplossingen in heel Portugal.",
        about_tagline: "Superieur Vakmanschap",
        about_title: "Vandaag bouwen aan de monumenten van morgen.",
        about_p1: "Exo Building is een bouwbedrijf dat gespecialiseerd is in residentiële en commerciële projecten en hoogwaardige resultaten levert met technische precisie.",
        about_p2: "Met een toegewijd intern team van 30 vakmensen en geavanceerde machines garanderen wij een strikte naleving van deadlines en superieur vakmanschap.",
        about_p3: "Gecertificeerd aannemer voor openbare werken (Alvará nr. 120974 – Klasse 6).",
        vision_title: "Onze Visie",
        vision_subtitle: "De internationale standaard zetten voor technisch meesterschap in de moderne bouw.",
        vision_card1_t: "Bouwen met Uitmuntendheid",
        vision_card1_p: "Wij streven naar superieure kwaliteit in elk project.",
        vision_card2_t: "Vertrouwen en Betrouwbaarheid",
        vision_card2_p: "Wij bouwen aan langdurige relaties door transparantie.",
        mission_title: "Onze Missie",
        mission_subtitle: "Strategische uitvoering en structurele integriteit in heel Europa.",
        mission_card1_t: "Kosteneffectieve Oplossingen",
        mission_card1_p: "Wij leveren hoogwaardige diensten tegen concurrerende prijzen.",
        mission_card2_t: "Klanttevredenheid",
        mission_card2_p: "Wij focussen op het begrijpen van klantbehoeften.",
        mission_card3_t: "Veiligheidsnormen",
        mission_card3_p: "Veiligheid staat bij ons centraal in elke fase.",
        proj_abrantes: "Abrantes Station 4",
        proj_biscaia: "Villa Biscaia",
        proj_monaco: "Hotel Monaco",
        proj_santarem: "Santarém Project",
        contact_title: "Neem Contact Op",
        contact_subtitle: "Neem contact op met ons team voor technisch advies of projectaanvragen.",
        office_title: "Kantoor Lissabon",
        form_name: "Volledige Naam",
        form_email: "E-mailadres",
        form_service: "Gevraagde Dienst",
        form_message: "Projectdetails",
        form_submit: "Aanvraag Verzenden",
        form_name_p: "Jan Jansen",
        form_email_p: "jan@voorbeeld.nl",
        form_msg_p: "Vertel ons over uw projectwensen...",
        form_serv_placeholder: "Selecteer een dienst",
        form_serv_opt_1: "Metalen frame en gipsplaatsystemen",
        form_serv_opt_2: "Kolommen, balken en vloeren",
        form_serv_opt_3: "Metselwerk",
        form_serv_opt_4: "Bekisting",
        form_serv_opt_5: "Vloeren egaliseren",
        form_serv_opt_6: "Timmerwerk",
        form_serv_opt_7: "Gewapend betonconstructies",
        form_serv_opt_8: "Stucwerk en afwerking",
        form_serv_opt_9: "Tegelwerk",
        form_serv_opt_10: "Funderingen en graafwerkzaamheden",
        form_serv_opt_11: "Staalvlechtwerk",
        form_serv_opt_12: "Loodgieterswerk",
        form_serv_opt_13: "Buitenisolatie systeem",
        serv_mf_t: "Metalen frame en gipsplaatsystemen",
        serv_mf_p: "Precisie-installatie van metalen structuren en gipsplaat.",
        serv_c_t: "Kolommen, balken en vloeren",
        serv_c_p: "Betonnen structurele elementen voor maximale draagkracht.",
        serv_m_t: "Metselwerk",
        serv_m_p: "Hoogwaardig metselwerk voor robuuste wandoplossingen.",
        serv_fr_t: "Bekisting",
        serv_fr_p: "Deskundige bekisting voor complexe architectonische ontwerpen.",
        serv_fs_t: "Vloeren egaliseren",
        serv_fs_p: "Perfecte vloeregalisatie voor luxe afwerkingen.",
        serv_cr_t: "Timmerwerk",
        serv_cr_p: "Maatwerk timmerwerk voor luxe projecten.",
        serv_rc_t: "Gewapend betonconstructies",
        serv_rc_p: "Duurzame constructies met hoogwaardig gewapend beton.",
        serv_pr_t: "Stucwerk en afwerking",
        serv_pr_p: "Uitgebreide oppervlakteafwerking inclusief stucwerk.",
        serv_ct_t: "Tegelwerk",
        serv_ct_p: "Professionele installatie van keramische tegels.",
        serv_f_t: "Funderingen en graafwerkzaamheden",
        serv_f_p: "Gespecialiseerde grondvoorbereiding voor funderingen.",
        serv_sr_t: "Staalvlechtwerk",
        serv_sr_p: "Professionele plaatsing van staalversterking.",
        serv_pl_t: "Loodgieterswerk",
        serv_pl_p: "Complete loodgietersoplossingen.",
        serv_et_t: "Buitenisolatie systeem",
        serv_et_p: "Geavanceerde ETICS-systemen voor thermische efficiëntie.",
        explore_services: "Ontdek alle diensten",
        lang_label: "Taal",
        f_nav: "Navigatie",
        f_serv: "Diensten",
        privacy: "Privacybeleid",
        terms: "Algemene Voorwaarden",
        footer_brand: "State-of-the-art bouw en technisch advies in Portugal en Europa.",
        phone_label: "Telefoon",
        location_label: "Locatie",
        web_label: "Web",
        copyright: "© 2022 EXO Building. Alle rechten voorbehouden.",
        quality_title: "Toegewijd aan kwaliteit",
        quality_p: "Ons team van 30 vakmensen garandeert perfectie.",
        quality_btn: "Spreek met een specialist",
        worker_badge: "+30 gespecialiseerde arbeiders",
        skilled_specialists: "Vakkundige specialisten",
        about_home_title: "Bouwen aan de toekomst met precisie.",
        about_home_p1: "Bij EXO Building combineren we technische innovatie met kwaliteit.",
        about_home_p2: "Wij zijn actief in heel Europa.",
        about_bullet_1: "Precisie-engineering",
        about_bullet_2: "Duurzaamheid en innovatie",
        about_bullet_3: "Gespecialiseerd team",
        btn_know_more: "Meer weten"
    },
    zh: {
        nav_home: "首页", nav_projects: "项目", nav_services: "服务", nav_about: "关于我们", nav_contact: "联系我们",
        hero_title: "高端精密工程与建筑",
        hero_subtitle: "在葡萄牙和整个欧洲交付卓越建筑。",
        btn_discover: "发现项目", btn_expertise: "我们的专业知识",
        section_projects: "卓越组合",
        projects_subtitle: "我们在欧洲结构成就的综合展示。",
        section_services: "技术精密",
        services_subtitle: "葡萄牙各地的高端结构解决方案。",
        about_tagline: "卓越工艺",
        about_title: "今天建造明天的地标",
        about_p1: "Exo Building 是一家专门从事住宅和商业项目的建筑公司，以技术精密、高效和全面的运营控制交付高质量的结果。",
        about_p2: "我们拥有由 30 名熟练专业人员组成的专门内部团队，并可使用先进的重型机械，确保在施工的每个阶段严格遵守最后期限。",
        about_p3: "认证公共工程承包商（执照编号 120974 – 第 6 级）。",
        vision_title: "我们的愿景",
        vision_subtitle: "为现代建筑的技术掌握设定国际标准。",
        vision_card1_t: "以卓越打造",
        vision_card1_p: "我们努力在每个项目中交付卓越的质量。",
        vision_card2_t: "交付信任与可靠",
        vision_card2_p: "我们致力于通过透明度建立长期关系。",
        mission_title: "我们的使命",
        mission_subtitle: "在整个欧洲景观中进行战略执行和结构整合。",
        mission_card1_t: "提供高性价比的解决方案",
        mission_card1_p: "我们的目标是以具有竞争力的价格交付高质量的服务。",
        mission_card2_t: "确保客户满意",
        mission_card2_p: "我们专注于理解客户需求。",
        mission_card3_t: "保持高安全标准",
        mission_card3_p: "我们在项目的每个阶段都优先考虑安全。",
        proj_abrantes: "阿布兰特什 4 号站",
        proj_biscaia: "比斯开别墅",
        proj_monaco: "摩纳哥酒店",
        proj_santarem: "圣塔伦项目",
        contact_title: "保持联系",
        contact_subtitle: "联系我们的团队进行技术咨询或项目咨询。",
        office_title: "里斯本办公室",
        form_name: "全名",
        form_email: "电子邮件地址",
        form_service: "所需服务",
        form_message: "项目详情",
        form_submit: "发送咨询",
        form_name_p: "张三",
        form_email_p: "zhangsan@example.com",
        form_msg_p: "告诉我们您的项目要求...",
        form_serv_placeholder: "选择服务",
        form_serv_opt_1: "金属框架和石膏板系统",
        form_serv_opt_2: "柱、梁和板",
        form_serv_opt_3: "砌筑和砖艺",
        form_serv_opt_4: "框架",
        form_serv_opt_5: "地面找平",
        form_serv_opt_6: "木工",
        form_serv_opt_7: "钢筋混凝土结构",
        form_serv_opt_8: "抹灰、粉刷和装饰工程",
        form_serv_opt_9: "陶瓷铺贴",
        form_serv_opt_10: "地基和挖掘",
        form_serv_opt_11: "钢筋加固",
        form_serv_opt_12: "管道工程",
        form_serv_opt_13: "外墙保温系统",
        serv_mf_t: "金属框架和石膏板系统",
        serv_mf_p: "金属结构和石膏板的精密安装。",
        serv_c_t: "柱、梁和板",
        serv_c_p: "旨在实现最大承载能力的混凝土结构元件。",
        serv_m_t: "砌筑和砖艺",
        serv_m_p: "用于稳固墙体解决方案的高质量砖石作业。",
        serv_fr_t: "框架",
        serv_fr_p: "复杂建筑设计的专业模板施工。",
        serv_fs_t: "地面找平",
        serv_fs_p: "为高端饰面提供完美的地面找平。",
        serv_cr_t: "木工",
        serv_cr_p: "为高端住宅项目定制结构和装饰木工。",
        serv_rc_t: "钢筋混凝土结构",
        serv_rc_p: "使用高级钢筋混凝土建造持久稳定的结构。",
        serv_pr_t: "抹灰、粉刷和装饰工程",
        serv_pr_p: "全面的表面装饰，包括先进的抹灰技术。",
        serv_ct_t: "陶瓷铺贴",
        serv_ct_p: "专业安装高质量的陶瓷和瓷砖。",
        serv_f_t: "地基和挖掘",
        serv_f_p: "为坚固的建筑地基提供专业的地面准备。",
        serv_sr_t: "钢筋加固",
        serv_sr_p: "专业放置钢筋以确保最大结构完整性。",
        serv_pl_t: "管道工程",
        serv_pl_p: "完整的管道解决方案。",
        serv_et_t: "外墙保温系统",
        serv_et_p: "先进的 ETICS 系统，提供卓越的热效率。",
        explore_services: "探索所有服务",
        lang_label: "语言",
        f_nav: "导航",
        f_serv: "服务",
        privacy: "隐私政策",
        terms: "服务条款",
        footer_brand: "葡萄牙和欧洲最先进的建筑和技术咨询。",
        phone_label: "电话",
        location_label: "地点",
        web_label: "网页",
        copyright: "© 2022 EXO Building. 版权所有。",
        quality_title: "致力于质量",
        quality_p: "我们由 30 名熟练专业人员组成的团队确保每个细节都完美。",
        quality_btn: "咨询专家",
        worker_badge: "+30 专业工人",
        skilled_specialists: "熟练专家",
        about_home_title: "以精密建造未来",
        about_home_p1: "在 EXO Building，我们将技术创新与最高质量标准相结合。",
        about_home_p2: "我们在全国及全欧洲范围内开展业务。",
        about_bullet_1: "精密工程",
        about_bullet_2: "可持续性与创新",
        about_bullet_3: "专业团队",
        btn_know_more: "了解更多"
    },
    ur: {
        nav_home: "ہوم", nav_projects: "پراجیکٹس", nav_services: "خدمات", nav_about: "ہمارے بارے میں", nav_contact: "رابطہ",
        hero_title: "اعلی درجے کی درستگی انجینئرنگ اور تعمیر۔",
        hero_subtitle: "پرتگال اور یورپ بھر میں تعمیراتی عمدگی کی فراہمی۔",
        btn_discover: "پراجیکٹس دیکھیں", btn_expertise: "ہماری مہارت",
        section_projects: "عمدگی کا پورٹ فولیو",
        projects_subtitle: "یورپ بھر میں ہماری ساختی کامیابیوں کی ایک جامع گیلری۔",
        section_services: "تکنیکی درستگی",
        services_subtitle: "پرتگال بھر میں پرتعیش رہائشی اور تجارتی منصوبوں کے لیے اعلیٰ ساختی حل۔",
        about_tagline: "اعلیٰ دستکاری",
        about_title: "آج کل کے سنگ میل کی تعمیر",
        about_p1: "Exo Building ایک تعمیراتی کمپنی ہے جو رہائشی اور تجارتی منصوبوں میں مہارت رکھتی ہے، جو تکنیکی درستگی اور مکمل کنٹرول کے ساتھ اعلیٰ معیار کے نتائج فراہم کرتی ہے۔",
        about_p2: "30 ماہر پیشہ ور افراد کی ٹیم اور جدید مشینری کے ساتھ، ہم وقت کی پابندی اور بہترین کاریگری کو یقینی بناتے ہیں۔",
        about_p3: "سرٹیفائیڈ پبلک ورکس کنٹریکٹر (Alvará نمبر 120974 – کلاس 6)۔",
        vision_title: "ہمارا وژن",
        vision_subtitle: "جدید تعمیرات میں تکنیکی مہارت کا عالمی معیار قائم کرنا۔",
        vision_card1_t: "عمدگی کے ساتھ تعمیر",
        vision_card1_p: "ہم ہر منصوبے میں بہترین معیار فراہم کرنے کی کوشش کرتے ہیں۔",
        vision_card2_t: "اعتماد اور بھروسہ",
        vision_card2_p: "ہم شفافیت کے ذریعے طویل مدتی تعلقات استوار کرنے کے لیے پرعزم ہیں۔",
        mission_title: "ہمارا مشن",
        mission_subtitle: "پورے یورپ میں اسٹریٹجک عملدرآمد اور ساختی سالمیت۔",
        mission_card1_t: "سستے حل فراہم کرنا",
        mission_card1_p: "ہم مسابقتی قیمتوں پر اعلیٰ معیار کی خدمات فراہم کرنے کا ارادہ رکھتے ہیں۔",
        mission_card2_t: "گاہک کی اطمینان",
        mission_card2_p: "ہم گاہک کی ضروریات کو سمجھنے پر توجہ مرکوز کرتے ہیں۔",
        mission_card3_t: "حفاظتی معیار",
        mission_card3_p: "ہم ہر مرحلے پر حفاظت کو ترجیح دیتے ہیں۔",
        proj_abrantes: "ابرانٹیس اسٹیشن 4",
        proj_biscaia: "ولا بسکایا",
        proj_monaco: "ہوٹل موناکو",
        proj_santarem: "سنتاریم پراجیکٹ",
        contact_title: "رابطہ کریں",
        contact_subtitle: "تکنیکی مشاورت یا پراجیکٹ انکوائری کے لیے ہماری ٹیم سے رابطہ کریں۔",
        office_title: "لزبن آفس",
        form_name: "پورا نام",
        form_email: "ای میل ایڈریس",
        form_service: "مطلوبہ خدمت",
        form_message: "پراجیکٹ کی تفصیلات",
        form_submit: "درخواست بھیجیں",
        form_name_p: "احمد علی",
        form_email_p: "ahmed@example.com",
        form_msg_p: "ہمیں اپنے پراجیکٹ کی ضروریات کے بارے میں بتائیں...",
        form_serv_placeholder: "سروس منتخب کریں",
        form_serv_opt_1: "میٹل فریم اور پلاسٹر بورڈ سسٹم",
        form_serv_opt_2: "کالم، بیم اور سلیب",
        form_serv_opt_3: "اینٹوں کا کام",
        form_serv_opt_4: "فریم ورک",
        form_serv_opt_5: "فلور اسکریڈنگ",
        form_serv_opt_6: "کارپینٹری",
        form_serv_opt_7: "کنکریٹ ڈھانچے",
        form_serv_opt_8: "پلاسٹرنگ اور فنشنگ",
        form_serv_opt_9: "ٹائلوں کا کام",
        form_serv_opt_10: "بنیادیں اور کھدائی",
        form_serv_opt_11: "اسٹیل ری انفورسمنٹ",
        form_serv_opt_12: "پلمبنگ",
        form_serv_opt_13: "ایکسٹیریئر انسولیشن سسٹم",
        serv_mf_t: "میٹل فریم اور پلاسٹر بورڈ سسٹم",
        serv_mf_p: "میٹل ڈھانچے اور پلاسٹر بورڈ کی درست تنصیب۔",
        serv_c_t: "کالم، بیم اور سلیب",
        serv_c_p: "زیادہ سے زیادہ وزن اٹھانے کی صلاحیت کے لیے کنکریٹ کے عناصر۔",
        serv_m_t: "اینٹوں کا کام",
        serv_m_p: "مضبوط دیواروں کے لیے اینٹوں کا اعلیٰ معیار کا کام۔",
        serv_fr_t: "فریم ورک",
        serv_fr_p: "پیچیدہ ڈیزائنوں کے لیے ماہر فریم ورک۔",
        serv_fs_t: "فلور اسکریڈنگ",
        serv_fs_p: "بہترین فلور لیولنگ۔",
        serv_cr_t: "کارپینٹری",
        serv_cr_p: "پریمیم منصوبوں کے لیے کسٹم لکڑی کا کام۔",
        serv_rc_t: "کنکریٹ ڈھانچے",
        serv_rc_p: "اعلیٰ معیار کے کنکریٹ کا استعمال کرتے ہوئے پائیدار ڈھانچے۔",
        serv_pr_t: "پلاسٹرنگ اور فنشنگ",
        serv_pr_p: "پلاسٹرنگ کی جدید تکنیکوں سمیت مکمل فنشنگ۔",
        serv_ct_t: "ٹائلوں کا کام",
        serv_ct_p: "ٹائلوں کی پیشہ ورانہ تنصیب۔",
        serv_f_t: "بنیادیں اور کھدائی",
        serv_f_p: "مضبوط بنیادوں کے لیے زمین کی تیاری۔",
        serv_sr_t: "اسٹیل ری انفورسمنٹ",
        serv_sr_p: "اسٹیل کی پیشہ ورانہ جگہ کا تعین۔",
        serv_pl_t: "پلمبنگ",
        serv_pl_p: "پلمبنگ کے مکمل حل۔",
        serv_et_t: "ایکسٹیریئر انسولیشن سسٹم",
        serv_et_p: "حرارتی کارکردگی کے لیے جدید نظام۔",
        explore_services: "تمام خدمات دیکھیں",
        lang_label: "زبان",
        f_nav: "نیویگیشن",
        f_serv: "خدمات",
        privacy: "رازداری کی پالیسی",
        terms: "سروس کی شرائط",
        footer_brand: "پرتگال اور یورپ بھر میں تعمیرات اور تکنیکی مشاورت۔",
        phone_label: "فون",
        location_label: "مقام",
        web_label: "ویب",
        copyright: "© 2022 EXO Building. جملہ حقوق محفوظ ہیں۔",
        quality_title: "معیار کے لیے پرعزم",
        quality_p: "ہماری 30 ماہر پیشہ ور افراد کی ٹیم ہر انچ کی کاملیت کو یقینی بناتی ہے۔",
        quality_btn: "ماہر سے بات کریں",
        worker_badge: "+30 ماہر کارکن",
        skilled_specialists: "ماہر پیشہ ور افراد",
        about_home_title: "درستگی کے ساتھ مستقبل کی تعمیر",
        about_home_p1: "EXO Building میں ہم تکنیکی جدت کو معیار کے ساتھ جوڑتے ہیں۔",
        about_home_p2: "ہم پورے یورپ میں کام کرتے ہیں۔",
        about_bullet_1: "انجینئرنگ کی درستگی",
        about_bullet_2: "پائیداری اور جدت",
        about_bullet_3: "ماہر ٹیم",
        btn_know_more: "مزید جانیں"
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
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

// Initialize based on current language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = sessionStorage.getItem('exo_lang') || 'pt';
    changeLanguage(savedLang);

    // Initial check for counter and reveal
    initCounter();
    initGallery();

    // 1. Project Filter Functionality
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // UI Toggle
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Gallery Filter
            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });

    // 2. Handle URL parameters for filters (from Home page links)
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam) {
        const btn = document.querySelector(`.filter-btn[data-filter="${filterParam}"]`);
        if (btn) btn.click();
    }

    // 3. Smooth internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Force trigger first filter on projects page
    if (window.location.pathname.includes('projects.html')) {
        setTimeout(() => {
            const btn = document.querySelector('.filter-btn.active');
            if (btn) btn.click();
        }, 100);
    }

    // Observe Reveal Elements
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Language Switcher Click Toggle (Better for mobile/UX)
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
            }
        });

        // Close after selection
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                langDropdown.classList.remove('active');
            });
        });
    }

    // --- Lightbox Logic ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (lightbox && lightboxImg && lightboxClose) {
        // Function to open lightbox
        const openLightbox = (src) => {
            lightboxImg.src = src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        };

        // Function to close lightbox
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scroll
        };

        // Delegate click for dynamic cards (in projects page)
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            if (card) {
                e.preventDefault();
                const img = card.querySelector('img');
                if (img) openLightbox(img.src);
            }
        });

        // Close events
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Close on Esc key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }

});

// Counter Animation Logic
function initCounter() {
    document.querySelectorAll('.counter').forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = target / 50;

            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(updateCount, 40);
            } else {
                counter.innerText = target;
            }
        };

        const rect = counter.getBoundingClientRect();
        if (rect.top < window.innerHeight && counter.innerText === '0') {
            updateCount();
        }
    });
}


// --- Project Gallery Logic ---

const projectData = [
    {
        id: 'abrantes', name: 'Abrantes Station 4', images: [
            'abrantesastaiton4/image (5).png', 'abrantesastaiton4/image (6).png', 'abrantesastaiton4/image (7).png',
            'abrantesastaiton4/image (8).png', 'abrantesastaiton4/image (9).png', 'abrantesastaiton4/img-1.JPG',
            'abrantesastaiton4/img-2.JPG', 'abrantesastaiton4/img-3.JPG', 'abrantesastaiton4/img-4.JPG',
            'abrantesastaiton4/img-6.jpeg',
            'abrantesastaiton4/img-5.png',
            'abrantesastaiton4/Exo-ST4-Abrantes-English_page-0023ok.JPG',
            'abrantesastaiton4/Outlook-lzrg1uni.jpg',
            'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.54 PM (2).jpeg',
            'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.54 PM (4).jpeg',
            'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.54 PM.jpeg',
            'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (1).jpeg',
            'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (3).jpeg',
            'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (5).jpeg',
            'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM (7).jpeg',
            'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.55 PM.jpeg',
            'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.56 PM (2).jpeg',
            'abrantesastaiton4/WhatsApp Image 2026-04-20 at 8.34.56 PM.jpeg'
        ]
    },
    {
        id: 'biscaia', name: 'Villa Biscaia', images: [
            'Biscaia/img-1.jpg', 'Biscaia/img-2.jpg', 'Biscaia/IMG-20240416-WA0102.jpg', 'Biscaia/IMG-20240417-WA0066.jpg',
            'Biscaia/IMG-20240426-WA0078.jpg', 'Biscaia/IMG-20240504-WA0103.jpg', 'Biscaia/IMG-20240515-WA0100.jpg',
            'Biscaia/IMG-20240530-WA0117.jpg', 'Biscaia/IMG-20240603-WA0230.jpg', 'Biscaia/IMG-20240706-WA0043.jpg',
            'Biscaia/IMG-20240711-WA0043.jpg', 'Biscaia/IMG-20240909-WA0081.jpg', 'Biscaia/IMG-20241108-WA0048.jpg',
            'Biscaia/IMG-20241108-WA0051.jpg', 'Biscaia/IMG-20241231-WA0047.jpg', 'Biscaia/IMG-20250222-WA0012.jpg',
            'Biscaia/IMG-20250429-WA0075.jpg', 'Biscaia/IMG-20250714-WA0080.jpg',
            'Biscaia/img-4.jpg', 'Biscaia/img-5.jpg', 'Biscaia/img-6.jpg', 'Biscaia/img-7.png', 'Biscaia/img-8.png'
        ]
    },
    {
        id: 'monaco', name: 'Hotel Monaco', images: [
            'Hotel-MONACO/img-1.jpeg', 'Hotel-MONACO/19b6da65-b917-4fe0-a829-82d10c7429e9.jpeg', 'Hotel-MONACO/239fa819-dc67-437b-b8f4-06306a220162.jpeg',
            'Hotel-MONACO/2ec7b7db-6a8b-4931-9a87-86abbc5624a4.jpeg', 'Hotel-MONACO/32bb3200-5ebb-4bbd-8152-9769e659b0da.jpeg',
            'Hotel-MONACO/3887c2b8-5694-4b6a-95f2-f04fc6755f9f.jpeg', 'Hotel-MONACO/44e24c43-7848-459e-a50e-a993e7e6f2d9.jpeg',
            'Hotel-MONACO/6e65bbec-384a-4c0f-90ec-b85aaca1c3cc.jpeg', 'Hotel-MONACO/7a1b53e7-2154-4047-9c95-2705100aa1e4.jpeg',
            'Hotel-MONACO/82e959d6-4921-440f-adf7-9167a124cf14.jpeg', 'Hotel-MONACO/8606c924-c90b-4483-8587-49f5836e491e.jpeg',
            'Hotel-MONACO/97cf5d86-363a-4208-8664-7c8c9eaf9efd.jpeg', 'Hotel-MONACO/aabc08d1-2d59-4002-9aaa-5d2928ed13d6.jpeg',
            'Hotel-MONACO/c59bf451-58d5-4554-b6b9-5316caa08673.jpeg', 'Hotel-MONACO/d9308dd3-0cdd-412d-a343-c342f09bba72.jpeg',
            'Hotel-MONACO/f8da48d2-edca-4b1a-b888-a9517142eafb.jpeg', 'Hotel-MONACO/fb44ac80-c1c6-41d0-b65e-436c4d603596.jpeg'
        ]
    },
    {
        id: 'santarem', name: 'Santarém', images: [
            'santarem/img-1.png', 'santarem/image (5).png', 'santarem/image (7).png', 'santarem/image (8).png'
        ]
    }
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
            gallery.appendChild(card);
            revealObserver.observe(card);
        });
    });
}
