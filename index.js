'use strict'

function logResponse() {
  let numOfDogs = $('#quantity').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson.message))
    .catch(error => alert("Something went wrong, please try again"));
}

function formListener() {
  $("form").on("submit", function (event) {
    event.preventDefault();
    $(".results").empty();
    let numOfDogs = $('#quantity').val();
    console.log(numOfDogs);
    logResponse();
  });
}

function dogImageApp() {
  console.log("App is loaded, awaiting submission!");
  formListener();
}

$(dogImageApp);