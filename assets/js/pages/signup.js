// 1. Nơi để các biến lưu trữ (querySelector...)
let buttonRegister = document.querySelector('.btn-signup');
let nameSelector = document.querySelector('.name');
let emailSelector = document.querySelector('.email');
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordSelector = document.querySelector('.password');
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
let confirmPasswordSelector = document.querySelector('.confirm_password');
let tooglePass = document.querySelector('.toogle_password');


function showError(input, message) {
    // thay đổi border input
    input.classList.remove('success');
    input.classList.add('error');
    let messageInput = input.nextElementSibling;
    // Hiển thị message lỗi
    messageInput.innerText = message;

    // thêm class error cho parent
    input.closest('.form-group').classList.add('form-group_error');
}

function showSuccess(input) {
    // thay đổi border input
    input.classList.remove('error');
    input.classList.add('success');
    let messageInput = input.nextElementSibling;
    // Xóa message lỗi
    messageInput.innerText = '';

    // xóa class error cho parent
    input.closest('.form-group').classList.remove('form-group_error');
}

// 2. Nơi khai báo các hàm lắng nghe sự kiện hoặc hàm chạy lần đầu load trang
function handleSignUp(event) {
    event.preventDefault();
    // Validate name
    validateName();
    // Validate email
    validateEmail();
    // validate password
    validatePassword();
    // Validate confirm password
    validateConfirmPassword();
}

// hàm này xử lí show hide password
function handleTooglePasss(event) {
    let typePass = passwordSelector.getAttribute('type');
    let clicked = event.target;
    if(typePass === 'password') {
        passwordSelector.setAttribute('type', 'text');
        clicked.classList.remove('fa-eye-slash');
        clicked.classList.add('fa-eye');
    } else {
        passwordSelector.setAttribute('type', 'password');
        clicked.classList.add('fa-eye-slash');
        clicked.classList.remove('fa-eye');
    }
   
}

function validateName() {
    let valueName = nameSelector.value.trim();
    // Validate name
    if(valueName === '') {
        showError(nameSelector, 'Tên không được để trống');
    } else {
        showSuccess(nameSelector);
    }
}

function validateEmail() {
    let valueEmail = emailSelector.value.trim();
    // Validate email
    if(valueEmail === '') {
        showError(emailSelector, 'Email không được để trống');
    } else if(emailRegex.test(valueEmail) === false) {
        showError(emailSelector, 'Email không đúng định dạng');
    } else {
        showSuccess(emailSelector);
    }
}

function validatePassword() {
    let passwordValue = passwordSelector.value.trim();
    // validate password
    if(passwordValue === '') {
        showError(passwordSelector, 'Password không được để trống');
    } else if(passwordValue.length < 8) {
        showError(passwordSelector, 'Mật khẩu phải có ít nhất 8 kí tự');
    } else if(passwordRegex.test(passwordValue) === false) {
        showError(passwordSelector, 'Mật khẩu phải có ít nhất 1 kí tự hoa, thường, đặc biệt, số');
    } else {
        showSuccess(passwordSelector);
    }
}

function validateConfirmPassword() {
    let confirmPassValue = confirmPasswordSelector.value.trim();
    let passwordValue = passwordSelector.value.trim();
    // Validate confirm password
    if(confirmPassValue === '') {
        showError(confirmPasswordSelector, 'Confirm password không được trống');
    } else if(confirmPassValue.length < 8) {
        showError(confirmPasswordSelector, 'Xác nhận mật khẩu phải có ít nhất 8 kí tự');
    } else if(passwordRegex.test(confirmPassValue) === false) {
        showError(confirmPasswordSelector, 'Xác nhận mật khẩu phải có ít nhất 1 kí tự hoa, thường, đặc biệt, số');
    } else if(confirmPassValue !== passwordValue) {
        showError(confirmPasswordSelector, 'Xác nhận mật khẩu không trùng mật khẩu');
    } else {
        showSuccess(confirmPasswordSelector);
    }
}


// 3. Nơi chạy hàm hoặc thêm addEventLisner
// Khi nhấn vào button register
buttonRegister.addEventListener('click', handleSignUp);
// Khi nhấn vào icon show hide password
tooglePass.addEventListener('click', handleTooglePasss);

// Bắt sự kiện keyup cho ô input name
nameSelector.addEventListener('keyup', validateName);
emailSelector.addEventListener('keyup', validateEmail);
passwordSelector.addEventListener('keyup', validatePassword);
confirmPasswordSelector.addEventListener('keyup', validateConfirmPassword)
