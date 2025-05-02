// 메인 페이지 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 모든 설문 옵션에 클릭 이벤트 추가
    const surveyOptions = document.querySelectorAll('.survey-option');
    
    surveyOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            // href 속성이 실제 파일로 연결될 때까지는 기본 동작 방지
            const href = this.getAttribute('href');
            
            // 언어 정보를 URL 파라미터로 추가
            const savedLanguage = localStorage.getItem('selectedLanguage') || 'ko';
            this.setAttribute('href', `${href}?lang=${savedLanguage}`);
            
            if (!fileExists(href)) {
                e.preventDefault();
                alert('해당 설문 페이지는 아직 준비 중입니다.');
            }
        });
    });
    
    // 파일 존재 여부 확인 함수 (실제로는 서버 측에서 처리해야 함)
    function fileExists(url) {
        // 존재하는 모든 html 파일 목록
        const existingFiles = [
            'collaboration.html',
            'communication.html',
            'digitalads.html',
            'excel.html',
            'index.html',
            'language.html',
            'marketing.html',
            'powerpoint.html',
            'report.html',
            'timemanagement.html',
            'writing.html'
        ];
        return existingFiles.includes(url);
    }

    // 언어 선택 토글 및 드롭다운 기능
    const langSelector = document.querySelector('.language-selector');
    const langToggle = document.querySelector('.lang-toggle');
    const currentLangSpan = document.querySelector('.current-lang');
    
    // 언어 토글 버튼 클릭 이벤트
    langToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // 이벤트 버블링 방지
        langSelector.classList.toggle('open');
    });
    
    // 다른 곳을 클릭하면 드롭다운 닫기
    document.addEventListener('click', function(e) {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('open');
        }
    });
    
    // 언어 선택 기능
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // 이벤트 버블링 방지
            
            // 활성화된 클래스 제거
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // 클릭한 버튼에 활성화 클래스 추가
            this.classList.add('active');
            
            // 선택한 언어 저장
            const selectedLang = this.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', selectedLang);
            
            // 토글 버튼 텍스트 업데이트
            currentLangSpan.textContent = this.textContent;
            
            // 드롭다운 닫기
            langSelector.classList.remove('open');
            
            // 언어 변경 적용
            changeLanguage(selectedLang);
        });
    });
    
    // 저장된 언어 설정이 있으면 불러오기
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        const targetBtn = document.querySelector(`.lang-btn[data-lang="${savedLanguage}"]`);
        if (targetBtn) {
            // 활성화된 클래스 제거
            langButtons.forEach(btn => btn.classList.remove('active'));
            // 저장된 언어 버튼 활성화
            targetBtn.classList.add('active');
            // 토글 버튼 텍스트 업데이트
            currentLangSpan.textContent = targetBtn.textContent;
            // 언어 변경 적용
            changeLanguage(savedLanguage);
        }
    }
    
    // 언어 변경 함수
    function changeLanguage(lang) {
        const translations = {
            'ko': {
                'title': '직무 역량 자가 진단',
                'description1': '아래 목록에서 진단하고 싶은 역량을 선택하세요.',
                'description2': '각 테스트는 10문항으로 구성되어 있습니다.',
                'excel': '엑셀 활용 능력',
                'powerpoint': '파워포인트 활용 능력',
                'writing': '문서 작성 능력',
                'marketing': '마케팅 기초 이해도',
                'report': '문서/보고서 작성 능력',
                'communication': '의사소통 능력',
                'language': '외국어 회화 능력',
                'timemanagement': '시간 관리 능력',
                'collaboration': '협업 도구 활용 능력',
                'digitalads': '디지털 광고 운영 능력',
                'footer': '© 2023 직무 역량 자가 진단 | 모든 권리 보유'
            },
            'en': {
                'title': 'Job Competency Self-Assessment',
                'description1': 'Select the competency you want to evaluate from the list below.',
                'description2': 'Each test consists of 10 questions.',
                'excel': 'Excel Skills',
                'powerpoint': 'PowerPoint Skills',
                'writing': 'Writing Skills',
                'marketing': 'Marketing Basics',
                'report': 'Report Writing Skills',
                'communication': 'Communication Skills',
                'language': 'Foreign Language Skills',
                'timemanagement': 'Time Management Skills',
                'collaboration': 'Collaboration Tool Skills',
                'digitalads': 'Digital Advertising Skills',
                'footer': '© 2023 Job Competency Self-Assessment | All Rights Reserved'
            },
            'es': {
                'title': 'Autoevaluación de Competencias Laborales',
                'description1': 'Seleccione la competencia que desea evaluar de la lista a continuación.',
                'description2': 'Cada prueba consta de 10 preguntas.',
                'excel': 'Habilidades de Excel',
                'powerpoint': 'Habilidades de PowerPoint',
                'writing': 'Habilidades de Escritura',
                'marketing': 'Fundamentos de Marketing',
                'report': 'Habilidades de Redacción de Informes',
                'communication': 'Habilidades de Comunicación',
                'language': 'Habilidades en Idiomas Extranjeros',
                'timemanagement': 'Habilidades de Gestión del Tiempo',
                'collaboration': 'Habilidades con Herramientas de Colaboración',
                'digitalads': 'Habilidades de Publicidad Digital',
                'footer': '© 2023 Autoevaluación de Competencias Laborales | Todos los Derechos Reservados'
            }
        };
        
        // 현재 언어의 번역 객체
        const texts = translations[lang];
        
        // 각 요소에 번역 적용
        document.querySelector('h1').textContent = texts.title;
        document.querySelectorAll('.main-description')[0].textContent = texts.description1;
        document.querySelectorAll('.main-description')[1].textContent = texts.description2;
        
        // 각 설문 옵션 제목 번역
        const optionTitles = document.querySelectorAll('.option-title');
        optionTitles.forEach(title => {
            const key = title.closest('.survey-option').getAttribute('href').replace('.html', '');
            if (texts[key]) {
                title.textContent = texts[key];
            }
        });
        
        // 푸터 번역
        document.querySelector('.footer p').textContent = texts.footer;
        
        // HTML 언어 속성 변경
        document.documentElement.lang = lang;
    }
});

// 로고 및 타이틀 클릭 시 메인 페이지로 돌아가기
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'H1' && e.target.closest('#main-container')) {
        window.location.href = 'index.html';
    }
});

// 언어 선택 정보를 페이지 간에 공유하기 위한 전역 함수
function applyStoredLanguageToPage() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (!savedLanguage) return;
    
    // URL 파라미터에서 언어 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // URL 파라미터에 언어가 있으면 그것을 우선 사용
    const langToUse = urlLang || savedLanguage;
    
    // localStorage 업데이트
    if (urlLang && urlLang !== savedLanguage) {
        localStorage.setItem('selectedLanguage', urlLang);
    }
    
    // HTML 언어 속성 변경
    document.documentElement.lang = langToUse;
    
    // 각 페이지의 UI 요소에 언어 적용
    const translations = {
        'ko': {
            'backLink': '← 메인으로 돌아가기',
            'prevBtn': '이전',
            'nextBtn': '다음',
            'submitBtn': '제출',
            'resultTitle': '결과',
            'scoreDisplay': '총점: ',
            'restartBtn': '다시 시작',
            'backToMainBtn': '메인으로',
            // 페이지별 제목
            'communication': '의사소통 능력 자가 진단',
            'collaboration': '협업 도구 활용 능력 자가 진단',
            'digitalads': '디지털 광고 운영 능력 자가 진단',
            'excel': '엑셀 활용 능력 자가 진단',
            'language': '외국어 회화 능력 자가 진단',
            'marketing': '마케팅 기초 이해도 자가 진단',
            'powerpoint': '파워포인트 활용 능력 자가 진단',
            'report': '문서/보고서 작성 능력 자가 진단',
            'timemanagement': '시간 관리 능력 자가 진단',
            'writing': '문서 작성 능력 자가 진단'
        },
        'en': {
            'backLink': '← Back to Main',
            'prevBtn': 'Previous',
            'nextBtn': 'Next',
            'submitBtn': 'Submit',
            'resultTitle': 'Results',
            'scoreDisplay': 'Total Score: ',
            'restartBtn': 'Restart',
            'backToMainBtn': 'Back to Main',
            // 페이지별 제목
            'communication': 'Communication Skills Self-Assessment',
            'collaboration': 'Collaboration Tools Skills Self-Assessment',
            'digitalads': 'Digital Advertising Skills Self-Assessment',
            'excel': 'Excel Skills Self-Assessment',
            'language': 'Foreign Language Skills Self-Assessment',
            'marketing': 'Marketing Basics Self-Assessment',
            'powerpoint': 'PowerPoint Skills Self-Assessment',
            'report': 'Report Writing Skills Self-Assessment',
            'timemanagement': 'Time Management Skills Self-Assessment',
            'writing': 'Writing Skills Self-Assessment'
        },
        'es': {
            'backLink': '← Volver al Inicio',
            'prevBtn': 'Anterior',
            'nextBtn': 'Siguiente',
            'submitBtn': 'Enviar',
            'resultTitle': 'Resultados',
            'scoreDisplay': 'Puntuación Total: ',
            'restartBtn': 'Reiniciar',
            'backToMainBtn': 'Volver al Inicio',
            // 페이지별 제목
            'communication': 'Autoevaluación de Habilidades de Comunicación',
            'collaboration': 'Autoevaluación de Habilidades con Herramientas de Colaboración',
            'digitalads': 'Autoevaluación de Habilidades de Publicidad Digital',
            'excel': 'Autoevaluación de Habilidades de Excel',
            'language': 'Autoevaluación de Habilidades en Idiomas Extranjeros',
            'marketing': 'Autoevaluación de Fundamentos de Marketing',
            'powerpoint': 'Autoevaluación de Habilidades de PowerPoint',
            'report': 'Autoevaluación de Habilidades de Redacción de Informes',
            'timemanagement': 'Autoevaluación de Habilidades de Gestión del Tiempo',
            'writing': 'Autoevaluación de Habilidades de Escritura'
        }
    };
    
    const texts = translations[langToUse];
    
    // 페이지 제목 변경
    const title = document.title;
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    if (currentPage && texts[currentPage]) {
        document.title = texts[currentPage];
        const h1Elements = document.querySelectorAll('h1');
        h1Elements.forEach(h1 => {
            if (!h1.closest('#result')) {
                h1.textContent = texts[currentPage];
            }
        });
    }
    
    // 공통 UI 요소 번역
    const backLink = document.querySelector('.back-link a');
    if (backLink) {
        backLink.textContent = texts.backLink;
        // 뒤로가기 링크에 언어 파라미터 추가
        backLink.href = `index.html?lang=${langToUse}`;
    }
    
    const prevButton = document.getElementById('prev-btn');
    if (prevButton) prevButton.textContent = texts.prevBtn;
    
    const nextButton = document.getElementById('next-btn');
    if (nextButton) nextButton.textContent = texts.nextBtn;
    
    const submitButton = document.getElementById('submit-btn');
    if (submitButton) submitButton.textContent = texts.submitBtn;
    
    const resultTitle = document.querySelector('#result h1');
    if (resultTitle) resultTitle.textContent = texts.resultTitle;
    
    const restartButton = document.getElementById('restart-btn');
    if (restartButton) restartButton.textContent = texts.restartBtn;
    
    const backToMainButton = document.getElementById('back-to-main-btn');
    if (backToMainButton) backToMainButton.textContent = texts.backToMainBtn;
    
    const scoreDisplayEl = document.getElementById('score-display');
    if (scoreDisplayEl && scoreDisplayEl.textContent.includes(':')) {
        const score = scoreDisplayEl.textContent.split(':')[1].trim();
        scoreDisplayEl.textContent = texts.scoreDisplay + score;
    }
    
    // 모든 페이지에서 언어에 따라 질문과 답변 변경
    if (typeof updateSurveyLanguage === 'function') {
        updateSurveyLanguage(langToUse);
    }
}

// 페이지가 로드될 때마다 저장된 언어 설정 적용
document.addEventListener('DOMContentLoaded', applyStoredLanguageToPage); 