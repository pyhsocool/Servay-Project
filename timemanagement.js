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
    const category = "시간 관리 능력";
    
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
        return "효율적인 시간 관리 시스템을 갖춘 고급 수준입니다.";
    } else if (score >= 31) {
        return "계획적인 시간 관리가 가능한 중급 수준입니다.";
    } else if (score >= 21) {
        return "기본적인 시간 관리 기술을 갖춘 기초 수준입니다.";
    } else {
        return "시간 관리에 어려움을 겪는 초보 수준입니다.";
    }
}

// 강점 분석 반환
function getStrengthAnalysis(score) {
    if (score >= 36) {
        return "당신은 체계적인 시간 관리 시스템을 갖추고 있으며, 우선순위 설정, 목표 분해, 일정 계획 등의 기술을 능숙하게 활용합니다. 업무와 개인 생활의 균형을 유지하며, 효율적으로 시간을 활용하여 목표를 달성하는 능력이 뛰어납니다.";
    } else if (score >= 31) {
        return "당신은 계획적으로 시간을 관리하며, 중요한 일에 우선순위를 두고 집중할 수 있습니다. To-do 리스트와 같은 도구를 활용하여 일정을 관리하고, 대체로 마감 시간을 준수합니다.";
    } else if (score >= 21) {
        return "당신은 기본적인 시간 관리 기술을 이해하고 있으며, 간단한 일정 계획을 세우고 따를 수 있습니다. 중요한 일에 대해 인지하고 있으나, 때때로 우선순위 설정에 어려움을 겪을 수 있습니다.";
    } else {
        return "당신은 시간의 중요성을 인식하고 있으며, 일부 기본적인 시간 관리 도구나 방법을 알고 있습니다. 계획을 세우려는 의지가 있지만, 일관되게 실행하는 데 어려움을 겪습니다.";
    }
}

// 약점 분석 반환
function getWeaknessAnalysis(score) {
    if (score >= 36) {
        return "이미 뛰어난 시간 관리 능력을 갖추고 있지만, 때로는 지나치게 계획에 의존하여 유연성이 부족하거나 과도한 일정을 계획하여 스트레스를 경험할 수 있습니다. 계획과 유연성 사이의 균형을 더 향상시킬 수 있습니다.";
    } else if (score >= 31) {
        return "예상치 못한 일이 발생했을 때 일정 조정에 어려움을 겪을 수 있으며, 장기적인 목표와 단기적인 과제 사이의 균형을 맞추는 데 개선이 필요합니다. 또한 일과 휴식의 균형을 더 효과적으로 관리할 필요가 있습니다.";
    } else if (score >= 21) {
        return "업무 추정 시간 설정이 부정확하고, 일관된 시간 관리 시스템을 유지하는 데 어려움이 있습니다. 또한 미루는 습관과 주의 산만함을 효과적으로 관리하는 기술이 부족할 수 있습니다.";
    } else {
        return "계획 부재, 우선순위 설정 어려움, 미루는 습관, 주의 산만함 등이 시간 관리의 주요 약점입니다. 일관된 시간 관리 시스템을 개발하고 실천하는 기본 습관을 형성할 필요가 있습니다.";
    }
}

// 학습 자료 반환
function getLearningResources(score) {
    let resources = '<ul>';
    
    if (score >= 36) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">고급 시간 관리와 생산성 최적화</a></li>
            <li>추천 키워드: '딥 워크 기법', '에너지 관리 전략', '유연한 계획 수립'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">전문가의 시간 관리 마스터 클래스</a></li>
        `;
    } else if (score >= 31) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">효과적인 일정 관리와 우선순위 설정</a></li>
            <li>추천 키워드: '시간 블록킹 기법', '업무 배치 최적화', '장단기 목표 연계'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">일과 삶의 균형을 위한 시간 관리</a></li>
        `;
    } else if (score >= 21) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">시간 관리 기본 시스템 구축하기</a></li>
            <li>추천 키워드: '효과적인 to-do 리스트', '집중력 향상 기법', '습관 형성'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">일상에서 실천하는 시간 관리 기법</a></li>
        `;
    } else {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">시간 관리 기초 다지기</a></li>
            <li>추천 키워드: '우선순위 설정', '미루기 극복하기', '계획 세우기'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">시간 관리 초보자를 위한 가이드</a></li>
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
        { label: '계획 능력', score: calculateCategoryScore(0, 3) },    // 문항 1-3
        { label: '우선순위', score: calculateCategoryScore(3, 5) },     // 문항 4-5
        { label: '집중력', score: calculateCategoryScore(5, 8) },       // 문항 6-8
        { label: '실행력', score: calculateCategoryScore(8, 10) }       // 문항 9-10
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
document.addEventListener('DOMContentLoaded', function() {
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
    
    // 공통 언어 설정 적용
    if (typeof applyStoredLanguageToPage === 'function') {
        applyStoredLanguageToPage();
    }
    
    // 초기화
    init();
}); 