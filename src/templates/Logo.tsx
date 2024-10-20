/* eslint-disable react/jsx-no-undef */
import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      // eslint-disable-next-line react/jsx-no-undef, react/jsx-no-undef,
      react/jsx-no-undef
      <Image src="/images/logo.png" alt="Logo" width={size} height={size} />
      &nbsp;
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
