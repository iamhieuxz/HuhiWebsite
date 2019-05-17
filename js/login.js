var user = ["user","user1","user2","user3","user4"];
var dev = ["dev","dev1","dev2","dev3","dev4"];
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
	var i
	for (i = 0 ; i < 5 ; i ++) {

		if (username==user[i] && password==username)
		{
		window.open('./user/user.html');
		}else{
			if (username==dev[i] && password==username)
			{
				window.open('./user/develop.html');
			}else{   
				window.alert('Sai mat khau - nhap lai di nao !');
				break;			}
			}
		}




	}