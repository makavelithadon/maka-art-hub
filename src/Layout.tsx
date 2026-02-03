import { FormattedMessage } from "react-intl";
import { Link, Outlet, useLocation } from "react-router";
import { LangSwitcher } from "./lang/LangSwitcher";
import { BackButton } from "./components/BackButton";
// import { useEffect } from "react";

import logo from "./assets/logo.png";
import profilePic from "./assets/picture.png";

export const Layout = () => {
  const location = useLocation();

  // Scroll to top on page change to prevent too more scroll on each page
  // As of now we don't want to animate the scroll to top
  //   useEffect(() => {
  //     if (window.scrollY > 0) {
  //       window.scrollTo({
  //         top: 0,
  //         left: 0,
  //         behavior: "instant",
  //       });
  //     }
  //   });

  return (
    <>
      <LangSwitcher />
      <div className="container">
        <Link to="/">
          <img
            className="picture"
            src={profilePic}
            alt="Maka Art profile picture"
          />
        </Link>
        <img
          className="logo"
          src={logo}
          alt="Maka Art logo"
          style={{ marginBottom: "3rem" }}
          width={130}
          height={63}
        />
        <Outlet />
      </div>
      {location.pathname !== "/" ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BackButton />
        </div>
      ) : null}
      <footer>
        <p className="fz-xl mb-1">
          <FormattedMessage id="footer" />
        </p>
        <p className="poppins-medium">©Maka Art – {new Date().getFullYear()}</p>
      </footer>
    </>
  );
};
