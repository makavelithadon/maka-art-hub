import { FormattedMessage } from "react-intl";
import { Link, Outlet, useLocation } from "react-router";
import { LangSwitcher } from "./lang/LangSwitcher";
import { BackButton } from "./components/BackButton";

import logo from "./assets/logo.png";
import profilePic from "./assets/picture.png";
import { Analytics } from "@vercel/analytics/react";
import { paths } from "./routes";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { useCurrentRoute, useScrollToTop } from "./hooks";
import { Footer } from "./components/Footer";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

export const Layout = () => {
  const { pathname } = useLocation();
  const currentRoute = useCurrentRoute();

  useScrollToTop();

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
        {currentRoute && currentRoute.title ? (
          <h1>
            <FormattedMessage id={currentRoute.title} />
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
          <h3
            style={{
              fontFamily: "Special Gothic Expanded One",
              fontSize: "1.5rem",
            }}
          >
            <FormattedMessage id="lastYoutubeVideo" />
          </h3>
          <div style={{ padding: "1.5rem", maxWidth: 400, margin: "0 auto" }}>
            <LiteYouTubeEmbed
              id="6bZQ55K5i5Q"
              title="Maka Art - Paint With Me - Howl's Moving Castle"
              lazyLoad
            />
          </div>
        </div>
      ) : null}
      <Footer />
    </>
  );
};
