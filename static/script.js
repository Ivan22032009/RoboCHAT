alert("welcome to Pirate telegram");
const socket = io();

const form = document.getElementById('form');
const message = document.getElementById('messages');
const input = document.getElementById('input');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(input.value){
        socket.emit('new_message', input.value);
        input.value = '';
    }
socket.on('massage',function(msg){
    let item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})
});