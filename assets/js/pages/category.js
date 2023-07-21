

function showCategory() {
    // 1. Lấy tất cả danh mục từ localStorage
    let categorys = JSON.parse(localStorage.getItem('categories'));
    // 2. Xây dựng cấu trúc html cho category
    let resultCate = '';
    for(let i = 0; i < categorys.length; i++) {
        let categoryItem = categorys[i];
        resultCate = resultCate + `<li data-category_id="${categoryItem.id}">
            <a href="#">
                <span class="categories_name">${categoryItem.name}</span>
            </a>
        </li>`;
    }

    // đưa category vào container
    document.querySelector('.widget_categories').innerHTML = resultCate;

}




// 3. gọi hàm + add event
// Load danh mục từ local khi trang load ra
showCategory();