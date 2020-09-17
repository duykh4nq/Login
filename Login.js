function validate1() {

    // Lấy giá trị
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra các giá trị
    if (username == "") {
        alert("Bạn chưa nhập tên đăng nhập");
        return false;
    }

    if (username.length < 8) {
        alert("Tên đăng nhập ít nất 8 ký tự");
        return false;
    }

    if (password.length < 6) {
        alert("Mật khẩu ít nhất 6 ký tự");
        return false;
    }

    if (password == "") {
        alert("Bạn chưa nhập mật khẩu");
        return false;
    }

    return alert("Đăng nhập thành công");
}

function validate2() {

    // Lấy giá trị
    var username = document.getElementById("username_").value;
    var password = document.getElementById("password_").value;
    var re_password = document.getElementById("re-password").value;

    // Kiểm tra các giá trị
    if (username_ == "") {
        alert("Bạn chưa nhập tên đăng nhập");
        return false;
    }

    if (username_.length < 8) {
        alert("Tên đăng nhập ít nất 8 ký tự");
        return false;
    }

    if (password_.length < 6) {
        alert("Mật khẩu ít nhất 6 ký tự");
        return false;
    }

    if (password_ == "") {
        alert("Bạn chưa nhập mật khẩu");
        return false;
    }

    if (re_password == "") {
        alert("Bạn chưa xác nhận lại mật khẩu");
        return false;
    }

    if (password != re_password) {
        alert("Mật khẩu không trùng khớp!");
        return false;
    }

    return alert("Đăng ký thành công");
}

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}