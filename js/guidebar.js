var Guidebar = {
  guidebar: "",
  documentHeight: 0,
  sectionheaders:[],

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

    documentHeight = Guidebar.getDocumentHeight();
    guidebar = document.getElementById("guidebar");
    sectionHeaders = document.getElementsByTagName("h2");

    var sectionText; // the section text
    var guide; // the element to be added to the DOM

    for ( var i = 0; i < sectionHeaders.length; i++ ) {

      guide = document.createElement("p");
      sectionText = document.createTextNode(sectionHeaders[i].innerHTML);

      // Add the element to the DOM
      guide.appendChild(sectionText);
      guidebar.appendChild(guide);

      // Position the guide within the guidebar
      guide.style.top = Guidebar.getElementOffset(sectionHeaders[i]) + "%";

      // Make the guide clickable
      guide.setAttribute("data-offset",sectionHeaders[i].offsetTop);
      guide.addEventListener("click", function () { window.scrollTo(0,this.getAttribute("data-offset")) }, false);

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
