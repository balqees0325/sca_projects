let user = document.querySelector('.user');
let pword = document.querySelector('.pswd');
let button = document.querySelector('button');

const loginData = (e) =>{
  let loginDetail = {
    user: user.value,
    pswd: pword.value 
  }
  let registeredDetails = 
  JSON.parse(localStorage.getItem("formInput"));
  let getRegisteredUser = registeredDetails.username;
  let getRegisteredPwd = registeredDetails.password;
  let getLogUser = loginDetail.user;
  let getLogPwd = loginDetail.pswd;

  e.preventDefault();

  if((getRegisteredUser === getLogUser) && (getRegisteredPwd === getLogPwd)) {
    window.location.href = '/profile.html';
  } else if(getRegisteredUser !== getLogUser) {
    alert(`${getLogUser} does not match ${getRegisteredUser}`);
  } else{ 
    alert(`${getLogPwd} does not match ${getRegisteredPwd}`);
    window.location.href = '/login.html';
  }
}
button.addEventListener("click", loginData);
