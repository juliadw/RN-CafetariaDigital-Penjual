import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgTime = props => (
  <Svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      opacity="0.6"
      d="M5 1C7.205 1 9 2.795 9 5C9 7.205 7.205 9 5 9C2.795 9 1 7.205 1 5C1 2.795 2.795 1 5 1ZM5 0C2.2385 0 0 2.2385 0 5C0 7.7615 2.2385 10 5 10C7.7615 10 10 7.7615 10 5C10 2.2385 7.7615 0 5 0ZM6.9 6.7L5.5 4.8335V2.5H4.5V5.1665L6.1 7.2995L6.9 6.7Z"
      fill="#323232"
    />
  </Svg>
);

export default SvgTime;
