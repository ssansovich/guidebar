var Guidebar = {
  guidebar: "",
  documentHeight: 0,


  goTo: function (yPos) { window.scrollTo(0,yPos); }, // Wrapper for scrollTo

  // Get vertical position of the guide element within the guidebar
  // Returns percentage used in vertical positioning
  getElementOffset: function (el) {
    return (el.offsetTop / documentHeight * 100);
  },

  getDocumentHeight: function () { //  Needed for cross-browser compatibility
    return height =
      Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
  },

  createGuidebar: function () {
    guidebar = document.getElementById("guidebar");
    documentHeight = Guidebar.getDocumentHeight();

    var sectionHeaders = document.getElementsByTagName("h2");

    for ( var i = 0; i < sectionHeaders.length; i++ ) {
      // Populate Guidebar with clickable guides
      guidebar.innerHTML += "<p style='top:"
        + Guidebar.getElementOffset(sectionHeaders[i])+"%;'"
        + "onclick='Guidebar.goTo(" + sectionHeaders[i].offsetTop + ")'>"
        + sectionHeaders[i].innerHTML
        + "</p>";
    }
  },

  resetGuidebar: function () {
    guidebar.innerHTML = "";
    Guidebar.createGuidebar();
  }
};

// Load Guidebar
window.addEventListener("load", Guidebar.createGuidebar);

// If content is responsive, we will need to recalculate positions on resize
window.addEventListener("resize", Guidebar.resetGuidebar);
