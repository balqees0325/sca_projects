//main function;
const validateForm = (event) => {
	 event.preventDefault();

let first = document.querySelector('#firstName').value;
let last = document.querySelector('#lastName').value;
let email = document.querySelector('#email').value;
let company = document.querySelector('#company').value;
let phone = document.querySelector('#tel').value;
let errorMsg = document.querySelector('#error-message');
let sayError;

if(first === "" || last === "" || company == "") {
	 sayError = 'sorry input field can not be empty, please enter fields';
	 errorMsg.innerText = sayError;
	 return 
 } if(email.indexOf('@') == -1 || email === '') {
	sayError = 'email not valid please enter correct address';
	errorMsg.innerText = sayError;
	return 
	} 
	 console.log('Thank you!! form submitted successfully!') 
	 setTimeout(function(){
			window.location.href = '/thanks.html';
	 }, 2000);	
} 
document.querySelector('#formId').addEventListener('submit', validateForm);


