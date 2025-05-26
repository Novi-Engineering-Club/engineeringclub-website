// // Can check whether needed to implement later
// // https://github.com/fireship-io/flamethrower
// import flamethrower from 'flamethrower-router';
// const router = flamethrower();
// // also maybe implement a password system so that not anyone can join the groupme? perhaps in groupme moderation for the group or in site itself

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Image grid system
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}