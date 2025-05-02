// 설문 질문 데이터
const questionsKO = [
    {
        question: "주요 디지털 광고 플랫폼(구글, 페이스북, 인스타그램 등)의 특성과 장단점을 이해하고 있다.",
        options: [
            { text: "모든 플랫폼 특성 완벽히 이해", score: 4 },
            { text: "주요 플랫폼 특성 기본 이해", score: 3 },
            { text: "일부 플랫폼만 사용해봄", score: 2 },
            { text: "플랫폼 차이 이해 부족", score: 1 }
        ]
    },
    {
        question: "타겟 오디언스를 세분화하고 적절한 타겟팅 전략을 수립할 수 있다.",
        options: [
            { text: "정교한 세그먼트 전략 수립 가능", score: 4 },
            { text: "기본적인 타겟팅 설정 가능", score: 3 },
            { text: "단순 인구통계 타겟팅만 가능", score: 2 },
            { text: "타겟팅 설정 경험 부족", score: 1 }
        ]
    },
    {
        question: "광고 예산을 효과적으로 분배하고 입찰 전략을 수립할 수 있다.",
        options: [
            { text: "ROAS 기반 최적화 전략 수립 가능", score: 4 },
            { text: "기본적인 예산 배분 가능", score: 3 },
            { text: "단순 예산 설정만 해봄", score: 2 },
            { text: "예산 관리 경험 부족", score: 1 }
        ]
    },
    {
        question: "키워드 리서치를 통해 효과적인 검색 광고 전략을 수립할 수 있다.",
        options: [
            { text: "고급 키워드 분석/전략 수립 가능", score: 4 },
            { text: "기본적인 키워드 선정 가능", score: 3 },
            { text: "일반적인 키워드만 활용 가능", score: 2 },
            { text: "키워드 리서치 경험 부족", score: 1 }
        ]
    },
    {
        question: "광고 소재(이미지, 텍스트, 영상)를 기획하고 개선할 수 있다.",
        options: [
            { text: "다양한 크리에이티브 최적화 가능", score: 4 },
            { text: "기본적인 소재 제작/개선 가능", score: 3 },
            { text: "템플릿 기반 소재만 사용 가능", score: 2 },
            { text: "광고 소재 기획 경험 부족", score: 1 }
        ]
    },
    {
        question: "A/B 테스트를 설계하고 결과를 분석하여 광고 성과를 개선할 수 있다.",
        options: [
            { text: "체계적 테스트/분석 능숙", score: 4 },
            { text: "기본적인 A/B 테스트 수행 가능", score: 3 },
            { text: "간단한 비교 테스트만 해봄", score: 2 },
            { text: "A/B 테스트 경험 부족", score: 1 }
        ]
    },
    {
        question: "광고 성과 지표(CTR, CPC, CPA, ROAS 등)를 이해하고 분석할 수 있다.",
        options: [
            { text: "모든 지표 분석/인사이트 도출 가능", score: 4 },
            { text: "주요 지표 기본 분석 가능", score: 3 },
            { text: "기본 지표만 확인 가능", score: 2 },
            { text: "성과 지표 이해 부족", score: 1 }
        ]
    },
    {
        question: "리마케팅/리타겟팅 전략을 수립하고 실행할 수 있다.",
        options: [
            { text: "정교한 리타겟팅 전략 구현 가능", score: 4 },
            { text: "기본적인 리마케팅 설정 가능", score: 3 },
            { text: "단순 리타겟팅만 설정해봄", score: 2 },
            { text: "리마케팅 경험 부족", score: 1 }
        ]
    },
    {
        question: "추적 코드와 전환 픽셀을 설치하고 활용할 수 있다.",
        options: [
            { text: "고급 태그 관리/구현 가능", score: 4 },
            { text: "기본적인 픽셀 설치 가능", score: 3 },
            { text: "가이드에 따라 설치만 가능", score: 2 },
            { text: "추적 코드 설치 경험 부족", score: 1 }
        ]
    },
    {
        question: "광고 성과 리포트를 작성하고 인사이트를 도출할 수 있다.",
        options: [
            { text: "심층 분석/전략적 인사이트 제시 가능", score: 4 },
            { text: "기본적인 리포트 작성 가능", score: 3 },
            { text: "단순 데이터 취합만 가능", score: 2 },
            { text: "리포팅 경험 부족", score: 1 }
        ]
    }
];

// 영어 설문 질문 데이터
const questionsEN = [
    {
        question: "I understand the characteristics and advantages of major digital advertising platforms (Google, Facebook, Instagram, etc.).",
        options: [
            { text: "Expert knowledge of all major platforms", score: 4 },
            { text: "Good understanding of main platforms", score: 3 },
            { text: "Basic experience with some platforms", score: 2 },
            { text: "Limited platform knowledge", score: 1 }
        ]
    },
    {
        question: "I can segment target audiences and develop appropriate targeting strategies.",
        options: [
            { text: "Advanced audience segmentation skills", score: 4 },
            { text: "Can set up basic targeting parameters", score: 3 },
            { text: "Can only use demographic targeting", score: 2 },
            { text: "Limited targeting experience", score: 1 }
        ]
    },
    {
        question: "I can effectively allocate advertising budgets and develop bidding strategies.",
        options: [
            { text: "Advanced ROAS-based optimization", score: 4 },
            { text: "Basic budget allocation skills", score: 3 },
            { text: "Simple budget setting only", score: 2 },
            { text: "Limited budget management experience", score: 1 }
        ]
    },
    {
        question: "I can conduct keyword research and develop effective search advertising strategies.",
        options: [
            { text: "Advanced keyword analysis/strategy skills", score: 4 },
            { text: "Can select appropriate keywords", score: 3 },
            { text: "Can only use general keywords", score: 2 },
            { text: "Limited keyword research experience", score: 1 }
        ]
    },
    {
        question: "I can plan and improve advertising creative materials (images, text, video).",
        options: [
            { text: "Advanced creative optimization skills", score: 4 },
            { text: "Can create and improve basic materials", score: 3 },
            { text: "Can only use template-based materials", score: 2 },
            { text: "Limited creative planning experience", score: 1 }
        ]
    },
    {
        question: "I can design A/B tests and analyze results to improve ad performance.",
        options: [
            { text: "Systematic testing/analysis expert", score: 4 },
            { text: "Can perform basic A/B testing", score: 3 },
            { text: "Only tried simple comparison tests", score: 2 },
            { text: "Limited A/B testing experience", score: 1 }
        ]
    },
    {
        question: "I understand and can analyze advertising performance metrics (CTR, CPC, CPA, ROAS, etc.).",
        options: [
            { text: "Advanced metrics analysis skills", score: 4 },
            { text: "Can analyze basic metrics", score: 3 },
            { text: "Can only check basic indicators", score: 2 },
            { text: "Limited metrics understanding", score: 1 }
        ]
    },
    {
        question: "I can develop and implement remarketing/retargeting strategies.",
        options: [
            { text: "Advanced retargeting strategy skills", score: 4 },
            { text: "Can set up basic remarketing", score: 3 },
            { text: "Only configured simple retargeting", score: 2 },
            { text: "Limited remarketing experience", score: 1 }
        ]
    },
    {
        question: "I can install and utilize tracking codes and conversion pixels.",
        options: [
            { text: "Advanced tag management skills", score: 4 },
            { text: "Can install basic pixels", score: 3 },
            { text: "Can only install with guidance", score: 2 },
            { text: "Limited tracking code experience", score: 1 }
        ]
    },
    {
        question: "I can create performance reports and derive insights from advertising data.",
        options: [
            { text: "Advanced analysis/strategic insights", score: 4 },
            { text: "Can create basic reports", score: 3 },
            { text: "Can only compile simple data", score: 2 },
            { text: "Limited reporting experience", score: 1 }
        ]
    }
];

// 스페인어 설문 질문 데이터
const questionsES = [
    {
        question: "Comprendo las características y ventajas de las principales plataformas de publicidad digital (Google, Facebook, Instagram, etc.).",
        options: [
            { text: "Conocimiento experto de todas las plataformas principales", score: 4 },
            { text: "Buena comprensión de las plataformas principales", score: 3 },
            { text: "Experiencia básica con algunas plataformas", score: 2 },
            { text: "Conocimiento limitado de plataformas", score: 1 }
        ]
    },
    {
        question: "Puedo segmentar audiencias objetivo y desarrollar estrategias de targeting apropiadas.",
        options: [
            { text: "Habilidades avanzadas de segmentación de audiencia", score: 4 },
            { text: "Puedo configurar parámetros básicos de targeting", score: 3 },
            { text: "Solo puedo usar targeting demográfico", score: 2 },
            { text: "Experiencia limitada en targeting", score: 1 }
        ]
    },
    {
        question: "Puedo asignar eficazmente presupuestos publicitarios y desarrollar estrategias de puja.",
        options: [
            { text: "Optimización avanzada basada en ROAS", score: 4 },
            { text: "Habilidades básicas de asignación de presupuesto", score: 3 },
            { text: "Solo configuración simple de presupuesto", score: 2 },
            { text: "Experiencia limitada en gestión de presupuesto", score: 1 }
        ]
    },
    {
        question: "Puedo realizar investigación de palabras clave y desarrollar estrategias efectivas de publicidad en buscadores.",
        options: [
            { text: "Habilidades avanzadas de análisis/estrategia de palabras clave", score: 4 },
            { text: "Puedo seleccionar palabras clave apropiadas", score: 3 },
            { text: "Solo puedo usar palabras clave generales", score: 2 },
            { text: "Experiencia limitada en investigación de palabras clave", score: 1 }
        ]
    },
    {
        question: "Puedo planificar y mejorar materiales creativos publicitarios (imágenes, texto, video).",
        options: [
            { text: "Habilidades avanzadas de optimización creativa", score: 4 },
            { text: "Puedo crear y mejorar materiales básicos", score: 3 },
            { text: "Solo puedo usar materiales basados en plantillas", score: 2 },
            { text: "Experiencia limitada en planificación creativa", score: 1 }
        ]
    },
    {
        question: "Puedo diseñar pruebas A/B y analizar resultados para mejorar el rendimiento publicitario.",
        options: [
            { text: "Experto en pruebas/análisis sistemáticos", score: 4 },
            { text: "Puedo realizar pruebas A/B básicas", score: 3 },
            { text: "Solo he probado pruebas de comparación simples", score: 2 },
            { text: "Experiencia limitada en pruebas A/B", score: 1 }
        ]
    },
    {
        question: "Comprendo y puedo analizar métricas de rendimiento publicitario (CTR, CPC, CPA, ROAS, etc.).",
        options: [
            { text: "Habilidades avanzadas de análisis de métricas", score: 4 },
            { text: "Puedo analizar métricas básicas", score: 3 },
            { text: "Solo puedo verificar indicadores básicos", score: 2 },
            { text: "Comprensión limitada de métricas", score: 1 }
        ]
    },
    {
        question: "Puedo desarrollar e implementar estrategias de remarketing/retargeting.",
        options: [
            { text: "Habilidades avanzadas en estrategia de retargeting", score: 4 },
            { text: "Puedo configurar remarketing básico", score: 3 },
            { text: "Solo he configurado retargeting simple", score: 2 },
            { text: "Experiencia limitada en remarketing", score: 1 }
        ]
    },
    {
        question: "Puedo instalar y utilizar códigos de seguimiento y píxeles de conversión.",
        options: [
            { text: "Habilidades avanzadas de gestión de etiquetas", score: 4 },
            { text: "Puedo instalar píxeles básicos", score: 3 },
            { text: "Solo puedo instalar con orientación", score: 2 },
            { text: "Experiencia limitada con códigos de seguimiento", score: 1 }
        ]
    },
    {
        question: "Puedo crear informes de rendimiento y obtener insights de datos publicitarios.",
        options: [
            { text: "Análisis avanzado/insights estratégicos", score: 4 },
            { text: "Puedo crear informes básicos", score: 3 },
            { text: "Solo puedo compilar datos simples", score: 2 },
            { text: "Experiencia limitada en informes", score: 1 }
        ]
    }
];

// 결과 메시지 데이터
const resultMessagesKO = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 디지털 광고의 기본 개념에 대한 이해가 필요합니다. 주요 광고 플랫폼의 기초를 배우고, 간단한 캠페인 운영부터 시작해보세요."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 기본적인 디지털 광고 운영 능력을 갖추고 있지만, 보다 효과적인 전략 수립과 성과 분석에 대한 학습이 필요합니다. 다양한 타겟팅 방법과 A/B 테스트를 시도해보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 여러 광고 플랫폼에서 캠페인을 효과적으로 운영할 수 있습니다. 보다 정교한 타겟팅과 입찰 전략, 데이터 기반 의사결정 능력을 키워보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 디지털 광고에 대한 전문적인 지식과 실무 능력을 갖추고 있습니다. 복잡한 캠페인도 효과적으로 기획하고 최적화할 수 있으며, 심층적인 데이터 분석을 통해 인사이트를 도출할 수 있습니다."
    }
];

// 영어 결과 메시지 데이터
const resultMessagesEN = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Beginner Level: You need to develop a basic understanding of digital advertising concepts. Start by learning the fundamentals of major advertising platforms and running simple campaigns."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Basic Level: You have basic digital advertising skills but need to learn more effective strategy development and performance analysis. Try various targeting methods and A/B testing approaches."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Intermediate Level: You can effectively manage campaigns across multiple advertising platforms. Continue developing more sophisticated targeting and bidding strategies, and data-driven decision-making skills."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Advanced Level: You have expert knowledge and practical skills in digital advertising. You can effectively plan and optimize complex campaigns and derive insights through in-depth data analysis."
    }
];

// 스페인어 결과 메시지 데이터
const resultMessagesES = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Nivel Principiante: Necesitas desarrollar una comprensión básica de los conceptos de publicidad digital. Comienza por aprender los fundamentos de las principales plataformas publicitarias y ejecutar campañas simples."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Nivel Básico: Tienes habilidades básicas de publicidad digital pero necesitas aprender estrategias más efectivas y análisis de rendimiento. Prueba varios métodos de segmentación y enfoques de pruebas A/B."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Nivel Intermedio: Puedes gestionar efectivamente campañas en múltiples plataformas publicitarias. Continúa desarrollando estrategias más sofisticadas de segmentación y puja, y habilidades de toma de decisiones basadas en datos."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Nivel Avanzado: Tienes conocimientos expertos y habilidades prácticas en publicidad digital. Puedes planificar y optimizar efectivamente campañas complejas y obtener insights mediante análisis de datos en profundidad."
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
    if (lang === 'ko') {
        questions = questionsKO;
        resultMessages = resultMessagesKO;
    } else if (lang === 'en') {
        questions = questionsEN;
        resultMessages = resultMessagesEN;
    } else if (lang === 'es') {
        questions = questionsES;
        resultMessages = resultMessagesES;
    }
    
    // 현재 화면 업데이트
    if (surveyContainer.style.display !== 'none') {
        showQuestion(currentQuestionIndex);
    } else if (resultContainer.style.display !== 'none') {
        showResult();
    }
}

// 초기화 함수 수정
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
    const message = getResultMessage(score);
    const category = "디지털 광고 능력";
    
    // 언어에 따른 점수 표시
    const lang = localStorage.getItem('selectedLanguage') || 'ko';
    
    // 결론 도출 부분 - 개선된 구조
    let resultHTML = `
        <h2>1. 요약된 능력 진단</h2>
        <p>${category}: ${score} — ${getAbilityLevel(score)}</p>
        
        <h2>2. 강점 분석</h2>
        <p>${getStrengthAnalysis(score)}</p>
        
        <h2>3. 보완이 필요한 분야 제시</h2>
        <p>${getWeaknessAnalysis(score)}</p>
        
        <h2>4. 추천 학습 방향 / 자료</h2>
        <div class="recommended-resources">
            ${getLearningResources(score)}
        </div>
        
        <div class="chart-container">
            <h3>능력 진단 차트</h3>
            <div class="radar-chart">
                <canvas id="abilityChart" width="300" height="300"></canvas>
            </div>
        </div>
    `;
    
    scoreDisplay.textContent = `${lang === 'ko' ? '총점: ' : lang === 'en' ? 'Total Score: ' : 'Puntuación Total: '}${score}`;
    resultMessageElement.innerHTML = resultHTML;
    
    surveyContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // 차트 생성
    drawRadarChart(score);
}

// 능력 수준 반환
function getAbilityLevel(score) {
    if (score >= 36) {
        return "디지털 광고를 전문적으로 운영할 수 있는 고급 수준입니다.";
    } else if (score >= 31) {
        return "효과적인 디지털 광고 캠페인을 운영할 수 있는 중급 수준입니다.";
    } else if (score >= 21) {
        return "기본적인 디지털 광고 운영이 가능한 기초 수준입니다.";
    } else {
        return "디지털 광고에 대한 기본 지식이 필요한 초보 수준입니다.";
    }
}

// 강점 분석 반환
function getStrengthAnalysis(score) {
    if (score >= 36) {
        return "당신은 여러 플랫폼에서 정교한 디지털 광고 캠페인을 기획하고 운영할 수 있습니다. 데이터 분석을 통한 인사이트 도출, 정밀한 타겟팅 전략 수립, 효율적인 예산 관리, A/B 테스트 등 전문적인 기술을 갖추고 있습니다.";
    } else if (score >= 31) {
        return "당신은 주요 디지털 광고 플랫폼에서 효과적인 캠페인을 운영할 수 있습니다. 타겟 설정, 키워드 선택, 광고 문구 작성, 성과 분석 등의 기술을 잘 활용하고 있습니다.";
    } else if (score >= 21) {
        return "당신은 기본적인 디지털 광고 캠페인을 설정하고 운영할 수 있습니다. 주요 광고 플랫폼의 인터페이스를 이해하고, 간단한 광고를 집행할 수 있는 능력을 갖추고 있습니다.";
    } else {
        return "당신은 디지털 광고의 기본 개념에 대한 이해가 있으며, 주요 플랫폼의 존재와 역할을 알고 있습니다. 간단한 광고 설정과 모니터링이 가능합니다.";
    }
}

// 약점 분석 반환
function getWeaknessAnalysis(score) {
    if (score >= 36) {
        return "높은 수준의 광고 운영 능력을 갖추고 있지만, 새로운 광고 플랫폼과 기술 트렌드를 지속적으로 학습하고, 보다 정교한 자동화 및 AI 기반 최적화 기법을 익히면 더욱 전문성을 높일 수 있습니다.";
    } else if (score >= 31) {
        return "심층적인 데이터 분석 및 인사이트 도출 능력을 키울 필요가 있습니다. 또한 리마케팅, 전환 추적, A/B 테스트 등의 고급 기법을 더 효과적으로 활용하는 방법을 학습하면 좋겠습니다.";
    } else if (score >= 21) {
        return "다양한 광고 플랫폼과 포맷에 대한 경험이 부족합니다. 타겟팅 옵션을 더 정교하게 활용하고, 성과 분석 및 최적화 방법에 대한 학습이 필요합니다.";
    } else {
        return "디지털 광고의 기본 원리와 주요 플랫폼 사용법에 대한 이해가 부족합니다. 각 채널의 특성과 기본적인 광고 설정 방법, 성과 측정 지표에 대한 학습이 필요합니다.";
    }
}

// 학습 자료 반환
function getLearningResources(score) {
    let resources = '<ul>';
    
    if (score >= 36) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">고급 디지털 광고 최적화 전략</a></li>
            <li>추천 키워드: '프로그래매틱 광고', '통합 마케팅 전략', 'AI 기반 광고 최적화'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">디지털 마케팅 데이터 분석 심화</a></li>
        `;
    } else if (score >= 31) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">성과 중심 광고 캠페인 전략</a></li>
            <li>추천 키워드: '전환 최적화', '데이터 기반 광고 분석', '고급 리타겟팅'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">퍼포먼스 마케팅 실전 전략</a></li>
        `;
    } else if (score >= 21) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">디지털 광고 실전 가이드</a></li>
            <li>추천 키워드: '효과적인 타겟팅', '광고 성과 분석', '크리에이티브 최적화'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">디지털 광고 중급 과정</a></li>
        `;
    } else {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">디지털 광고 기초 가이드</a></li>
            <li>추천 키워드: '페이스북 광고 기초', '구글 광고 입문', '광고 성과 지표'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">디지털 광고 입문자를 위한 가이드</a></li>
        `;
    }
    
    resources += '</ul>';
    return resources;
}

// 레이더 차트 그리기
function drawRadarChart(score) {
    const canvas = document.getElementById('abilityChart');
    
    // 각 항목별 세부 점수 (이 데이터는 실제로는 각 문항별 응답에 따라 계산해야 함)
    const items = [
        { label: '플랫폼 활용', score: calculateCategoryScore(0, 3) },   // 문항 1-3
        { label: '타겟팅 전략', score: calculateCategoryScore(3, 5) },   // 문항 4-5
        { label: '성과 분석', score: calculateCategoryScore(5, 8) },     // 문항 6-8
        { label: '최적화 기술', score: calculateCategoryScore(8, 10) }   // 문항 9-10
    ];
    
    // 레이더 차트 데이터
    const data = {
        labels: items.map(item => item.label),
        datasets: [{
            label: '능력 진단',
            data: items.map(item => item.score),
            fill: true,
            backgroundColor: getChartColor(score, 0.2),
            borderColor: getChartColor(score, 1),
            pointBackgroundColor: getChartColor(score, 1),
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: getChartColor(score, 1)
        }]
    };
    
    // 차트 옵션
    const options = {
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 4
            }
        }
    };
    
    // 차트 생성
    if (window.myRadarChart) {
        window.myRadarChart.destroy();
    }
    
    window.myRadarChart = new Chart(canvas, {
        type: 'radar',
        data: data,
        options: options
    });
}

// 각 카테고리별 점수 계산 (start부터 end까지의 문항 평균)
function calculateCategoryScore(start, end) {
    let sum = 0;
    let count = 0;
    
    for (let i = start; i < end && i < questions.length; i++) {
        if (answers[i] !== null) {
            sum += questions[i].options[answers[i]].score;
            count++;
        }
    }
    
    return count > 0 ? sum / count : 0;
}

// 점수에 따른 차트 색상 반환
function getChartColor(score, alpha) {
    if (score >= 36) {
        return `rgba(0, 128, 0, ${alpha})`; // 초록색
    } else if (score >= 31) {
        return `rgba(0, 128, 0, ${alpha})`; // 초록색
    } else if (score >= 21) {
        return `rgba(255, 193, 7, ${alpha})`; // 노란색
    } else {
        return `rgba(220, 53, 69, ${alpha})`; // 빨간색
    }
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

// 페이지 로드 시 초기화 수정
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