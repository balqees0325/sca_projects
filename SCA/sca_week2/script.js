

const validateForm = (event) => {
event.preventDefault();
let first = document.querySelector('#firstName').value;
let last = document.queryselector('#lastName').value;
let email = document.queryselector('#email').value;
let company = document.queryselector('#company').value;
let phone = document.queryselector('#tel').value;
let errorMsg = document.queryselector('#error-message');
let form = document.getElementById('myForm');
let sayError;

if(first === "" || last === "" || company == "") {
	 errorMsg = 'sorry input field can not be empty, please enter fields';
	 errorMsg.innerText = sayError;
	 return  false;
 } if(email.indexOf('@') == -1 || email === '') {
	errorMsg = 'email not valid please enter correct address';
	errorMsg.innerText = sayError;
   return false;
   
 } 
	 return true;
}


