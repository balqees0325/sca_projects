let form = document.querySelector('form');
let uname = document.querySelector('.name');
let pword = document.querySelector(".pswd");
let btn = document.querySelector("button");
let sayError;

const compareData = () => {
   let loginInput = {
		uname: uname.value,
    pword: pword.value
 };
  if(localStorage.getItem('formInput') === ('loginInput')) {
    setTimeout(function () {
			window.location.href = "/login.html";
		}, 3000);
  } else if (localStorage.getItem('formInput') !== ('loginInput.uname')) {
    sayError = uname;
    sayError.innerText = 'Username doesn\'t match registered data';
  } else if (localStorage.getItem("formInput") !== "loginInput.pword") {
		sayError = pword;
		sayError.innerText = "Password doesn't match registered data";
	}
}