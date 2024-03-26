// 大分類、小分類の選択肢を配列でそれぞれ用意
const categories = [
  'エコグッズ',
  '衛生グッズ',
  '防災グッズ'
];

// 小分類は、大分類と紐付けるためにオブジェクト型を使う
const subCategories = [
  {category: 'エコグッズ', name: '天然素材'},
  {category: 'エコグッズ', name: 'リサイクル素材'},
  {category: '衛生グッズ', name: 'マスク'},
  {category: '衛生グッズ', name: '除菌'},
  {category: '防災グッズ', name: 'セット物'},
  {category: '防災グッズ', name: 'ライト'}
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
