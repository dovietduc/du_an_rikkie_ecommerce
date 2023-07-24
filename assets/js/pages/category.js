const categoryWrapperSelector = document.querySelector('.widget_categories');
const shopContainerSelector = document.querySelector('.shop_container');
// Số lượng sản phẩm trên 1 trang
const perPage = 1;


function showCategory() {
    // 1. Lấy tất cả danh mục từ localStorage
    let categorys = JSON.parse(localStorage.getItem('categories'));
    // 2. Xây dựng cấu trúc html cho category
    let resultCate = '';
    for(let i = 0; i < categorys.length; i++) {
        let categoryItem = categorys[i];
        resultCate = resultCate + `<li class="item_cate_click" data-category_id="${categoryItem.id}">
            <a href="">
                <span class="categories_name">${categoryItem.name}</span>
            </a>
        </li>`;
    }

    // đưa category vào container
    document.querySelector('.widget_categories').innerHTML = resultCate;

}

function handleShowProductByCategory(event) {
    event.preventDefault();
    let clicked = event.target;
    let liSelectorClicked = clicked.closest('.item_cate_click');

    // gioi han click den li
    if(liSelectorClicked.classList.contains('item_cate_click')) {
        // 1. Lấy ra category_id khi click vào danh mục
        let categoryId = liSelectorClicked.getAttribute('data-category_id');
        // 2. Lấy tất cả sản phẩm trong localStorage
        let products = JSON.parse(localStorage.getItem('products'));
        // 3. filter sản phẩm theo danh mục input
        let productFilter = products.filter(item => item.category_id === categoryId);
        // 4. Thực hiện lấy dữ liệu theo trang hay là giới hạn sản phẩm khi filter
        // Lây ra 1 sản phẩm
        let productFilterPaginate = productFilter.slice(0, perPage);
        // 5. Tạo ra mã html cho sản phẩm
        let htmResult = '';
        for(let i = 0; i < productFilterPaginate.length; i++) {
            let productItem = productFilterPaginate[i];
            htmResult = htmResult + `<div class="col-md-4 col-6">
                <div class="product">
                    <div class="product_img">
                        <a href="shop-product-detail.html">
                            <img src="${productItem.image}">
                        </a>
                        <div class="product_action_box">
                            <ul class="list_none pr_action_btn">
                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i>
                                        Add To Cart</a></li>
                                <li><a href="shop-compare.html" class="popup-ajax"><i
                                            class="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" class="popup-ajax"><i
                                            class="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i class="icon-heart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="product_info">
                        <h6 class="product_title">
                            <a href="shop-product-detail.html">
                                ${productItem.name}
                            </a>
                        </h6>
                        <div class="product_price">
                            <span class="price">$${productItem.price}</span>
                            <del>$55.25</del>
                            <div class="on_sale">
                                <span>35% Off</span>
                            </div>
                        </div>
                        <div class="rating_wrap">
                            <div class="rating">
                                <div class="product_rate" style="width:80%"></div>
                            </div>
                            <span class="rating_num">(21)</span>
                        </div>
                        <div class="pr_desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                                blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                        </div>

                        <div class="list_product_action_box">
                            <ul class="list_none pr_action_btn">
                                <li class="add-to-cart"><a href="#"><i class="icon-basket-loaded"></i>
                                        Add To Cart</a></li>
                                <li><a href="shop-compare.html" class="popup-ajax"><i
                                            class="icon-shuffle"></i></a></li>
                                <li><a href="shop-quick-view.html" class="popup-ajax"><i
                                            class="icon-magnifier-add"></i></a></li>
                                <li><a href="#"><i class="icon-heart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;
        }

        // 6. Thêm dữ liệu đến container
        shopContainerSelector.innerHTML = htmResult;
    }

}




// 3. gọi hàm + add event
// Load danh mục từ local khi trang load ra
showCategory();
// Thêm sự kiện khi click vào mỗi category
categoryWrapperSelector.addEventListener('click', handleShowProductByCategory);
