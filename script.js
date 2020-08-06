// get reference for the button
let button = document.querySelector("button");

// onclick for button
button.onclick = function(event) {

    event.preventDefault();
    // create a div to contain the profile
    let newDiv = document.createElement("div");
    newDiv.style.border = "solid black 4px";
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    
    document.body.appendChild(newDiv);

    // fetch data from the random user api
    fetch("https://randomuser.me/api/")
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log("Sucess");
            console.log(myJson.results[0].name.first);

            let newText = document.createElement("p");
            newText.innerHTML = "My name is " + myJson.results[0].
            name.first + " " + myJson.results[0].name.last + ". My email is: " + 
            myJson.results[0].email + ". I am " + 
            myJson.results[0].dob.age + " years old.";
            newDiv.appendChild(newText);

            let userImage = document.createElement("img");
            userImage.src = myJson.results[0].picture.large;
            newDiv.prepend(userImage);
        })

        // fetch data from the dog api
        fetch("https://dog.ceo/api/breeds/image/random") 
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log("Sucess! v2");
                console.log(myJson);

                let dogImage = document.createElement("img");
                dogImage.src = myJson.message;
                dogImage.style.height = "128px";
                newDiv.appendChild(dogImage);
            })
        
}