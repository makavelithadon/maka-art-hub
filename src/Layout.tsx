import { Outlet } from "react-router";

// Example

export const Layout = () => {
  return (
    <>
      <div className="container">
        <img
          className="picture"
          src="src/assets/picture.png"
          alt="Maka Art profile picture"
        />
        <img className="logo" src="src/assets/logo.png" alt="Maka Art logo" />
        <Outlet context />
      </div>
      <footer>
        <p>Made with ♥️... and a keyboard!</p>
      </footer>
    </>
  );
};
