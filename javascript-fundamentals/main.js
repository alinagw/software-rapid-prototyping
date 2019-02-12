/* -----------------------------
 * SAVE ELEMENTS FROM DOM
 * ----------------------------- */

// the box we want to manipulate
var box = document.getElementById("box-1");

// name text input
var boxName = document.getElementById("box-name");

// size slider input
var boxSize = document.getElementById("box-size");

// array of color radio buttons
// this CSS selector grabs all the input elements with an attribute "name" equal to "color"
var colorToggles = document.querySelectorAll("input[name='color']");

/* -----------------------------
 * ADD EVENT LISTENERS
 * ----------------------------- */

// when input on box name input text box
boxName.addEventListener("input", function() {
    // change the the inner HTML of the box to display the name (value of boxName)
    box.innerHTML = boxName.value;
});

// when input on box size slider input
boxSize.addEventListener("input", function() {
    // change the box width and height to the slider value
    box.style.width = boxSize.value + "px";
    box.style.height = boxSize.value + "px";
});

// set up color toggle radio buttons
for (var i = 0; i < colorToggles.length; i++) {
    // get the sibling <label> and change the text color to the attribute "value" of the radio button
    colorToggles[i].nextElementSibling.style.color = colorToggles[i].getAttribute("value");;

    // add event listeners to all radio buttons when they change values
    // using "e" in function() passes the event as a parameter
    colorToggles[i].addEventListener("change", function(e) {
        // set the box background color to the color value of the radio button that was just clicked (currentTarget)
        box.style.backgroundColor = e.currentTarget.getAttribute("value");
    });
}