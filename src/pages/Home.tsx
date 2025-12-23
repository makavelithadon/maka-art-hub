import { useIntl } from "react-intl";
import { Link } from "react-router";

export const Home = () => {
  const intl = useIntl();

  return (
    <>
      <div className="description">
        <h1 className="poppins-bold fz-s">🇫🇷 Anime Paint Artist</h1>
        <h2>
          <span className="poppins-medium fz-m">Have a wonderful day – </span>
          <span className="zooja fz-l">Maka Art ❤️</span>
        </h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link className="button" to="/materials">
              {intl.formatMessage({
                id: "materials",
              })}
            </Link>
          </li>
          <li>
            <Link className="button" to="/commission">
              {intl.formatMessage({
                id: "comissionInfo",
              })}
            </Link>
          </li>
          <li>
            <Link className="button" to="/social">
              {intl.formatMessage({
                id: "socialLinks",
              })}
            </Link>
          </li>
          <li>
            <Link className="button" to="/support-me">
              {intl.formatMessage({
                id: "supportMe",
              })}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
