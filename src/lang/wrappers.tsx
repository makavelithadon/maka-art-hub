import { FormattedMessage } from "react-intl";
import type { Translation } from ".";

type Props = {
  id: Translation;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values?: Record<string, any>;
};

export const T = ({ id, values }: Props) => (
  <FormattedMessage id={id} values={values} />
);
