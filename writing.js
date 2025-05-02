// 설문 질문 데이터
const questions = [
    {
        question: "단락과 문단을 적절히 구성하여 논리적인 글을 작성할 수 있다.",
        options: [
            { text: "완벽한 문단 구성 및 전개 가능", score: 4 },
            { text: "기본적인 단락 구성 가능", score: 3 },
            { text: "간단한 글만 작성 가능", score: 2 },
            { text: "논리적 구성 경험 없음", score: 1 }
        ]
    },
    {
        question: "다양한 종류의 문서(보고서, 제안서, 요약서 등)를 목적에 맞게 작성할 수 있다.",
        options: [
            { text: "모든 문서 유형 작성 능숙", score: 4 },
            { text: "기본 문서 유형 작성 가능", score: 3 },
            { text: "간단한 보고서만 작성해봄", score: 2 },
            { text: "특정 문서 작성 경험 없음", score: 1 }
        ]
    },
    {
        question: "맞춤법, 문법, 구두점을 정확하게 사용하여 글을 작성할 수 있다.",
        options: [
            { text: "완벽한 문법/맞춤법 구사", score: 4 },
            { text: "기본적인 문법 오류 교정 가능", score: 3 },
            { text: "기본 맞춤법만 확인 가능", score: 2 },
            { text: "문법/맞춤법 검토 경험 없음", score: 1 }
        ]
    },
    {
        question: "전문 용어와 업계 용어를 적절히 사용하여 전문성 있는 문서를 작성할 수 있다.",
        options: [
            { text: "전문 용어 정확히 활용 가능", score: 4 },
            { text: "기본 업계 용어 사용 가능", score: 3 },
            { text: "간단한 전문 용어만 알고 있음", score: 2 },
            { text: "전문 용어 활용 경험 없음", score: 1 }
        ]
    },
    {
        question: "표, 그래프, 이미지를 효과적으로 활용하여 정보를 시각화할 수 있다.",
        options: [
            { text: "복잡한 데이터도 시각화 가능", score: 4 },
            { text: "기본 표/그래프 활용 가능", score: 3 },
            { text: "간단한 이미지만 삽입해봄", score: 2 },
            { text: "시각화 요소 활용 경험 없음", score: 1 }
        ]
    },
    {
        question: "문서의 목적에 맞는 구조와 형식을 선택하여 적용할 수 있다.",
        options: [
            { text: "목적별 최적 구조 설계 가능", score: 4 },
            { text: "기본 문서 구조 적용 가능", score: 3 },
            { text: "템플릿 구조만 활용해봄", score: 2 },
            { text: "문서 구조화 경험 없음", score: 1 }
        ]
    },
    {
        question: "독자의 수준과 관심사를 고려하여 적절한 언어와 스타일로 작성할 수 있다.",
        options: [
            { text: "다양한 독자층 대응 가능", score: 4 },
            { text: "기본적인 독자 고려 가능", score: 3 },
            { text: "일반적 글쓰기만 가능", score: 2 },
            { text: "독자 맞춤 경험 없음", score: 1 }
        ]
    },
    {
        question: "복잡한 정보를 간결하고 명확하게 요약할 수 있다.",
        options: [
            { text: "복잡한 내용도 명확히 요약 가능", score: 4 },
            { text: "기본적인 요약 작성 가능", score: 3 },
            { text: "간단한 내용만 요약 가능", score: 2 },
            { text: "요약 작성 경험 없음", score: 1 }
        ]
    },
    {
        question: "인용, 참고문헌, 각주 등을 올바르게 사용하여 출처를 명시할 수 있다.",
        options: [
            { text: "다양한 인용 스타일 활용 가능", score: 4 },
            { text: "기본 참고문헌 작성 가능", score: 3 },
            { text: "간단한 출처만 표기해봄", score: 2 },
            { text: "출처 표기 경험 없음", score: 1 }
        ]
    },
    {
        question: "작성된 문서를 효과적으로 교정하고 편집할 수 있다.",
        options: [
            { text: "전문적 교정/편집 가능", score: 4 },
            { text: "기본적인 교정 수행 가능", score: 3 },
            { text: "단순 오타 수정만 가능", score: 2 },
            { text: "교정/편집 경험 없음", score: 1 }
        ]
    }
];

// 결과 메시지 데이터
const resultMessages = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 문서 작성의 기본적인 개념과 원칙에 대한 이해가 필요합니다. 문법과 맞춤법 기초부터 시작하여 단락 구성 방법을 학습해보세요."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 기본적인 문서 작성 능력을 갖추고 있지만, 더 복잡한 문서 작성에는 어려움이 있을 수 있습니다. 다양한 종류의 문서를 작성해보며 경험을 쌓아보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 다양한 유형의 문서를 작성할 수 있는 능력을 갖추고 있습니다. 더 전문적인 문서 작성 기술과 독자 중심의 글쓰기를 배워보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 전문적인 문서 작성 능력을 갖추고 있습니다. 복잡한 정보를 명확하게 전달하고 다양한 독자층을 고려한 글쓰기에 능숙합니다."
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
    
    // 언어에 따른 점수 표시
    const lang = localStorage.getItem('selectedLanguage') || 'ko';
    scoreDisplay.textContent = `${lang === 'ko' ? '총점: ' : lang === 'en' ? 'Total Score: ' : 'Puntuación Total: '}${score}`;
    resultMessageElement.textContent = message;
    
    surveyContainer.style.display = 'none';
    resultContainer.style.display = 'block';
}

// 능력 수준 반환
function getAbilityLevel(score) {
    if (score >= 36) {
        return "실무에서 충분히 활용 가능한 고급 수준입니다.";
    } else if (score >= 31) {
        return "실무에서 활용 가능한 중급 수준입니다.";
    } else if (score >= 21) {
        return "기본적인 이해는 있으나 실전 활용이 부족한 기초 수준입니다.";
    } else {
        return "기본 지식이 부족한 초보 수준입니다.";
    }
}

// 강점 분석 반환
function getStrengthAnalysis(score) {
    if (score >= 36) {
        return "당신은 다양한 유형의 글쓰기에 능숙하며, 목적과 독자에 맞는 효과적인 문서를 작성할 수 있습니다. 복잡한 정보를 명확하게 전달하고 독자의 관심을 유지하는 능력이 뛰어납니다.";
    } else if (score >= 31) {
        return "당신은 체계적인 구조로 글을 작성하고 다양한 독자층을 고려한 글쓰기에 능숙합니다. 전문적인 문서 작성에 필요한 기본 기술을 갖추고 있습니다.";
    } else if (score >= 21) {
        return "당신은 기본적인 문서 작성 능력을 갖추고 있으며, 간단한 문서나 이메일을 명확하게 작성할 수 있습니다. 특히 정형화된 형식의 글쓰기에 강점이 있습니다.";
    } else {
        return "당신은 기본적인 의사소통을 위한 글쓰기가 가능하며, 간단한 메모나 이메일을 작성할 수 있습니다.";
    }
}

// 약점 분석 반환
function getWeaknessAnalysis(score) {
    if (score >= 36) {
        return "고급 수준이지만, 특정 분야(기술 문서, 마케팅 카피 등)의 전문적인 글쓰기 기술을 더 발전시킬 수 있습니다.";
    } else if (score >= 31) {
        return "설득력 있는 글쓰기와 복잡한 정보의 명확한 전달 부분에서 보완이 필요합니다. 다양한 유형의 고급 문서 작성 기술을 더 개발하면 좋겠습니다.";
    } else if (score >= 21) {
        return "독자 중심의 글쓰기와 효과적인 문서 구조화 능력이 아직 부족합니다. 목적과 독자에 맞는 글쓰기 스타일을 발전시키고 더 다양한 문서 유형을 연습할 필요가 있습니다.";
    } else {
        return "기본적인 문법, 문장 구조, 단락 구성에 대한 이해가 부족합니다. 글쓰기의 기본 원칙과 효과적인 의사소통 방법에 대한 학습이 필요합니다.";
    }
}

// 학습 자료 반환
function getLearningResources(score) {
    let resources = '<ul>';
    
    if (score >= 36) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">전문 분야별 고급 글쓰기 강좌</a></li>
            <li>추천 키워드: '설득력 있는 카피라이팅', '스토리텔링 고급 기법', '분야별 전문 글쓰기'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">전문가의 고급 글쓰기 전략</a></li>
        `;
    } else if (score >= 31) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">효과적인 비즈니스 글쓰기 과정</a></li>
            <li>추천 키워드: '독자 중심 글쓰기', '설득력 있는 문서 작성', '효과적인 비즈니스 커뮤니케이션'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">비즈니스 문서 작성 마스터하기</a></li>
        `;
    } else if (score >= 21) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">체계적인 글쓰기의 기초</a></li>
            <li>추천 키워드: '글쓰기 구조', '효과적인 단락 작성법', '비즈니스 이메일 작성'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">직장인을 위한 글쓰기 기초</a></li>
        `;
    } else {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">글쓰기 기초 완성하기</a></li>
            <li>추천 키워드: '기본 문법', '문장 작성법', '맞춤법 규칙'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">누구나 할 수 있는 글쓰기 기초</a></li>
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
        { label: '문장력', score: calculateCategoryScore(0, 2) },        // 문항 1-2
        { label: '구조화', score: calculateCategoryScore(2, 4) },        // 문항 3-4
        { label: '가독성', score: calculateCategoryScore(4, 7) },        // 문항 5-7
        { label: '정확성', score: calculateCategoryScore(7, 10) }        // 문항 8-10
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