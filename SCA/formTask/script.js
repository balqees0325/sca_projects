// let form = document.querySelector('form');
let username = document.querySelector('.username');
let email = document.querySelector(".email");
let password = document.querySelector(".pswd");
let phone = document.querySelector(".phone");
let button = document.querySelector("button");

const formData = (e) => {
 
 let formInput = {
		username: username.value,
    email: email.value,
    phone: phone.value,
    password: password.value
 };
 let jsonData = JSON.stringify(formInput);
 localStorage.setItem('inputData', jsonData);

 let data = localStorage.getItem("inputData");
 console.log(data);
 e.preventDefault();
 
		window.location.href = "/login.html";	

    data = '';
}

button.addEventListener('click', formData);
