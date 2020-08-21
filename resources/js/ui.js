/**
 * 가격 쉼표 추가
 * @param {string} price 가격
 */
function plusCommas(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 오토포인트 입력
 */
autoPointObj.setInput = function () {
    var autopoint = $('.point_lookup');
    var $autopointInput = autopoint.find('.autoPoint');

    $autopointInput.each(function (idx, item) {
        var _value = 0;
        var oldValue = 0;
        var currentValue = 0;
        var oldValueLength = 0;
        var currentValueLength = 0;
        var diffValueLength = 0;
        var _max = Number($(item).attr('data-point'));

        if ($(item).prop('readonly')) { return; }

        $(item).on('input', function () {
            var _cursorPosition = this.selectionStart;
            var resetOldValueLength = false;
            _value = this.value = this.value.replace(/[^0-9]/g, '');
            _value = _value !== '' ? Number(_value) : _value;
            this.value = plusCommas(_value); // 콤마 삽입
            currentValue = _value; // origin number

            if (currentValue > _max) {
                alert('사용할 포인트는 사용 가능한 포인트 내에서 입력해주세요.');
                this.value = plusCommas(_max);
                currentValue = _max;
                resetOldValueLength = true;
            }

            // 오토포인트 임시 저장
            if (this.id === 'autoPointSamsung') {
                tempSelectedData.autoPointSamsung = Number(currentValue);
            } else if (this.id === 'autoPointLotte') {
                tempSelectedData.autoPointLotte = Number(currentValue);
            }

            autoPointObj.sum(); // 오토포인트 합산

            // if (currentValue === oldValue) {
            //     console.log('포인트 입력 값이 같음');
            // }

            oldValue = currentValue;

            if (_value === '') { return; } // 값이 없을 때 이벤트 중지

            /**
             * input 커서 유지
             */
            currentValueLength = this.value.length;
            diffValueLength = currentValueLength - oldValueLength;

            if (diffValueLength > 1) {
                _cursorPosition++;
            } else if (diffValueLength < -1) {
                if (_cursorPosition > 0 && currentValueLength !== 1) {
                    _cursorPosition--;
                }
            }

            oldValueLength = currentValueLength;

            // 초기화 시 oldValueLength 초기화
            if (resetOldValueLength) {
                _cursorPosition = oldValueLength = 0;
            }

            this.selectionStart = _cursorPosition;
            this.selectionEnd = _cursorPosition;
        });
    });
};




