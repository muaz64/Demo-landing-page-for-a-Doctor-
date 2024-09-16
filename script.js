document.getElementById("chatToggle").addEventListener("click", function () {
    var chatWindow = document.getElementById("chatWindow");
    if (chatWindow.classList.contains("d-none")) {
        chatWindow.classList.remove("d-none");
    } else {
        chatWindow.classList.add("d-none");
    }
});
