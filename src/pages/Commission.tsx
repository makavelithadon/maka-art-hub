import { useTypedIntl } from "../lang/hooks";

export const Commission = () => {
  const intl = useTypedIntl();

  return (
    <>
      <div
        className="commission"
        dangerouslySetInnerHTML={{
          __html: `${intl.formatMessage({ id: "commission-info" })}`,
        }}
      ></div>
    </>
  );
};
