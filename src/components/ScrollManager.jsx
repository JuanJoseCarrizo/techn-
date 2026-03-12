import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const positions = {};

function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") {
      const savedPosition = positions[location.pathname];
      if (savedPosition) {
        window.scrollTo(savedPosition.x, savedPosition.y);
      }
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      positions[location.pathname] = {
        x: window.scrollX,
        y: window.scrollY
      };
    };
  }, [location, navigationType]);

  return null;
}

export default ScrollManager;