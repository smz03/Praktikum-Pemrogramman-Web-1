let Username = document.getElementById('Username').value;
let Password = document.getElementById('Password').value;
let login = document.getElementById('login');

document.getElementById('username').innerHTML = Username;
document.getElementById('login').innerHTML = Password;

switch (login){
    case 'Username':
        login.innerHTML = Username ;
        if(Username() == 'ahmad2017' || Username == 'Ahmad2017'){
            alert('Login Sukses');
        }
        break;

    case 'Password':
        login.innerHTML = Password;
        if(Password() == 'integrity' || Username == 'Integrity'){
            alert('Login Sukses');
        }
        break;

    default:
        login.innerHTML = Username, Password
        break;
}