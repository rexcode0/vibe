// JavaScript to redirect to the Messenger page when the button is clicked
document.getElementById('startChatBtn').addEventListener('click', function () {
    const sender = document.getElementById("sender").value;
    const receiver = document.getElementById("receiver").value;
    console.log("button pressed");
    if (receiver.trim() === "" || sender.trim() === "") {
        alert("enter a username to continue");
    }
    else {
        sessionStorage.setItem("reciever", receiver);
        sessionStorage.setItem("sender", sender);
        console.log(`${sender} : ${receiver}`);
        window.location.href = 'main.html'; // Redirects to messenger page

    }
});
