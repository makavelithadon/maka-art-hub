import { FormattedMessage } from "react-intl";
import { Link, Outlet, useLocation } from "react-router";
import { LangSwitcher } from "./lang/LangSwitcher";
import { BackButton } from "./components/BackButton";
// import { useEffect } from "react";

import logo from "./assets/logo.png";
import profilePic from "./assets/picture.png";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { paths } from "./routes";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          height={43}
        />
        <Outlet />
        <Analytics />
      </div>
      {pathname !== paths.home ? (
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
