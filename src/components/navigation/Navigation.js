import Whiteham from "../../assets/images/hamburger-white.png";
import WhiteXham from "../../assets/images/x-ham-white.png";
import NavigationHamburger from "./NavigationHamburger.js";
import NavigationLogo from "./NavigationLogo.js";
import NavigationMenu from "./NavigationMenu.js";
import NavigationSocials from "./NavigationSocials.js";
import { useState } from "react";
import React from "react";
const Navigation = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const ref = React.useRef();
  function ToggleMenu() {
    hiddenMenu
      ? setHiddenMenu(false) || (ref.current.src = WhiteXham)
      : setHiddenMenu(true) || (ref.current.src = Whiteham);
  }
  function closeMenu() {
    setHiddenMenu(true) || (ref.current.src = Whiteham);
  }
  return (
    <article className="side-menu">
      <NavigationHamburger ToggleMenu={ToggleMenu} ref={ref} />
      <section className={`main-menu${hiddenMenu ? `` : ` active-menu`}`}>
        <NavigationLogo closeMenu={closeMenu} />
        <NavigationMenu closeMenu={closeMenu} />
        <NavigationSocials />
      </section>
    </article>
  );
};

export default Navigation;
