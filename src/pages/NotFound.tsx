import { useTypedIntl } from "../lang/hooks";

export const NotFound = () => {
  const intl = useTypedIntl();

  return (
    <div
      className="poppins-black"
      style={{ marginTop: "4rem", marginBottom: "4rem", fontSize: "1.75rem" }}
      dangerouslySetInnerHTML={{
        __html: `${intl.formatMessage({ id: "notFound" })}`,
      }}
    ></div>
  );
};
