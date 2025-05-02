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
    const category = "마케팅 기초 이해도";
    
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
        return "마케팅 원리와 전략을 깊이 이해하는 고급 수준입니다.";
    } else if (score >= 31) {
        return "마케팅 기본 개념과 실무 적용이 가능한 중급 수준입니다.";
    } else if (score >= 21) {
        return "마케팅 기초 원리를 이해하는 기초 수준입니다.";
    } else {
        return "마케팅에 대한 이해가 부족한 입문 수준입니다.";
    }
}

// 강점 분석 반환
function getStrengthAnalysis(score) {
    if (score >= 36) {
        return "당신은 마케팅의 핵심 원리와 다양한 전략적 접근법을 깊이 이해하고 있습니다. 마케팅 믹스의 요소들을 전략적으로 활용할 수 있으며, 소비자 행동과 시장 분석에 기반한 마케팅 의사결정을 내릴 수 있는 능력을 갖추고 있습니다.";
    } else if (score >= 31) {
        return "당신은 마케팅 기본 개념과 주요 전략을 이해하고 있습니다. 타겟팅, 포지셔닝, 프로모션 전략 등 마케팅 활동의 중요 요소를 파악하고 있으며, 실무에 적용할 수 있는 기본적인 지식을 갖추고 있습니다.";
    } else if (score >= 21) {
        return "당신은 마케팅의 기초적인 개념과 원리를 이해하고 있습니다. 4P, 시장 세분화, 기본적인 프로모션 방법 등 마케팅의 기본 요소에 대한 지식을 갖추고 있습니다.";
    } else {
        return "당신은 마케팅에 대한 기초적인 인식을 가지고 있으며, 가장 기본적인 마케팅 용어와 개념에 대해 알고 있습니다. 마케팅의 역할과 중요성을 이해하는 수준입니다.";
    }
}

// 약점 분석 반환
function getWeaknessAnalysis(score) {
    if (score >= 36) {
        return "고급 수준의 마케팅 이해도를 갖추고 있지만, 더욱 심화된 데이터 분석 기반 마케팅, 신기술을 활용한 최신 마케팅 트렌드, 글로벌 마케팅 전략 등의 영역에서 전문성을 더 발전시킬 수 있습니다.";
    } else if (score >= 31) {
        return "마케팅 ROI 측정, 통합 마케팅 커뮤니케이션 전략 수립, 브랜드 가치 구축 등의 영역에서 더 깊은 이해와 실무 적용 능력을 개발할 필요가 있습니다.";
    } else if (score >= 21) {
        return "마케팅 전략 수립과 실행, 소비자 행동 분석, 마케팅 성과 측정 등의 영역에서 지식과 경험을 확장할 필요가 있습니다. 이론적 지식을 실무에 적용하는 능력을 키우는 것이 중요합니다.";
    } else {
        return "마케팅의 기본 원리와 핵심 개념에 대한 체계적인 이해가 필요합니다. 4P(제품, 가격, 유통, 촉진)의 기본 개념, 시장 세분화, 타겟팅, 포지셔닝 등 마케팅의 기초를 다지는 것이 중요합니다.";
    }
}

// 학습 자료 반환
function getLearningResources(score) {
    let resources = '<ul>';
    
    if (score >= 36) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">고급 마케팅 전략과 분석</a></li>
            <li>추천 키워드: '데이터 기반 마케팅', '고객 생애 가치 최적화', '브랜드 에쿼티 관리'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">마케팅 리더를 위한 전략적 사고</a></li>
        `;
    } else if (score >= 31) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">마케팅 전략 심화 과정</a></li>
            <li>추천 키워드: '통합 마케팅 커뮤니케이션', '마케팅 ROI 분석', '소비자 인사이트 발굴'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">효과적인 마케팅 전략 수립하기</a></li>
        `;
    } else if (score >= 21) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">마케팅 핵심 역량 강화</a></li>
            <li>추천 키워드: '마케팅 믹스 최적화', '타겟 시장 분석', '마케팅 계획 수립'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">실무에 바로 적용하는 마케팅 기법</a></li>
        `;
    } else {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">마케팅 기초 이해하기</a></li>
            <li>추천 키워드: '마케팅 4P', '시장 세분화', '기본 마케팅 용어'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">마케팅 입문자를 위한 기초 강의</a></li>
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
        { label: '기본 이론', score: calculateCategoryScore(0, 3) },     // 문항 1-3
        { label: '전략 이해', score: calculateCategoryScore(3, 5) },     // 문항 4-5
        { label: '분석 능력', score: calculateCategoryScore(5, 8) },     // 문항 6-8
        { label: '트렌드 이해', score: calculateCategoryScore(8, 10) }   // 문항 9-10
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

// 페이지 로드 시 초기화
init(); 