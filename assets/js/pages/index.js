let ulTabSelector = document.querySelector('.product_tab_click');



function handleShowProductByTab(event) {
    let clicked = event.target;
    if(clicked.classList.contains('product_item_tab')) {
        let productType = clicked.getAttribute('data-type');

        // 1. Lấy tất cả sản phẩm ở localStorage
        let products = JSON.parse(localStorage.getItem('products'));
        let productFilterByType = products.filter(
            function(item) {
                if(item.type === productType) {
                    return true;
                } else {
                    return false;
                }
            }
        );
        console.log(productFilterByType);
    }
    
}






// 3. add event
ulTabSelector.addEventListener('click', handleShowProductByTab);