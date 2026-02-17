import { FormattedMessage } from "react-intl";

export const Footer = () => {
  return (
    <footer>
      <p className="fz-xl mb-1">
        <FormattedMessage id="footer" />
      </p>
      <p className="poppins-medium">©Maka Art – {new Date().getFullYear()}</p>
    </footer>
  );
};
