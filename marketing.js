// 설문 질문 데이터
const questions = [
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

// 결과 메시지 데이터
const resultMessages = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 마케팅의 기본 개념에 대한 이해를 높일 필요가 있습니다. 마케팅 기초 서적이나 온라인 강의를 통해 핵심 개념부터 학습해보세요."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 마케팅의 기본 개념은 이해하고 있지만, 실무 적용 경험을 쌓을 필요가 있습니다. 소규모 마케팅 프로젝트에 참여하거나 디지털 마케팅 채널을 직접 활용해보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 마케팅 개념을 이해하고 기본적인 실무 경험을 갖추고 있습니다. 더 다양한 마케팅 채널과 전략을 경험하고 데이터 분석 능력을 키워보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 마케팅에 대한 깊은 이해와 실무 경험을 갖추고 있습니다. 최신 트렌드를 지속적으로 학습하고 통합적인 마케팅 전략을 수립하는 능력을 더욱 발전시켜보세요."
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
    
    scoreDisplay.textContent = `총점: ${score}점`;
    resultMessageElement.textContent = message;
    
    surveyContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

// 메인 페이지로 이동
function goToMainPage() {
    window.location.href = 'index.html';
}

// 이벤트 리스너
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
submitBtn.addEventListener('click', showResult);
restartBtn.addEventListener('click', init);
backToMainBtn.addEventListener('click', goToMainPage);

// 페이지 로드 시 초기화
init(); 