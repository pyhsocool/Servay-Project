// 설문 질문 데이터
const questions = [
    {
        question: "업무나 과제의 우선순위를 효과적으로 설정할 수 있다.",
        options: [
            { text: "항상 중요도/긴급도로 분류 가능", score: 4 },
            { text: "대체로 우선순위 설정 가능", score: 3 },
            { text: "간단한 일정만 정리 가능", score: 2 },
            { text: "우선순위 설정에 어려움", score: 1 }
        ]
    },
    {
        question: "마감 시간을 준수하고 일정에 맞춰 업무를 완료할 수 있다.",
        options: [
            { text: "모든 마감일 준수 및 선제적 완료", score: 4 },
            { text: "대부분 마감일 준수 가능", score: 3 },
            { text: "단순 업무만 기한 내 완료 가능", score: 2 },
            { text: "마감일 준수에 어려움", score: 1 }
        ]
    },
    {
        question: "일일, 주간, 월간 계획을 수립하고 이행할 수 있다.",
        options: [
            { text: "상세 계획 수립 및 철저히 실행", score: 4 },
            { text: "기본적인 계획 수립/실행 가능", score: 3 },
            { text: "간단한 일정만 관리 가능", score: 2 },
            { text: "계획 수립/이행 어려움", score: 1 }
        ]
    },
    {
        question: "시간 낭비 요소를 식별하고 제거할 수 있다.",
        options: [
            { text: "모든 낭비 요소 식별/개선 가능", score: 4 },
            { text: "주요 방해 요소 관리 가능", score: 3 },
            { text: "일부 낭비 요소만 인식 가능", score: 2 },
            { text: "낭비 요소 관리 어려움", score: 1 }
        ]
    },
    {
        question: "다수의 업무나 프로젝트를 동시에 관리할 수 있다.",
        options: [
            { text: "복잡한 다중 업무도 효율적 관리", score: 4 },
            { text: "몇 가지 업무 동시 처리 가능", score: 3 },
            { text: "2-3개 간단한 업무만 관리 가능", score: 2 },
            { text: "여러 업무 동시 관리 어려움", score: 1 }
        ]
    },
    {
        question: "업무량과 소요 시간을 정확하게 예측할 수 있다.",
        options: [
            { text: "복잡한 업무도 정확히 예측 가능", score: 4 },
            { text: "대부분 업무 시간 예측 가능", score: 3 },
            { text: "반복적인 업무만 예측 가능", score: 2 },
            { text: "업무 시간 예측에 어려움", score: 1 }
        ]
    },
    {
        question: "시간 관리 도구와 앱을 효과적으로 활용할 수 있다.",
        options: [
            { text: "다양한 도구 능숙하게 활용", score: 4 },
            { text: "기본적인 도구 활용 가능", score: 3 },
            { text: "간단한 알림/캘린더만 사용", score: 2 },
            { text: "관리 도구 활용 경험 적음", score: 1 }
        ]
    },
    {
        question: "업무 시간과 휴식 시간을 균형있게 관리할 수 있다.",
        options: [
            { text: "완벽한 업무/휴식 균형 유지", score: 4 },
            { text: "대체로 균형 유지 가능", score: 3 },
            { text: "기본적인 휴식만 계획 가능", score: 2 },
            { text: "균형 유지에 어려움", score: 1 }
        ]
    },
    {
        question: "불필요한 회의나 업무를 줄이고 효율성을 높일 수 있다.",
        options: [
            { text: "모든 업무 과정 최적화 가능", score: 4 },
            { text: "주요 비효율 요소 개선 가능", score: 3 },
            { text: "명확한 낭비만 식별 가능", score: 2 },
            { text: "효율성 개선에 어려움", score: 1 }
        ]
    },
    {
        question: "예상치 못한 상황에도 유연하게 일정을 조정할 수 있다.",
        options: [
            { text: "모든 상황에 신속 대응/조정 가능", score: 4 },
            { text: "대부분 상황 적절히 대응 가능", score: 3 },
            { text: "간단한 변경만 조정 가능", score: 2 },
            { text: "일정 변경에 어려움", score: 1 }
        ]
    }
];

// 결과 메시지 데이터
const resultMessages = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 시간 관리에 어려움을 겪고 있습니다. 일일 계획을 세우고 우선순위를 설정하는 기본적인 방법부터 시작해보세요. 작은 업무부터 시간을 측정하며 관리하는 연습이 도움이 됩니다."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 기본적인 시간 관리 능력은 있지만, 복잡한 상황이나 다수 업무 관리에 어려움이 있습니다. 주간 계획을 세우고 시간 낭비 요소를 식별하여 제거하는 연습을 해보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 효과적인 시간 관리 능력을 갖추고 있습니다. 다양한 업무를 동시에 처리할 수 있으며 대부분의 마감일을 준수합니다. 더 전문적인 시간 관리 기법과 도구를 익혀 효율성을 높여보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 뛰어난 시간 관리 능력을 갖추고 있습니다. 복잡한 업무와 프로젝트도 효율적으로 관리하고, 예상치 못한 상황에도 유연하게 대응할 수 있습니다. 이제 다른 사람들의 시간 관리를 돕고 팀의 효율성을 높이는 데 기여해보세요."
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