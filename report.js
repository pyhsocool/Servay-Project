// 설문 질문 데이터
const questionsKO = [
    {
        question: "업무 보고서를 논리적인 구조로 작성할 수 있다.",
        options: [
            { text: "다양한 형태의 보고서를 체계적으로 작성한 경험이 많다", score: 4 },
            { text: "기본적인 업무 보고서를 작성한 경험이 있다", score: 3 },
            { text: "간단한 보고 양식만 작성해 본 적이 있다", score: 2 },
            { text: "보고서 작성 경험이 거의 없다", score: 1 }
        ]
    },
    {
        question: "데이터를 정확하게 분석하고 보고서에 효과적으로 인용할 수 있다.",
        options: [
            { text: "복잡한 데이터를 분석하고 명확하게 보고서에 표현한 경험이 많다", score: 4 },
            { text: "기본적인 데이터 분석과 인용을 할 수 있다", score: 3 },
            { text: "간단한 통계 자료를 인용한 적이 있다", score: 2 },
            { text: "데이터 분석 및 인용 경험이 없다", score: 1 }
        ]
    },
    {
        question: "보고서의 목적과 대상에 맞는 적절한 용어와 문체를 선택할 수 있다.",
        options: [
            { text: "다양한 독자층을 고려한 맞춤형 보고서 작성 경험이 많다", score: 4 },
            { text: "목적에 맞게 공식/비공식 문체를 구분하여 사용할 수 있다", score: 3 },
            { text: "기본적인 업무 문서 형식만 알고 있다", score: 2 },
            { text: "보고서 작성 형식에 익숙하지 않다", score: 1 }
        ]
    },
    {
        question: "비즈니스 상황을 분석하고 해결책을 제시하는 보고서를 작성할 수 있다.",
        options: [
            { text: "문제 상황을 심층 분석하고 창의적 해결책을 제안한 경험이 많다", score: 4 },
            { text: "기본적인 문제 분석과 해결책 제안 보고서를 작성해본 적이 있다", score: 3 },
            { text: "간단한 제안 문서만 작성해본 적이 있다", score: 2 },
            { text: "분석 및 제안 보고서 작성 경험이 없다", score: 1 }
        ]
    },
    {
        question: "효과적인 요약문(Executive Summary)을 작성할 수 있다.",
        options: [
            { text: "다양한 분야의 복잡한 내용을 명확히 요약한 경험이 많다", score: 4 },
            { text: "중요 내용을 간략하게 요약하여 작성할 수 있다", score: 3 },
            { text: "기본적인 요약문만 작성해본 적이 있다", score: 2 },
            { text: "요약문 작성 경험이 없다", score: 1 }
        ]
    },
    {
        question: "그래프, 차트, 표 등을 활용하여 데이터를 시각적으로 효과적으로 표현할 수 있다.",
        options: [
            { text: "복잡한 데이터를 다양한 시각화 방법으로 표현한 경험이 많다", score: 4 },
            { text: "기본적인 차트와 표를 활용하여 데이터를 표현할 수 있다", score: 3 },
            { text: "간단한 표만 보고서에 삽입해 본 적이 있다", score: 2 },
            { text: "데이터 시각화 경험이 없다", score: 1 }
        ]
    },
    {
        question: "프로젝트 진행 상황이나 성과를 명확하게 보고할 수 있다.",
        options: [
            { text: "복잡한 프로젝트의 진행 상황을 체계적으로 보고한 경험이 많다", score: 4 },
            { text: "프로젝트 진행 상황을 정리하여 보고한 경험이 있다", score: 3 },
            { text: "간단한 업무 진행 상황만 보고해본 적이 있다", score: 2 },
            { text: "프로젝트 보고 경험이 없다", score: 1 }
        ]
    },
    {
        question: "실수 없이 정확한 문법과 맞춤법으로 전문적인 문서를 작성할 수 있다.",
        options: [
            { text: "전문 문서 교정 및 편집 능력을 갖추고 있다", score: 4 },
            { text: "기본적인 문법과 맞춤법에 주의하며 문서를 작성할 수 있다", score: 3 },
            { text: "간단한 맞춤법 검사기를 활용해 본 적이 있다", score: 2 },
            { text: "문법과 맞춤법에 자신이 없다", score: 1 }
        ]
    },
    {
        question: "조사 결과와 연구 내용을 체계적으로 정리하여 보고서로 작성할 수 있다.",
        options: [
            { text: "대규모 조사 및 연구 결과를 전문적으로 정리한 경험이 많다", score: 4 },
            { text: "기본적인 조사 결과를 정리하여 보고서로 작성할 수 있다", score: 3 },
            { text: "간단한 설문조사 결과만 문서화해본 적이 있다", score: 2 },
            { text: "조사 결과 정리 경험이 없다", score: 1 }
        ]
    },
    {
        question: "정확한 인용과 참고문헌을 포함한 학술적/전문적 보고서를 작성할 수 있다.",
        options: [
            { text: "학술 논문 수준의 전문 보고서 작성 경험이 많다", score: 4 },
            { text: "기본적인 인용 규칙을 알고 참고문헌을 작성할 수 있다", score: 3 },
            { text: "간단한 출처 표기만 해본 적이 있다", score: 2 },
            { text: "인용 및 참고문헌 작성 경험이 없다", score: 1 }
        ]
    }
];

// 영어 설문 질문 데이터
const questionsEN = [
    {
        question: "I can write effective executive summaries that capture the key points of longer reports.",
        options: [
            { text: "I can create concise, impactful executive summaries", score: 4 },
            { text: "I can write basic summaries of main points", score: 3 },
            { text: "I can only summarize simple information", score: 2 },
            { text: "I have no experience writing executive summaries", score: 1 }
        ]
    },
    {
        question: "I can organize and structure reports logically with appropriate headings and sections.",
        options: [
            { text: "I can create optimal hierarchical structures for complex reports", score: 4 },
            { text: "I can organize basic reports with appropriate sections", score: 3 },
            { text: "I can use basic templates for organization", score: 2 },
            { text: "I have difficulty organizing information in reports", score: 1 }
        ]
    },
    {
        question: "I can incorporate and interpret data/statistics effectively in reports.",
        options: [
            { text: "I can analyze complex data and present meaningful interpretations", score: 4 },
            { text: "I can present basic data with simple interpretations", score: 3 },
            { text: "I can include data but struggle with interpretation", score: 2 },
            { text: "I avoid using data in my reports", score: 1 }
        ]
    },
    {
        question: "I can create appropriate data visualizations (charts, graphs, tables) for reports.",
        options: [
            { text: "I can select and create optimal visualizations for complex data", score: 4 },
            { text: "I can create basic charts and tables for data", score: 3 },
            { text: "I can use pre-designed templates for visualizations", score: 2 },
            { text: "I don't know how to create data visualizations", score: 1 }
        ]
    },
    {
        question: "I can write clear and actionable recommendations based on report findings.",
        options: [
            { text: "I can develop strategic, well-supported recommendations", score: 4 },
            { text: "I can suggest basic actions based on findings", score: 3 },
            { text: "I sometimes include simple recommendations", score: 2 },
            { text: "I rarely include recommendations in reports", score: 1 }
        ]
    },
    {
        question: "I can adapt report content and language for different audiences (technical, executive, general).",
        options: [
            { text: "I can expertly tailor reports for any audience", score: 4 },
            { text: "I can adjust basic terminology for different readers", score: 3 },
            { text: "I write in the same style regardless of audience", score: 2 },
            { text: "I don't consider audience when writing reports", score: 1 }
        ]
    },
    {
        question: "I can properly cite sources and create bibliographies using appropriate formatting styles.",
        options: [
            { text: "I can use multiple citation styles correctly", score: 4 },
            { text: "I can create basic citations and references", score: 3 },
            { text: "I include sources but without proper formatting", score: 2 },
            { text: "I rarely cite sources in my reports", score: 1 }
        ]
    },
    {
        question: "I can use appendices appropriately to include supplementary information without cluttering the main report.",
        options: [
            { text: "I strategically organize supplementary material in appendices", score: 4 },
            { text: "I sometimes use appendices for additional information", score: 3 },
            { text: "I rarely use appendices in my reports", score: 2 },
            { text: "I include all information in the main body", score: 1 }
        ]
    },
    {
        question: "I can write concise, informative abstracts that summarize the entire report.",
        options: [
            { text: "I can write comprehensive yet concise abstracts", score: 4 },
            { text: "I can write basic summaries covering main points", score: 3 },
            { text: "My abstracts often miss key information", score: 2 },
            { text: "I rarely write abstracts for my reports", score: 1 }
        ]
    },
    {
        question: "I can effectively edit and proofread reports to ensure accuracy, clarity, and professionalism.",
        options: [
            { text: "I can thoroughly edit for content, style, and errors", score: 4 },
            { text: "I can check for basic errors and clarity issues", score: 3 },
            { text: "I only look for spelling and grammar mistakes", score: 2 },
            { text: "I rarely review my reports before submitting", score: 1 }
        ]
    }
];

// 스페인어 설문 질문 데이터
const questionsES = [
    {
        question: "Puedo escribir resúmenes ejecutivos efectivos que capturan los puntos clave de informes más extensos.",
        options: [
            { text: "Puedo crear resúmenes ejecutivos concisos e impactantes", score: 4 },
            { text: "Puedo escribir resúmenes básicos de puntos principales", score: 3 },
            { text: "Solo puedo resumir información simple", score: 2 },
            { text: "No tengo experiencia escribiendo resúmenes ejecutivos", score: 1 }
        ]
    },
    {
        question: "Puedo organizar y estructurar informes lógicamente con títulos y secciones apropiados.",
        options: [
            { text: "Puedo crear estructuras jerárquicas óptimas para informes complejos", score: 4 },
            { text: "Puedo organizar informes básicos con secciones apropiadas", score: 3 },
            { text: "Puedo usar plantillas básicas para organización", score: 2 },
            { text: "Tengo dificultad para organizar información en informes", score: 1 }
        ]
    },
    {
        question: "Puedo incorporar e interpretar datos/estadísticas efectivamente en informes.",
        options: [
            { text: "Puedo analizar datos complejos y presentar interpretaciones significativas", score: 4 },
            { text: "Puedo presentar datos básicos con interpretaciones simples", score: 3 },
            { text: "Puedo incluir datos pero tengo dificultades con la interpretación", score: 2 },
            { text: "Evito usar datos en mis informes", score: 1 }
        ]
    },
    {
        question: "Puedo crear visualizaciones de datos apropiadas (gráficos, tablas) para informes.",
        options: [
            { text: "Puedo seleccionar y crear visualizaciones óptimas para datos complejos", score: 4 },
            { text: "Puedo crear gráficos y tablas básicos para datos", score: 3 },
            { text: "Puedo usar plantillas prediseñadas para visualizaciones", score: 2 },
            { text: "No sé cómo crear visualizaciones de datos", score: 1 }
        ]
    },
    {
        question: "Puedo escribir recomendaciones claras y accionables basadas en hallazgos del informe.",
        options: [
            { text: "Puedo desarrollar recomendaciones estratégicas bien fundamentadas", score: 4 },
            { text: "Puedo sugerir acciones básicas basadas en hallazgos", score: 3 },
            { text: "A veces incluyo recomendaciones simples", score: 2 },
            { text: "Raramente incluyo recomendaciones en informes", score: 1 }
        ]
    },
    {
        question: "Puedo adaptar el contenido y lenguaje del informe para diferentes audiencias (técnica, ejecutiva, general).",
        options: [
            { text: "Puedo adaptar expertamente informes para cualquier audiencia", score: 4 },
            { text: "Puedo ajustar terminología básica para diferentes lectores", score: 3 },
            { text: "Escribo en el mismo estilo independientemente de la audiencia", score: 2 },
            { text: "No considero la audiencia al escribir informes", score: 1 }
        ]
    },
    {
        question: "Puedo citar fuentes correctamente y crear bibliografías usando estilos de formato apropiados.",
        options: [
            { text: "Puedo usar múltiples estilos de citación correctamente", score: 4 },
            { text: "Puedo crear citas y referencias básicas", score: 3 },
            { text: "Incluyo fuentes pero sin formato adecuado", score: 2 },
            { text: "Raramente cito fuentes en mis informes", score: 1 }
        ]
    },
    {
        question: "Puedo usar apéndices apropiadamente para incluir información suplementaria sin sobrecargar el informe principal.",
        options: [
            { text: "Organizo estratégicamente material suplementario en apéndices", score: 4 },
            { text: "A veces uso apéndices para información adicional", score: 3 },
            { text: "Raramente uso apéndices en mis informes", score: 2 },
            { text: "Incluyo toda la información en el cuerpo principal", score: 1 }
        ]
    },
    {
        question: "Puedo escribir resúmenes concisos e informativos que resumen el informe completo.",
        options: [
            { text: "Puedo escribir resúmenes completos pero concisos", score: 4 },
            { text: "Puedo escribir resúmenes básicos cubriendo puntos principales", score: 3 },
            { text: "Mis resúmenes a menudo omiten información clave", score: 2 },
            { text: "Raramente escribo resúmenes para mis informes", score: 1 }
        ]
    },
    {
        question: "Puedo editar y revisar informes efectivamente para asegurar precisión, claridad y profesionalismo.",
        options: [
            { text: "Puedo editar minuciosamente contenido, estilo y errores", score: 4 },
            { text: "Puedo verificar errores básicos y problemas de claridad", score: 3 },
            { text: "Solo busco errores de ortografía y gramática", score: 2 },
            { text: "Raramente reviso mis informes antes de enviarlos", score: 1 }
        ]
    }
];

// 결과 메시지 데이터
const resultMessagesKO = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 기본적인 보고서 작성 기술을 개발할 필요가 있습니다. 실무에서 자주 사용되는 보고서 형식과 구조를 학습하고, 간단한 업무 보고부터 시작해보세요."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 기본적인 보고서는 작성할 수 있지만, 더 전문적인 문서 작성 능력을 개발할 필요가 있습니다. 데이터 시각화와 체계적인 구조화에 집중해보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 다양한 유형의 보고서를 효과적으로 작성할 수 있는 능력을 갖추고 있습니다. 더 복잡한 주제와 다양한 독자층을 위한 보고서 작성 기술을 발전시켜보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 전문적인 보고서 작성 능력을 갖추고 있습니다. 복잡한 정보를 명확하게 전달하고 설득력 있는 논리 구조로 다양한 독자층에게 효과적으로 정보를 전달할 수 있습니다."
    }
];

// 영어 결과 메시지 데이터
const resultMessagesEN = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Beginner Level: You need to develop basic report writing skills. Focus on learning fundamental structure, data presentation, and clear communication of findings."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Basic Level: You understand report basics but need more practice with report organization, data analysis, and tailoring content for different audiences."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Intermediate Level: You have good report writing skills. Continue developing your ability to interpret complex data and make strategic recommendations."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Advanced Level: You have excellent report writing skills. Your reports are well-structured, contain meaningful data analysis, and offer actionable insights."
    }
];

// 스페인어 결과 메시지 데이터
const resultMessagesES = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Nivel Principiante: Necesitas desarrollar habilidades básicas de redacción de informes. Concéntrate en aprender estructura fundamental, presentación de datos y comunicación clara de hallazgos."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Nivel Básico: Entiendes lo básico de los informes pero necesitas más práctica con organización, análisis de datos y adaptación de contenido para diferentes audiencias."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Nivel Intermedio: Tienes buenas habilidades de redacción de informes. Continúa desarrollando tu capacidad para interpretar datos complejos y hacer recomendaciones estratégicas."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Nivel Avanzado: Tienes excelentes habilidades de redacción de informes. Tus informes están bien estructurados, contienen análisis de datos significativos y ofrecen perspectivas accionables."
    }
];

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

// 현재 사용 중인 질문과 결과 메시지
let questions = questionsKO;
let resultMessages = resultMessagesKO;

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
    const category = "문서/보고서 작성 능력";
    
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
        return "당신은 문서 구성 및 전달력에서 높은 능력을 보입니다. 이는 전문적인 보고서 작성, 복잡한 정보 전달, 설득력 있는 커뮤니케이션 역량에서 좋은 점수를 받을 수 있는 기반이 됩니다.";
    } else if (score >= 31) {
        return "당신은 기본적인 문서 구조화 및 내용 전달에 능숙합니다. 다양한 유형의 보고서를 효과적으로 작성할 수 있는 능력을 갖추고 있으며, 이는 업무 커뮤니케이션에 큰 도움이 됩니다.";
    } else if (score >= 21) {
        return "당신은 간단한 업무 보고서 작성에 필요한 기본 지식을 갖추고 있습니다. 특히 정형화된 양식 내에서의 문서 작성에 강점이 있습니다.";
    } else {
        return "기본적인 문서 작성 지식을 갖추고 있으며, 간단한 보고 양식 작성 경험이 있습니다.";
    }
}

// 약점 분석 반환
function getWeaknessAnalysis(score) {
    if (score >= 36) {
        return "고급 수준이지만, 더 전문적인 분야별 보고서(예: 투자 제안서, 학술 논문 등) 작성 능력을 개발하면 더욱 전문성을 높일 수 있습니다.";
    } else if (score >= 31) {
        return "데이터 시각화 및 분석 결과 표현 부분에서 보완이 필요합니다. 복잡한 정보를 효과적으로 시각화하고 설득력 있게 제시하는 능력을 더 개발하면 좋겠습니다.";
    } else if (score >= 21) {
        return "보고서의 논리적 구조 및 데이터 분석 능력이 아직 부족한 상태입니다. 체계적인 정보 구성과 데이터 기반 의사 결정을 위한 문서 작성 능력을 키울 필요가 있습니다.";
    } else {
        return "기본적인 업무 문서 작성 지식과 경험이 부족합니다. 보고서 작성의 기본 구조, 형식, 논리적 흐름에 대한 이해를 높이는 것이 중요합니다.";
    }
}

// 학습 자료 반환
function getLearningResources(score) {
    let resources = '<ul>';
    
    if (score >= 36) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">산업별 전문 보고서 작성법 강좌</a></li>
            <li>추천 키워드: '전문 분야별 보고서 작성', '하버드 비즈니스 리뷰 케이스 스터디', '투자 제안서 작성법'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">전문가의 고급 보고서 작성 기법</a></li>
        `;
    } else if (score >= 31) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">데이터 시각화 및 효과적인 보고서 작성법</a></li>
            <li>추천 키워드: '데이터 스토리텔링', '비즈니스 인사이트 도출', '효과적인 그래프 활용법'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">비즈니스 리포트 작성 마스터하기</a></li>
        `;
    } else if (score >= 21) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">비즈니스 보고서 구조화 및 작성법</a></li>
            <li>추천 키워드: '업무 보고서 작성법', '데이터 분석 기초', '논리적 구조 만들기'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">업무 보고서 기초부터 실전까지</a></li>
        `;
    } else {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">기초 비즈니스 문서 작성법</a></li>
            <li>추천 키워드: '기본 업무 보고서', '문서 작성 기초', '비즈니스 글쓰기'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">직장인을 위한 기초 문서 작성법</a></li>
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
        { label: '문서 구조화', score: calculateCategoryScore(0, 3) },   // 문항 1-3
        { label: '데이터 활용', score: calculateCategoryScore(3, 6) },   // 문항 4-6
        { label: '전문성', score: calculateCategoryScore(6, 8) },       // 문항 7-8
        { label: '가독성', score: calculateCategoryScore(8, 10) }        // 문항 9-10
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