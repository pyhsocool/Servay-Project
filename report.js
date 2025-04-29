// 설문 질문 데이터
const questions = [
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

// 결과 메시지 데이터
const resultMessages = [
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