/**
 * 가격 자리 구분 값 추가
 * @param {string} price 가격
 */
function convertPriceFormat(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

