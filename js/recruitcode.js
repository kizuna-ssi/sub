$(document).ready(function(){
  $('input[name="募集人コード"]').on('input', function(){
    var recruitCode = $(this).val();
    if (recruitCode) { // 値が存在するかどうかをチェック
      $.ajax({
        url: 'csv/data.csv',
        dataType: 'text',
        success: function(data) {
          console.log(data); // 取得したデータをログ出力

          var found = false;
          for (var i = 0; i < lines.length; i++) {
            var parts = lines[i].split('","');
            // ダブルクォーテーションを削除
            parts = parts.map(function(part) {
              return part.replace(/^"(.*)"$/, '$1');
            });
            if (parts[0] === recruitCode) {
              $('input[name="募集人名"]').val(parts[1]);
              $('input[name="代理店名"]').val(parts[3]);
              found = true;
              break;
            }
          }
          if (!found) {
            $('input[name="募集人名"]').val('該当なし');
            $('input[name="代理店名"]').val('該当なし');
          }
        }
      });
    }
  });
});
