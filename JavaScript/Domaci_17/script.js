
let form = document.getElementById("form");

for(let i = 18; i <= 100; i++) {
    let ageOption = document.createElement("option");
    ageOption.innerText = i;
    document.getElementById("age").append(ageOption);
}


document.getElementById("registerButton").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    if(name.trim() === "" || lastName.trim() === "") {
        alert("Niste uneli sve podatke");
        return;
    }

    register(name, lastName, age);


});

document.getElementById("delete").addEventListener("click", function() {
    let apiUrl = "https://dummyjson.com/users/"+this.getAttribute("userid")

    fetch(apiUrl, {
        method: "DELETE",
    })
        .then(response => response.json())
        .then(function(data) {
            console.log(data);
        })
});

function register(name, lastName, age) {
    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            firstName: name,
            lastName: lastName,
            age: age
        })
    })
        .then(response => response.json())
        .then(function(data) {

            let deleteButton = document.getElementById("delete");
            deleteButton.setAttribute("userId", data.id);
            deleteButton.removeAttribute("hidden");


            alert("Uspesno ste se registrovali sa imenom "+data.firstName);
            console.log(data);


        })
}



fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
    }),
})
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
    })



