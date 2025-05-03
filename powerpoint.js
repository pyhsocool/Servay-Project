// 설문 질문 데이터
const questionsKO = [
    {
        question: "효과적인 슬라이드 레이아웃을 설계하고 구성할 수 있다.",
        options: [
            { text: "여러 레이아웃을 능숙하게 활용", score: 4 },
            { text: "기본 레이아웃 사용 가능", score: 3 },
            { text: "템플릿만 사용해봄", score: 2 },
            { text: "레이아웃 구성 경험 없음", score: 1 }
        ]
    },
    {
        question: "다양한 슬라이드 마스터와 테마를 활용하여 일관된 디자인을 적용할 수 있다.",
        options: [
            { text: "마스터 뷰 완벽히 활용", score: 4 },
            { text: "테마 적용 및 수정 가능", score: 3 },
            { text: "기본 테마만 적용해봄", score: 2 },
            { text: "마스터/테마 사용 경험 없음", score: 1 }
        ]
    },
    {
        question: "그래프, 차트, 표를 활용하여 데이터를 효과적으로 시각화할 수 있다.",
        options: [
            { text: "복잡한 데이터도 시각화 가능", score: 4 },
            { text: "기본적인 차트/표 작성 가능", score: 3 },
            { text: "템플릿 차트만 사용해봄", score: 2 },
            { text: "데이터 시각화 경험 없음", score: 1 }
        ]
    },
    {
        question: "애니메이션과 전환 효과를 적절히 활용하여 프레젠테이션의 흐름을 강화할 수 있다.",
        options: [
            { text: "맞춤 애니메이션 능숙하게 활용", score: 4 },
            { text: "기본 애니메이션 적용 가능", score: 3 },
            { text: "간단한 전환 효과만 사용", score: 2 },
            { text: "애니메이션 적용 경험 없음", score: 1 }
        ]
    },
    {
        question: "SmartArt, 도형, 아이콘을 활용하여 복잡한 개념을 시각적으로 표현할 수 있다.",
        options: [
            { text: "복잡한 개념도 시각화 가능", score: 4 },
            { text: "기본 SmartArt/도형 활용 가능", score: 3 },
            { text: "간단한 도형만 사용해봄", score: 2 },
            { text: "시각화 도구 사용 경험 없음", score: 1 }
        ]
    },
    {
        question: "이미지 편집 도구를 사용하여 사진과 그래픽을 효과적으로 수정하고 활용할 수 있다.",
        options: [
            { text: "고급 이미지 편집 활용 가능", score: 4 },
            { text: "기본 이미지 편집/크롭 가능", score: 3 },
            { text: "이미지 삽입만 해봄", score: 2 },
            { text: "이미지 편집 경험 없음", score: 1 }
        ]
    },
    {
        question: "멀티미디어 요소(오디오, 비디오)를 프레젠테이션에 통합하고 적절히 활용할 수 있다.",
        options: [
            { text: "비디오 편집/타이밍 조절 가능", score: 4 },
            { text: "기본 멀티미디어 삽입 가능", score: 3 },
            { text: "간단한 비디오 첨부만 해봄", score: 2 },
            { text: "멀티미디어 통합 경험 없음", score: 1 }
        ]
    },
    {
        question: "하이퍼링크, 액션 버튼을 활용하여 대화형 프레젠테이션을 만들 수 있다.",
        options: [
            { text: "완전한 대화형 슬라이드 제작 가능", score: 4 },
            { text: "기본 링크/버튼 활용 가능", score: 3 },
            { text: "단순 링크만 추가해봄", score: 2 },
            { text: "대화형 요소 추가 경험 없음", score: 1 }
        ]
    },
    {
        question: "발표자 노트를 효과적으로 활용하고 발표 시간을 고려한 프레젠테이션을 설계할 수 있다.",
        options: [
            { text: "발표 노트/시간 완벽히 활용", score: 4 },
            { text: "기본 발표자 노트 사용 가능", score: 3 },
            { text: "간단한 메모만 활용해봄", score: 2 },
            { text: "발표자 노트 사용 경험 없음", score: 1 }
        ]
    },
    {
        question: "다양한 형식(PDF, 비디오, 웹 등)으로 프레젠테이션을 저장하고 공유할 수 있다.",
        options: [
            { text: "다양한 형식으로 변환/공유 가능", score: 4 },
            { text: "PDF/이미지로 변환 가능", score: 3 },
            { text: "기본 저장 형식만 사용해봄", score: 2 },
            { text: "다른 형식 변환 경험 없음", score: 1 }
        ]
    }
];

// 영어 설문 질문 데이터
const questionsEN = [
    {
        question: "I can create clear and effective presentation slides.",
        options: [
            { text: "I can design professional-quality slides with excellent visual hierarchy", score: 4 },
            { text: "I can create clear slides with good organization of information", score: 3 },
            { text: "I can make basic slides but struggle with design principles", score: 2 },
            { text: "I have difficulty creating organized and effective slides", score: 1 }
        ]
    },
    {
        question: "I can use appropriate visual elements (images, charts, diagrams) to support my message.",
        options: [
            { text: "I strategically select and create visuals that enhance understanding", score: 4 },
            { text: "I use relevant visuals to support key points", score: 3 },
            { text: "I occasionally include basic visuals in my presentations", score: 2 },
            { text: "I rarely use visual elements in my presentations", score: 1 }
        ]
    },
    {
        question: "I can create and format charts and graphs that clearly display data.",
        options: [
            { text: "I can create customized, clear data visualizations that highlight insights", score: 4 },
            { text: "I can create and format basic charts to represent data", score: 3 },
            { text: "I can use pre-made chart templates with minimal customization", score: 2 },
            { text: "I struggle to create charts that represent data effectively", score: 1 }
        ]
    },
    {
        question: "I can apply consistent design principles (color schemes, fonts, layouts) throughout a presentation.",
        options: [
            { text: "I can create and apply professional design systems across presentations", score: 4 },
            { text: "I maintain consistent basic design elements throughout presentations", score: 3 },
            { text: "I use templates but sometimes apply inconsistent customizations", score: 2 },
            { text: "My presentations lack design consistency", score: 1 }
        ]
    },
    {
        question: "I can use animation and transitions effectively and appropriately.",
        options: [
            { text: "I use strategic animations to enhance understanding and engagement", score: 4 },
            { text: "I apply simple animations that support content flow", score: 3 },
            { text: "I occasionally use basic animations, sometimes distractingly", score: 2 },
            { text: "I either don't use animations or use them inappropriately", score: 1 }
        ]
    },
    {
        question: "I can create presentations that tell a cohesive story with clear flow.",
        options: [
            { text: "I craft presentations with compelling narratives and excellent flow", score: 4 },
            { text: "I organize content in a logical sequence with clear connections", score: 3 },
            { text: "My presentations follow a basic structure but lack strong narrative", score: 2 },
            { text: "My presentations often seem disconnected or poorly organized", score: 1 }
        ]
    },
    {
        question: "I can design slides with appropriate text density and readability.",
        options: [
            { text: "I create slides with optimal text-to-visual ratio and excellent readability", score: 4 },
            { text: "I keep text concise and readable in most slides", score: 3 },
            { text: "My slides sometimes contain too much text or poor contrast", score: 2 },
            { text: "My slides often contain excessive text or readability issues", score: 1 }
        ]
    },
    {
        question: "I can tailor presentations for different audiences and purposes.",
        options: [
            { text: "I expertly customize presentations for specific audiences and contexts", score: 4 },
            { text: "I adjust content and style based on audience needs", score: 3 },
            { text: "I make minor adjustments for different audiences", score: 2 },
            { text: "I use the same presentation approach regardless of audience", score: 1 }
        ]
    },
    {
        question: "I can create effective speaker notes to support presentation delivery.",
        options: [
            { text: "I create comprehensive, well-structured speaker notes that enhance delivery", score: 4 },
            { text: "I prepare helpful notes for key points and transitions", score: 3 },
            { text: "I sometimes create basic notes but rely more on slides", score: 2 },
            { text: "I rarely use speaker notes in my presentations", score: 1 }
        ]
    },
    {
        question: "I can collaborate with others to create and edit presentations.",
        options: [
            { text: "I can lead collaborative presentation creation with excellent coordination", score: 4 },
            { text: "I work effectively with others on shared presentations", score: 3 },
            { text: "I can collaborate but sometimes face integration challenges", score: 2 },
            { text: "I struggle to work collaboratively on presentations", score: 1 }
        ]
    }
];

// 스페인어 설문 질문 데이터
const questionsES = [
    {
        question: "Puedo crear diapositivas de presentación claras y efectivas.",
        options: [
            { text: "Puedo diseñar diapositivas de calidad profesional con excelente jerarquía visual", score: 4 },
            { text: "Puedo crear diapositivas claras con buena organización de información", score: 3 },
            { text: "Puedo hacer diapositivas básicas pero tengo dificultades con principios de diseño", score: 2 },
            { text: "Tengo dificultad para crear diapositivas organizadas y efectivas", score: 1 }
        ]
    },
    {
        question: "Puedo usar elementos visuales apropiados (imágenes, gráficos, diagramas) para apoyar mi mensaje.",
        options: [
            { text: "Selecciono y creo estratégicamente visuales que mejoran la comprensión", score: 4 },
            { text: "Uso visuales relevantes para apoyar puntos clave", score: 3 },
            { text: "Ocasionalmente incluyo visuales básicos en mis presentaciones", score: 2 },
            { text: "Raramente uso elementos visuales en mis presentaciones", score: 1 }
        ]
    },
    {
        question: "Puedo crear y formatear gráficos que muestren claramente los datos.",
        options: [
            { text: "Puedo crear visualizaciones de datos personalizadas y claras que destacan insights", score: 4 },
            { text: "Puedo crear y formatear gráficos básicos para representar datos", score: 3 },
            { text: "Puedo usar plantillas de gráficos prediseñadas con personalización mínima", score: 2 },
            { text: "Tengo dificultades para crear gráficos que representen datos efectivamente", score: 1 }
        ]
    },
    {
        question: "Puedo aplicar principios de diseño consistentes (esquemas de color, fuentes, diseños) en toda la presentación.",
        options: [
            { text: "Puedo crear y aplicar sistemas de diseño profesionales en presentaciones", score: 4 },
            { text: "Mantengo elementos de diseño básicos consistentes en presentaciones", score: 3 },
            { text: "Uso plantillas pero a veces aplico personalizaciones inconsistentes", score: 2 },
            { text: "Mis presentaciones carecen de consistencia en el diseño", score: 1 }
        ]
    },
    {
        question: "Puedo usar animaciones y transiciones de manera efectiva y apropiada.",
        options: [
            { text: "Uso animaciones estratégicas para mejorar la comprensión y participación", score: 4 },
            { text: "Aplico animaciones simples que apoyan el flujo de contenido", score: 3 },
            { text: "Ocasionalmente uso animaciones básicas, a veces distractivas", score: 2 },
            { text: "No uso animaciones o las uso inapropiadamente", score: 1 }
        ]
    },
    {
        question: "Puedo crear presentaciones que cuentan una historia cohesiva con flujo claro.",
        options: [
            { text: "Elaboro presentaciones con narrativas convincentes y excelente flujo", score: 4 },
            { text: "Organizo contenido en secuencia lógica con conexiones claras", score: 3 },
            { text: "Mis presentaciones siguen estructura básica pero carecen de narrativa fuerte", score: 2 },
            { text: "Mis presentaciones a menudo parecen desconectadas o mal organizadas", score: 1 }
        ]
    },
    {
        question: "Puedo diseñar diapositivas con densidad de texto apropiada y legibilidad.",
        options: [
            { text: "Creo diapositivas con proporción texto-visual óptima y excelente legibilidad", score: 4 },
            { text: "Mantengo texto conciso y legible en la mayoría de diapositivas", score: 3 },
            { text: "Mis diapositivas a veces contienen demasiado texto o poco contraste", score: 2 },
            { text: "Mis diapositivas a menudo contienen texto excesivo o problemas de legibilidad", score: 1 }
        ]
    },
    {
        question: "Puedo adaptar presentaciones para diferentes audiencias y propósitos.",
        options: [
            { text: "Personalizo expertamente presentaciones para audiencias y contextos específicos", score: 4 },
            { text: "Ajusto contenido y estilo según necesidades de la audiencia", score: 3 },
            { text: "Hago ajustes menores para diferentes audiencias", score: 2 },
            { text: "Uso el mismo enfoque de presentación independientemente de la audiencia", score: 1 }
        ]
    },
    {
        question: "Puedo crear notas efectivas para el presentador que apoyen la entrega de la presentación.",
        options: [
            { text: "Creo notas completas y bien estructuradas que mejoran la entrega", score: 4 },
            { text: "Preparo notas útiles para puntos clave y transiciones", score: 3 },
            { text: "A veces creo notas básicas pero dependo más de las diapositivas", score: 2 },
            { text: "Raramente uso notas del presentador en mis presentaciones", score: 1 }
        ]
    },
    {
        question: "Puedo colaborar con otros para crear y editar presentaciones.",
        options: [
            { text: "Puedo liderar creación colaborativa de presentaciones con excelente coordinación", score: 4 },
            { text: "Trabajo efectivamente con otros en presentaciones compartidas", score: 3 },
            { text: "Puedo colaborar pero a veces enfrento desafíos de integración", score: 2 },
            { text: "Tengo dificultades para trabajar colaborativamente en presentaciones", score: 1 }
        ]
    }
];

// 결과 메시지 데이터
const resultMessagesKO = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 파워포인트의 기본 기능에 대한 이해가 필요합니다. 간단한 슬라이드 작성부터 시작하여 기본 레이아웃과 디자인 원칙을 학습해보세요."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 기본적인 프레젠테이션을 만들 수 있지만, 더 효과적인 시각화와 디자인 기술을 익힐 필요가 있습니다. 차트, 그래프, 테마 등을 적극 활용해보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 효과적인 프레젠테이션을 만들 수 있는 능력을 갖추고 있습니다. 애니메이션, 멀티미디어 요소, 대화형 기능 등 더 고급 기능을 익혀보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 파워포인트를 전문적으로 활용할 수 있는 능력을 갖추고 있습니다. 복잡한 개념을 명확하게 시각화하고 청중의 주의를 끌 수 있는 프레젠테이션을 제작할 수 있습니다."
    }
];

// 영어 결과 메시지 데이터
const resultMessagesEN = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Beginner Level: You need to develop basic presentation design skills. Focus on learning slide organization, visual design principles, and creating a cohesive presentation flow."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Basic Level: You understand presentation fundamentals but need more practice with visual design, data visualization, and storytelling techniques to create more engaging presentations."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Intermediate Level: You create good presentations with clear organization and appropriate visuals. Continue developing your skills in audience adaptation and advanced visual storytelling."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Advanced Level: You have excellent presentation design skills. Your presentations are well-designed, visually compelling, and effectively communicate information through strategic use of visuals and narrative."
    }
];

// 스페인어 결과 메시지 데이터
const resultMessagesES = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Nivel Principiante: Necesitas desarrollar habilidades básicas de diseño de presentaciones. Concéntrate en aprender organización de diapositivas, principios de diseño visual y crear un flujo cohesivo de presentación."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Nivel Básico: Entiendes los fundamentos de presentaciones pero necesitas más práctica con diseño visual, visualización de datos y técnicas narrativas para crear presentaciones más atractivas."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Nivel Intermedio: Creas buenas presentaciones con organización clara y elementos visuales apropiados. Continúa desarrollando tus habilidades en adaptación a la audiencia y narración visual avanzada."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Nivel Avanzado: Tienes excelentes habilidades de diseño de presentaciones. Tus presentaciones están bien diseñadas, son visualmente atractivas y comunican información efectivamente mediante uso estratégico de visuales y narrativa."
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
    const category = "파워포인트 활용 능력";
    
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
        return "실무에서 충분히 활용 가능한 고급 수준입니다.";
    } else if (score >= 31) {
        return "실무에서 활용 가능한 중급 수준입니다.";
    } else if (score >= 21) {
        return "기본적인 이해는 있으나 실전 활용이 부족한 기초 수준입니다.";
    } else {
        return "기본 지식이 부족한 초보 수준입니다.";
    }
}

// 강점 분석 반환
function getStrengthAnalysis(score) {
    if (score >= 36) {
        return "당신은 파워포인트의 고급 기능을 활용하여 전문적인 프레젠테이션을 제작할 수 있습니다. 복잡한 애니메이션, 마스터 슬라이드 맞춤 설정, 다양한 멀티미디어 요소 활용에 능숙합니다.";
    } else if (score >= 31) {
        return "당신은 파워포인트를 능숙하게 다룰 수 있으며, 효과적인 시각 자료와 기본 애니메이션을 활용한 프레젠테이션을 만들 수 있습니다. 특히 슬라이드 디자인과 구성에 강점이 있습니다.";
    } else if (score >= 21) {
        return "당신은 파워포인트의 기본 기능을 이해하고 간단한 프레젠테이션을 만들 수 있습니다. 특히 템플릿을 활용한 기본 슬라이드 작성과 텍스트, 이미지 삽입에 능숙합니다.";
    } else {
        return "당신은 파워포인트의 기초적인 인터페이스를 이해하고 있으며, 간단한 텍스트와 이미지를 포함한 슬라이드를 만들 수 있습니다.";
    }
}

// 약점 분석 반환
function getWeaknessAnalysis(score) {
    if (score >= 36) {
        return "고급 수준이지만, 더 전문적인 기능(매크로 활용, 외부 API 연동, 고급 멀티미디어 편집)을 익히고 다양한 환경에서의 프레젠테이션 호환성을 높이면 더욱 전문성을 높일 수 있습니다.";
    } else if (score >= 31) {
        return "고급 애니메이션 및 인터랙티브 요소 활용 부분에서 보완이 필요합니다. 또한 마스터 슬라이드를 활용한 일관된 디자인 관리와 복잡한 차트 제작 능력을 향상시키면 좋겠습니다.";
    } else if (score >= 21) {
        return "시각적 계층 구조 설계와 효과적인 애니메이션 활용 능력이 부족합니다. 또한 다양한 차트와 그래프를 활용한 데이터 시각화 기술을 익힐 필요가 있습니다.";
    } else {
        return "파워포인트의 기본 기능과 슬라이드 디자인 원칙에 대한 이해가 부족합니다. 효과적인 레이아웃 구성, 텍스트와 이미지 배치, 기본 서식 지정 등의 학습이 필요합니다.";
    }
}

// 학습 자료 반환
function getLearningResources(score) {
    let resources = '<ul>';
    
    if (score >= 36) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">고급 파워포인트 프레젠테이션 마스터</a></li>
            <li>추천 키워드: '파워포인트 고급 애니메이션', '인터랙티브 프레젠테이션 제작', '멀티미디어 고급 활용'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">전문가의 파워포인트 마스터 클래스</a></li>
        `;
    } else if (score >= 31) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">중급에서 고급 파워포인트로</a></li>
            <li>추천 키워드: '효과적인 슬라이드 마스터 활용', '고급 차트 제작', '스토리텔링 프레젠테이션'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">파워포인트 중급자를 위한 핵심 기술</a></li>
        `;
    } else if (score >= 21) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">효과적인 파워포인트 프레젠테이션 기초</a></li>
            <li>추천 키워드: '슬라이드 디자인 원칙', '기본 애니메이션 활용', '효과적인 차트 삽입'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">파워포인트 기초에서 실무까지</a></li>
        `;
    } else {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">파워포인트 입문 가이드</a></li>
            <li>추천 키워드: '파워포인트 기초 배우기', '슬라이드 작성법', '기본 레이아웃 이해'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">처음 시작하는 파워포인트</a></li>
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
        { label: '디자인', score: calculateCategoryScore(0, 2) },        // 문항 1-2
        { label: '데이터 시각화', score: calculateCategoryScore(2, 4) }, // 문항 3-4
        { label: '애니메이션', score: calculateCategoryScore(4, 7) },    // 문항 5-7
        { label: '고급 기능', score: calculateCategoryScore(7, 10) }     // 문항 8-10
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