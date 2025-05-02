// 설문 질문 데이터
const questions = [
    {
        question: "나는 내 생각과 아이디어를 명확하게 표현할 수 있다.",
        options: [
            { text: "항상 명확하게 표현한다", score: 4 },
            { text: "대부분 명확하게 표현한다", score: 3 },
            { text: "가끔 어려움을 느낀다", score: 2 },
            { text: "자주 표현에 어려움을 겪는다", score: 1 }
        ]
    },
    {
        question: "나는 상대방의 의견을 주의 깊게 듣고 이해하려고 노력한다.",
        options: [
            { text: "항상 집중해서 경청한다", score: 4 },
            { text: "대체로 경청하는 편이다", score: 3 },
            { text: "때때로 집중하지 못한다", score: 2 },
            { text: "상대 의견보다 내 의견을 우선한다", score: 1 }
        ]
    },
    {
        question: "나는 대화 중에 적절한 질문을 통해 대화를 발전시킬 수 있다.",
        options: [
            { text: "항상 적절한 질문으로 대화를 이끈다", score: 4 },
            { text: "자주 좋은 질문을 한다", score: 3 },
            { text: "가끔 질문을 하는 편이다", score: 2 },
            { text: "거의 질문하지 않는다", score: 1 }
        ]
    },
    {
        question: "나는 비언어적 표현(표정, 제스처)을 효과적으로 사용한다.",
        options: [
            { text: "표정과 제스처를 매우 효과적으로 활용한다", score: 4 },
            { text: "적절한 비언어적 표현을 사용한다", score: 3 },
            { text: "표정이나 제스처가 부자연스럽다", score: 2 },
            { text: "비언어적 표현을 거의 사용하지 않는다", score: 1 }
        ]
    },
    {
        question: "나는 상대방의 감정과 관점을 존중하며 대화한다.",
        options: [
            { text: "항상 상대의 입장을 배려한다", score: 4 },
            { text: "대체로 상대 감정을 고려한다", score: 3 },
            { text: "때때로 상대 감정을 고려하지 못한다", score: 2 },
            { text: "주로 내 관점에서만 말한다", score: 1 }
        ]
    },
    {
        question: "나는 갈등 상황에서도 효과적으로 의사소통할 수 있다.",
        options: [
            { text: "갈등 상황에서도 침착하게 소통한다", score: 4 },
            { text: "대체로 갈등을 적절히 관리한다", score: 3 },
            { text: "갈등 상황에서 감정 조절이 어렵다", score: 2 },
            { text: "갈등 상황을 회피하는 편이다", score: 1 }
        ]
    },
    {
        question: "나는 복잡한 정보를 상대방이 이해하기 쉽게 전달할 수 있다.",
        options: [
            { text: "항상 쉽고 명확하게 전달한다", score: 4 },
            { text: "대체로 이해하기 쉽게 설명한다", score: 3 },
            { text: "복잡한 내용 전달에 어려움을 느낀다", score: 2 },
            { text: "전문 용어를 많이 사용해 소통이 어렵다", score: 1 }
        ]
    },
    {
        question: "나는 다양한 상황과 대상에 맞게 의사소통 방식을 조절할 수 있다.",
        options: [
            { text: "상황과 대상에 완벽히 맞춰 소통한다", score: 4 },
            { text: "대체로 상황에 맞게 조절한다", score: 3 },
            { text: "특정 대상과만 잘 소통한다", score: 2 },
            { text: "한 가지 방식으로만 소통한다", score: 1 }
        ]
    },
    {
        question: "나는 피드백을 긍정적으로 받아들이고 개선에 활용한다.",
        options: [
            { text: "항상 피드백을 환영하고 적극 반영한다", score: 4 },
            { text: "대체로 피드백을 수용한다", score: 3 },
            { text: "때때로 피드백에 방어적이 된다", score: 2 },
            { text: "피드백을 부정적으로 받아들인다", score: 1 }
        ]
    },
    {
        question: "나는 프레젠테이션이나 공개 발표 상황에서 자신있게 말할 수 있다.",
        options: [
            { text: "발표 상황에서 매우 자신감 있다", score: 4 },
            { text: "대체로 발표를 잘 수행한다", score: 3 },
            { text: "발표 시 긴장하고 불안해한다", score: 2 },
            { text: "가능하면 발표를 피한다", score: 1 }
        ]
    }
];

// 영어 질문 데이터
const questionsEN = [
    {
        question: "I can express my thoughts and ideas clearly.",
        options: [
            { text: "I always express myself clearly", score: 4 },
            { text: "I mostly express myself clearly", score: 3 },
            { text: "I sometimes find it difficult", score: 2 },
            { text: "I often struggle to express myself", score: 1 }
        ]
    },
    {
        question: "I listen attentively to others' opinions and try to understand them.",
        options: [
            { text: "I always listen attentively", score: 4 },
            { text: "I mostly listen attentively", score: 3 },
            { text: "I sometimes find it difficult to listen", score: 2 },
            { text: "I rarely listen to others' opinions", score: 1 }
        ]
    },
    {
        question: "I can ask appropriate questions to develop a conversation.",
        options: [
            { text: "I always ask appropriate questions to lead the conversation", score: 4 },
            { text: "I often ask good questions", score: 3 },
            { text: "I sometimes ask questions", score: 2 },
            { text: "I rarely ask questions", score: 1 }
        ]
    },
    {
        question: "I use nonverbal expressions (facial expressions, gestures) effectively.",
        options: [
            { text: "I use facial expressions and gestures very effectively", score: 4 },
            { text: "I use appropriate nonverbal expressions", score: 3 },
            { text: "My facial expressions or gestures are unnatural", score: 2 },
            { text: "I hardly use nonverbal expressions", score: 1 }
        ]
    },
    {
        question: "I communicate respectfully and empathetically with others.",
        options: [
            { text: "I always consider others' perspectives", score: 4 },
            { text: "I mostly consider others' feelings", score: 3 },
            { text: "I sometimes don't consider others' feelings", score: 2 },
            { text: "I mostly talk from my perspective", score: 1 }
        ]
    },
    {
        question: "I can communicate effectively in conflict situations.",
        options: [
            { text: "I communicate effectively in conflict situations", score: 4 },
            { text: "I mostly manage conflicts appropriately", score: 3 },
            { text: "It's difficult for me to control my emotions in conflict situations", score: 2 },
            { text: "I tend to avoid conflict", score: 1 }
        ]
    },
    {
        question: "I can convey complex information to others in a way they can understand easily.",
        options: [
            { text: "I always convey information clearly and easily", score: 4 },
            { text: "I mostly explain in a way others can understand", score: 3 },
            { text: "I sometimes find it difficult to convey complex information", score: 2 },
            { text: "I use too many specialized terms, making communication difficult", score: 1 }
        ]
    },
    {
        question: "I can adjust my communication style to suit various situations and people.",
        options: [
            { text: "I communicate perfectly with various situations and people", score: 4 },
            { text: "I mostly adjust to situations", score: 3 },
            { text: "I communicate well only with specific people", score: 2 },
            { text: "I communicate only in one way", score: 1 }
        ]
    },
    {
        question: "I welcome and use feedback positively to improve.",
        options: [
            { text: "I always welcome and reflect feedback positively", score: 4 },
            { text: "I mostly accept feedback", score: 3 },
            { text: "I sometimes become defensive in response to feedback", score: 2 },
            { text: "I reject feedback negatively", score: 1 }
        ]
    },
    {
        question: "I can speak confidently in presentation or public speaking situations.",
        options: [
            { text: "I have very high confidence in presentation situations", score: 4 },
            { text: "I mostly perform well in presentations", score: 3 },
            { text: "I get nervous and anxious in presentations", score: 2 },
            { text: "I try to avoid presentations if possible", score: 1 }
        ]
    }
];

// 스페인어 질문 데이터
const questionsES = [
    {
        question: "Puedo expresar mis pensamientos e ideas con claridad.",
        options: [
            { text: "Siempre me expreso con claridad", score: 4 },
            { text: "La mayoría de las veces me expreso con claridad", score: 3 },
            { text: "A veces me resulta difícil", score: 2 },
            { text: "A menudo tengo dificultades para expresarme", score: 1 }
        ]
    },
    {
        question: "Escucho atentamente las opiniones de los demás y trato de entenderlas.",
        options: [
            { text: "Siempre escucho atentamente", score: 4 },
            { text: "La mayoría de las veces escucho atentamente", score: 3 },
            { text: "A veces es difícil escuchar", score: 2 },
            { text: "Rara vez escucho las opiniones de los demás", score: 1 }
        ]
    },
    {
        question: "Puedo preguntar preguntas adecuadas para desarrollar una conversación.",
        options: [
            { text: "Siempre pregunto preguntas adecuadas para liderar la conversación", score: 4 },
            { text: "A menudo pregunto buenas preguntas", score: 3 },
            { text: "A veces pregunto", score: 2 },
            { text: "Rara vez pregunto", score: 1 }
        ]
    },
    {
        question: "Uso expresiones no verbales (expresiones faciales, gestos) de manera efectiva.",
        options: [
            { text: "Uso expresiones faciales y gestos muy efectivamente", score: 4 },
            { text: "Uso expresiones no verbales adecuadas", score: 3 },
            { text: "Mis expresiones faciales o gestos son poco naturales", score: 2 },
            { text: "Rara vez uso expresiones no verbales", score: 1 }
        ]
    },
    {
        question: "Comunico respetuosamente y empatéticamente con los demás.",
        options: [
            { text: "Siempre considero las perspectivas de los demás", score: 4 },
            { text: "La mayoría de las veces considero los sentimientos de los demás", score: 3 },
            { text: "A veces no considero los sentimientos de los demás", score: 2 },
            { text: "La mayoría de las veces hablo desde mi perspectiva", score: 1 }
        ]
    },
    {
        question: "Puedo comunicarse efectivamente en situaciones de conflicto.",
        options: [
            { text: "Puedo comunicarse efectivamente en situaciones de conflicto", score: 4 },
            { text: "La mayoría de las veces manejo el conflicto adecuadamente", score: 3 },
            { text: "Es difícil para mí controlar mis emociones en situaciones de conflicto", score: 2 },
            { text: "Tiendo a evitar el conflicto", score: 1 }
        ]
    },
    {
        question: "Puedo transmitir información compleja a otros de manera que puedan entenderla fácilmente.",
        options: [
            { text: "Siempre transmito información de manera clara y fácil", score: 4 },
            { text: "La mayoría de las veces la explico de manera que otros puedan entender", score: 3 },
            { text: "A veces es difícil transmitir información compleja", score: 2 },
            { text: "Uso demasiados términos técnicos, lo que dificulta la comunicación", score: 1 }
        ]
    },
    {
        question: "Puedo ajustar mi estilo de comunicación para adaptarse a diversas situaciones y personas.",
        options: [
            { text: "Comunico perfectamente con diversas situaciones y personas", score: 4 },
            { text: "La mayoría de las veces lo ajusto", score: 3 },
            { text: "Comunico bien solo con personas específicas", score: 2 },
            { text: "Comunico solo de una manera", score: 1 }
        ]
    },
    {
        question: "Bienvenido y uso el feedback positivamente para mejorar.",
        options: [
            { text: "Siempre doy la bienvenida y reflejo el feedback positivamente", score: 4 },
            { text: "La mayoría de las veces acepto el feedback", score: 3 },
            { text: "A veces me vuelvo defensivo en respuesta al feedback", score: 2 },
            { text: "Rechazo el feedback negativamente", score: 1 }
        ]
    },
    {
        question: "Puedo hablar con confianza en situaciones de presentación o discurso público.",
        options: [
            { text: "Tengo mucha confianza en situaciones de presentación", score: 4 },
            { text: "La mayoría de las veces me desempeño bien en presentaciones", score: 3 },
            { text: "Tengo nervios y ansiedad en presentaciones", score: 2 },
            { text: "Intento evitar presentaciones si es posible", score: 1 }
        ]
    }
];

// 현재 활성화된 질문 데이터
let activeQuestions = questions;

// 결과 메시지 데이터
const resultMessages = [
    // 한국어 결과 메시지
    {
        minScore: 10,
        maxScore: 20,
        message: "초급 수준: 의사소통 능력을 개선할 필요가 있습니다. 적극적 경청과 명확한 표현을 연습하고, 피드백을 구하며 지속적으로 소통 방식을 개선해보세요."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "중급 수준: 기본적인 의사소통 능력을 갖추고 있습니다. 감정 인식과 공감 능력을 더 개발하고, 다양한 상황에서의 의사소통 전략을 연습해보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중상급 수준: 좋은 의사소통 능력을 갖추고 있습니다. 복잡한 상황에서의 협상 기술과 갈등 해결 능력을 더 발전시켜보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 뛰어난 의사소통 능력을 보유하고 있습니다. 다른 사람들의 의사소통 향상을 돕고, 다양한 그룹 간의 소통을 촉진하는 중재자 역할을 해보세요."
    }
];

// 영어 결과 메시지
const resultMessagesEN = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Beginner Level: You need to improve your communication skills. Practice active listening and clear expression, seek feedback, and continuously improve your communication style."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Intermediate Level: You have basic communication skills. Develop your emotional awareness and empathy, and practice communication strategies in various situations."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Advanced Level: You have good communication skills. Develop negotiation techniques and conflict resolution skills in complex situations."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Expert Level: You have excellent communication skills. Help others improve their communication, and act as a mediator to promote communication among different groups."
    }
];

// 스페인어 결과 메시지
const resultMessagesES = [
    {
        minScore: 10,
        maxScore: 20,
        message: "Nivel Principiante: Necesitas mejorar tus habilidades de comunicación. Practica la escucha activa y la expresión clara, busca retroalimentación y mejora continuamente tu estilo de comunicación."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "Nivel Intermedio: Tienes habilidades básicas de comunicación. Desarrolla tu conocimiento y empatía emocional, y practica estrategias de comunicación en diversas situaciones."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "Nivel Avanzado: Tienes habilidades buenas de comunicación. Desarrolla técnicas de negociación y habilidades de resolución de conflictos en situaciones complejas."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "Nivel Experto: Tienes excelentes habilidades de comunicación. Ayuda a otros a mejorar su comunicación y actúa como mediador para promover la comunicación entre diferentes grupos."
    }
];

// 현재 활성화된 결과 메시지
let activeResultMessages = resultMessages;

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

// 초기화
function init() {
    // 언어 설정 확인
    checkLanguage();
    
    currentQuestionIndex = 0;
    answers = new Array(activeQuestions.length).fill(null);
    showQuestion(currentQuestionIndex);
    surveyContainer.style.display = 'block';
    resultContainer.style.display = 'none';
}

// 언어 설정 확인 및 적용
function checkLanguage() {
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
    
    if (savedLanguage === 'en') {
        activeQuestions = questionsEN;
        activeResultMessages = resultMessagesEN;
    } else if (savedLanguage === 'es') {
        activeQuestions = questionsES;
        activeResultMessages = resultMessagesES;
    } else {
        activeQuestions = questions;
        activeResultMessages = resultMessages;
    }
}

// 질문 표시
function showQuestion(index) {
    const question = activeQuestions[index];
    
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
    
    const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;
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
    if (currentQuestionIndex < activeQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// 점수 계산
function calculateScore() {
    let totalScore = 0;
    
    answers.forEach((answerIndex, questionIndex) => {
        if (answerIndex !== null) {
            totalScore += activeQuestions[questionIndex].options[answerIndex].score;
        }
    });
    
    return totalScore;
}

// 결과 메시지 가져오기
function getResultMessage(score) {
    for (const result of activeResultMessages) {
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
    
    // 언어에 따른 점수 표시
    const lang = localStorage.getItem('selectedLanguage') || 'ko';
    scoreDisplay.textContent = `${lang === 'ko' ? '총점: ' : lang === 'en' ? 'Total Score: ' : 'Puntuación Total: '}${score}`;
    resultMessageElement.textContent = message;
    
    surveyContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

// 메인 페이지로 이동
function goToMainPage() {
    const lang = localStorage.getItem('selectedLanguage') || 'ko';
    window.location.href = `index.html?lang=${lang}`;
}

// 페이지 로드 시
document.addEventListener('DOMContentLoaded', function() {
    // 메인 JS에서 정의한 언어 설정 적용 함수 호출
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