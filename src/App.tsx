import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <img
          className="picture"
          src="src/assets/picture.png"
          alt="Maka Art profile picture"
        />
        <img className="logo" src="src/assets/logo.png" alt="Maka Art logo" />
        <div className="description">
          <h1>🇫🇷 Anime Paint Artist</h1>
          <h2>🇫🇷 Have a wonderful day – Maka Art ❤️</h2>
        </div>
        <nav>
          <ul>
            <li>
              <a className="button">Materials I use</a>
            </li>
            <li>
              <a className="button">Commission info</a>
            </li>
            <li>
              <a className="button">Social links</a>
            </li>
            <li>
              <a className="button">Support me (ko-fi)</a>
            </li>
            <li>
              <a className="button">PayPal.me</a>
            </li>
          </ul>
        </nav>
      </div>
      <footer>
        <p>Made with ♥️... and a keyboard!</p>
      </footer>
    </>
  );
}

export default App;
