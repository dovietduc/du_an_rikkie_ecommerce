const loginInforSelector = document.querySelector('.user_login');

function getUserIsLoggin() {
    // 1. get data from localStorage
    let users = JSON.parse(localStorage.getItem('users'));
    // 2. kiểm tra xem có user active hay không?
    let userFind;
    if(users) {
        userFind = users.find(
            function(userItem) {
                if(userItem.status === 'active') {
                    return true;
                } else {
                    return false;
                }
            }
        );
    }
   

    // đưa tên đăng nhập để hệ thống biết ai đăng nhập
    if(userFind) {
        loginInforSelector.innerText = userFind.name;
        loginInforSelector.closest('a').setAttribute('href', '/my-account.html');
    }
    
}


getUserIsLoggin();