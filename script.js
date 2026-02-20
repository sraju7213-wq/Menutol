/* =========================================================
   script.js  –  PDF menu viewer logic
   =========================================================
   To point this page at your own PDF, update the three
   placeholders below:

     USERNAME   → your GitHub username
     REPOSITORY → your repository name
     BRANCH     → the branch that contains the PDF (e.g. "main")

   Example:
     const pdfUrl =
       "https://raw.githubusercontent.com/USERNAME/REPOSITORY/BRANCH/Copy%20of%20Mwnu.pdf";
   ========================================================= */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     1.  PDF source URL
         Replace USERNAME, REPOSITORY and BRANCH with your own
         values if you fork this project.
  ---------------------------------------------------------- */
  const pdfUrl =
    "https://raw.githubusercontent.com/sraju7213-wq/Menutol/main/Copy%20of%20Mwnu.pdf";
    /* ↑  USERNAME   = sraju7213-wq
       ↑  REPOSITORY = Menutol
       ↑  BRANCH     = main                          */

  /* ----------------------------------------------------------
     2.  DOM references
  ---------------------------------------------------------- */
  const iframe   = document.getElementById("pdf-viewer");
  const fallback = document.getElementById("pdf-fallback");
  const btnDown  = document.getElementById("btn-download");
  const btnFull  = document.getElementById("btn-fullscreen");

  /* ----------------------------------------------------------
     3.  Load the PDF into the iframe
         Browsers that support inline PDF rendering will display
         it directly; others fall back gracefully.
  ---------------------------------------------------------- */
  iframe.src = pdfUrl;

  /* Show fallback message if the iframe fails to load the PDF */
  iframe.addEventListener("error", showFallback);

  /* Some browsers fire "load" even on error responses – check
     for an empty / inaccessible document as a secondary guard. */
  iframe.addEventListener("load", function () {
    try {
      /* If cross-origin access throws, the PDF loaded fine. */
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      if (doc && doc.body && doc.body.innerHTML === "") {
        showFallback();
      }
    } catch (_) {
      /* Cross-origin – PDF is loading normally; do nothing. */
    }
  });

  function showFallback() {
    iframe.hidden   = true;
    fallback.hidden = false;
  }

  /* ----------------------------------------------------------
     4.  Download button
         Creates a temporary <a> element with the download
         attribute so the browser saves the file instead of
         navigating to it.
  ---------------------------------------------------------- */
  btnDown.addEventListener("click", function () {
    const a      = document.createElement("a");
    a.href       = pdfUrl;
    a.download   = "Copy of Mwnu.pdf"; /* suggested file name */
    a.rel        = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });

  /* ----------------------------------------------------------
     5.  Fullscreen / open-in-new-tab button
         Opens the raw GitHub PDF URL in a new browser tab so
         the user can view it at full size or print it.
  ---------------------------------------------------------- */
  btnFull.addEventListener("click", function () {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  });

})();
