// 설문 질문 데이터
const questions = [
    {
        question: "주요 디지털 광고 플랫폼(구글, 페이스북, 인스타그램 등)의 특성과 장단점을 이해하고 있다.",
        options: [
            { text: "모든 플랫폼 특성 완벽히 이해", score: 4 },
            { text: "주요 플랫폼 특성 기본 이해", score: 3 },
            { text: "일부 플랫폼만 사용해봄", score: 2 },
            { text: "플랫폼 차이 이해 부족", score: 1 }
        ]
    },
    {
        question: "타겟 오디언스를 세분화하고 적절한 타겟팅 전략을 수립할 수 있다.",
        options: [
            { text: "정교한 세그먼트 전략 수립 가능", score: 4 },
            { text: "기본적인 타겟팅 설정 가능", score: 3 },
            { text: "단순 인구통계 타겟팅만 가능", score: 2 },
            { text: "타겟팅 설정 경험 부족", score: 1 }
        ]
    },
    {
        question: "광고 예산을 효과적으로 분배하고 입찰 전략을 수립할 수 있다.",
        options: [
            { text: "ROAS 기반 최적화 전략 수립 가능", score: 4 },
            { text: "기본적인 예산 배분 가능", score: 3 },
            { text: "단순 예산 설정만 해봄", score: 2 },
            { text: "예산 관리 경험 부족", score: 1 }
        ]
    },
    {
        question: "키워드 리서치를 통해 효과적인 검색 광고 전략을 수립할 수 있다.",
        options: [
            { text: "고급 키워드 분석/전략 수립 가능", score: 4 },
            { text: "기본적인 키워드 선정 가능", score: 3 },
            { text: "일반적인 키워드만 활용 가능", score: 2 },
            { text: "키워드 리서치 경험 부족", score: 1 }
        ]
    },
    {
        question: "광고 소재(이미지, 텍스트, 영상)를 기획하고 개선할 수 있다.",
        options: [
            { text: "다양한 크리에이티브 최적화 가능", score: 4 },
            { text: "기본적인 소재 제작/개선 가능", score: 3 },
            { text: "템플릿 기반 소재만 사용 가능", score: 2 },
            { text: "광고 소재 기획 경험 부족", score: 1 }
        ]
    },
    {
        question: "A/B 테스트를 설계하고 결과를 분석하여 광고 성과를 개선할 수 있다.",
        options: [
            { text: "체계적 테스트/분석 능숙", score: 4 },
            { text: "기본적인 A/B 테스트 수행 가능", score: 3 },
            { text: "간단한 비교 테스트만 해봄", score: 2 },
            { text: "A/B 테스트 경험 부족", score: 1 }
        ]
    },
    {
        question: "광고 성과 지표(CTR, CPC, CPA, ROAS 등)를 이해하고 분석할 수 있다.",
        options: [
            { text: "모든 지표 분석/인사이트 도출 가능", score: 4 },
            { text: "주요 지표 기본 분석 가능", score: 3 },
            { text: "기본 지표만 확인 가능", score: 2 },
            { text: "성과 지표 이해 부족", score: 1 }
        ]
    },
    {
        question: "리마케팅/리타겟팅 전략을 수립하고 실행할 수 있다.",
        options: [
            { text: "정교한 리타겟팅 전략 구현 가능", score: 4 },
            { text: "기본적인 리마케팅 설정 가능", score: 3 },
            { text: "단순 리타겟팅만 설정해봄", score: 2 },
            { text: "리마케팅 경험 부족", score: 1 }
        ]
    },
    {
        question: "추적 코드와 전환 픽셀을 설치하고 활용할 수 있다.",
        options: [
            { text: "고급 태그 관리/구현 가능", score: 4 },
            { text: "기본적인 픽셀 설치 가능", score: 3 },
            { text: "가이드에 따라 설치만 가능", score: 2 },
            { text: "추적 코드 설치 경험 부족", score: 1 }
        ]
    },
    {
        question: "광고 성과 리포트를 작성하고 인사이트를 도출할 수 있다.",
        options: [
            { text: "심층 분석/전략적 인사이트 제시 가능", score: 4 },
            { text: "기본적인 리포트 작성 가능", score: 3 },
            { text: "단순 데이터 취합만 가능", score: 2 },
            { text: "리포팅 경험 부족", score: 1 }
        ]
    }
];

// 결과 메시지 데이터
const resultMessages = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 디지털 광고의 기본 개념에 대한 이해가 필요합니다. 주요 광고 플랫폼의 기초를 배우고, 간단한 캠페인 운영부터 시작해보세요."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 기본적인 디지털 광고 운영 능력을 갖추고 있지만, 보다 효과적인 전략 수립과 성과 분석에 대한 학습이 필요합니다. 다양한 타겟팅 방법과 A/B 테스트를 시도해보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 여러 광고 플랫폼에서 캠페인을 효과적으로 운영할 수 있습니다. 보다 정교한 타겟팅과 입찰 전략, 데이터 기반 의사결정 능력을 키워보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 디지털 광고에 대한 전문적인 지식과 실무 능력을 갖추고 있습니다. 복잡한 캠페인도 효과적으로 기획하고 최적화할 수 있으며, 심층적인 데이터 분석을 통해 인사이트를 도출할 수 있습니다."
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