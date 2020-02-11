import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_GREY } from '../../app/styles';

const SvgAccount = props => {
  const color = props.active ? COLOR_BASE_PRIMARY_MAIN : COLOR_GREY;
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill={color} xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M2.8875 22.9125V23.1125H3.0875H22.9125H23.1125V22.9125V21.125C23.1125 20.9185 22.9913 20.7199 22.8333 20.5445C22.6697 20.3629 22.4376 20.1741 22.1542 19.9847C21.5863 19.6051 20.7858 19.205 19.8399 18.8403C17.9478 18.1109 15.4451 17.5125 13 17.5125C10.5532 17.5125 8.05056 18.1109 6.15891 18.8403C5.21315 19.205 4.41295 19.6051 3.84531 19.9847C3.56208 20.1742 3.33005 20.3629 3.1665 20.5446C3.00861 20.72 2.8875 20.9185 2.8875 21.125V22.9125ZM13 0.2C16.476 0.2 19.3 3.02249 19.3 6.5C19.3 9.97592 16.4759 12.8 13 12.8C9.5209 12.8 6.7 9.97598 6.7 6.5C6.7 3.02242 9.52086 0.2 13 0.2ZM13 3.05C11.0972 3.05 9.55 4.59717 9.55 6.5C9.55 8.40283 11.0972 9.95 13 9.95C14.9011 9.95 16.45 8.4029 16.45 6.5C16.45 4.5971 14.9011 3.05 13 3.05ZM13 14.825C15.1412 14.825 18.3659 15.3627 21.0503 16.4367C22.3923 16.9737 23.5867 17.6397 24.4423 18.4294C25.2966 19.2177 25.8 20.1157 25.8 21.125V25.8H0.2V21.125C0.2 20.1157 0.703225 19.2177 1.55723 18.4293C2.41263 17.6397 3.60668 16.9736 4.94849 16.4367C7.63243 15.3627 10.8572 14.825 13 14.825Z"
        fill={color}
        stroke="white"
        strokeWidth="0.4"
      />
    </Svg>
  );
};

export default SvgAccount;