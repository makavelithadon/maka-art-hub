import { FormattedMessage } from "react-intl";
import { Link, Outlet, useLocation } from "react-router";
import { LangSwitcher } from "./lang/LangSwitcher";
import { BackButton } from "./components/BackButton";
// import { useEffect } from "react";

import logo from "./assets/logo.png";
import profilePic from "./assets/picture.png";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { paths, routes } from "./routes";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const matchedRoute = routes.find((route) => route.path === pathname);

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
        {matchedRoute && matchedRoute.title ? (
          <h1 className="zooja">
            <FormattedMessage id={matchedRoute.title} />
          </h1>
        ) : null}
        <Outlet />
        <Analytics />
      </div>
      {pathname !== paths.home ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <BackButton />
        </div>
      ) : null}
      {pathname === paths.home ? (
        <div style={{ display: "inline-block", marginTop: 40 }}>
          <h3 style={{ fontFamily: "Zooja Pro", fontSize: "1.5rem" }}>
            <FormattedMessage id="lastYoutubeVideo" />
          </h3>
          <div style={{ padding: "1.5rem", maxWidth: 400, margin: "0 auto" }}>
            <LiteYouTubeEmbed
              id="6bZQ55K5i5Q"
              title="Maka Art - Paint With Me - Howl's Moving Castle"
              autoplay
              lazyLoad
            />
          </div>
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
