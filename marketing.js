// 한국어 설문 질문 데이터
const questionsKO = [
    {
        question: "마케팅의 기본 개념과 원칙을 이해하고 있다.",
        options: [
            { text: "마케팅 프로젝트를 직접 기획하고 실행해본 경험이 있다", score: 4 },
            { text: "마케팅 개념을 업무에 적용해본 경험이 있다", score: 3 },
            { text: "마케팅 기본 개념에 대해 들어본 적이 있다", score: 2 },
            { text: "마케팅 개념에 대한 지식이 거의 없다", score: 1 }
        ]
    },
    {
        question: "목표 고객(타겟 시장)을 정의하고 세분화하는 방법을 알고 있다.",
        options: [
            { text: "고객 세분화를 통해 성공적인 마케팅 전략을 수립한 경험이 있다", score: 4 },
            { text: "고객 세분화 방법을 알고 있으며 간단히 적용해 본 적이 있다", score: 3 },
            { text: "타겟팅의 중요성은 알지만 직접 해본 적은 없다", score: 2 },
            { text: "고객 세분화 개념을 잘 모른다", score: 1 }
        ]
    },
    {
        question: "마케팅 믹스(4P: 제품, 가격, 장소, 촉진)의 개념을 이해하고 있다.",
        options: [
            { text: "마케팅 믹스를 활용하여 전략을 개발하고 실행한 경험이 있다", score: 4 },
            { text: "마케팅 믹스의 개념을 이해하고 분석에 활용해본 적이 있다", score: 3 },
            { text: "마케팅 믹스라는 용어를 들어봤지만 깊이 이해하지 못한다", score: 2 },
            { text: "마케팅 믹스에 대해 들어본 적이 없다", score: 1 }
        ]
    },
    {
        question: "브랜딩과 브랜드 가치의 중요성을 이해하고 있다.",
        options: [
            { text: "브랜드 전략을 개발하고 실행한 경험이 있다", score: 4 },
            { text: "브랜딩 개념을 이해하고 브랜드 분석을 해본 적이 있다", score: 3 },
            { text: "브랜딩의 중요성은 알지만 실무에 적용해본 적은 없다", score: 2 },
            { text: "브랜딩 개념에 대한 이해가 부족하다", score: 1 }
        ]
    },
    {
        question: "디지털 마케팅 채널(소셜 미디어, 이메일, 검색 등)의 특성과 활용법을 알고 있다.",
        options: [
            { text: "여러 디지털 채널을 활용한 통합 마케팅 캠페인을 운영한 경험이 있다", score: 4 },
            { text: "몇 가지 디지털 마케팅 채널을 활용해본 경험이 있다", score: 3 },
            { text: "디지털 마케팅 채널에 대해 기본적으로 알고 있다", score: 2 },
            { text: "디지털 마케팅 채널에 대한 지식이 거의 없다", score: 1 }
        ]
    },
    {
        question: "시장 조사와 데이터 분석의 중요성을 이해하고 있다.",
        options: [
            { text: "시장 조사를 설계하고 데이터를 분석하여 의사결정에 활용한 경험이 있다", score: 4 },
            { text: "기본적인 시장 조사 방법을 알고 간단한 분석을 해본 적이 있다", score: 3 },
            { text: "시장 조사의 중요성은 알지만 실제로 수행해본 적은 없다", score: 2 },
            { text: "시장 조사와 데이터 분석에 대한 지식이 거의 없다", score: 1 }
        ]
    },
    {
        question: "소비자 행동 원리와 구매 의사결정 과정을 이해하고 있다.",
        options: [
            { text: "소비자 행동 분석을 마케팅 전략에 성공적으로 적용한 경험이 있다", score: 4 },
            { text: "소비자 행동 원리를 이해하고 기본적인 분석을 해본 적이 있다", score: 3 },
            { text: "소비자 행동에 대한 기본 개념만 알고 있다", score: 2 },
            { text: "소비자 행동 원리에 대한 지식이 거의 없다", score: 1 }
        ]
    },
    {
        question: "마케팅 KPI(핵심성과지표)와 ROI(투자수익률) 측정 방법을 알고 있다.",
        options: [
            { text: "마케팅 KPI를 설정하고 ROI를 측정하여 성과를 개선한 경험이 있다", score: 4 },
            { text: "기본적인 마케팅 KPI를 이해하고 측정해본 적이 있다", score: 3 },
            { text: "KPI와 ROI의 개념은 알지만 실제로 측정해본 적은 없다", score: 2 },
            { text: "마케팅 KPI와 ROI에 대한 지식이 거의 없다", score: 1 }
        ]
    },
    {
        question: "콘텐츠 마케팅의 원리와 효과적인 콘텐츠 전략을 이해하고 있다.",
        options: [
            { text: "콘텐츠 마케팅 전략을 수립하고 성공적으로 실행한 경험이 있다", score: 4 },
            { text: "콘텐츠 마케팅을 이해하고 간단한 콘텐츠 제작에 참여한 적이 있다", score: 3 },
            { text: "콘텐츠 마케팅의 기본 개념만 알고 있다", score: 2 },
            { text: "콘텐츠 마케팅에 대한 지식이 거의 없다", score: 1 }
        ]
    },
    {
        question: "마케팅 트렌드와, 새로운 마케팅 기술 및 플랫폼에 대한 지식을 가지고 있다.",
        options: [
            { text: "최신 마케팅 트렌드를 지속적으로 학습하고 실무에 적용하고 있다", score: 4 },
            { text: "주요 마케팅 트렌드를 알고 있으며 일부 새로운 기술을 시도해본 적이 있다", score: 3 },
            { text: "몇 가지 마케팅 트렌드에 대해 들어본 적이 있다", score: 2 },
            { text: "최신 마케팅 트렌드에 대한 지식이 거의 없다", score: 1 }
        ]
    }
];

// 영어 설문 질문 데이터
const questionsEN = [
    {
        question: "I understand the basic concepts and principles of marketing.",
        options: [
            { text: "I have experience planning and executing marketing projects", score: 4 },
            { text: "I have applied marketing concepts in my work", score: 3 },
            { text: "I have heard about basic marketing concepts", score: 2 },
            { text: "I have little knowledge of marketing concepts", score: 1 }
        ]
    },
    {
        question: "I know how to define and segment target markets.",
        options: [
            { text: "I have developed successful marketing strategies through customer segmentation", score: 4 },
            { text: "I understand customer segmentation methods and have applied them", score: 3 },
            { text: "I know the importance of targeting but have never done it", score: 2 },
            { text: "I don't understand customer segmentation concepts", score: 1 }
        ]
    },
    {
        question: "I understand the marketing mix concept (4Ps: Product, Price, Place, Promotion).",
        options: [
            { text: "I have developed and implemented strategies using the marketing mix", score: 4 },
            { text: "I understand the marketing mix concept and have used it for analysis", score: 3 },
            { text: "I've heard of the marketing mix but don't understand it deeply", score: 2 },
            { text: "I've never heard of the marketing mix", score: 1 }
        ]
    },
    {
        question: "I understand the importance of branding and brand value.",
        options: [
            { text: "I have developed and implemented brand strategies", score: 4 },
            { text: "I understand branding concepts and have analyzed brands", score: 3 },
            { text: "I know the importance of branding but haven't applied it", score: 2 },
            { text: "I have limited understanding of branding concepts", score: 1 }
        ]
    },
    {
        question: "I know the characteristics and uses of digital marketing channels (social media, email, search, etc.).",
        options: [
            { text: "I have managed integrated marketing campaigns across multiple digital channels", score: 4 },
            { text: "I have experience using several digital marketing channels", score: 3 },
            { text: "I know the basics of digital marketing channels", score: 2 },
            { text: "I have little knowledge of digital marketing channels", score: 1 }
        ]
    },
    {
        question: "I understand the importance of market research and data analysis.",
        options: [
            { text: "I have designed market research and used data analysis for decision making", score: 4 },
            { text: "I know basic market research methods and have done simple analyses", score: 3 },
            { text: "I understand the importance of market research but haven't done it", score: 2 },
            { text: "I have little knowledge of market research and data analysis", score: 1 }
        ]
    },
    {
        question: "I understand consumer behavior principles and the purchase decision process.",
        options: [
            { text: "I have successfully applied consumer behavior analysis to marketing strategies", score: 4 },
            { text: "I understand consumer behavior principles and have done basic analysis", score: 3 },
            { text: "I only know basic concepts of consumer behavior", score: 2 },
            { text: "I have little knowledge of consumer behavior principles", score: 1 }
        ]
    },
    {
        question: "I know how to measure marketing KPIs (Key Performance Indicators) and ROI (Return on Investment).",
        options: [
            { text: "I have set marketing KPIs and measured ROI to improve performance", score: 4 },
            { text: "I understand basic marketing KPIs and have measured them", score: 3 },
            { text: "I know the concepts of KPIs and ROI but haven't measured them", score: 2 },
            { text: "I have little knowledge of marketing KPIs and ROI", score: 1 }
        ]
    },
    {
        question: "I understand content marketing principles and effective content strategies.",
        options: [
            { text: "I have developed and successfully implemented content marketing strategies", score: 4 },
            { text: "I understand content marketing and have participated in content creation", score: 3 },
            { text: "I only know basic concepts of content marketing", score: 2 },
            { text: "I have little knowledge of content marketing", score: 1 }
        ]
    },
    {
        question: "I have knowledge of marketing trends and new marketing technologies and platforms.",
        options: [
            { text: "I continuously learn about latest marketing trends and apply them", score: 4 },
            { text: "I know major marketing trends and have tried some new technologies", score: 3 },
            { text: "I have heard about some marketing trends", score: 2 },
            { text: "I have little knowledge of current marketing trends", score: 1 }
        ]
    }
];

// 스페인어 설문 질문 데이터
const questionsES = [
    {
        question: "Entiendo los conceptos y principios básicos del marketing.",
        options: [
            { text: "Tengo experiencia planificando y ejecutando proyectos de marketing", score: 4 },
            { text: "He aplicado conceptos de marketing en mi trabajo", score: 3 },
            { text: "He oído hablar sobre conceptos básicos de marketing", score: 2 },
            { text: "Tengo poco conocimiento de conceptos de marketing", score: 1 }
        ]
    },
    {
        question: "Sé cómo definir y segmentar mercados objetivo.",
        options: [
            { text: "He desarrollado estrategias de marketing exitosas mediante segmentación de clientes", score: 4 },
            { text: "Entiendo métodos de segmentación de clientes y los he aplicado", score: 3 },
            { text: "Conozco la importancia de la segmentación pero nunca la he realizado", score: 2 },
            { text: "No entiendo los conceptos de segmentación de clientes", score: 1 }
        ]
    },
    {
        question: "Entiendo el concepto de marketing mix (4Ps: Producto, Precio, Plaza, Promoción).",
        options: [
            { text: "He desarrollado e implementado estrategias usando el marketing mix", score: 4 },
            { text: "Entiendo el concepto de marketing mix y lo he usado para análisis", score: 3 },
            { text: "He oído del marketing mix pero no lo entiendo profundamente", score: 2 },
            { text: "Nunca he oído hablar del marketing mix", score: 1 }
        ]
    },
    {
        question: "Entiendo la importancia del branding y el valor de marca.",
        options: [
            { text: "He desarrollado e implementado estrategias de marca", score: 4 },
            { text: "Entiendo conceptos de branding y he analizado marcas", score: 3 },
            { text: "Conozco la importancia del branding pero no lo he aplicado", score: 2 },
            { text: "Tengo una comprensión limitada de los conceptos de branding", score: 1 }
        ]
    },
    {
        question: "Conozco las características y usos de los canales de marketing digital (redes sociales, email, búsqueda, etc.).",
        options: [
            { text: "He gestionado campañas de marketing integradas en múltiples canales digitales", score: 4 },
            { text: "Tengo experiencia usando varios canales de marketing digital", score: 3 },
            { text: "Conozco lo básico de los canales de marketing digital", score: 2 },
            { text: "Tengo poco conocimiento de canales de marketing digital", score: 1 }
        ]
    },
    {
        question: "Entiendo la importancia de la investigación de mercado y el análisis de datos.",
        options: [
            { text: "He diseñado investigaciones de mercado y usado análisis de datos para tomar decisiones", score: 4 },
            { text: "Conozco métodos básicos de investigación de mercado y he realizado análisis simples", score: 3 },
            { text: "Entiendo la importancia de la investigación de mercado pero no la he realizado", score: 2 },
            { text: "Tengo poco conocimiento de investigación de mercado y análisis de datos", score: 1 }
        ]
    },
    {
        question: "Entiendo los principios de comportamiento del consumidor y el proceso de decisión de compra.",
        options: [
            { text: "He aplicado con éxito análisis de comportamiento del consumidor a estrategias de marketing", score: 4 },
            { text: "Entiendo principios de comportamiento del consumidor y he realizado análisis básicos", score: 3 },
            { text: "Solo conozco conceptos básicos de comportamiento del consumidor", score: 2 },
            { text: "Tengo poco conocimiento de principios de comportamiento del consumidor", score: 1 }
        ]
    },
    {
        question: "Sé cómo medir KPIs de marketing (Indicadores Clave de Rendimiento) y ROI (Retorno de Inversión).",
        options: [
            { text: "He establecido KPIs de marketing y medido ROI para mejorar el rendimiento", score: 4 },
            { text: "Entiendo KPIs básicos de marketing y los he medido", score: 3 },
            { text: "Conozco los conceptos de KPIs y ROI pero no los he medido", score: 2 },
            { text: "Tengo poco conocimiento de KPIs de marketing y ROI", score: 1 }
        ]
    },
    {
        question: "Entiendo los principios de marketing de contenidos y estrategias de contenido efectivas.",
        options: [
            { text: "He desarrollado e implementado con éxito estrategias de marketing de contenidos", score: 4 },
            { text: "Entiendo el marketing de contenidos y he participado en creación de contenido", score: 3 },
            { text: "Solo conozco conceptos básicos de marketing de contenidos", score: 2 },
            { text: "Tengo poco conocimiento de marketing de contenidos", score: 1 }
        ]
    },
    {
        question: "Tengo conocimiento de tendencias de marketing y nuevas tecnologías y plataformas de marketing.",
        options: [
            { text: "Aprendo continuamente sobre las últimas tendencias de marketing y las aplico", score: 4 },
            { text: "Conozco las principales tendencias de marketing y he probado algunas nuevas tecnologías", score: 3 },
            { text: "He oído hablar de algunas tendencias de marketing", score: 2 },
            { text: "Tengo poco conocimiento de tendencias actuales de marketing", score: 1 }
        ]
    }
];

// 한국어 결과 메시지 데이터
const resultMessagesKO = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 마케팅의 기본 개념에 대한 이해가 필요합니다. 마케팅 기초 개념과 용어를 학습하는 것이 좋습니다.",
        detailedAnalysis: "현재는 마케팅의 기본 개념에 대한 이해가 필요한 단계입니다. 마케팅 기초, 주요 용어, 기본 원칙 등을 학습하면 마케팅 활동에 대한 이해도가 크게 향상될 것입니다.",
        strengths: [
            "기본적인 마케팅 개념 인지",
            "마케팅에 대한 관심과 학습 의지"
        ],
        weaknesses: [
            "마케팅 전략 수립 경험 부족",
            "마케팅 도구 활용 능력 제한",
            "데이터 기반 의사결정 능력 미흡"
        ],
        recommendations: [
            { title: "마케팅 기초 이론", type: "온라인 강좌", link: "https://www.coursera.org/learn/marketing-fundamentals" },
            { title: "처음 시작하는 마케팅", type: "도서", link: "https://www.yes24.com/Product/Goods/102387413" },
            { title: "마케팅 기초 용어 정리", type: "유튜브 채널", link: "https://www.youtube.com/c/MarketingBasics" }
        ],
        careerPaths: [
            "마케팅 어시스턴트",
            "소셜 미디어 어시스턴트",
            "마케팅 인턴"
        ]
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 기본적인 마케팅 개념을 이해하고 있지만, 실무 적용 능력을 향상시킬 필요가 있습니다. 디지털 마케팅 도구와 분석 방법을 학습해보세요.",
        detailedAnalysis: "마케팅의 기본 개념을 이해하고 있지만 실무 적용 능력을 향상시킬 필요가 있습니다. 디지털 마케팅 도구 활용, 기본적인 마케팅 분석, 소셜 미디어 마케팅 등에 대한 학습이 도움이 될 것입니다.",
        strengths: [
            "기본적인 마케팅 개념 이해",
            "소셜 미디어 플랫폼 활용 가능",
            "기초적인 콘텐츠 제작 능력"
        ],
        weaknesses: [
            "마케팅 성과 측정 및 분석 능력 부족",
            "통합 마케팅 전략 수립 경험 미흡",
            "고급 마케팅 도구 활용 제한"
        ],
        recommendations: [
            { title: "실전 디지털 마케팅", type: "온라인 강좌", link: "https://www.udemy.com/course/complete-digital-marketing-course" },
            { title: "마케팅 분석 기초", type: "도서", link: "https://www.yes24.com/Product/Goods/90175118" },
            { title: "소셜 미디어 마케팅 전략", type: "유튜브 채널", link: "https://www.youtube.com/c/SocialMediaExaminer" }
        ],
        careerPaths: [
            "마케팅 코디네이터",
            "소셜 미디어 스페셜리스트",
            "콘텐츠 마케터",
            "이메일 마케팅 담당자"
        ]
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 효과적인 마케팅 전략을 수립하고 실행할 수 있는 능력을 갖추고 있습니다. 데이터 분석과 고객 인사이트 도출 능력을 더욱 발전시키세요.",
        detailedAnalysis: "효과적인 마케팅 전략을 수립하고 실행할 수 있는 능력을 갖추고 있습니다. 마케팅 채널 관리, 캠페인 기획 및 실행, 기본적인 성과 측정 등이 가능하지만, 데이터 분석과 고객 인사이트 도출 능력을 더욱 발전시킬 필요가 있습니다.",
        strengths: [
            "마케팅 캠페인 기획 및 실행 능력",
            "다양한 마케팅 채널 활용 능력",
            "기본적인 마케팅 성과 측정 가능",
            "콘텐츠 마케팅 전략 수립 능력"
        ],
        weaknesses: [
            "고급 데이터 분석 기술 활용 제한",
            "고객 여정 맵핑 및 페르소나 개발 심화 필요",
            "통합 마케팅 커뮤니케이션 전략 보완 필요"
        ],
        recommendations: [
            { title: "마케팅 데이터 분석 마스터", type: "온라인 강좌", link: "https://www.coursera.org/learn/marketing-analytics" },
            { title: "고객 중심 마케팅 전략", type: "도서", link: "https://www.yes24.com/Product/Goods/96999515" },
            { title: "마케팅 전략 및 분석", type: "유튜브 채널", link: "https://www.youtube.com/c/MarketingAnalytics" }
        ],
        careerPaths: [
            "마케팅 매니저",
            "디지털 마케팅 스페셜리스트",
            "브랜드 매니저",
            "마케팅 애널리스트"
        ]
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 전문적인 마케팅 역량을 보유하고 있습니다. 최신 마케팅 트렌드를 습득하고 통합적인 마케팅 전략을 개발할 수 있는 능력을 더욱 발전시키세요.",
        detailedAnalysis: "전문적인 마케팅 역량을 보유하고 있습니다. 마케팅 전략 수립, 데이터 기반 의사결정, 다양한 마케팅 채널 통합 관리 등이 가능하며, 최신 마케팅 트렌드를 습득하고 통합적인 마케팅 전략을 개발할 수 있는 역량을 갖추고 있습니다.",
        strengths: [
            "종합적인 마케팅 전략 수립 능력",
            "마케팅 ROI 측정 및 최적화 능력",
            "다채널 마케팅 캠페인 관리 역량",
            "데이터 기반 의사결정 능력"
        ],
        weaknesses: [
            "신기술(AI, VR 등) 활용 마케팅 영역 발전 가능",
            "국제 마케팅 전략 경험 확장 필요",
            "리더십 및 팀 관리 역량 개발 필요"
        ],
        recommendations: [
            { title: "디지털 트랜스포메이션과 마케팅", type: "온라인 강좌", link: "https://www.coursera.org/learn/digital-transformation-marketing" },
            { title: "마케팅 리더십", type: "도서", link: "https://www.yes24.com/Product/Goods/103254585" },
            { title: "최신 마케팅 트렌드 및 전략", type: "유튜브 채널", link: "https://www.youtube.com/c/MarketingTrends" }
        ],
        careerPaths: [
            "마케팅 디렉터",
            "마케팅 전략 컨설턴트",
            "수석 마케팅 매니저",
            "CMO(Chief Marketing Officer)"
        ]
    }
];

// 영어 결과 메시지 데이터
const resultMessagesEN = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Beginner Level: You need to understand the basic concepts of marketing. It is recommended to learn marketing fundamentals and terminology.",
        detailedAnalysis: "You are at the stage of understanding basic marketing concepts. Learning marketing fundamentals, key terminology, and basic principles will greatly enhance your understanding of marketing activities.",
        strengths: [
            "Basic awareness of marketing concepts",
            "Interest and willingness to learn about marketing"
        ],
        weaknesses: [
            "Limited experience in developing marketing strategies",
            "Limited ability to use marketing tools",
            "Insufficient skills in data-driven decision making"
        ],
        recommendations: [
            { title: "Marketing Fundamentals", type: "Online Course", link: "https://www.coursera.org/learn/marketing-fundamentals" },
            { title: "Marketing 101", type: "Book", link: "https://www.amazon.com/Marketing-101-Ann-Bastianelli/dp/1118295366" },
            { title: "Marketing Basics", type: "YouTube Channel", link: "https://www.youtube.com/c/MarketingBasics" }
        ],
        careerPaths: [
            "Marketing Assistant",
            "Social Media Assistant",
            "Marketing Intern"
        ]
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Basic Level: You understand the basic concepts of marketing, but need to improve your practical application skills. Try to learn digital marketing tools and analysis methods.",
        detailedAnalysis: "You understand the basic concepts of marketing but need to improve your practical application skills. Learning about digital marketing tools, basic marketing analysis, and social media marketing will be helpful.",
        strengths: [
            "Understanding of basic marketing concepts",
            "Ability to use social media platforms",
            "Basic content creation skills"
        ],
        weaknesses: [
            "Limited ability to measure and analyze marketing performance",
            "Limited experience in developing integrated marketing strategies",
            "Limited use of advanced marketing tools"
        ],
        recommendations: [
            { title: "Practical Digital Marketing", type: "Online Course", link: "https://www.udemy.com/course/complete-digital-marketing-course" },
            { title: "Marketing Analytics Basics", type: "Book", link: "https://www.amazon.com/Marketing-Analytics-Strategic-Techniques-Science/dp/1118373434" },
            { title: "Social Media Marketing Strategy", type: "YouTube Channel", link: "https://www.youtube.com/c/SocialMediaExaminer" }
        ],
        careerPaths: [
            "Marketing Coordinator",
            "Social Media Specialist",
            "Content Marketer",
            "Email Marketing Specialist"
        ]
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Intermediate Level: You have the ability to develop and execute effective marketing strategies. Further develop your data analysis and customer insight skills.",
        detailedAnalysis: "You have the ability to develop and execute effective marketing strategies. You can manage marketing channels, plan and execute campaigns, and perform basic performance measurement, but you need to further develop your data analysis and customer insight skills.",
        strengths: [
            "Ability to plan and execute marketing campaigns",
            "Ability to use various marketing channels",
            "Basic marketing performance measurement",
            "Content marketing strategy development"
        ],
        weaknesses: [
            "Limited use of advanced data analysis techniques",
            "Need to further develop customer journey mapping and persona development",
            "Need to improve integrated marketing communication strategies"
        ],
        recommendations: [
            { title: "Marketing Data Analysis Master", type: "Online Course", link: "https://www.coursera.org/learn/marketing-analytics" },
            { title: "Customer-Centric Marketing Strategy", type: "Book", link: "https://www.amazon.com/Customer-Centricity-Focus-Right-Customers/dp/1613630166" },
            { title: "Marketing Strategy and Analysis", type: "YouTube Channel", link: "https://www.youtube.com/c/MarketingAnalytics" }
        ],
        careerPaths: [
            "Marketing Manager",
            "Digital Marketing Specialist",
            "Brand Manager",
            "Marketing Analyst"
        ]
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Advanced Level: You have professional marketing capabilities. Further develop your ability to acquire the latest marketing trends and develop integrated marketing strategies.",
        detailedAnalysis: "You have professional marketing capabilities. You can develop marketing strategies, make data-driven decisions, and manage various marketing channels. You have the ability to acquire the latest marketing trends and develop integrated marketing strategies.",
        strengths: [
            "Comprehensive marketing strategy development",
            "Marketing ROI measurement and optimization",
            "Multi-channel marketing campaign management",
            "Data-driven decision making"
        ],
        weaknesses: [
            "Potential to develop marketing with new technologies (AI, VR, etc.)",
            "Need to expand international marketing strategy experience",
            "Need to develop leadership and team management skills"
        ],
        recommendations: [
            { title: "Digital Transformation and Marketing", type: "Online Course", link: "https://www.coursera.org/learn/digital-transformation-marketing" },
            { title: "Marketing Leadership", type: "Book", link: "https://www.amazon.com/Kotler-Marketing-Create-Dominate-Markets/dp/1476777934" },
            { title: "Latest Marketing Trends and Strategies", type: "YouTube Channel", link: "https://www.youtube.com/c/MarketingTrends" }
        ],
        careerPaths: [
            "Marketing Director",
            "Marketing Strategy Consultant",
            "Senior Marketing Manager",
            "Chief Marketing Officer (CMO)"
        ]
    }
];

// 스페인어 결과 메시지 데이터
const resultMessagesES = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Nivel Principiante: Necesita comprender los conceptos básicos de marketing. Se recomienda aprender fundamentos y terminología de marketing.",
        detailedAnalysis: "Está en la etapa de comprender los conceptos básicos de marketing. Aprender fundamentos de marketing, terminología clave y principios básicos mejorará enormemente su comprensión de las actividades de marketing.",
        strengths: [
            "Conocimiento básico de conceptos de marketing",
            "Interés y disposición para aprender sobre marketing"
        ],
        weaknesses: [
            "Experiencia limitada en desarrollo de estrategias de marketing",
            "Capacidad limitada para usar herramientas de marketing",
            "Habilidades insuficientes en toma de decisiones basadas en datos"
        ],
        recommendations: [
            { title: "Fundamentos de Marketing", type: "Curso en línea", link: "https://www.coursera.org/learn/marketing-fundamentals" },
            { title: "Marketing 101", type: "Libro", link: "https://www.amazon.es/Marketing-4-0-Philip-Kotler/dp/8416894841" },
            { title: "Conceptos Básicos de Marketing", type: "Canal de YouTube", link: "https://www.youtube.com/c/MarketingBasicsEspanol" }
        ],
        careerPaths: [
            "Asistente de Marketing",
            "Asistente de Redes Sociales",
            "Practicante de Marketing"
        ]
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Nivel Básico: Comprende los conceptos básicos de marketing, pero necesita mejorar sus habilidades de aplicación práctica. Intente aprender herramientas de marketing digital y métodos de análisis.",
        detailedAnalysis: "Comprende los conceptos básicos de marketing pero necesita mejorar sus habilidades de aplicación práctica. Aprender sobre herramientas de marketing digital, análisis básico de marketing y marketing en redes sociales será útil.",
        strengths: [
            "Comprensión de conceptos básicos de marketing",
            "Capacidad para usar plataformas de redes sociales",
            "Habilidades básicas de creación de contenido"
        ],
        weaknesses: [
            "Capacidad limitada para medir y analizar el rendimiento de marketing",
            "Experiencia limitada en desarrollo de estrategias integradas de marketing",
            "Uso limitado de herramientas avanzadas de marketing"
        ],
        recommendations: [
            { title: "Marketing Digital Práctico", type: "Curso en línea", link: "https://www.udemy.com/course/complete-digital-marketing-course" },
            { title: "Fundamentos de Analítica de Marketing", type: "Libro", link: "https://www.amazon.es/Analítica-Web-medir-triunfar-edición/dp/8441540330" },
            { title: "Estrategia de Marketing en Redes Sociales", type: "Canal de YouTube", link: "https://www.youtube.com/c/SocialMediaExaminerEspanol" }
        ],
        careerPaths: [
            "Coordinador de Marketing",
            "Especialista en Redes Sociales",
            "Creador de Contenido",
            "Especialista en Email Marketing"
        ]
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Nivel Intermedio: Tiene la capacidad de desarrollar y ejecutar estrategias efectivas de marketing. Desarrolle aún más sus habilidades de análisis de datos e insights de clientes.",
        detailedAnalysis: "Tiene la capacidad de desarrollar y ejecutar estrategias efectivas de marketing. Puede gestionar canales de marketing, planificar y ejecutar campañas, y realizar mediciones básicas de rendimiento, pero necesita desarrollar aún más sus habilidades de análisis de datos e insights de clientes.",
        strengths: [
            "Capacidad para planificar y ejecutar campañas de marketing",
            "Capacidad para utilizar varios canales de marketing",
            "Medición básica del rendimiento de marketing",
            "Desarrollo de estrategia de marketing de contenidos"
        ],
        weaknesses: [
            "Uso limitado de técnicas avanzadas de análisis de datos",
            "Necesidad de desarrollar más el mapeo del recorrido del cliente y desarrollo de personas",
            "Necesidad de mejorar estrategias integradas de comunicación de marketing"
        ],
        recommendations: [
            { title: "Master en Análisis de Datos de Marketing", type: "Curso en línea", link: "https://www.coursera.org/learn/marketing-analytics" },
            { title: "Estrategia de Marketing Centrada en el Cliente", type: "Libro", link: "https://www.amazon.es/Experiencia-cliente-Ignacio-Visiers-Lecanda/dp/8416125066" },
            { title: "Estrategia y Análisis de Marketing", type: "Canal de YouTube", link: "https://www.youtube.com/c/MarketingAnalyticsEspanol" }
        ],
        careerPaths: [
            "Gerente de Marketing",
            "Especialista en Marketing Digital",
            "Gerente de Marca",
            "Analista de Marketing"
        ]
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Nivel Avanzado: Tiene capacidades profesionales de marketing. Desarrolle aún más su capacidad para adquirir las últimas tendencias de marketing y desarrollar estrategias integradas de marketing.",
        detailedAnalysis: "Tiene capacidades profesionales de marketing. Puede desarrollar estrategias de marketing, tomar decisiones basadas en datos y gestionar varios canales de marketing. Tiene la capacidad de adquirir las últimas tendencias de marketing y desarrollar estrategias integradas de marketing.",
        strengths: [
            "Desarrollo integral de estrategias de marketing",
            "Medición y optimización de ROI de marketing",
            "Gestión de campañas de marketing multicanal",
            "Toma de decisiones basada en datos"
        ],
        weaknesses: [
            "Potencial para desarrollar marketing con nuevas tecnologías (IA, RV, etc.)",
            "Necesidad de ampliar experiencia en estrategia de marketing internacional",
            "Necesidad de desarrollar habilidades de liderazgo y gestión de equipos"
        ],
        recommendations: [
            { title: "Transformación Digital y Marketing", type: "Curso en línea", link: "https://www.coursera.org/learn/digital-transformation-marketing" },
            { title: "Liderazgo en Marketing", type: "Libro", link: "https://www.amazon.es/Marketing-4-0-Philip-Kotler/dp/8416894841" },
            { title: "Últimas Tendencias y Estrategias de Marketing", type: "Canal de YouTube", link: "https://www.youtube.com/c/MarketingTrendsEspanol" }
        ],
        careerPaths: [
            "Director de Marketing",
            "Consultor de Estrategia de Marketing",
            "Gerente Senior de Marketing",
            "Director de Marketing (CMO)"
        ]
    }
];

// 현재 사용 중인 질문과 결과 메시지
let questions = questionsKO;
let resultMessages = resultMessagesKO;

// 전역 변수
let currentQuestionIndex = 0;
let answers = [];

// DOM 요소
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const surveyContainer = document.getElementById('survey');
const resultContainer = document.getElementById('result');
const scoreDisplay = document.getElementById('score-display');
const resultMessageElement = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const backToMainBtn = document.getElementById('back-to-main-btn');

// 언어 변경 함수
function updateSurveyLanguage(lang) {
    if (lang === 'en') {
        questions = questionsEN;
        resultMessages = resultMessagesEN;
    } else if (lang === 'es') {
        questions = questionsES;
        resultMessages = resultMessagesES;
    } else {
        questions = questionsKO;
        resultMessages = resultMessagesKO;
    }
    
    // 현재 보고 있는 질문 업데이트
    if (surveyContainer.style.display !== 'none') {
        showQuestion(currentQuestionIndex);
    }
    
    // 결과 창이 표시 중이라면 결과도 업데이트
    if (resultContainer.style.display !== 'none') {
        // 결과 재표시 (언어 변경 반영)
        showResult();
    }
}

// 초기화
function init() {
    currentQuestionIndex = 0;
    answers = new Array(questions.length).fill(null);
    showQuestion(currentQuestionIndex);
    surveyContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    
    // URL에서 언어 파라미터 확인 및 적용
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang) {
        updateSurveyLanguage(lang);
    } else {
        // 저장된 언어 설정 불러오기
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            updateSurveyLanguage(savedLanguage);
        }
    }
}

// 질문 표시
function showQuestion(index) {
    const question = questions[index];
    
    let optionsHTML = '';
    question.options.forEach((option, i) => {
        const isSelected = answers[index] === i;
        optionsHTML += `
            <div class="option ${isSelected ? 'selected' : ''}" data-index="${i}">
                ${option.text}
            </div>
        `;
    });

    questionContainer.innerHTML = `
        <div class="question">
            <div class="question-text">${index + 1}. ${question.question}</div>
            <div class="options">${optionsHTML}</div>
        </div>
    `;

    // 옵션 클릭 이벤트 추가
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => {
            const optionIndex = parseInt(option.getAttribute('data-index'));
            answers[currentQuestionIndex] = optionIndex;
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    // 버튼 상태 업데이트
    updateButtonsState();
}

// 버튼 상태 업데이트
function updateButtonsState() {
    prevBtn.disabled = currentQuestionIndex === 0;
    
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    nextBtn.style.display = isLastQuestion ? 'none' : 'block';
    submitBtn.style.display = isLastQuestion ? 'block' : 'none';
}

// 이전 질문으로 이동
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// 다음 질문으로 이동
function goToNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// 점수 계산
function calculateScore() {
    let totalScore = 0;
    
    answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            totalScore += questions[questionIndex].options[answerIndex].score;
        }
    });
    
    return totalScore;
}

// 결과 메시지 가져오기
function getResultMessage(score) {
    for (const result of resultMessages) {
        if (score >= result.minScore && score <= result.maxScore) {
            return result.message;
        }
    }
    return "결과를 분석할 수 없습니다.";
}

// 결과 표시
function showResult() {
    const score = calculateScore();
    const lang = localStorage.getItem('selectedLanguage') || 'ko';
    
    // 현재 언어에 맞는 결과 메시지 객체 찾기
    let resultData;
    for (const result of resultMessages) {
        if (score >= result.minScore && score <= result.maxScore) {
            resultData = result;
            break;
        }
    }
    
    // 점수 표시
    scoreDisplay.textContent = `${lang === 'ko' ? '총점: ' : lang === 'en' ? 'Total Score: ' : 'Puntuación Total: '}${score}`;
    
    // 상세 결과 분석 HTML 구성
    let detailedHTML = `
        <div class="result-summary">
            <p class="result-message">${resultData.message}</p>
            <p class="detailed-analysis">${resultData.detailedAnalysis}</p>
        </div>
        
        <div class="result-details">
            <div class="strengths-weaknesses">
                <div class="strengths">
                    <h2>${lang === 'ko' ? '강점' : lang === 'en' ? 'Strengths' : 'Fortalezas'}</h2>
                    <ul>
                        ${resultData.strengths.map(strength => `<li>${strength}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="weaknesses">
                    <h2>${lang === 'ko' ? '개선 필요 영역' : lang === 'en' ? 'Areas for Improvement' : 'Áreas de Mejora'}</h2>
                    <ul>
                        ${resultData.weaknesses.map(weakness => `<li>${weakness}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="recommendations">
                <h2>${lang === 'ko' ? '학습 추천' : lang === 'en' ? 'Learning Recommendations' : 'Recomendaciones de Aprendizaje'}</h2>
                <ul class="recommended-resources">
                    ${resultData.recommendations.map(rec => `
                        <li>
                            <a href="${rec.link}" target="_blank">
                                ${rec.title} <span class="resource-type">(${rec.type})</span>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="career-paths">
                <h2>${lang === 'ko' ? '관련 직무' : lang === 'en' ? 'Related Career Paths' : 'Trayectorias Profesionales Relacionadas'}</h2>
                <ul>
                    ${resultData.careerPaths.map(path => `<li>${path}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // 결과 메시지 업데이트
    resultMessageElement.innerHTML = detailedHTML;
    
    surveyContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

// 메인 페이지로 이동
function goToMainPage() {
    const lang = localStorage.getItem('selectedLanguage') || 'ko';
    window.location.href = `index.html?lang=${lang}`;
}

// 이벤트 리스너
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
submitBtn.addEventListener('click', showResult);
restartBtn.addEventListener('click', init);
backToMainBtn.addEventListener('click', goToMainPage);

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    init();
    
    // 이벤트 리스너 등록
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', showResult);
    restartBtn.addEventListener('click', init);
    backToMainBtn.addEventListener('click', goToMainPage);
    
    // 저장된 언어 설정 불러오기
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        updateSurveyLanguage(savedLanguage);
    }
}); 