console.log("Hello")

welcomeSpeech();
sendMessage();

function welcomeSpeech() {
    let userName = prompt("What's your name?")
    if (userName !=''){
        document.getElementById('user-greeting').textContent = userName;
    }
}

function sendMessage() {
    let message = document.getElementById('user-message').value;
    if (message != ''){
        alert("Message sent: " + message);
    }
}