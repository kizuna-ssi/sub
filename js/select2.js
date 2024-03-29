document.addEventListener('DOMContentLoaded', function() {
    var selectBox = document.getElementById('selectBox');
    var csvFilePath = 'csv/data.csv'; // CSVファイルのパス

    // CSVファイルからデータを取得してセレクトボックスを生成する関数
    function populateSelectBox(data) {
        data.forEach(function(row) {
            var option = document.createElement('option');
            option.text = row[1]; // CSVファイルの2列目のデータをセレクトボックスのオプションに追加
            selectBox.appendChild(option);
        });
    }

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

    // CSVファイルのデータをパースする関数
    function parseCSV(csvData) {
        var lines = csvData.split('\n');
        var result = [];
        lines.forEach(function(line) {
            var values = line.split(',');
            result.push(values);
        });
        return result;
    }

    // CSVファイルを読み込んでセレクトボックスを生成する
    loadCSV(populateSelectBox);
});
