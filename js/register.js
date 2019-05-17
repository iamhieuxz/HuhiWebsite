function registerForm() {
    //username phải được điền
    var username = document.forms["myForm"]["username"].value;
    if (username == "") {
    alert("Username không được để trống!");
    return false;
    }
    //fullname ko được bỏ trống
    var fullname = document.forms["myForm"]["fullname"].value;
    if (fullname == "") {
    alert("Fullname không được để trống!");
    return false;
    }
    //địa chỉ email phải được điền chính xác
    var email=document.forms["myForm"]["address"].value;
    var aCong=email.indexOf("@");
    var Cham = email.lastIndexOf(".");
    if (email == "") {
    alert("Email không được để trống!");
    return false;
    }
    else if ((aCong<1) || (Cham<aCong+2) || (Cham+2>email.length)) {
    alert("Email bạn điền không chính xác, vui lòng nhập lại!");
    return false;
    }
    // password
    var password = document.forms["myForm"]["password"].value;
    if (password == "") {
    alert("Password không được để trống!");
    return false;
    }
    //repass phải đúng
    var repass = document.forms["myForm"]["repass"].value;
    if (repass == ""|| repass != password) {
    alert("Password nhập lại không đúng!");
    return false;
    } else{
        alert('Đăng ký thành công!');
        window.open('./login.html');
    }
    }