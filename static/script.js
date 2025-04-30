alert("welcome to Pirate telegram");
const form = document.getElementById('form');
const input = document.getElementById('input');
const messageList = document.getElementById('message');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
        const li = document.createElement('li');
        li.textContent = text;
        messageList.appendChild(li);
        input.value = '';
        messageList.scrollTop = messageList.scrollHeight;
    }
});