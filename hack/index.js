// JavaScript to redirect to the Messenger page when the button is clicked
document.getElementById('startChatBtn').addEventListener('click', function () {
    const user = document.getElementById("user").value;
    const receiver = document.getElementById("receiver").value;
    console.log("button pressed");
    if (receiver.trim() === "" || user.trim() === "") {
        alert("enter a username to continue");
    }
    else {
        sessionStorage.setItem("chat","private");
        sessionStorage.setItem("receiver", receiver.toLowerCase());
        sessionStorage.setItem("user", user.toLowerCase());
        console.log(`${user} : ${receiver}`);
        window.location.href = 'main.html'; // Redirects to messenger page

    }
});

document.getElementById('startGroupChatBtn').addEventListener('click', function () {
    const user = document.getElementById("user").value;
    const receiver = document.getElementById("receiver").value;
    console.log("button pressed");
    if (user.trim() === "") {
        alert("enter a username to continue");
    }
    else {
        sessionStorage.setItem("receiver", null);
        sessionStorage.setItem("user", user.toLowerCase());
        sessionStorage.setItem("chat","group");
        console.log(`${user} : ${receiver}`);
        window.location.href = 'main.html'; // Redirects to messenger page

    }
});