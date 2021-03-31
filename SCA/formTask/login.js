// let form = document.querySelector('form');
let uname = document.querySelector('.name');
let pword = document.querySelector('.pswd');
let button = document.querySelector("button");

const compareData = () => {
   let loginInput = {
		user: uname.value,
    password: pword.value
 };
let registeredData = JSON.parse(localStorage.getItem('formInput'));
loginInput = JSON.parse(localStorage.getItem("loginInput"));
let registeredUser = registeredData.username;
let registeredPswd = registeredData.password;

if((registeredUser === loginInput.user) && (registeredPswd === loginInput.password)) {
  window.location.href = '/profile.html';
} else {
  alert(`${loginInput} not compatible to ${registeredData}`);
  window.location.href = '/login.html';
}
}

button.addEventListener("click", compareData);
