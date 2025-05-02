// 설문 질문 데이터
const questions = [
    {
        question: "구글 드라이브로 문서, 시트, 슬라이드를 자유롭게 다룰 수 있다.",
        options: [
            { text: "여러 사람과 실시간 문서 공동 작업 가능", score: 4 },
            { text: "기본 기능 사용, 공유 설정 가능", score: 3 },
            { text: "파일 업로드와 다운로드만 가능", score: 2 },
            { text: "사용해본 적 없음", score: 1 }
        ]
    },
    {
        question: "Microsoft Teams나 Slack과 같은 메신저 도구를 통해 효과적으로 의사소통할 수 있다.",
        options: [
            { text: "채널 관리와 화상회의 모두 능숙함", score: 4 },
            { text: "메시지와 파일 공유 기능 사용 가능", score: 3 },
            { text: "기본 채팅 기능만 사용 가능", score: 2 },
            { text: "사용해본 적 없음", score: 1 }
        ]
    },
    {
        question: "Trello, Asana 또는 Jira와 같은 프로젝트 관리 도구를 사용하여 작업을 추적 및 관리할 수 있다.",
        options: [
            { text: "워크플로우 설계와 자동화 규칙 설정 가능", score: 4 },
            { text: "태스크 할당 및 마감일 설정 가능", score: 3 },
            { text: "기본 카드 생성과 이동만 가능", score: 2 },
            { text: "사용해본 적 없음", score: 1 }
        ]
    },
    {
        question: "Zoom, Google Meet 또는 Microsoft Teams를 사용하여 화상 회의를 주최하고 참여할 수 있다.",
        options: [
            { text: "회의 녹화, 화면공유 및 소회의실 관리 가능", score: 4 },
            { text: "회의 예약과 화면공유 가능", score: 3 },
            { text: "참여만 가능, 기본 기능만 사용", score: 2 },
            { text: "사용해본 적 없음", score: 1 }
        ]
    },
    {
        question: "Figma, Miro와 같은 협업 디자인 도구를 사용하여 아이디어를 시각화하고 공유할 수 있다.",
        options: [
            { text: "실시간 공동 작업 및 고급 기능 활용 가능", score: 4 },
            { text: "템플릿 활용 및 기본 디자인 작업 가능", score: 3 },
            { text: "피드백 제공 및 간단한 편집만 가능", score: 2 },
            { text: "사용해본 적 없음", score: 1 }
        ]
    },
    {
        question: "Git과 같은 버전 관리 시스템을 사용하여 코드나 문서 변경사항을 추적하고 협업할 수 있다.",
        options: [
            { text: "브랜치 관리 및 충돌 해결 능숙함", score: 4 },
            { text: "기본 커밋, 푸시 및 풀 요청 생성 가능", score: 3 },
            { text: "간단한 변경사항 커밋만 가능", score: 2 },
            { text: "사용해본 적 없음", score: 1 }
        ]
    },
    {
        question: "Confluence, Notion과 같은 지식 관리 도구를 사용하여 팀 문서를 작성하고 관리할 수 있다.",
        options: [
            { text: "위계적 문서 구조 설계 및 템플릿 제작 가능", score: 4 },
            { text: "문서 작성 및 다양한 내장 기능 활용 가능", score: 3 },
            { text: "기본 페이지 생성 및 편집만 가능", score: 2 },
            { text: "사용해본 적 없음", score: 1 }
        ]
    },
    {
        question: "OneDrive, Dropbox와 같은 클라우드 저장소를 사용하여 파일을 공유하고 동기화할 수 있다.",
        options: [
            { text: "폴더 구조 설계 및 접근 권한 관리 가능", score: 4 },
            { text: "파일 공유 링크 생성 및 동기화 설정 가능", score: 3 },
            { text: "기본 업로드 및 다운로드만 가능", score: 2 },
            { text: "사용해본 적 없음", score: 1 }
        ]
    },
    {
        question: "Calendly, Google Calendar 등을 사용하여 팀 일정을 관리하고 회의를 예약할 수 있다.",
        options: [
            { text: "공유 캘린더 관리 및 예약 시스템 설정 가능", score: 4 },
            { text: "회의 예약 및 알림 설정 가능", score: 3 },
            { text: "기본 일정 확인 및 참여 응답만 가능", score: 2 },
            { text: "사용해본 적 없음", score: 1 }
        ]
    },
    {
        question: "Zapier, IFTTT와 같은 자동화 도구를 사용하여 협업 워크플로우를 간소화할 수 있다.",
        options: [
            { text: "복잡한 다중 앱 워크플로우 설계 가능", score: 4 },
            { text: "기본 앱 간 자동화 설정 가능", score: 3 },
            { text: "템플릿 활용한 간단한 자동화만 가능", score: 2 },
            { text: "사용해본 적 없음", score: 1 }
        ]
    }
];

// 결과 메시지 데이터
const resultMessages = [
    {
        minScore: 10,
        maxScore: 20,
        message: "초보 수준: 협업 도구에 대한 기본적인 이해가 필요합니다. 가장 많이 사용되는 도구(구글 드라이브, Slack, Zoom 등)부터 익혀보는 것을 권장합니다."
    },
    {
        minScore: 21,
        maxScore: 30,
        message: "기초 수준: 기본적인 협업 도구는 사용할 수 있지만, 더 다양한, 복잡한 도구에 대한 경험이 필요합니다. 팀 프로젝트에서 새로운 협업 도구를 적극적으로 활용해보세요."
    },
    {
        minScore: 31,
        maxScore: 35,
        message: "중급 수준: 여러 협업 도구를 능숙하게 사용할 수 있습니다. 자동화 도구나 API 연동 등 더 고급 기능을 학습하여 협업 효율성을 높여보세요."
    },
    {
        minScore: 36,
        maxScore: 40,
        message: "고급 수준: 다양한 협업 도구를 전문적으로 활용할 수 있습니다. 팀에서 협업 도구 활용 방법을 공유하거나 워크플로우 개선을 주도해볼 수 있습니다."
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
        return "다양한 협업 도구를 능숙하게 활용할 수 있는 고급 수준입니다.";
    } else if (score >= 31) {
        return "여러 협업 도구를 효과적으로 사용할 수 있는 중급 수준입니다.";
    } else if (score >= 21) {
        return "기본적인 협업 도구는 사용할 수 있는 기초 수준입니다.";
    } else {
        return "협업 도구 활용 경험이 부족한 초보 수준입니다.";
    }
}

// 강점 분석 반환
function getStrengthAnalysis(score) {
    if (score >= 36) {
        return "당신은 다양한 협업 도구를 전문적으로 활용할 수 있습니다. 클라우드 문서 작업, 프로젝트 관리, 화상 회의, 버전 관리, 지식 관리 등 주요 협업 도구를 능숙하게 다루며 팀 생산성을 향상시킬 수 있습니다.";
    } else if (score >= 31) {
        return "당신은 여러 협업 도구를 효과적으로 활용할 수 있습니다. 특히 문서 공유, 메신저, 화상 회의 등의 기본적인 협업 도구를 능숙하게 다루며 팀 작업에 적극적으로 참여할 수 있습니다.";
    } else if (score >= 21) {
        return "당신은 기본적인 협업 도구를 사용할 수 있습니다. 구글 드라이브, 메신저, 화상 회의 도구 등 널리 사용되는 도구의 기본 기능을 이해하고 있습니다.";
    } else {
        return "당신은 일부 기본적인 협업 도구에 대한 경험이 있으며, 간단한 파일 공유나 메시지 교환과 같은 기초적인 기능을 사용할 수 있습니다.";
    }
}

// 약점 분석 반환
function getWeaknessAnalysis(score) {
    if (score >= 36) {
        return "이미 다양한 협업 도구를 잘 활용하고 있지만, 자동화 도구나 API 연동 등을 통한 워크플로우 최적화나 팀 전체의 협업 시스템 설계 능력을 더 발전시킬 수 있습니다.";
    } else if (score >= 31) {
        return "프로젝트 관리 도구, 버전 관리 시스템, 자동화 도구 등 더 전문적인 협업 도구 활용 능력을 개발할 필요가 있습니다. 또한 각 도구의 고급 기능을 더 익히면 좋겠습니다.";
    } else if (score >= 21) {
        return "다양한 협업 도구에 대한 경험이 부족합니다. 특히 프로젝트 관리, 지식 관리, 버전 관리 등의 도구 사용 능력을 향상시키고, 기존에 사용하는 도구의 고급 기능도 학습할 필요가 있습니다.";
    } else {
        return "기본적인 협업 도구에 대한 이해와 경험이 부족합니다. 구글 드라이브, Slack/Teams, Zoom 등 널리 사용되는 필수 협업 도구부터 익히는 것이 중요합니다.";
    }
}

// 학습 자료 반환
function getLearningResources(score) {
    let resources = '<ul>';
    
    if (score >= 36) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">협업 워크플로우 최적화 및 자동화</a></li>
            <li>추천 키워드: '협업 도구 자동화', 'API 연동', '협업 시스템 설계'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">기업을 위한 협업 시스템 구축하기</a></li>
        `;
    } else if (score >= 31) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">고급 협업 도구 마스터하기</a></li>
            <li>추천 키워드: 'Jira 워크플로우 관리', 'Git 브랜치 전략', '노션 데이터베이스 활용'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">협업 도구 고급 활용법</a></li>
        `;
    } else if (score >= 21) {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">다양한 협업 도구 익히기</a></li>
            <li>추천 키워드: '프로젝트 관리 도구 비교', '버전 관리 기초', '팀 커뮤니케이션 도구'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">업무 효율성을 높이는 협업 도구 활용법</a></li>
        `;
    } else {
        resources += `
            <li><a href="https://www.notion.so" target="_blank">협업 도구 기초 가이드</a></li>
            <li>추천 키워드: '구글 워크스페이스 기초', 'Slack 사용법', 'Zoom 회의 참여'</li>
            <li>무료 YouTube 강좌: <a href="https://www.youtube.com" target="_blank">초보자를 위한 협업 도구 입문</a></li>
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
        { label: '문서 공유', score: calculateCategoryScore(0, 2) },     // 문항 1-2
        { label: '프로젝트 관리', score: calculateCategoryScore(2, 5) }, // 문항 3-5
        { label: '버전 관리', score: calculateCategoryScore(5, 7) },     // 문항 6-7
        { label: '일정 조율', score: calculateCategoryScore(7, 10) }     // 문항 8-10
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