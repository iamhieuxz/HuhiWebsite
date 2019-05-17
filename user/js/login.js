var CRU1='user';
var CRP1='user';
var CRU2='user1';
var CRP2='user1';
var CRU3='user2';
var CRP3='user2';
var CRU4='user3';
var CRP4='user3';
var CRU5='user4';
var CRP5='user4';
var CRU6='develop';
var CRP6='develop';
var CRU7='develop1';
var CRP7='develop1';
var CRU8='develop2';
var CRP8='develop2';
var CRU9='develop3';
var CRP9='develop3';
var CRU0='develop4';
var CRP0='develop4';

var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');

if(formLogin.attachEvent){
	formLogin.attachEvent('submit', onFormSubmit);
} else {
	formLogin.addEventListener('submit', onFormSubmit);
}


function onFormSubmit() {
	var username = inputUsername.value;
	var password = inputPassword.value;

	if (username== CRU1 && password==CRP1) {
		alert('Dang nhap thanh cong');
		window.open('./user/user.html');
		}
	else{
		alert('dang nhap khong thanh cong');
	}
	if (username== CRU2 && password==CRP2) {
		alert('Dang nhap thanh cong');
		window.open('./user/user1.html');
		}
	else{
		alert('dang nhap khong thanh cong');
	}
	if (username== CRU3 && password==CRP3) {
		alert('Dang nhap thanh cong');
		window.open('./user/user2.html');
		}
	else{
		alert('dang nhap khong thanh cong');
	}
	if (username== CRU4 && password==CRP4) {
		alert('Dang nhap thanh cong');
		window.open('./user/user3.html');
		}
	else{
		alert('dang nhap khong thanh cong');
	}
	if (username== CRU5 && password==CRP5) {
		alert('Dang nhap thanh cong');
		window.open('./user/user4.html');
		}
	else{
		alert('dang nhap khong thanh cong');
	}
	if (username== CRU6 && password==CRP6) {
		alert('Dang nhap thanh cong');
		window.open('./user/develop.html');
		}
	else{
		alert('dang nhap khong thanh cong');
	}
	if (username== CRU7 && password==CRP7) {
		alert('Dang nhap thanh cong');
		window.open('./user/develop1.html');
		}
	else{
		alert('dang nhap khong thanh cong');
	}
	if (username== CRU8 && password==CRP8) {
		alert('Dang nhap thanh cong');
		window.open('./user/develop2.html');
		}
	else{
		alert('dang nhap khong thanh cong');
	}
	if (username== CRU9 && password==CRP9) {
		alert('Dang nhap thanh cong');
		window.open('./user/develop3.html');
		}
	else{
		alert('dang nhap khong thanh cong');
	}
	if (username== CRU0 && password==CRP0) {
		alert('Dang nhap thanh cong');
		window.open('./user/develop4.html');
		}
	else{
		alert('dang nhap khong thanh cong');
	}
}
