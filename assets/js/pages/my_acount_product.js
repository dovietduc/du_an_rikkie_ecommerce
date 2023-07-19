// 1. Nơi lưu trữ các biến querySelector
let buttonSave = document.querySelector('.btn_save');
let nameSelector = document.querySelector('.name');
let priceSelector = document.querySelector('.price_product');
let imageSelector = document.querySelector('.image');
let descriptionSelector = document.querySelector('.description');
let tbodySelector = document.querySelector('tbody');



// 2. khai báo hàm
function handleAddProduct() {

    let isValidForm = true;
    // 1. validate name
    let valueName = nameSelector.value.trim();
    let divError = nameSelector.nextElementSibling;
    if(valueName === '') {
        // thêm class error vào nameSelector
        nameSelector.classList.add('error');
        // Hiển thị thông báo lỗi vào div
        divError.innerText = 'Tên không được để trống';

        // gán lại false khi có lỗi
        isValidForm = false;
    } else {
        // xóa class error
        nameSelector.classList.remove('error');
        // Xóa thông báo lỗi vào div
        divError.innerText = '';
    }

    // validate giá price
    let valuePrice = priceSelector.value.trim();
    let divNextErrPrice = priceSelector.nextElementSibling;
    if(valuePrice === '') {
        priceSelector.classList.add('error');
        divNextErrPrice.innerText = 'Giá không thể trống';
        isValidForm = false;
    } else if(isNaN(valuePrice) || valuePrice < 0) {
        priceSelector.classList.add('error');
        divNextErrPrice.innerText = 'Xin hãy nhập số dương';
        isValidForm = false;
    } else {
        priceSelector.classList.remove('error');
        divNextErrPrice.innerText = '';
    }

    // validate image
    let valueImage = imageSelector.value.trim();
    let divErrorImage = imageSelector.nextElementSibling;
    if(valueImage === '') {
        imageSelector.classList.add('error');
        divErrorImage.innerText = 'Ảnh không thể trống';
        isValidForm = false;
    } else {
        imageSelector.classList.remove('error');
        divErrorImage.innerText = '';
    }

    // validate decription
    let valueDes = descriptionSelector.value.trim();
    let divErrorDes = descriptionSelector.nextElementSibling;
    if(valueDes === '') {
        descriptionSelector.classList.add('error');
        divErrorDes.innerText = 'Mô tả không thể trống';
        isValidForm = false;
    } else {
        descriptionSelector.classList.remove('error');
        divErrorDes.innerText = '';
    }

    // kiểm tra form hợp lệ
    if(isValidForm) {
        handleSubmitForm();
    }   

}

// Nếu data hợp lệ thì thực thi hàm này
function handleSubmitForm() {
    // 1. lấy value input trong form
    let valueName = nameSelector.value.trim();
    let valuePrice = priceSelector.value.trim();
    let valueImage = imageSelector.value.trim();
    let valueDes = descriptionSelector.value.trim();

    // 2. phân tích dữ liệu cần lưu như thế nào?-- kết luận [{}]
    
    // khi chưa có dữ liệu về products ở localStorage chúng ta tạo mảng []
    // Khi có dữ liệu rồi chúng ta phải lấy về và đẩy thêm dữ liệu mới vào
    let products;
    if(localStorage.getItem('products') === null) {
        products = [];
    } else {
        products = JSON.parse(localStorage.getItem('products'));
    }

    let newProduct = {
        id: crypto.randomUUID(),
        name: valueName,
        price: valuePrice,
        image: valueImage,
        description: valueDes
    }
    
    // 3. thêm sản phẩm vào mảng
    products.push(newProduct);
    // Lưu data vào localStorage để load lại trang không mất dữ liệu
    localStorage.setItem('products', JSON.stringify(products));

    // 4. Hiển thị dữ liệu ở localStorage ra table
    renderDataProduct();
    
}

// render data , get from localStorage
function renderDataProduct() {
    let products = JSON.parse(localStorage.getItem('products'));
    if(products) {
        let productResult = '';

        for(let i = 0; i < products.length; i++) {
            let productItem = products[i];
            productResult = productResult + `<tr>
                <td>${productItem.name}</td>
                <td>${productItem.price}</td>
                <td>
                    <img src="${productItem.image}" alt=""/>
                </td>
                <td>
                    <button class="btn_common btn_edit">Edit</button>
                    <button class="btn_common btn_delete">Delete</button>
                </td>
            </tr>`;
        }

        // đưa nội dung html vào trong tbody
        tbodySelector.innerHTML = productResult;

    }
    
}



// Hiển thị data trong localStorage
renderDataProduct();
// 3. Nơi lắng nghe các sự kiện
buttonSave.addEventListener('click', handleAddProduct);