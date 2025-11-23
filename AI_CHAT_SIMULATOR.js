const chatBox = document.querySelector('.chat-box');
const userInput = document.querySelector('.user-input');
const btnSend = document.querySelector('.btn-send');

function addChat(text, sender) {
    const newBubble = document.createElement('div');
    newBubble.classList.add('bubble', sender);

    if (sender === 'bot') {
        newBubble.innerHTML = text;
    } else {
        newBubble.innerText = text;
    }

    chatBox.appendChild(newBubble);
    chatBox.scrollTop = chatBox.scrollHeight;
}

btnSend.addEventListener('click', function() {
    const text = inputField.value;
    if (text === "") return;
    
    addChat(text, 'user');
    inputField.value = "";

    setTimeout(() => {
        const reply = "Saya mengerti: " + text + "...............TAPI BOHONG! ORANG GW AI MASIH TAHAP PENGEMBANGAN KEK FRONT END AOWOWOKWKWK..";
        addChat(reply, 'bot');
    }, 1000);
});