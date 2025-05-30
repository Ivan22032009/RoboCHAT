const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (event) => {
    EventTarget.preventDefault();
    const{login, password, passwordRepeat} = registerForm;
    if(password.value !== passwordRepeat.value){
        return alert('Паролі не співпадають');
    }
    const user = JSON.stringify({
        login: login.value,
        password: password.value
    });
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/regster');
    xhr.send(user);
    xhr.onload = () => alert(xhr.response);
});