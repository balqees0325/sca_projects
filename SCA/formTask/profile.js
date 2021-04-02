let button = document.querySelector('button');
let displayProfile = document.querySelector('.userdata')

const displayData = () =>{
  console.log('hi');
  let {username, phone, email,password} = JSON.parse(window.localStorage.getItem("formInput"));

  displayProfile.innerHTML = `
    h2>Hello ${username}</h1>
    <div>
    <h2>Registration Details Below</h2>
    <p>Phone Number: ${phone}</p>
    <p>Email Address: ${email}</p>
    <p>Password: ${password}</p>
    </div>
  `;

}

 const clearUserData = () => {
		let loginInput = JSON.parse(localStorage.getItem("loginInput"));
		console.log(`${loginInput}`);
		window.localStorage.clear("loginInput");
		alert(`You have succefully logout`);
    window.location.href = '/index.html';
 };

displayData();
button.addEventListener("click", clearUserData);