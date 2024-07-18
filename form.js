document.addEventListener("DOMContentLoaded", function() {
    const usernameinput = document.querySelector("#username");
    const titleinput = document.querySelector("#title"); 
    const contentinput = document.querySelector("#content");
    const signUpButton = document.querySelector("#button");
    const messageerror = document.querySelector("#error");



    function displayMessage(type, message) {
        messageerror.textContent = message;
        messageerror.setAttribute("class", type);
    }


    localStorage.getItem("username", username);
    localStorage.getItem("title", title);
    localStorage.getItem("content", content);

    signUpButton.addEventListener("click", function (event) {
        event.preventDefault();

        const username = usernameinput.value;
        const title = titleinput.value; 
        const content = contentinput.value;

        if (username === "" || title === "" || content === "") {
            displayMessage("Please complete the form.");
        } else {
            

            localStorage.setItem("username", username);
            localStorage.setItem("title", title);
            localStorage.setItem("content", content);

            

            window.location.href = "blog.html"; 
        }
    });
});
