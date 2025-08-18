
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [pathname]);

//   return null;
// }

import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function scrollToTop() {
  // If your layout uses a scrollable container, give it id="page"
  const main = document.getElementById("page");
  if (main && typeof main.scrollTo === "function") {
    main.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  // Always try window too (for normal scrolling pages)
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  // Safari fallback
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollReset() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    scrollToTop();
  }, [pathname]);

  return null;
}


// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const scrollPositions = {}; // store scroll positions per path

// export default function ScrollManager() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // restore scroll if available
//     if (scrollPositions[pathname] !== undefined) {
//       window.scrollTo({ top: scrollPositions[pathname], left: 0, behavior: "instant" });
//     } else {
//       // new page → go top
//       window.scrollTo({ top: 0, left: 0, behavior: "instant" });
//     }

//     const saveScroll = () => {
//       scrollPositions[pathname] = window.scrollY;
//     };

//     // save scroll before leaving page
//     window.addEventListener("beforeunload", saveScroll);
//     return () => {
//       saveScroll();
//       window.removeEventListener("beforeunload", saveScroll);
//     };
//   }, [pathname]);

//   return null;
// }
