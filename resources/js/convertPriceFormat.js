// input 개수 만큼 closure 설정
// 초기값 설정 = 0
// 초기값 존재할 때 커서 위치 수정
// 가격 원본 반환값 설정
// 커서 위치 기억
// 초기화
// []다중 선택자 한번에 적용 or [x]개별 선택자로 계속 지정

/**
 * 가격 자리 구분 값 추가
 * @param {string} price 가격
 */
function convertPriceFormat(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function setInput() {
    var _value = 0; // 기본값
    var oldValue = 0; // 직전 입력값
    var currentValue = 0; // 최근 입력값
    var oldValueLength = 0; // 직전 입력값 문자 개수
    var currentValueLength = 0; // 최근 입력값 문자 개수
    var diffValueLength = 0; // 직전값과 최근 입력값 차이
    var _max = Number($(item).attr('data-point')); // 최댓값


}
