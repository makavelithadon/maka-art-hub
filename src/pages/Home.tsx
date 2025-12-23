import { Link } from "react-router";

export const Home = () => (
  <>
    <div className="description">
      <h1>🇫🇷 Anime Paint Artist</h1>
      <h2>🇫🇷 Have a wonderful day – Maka Art ❤️</h2>
    </div>
    <nav>
      <ul>
        <li>
          <Link className="button" to="/materials">
            Materials I use
          </Link>
        </li>
        <li>
          <Link className="button" to="/commission">
            Commission info
          </Link>
        </li>
        <li>
          <Link className="button" to="/social">
            Social links
          </Link>
        </li>
        <li>
          <Link className="button" to="/support-me">
            Support me (ko-fi)
          </Link>
        </li>
        <li>
          <Link className="button" to="/paypal-me">
            PayPal.me
          </Link>
        </li>
      </ul>
    </nav>
  </>
);
