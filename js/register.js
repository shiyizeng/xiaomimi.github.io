var spanArr = document.querySelectorAll('span')
var inp = document.querySelectorAll('input')
function checkUsername() {
    //测试用户名的正则
    var reg = /^\w{6,8}$/;

    //获取的输入的用户名
    var username = document.querySelector('#username').value;

    if (reg.test(username)) {
        //如果输入的用户名符合正则,正确
        spanArr[0].innerHTML = "用户名可以注册";

        return true;
    } else {
        //如果输入的用户名不符合正则,错误
        spanArr[0].innerHTML = '用户名必须是6-8位的字母数字或者下划线';
        return false;
    }
}

function checkPassword() {
    // 	//测试密码的正则
    var reg = /^[\w~!@#]{8,12}$/;
    //获取输入的密码
    var password = document.querySelector('#password').value;
    if (reg.test(password)) {
        //如果输入的密码符合正则,正确
        spanArr[1].innerHTML = "密码可以使用";
        return true;
    } else {
        //如果输入的用户名不符合正则,错误
        spanArr[1].innerHTML = '密码必须是8-12的字母,数字或者特殊符号';
        return false;
    }

}

var btn = document.querySelector('#btn')
btn.onclick = function () {
    if ((checkUsername() && checkPassword())) {
        localStorage.setItem('unname', inp[0].value)
        localStorage.setItem('pw', inp[1].value)
        location.href='./login.html'
    }
    else{
        alert('该注册不符合规范，请重新注册')
    }
}



