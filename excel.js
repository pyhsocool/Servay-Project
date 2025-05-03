// 한국어 설문 질문 데이터
const questionsKO = [
    {
        question: "데이터 필터 기능을 사용할 수 있나요?",
        options: [
            { text: "고급 필터 포함 자유롭게 사용", score: 4 },
            { text: "기본 필터만 사용 가능", score: 3 },
            { text: "본 적 있지만 사용 못함", score: 2 },
            { text: "전혀 모름", score: 1 }
        ]
    },
    {
        question: "셀 참조 방식(상대/절대/혼합) 차이를 알고 있나요?",
        options: [
            { text: "완벽히 이해, 상황에 맞게 사용", score: 4 },
            { text: "의미만 대략적으로 앎", score: 3 },
            { text: "들어본적 있음", score: 2 },
            { text: "전혀 모름", score: 1 }
        ]
    },
    {
        question: "피벗 테이블을 활용할 수 있나요?",
        options: [
            { text: "고급 피벗 테이블 사용 가능", score: 4 },
            { text: "기본 피벗 테이블만 사용", score: 3 },
            { text: "개념만 알고 있음", score: 2 },
            { text: "전혀 모름", score: 1 }
        ]
    },
    {
        question: "조건부 서식 기능을 사용할 수 있나요?",
        options: [
            { text: "복잡한 규칙 포함 자유롭게 활용", score: 4 },
            { text: "간단한 조건부 서식만 활용", score: 3 },
            { text: "기능을 봤지만 사용 경험 없음", score: 2 },
            { text: "전혀 모름", score: 1 }
        ]
    },
    {
        question: "함수 사용 능력은 어느 정도인가요?",
        options: [
            { text: "복잡한 중첩 함수도 작성 가능", score: 4 },
            { text: "기본 함수(SUM, AVERAGE 등) 사용", score: 3 },
            { text: "함수 의미만 알고 직접 작성 어려움", score: 2 },
            { text: "전혀 사용 못함", score: 1 }
        ]
    },
    {
        question: "매크로(VBA)를 활용할 수 있나요?",
        options: [
            { text: "직접 코드 작성 가능", score: 4 },
            { text: "녹화 기능으로 간단한 매크로 생성", score: 3 },
            { text: "매크로 개념만 알고 있음", score: 2 },
            { text: "전혀 모름", score: 1 }
        ]
    },
    {
        question: "데이터 유효성 검사 기능을 활용할 수 있나요?",
        options: [
            { text: "복잡한 규칙 설정 가능", score: 4 },
            { text: "간단한 유효성 검사만 설정 가능", score: 3 },
            { text: "기능을 들어봤지만 사용 못함", score: 2 },
            { text: "전혀 모름", score: 1 }
        ]
    },
    {
        question: "차트 작성 능력은 어느 정도인가요?",
        options: [
            { text: "복잡한 사용자 지정 차트 생성 가능", score: 4 },
            { text: "기본 차트 유형 활용 가능", score: 3 },
            { text: "간단한 차트만 만들 수 있음", score: 2 },
            { text: "차트 작성 못함", score: 1 }
        ]
    },
    {
        question: "데이터 분석 도구(분석 도구 모음)를 활용할 수 있나요?",
        options: [
            { text: "다양한 분석 도구 능숙하게 활용", score: 4 },
            { text: "기본적인 분석 도구만 사용", score: 3 },
            { text: "도구의 존재는 알지만 사용 못함", score: 2 },
            { text: "전혀 모름", score: 1 }
        ]
    },
    {
        question: "엑셀 파일 간 데이터 연결 및 통합을 할 수 있나요?",
        options: [
            { text: "복잡한 외부 데이터 연결 가능", score: 4 },
            { text: "간단한 파일 간 연결만 가능", score: 3 },
            { text: "방법은 알지만 실제로 해본 적 없음", score: 2 },
            { text: "전혀 모름", score: 1 }
        ]
    }
];

// 영어 설문 질문 데이터
const questionsEN = [
    {
        question: "Can you use the data filter function?",
        options: [
            { text: "Can freely use including advanced filters", score: 4 },
            { text: "Can only use basic filters", score: 3 },
            { text: "Have seen it but can't use it", score: 2 },
            { text: "Don't know at all", score: 1 }
        ]
    },
    {
        question: "Do you understand the differences between cell reference methods (relative/absolute/mixed)?",
        options: [
            { text: "Perfectly understand and use appropriately", score: 4 },
            { text: "Roughly know the meaning", score: 3 },
            { text: "Have heard of it", score: 2 },
            { text: "Don't know at all", score: 1 }
        ]
    },
    {
        question: "Can you utilize pivot tables?",
        options: [
            { text: "Can use advanced pivot tables", score: 4 },
            { text: "Can only use basic pivot tables", score: 3 },
            { text: "Only know the concept", score: 2 },
            { text: "Don't know at all", score: 1 }
        ]
    },
    {
        question: "Can you use conditional formatting?",
        options: [
            { text: "Can freely use including complex rules", score: 4 },
            { text: "Can only use simple conditional formatting", score: 3 },
            { text: "Have seen the feature but never used it", score: 2 },
            { text: "Don't know at all", score: 1 }
        ]
    },
    {
        question: "How proficient are you with Excel functions?",
        options: [
            { text: "Can write complex nested functions", score: 4 },
            { text: "Can use basic functions (SUM, AVERAGE, etc.)", score: 3 },
            { text: "Only know what functions mean but can't write them", score: 2 },
            { text: "Can't use at all", score: 1 }
        ]
    },
    {
        question: "Can you utilize macros (VBA)?",
        options: [
            { text: "Can write code directly", score: 4 },
            { text: "Can create simple macros using the recorder", score: 3 },
            { text: "Only know the concept of macros", score: 2 },
            { text: "Don't know at all", score: 1 }
        ]
    },
    {
        question: "Can you use data validation features?",
        options: [
            { text: "Can set complex rules", score: 4 },
            { text: "Can only set simple validations", score: 3 },
            { text: "Have heard of the feature but can't use it", score: 2 },
            { text: "Don't know at all", score: 1 }
        ]
    },
    {
        question: "How would you rate your chart creation skills?",
        options: [
            { text: "Can create complex custom charts", score: 4 },
            { text: "Can use basic chart types", score: 3 },
            { text: "Can only create simple charts", score: 2 },
            { text: "Can't create charts", score: 1 }
        ]
    },
    {
        question: "Can you use data analysis tools (Analysis ToolPak)?",
        options: [
            { text: "Can skillfully use various analysis tools", score: 4 },
            { text: "Can only use basic analysis tools", score: 3 },
            { text: "Know they exist but can't use them", score: 2 },
            { text: "Don't know at all", score: 1 }
        ]
    },
    {
        question: "Can you connect and consolidate data between Excel files?",
        options: [
            { text: "Can connect complex external data", score: 4 },
            { text: "Can only connect simple files", score: 3 },
            { text: "Know how but never done it in practice", score: 2 },
            { text: "Don't know at all", score: 1 }
        ]
    }
];

// 스페인어 설문 질문 데이터
const questionsES = [
    {
        question: "¿Puede utilizar la función de filtro de datos?",
        options: [
            { text: "Puedo usar libremente incluso filtros avanzados", score: 4 },
            { text: "Solo puedo usar filtros básicos", score: 3 },
            { text: "Lo he visto pero no puedo usarlo", score: 2 },
            { text: "No lo conozco en absoluto", score: 1 }
        ]
    },
    {
        question: "¿Entiende las diferencias entre los métodos de referencia de celda (relativa/absoluta/mixta)?",
        options: [
            { text: "Entiendo perfectamente y uso apropiadamente", score: 4 },
            { text: "Conozco aproximadamente el significado", score: 3 },
            { text: "He oído hablar de ello", score: 2 },
            { text: "No lo conozco en absoluto", score: 1 }
        ]
    },
    {
        question: "¿Puede utilizar tablas dinámicas?",
        options: [
            { text: "Puedo usar tablas dinámicas avanzadas", score: 4 },
            { text: "Solo puedo usar tablas dinámicas básicas", score: 3 },
            { text: "Solo conozco el concepto", score: 2 },
            { text: "No lo conozco en absoluto", score: 1 }
        ]
    },
    {
        question: "¿Puede usar el formato condicional?",
        options: [
            { text: "Puedo usar libremente incluso reglas complejas", score: 4 },
            { text: "Solo puedo usar formato condicional simple", score: 3 },
            { text: "He visto la función pero nunca la he usado", score: 2 },
            { text: "No lo conozco en absoluto", score: 1 }
        ]
    },
    {
        question: "¿Qué nivel de conocimiento tiene con las funciones de Excel?",
        options: [
            { text: "Puedo escribir funciones anidadas complejas", score: 4 },
            { text: "Puedo usar funciones básicas (SUMA, PROMEDIO, etc.)", score: 3 },
            { text: "Solo sé lo que significan las funciones pero no puedo escribirlas", score: 2 },
            { text: "No puedo usarlas en absoluto", score: 1 }
        ]
    },
    {
        question: "¿Puede utilizar macros (VBA)?",
        options: [
            { text: "Puedo escribir código directamente", score: 4 },
            { text: "Puedo crear macros simples usando la grabadora", score: 3 },
            { text: "Solo conozco el concepto de macros", score: 2 },
            { text: "No lo conozco en absoluto", score: 1 }
        ]
    },
    {
        question: "¿Puede usar funciones de validación de datos?",
        options: [
            { text: "Puedo establecer reglas complejas", score: 4 },
            { text: "Solo puedo establecer validaciones simples", score: 3 },
            { text: "He oído de la función pero no puedo usarla", score: 2 },
            { text: "No lo conozco en absoluto", score: 1 }
        ]
    },
    {
        question: "¿Cómo calificaría sus habilidades de creación de gráficos?",
        options: [
            { text: "Puedo crear gráficos personalizados complejos", score: 4 },
            { text: "Puedo usar tipos de gráficos básicos", score: 3 },
            { text: "Solo puedo crear gráficos simples", score: 2 },
            { text: "No puedo crear gráficos", score: 1 }
        ]
    },
    {
        question: "¿Puede usar herramientas de análisis de datos?",
        options: [
            { text: "Puedo usar hábilmente varias herramientas de análisis", score: 4 },
            { text: "Solo puedo usar herramientas de análisis básicas", score: 3 },
            { text: "Sé que existen pero no puedo usarlas", score: 2 },
            { text: "No lo conozco en absoluto", score: 1 }
        ]
    },
    {
        question: "¿Puede conectar y consolidar datos entre archivos de Excel?",
        options: [
            { text: "Puedo conectar datos externos complejos", score: 4 },
            { text: "Solo puedo conectar archivos simples", score: 3 },
            { text: "Sé cómo hacerlo pero nunca lo he hecho en la práctica", score: 2 },
            { text: "No lo conozco en absoluto", score: 1 }
        ]
    }
];

// 한국어 결과 메시지 데이터
const resultMessagesKO = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 엑셀의 기본 기능에 대한 이해가 필요합니다. 먼저 기본 기능을 배우는 것이 좋습니다.",
        detailedAnalysis: "현재는 엑셀의 기초 기능을 익히는 단계입니다. 데이터 입력, 기본 서식 지정, 간단한 수식 작성 등의 능력이 향상되면 업무 효율성이 크게 증가할 것입니다.",
        strengths: [
            "기본적인 데이터 입력 및 편집 가능",
            "간단한 서식 변경 수행 가능"
        ],
        weaknesses: [
            "복잡한 수식 및 함수 사용에 어려움",
            "데이터 분석 도구 활용에 제한",
            "피벗 테이블 및 고급 기능 미숙"
        ],
        recommendations: [
            { title: "엑셀 기초 마스터하기", type: "온라인 강좌", link: "https://www.inflearn.com/course/excel-완벽-기초" },
            { title: "Excel 2021 For Dummies", type: "도서", link: "https://www.yes24.com/Product/Goods/110214593" },
            { title: "엑셀 기초 기능 총정리", type: "유튜브 채널", link: "https://www.youtube.com/c/ExcelTutorial" }
        ],
        careerPaths: [
            "데이터 입력 사무직",
            "행정 보조",
            "일반 사무직"
        ]
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기본 수준: 엑셀의 기본 기능을 이해하고 있지만, 고급 기능 학습이 필요합니다. 필터, 수식 등 자주 사용되는 기능에 대해 더 배워보세요.",
        detailedAnalysis: "엑셀의 기본 기능을 이해하고 활용하는 단계입니다. 필터, 정렬, 기본 함수 등을 활용할 수 있으나, 업무 효율성을 더욱 높이기 위해서는 고급 기능에 대한 이해가 필요합니다.",
        strengths: [
            "기본 함수(SUM, AVERAGE 등) 활용 가능",
            "간단한 데이터 정렬 및 필터링 수행 가능",
            "기본적인 차트 작성 가능"
        ],
        weaknesses: [
            "복잡한 데이터 분석에 제한",
            "피벗 테이블 활용 미숙",
            "고급 함수 및 매크로 사용에 어려움"
        ],
        recommendations: [
            { title: "엑셀 중급 완성", type: "온라인 강좌", link: "https://www.inflearn.com/course/excel-중급-실무" },
            { title: "회사에서 통하는 실무 엑셀", type: "도서", link: "https://www.yes24.com/Product/Goods/58789254" },
            { title: "엑셀 함수 마스터하기", type: "유튜브 채널", link: "https://www.youtube.com/c/ExcelMaster" }
        ],
        careerPaths: [
            "일반 사무직",
            "영업 지원",
            "마케팅 보조 업무",
            "재무/회계 보조"
        ]
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 엑셀을 능숙하게 다룰 수 있습니다. 피벗 테이블, 고급 함수 등을 배워 스킬을 향상시키세요.",
        detailedAnalysis: "엑셀의 다양한 기능을 활용할 수 있는 단계입니다. 기본적인 데이터 분석, 피벗 테이블 활용, 차트 작성 등이 가능하지만, 복잡한 데이터 처리와 자동화에 대한 이해를 더 높일 필요가 있습니다.",
        strengths: [
            "중급 수준의 함수 활용 가능",
            "기본적인 피벗 테이블 생성 및 활용",
            "다양한 차트 작성 및 데이터 시각화 가능",
            "조건부 서식 활용 가능"
        ],
        weaknesses: [
            "고급 데이터 분석 기법 활용 제한",
            "매크로와 VBA 활용 미숙",
            "복잡한 데이터 모델링에 어려움"
        ],
        recommendations: [
            { title: "엑셀 고급 데이터 분석", type: "온라인 강좌", link: "https://www.inflearn.com/course/excel-data-analysis" },
            { title: "엑셀 2021 파워 유저를 위한 실무 활용", type: "도서", link: "https://www.yes24.com/Product/Goods/104866842" },
            { title: "피벗 테이블 완전 정복", type: "유튜브 채널", link: "https://www.youtube.com/c/PivotTableMaster" }
        ],
        careerPaths: [
            "데이터 분석가 주니어",
            "마케팅 담당자",
            "영업 관리자",
            "재무/회계 담당자"
        ]
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 엑셀을 전문적으로 활용할 수 있는 수준입니다. 매크로, 고급 데이터 분석 등 더 심화된 기능을 익히면 전문가 수준에 도달할 수 있습니다.",
        detailedAnalysis: "엑셀의 고급 기능을 능숙하게 활용할 수 있는 단계입니다. 복잡한 데이터 분석, 고급 피벗 테이블, 매크로 등을 활용해 업무 자동화가 가능하며, 데이터를 통한 인사이트 도출 능력이 있습니다.",
        strengths: [
            "복잡한 함수와 중첩 함수 활용 가능",
            "고급 피벗 테이블 및 데이터 모델링",
            "데이터 시각화 고급 기술 보유",
            "기본적인 매크로 활용 능력"
        ],
        weaknesses: [
            "고급 VBA 프로그래밍 기술 강화 필요",
            "Power BI와의 연동 활용 확장 가능",
            "대용량 데이터 처리 최적화 필요"
        ],
        recommendations: [
            { title: "엑셀 VBA 프로그래밍", type: "온라인 강좌", link: "https://www.inflearn.com/course/excel-vba-programming" },
            { title: "엑셀 파워 쿼리와 파워 피벗", type: "도서", link: "https://www.amazon.com/Power-Pivot-Query-Excel-Analysis/dp/1615470395/" },
            { title: "업무 자동화를 위한 엑셀 매크로", type: "유튜브 채널", link: "https://www.youtube.com/c/ExcelVBA" }
        ],
        careerPaths: [
            "데이터 분석 전문가",
            "비즈니스 인텔리전스 애널리스트",
            "재무 분석가",
            "프로젝트 관리자"
        ]
    }
];

// 영어 결과 메시지 데이터
const resultMessagesEN = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Beginner Level: You need to understand the basic functions of Excel. It is recommended to learn basic functions first.",
        detailedAnalysis: "You are at the stage of learning the basic functions of Excel. Improving your skills in data entry, basic formatting, and simple formula creation will greatly increase your work efficiency.",
        strengths: [
            "Able to perform basic data entry and editing",
            "Can perform simple formatting changes"
        ],
        weaknesses: [
            "Difficulty using complex formulas and functions",
            "Limited use of data analysis tools",
            "Unfamiliar with pivot tables and advanced features"
        ],
        recommendations: [
            { title: "Excel Basics for Beginners", type: "Online Course", link: "https://www.udemy.com/course/excel-basics-for-beginners/" },
            { title: "Excel 2021 For Dummies", type: "Book", link: "https://www.amazon.com/Excel-Dummies-Business-Personal-Finance/dp/1119730112/" },
            { title: "Excel Tutorial", type: "YouTube Channel", link: "https://www.youtube.com/c/ExcelTutorial" }
        ],
        careerPaths: [
            "Data Entry Clerk",
            "Administrative Assistant",
            "General Office Worker"
        ]
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Basic Level: You understand the basic functions of Excel, but need to learn advanced functions. Try to learn more about frequently used functions such as filters and formulas.",
        detailedAnalysis: "You understand and can use the basic functions of Excel. You can use filters, sorting, and basic functions, but you need to understand advanced features to further increase your work efficiency.",
        strengths: [
            "Can use basic functions (SUM, AVERAGE, etc.)",
            "Able to perform simple data sorting and filtering",
            "Can create basic charts"
        ],
        weaknesses: [
            "Limited in complex data analysis",
            "Unfamiliar with pivot tables",
            "Difficulty using advanced functions and macros"
        ],
        recommendations: [
            { title: "Intermediate Excel Skills", type: "Online Course", link: "https://www.coursera.org/learn/excel-intermediate-skills" },
            { title: "Excel 2021 All-in-One For Dummies", type: "Book", link: "https://www.amazon.com/Excel-All-One-Dummies-Computer/dp/1119830125/" },
            { title: "Excel Master", type: "YouTube Channel", link: "https://www.youtube.com/c/ExcelMaster" }
        ],
        careerPaths: [
            "General Office Worker",
            "Sales Support",
            "Marketing Assistant",
            "Finance/Accounting Assistant"
        ]
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Intermediate Level: You can handle Excel skillfully. Learn pivot tables, advanced functions, etc. to improve your skills.",
        detailedAnalysis: "You can use various Excel functions. You can perform basic data analysis, use pivot tables, and create charts, but you need to improve your understanding of complex data processing and automation.",
        strengths: [
            "Can use intermediate-level functions",
            "Able to create and use basic pivot tables",
            "Can create various charts and visualize data",
            "Can use conditional formatting"
        ],
        weaknesses: [
            "Limited use of advanced data analysis techniques",
            "Unfamiliar with macros and VBA",
            "Difficulty with complex data modeling"
        ],
        recommendations: [
            { title: "Advanced Excel Data Analysis", type: "Online Course", link: "https://www.linkedin.com/learning/excel-advanced-formulas-and-functions" },
            { title: "Excel Power User 2021", type: "Book", link: "https://www.amazon.com/Microsoft-Excel-Inside-Office-2021/dp/0137559536/" },
            { title: "Pivot Table Master", type: "YouTube Channel", link: "https://www.youtube.com/c/PivotTableMaster" }
        ],
        careerPaths: [
            "Junior Data Analyst",
            "Marketing Specialist",
            "Sales Manager",
            "Finance/Accounting Specialist"
        ]
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Advanced Level: You can use Excel professionally. You can reach an expert level by learning more advanced functions such as macros and advanced data analysis.",
        detailedAnalysis: "You can skillfully use advanced Excel features. You can use complex data analysis, advanced pivot tables, and macros to automate tasks and derive insights from data.",
        strengths: [
            "Can use complex and nested functions",
            "Advanced pivot tables and data modeling",
            "Advanced data visualization techniques",
            "Basic macro usage skills"
        ],
        weaknesses: [
            "Need to strengthen advanced VBA programming skills",
            "Can expand integration with Power BI",
            "Need to optimize large data processing"
        ],
        recommendations: [
            { title: "Excel VBA Programming", type: "Online Course", link: "https://www.udemy.com/course/excel-vba-programming/" },
            { title: "Power Pivot and Power Query for Excel", type: "Book", link: "https://www.amazon.com/Power-Pivot-Query-Excel-Analysis/dp/1615470395/" },
            { title: "Excel VBA for Automation", type: "YouTube Channel", link: "https://www.youtube.com/c/ExcelVBA" }
        ],
        careerPaths: [
            "Data Analysis Expert",
            "Business Intelligence Analyst",
            "Financial Analyst",
            "Project Manager"
        ]
    }
];

// 스페인어 결과 메시지 데이터
const resultMessagesES = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Nivel Principiante: Necesita comprender las funciones básicas de Excel. Se recomienda aprender primero las funciones básicas.",
        detailedAnalysis: "Está en la etapa de aprender las funciones básicas de Excel. Mejorar sus habilidades en entrada de datos, formato básico y creación de fórmulas simples aumentará enormemente su eficiencia laboral.",
        strengths: [
            "Capaz de realizar entrada y edición básica de datos",
            "Puede realizar cambios de formato simples"
        ],
        weaknesses: [
            "Dificultad para usar fórmulas y funciones complejas",
            "Uso limitado de herramientas de análisis de datos",
            "No está familiarizado con tablas dinámicas y funciones avanzadas"
        ],
        recommendations: [
            { title: "Excel Básico para Principiantes", type: "Curso en línea", link: "https://www.udemy.com/course/excel-basico-para-principiantes/" },
            { title: "Excel 2021 Para Dummies", type: "Libro", link: "https://www.amazon.es/Excel-2021-para-Dummies-DUMMIES/dp/8432905003/" },
            { title: "Tutorial de Excel", type: "Canal de YouTube", link: "https://www.youtube.com/c/TutorialExcelEspanol" }
        ],
        careerPaths: [
            "Empleado de entrada de datos",
            "Asistente administrativo",
            "Trabajador de oficina general"
        ]
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Nivel Básico: Comprende las funciones básicas de Excel, pero necesita aprender funciones avanzadas. Intente aprender más sobre funciones de uso frecuente como filtros y fórmulas.",
        detailedAnalysis: "Comprende y puede utilizar las funciones básicas de Excel. Puede usar filtros, ordenar y funciones básicas, pero necesita comprender características avanzadas para aumentar aún más su eficiencia laboral.",
        strengths: [
            "Puede usar funciones básicas (SUMA, PROMEDIO, etc.)",
            "Capaz de realizar ordenación y filtrado simple de datos",
            "Puede crear gráficos básicos"
        ],
        weaknesses: [
            "Limitado en análisis de datos complejos",
            "No está familiarizado con tablas dinámicas",
            "Dificultad para usar funciones avanzadas y macros"
        ],
        recommendations: [
            { title: "Habilidades Intermedias de Excel", type: "Curso en línea", link: "https://www.coursera.org/learn/excel-intermediate-skills" },
            { title: "Excel 2021 Todo en Uno Para Dummies", type: "Libro", link: "https://www.amazon.es/Excel-Dummies-DUMMIES-Greg-Harvey/dp/8432906360/" },
            { title: "Maestro de Excel", type: "Canal de YouTube", link: "https://www.youtube.com/c/ExcelMaestroEspanol" }
        ],
        careerPaths: [
            "Trabajador de oficina general",
            "Soporte de ventas",
            "Asistente de marketing",
            "Asistente de finanzas/contabilidad"
        ]
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Nivel Intermedio: Puede manejar Excel con habilidad. Aprenda tablas dinámicas, funciones avanzadas, etc. para mejorar sus habilidades.",
        detailedAnalysis: "Puede utilizar varias funciones de Excel. Puede realizar análisis básicos de datos, usar tablas dinámicas y crear gráficos, pero necesita mejorar su comprensión del procesamiento de datos complejos y automatización.",
        strengths: [
            "Puede usar funciones de nivel intermedio",
            "Capaz de crear y usar tablas dinámicas básicas",
            "Puede crear varios gráficos y visualizar datos",
            "Puede usar formato condicional"
        ],
        weaknesses: [
            "Uso limitado de técnicas avanzadas de análisis de datos",
            "No está familiarizado con macros y VBA",
            "Dificultad con modelado de datos complejos"
        ],
        recommendations: [
            { title: "Análisis Avanzado de Datos con Excel", type: "Curso en línea", link: "https://www.linkedin.com/learning/excel-formulas-y-funciones-avanzadas" },
            { title: "Excel Power User 2021", type: "Libro", link: "https://www.amazon.es/Excel-2021-Domine-funciones-avanzadas/dp/2409031132/" },
            { title: "Maestro de Tablas Dinámicas", type: "Canal de YouTube", link: "https://www.youtube.com/c/TablasDinamicasMaestro" }
        ],
        careerPaths: [
            "Analista de datos junior",
            "Especialista en marketing",
            "Gerente de ventas",
            "Especialista en finanzas/contabilidad"
        ]
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Nivel Avanzado: Puede usar Excel profesionalmente. Puede alcanzar un nivel experto aprendiendo funciones más avanzadas como macros y análisis de datos avanzados.",
        detailedAnalysis: "Puede utilizar con habilidad características avanzadas de Excel. Puede utilizar análisis de datos complejos, tablas dinámicas avanzadas y macros para automatizar tareas y obtener información de los datos.",
        strengths: [
            "Puede usar funciones complejas y anidadas",
            "Tablas dinámicas avanzadas y modelado de datos",
            "Técnicas avanzadas de visualización de datos",
            "Habilidades básicas de uso de macros"
        ],
        weaknesses: [
            "Necesita fortalecer habilidades avanzadas de programación VBA",
            "Puede expandir la integración con Power BI",
            "Necesita optimizar el procesamiento de grandes volúmenes de datos"
        ],
        recommendations: [
            { title: "Programación VBA para Excel", type: "Curso en línea", link: "https://www.udemy.com/course/programacion-vba-excel-espanol/" },
            { title: "Power Pivot y Power Query para Excel", type: "Libro", link: "https://www.amazon.es/POWER-PIVOT-QUERY-EXCEL-ANALISIS/dp/8441543925/" },
            { title: "Excel VBA para Automatización", type: "Canal de YouTube", link: "https://www.youtube.com/c/ExcelVBAEspanol" }
        ],
        careerPaths: [
            "Experto en análisis de datos",
            "Analista de inteligencia empresarial",
            "Analista financiero",
            "Gerente de proyectos"
        ]
    }
];

// 현재 사용 중인 언어 데이터
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

// 언어에 따라 설문 데이터 업데이트
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
    const message = getResultMessage(score);
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

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // URL 파라미터에서 언어 정보 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // localStorage에 저장된 언어 정보 확인
    let savedLanguage = localStorage.getItem('selectedLanguage');
    
    // URL 파라미터에 언어 정보가 있으면 우선 사용하고 localStorage에 저장
    if (urlLang) {
        localStorage.setItem('selectedLanguage', urlLang);
        savedLanguage = urlLang;
    }
    
    // 언어에 따라 설문 데이터 업데이트
    if (savedLanguage) {
        updateSurveyLanguage(savedLanguage);
    }
    
    // 공통 언어 설정 적용
    if (typeof applyStoredLanguageToPage === 'function') {
        applyStoredLanguageToPage();
    }
    
    // 초기화
    init();
    
    // 이벤트 리스너
    prevBtn.addEventListener('click', goToPreviousQuestion);
    nextBtn.addEventListener('click', goToNextQuestion);
    submitBtn.addEventListener('click', showResult);
    restartBtn.addEventListener('click', init);
    backToMainBtn.addEventListener('click', goToMainPage);
}); 