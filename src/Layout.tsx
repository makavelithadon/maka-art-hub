import { FormattedMessage } from "react-intl";
import { Outlet } from "react-router";
import { LangSwitcher } from "./lang/LangSwitcher";

export const Layout = () => {
  return (
    <>
      <LangSwitcher />
      <div className="container">
        <img
          className="picture"
          src="src/assets/picture.png"
          alt="Maka Art profile picture"
        />
        <img className="logo" src="src/assets/logo.png" alt="Maka Art logo" />
        <Outlet />
      </div>
      <footer>
        <p className="fz-xl">
          <FormattedMessage id="footer" />
        </p>
        <p className="poppins-medium">
          © Maka Art – {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};
