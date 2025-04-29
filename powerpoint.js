// 설문 질문 데이터
const questions = [
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

// 결과 메시지 데이터
const resultMessages = [
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