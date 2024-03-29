document.addEventListener('DOMContentLoaded', function() {
    var csvFilePath = 'data.csv'; // CSVファイルのパス

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

    // 2列目と4列目のデータをセレクトボックスに表示する関数（重複行を非表示にする）
    function populateSelectBoxes(data) {
        var selectBox2 = document.getElementById('selectBox2');
        var selectBox4 = document.getElementById('selectBox4');
        var seen = {}; // 重複チェック用のオブジェクト

        data.forEach(function(row) {
            // 重複がない場合のみ追加
            if (!seen[row[1]]) {
                var option2 = document.createElement('option');
                option2.text = row[1]; // 2列目のデータをセレクトボックスのオプションに追加
                selectBox2.appendChild(option2);
                seen[row[1]] = true;
            }

            // 重複がない場合のみ追加
            if (!seen[row[3]]) {
                var option4 = document.createElement('option');
                option4.text = row[3]; // 4列目のデータをセレクトボックスのオプションに追加
                selectBox4.appendChild(option4);
                seen[row[3]] = true;
            }
        });
    }

    // CSVファイルを読み込んでセレクトボックスを生成する
    loadCSV(populateSelectBoxes);
});
