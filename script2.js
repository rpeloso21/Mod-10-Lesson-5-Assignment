function regForm(username, email, text) {
    this.username = username;
    this.email = email;
    this.message = message;
}

regForm.prototype.displayInfo = function() {
    return `Username: ${this.username}, Email: ${this.email}, Message: ${this.message}`
}


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    let newForm = new regForm(username, email, message);
    
    let regFormElement = document.createElement("div");
    regFormElement.innerHTML = newForm.displayInfo();
    document.getElementById("formList").appendChild(regFormElement);
    document.getElementById("form").reset();
})