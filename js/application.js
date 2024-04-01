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

  function copyContractorInfo() {
    var contractorName = document.getElementById("contractor_name").value;
    var contractorFurigana = document.getElementById("contractor_furigana").value;
    var contractorPostalCode = document.getElementById("contractor_postal_code").value;
    var contractorAddress = document.getElementById("contractor_address").value;
    var contractorTel = document.getElementById("contractor_tel").value;
    var contractorEmail = document.getElementById("contractor_email").value;
    var contractorGender = document.getElementById("contractor_gender").value;
    var contractorBirthYear = document.getElementById("contractor_birth_year").value;
    var contractorBirthMonth = document.getElementById("contractor_birth_month").value;
    var contractorBirthDay = document.getElementById("contractor_birth_day").value;

    document.getElementById("insured_name").value = contractorName;
    document.getElementById("insured_furigana").value = contractorFurigana;
    document.getElementById("insured_postal_code").value = contractorPostalCode;
    document.getElementById("insured_address").value = contractorAddress;
    document.getElementById("insured_tel").value = contractorTel;
    document.getElementById("insured_email").value = contractorEmail;
    document.getElementById("insured_gender").value = contractorGender;
    document.getElementById("insured_birth_year").value = contractorBirthYear;
    document.getElementById("insured_birth_month").value = contractorBirthMonth;
    document.getElementById("insured_birth_day").value = contractorBirthDay;
  }


$(document).ready(function(){
    // フォームの要素が変更された時の処理
    $('.form input, .form select').change(function(){
        // フォームの各要素の値を取得
        var category = $('#category-select-1').val();
        var subCategory = $('#sub-category-select-1').val();
        var contractorName = $('#contractor_name').val();
        var contractorFurigana = $('#contractor_furigana').val();
        var contractorGender = $('#contractor_gender').val();
        var contractorBirthYear = $('#contractor_birth_year').val();
        var contractorBirthMonth = $('#contractor_birth_month').val();
        var contractorBirthDay = $('#contractor_birth_day').val();
        var contractorPpostalCode = $('#contractor_postal_code').val();
        var contractorAddress = $('#contractor_address').val();
        var contractorTel = $('#contractor_tel').val();
        var contractorEmail = $('#contractor_email').val();
        var insuredName = $('#insured_name').val();
        var insuredFurigana = $('#insured_furigana').val();
        var insuredGender = $('#insured_gender').val();
        var insuredBirthYear = $('#insured_birth_year').val();
        var insuredBirthMonth = $('#insured_birth_month').val();
        var insuredBirthDay = $('#insured_birth_day').val();
        var insuredPpostalCode = $('#insured_postal_code').val();
        var insuredAddress = $('#insured_address').val();
        var insuredTel = $('#insured_tel').val();
        var insuredEmail = $('#insured_email').val();
        var insuredJob = $('#insured_job').val();
        var insuredWorkplace = $('#insured_workplace').val();
        var insuredRelationship = $('#insured_relationship').val();
        var beneficiaryName = $('#beneficiary_name').val();
        var beneficiaryFurigana = $('#beneficiary_furigana').val();
        var beneficiaryRelationship = $('#beneficiary_relationship').val();
        var recruitCode = $('#recruitcode').val();
        var agencyName = $('#agencyname').val();
        var recruitName = $('#recruitname').val();
      
        // 取得した値を各Labelにセット
        $('.category_select_1Label').text(category);
        $('.sub_category_select_1Label').text(subCategory);
        $('.contractor_nameLabel').text(contractorName);
        $('.contractor_furiganaLabel').text(contractorFurigana);
        $('.contractor_genderLabel').text(contractorGender);
        $('.contractor_birth_yearLabel').text(contractorBirthYear);
        $('.contractor_birth_monthLabel').text(contractorBirthMonth);
        $('.contractor_birth_dayLabel').text(contractorBirthDay);
        $('.contractor_postal_codeLabel').text(contractorPpostalCode);
        $('.contractor_addressLabel').text(contractorAddress);
        $('.contractor_telLabel').text(contractorTel);
        $('.contractor_emailLabel').text(contractorEmail);
        $('.insured_nameLabel').text(insuredName);
        $('.insured_furiganaLabel').text(insuredFurigana);
        $('.insured_genderLabel').text(insuredGender);
        $('.insured_birth_yearLabel').text(insuredBirthYear);
        $('.insured_birth_monthLabel').text(insuredBirthMonth);
        $('.insured_birth_dayLabel').text(insuredBirthDay);
        $('.insured_postal_codeLabel').text(insuredPpostalCode);
        $('.insured_addressLabel').text(insuredAddress);
        $('.insured_telLabel').text(insuredTel);
        $('.insured_jobLabel').text(insuredJob);
        $('.insured_emailLabel').text(insuredEmail);
        $('.insured_workplaceLabel').text(insuredWorkplace);
        $('.insured_relationshipLabel').text(insuredRelationship);
        $('.beneficiary_nameLabel').text(beneficiaryName);
        $('.beneficiary_furiganaLabel').text(beneficiaryFurigana);
        $('.beneficiary_relationshipLabel').text(beneficiaryRelationship);
        $('.recruitcodeLabel').text(recruitCode);
        $('.agencynameLabel').text(agencyName);
        $('.recruitnameLabel').text(recruitName);
    });
});
