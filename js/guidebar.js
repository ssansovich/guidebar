var guidebar;
var documentHeight;
var sectionHeaders = [];
var numSections;

function createGuidebar() {
  documentHeight = getDocumentHeight();
  guidebar = document.getElementById("guidebar");
  sectionHeaders = document.getElementsByTagName("h2");

  numSections = sectionHeaders.length;

  for ( var i = 0; i < numSections; i++ ) {
    // console.log(sectionHeaders[i].innerHTML + " : " + sectionHeaders[i].offsetTop + " : " + getElementOffset(sectionHeaders[i]));

    // Populate Guidebar with clickable guides
    guidebar.innerHTML += "<p style='top:"
      + getElementOffset(sectionHeaders[i])+"%;'"
      + "onclick='goTo(" + sectionHeaders[i].offsetTop + ")'>"
      + sectionHeaders[i].innerHTML
      + "</p>";
  }
}

// Wrapper for scrollTo
function goTo(yPos) { window.scrollTo(0,yPos); }

// Get vertical position of the guide element within the guidebar
// Returns percentage to be used in vertical positioning
function getElementOffset(el) {
  return (el.offsetTop / documentHeight * 100);
}

// Get document height in cross browswer compatible way
function getDocumentHeight() {
  return height =
    Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
}

function resetGuidebar() {
  guidebar.innerHTML = "";
  createGuidebar();
}

// Load Guidebar
window.addEventListener("load", createGuidebar);

// If content is responsive, we will need to recalculate positions on resize
window.addEventListener("resize", resetGuidebar);
