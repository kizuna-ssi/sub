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

    // selectBox4の選択状態に応じてselectBox2のオプションを更新する関数
    function updateSelectBox2() {
        var selectBox2 = document.getElementById('selectBox2');
        var selectBox4 = document.getElementById('selectBox4');
        var selectedValue4 = selectBox4.value;

        // selectBox4で選択された値と同じ行にあるデータをselectBox2に表示する
        selectBox2.innerHTML = ''; // selectBox2の内容をクリア

        var optionsToAdd = []; // selectBox2に追加するオプションの配列
        var seen = {}; // 重複チェック用のオブジェクト

        data.forEach(function(row) {
            if (row[3] === selectedValue4 && !seen[row[1]]) {
                optionsToAdd.push(row[1]); // selectBox2に追加する値を配列に追加
                seen[row[1]] = true;
            }
        });

        // 配列に追加された値をselectBox2にオプションとして追加
        optionsToAdd.forEach(function(value) {
            var option = document.createElement('option');
            option.text = value;
            selectBox2.appendChild(option);
        });
    }

    // CSVファイルを読み込んでデータを取得し、selectBox4のchangeイベントにupdateSelectBox2を関連付ける
    loadCSV(function(data) {
        window.data = data; // グローバル変数としてデータを保持
        var selectBox4 = document.getElementById('selectBox4');
        selectBox4.addEventListener('change', updateSelectBox2);
    });
});
