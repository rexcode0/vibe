// JavaScript to redirect to the Messenger page when the button is clicked
document.getElementById('startChatBtn').addEventListener('click', function () {
    const username = document.getElementById("username").value;
    console.log("button pressed");
    if (username.trim() === "") {
        alert("enter a username to continue");
    }
    else {
        sessionStorage.setItem("username", username);
        console.log("username",username);
        window.location.href = 'main.html'; // Redirects to messenger page

    }
});
