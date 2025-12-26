import { Link } from "react-router";
import { useTypedIntl } from "../lang/hooks";

export const Materials = () => {
  const intl = useTypedIntl();

  return (
    <ul>
      <li>
        <Link
          to="https://www.amazon.fr/shop/maka__a_r_t/list/1AAZIKPMFBD1K?ref_=cm_sw_r_cp_ud_hype_hm_sf_e_DMRVTTTQWDQKTX6E9TQW"
          className="button fz-l"
        >
          {intl.formatMessage({ id: "materials.acrylic" })}
        </Link>
      </li>
      <li>
        <Link
          to="https://www.amazon.fr/shop/maka__a_r_t/list/1IJ2BGM9UDDRV?ref_=cm_sw_r_cp_ud_hype_hm_sf_e_T3GE5RG0BDHGH9GBJ515"
          className="button fz-l"
        >
          {intl.formatMessage({ id: "materials.airbrush" })}
        </Link>
      </li>
      <li>
        <Link
          to="https://www.amazon.fr/shop/maka__a_r_t/list/17UJS4NR9UGGE?ref_=cm_sw_r_cp_ud_hype_hm_sf_e_2X287VQ76XMA6NZTZRTX"
          className="button fz-l"
        >
          {intl.formatMessage({ id: "materials.airbrush-supplies" })}
        </Link>
      </li>
      <li>
        <Link
          to="https://www.amazon.fr/shop/maka__a_r_t/list/YH6EDASY1I5U?ref_=cm_sw_r_cp_ud_hype_hm_sf_e_TBBDB2KD35X19NE4D2Z6"
          className="button fz-l"
        >
          {intl.formatMessage({ id: "materials.brushes" })}
        </Link>
      </li>
    </ul>
  );
};
