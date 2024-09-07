// events
// using event handler: inline event handling
//                      scripting event handling

function clickedAnyWhere() {
    alert("Select any one of the events.")
}

document.addEventListener('click', clickedAnyWhere);

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
function details() {
    alert("This page is for selection of the two events.")
}