// 大分類、小分類の選択肢を配列でそれぞれ用意
const categories = [
  '保険金額固定コース（月払）',
  '保険金額固定コース（年払）',
  '保険料定額コース（月払）',
  '保険料定額コース（年払）'
];

// 小分類は、大分類と紐付けるためにオブジェクト型を使う
const subCategories = [
  {category: '保険金額固定コース（月払）', name: '死亡保険金50万円'},
  {category: '保険金額固定コース（月払）', name: '死亡保険金100万円'},
  {category: '保険金額固定コース（月払）', name: '死亡保険金200万円'},
  {category: '保険金額固定コース（月払）', name: '死亡保険金300万円'},
  {category: '保険金額固定コース（年払）', name: '死亡保険金50万円'},
  {category: '保険金額固定コース（年払）', name: '死亡保険金100万円'},
  {category: '保険金額固定コース（年払）', name: '死亡保険金200万円'},
  {category: '保険金額固定コース（年払）', name: '死亡保険金300万円'},
  {category: '保険料定額コース（月払）', name: '月額保険料1,000円'},
  {category: '保険料定額コース（月払）', name: '月額保険料2,000円'},
  {category: '保険料定額コース（月払）', name: '月額保険料3,000円'},
  {category: '保険料定額コース（月払）', name: '月額保険料5,000円'},
  {category: '保険料定額コース（年払）', name: '年額保険料10,000円'},
  {category: '保険料定額コース（年払）', name: '年額保険料20,000円'},
  {category: '保険料定額コース（年払）', name: '年額保険料30,000円'},
  {category: '保険料定額コース（年払）', name: '年額保険料50,000円'},
];

const categorySelect1 = document.getElementById('category-select-1');
const subCategorySelect1 = document.getElementById('sub-category-select-1');

// 大分類のプルダウンを生成
categories.forEach(category => {
  const option = document.createElement('option');
  option.textContent = category;

  categorySelect1.appendChild(option);    
});

// 大分類が選択されたら小分類のプルダウンを生成
categorySelect1.addEventListener('input', () => {

  // 小分類のプルダウンをリセット
  const options = document.querySelectorAll('#sub-category-select-1 > option');
  options.forEach(option => {
    option.remove();
  });

  // 小分類のプルダウンに「選択してください」を加える
  const firstSelect = document.createElement('option');
  firstSelect.textContent = '選択してください';
  subCategorySelect1.appendChild(firstSelect);

  // 大分類で選択されたカテゴリーと同じ小分類のみを、プルダウンの選択肢に設定する
  subCategories.forEach(subCategory => {
    if (categorySelect1.value == subCategory.category) {
      const option = document.createElement('option');
      option.textContent = subCategory.name;
      
      subCategorySelect1.appendChild(option);
    }
  });
});
