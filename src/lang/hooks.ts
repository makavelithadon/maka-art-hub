// i18n/useTypedIntl.ts
import { useIntl } from 'react-intl';
import type { Translation } from '.';

export function useTypedIntl() {
  const intl = useIntl();

  function formatMessage(
    descriptor: { id: Translation },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values?: Record<string, any>
  ) {
    return intl.formatMessage(descriptor, values);
  }

  return { ...intl, formatMessage };
}