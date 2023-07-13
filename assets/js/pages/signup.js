// 1. Nơi để các biến lưu trữ (querySelector...)
let buttonRegister = document.querySelector('.btn-signup');
let nameSelector = document.querySelector('.name');
let emailSelector = document.querySelector('.email');
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordSelector = document.querySelector('.password');
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
let confirmPasswordSelector = document.querySelector('.confirm_password');


function showError(input, message) {
    // thay đổi border input
    input.classList.remove('success');
    input.classList.add('error');
    let messageInput = input.nextElementSibling;
    // Hiển thị message lỗi
    messageInput.innerText = message;
}

function showSuccess(input) {
    // thay đổi border input
    input.classList.remove('error');
    input.classList.add('success');
    let messageInput = input.nextElementSibling;
    // Xóa message lỗi
    messageInput.innerText = '';
}

// 2. Nơi khai báo các hàm lắng nghe sự kiện hoặc hàm chạy lần đầu load trang
function handleSignUp(event) {
    event.preventDefault();
    let valueName = nameSelector.value.trim();
    let valueEmail = emailSelector.value.trim();
    let passwordValue = passwordSelector.value.trim();
    let confirmPassValue = confirmPasswordSelector.value.trim();

    // Validate name
    if(valueName === '') {
        showError(nameSelector, 'Tên không được để trống');
    } else {
        showSuccess(nameSelector);
    }

    // Validate email
    if(valueEmail === '') {
        showError(emailSelector, 'Email không được để trống');
    }
    else if(emailRegex.test(valueEmail) === false) {
        showError(emailSelector, 'Email không đúng định dạng');
    } else {
        showSuccess(emailSelector);
    }

    // validate password
    if(passwordValue === '') {
        showError(passwordSelector, 'Password không được để trống');
    }
    else if(passwordValue.length < 8) {
        showError(passwordSelector, 'Mật khẩu phải có ít nhất 8 kí tự');
    } 
    else if(passwordRegex.test(passwordValue) === false) {
        showError(passwordSelector, 'Mật khẩu phải có ít nhất 1 kí tự hoa, thường, đặc biệt, số');
    } else {
        showSuccess(passwordSelector);
    }

    // Validate confirm password
    if(confirmPassValue === '') {
        showError(confirmPasswordSelector, 'Confirm password không được trống');
    } 
    // else if(confirmPassValue.length < 8) {
    //     showError(confirmPasswordSelector, 'Xác nhận mật khẩu phải có ít nhất 8 kí tự');
    // } 
    // else if(passwordRegex.test(confirmPassValue) === false) {
    //     showError(confirmPasswordSelector, 'Xác nhận mật khẩu phải có ít nhất 1 kí tự hoa, thường, đặc biệt, số');

    // }
     else if(confirmPassValue !== passwordValue) {
        showError(confirmPasswordSelector, 'Xác nhận mật khẩu không trùng mật khẩu');
    } else {
        showSuccess(confirmPasswordSelector);
    }
    
}


// 3. Nơi chạy hàm hoặc thêm addEventLisner
buttonRegister.addEventListener('click', handleSignUp);