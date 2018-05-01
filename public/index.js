// When event form button is clicked
// document.getElementById("rsvpBtn").onclick = submitRSVP;
function submitRSVP(){
    console.log("RSVP button clicked");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let isAttending = document.getElementsByName("attending").value;
    let numGuests = document.getElementById(numOfGuests).value;
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("isAttending: ", isAttending);
    console.log("numGuests", numGuests);
    const postRequestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name: name, email: email, attending: isAttending, numGuests: numGuests}),
    }
    fetch('/reply', postRequestOptions)
        .then(response => response.json())
        .then(data => {

        })
    .catch(error => {
        console.log("An error has occurred when attempting to Fetch:", error);
    })
}

// When View Guest List link is clicked
// document.getElementById("viewGuestList").onclick = function viewGuest(){
//     fetch('/guest')
//         .then(response => response.json())
//         .then(rsvp => {      
//         console.log(rsvp);
//         const json = JSON.stringify(rsvp);
//         // JSON.parse(json)
//     })
//     .catch(error => {
//         console.log("A network error has occurred when attempting to perform the GET request:", error)
//     })
// }
