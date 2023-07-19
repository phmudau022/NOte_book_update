document.getElementById("password-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var password = document.getElementById("password-input").value;
    var desiredPassword = "123456"; // Replace with your desired password

    if (password === desiredPassword) {
        // Password is correct, redirect to the notebook page
        window.location.href = "index.html";
    } else {
        // Password is incorrect, display an error message
        alert("Incorrect password. Please try again.");
    }
});