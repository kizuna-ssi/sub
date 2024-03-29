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

    // CSVファイルのデータをパースして指定の列を取得する関数
    function parseCSV(csvData) {
        var lines = csvData.split('\n');
        var result = [];
        lines.forEach(function(line) {
            var values = line.split(',');
            // ダブルクォーテーションがあれば削除して追加
            values = values.map(function(value) {
                return value.replace(/^"|"$/g, '');
            });
            result.push(values);
        });
        return result;
    }

    // HTMLにデータを表示する関数
    function displayData(data) {
        var container = document.getElementById('dataContainer');
        data.forEach(function(row) {
            var html = '<div>2列目のデータ: ' + row[1] + ', 4列目のデータ: ' + row[3] + '</div>';
            container.innerHTML += html;
        });
    }

    // CSVファイルを読み込んでデータを表示する
    loadCSV(displayData);
});
