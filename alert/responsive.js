// events
// using event handler: inline event handling
//                      scripting event handling

// function clickedAnyWhere() {
//     alert("Select any one of the events.")
// }

// document.addEventListener('click', clickedAnyWhere);

function rasieEventSelection(event) {
    alert('Selected: ' + event);
    // You can also perform other actions here
}

function submitResponse() {
    alert("Submitted");
}

function linkToProjects() {
    alert("You will be lead on to the projects page!!")
}

// changing the color by getting the id, since h1 tag don't have value
function details(id) {
    // alert("This page is for selection of the two events.")
    document.getElementById(id).style.color='Purple';
}

function colorChange(id){
    document.getElementById(id).style.color="Black";
}


function checkAddress(fieldId) {
        // getting the value of the id = 'email'
        var val = document.getElementById(fieldId).value;
        // comparing the value
        if (val === "nirmalawrk@gmail.com") {
            alert("nirmalawrk@gmail.com");
        }
}

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
    case "60608" :
        cityName = "Chicago";
        break;
    case "700120" :
        cityName = "Kolkata";
        break;
    case "53212" :
        cityName = "Milwaukee";
    }
    // setting the value of through id
    document.getElementById("city").value = cityName;
}

// example of how js made the page responsive
function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which" + 
    "make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of" +
    "distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several" +
    "adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time." +
    "Slow lorises have a toxic bite, a rare trait among mammals.";

    var shrinkedParagraph = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus."
    
    // replaces the original content, the innerHTML, with the text stored in the variable
    if (document.getElementById("slowLoris").innerHTML == expandedParagraph) {
        document.getElementById("slowLoris").innerHTML = shrinkedParagraph;
    }
    else {
        document.getElementById("slowLoris").innerHTML = expandedParagraph;
    }
}
// changing the element using innerHTML
function placeAList() {
    var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
    document.getElementById("lorisList").innerHTML = listToPlace;
}
        




    
