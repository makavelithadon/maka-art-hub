import { useNavigate } from "react-router";
import { useTypedIntl } from "../lang/hooks";

export const BackButton = () => {
  const navigate = useNavigate();
  const intl = useTypedIntl();

  return (
    <button className="button" onClick={() => navigate(-1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 256 256"
        enableBackground="new 0 0 256 256"
        xmlSpace="preserve"
      >
        <metadata>
          {" "}
          Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
        </metadata>
        <path d="M93.9,40.1c-1.1,0.3-2.8,1.3-3.9,2.1C88.9,42.9,71.1,60.5,50.5,81C8.1,123.4,10,121.2,10,128c0,3.4,0.2,4.2,1.3,6.5c1.9,3.7,77.4,79.2,80.8,80.8c3.3,1.6,9.2,1.6,12.5,0c2.9-1.5,5.7-4.3,7.2-7.2c1.1-2.3,1.1-2.4,1.2-19l0.1-16.7l1-0.2c0.6-0.1,24.1-4.8,52.2-10.2c61.2-11.9,62-12,65-13.2c7.2-2.7,12.6-8.9,14.1-16.1c2.4-11.7-4.3-22.7-16-26.1c-1.3-0.4-27.1-5.5-57.2-11.4c-30.2-5.9-55.8-10.9-57-11.1l-2.2-0.5L113,67l-0.1-16.7l-1.2-2.3c-1.4-3-4.2-5.8-7.1-7.2C101.9,39.5,96.8,39.1,93.9,40.1z" />
      </svg>
      {intl.formatMessage({ id: "back" })}
    </button>
  );
};
