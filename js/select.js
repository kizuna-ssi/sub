$(function() {
var array = new Array();
array[''] = new Array({cd:"0", label:"選択してください"});
array["01"] = new Array(
  {cd:"1", label:"死亡保険金50万円"},
  {cd:"2", label:"死亡保険金100万円"},
  {cd:"3", label:"死亡保険金200万円"},
  {cd:"4", label:"死亡保険金300万円"},
);
array["02"] = new Array(
  {cd:"1", label:"死亡保険金50万円"},
  {cd:"2", label:"死亡保険金100万円"},
  {cd:"3", label:"死亡保険金200万円"},
  {cd:"4", label:"死亡保険金300万円"},
);
array["03"] = [
  {cd:"1", label:"月額保険料1,000円"},
  {cd:"2", label:"月額保険料2,000円"},
  {cd:"3", label:"月額保険料3,000円"},
  {cd:"4", label:"月額保険料5,000円"},
];
array["04"] = [
  {cd:"1", label:"年額保険料10,000円"},
  {cd:"2", label:"年額保険料20,000円"},
  {cd:"3", label:"年額保険料30,000円"},
  {cd:"4", label:"年額保険料50,000円"},
];

document.getElementById('course').onchange = function(){
  amount-premium = document.getElementById("amount-premium");
  amount-premium.options.length = 0
  var changedPref = course.value;
  for (let i = 0; i < array[changedPref].length; i++) {
    var op = document.createElement("option");
    value = array[changedPref][i]
    op.value = value.cd;
    op.text = value.label;
    amount-premium.appendChild(op);
  }
}
}
 )
