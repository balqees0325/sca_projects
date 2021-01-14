let first = document.querySelector('#firstName').value;
let last = document.queryselector('#lastName').value;
let email = document.queryselector('#email').value;
let company = document.queryselector('#company').value;
let phone = document.queryselector('#tel').value;
let button = document.queryselector('#submit');
let form = document.getElementById('myForm');

const validateForm = (event) => {
event.preventDefault();

if(first === "" || last === "") {
	 message = 'sorry input field can not be empty';
	 alert('please enter fields');
	 return  false;
 } if(email.indexOf('@') == -1 || email === '') {
	 message = 'email not valid';
	alert('please enter fields correctly');
   return false;
   
 } else {
	 alert('form submitted succesfully')
	 return true;
 }

}


