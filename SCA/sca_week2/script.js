//main function;
const validateForm = (event) => {
	 event.preventDefault();
let form = document.querySelector('#myForm');
let first = document.querySelector('#firstName').value;
let last = document.querySelector('#lastName').value;
let email = document.querySelector('#email').value;
let company = document.querySelector('#company').value;
let phone = document.querySelector('#tel').value;
let errorMsg = document.querySelector('#error-message');

let sayError;
//new function declared;
let isValidate;
let validate = () => {
	isValidate = false;
	if (!isValidate) {
		validateForm();
	}
if(first === "" || last === "" || company == "") {
	 errorMsg = 'sorry input field can not be empty, please enter fields';
	 errorMsg.innerText = sayError;
	 return  false;
 } if(email.indexOf('@') == -1 || email === '') {
	errorMsg = 'email not valid please enter correct address';
	errorMsg.innerText = sayError;
   return false;
	 } 
	 alert('form submitted successfully!')
	 return true;
}
}
document.querySelector('#formId').addEventListener('submit', validateForm);


