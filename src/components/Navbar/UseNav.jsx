import { useContext, useEffect, useRef } from "react";
import { NavContext } from "./NavContext";
import { useOnScreen } from "./UseOnScreen";

export const UseNav = (navLinkId) => {
  const ref = useRef(null);
  const { setActiveLinkId } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if(isOnScreen) {
      setActiveLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveLinkId, navLinkId])

  return ref;
}
