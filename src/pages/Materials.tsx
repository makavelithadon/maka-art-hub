import { useIntl } from "react-intl";
import { Link } from "react-router";

export const Materials = () => {
  const intl = useIntl();

  return (
    <ul>
      <li>
        <Link to="https://www.youtube.com/@MakaArtYT" className="button fz-l">
          {intl.formatMessage({ id: "canvas" })}
        </Link>
      </li>
      <li>
        <Link
          to="https://www.instagram.com/maka__a_r_t"
          className="button fz-l"
        >
          {intl.formatMessage({ id: "paper" })}
        </Link>
      </li>
      <li>
        <Link
          to="https://www.facebook.com/romuald.duconseil.5"
          className="button fz-l"
        >
          {intl.formatMessage({ id: "glass-painting" })}
        </Link>
      </li>
    </ul>
  );
};
