// 설문 질문 데이터
const questions = [
    {
        question: "영어로 기본적인 의사소통을 할 수 있다.",
        options: [
            { text: "유창하게 가능", score: 4 },
            { text: "일상 대화 가능", score: 3 },
            { text: "간단한 표현만 가능", score: 2 },
            { text: "거의 불가능", score: 1 }
        ]
    },
    {
        question: "중국어로 기본적인 의사소통을 할 수 있다.",
        options: [
            { text: "유창하게 가능", score: 4 },
            { text: "일상 대화 가능", score: 3 },
            { text: "간단한 표현만 가능", score: 2 },
            { text: "거의 불가능", score: 1 }
        ]
    },
    {
        question: "일본어로 기본적인 의사소통을 할 수 있다.",
        options: [
            { text: "유창하게 가능", score: 4 },
            { text: "일상 대화 가능", score: 3 },
            { text: "간단한 표현만 가능", score: 2 },
            { text: "거의 불가능", score: 1 }
        ]
    },
    {
        question: "스페인어로 기본적인 의사소통을 할 수 있다.",
        options: [
            { text: "유창하게 가능", score: 4 },
            { text: "일상 대화 가능", score: 3 },
            { text: "간단한 표현만 가능", score: 2 },
            { text: "거의 불가능", score: 1 }
        ]
    },
    {
        question: "인도네시아어로 기본적인 의사소통을 할 수 있다.",
        options: [
            { text: "유창하게 가능", score: 4 },
            { text: "일상 대화 가능", score: 3 },
            { text: "간단한 표현만 가능", score: 2 },
            { text: "거의 불가능", score: 1 }
        ]
    },
    {
        question: "아랍어로 기본적인 의사소통을 할 수 있다.",
        options: [
            { text: "유창하게 가능", score: 4 },
            { text: "일상 대화 가능", score: 3 },
            { text: "간단한 표현만 가능", score: 2 },
            { text: "거의 불가능", score: 1 }
        ]
    },
    {
        question: "독일어로 기본적인 의사소통을 할 수 있다.",
        options: [
            { text: "유창하게 가능", score: 4 },
            { text: "일상 대화 가능", score: 3 },
            { text: "간단한 표현만 가능", score: 2 },
            { text: "거의 불가능", score: 1 }
        ]
    },
    {
        question: "프랑스어로 기본적인 의사소통을 할 수 있다.",
        options: [
            { text: "유창하게 가능", score: 4 },
            { text: "일상 대화 가능", score: 3 },
            { text: "간단한 표현만 가능", score: 2 },
            { text: "거의 불가능", score: 1 }
        ]
    },
    {
        question: "러시아어로 기본적인 의사소통을 할 수 있다.",
        options: [
            { text: "유창하게 가능", score: 4 },
            { text: "일상 대화 가능", score: 3 },
            { text: "간단한 표현만 가능", score: 2 },
            { text: "거의 불가능", score: 1 }
        ]
    },
    {
        question: "베트남어로 기본적인 의사소통을 할 수 있다.",
        options: [
            { text: "유창하게 가능", score: 4 },
            { text: "일상 대화 가능", score: 3 },
            { text: "간단한 표현만 가능", score: 2 },
            { text: "거의 불가능", score: 1 }
        ]
    }
];

// 결과 메시지 데이터
const resultMessages = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초급 수준: 대부분의 외국어에 익숙하지 않은 수준입니다. 관심 있는 언어 1-2개부터 기초 표현을 익혀보세요."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "중하급 수준: 몇 가지 언어로 기본적인 의사소통이 가능합니다. 더 다양한 상황에서 활용할 수 있도록 연습해보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중상급 수준: 여러 언어로 의사소통이 가능한 수준입니다. 유창성을 높이고 전문적인 표현도 배워보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 다양한 언어를 능숙하게 구사할 수 있는 뛰어난 언어 능력을 갖추고 있습니다. 문화적 이해와 함께 더 깊이 있는 의사소통을 시도해보세요."
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