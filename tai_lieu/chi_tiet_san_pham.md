# Tài Liệu Màn Hình chi tiết sản phẩm

1. Tạo ra trang shop_product_detail.js
2. Qua trang chủ đính kèm link vào thẻ a với query string
`Tim đến shop-product-detail.html thêm link`
3. copy page shop-product-detail.html
4. link shop_product_detail.js đến shop-product-detail.html


# add to cart 

1. Nhớ thêm đoạn có id sản phẩm
`<li class="add-to-cart" data-id_product="${productItem.id}"`

2. Sửa lỗi cart.js
`let quantity = cartOfUser[i].quantity;`

3. Sửa lỗi add-to-cart.js

`event.preventDefault(); đưa xuống dưới check li`


# home.js hiển thị tên user login
1. Sưả đoạn code này để khỏi phải thêm class
`const loginInforSelector = document.querySelector('.header_list .ti-user').nextElementSibling;`


# Gắn link cho toàn bộ menu

# Thêm id sản phẩm cho add to cart

# Thêm link đến các trang chi tiết sản phẩm

# Tiến hành phân quyền user







# Có thời gian làm thêm phần order, chỉ show trang complete mà thôi