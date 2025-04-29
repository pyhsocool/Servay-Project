// 설문 질문 데이터
const questions = [
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

// 결과 메시지 데이터
const resultMessages = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 엑셀의 기본 기능에 대한 이해가 필요합니다. 기초적인 기능부터 익혀나가는 것을 권장합니다."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 엑셀의 기본 기능을 이해하고 있지만, 심화 기능 학습이 필요합니다. 필터, 함수 등 자주 사용하는 기능을 더 익혀보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 엑셀을 능숙하게 다룰 수 있습니다. 피벗 테이블, 고급 함수 등을 학습하여 능력을 향상시켜 보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 엑셀을 전문적으로 활용할 수 있는 수준입니다. 매크로, 고급 데이터 분석 등 더 심화된 기능을 익히면 전문가 수준에 도달할 수 있습니다."
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

// 앱 초기화
init(); 