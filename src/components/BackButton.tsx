import { useIntl } from "react-intl";
import { useNavigate } from "react-router";

export const BackButton = () => {
  const navigate = useNavigate();
  const intl = useIntl();

  return (
    <button className="button" onClick={() => navigate(-1)}>
      <span style={{ marginRight: ".6rem" }}>👈</span>{" "}
      {intl.formatMessage({ id: "back" })}
    </button>
  );
};
