document.addEventListener('DOMContentLoaded', function() {
    var csvFilePath = 'csv/data.csv'; // CSVファイルのパス

    // CSVファイルを読み込む関数
    function loadCSV(callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var data = parseCSV(xhr.responseText);
                    callback(data);
                } else {
                    console.error('Failed to load CSV file');
                }
            }
        };
        xhr.open('GET', csvFilePath);
        xhr.send();
    }

    // CSVファイルのデータをパースして配列に変換する関数
    function parseCSV(csvData) {
        var lines = csvData.split('\n');
        var result = [];
        lines.forEach(function(line) {
            var values = line.split(',');
            result.push(values);
        });
        return result;
    }

    // テキストボックスの値に基づいてCSVデータを検索し、該当の行の2列目と4列目のデータを表示する関数
    function searchCSV() {
        var inputValue = document.getElementById('inputValue').value;
        var resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = ''; // 表示をクリア

        data.forEach(function(row) {
            if (row[0] === inputValue) {
                var html = '<div>2列目のデータ: ' + row[1] + ', 4列目のデータ: ' + row[3] + '</div>';
                resultContainer.innerHTML += html;
            }
        });
    }

    // CSVファイルを読み込んでデータを取得し、テキストボックスのイベントリスナーを設定する
    loadCSV(function(csvData) {
        window.data = parseCSV(csvData); // グローバル変数としてデータを保持
        var inputTextbox = document.getElementById('inputValue');
        inputTextbox.addEventListener('input', searchCSV);
    });
});
