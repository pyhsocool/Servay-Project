// 설문 질문 데이터
const questions = [
    {
        question: "나는 내 생각과 아이디어를 명확하게 표현할 수 있다.",
        options: [
            { text: "매우 그렇다", score: 4 },
            { text: "대체로 그렇다", score: 3 },
            { text: "별로 그렇지 않다", score: 2 },
            { text: "전혀 그렇지 않다", score: 1 }
        ]
    },
    {
        question: "나는 상대방의 의견을 주의 깊게 듣고 이해하려고 노력한다.",
        options: [
            { text: "매우 그렇다", score: 4 },
            { text: "대체로 그렇다", score: 3 },
            { text: "별로 그렇지 않다", score: 2 },
            { text: "전혀 그렇지 않다", score: 1 }
        ]
    },
    {
        question: "나는 대화 중에 적절한 질문을 통해 대화를 발전시킬 수 있다.",
        options: [
            { text: "매우 그렇다", score: 4 },
            { text: "대체로 그렇다", score: 3 },
            { text: "별로 그렇지 않다", score: 2 },
            { text: "전혀 그렇지 않다", score: 1 }
        ]
    },
    {
        question: "나는 비언어적 표현(표정, 제스처)을 효과적으로 사용한다.",
        options: [
            { text: "매우 그렇다", score: 4 },
            { text: "대체로 그렇다", score: 3 },
            { text: "별로 그렇지 않다", score: 2 },
            { text: "전혀 그렇지 않다", score: 1 }
        ]
    },
    {
        question: "나는 상대방의 감정과 관점을 존중하며 대화한다.",
        options: [
            { text: "매우 그렇다", score: 4 },
            { text: "대체로 그렇다", score: 3 },
            { text: "별로 그렇지 않다", score: 2 },
            { text: "전혀 그렇지 않다", score: 1 }
        ]
    },
    {
        question: "나는 갈등 상황에서도 효과적으로 의사소통할 수 있다.",
        options: [
            { text: "매우 그렇다", score: 4 },
            { text: "대체로 그렇다", score: 3 },
            { text: "별로 그렇지 않다", score: 2 },
            { text: "전혀 그렇지 않다", score: 1 }
        ]
    },
    {
        question: "나는 복잡한 정보를 상대방이 이해하기 쉽게 전달할 수 있다.",
        options: [
            { text: "매우 그렇다", score: 4 },
            { text: "대체로 그렇다", score: 3 },
            { text: "별로 그렇지 않다", score: 2 },
            { text: "전혀 그렇지 않다", score: 1 }
        ]
    },
    {
        question: "나는 다양한 상황과 대상에 맞게 의사소통 방식을 조절할 수 있다.",
        options: [
            { text: "매우 그렇다", score: 4 },
            { text: "대체로 그렇다", score: 3 },
            { text: "별로 그렇지 않다", score: 2 },
            { text: "전혀 그렇지 않다", score: 1 }
        ]
    },
    {
        question: "나는 피드백을 긍정적으로 받아들이고 개선에 활용한다.",
        options: [
            { text: "매우 그렇다", score: 4 },
            { text: "대체로 그렇다", score: 3 },
            { text: "별로 그렇지 않다", score: 2 },
            { text: "전혀 그렇지 않다", score: 1 }
        ]
    },
    {
        question: "나는 프레젠테이션이나 공개 발표 상황에서 자신있게 말할 수 있다.",
        options: [
            { text: "매우 그렇다", score: 4 },
            { text: "대체로 그렇다", score: 3 },
            { text: "별로 그렇지 않다", score: 2 },
            { text: "전혀 그렇지 않다", score: 1 }
        ]
    }
];

// 결과 메시지 데이터
const resultMessages = [
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