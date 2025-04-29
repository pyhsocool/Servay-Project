// 메인 페이지 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 모든 설문 옵션에 클릭 이벤트 추가
    const surveyOptions = document.querySelectorAll('.survey-option');
    
    surveyOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            // href 속성이 실제 파일로 연결될 때까지는 기본 동작 방지
            const href = this.getAttribute('href');
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
});

// 로고 및 타이틀 클릭 시 메인 페이지로 돌아가기
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'H1' && e.target.closest('#main-container')) {
        window.location.href = 'index.html';
    }
}); 