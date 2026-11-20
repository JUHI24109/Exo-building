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
        proj_condeixa: "Projeto de Condeixa",
        proj_santarem: "Projeto de Santarém",
        filter_all: "Todos os Projetos",
        view_all_projects: "Ver Todos os Projetos",
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
        btn_know_more: "Saber Mais",
        s_tag_1: "01. Estrutura",
        s_tag_2: "02. Elementos",
        s_tag_3: "03. Alvenarias",
        s_tag_4: "04. Cofragem",
        s_tag_5: "05. Pavimentos",
        s_tag_6: "06. Carpintaria",
        s_tag_7: "07. Betão Armado",
        s_tag_8: "08. Acabamentos",
        s_tag_9: "09. Cerâmica",
        s_tag_10: "10. Fundações",
        s_tag_11: "11. Armaduras",
        s_tag_12: "12. Canalização",
        s_tag_13: "13. Isolamento",
        quote_btn: "Pedir Orçamento",
        serv_hero_badge: "Engenharia & Construção Civil",
        serv_cap_1: "13 Especialidades Técnicas",
        serv_cap_2: "Alvará Nº 120974 – Classe 6",
        serv_cap_3: "Equipamento Próprio",
        serv_sec_tag: "O Que Fazemos",
        serv_sec_title: "Nossos Serviços Especializados",
        serv_sec_desc: "Cada serviço é executado com rigor militar, maquinaria avançada e profissionais qualificados para garantir durabilidade e precisão extrema.",
        qual_exec_badge: "Garantia de Execução",
        qual_bullet_1: "Cumprimento rigoroso de prazos e orçamentos",
        qual_bullet_2: "Supervisão técnica contínua e controlo de qualidade",
        qual_bullet_3: "Normas europeias de segurança e durabilidade",
        serv_spec_title: "Especificações & Garantia Técnica",
        toggle_bg_text: "Mudar Fundo Técnico",
        contact_hero_badge: "Canais Diretos de Comunicação",
        trust_office: "Lisboa, Portugal",
        trust_response: "Resposta Rápida < 24h",
        trust_consult: "Consultoria & Orçamentos Técnicos"
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
        proj_condeixa: "Condeixa Project",
        proj_santarem: "Santarém Project",
        filter_all: "All Projects",
        view_all_projects: "View All Projects",
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
        btn_know_more: "Know More",
        s_tag_1: "01. Structure",
        s_tag_2: "02. Elements",
        s_tag_3: "03. Masonry",
        s_tag_4: "04. Formwork",
        s_tag_5: "05. Flooring",
        s_tag_6: "06. Carpentry",
        s_tag_7: "07. Reinforced Concrete",
        s_tag_8: "08. Finishes",
        s_tag_9: "09. Ceramics",
        s_tag_10: "10. Foundations",
        s_tag_11: "11. Steel Reinforcement",
        s_tag_12: "12. Plumbing",
        s_tag_13: "13. Insulation",
        quote_btn: "Request a Quote",
        serv_hero_badge: "Civil Engineering & Construction",
        serv_cap_1: "13 Technical Specialties",
        serv_cap_2: "License No. 120974 – Class 6",
        serv_cap_3: "Own Heavy Machinery",
        serv_sec_tag: "What We Do",
        serv_sec_title: "Our Specialized Services",
        serv_sec_desc: "Each service is executed with military rigor, advanced machinery, and skilled professionals to guarantee extreme durability and precision.",
        qual_exec_badge: "Execution Guarantee",
        qual_bullet_1: "Strict adherence to deadlines and budgets",
        qual_bullet_2: "Continuous technical supervision and quality control",
        qual_bullet_3: "European safety and durability standards",
        serv_spec_title: "Specifications & Technical Guarantee",
        toggle_bg_text: "Switch Technical Background",
        contact_hero_badge: "Direct Communication Channels",
        trust_office: "Lisbon, Portugal",
        trust_response: "Fast Response < 24h",
        trust_consult: "Technical Consultation & Free Estimates"
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
        btn_know_more: "En savoir plus",
        s_tag_1: "01. Structure",
        s_tag_2: "02. Éléments",
        s_tag_3: "03. Maçonnerie",
        s_tag_4: "04. Coffrage",
        s_tag_5: "05. Revêtements",
        s_tag_6: "06. Menuiserie",
        s_tag_7: "07. Béton Armé",
        s_tag_8: "08. Finitions",
        s_tag_9: "09. Céramique",
        s_tag_10: "10. Fondations",
        s_tag_11: "11. Armatures",
        s_tag_12: "12. Plomberie",
        s_tag_13: "13. Isolation",
        quote_btn: "Demander un Devis",
        serv_hero_badge: "Ingénierie & Construction Civile",
        serv_cap_1: "13 Spécialités Techniques",
        serv_cap_2: "Alvará Nº 120974 – Classe 6",
        serv_cap_3: "Équipement Propre",
        serv_sec_tag: "Ce Que Nous Faisons",
        serv_sec_title: "Nos Services Spécialisés",
        serv_sec_desc: "Chaque service est exécuté avec une rigueur absolue, des machines avancées et des professionnels qualifiés.",
        qual_exec_badge: "Garantie d'Exécution",
        qual_bullet_1: "Respect strict des délais et des budgets",
        qual_bullet_2: "Supervision technique continue et contrôle qualité",
        qual_bullet_3: "Normes européennes de sécurité et de durabilité",
        serv_spec_title: "Spécifications & Garantie Technique",
        toggle_bg_text: "Changer l'Arrière-Plan",
        contact_hero_badge: "Canaux de Communication Directs",
        trust_office: "Lisbonne, Portugal",
        trust_response: "Réponse Rapide < 24h",
        trust_consult: "Conseil Technique & Devis Gratuits"
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
        btn_know_more: "Meer weten",
        s_tag_1: "01. Structuur",
        s_tag_2: "02. Elementen",
        s_tag_3: "03. Metselwerk",
        s_tag_4: "04. Bekisting",
        s_tag_5: "05. Vloeren",
        s_tag_6: "06. Timmerwerk",
        s_tag_7: "07. Gewapend Beton",
        s_tag_8: "08. Afwerking",
        s_tag_9: "09. Keramiek",
        s_tag_10: "10. Funderingen",
        s_tag_11: "11. Wapeningsstaal",
        s_tag_12: "12. Loodgieterij",
        s_tag_13: "13. Isolatie",
        quote_btn: "Offerte Aanvragen",
        serv_hero_badge: "Burgerlijke Bouwkunde & Constructie",
        serv_cap_1: "13 Technische Specialiteiten",
        serv_cap_2: "Alvará Nr. 120974 – Klasse 6",
        serv_cap_3: "Eigen Materieel",
        serv_sec_tag: "Wat Wij Doen",
        serv_sec_title: "Onze Gespecialiseerde Diensten",
        serv_sec_desc: "Elke dienst wordt uitgevoerd met uiterste precisie, geavanceerde machines en gekwalificeerde professionals.",
        qual_exec_badge: "Uitvoeringsgarantie",
        qual_bullet_1: "Strikte naleving van deadlines en budgetten",
        qual_bullet_2: "Continue technisch toezicht en kwaliteitscontrole",
        qual_bullet_3: "Europese veiligheids- en duurzaamheidsnormen",
        serv_spec_title: "Specificaties & Technische Garantie",
        toggle_bg_text: "Wissel Achtergrond",
        contact_hero_badge: "Directe Communicatiekanalen",
        trust_office: "Lissabon, Portugal",
        trust_response: "Snelle Reactie < 24u",
        trust_consult: "Technisch Advies & Vrijblijvende Offertes"
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
        btn_know_more: "了解更多",
        s_tag_1: "01. 结构系统",
        s_tag_2: "02. 结构构件",
        s_tag_3: "03. 砌筑工程",
        s_tag_4: "04. 模板工程",
        s_tag_5: "05. 地面工程",
        s_tag_6: "06. 木工结构",
        s_tag_7: "07. 钢筋混凝土",
        s_tag_8: "08. 饰面工程",
        s_tag_9: "09. 陶瓷铺装",
        s_tag_10: "10. 地基挖掘",
        s_tag_11: "11. 钢筋绑扎",
        s_tag_12: "12. 管道系统",
        s_tag_13: "13. 外墙保温",
        quote_btn: "索取报价",
        serv_hero_badge: "土木工程与施工",
        serv_cap_1: "13项技术专长",
        serv_cap_2: "营业执照 120974 – 6级",
        serv_cap_3: "自主重型设备",
        serv_sec_tag: "服务领域",
        serv_sec_title: "专业施工服务",
        serv_sec_desc: "每项服务均采用高精度标准、先进机械与熟练技术团队执行，确保卓越耐久性与工程质量。",
        qual_exec_badge: "施工保障",
        qual_bullet_1: "严格遵守工期与预算",
        qual_bullet_2: "持续技术监督与质量控制",
        qual_bullet_3: "符合欧洲安全与耐久性标准",
        serv_spec_title: "技术规格与工程保障",
        toggle_bg_text: "切换技术背景",
        contact_hero_badge: "直接沟通渠道",
        trust_office: "葡萄牙里斯本",
        trust_response: "24小时内极速响应",
        trust_consult: "免费技术咨询与方案估算"
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
        btn_know_more: "مزید جانیں",
        s_tag_1: "01. ڈھانچہ",
        s_tag_2: "02. عناصر",
        s_tag_3: "03. چنائی",
        s_tag_4: "04. فارم ورک",
        s_tag_5: "05. فرش سازی",
        s_tag_6: "06. بڑھئی کا کام",
        s_tag_7: "07. کنکریٹ ڈھانچہ",
        s_tag_8: "08. فنشنگ",
        s_tag_9: "09. ٹائلز",
        s_tag_10: "10. بنیادیں",
        s_tag_11: "11. اسٹیل ری انفورسمنٹ",
        s_tag_12: "12. پلمبنگ",
        s_tag_13: "13. موصلیت",
        quote_btn: "کوٹیشن طلب کریں",
        serv_hero_badge: "سول انجینئرنگ اور تعمیرات",
        serv_cap_1: "13 تکنیکی مہارتیں",
        serv_cap_2: "لائسنس نمبر 120974 – کلاس 6",
        serv_cap_3: "اپنی جدید مشینری",
        serv_sec_tag: "ہماری خدمات",
        serv_sec_title: "ہماری خصوصی خدمات",
        serv_sec_desc: "ہر سروس جدید مشینری اور ماہر پیشہ ور افراد کے ساتھ انتہائی درستگی کے ساتھ انجام دی جاتی ہے۔",
        qual_exec_badge: "عملدرآمد کی ضمانت",
        qual_bullet_1: "ڈیڈ لائن اور بجٹ کی سخت پابندی",
        qual_bullet_2: "مسلسل تکنیکی نگرانی اور کوالٹی کنٹرول",
        qual_bullet_3: "یورپی حفاظت اور پائیداری کے معیارات",
        serv_spec_title: "تکنیکی وضاحتی نکات اور معیار",
        toggle_bg_text: "تکنیکی پس منظر تبدیل کریں",
        contact_hero_badge: "براہ راست رابطے کے ذرائع",
        trust_office: "لزبن، پرتگال",
        trust_response: "24 گھنٹے میں فوری جواب",
        trust_consult: "تکنیکی مشاورت اور مفت تخمینہ"
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
        } else if (translations['pt'] && translations['pt'][key]) {
            el.innerText = translations['pt'][key];
        } else if (translations['en'] && translations['en'][key]) {
            el.innerText = translations['en'][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        } else if (translations['pt'] && translations['pt'][key]) {
            el.placeholder = translations['pt'][key];
        } else if (translations['en'] && translations['en'][key]) {
            el.placeholder = translations['en'][key];
        }
    });

    // Update select options (dropdowns)
    document.querySelectorAll('select[data-i18n-select]').forEach(select => {
        const keyPrefix = select.getAttribute('data-i18n-select');
        Array.from(select.options).forEach((opt, idx) => {
            if (idx === 0) { // Handle the placeholder/first option
                const pKey = `${keyPrefix}_placeholder`;
                if (translations[lang] && translations[lang][pKey]) opt.text = translations[lang][pKey];
                else if (translations['pt'] && translations['pt'][pKey]) opt.text = translations['pt'][pKey];
                else if (translations['en'] && translations['en'][pKey]) opt.text = translations['en'][pKey];
            } else {
                const optKey = `${keyPrefix}_opt_${idx}`;
                if (translations[lang] && translations[lang][optKey]) opt.text = translations[lang][optKey];
                else if (translations['pt'] && translations['pt'][optKey]) opt.text = translations['pt'][optKey];
                else if (translations['en'] && translations['en'][optKey]) opt.text = translations['en'][optKey];
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
                // If it's a link card (such as on Home page), let the link navigate
                if (card.tagName === 'A' || card.closest('a')) return;
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

    // --- Service Detail Modal Logic ---
    initServiceModal();

});

// --- Services Detailed Data Store ---
const servicesDetailsData = {
    mf: {
        id: "mf",
        tag: { pt: "01. Estrutura", en: "01. Structure", fr: "01. Structure", nl: "01. Structuur", zh: "01. 结构系统", ur: "01. ڈھانچہ" },
        icon: "fas fa-border-all",
        image: "services-image/Metal framing and plasterboard systems.jpeg",
        quoteParam: "Metal Framing",
        title: {
            pt: "Sistemas de Estrutura Metálica e Pladur",
            en: "Metal Framing & Plasterboard Systems",
            fr: "Systèmes d'Ossature Métallique et Plaque de Plâtre",
            nl: "Metalen Frame- en Gipsplaatsystemen",
            zh: "轻钢龙骨与石膏板隔墙系统",
            ur: "میٹل فریم اور پلاسٹر بورڈ سسٹم"
        },
        desc: {
            pt: "Instalação especializada de estruturas metálicas galvanizadas de alta precisão e placas de gesso cartonado (pladur) para divisórias interiores, tetos acústicos e sancas de iluminação. Garantimos rigidez estrutural, isolamento sonoro e térmico com lã mineral, e acabamento liso e pronto para pintura de luxo.",
            en: "Specialized installation of high-precision galvanized steel structures and plasterboard for modern interior partitions, acoustic suspended ceilings, and architectural light coves. We ensure structural stability, thermal & acoustic comfort, and flawless surfaces ready for premium finishes."
        },
        features: {
            pt: [
                "Perfis estruturais galvanizados com certificação europeia",
                "Isolamento acústico e térmico em lã mineral de alta densidade",
                "Tratamento de juntas armado com acabamento de nível Q4",
                "Sistemas corta-fogo (EI30/EI60/EI120) e placas hidrófugas"
            ],
            en: [
                "Certified high-yield galvanized steel structural profiles",
                "High-density mineral wool acoustic and thermal insulation",
                "Reinforced joint taping with Q4 ultra-smooth surface finish",
                "Certified fire-rated (EI30/EI60/EI120) and moisture-resistant boards"
            ]
        }
    },
    c: {
        id: "c",
        tag: { pt: "02. Elementos", en: "02. Elements", fr: "02. Éléments", nl: "02. Elementen", zh: "02. 结构构件", ur: "02. عناصر" },
        icon: "fas fa-monument",
        image: "services-image/Columns, beams, and slabs.jpeg",
        quoteParam: "Concrete",
        title: {
            pt: "Colunas, Vigas e Lajes Estruturais",
            en: "Columns, Beams & Structural Slabs",
            fr: "Poteaux, Poutres et Dalles Structurales",
            nl: "Kolommen, Balken en Constructievloeren",
            zh: "柱梁板受力结构工程",
            ur: "کالم، بیم اور ساختی سلیب"
        },
        desc: {
            pt: "Execução rigorosa de elementos portantes em betão armado para moradias de luxo e edifícios comerciais. A nossa equipa assegura cálculo milimétrico de armaduras, vibração mecânica de alta frequência para eliminação total de vazios e cura assistida para máxima durabilidade antissísmica.",
            en: "Precision engineering and casting of load-bearing reinforced concrete elements for luxury villas and commercial structures. We ensure millimetric steel cover accuracy, high-frequency consolidation to eliminate voids, and controlled curing for long-term seismic resilience."
        },
        features: {
            pt: [
                "Betão certificado em central com classes de resistência C25/30 a C35/45",
                "Conformidade rigorosa com normas de segurança Eurocódigo 2 e 8",
                "Ensaios de compressão e controlo de provetes em laboratório",
                "Cofragens estanques com escoramento pesado homologado"
            ],
            en: [
                "Batch-certified high-strength concrete (C25/30 to C35/45)",
                "Full compliance with Eurocode 2 and 8 seismic safety regulations",
                "Laboratory compressive test cubes and quality verification",
                "Watertight engineered formwork with certified heavy shoring systems"
            ]
        }
    },
    m: {
        id: "m",
        tag: { pt: "03. Alvenarias", en: "03. Masonry", fr: "03. Maçonnerie", nl: "03. Metselwerk", zh: "03. 砌筑工程", ur: "03. چنائی" },
        icon: "fas fa-th-large",
        image: "services-image/Masonry and brickwork.jpeg",
        quoteParam: "Masonry",
        title: {
            pt: "Alvenaria e Construção em Tijolo",
            en: "Masonry & Precision Brickwork",
            fr: "Maçonnerie et Ouvrages en Briques",
            nl: "Metselwerk en Baksteenconstructies",
            zh: "高精度砌块与砖石砌筑",
            ur: "اینٹوں اور چنائی کا اعلیٰ کام"
        },
        desc: {
            pt: "Construção de paredes exteriores e interiores recorrendo a tijolos cerâmicos térmicos e acústicos, blocos de betão e alvenarias técnicas. Executamos com alinhamento a laser 3D, prumo rigoroso e juntas estruturais que garantem isolamento e evitam fissurações.",
            en: "Construction of load-bearing and partition walls using acoustic and thermal ceramic blocks, high-density concrete units, and technical masonry. Erected with 3D laser alignment, plumb accuracy, and reinforced bed joints ensuring thermal efficiency and zero cracks."
        },
        features: {
            pt: [
                "Tijolo cerâmico térmico e acústico de última geração",
                "Nivelamento e esquadria com tecnologia laser de alta precisão",
                "Armaduras de junta Murfor para prevenção de fendas",
                "Argamassas técnicas industriais de elevada aderência"
            ],
            en: [
                "Next-generation thermal and acoustic ceramic clay blocks",
                "3D laser level alignment ensuring flawless plumb and squareness",
                "Bed joint reinforcement with Murfor structural steel mesh",
                "Factory-blended high-adhesion structural masonry mortars"
            ]
        }
    },
    fr: {
        id: "fr",
        tag: { pt: "04. Cofragem", en: "04. Formwork", fr: "04. Coffrage", nl: "04. Bekisting", zh: "04. 模板工程", ur: "04. فارم ورک" },
        icon: "fas fa-ruler-combined",
        image: "services-image/Framework.jpeg",
        quoteParam: "Framework",
        title: {
            pt: "Estrutura e Sistemas de Cofragem",
            en: "Engineered Formwork & Framework",
            fr: "Coffrage et Systèmes d'Échafaudage",
            nl: "Bekisting en Ondersteuningssystemen",
            zh: "模板体系与特种支模",
            ur: "ماہرانہ فارم ورک اور فریم ورک"
        },
        desc: {
            pt: "Soluções avançadas de cofragem modular metálica e madeira para formas geométricas complexas, betão à vista arquitetónico e lajes de grandes vãos. Equipa técnica experiente que garante segurança operacional, estanquidade e superfícies homogéneas.",
            en: "Advanced modular steel and timber formwork solutions for complex architectural geometry, fair-faced concrete, and large-span floor slabs. Experienced technical team ensuring operational safety, watertight forms, and homogeneous surfaces."
        },
        features: {
            pt: [
                "Sistemas modulares rápidos e de elevada precisão dimensional",
                "Contraplacado marítimo de alta densidade para betão aparente liso",
                "Cálculo rigoroso de escoramento para segurança total da equipa",
                "Desmoldantes de base biológica que não mancham o betão"
            ],
            en: [
                "Fast-assembly modular panel systems with high dimensional precision",
                "High-density film-faced marine plywood for smooth architectural concrete",
                "Engineered shoring load calculations guaranteeing full jobsite safety",
                "Eco-friendly release agents preventing staining or chemical degradation"
            ]
        }
    },
    fs: {
        id: "fs",
        tag: { pt: "05. Pavimentos", en: "05. Flooring", fr: "05. Revêtements", nl: "05. Vloeren", zh: "05. 地面找平", ur: "05. فرش سازی" },
        icon: "fas fa-layer-group",
        image: "services-image/Floor Screeding.jpeg",
        quoteParam: "Flooring",
        title: {
            pt: "Regularização de Pisos e Betonilhas",
            en: "Floor Screeding & Subfloor Leveling",
            fr: "Chape et Ragréage de Sols",
            nl: "Dekvloeren en Vloeregalisatie",
            zh: "自流平与地坪找平工程",
            ur: "فرش اسکریڈنگ اور ہمواری"
        },
        desc: {
            pt: "Aplicação de betonilhas tradicionais bombeadas, betonilhas ligeiras térmicas e argamassas autonivelantes com acabamento mecânico afagado a laser. A base ideal para pavimento radiante, microcimento, cerâmica de luxo ou soalho de madeira maciça.",
            en: "Application of traditional pumped screeds, lightweight insulation infill screeds, and laser-guided self-leveling compounds. The optimal structural foundation for underfloor heating loops, epoxy resins, microcement, hardwood, and large-format tiles."
        },
        features: {
            pt: [
                "Nivelamento de alta precisão com cotas a laser milimétricas",
                "Formulações compatíveis com piso radiante hidráulico",
                "Reforço com fibras de polipropileno anti-fissuração",
                "Secagem rápida para redução dos prazos de obra"
            ],
            en: [
                "High-precision laser-guided screed leveling within ±1mm tolerances",
                "Thermal conductivity formulations optimized for underfloor radiant climate systems",
                "Polypropylene fiber reinforcement completely preventing shrinkage cracking",
                "Fast-curing proprietary additives minimizing final floor covering wait times"
            ]
        }
    },
    cr: {
        id: "cr",
        tag: { pt: "06. Carpintaria", en: "06. Carpentry", fr: "06. Menuiserie", nl: "06. Timmerwerk", zh: "06. 定制木工", ur: "06. بڑھئی کا کام" },
        icon: "fas fa-hammer",
        image: "services-image/Carpentry.jpeg",
        quoteParam: "Carpentry",
        title: {
            pt: "Carpintaria Estrutural e de Acabamento",
            en: "Structural & Architectural Carpentry",
            fr: "Menuiserie et Charpente de Précision",
            nl: "Constructieve & Decoratieve Timmerwerken",
            zh: "木结构与高端定制木作",
            ur: "ساختی اور آرائشی لکڑی کا کام"
        },
        desc: {
            pt: "Carpintaria arquitetónica de prestígio: desde coberturas em madeira lamelada, pergolados e decks exteriores até portas pivotantes à face, rodapés embutidos, roupeiros por medida e ripados decorativos com madeiras nobres tratadas.",
            en: "Prestige architectural carpentry: from glulam timber roof structures, pergolas, and exterior decks to flush-to-wall pivoting doors, integrated skirtings, bespoke cabinetry, and acoustic wall cladding in fine hardwoods."
        },
        features: {
            pt: [
                "Madeiras maciças nobres e derivados hidrófugos de alta densidade",
                "Ferragens ocultas topo de gama com fecho amortecido",
                "Tratamento preventivo contra fungos, humidade e xilófagos",
                "Fabrico milimétrico e montagem por mestres carpinteiros"
            ],
            en: [
                "Selected prime hardwoods and high-density moisture-resistant substrates",
                "Concealed high-end architectural hardware with soft-close mechanisms",
                "Certified preservative treatments against fungi, rot, and insects",
                "Millimetric craftsmanship and seamless on-site installation by master carpenters"
            ]
        }
    },
    rc: {
        id: "rc",
        tag: { pt: "07. Betão Armado", en: "07. Reinforced Concrete", fr: "07. Béton Armé", nl: "07. Gewapend Beton", zh: "07. 钢筋混凝土", ur: "07. کنکریٹ ڈھانچہ" },
        icon: "fas fa-shield-alt",
        image: "services-image/Reinforced concrete structures.jpeg",
        quoteParam: "Reinforced Concrete",
        title: {
            pt: "Estruturas Integrais em Betão Armado",
            en: "Full Reinforced Concrete Structures",
            fr: "Structures en Béton Armé Intégrales",
            nl: "Gewapend Beton Constructies",
            zh: "全现浇钢筋混凝土建筑",
            ur: "کنکریٹ کے مضبوط ڈھانچے"
        },
        desc: {
            pt: "Edificação completa da superestrutura estrutural de vivendas de luxo, edifícios multifamiliares e infraestruturas complexas. Gerimos armaduras certificadas, cofragem pesada, bombagem contínua e ensaios de qualidade com alvará classe 6.",
            en: "Turnkey structural construction of prime residential villas, luxury developments, and commercial buildings. We oversee all structural phases: certified rebar fabrication, complex formwork installation, concrete pumping, and technical striking with class 6 licensing."
        },
        features: {
            pt: [
                "Alvará de Construção Oficial Nº 120974 – Classe 6",
                "Capacidade para vãos amplos em consola e arquitetura arrojada",
                "Supervisão e ensaios contínuos por engenheiros civis seniores",
                "Garantia estrutural plurianual de conformidade total"
            ],
            en: [
                "Official Contractor License No. 120974 – Class 6",
                "Engineering capability for wide cantilevered spans and bold designs",
                "Continuous on-site supervision and testing by licensed civil engineers",
                "Comprehensive multi-year structural integrity guarantee"
            ]
        }
    },
    pr: {
        id: "pr",
        tag: { pt: "08. Acabamentos", en: "08. Finishes", fr: "08. Finitions", nl: "08. Afwerking", zh: "08. 抹灰与饰面", ur: "08. فنشنگ اور پلاسٹر" },
        icon: "fas fa-paint-roller",
        image: "services-image/Plastering, rendering, and finishing works.jpeg",
        quoteParam: "Plastering",
        title: {
            pt: "Reboco, Estuque e Acabamentos Finos",
            en: "Plastering, Rendering & Fine Finishes",
            fr: "Plâtrerie, Enduits et Finitions Haut de Gamme",
            nl: "Stucwerk, Pleisterwerk en Luxe Afwerking",
            zh: "高品质内外墙抹灰及涂饰",
            ur: "پلاسٹرنگ، رینڈرنگ اور فائن فنشنگ"
        },
        desc: {
            pt: "Tratamento integral de paredes e tetos: rebocos exteriores projetados hidrófugos, estuque tradicional afagado com acabamento espelhado, barramentos de rede antifissuras e pinturas técnicas com materiais de alto padrão.",
            en: "Complete interior and exterior surface treatment: waterproof spray-applied external renders, traditional mirror-smooth plaster skim coats, crack-arresting fiberglass mesh basecoats, and luxury architectural coatings."
        },
        features: {
            pt: [
                "Reboco projetado com aditivos hidrófugos de alta durabilidade",
                "Estuque fino com nível de acabamento Q4 espelhado",
                "Cantoneiras metálicas em todas as esquinas e arestas",
                "Tintas anti-humidade e anti-fungos de marcas líderes europeias"
            ],
            en: [
                "Machine-applied renders with high-durability water-repellent polymers",
                "Fine interior skimming achieving impeccable Q4 architectural standards",
                "Galvanized corner bead reinforcements on every external edge and reveal",
                "Anti-mildew, washable premium coatings from top European brands"
            ]
        }
    },
    ct: {
        id: "ct",
        tag: { pt: "09. Cerâmica", en: "09. Ceramics", fr: "09. Céramique", nl: "09. Keramiek", zh: "09. 瓷砖与石材铺贴", ur: "09. ٹائلز اور پتھر کا کام" },
        icon: "fas fa-th",
        image: "services-image/Ceramic tiling.jpeg",
        quoteParam: "Ceramic",
        title: {
            pt: "Ladrilhagem e Cerâmicas de Grande Formato",
            en: "Ceramic Tiling & Large Format Slabs",
            fr: "Carrelage et Pose de Grès Cérame Grand Format",
            nl: "Tegelwerken en Grootformaat Keramiek",
            zh: "大板瓷砖与石材高精铺装",
            ur: "ٹائلوں اور ماربل کی تنصیب"
        },
        desc: {
            pt: "Assentamento de cerâmicas retificadas, peças de grande formato (XL), mosaicos e pedras naturais para pavimentos e casas de banho de luxo. Cortes em meia-esquadria a 45° perfeitos, cunhas de nivelamento e impermeabilização prévia certificada.",
            en: "Precision installation of rectified porcelain tiles, large-format slabs, mosaic, and natural stone for luxury floors and bathrooms. Features perfect 45° mitered joints, wedge leveling systems, and certified sub-tile waterproofing."
        },
        features: {
            pt: [
                "Colas flexíveis C2TE S1/S2 adaptadas a pavimentos e fachadas",
                "Impermeabilização prévia em áreas húmidas com tela e tela líquida",
                "Cortes a disco de água refrigerado sem lascas",
                "Juntas mínimas milimétricas e juntas de dilatação técnicas"
            ],
            en: [
                "High-flexibility C2TE S1/S2 adhesives suitable for floors and facades",
                "Certified bonded waterproof tanking membranes beneath all wet areas",
                "Diamond wet-blade precision cutting ensuring chip-free pristine edges",
                "Perimeter and expansion joints calculated for zero tile debonding"
            ]
        }
    },
    f: {
        id: "f",
        tag: { pt: "10. Fundações", en: "10. Foundations", fr: "10. Fondations", nl: "10. Funderingen", zh: "10. 基础与土方工程", ur: "10. بنیادیں اور کھدائی" },
        icon: "fas fa-mountain",
        image: "services-image/Foundations and excavations.jpeg",
        quoteParam: "Foundations",
        title: {
            pt: "Fundações Especiais e Escavações",
            en: "Foundations & Heavy Earthmoving",
            fr: "Fondations Spéciales et Terrassement",
            nl: "Funderingen en Grondverzet",
            zh: "地基基础与特种土石方",
            ur: "بنیادیں اور ہیوی مشینری کا کام"
        },
        desc: {
            pt: "Movimentação de terras, decapagem, escavações em rocha e terra, drenagens subterrâneas e execução de sapatas, estacas e lajes de ensoleiramento geral. Contamos com maquinaria pesada própria que assegura velocidade e independência operacional.",
            en: "Site preparation, deep excavations, rock breaking, underground drainage, and construction of spread footings, pile caps, and reinforced raft slabs. Operated with our own heavy equipment fleet for fast execution and complete operational independence."
        },
        features: {
            pt: [
                "Maquinaria pesada própria: escavadoras, giratórias e camiões",
                "Topografia e implantação a laser de elevada precisão",
                "Drenagem perimetral com brita, tubo perfurado e geotêxtil",
                "Impermeabilização técnica de muros e contenções enterradas"
            ],
            en: [
                "In-house heavy machinery fleet: tracked excavators, rollers, and trucks",
                "Laser-guided topographical staking and precision depth grading",
                "Engineered perimeter drainage with gravel, slotted pipe, and geotextile",
                "Tanking waterproofing on retaining earth walls with approved membranes"
            ]
        }
    },
    sr: {
        id: "sr",
        tag: { pt: "11. Armaduras", en: "11. Steel Reinforcement", fr: "11. Armatures", nl: "11. Wapeningsstaal", zh: "11. 钢筋加工与绑扎", ur: "11. اسٹیل ری انفورسمنٹ" },
        icon: "fas fa-bars",
        image: "services-image/Steel Reinforcement.jpeg",
        quoteParam: "Steel Reinforcement",
        title: {
            pt: "Armadura de Aço e Ferrogem Estrutural",
            en: "Steel Reinforcement & Rebar Assembly",
            fr: "Ferraillage et Armatures Métalliques",
            nl: "Wapeningsstaal en Vlechtwerk",
            zh: "特种建筑钢筋工程",
            ur: "اسٹیل ری انفورسمنٹ کا کام"
        },
        desc: {
            pt: "Corte, quinagem e amarração de aço nervurado A400 e A500 NR para fundações, pilares, vigas e lajes fungiformes. Rigor absoluto nos comprimentos de traspasse, amarrações de nós e espaçadores para recobrimento protetor do aço.",
            en: "Cutting, bending, and assembly of certified high-yield steel bars (A400/A500 NR), retaining wall cages, continuous beams, and flat slabs. Full adherence to lap splices, double-tied nodes, and certified spacers for protective concrete cover."
        },
        features: {
            pt: [
                "Aço certificado com certificado de conformidade siderúrgica",
                "Amarração de alta rigidez executada por ferreiros especialistas",
                "Espaçadores homologados garantindo o recobrimento do projeto",
                "Inspeção e verificação rigorosa antes de cada betonagem"
            ],
            en: [
                "High-ductility certified steel with full mill test traceability",
                "Assembled by specialized steel fixers with double-tied critical junctions",
                "Certified heavy-duty spacers guaranteeing code-compliant concrete covers",
                "Pre-pour engineering inspections before any concrete placement"
            ]
        }
    },
    pl: {
        id: "pl",
        tag: { pt: "12. Canalização", en: "12. Plumbing", fr: "12. Plomberie", nl: "12. Loodgieterij", zh: "12. 给排水与机电管道", ur: "12. پلمبنگ اور پائپ لائن سسٹم" },
        icon: "fas fa-faucet",
        image: "services-image/Plumbing.jpeg",
        quoteParam: "Plumbing",
        title: {
            pt: "Canalização, Redes Hidráulicas e Pichelaria",
            en: "Plumbing, Hydraulic Networks & Drainage",
            fr: "Plomberie, Réseaux Hydrauliques et Évacuation",
            nl: "Loodgieterswerk, Water- en Afvoersystemen",
            zh: "给排水系统与全套管道工程",
            ur: "پلمبنگ، واٹر سپلائی اور نکاسی کا نظام"
        },
        desc: {
            pt: "Execução completa de sistemas hidráulicos residenciais e comerciais: abastecimento de água fria e quente sanitária em multicamada ou PPR termossoldado, esgotos insonorizados, drenagens pluviais e instalação de louças e torneiras de design.",
            en: "Turnkey plumbing and hydraulic systems for luxury residences and commercial projects: hot and cold water distribution in pre-insulated multilayer or PPR piping, soundproof acoustic drainage stacks, and precision installation of designer sanitary fixtures."
        },
        features: {
            pt: [
                "Tubagens multicamada com uniões mecânicas prensadas à prova de fuga",
                "Redes de esgoto insonorizadas que eliminam ruídos no interior",
                "Testes de pressão hidrostática certificados a 10 bar",
                "Sistemas de recirculação e corte setorial para máxima comodidade"
            ],
            en: [
                "Soundproof acoustic drainage pipework eliminating building noise",
                "Press-fitted multilayer piping with leak-proof mechanical crimping",
                "10-bar certified hydrostatic pressure and flow testing on all networks",
                "Continuous hot water recirculation loops for instantaneous luxury comfort"
            ]
        }
    },
    et: {
        id: "et",
        tag: { pt: "13. Isolamento", en: "13. Insulation", fr: "13. Isolation", nl: "13. Isolatie", zh: "13. 外墙外保温(ETICS)", ur: "13. ایکسٹیریئر انسولیشن سسٹم" },
        icon: "fas fa-shield-virus",
        image: "services-image/Exterior Insulation System.jpeg",
        quoteParam: "Exterior Insulation",
        title: {
            pt: "Sistema de Isolamento Térmico Exterior (ETICS / Capoto)",
            en: "Exterior Thermal Insulation Composite System (ETICS / Capoto)",
            fr: "Système d'Isolation Thermique par l'Extérieur (ITE / ETICS)",
            nl: "Buitengevelisolatie Systeem (ETICS)",
            zh: "外墙外保温复合系统(ETICS / Capoto)",
            ur: "ایکسٹیریئر تھرمل انسولیشن کمپوزٹ سسٹم (ETICS)"
        },
        desc: {
            pt: "Aplicação certificada de sistemas ETICS (Capoto) com placas de EPS grafitado ou lã de rocha de alta densidade, rede de fibra de vidro antialcalina e revestimento final acrílico ou de silicone impermeável e respirável. Elimina pontes térmicas e garante eficiência energética A+.",
            en: "Certified installation of Exterior Thermal Insulation Composite Systems (ETICS / Capoto) utilizing graphite EPS or high-density mineral wool slabs, heavy fiberglass mesh reinforcement, and breathable silicone topcoats. Eliminates thermal bridges and secures Class A+ energy rating."
        },
        features: {
            pt: [
                "Eficiência energética classe A+ e poupança na climatização",
                "Placas de EPS grafitado ou lã de rocha incombustível A1",
                "Barramento armado duplo com rede de fibra de vidro de 160g/m²",
                "Revestimento hidrorrepelente com proteção UV e cores duradouras"
            ],
            en: [
                "Class A+ thermal building envelope efficiency eliminating thermal bridges",
                "Graphite-enhanced EPS or non-combustible Euroclass A1 rock wool slabs",
                "Double base coat embedded with 160g/m² heavy alkali-resistant mesh",
                "Hydrophobic, self-cleaning UV-resistant silicone decorative topcoat"
            ]
        }
    }
};

// --- Service Detail Modal Initialization ---
function initServiceModal() {
    // Auto-inject modal markup if not in DOM
    if (!document.getElementById('service-modal')) {
        const modalHTML = `
        <div id="service-modal" class="service-modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">
            <div class="service-modal-dialog">
                <button class="service-modal-close" id="service-modal-close" aria-label="Close modal">
                    <i class="fas fa-times"></i>
                </button>
                <div class="service-modal-image-col">
                    <img id="service-modal-img" src="" alt="Service Photo">
                </div>
                <div class="service-modal-content-col">
                    <div>
                        <div class="service-modal-badge" id="service-modal-badge">
                            <i class="fas fa-tools"></i> <span>01. Estrutura</span>
                        </div>
                        <h2 class="service-modal-title" id="service-modal-title">Service Title</h2>
                        <p class="service-modal-desc" id="service-modal-desc">Service Description</p>
                        <div class="service-modal-features-title" data-i18n="serv_spec_title">Especificações & Garantia Técnica</div>
                        <ul class="service-modal-features" id="service-modal-features">
                            <!-- Dynamic list items -->
                        </ul>
                    </div>
                    <div class="service-modal-actions">
                        <a href="contact.html" class="service-modal-btn-primary" id="service-modal-quote-btn">
                            <i class="fas fa-paper-plane"></i> <span data-i18n="quote_btn">Pedir Orçamento</span>
                        </a>
                        <a href="https://wa.me/351918445810" target="_blank" rel="noopener noreferrer" class="service-modal-btn-wa">
                            <i class="fab fa-whatsapp"></i> <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modal = document.getElementById('service-modal');
    const modalCloseBtn = document.getElementById('service-modal-close');

    const openServiceModal = (card) => {
        const serviceKey = card.getAttribute('data-service') || '';
        const currentLang = sessionStorage.getItem('exo_lang') || 'pt';
        const data = servicesDetailsData[serviceKey];

        const modalImg = document.getElementById('service-modal-img');
        const modalBadge = document.getElementById('service-modal-badge');
        const modalTitle = document.getElementById('service-modal-title');
        const modalDesc = document.getElementById('service-modal-desc');
        const modalFeatures = document.getElementById('service-modal-features');
        const modalQuoteBtn = document.getElementById('service-modal-quote-btn');

        const cardImg = card.querySelector('img');
        const cardTitle = card.querySelector('h3');
        const cardDesc = card.querySelector('p');
        const cardBadge = card.querySelector('.service-badge');

        // Image
        if (modalImg) {
            modalImg.src = data ? data.image : (cardImg ? cardImg.src : '');
            modalImg.alt = data && data.title[currentLang] ? data.title[currentLang] : (cardTitle ? cardTitle.innerText : '');
        }

        // Badge
        if (modalBadge) {
            const iconClass = data ? data.icon : (cardBadge && cardBadge.querySelector('i') ? cardBadge.querySelector('i').className : 'fas fa-tools');
            const tagText = data ? (data.tag[currentLang] || data.tag['pt'] || data.tag['en']) : (cardBadge ? cardBadge.innerText.trim() : '');
            modalBadge.innerHTML = `<i class="${iconClass}"></i> <span>${tagText}</span>`;
        }

        // Title
        if (modalTitle) {
            modalTitle.innerText = data ? (data.title[currentLang] || data.title['en'] || data.title['pt']) : (cardTitle ? cardTitle.innerText : '');
        }

        // Description
        if (modalDesc) {
            modalDesc.innerText = data ? (data.desc[currentLang] || data.desc['pt'] || data.desc['en']) : (cardDesc ? cardDesc.innerText : '');
        }

        // Features list
        if (modalFeatures) {
            modalFeatures.innerHTML = '';
            const featuresList = data ? (data.features[currentLang] || data.features['pt'] || data.features['en']) : [];
            if (featuresList && featuresList.length > 0) {
                featuresList.forEach(feat => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-check-circle"></i> <span>${feat}</span>`;
                    modalFeatures.appendChild(li);
                });
            } else {
                // Fallback default high-end standards
                const defaultBullets = (currentLang === 'en') ? [
                    "Certified execution by specialized personnel",
                    "High-strength materials with European certification",
                    "Continuous on-site supervision and precision control",
                    "Full structural multi-year guarantee"
                ] : [
                    "Execução certificada por profissionais qualificados",
                    "Materiais de alta resistência com certificação europeia",
                    "Supervisão contínua em obra e controlo de precisão",
                    "Garantia estrutural plurianual de conformidade total"
                ];
                defaultBullets.forEach(feat => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-check-circle"></i> <span>${feat}</span>`;
                    modalFeatures.appendChild(li);
                });
            }
        }

        // Quote Button URL & Text
        if (modalQuoteBtn) {
            const serviceParam = data ? data.quoteParam : (cardTitle ? encodeURIComponent(cardTitle.innerText) : '');
            modalQuoteBtn.href = `contact.html?service=${encodeURIComponent(serviceParam)}`;
            const quoteText = (translations[currentLang] && translations[currentLang].quote_btn) ? translations[currentLang].quote_btn : 'Pedir Orçamento';
            modalQuoteBtn.innerHTML = `<i class="fas fa-paper-plane"></i> <span>${quoteText}</span>`;
        }

        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeServiceModal = () => {
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
        }
    };

    // Delegate click on service cards anywhere on page
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.service-card');
        if (card) {
            e.preventDefault();
            e.stopPropagation();
            openServiceModal(card);
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeServiceModal();
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeServiceModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeServiceModal();
        }
    });

    // Technical Background Image Switcher (for Services Hero)
    const heroBgEl = document.getElementById('services-hero-bg');
    const heroBgToggle = document.getElementById('hero-bg-toggle');
    if (heroBgEl && heroBgToggle) {
        const bgOptions = [
            {
                url: 'services-image/Framework.jpeg',
                pos: 'center 35%',
                label: 'Estrutura & Cofragem EXO'
            },
            {
                url: 'condeixa/10.jpeg',
                pos: 'center 45%',
                label: 'Maquinaria & Bombagem Condeixa'
            },
            {
                url: 'services-image/Reinforced concrete structures.jpeg',
                pos: 'center 40%',
                label: 'Betão Armado & Vista Mar'
            },
            {
                url: 'condeixa/12.jpeg',
                pos: 'center 50%',
                label: 'Armaduras & Escavação Condeixa'
            }
        ];
        
        let currentIdx = parseInt(sessionStorage.getItem('exo_hero_bg_idx') || '0', 10);
        if (isNaN(currentIdx) || currentIdx >= bgOptions.length) currentIdx = 0;

        const applyBg = (idx) => {
            const opt = bgOptions[idx];
            heroBgEl.style.backgroundImage = `linear-gradient(135deg, rgba(24, 32, 61, 0.90) 0%, rgba(24, 32, 61, 0.72) 55%, rgba(166, 83, 48, 0.38) 100%), url('${opt.url}')`;
            heroBgEl.style.backgroundPosition = opt.pos;
            sessionStorage.setItem('exo_hero_bg_idx', idx.toString());
        };

        // Apply saved preference if any
        if (currentIdx !== 0) applyBg(currentIdx);

        heroBgToggle.addEventListener('click', () => {
            currentIdx = (currentIdx + 1) % bgOptions.length;
            applyBg(currentIdx);
        });
    }
}


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
        id: 'condeixa', name: 'Projeto de Condeixa', images: [
            'condeixa/4.jpeg', 'condeixa/3.jpeg', 'condeixa/5.jpeg', 'condeixa/6.jpeg', 'condeixa/7.jpeg',
            'condeixa/8.jpeg', 'condeixa/9.jpeg', 'condeixa/10.jpeg', 'condeixa/11.jpeg', 'condeixa/12.jpeg',
            'condeixa/13.jpeg', 'condeixa/14.jpeg', 'condeixa/15.jpeg', 'condeixa/16.jpeg', 'condeixa/17.jpeg',
            'condeixa/18.jpeg', 'condeixa/20.jpeg', 'condeixa/21.jpeg', 'condeixa/22.jpeg', 'condeixa/23.jpeg',
            'condeixa/24.jpeg', 'condeixa/25.jpeg', 'condeixa/26.jpeg', 'condeixa/27.jpeg', 'condeixa/28.jpeg',
            'condeixa/29.jpeg', 'condeixa/30.jpeg', 'condeixa/31.jpeg', 'condeixa/32.jpeg', 'condeixa/33.jpeg',
            'condeixa/34.jpeg', 'condeixa/35.jpeg', 'condeixa/36.jpeg'
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
