import { useIntl } from "react-intl";
import { Link } from "react-router";

export const SupportMe = () => {
  const intl = useIntl();

  return (
    <ul>
      <li>
        <Link className="button" to="https://paypal.me/rduconseil">
          {intl.formatMessage({
            id: "PayPalMe",
          })}
        </Link>
      </li>
      <li>
        <Link className="button" to="https://ko-fi.com/maka_art">
          {intl.formatMessage({
            id: "kofi",
          })}
        </Link>
      </li>
    </ul>
  );
};
