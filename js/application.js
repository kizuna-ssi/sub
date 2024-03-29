function calculate() {
    // 保険料の計算
    var premium = calculatePremium();
 
    // 生年月日の取得
    var year = document.querySelector('.birthday-year').value;
    var month = document.querySelector('.birthday-month').value;
    var day = document.querySelector('.birthday-day').value;

    // 性別の取得
    var gender;
    if (document.getElementById('male').checked) {
        gender = '男性';
    } else if (document.getElementById('female').checked) {
        gender = '女性';
    }

    // 保険金額の取得
    var amount;
    if (document.getElementById('50').checked) {
        amount = '50万円';
    } else if (document.getElementById('100').checked) {
        amount = '100万円';
    } else if (document.getElementById('200').checked) {
        amount = '200万円';
    } else if (document.getElementById('300').checked) {
        amount = '300万円';
    }

    // 払込回数の取得
    var times;
    if (document.getElementById('month').checked) {
        times = '月払';
    } else if (document.getElementById('year').checked) {
        times = '年払';
    }

    // 生年月日、性別、保険金額、払込回数を表示
    document.getElementById('birthdayLabel').innerText =  year + '年' + month + '月' + day + '日';
    document.getElementById('genderLabel').innerText =  gender;
    document.getElementById('amountLabel').innerText =  amount;
    document.getElementById('timesLabel').innerText =  times;
}
