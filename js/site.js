// Get string from the page
// Controller Function
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

// Reverse string
// Logic Function
function reverseString(userString) {

    let revString = [];

    // Reverse string via for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}

// Display reversed string to user
// View Function
function displayString(revString) {

    // Write message to page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    // Show alert box
    document.getElementById("alert").classList.remove("invisible");
}