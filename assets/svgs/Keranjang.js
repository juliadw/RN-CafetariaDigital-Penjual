import React from 'react';
import Svg, {
  Path,
  G,
  Defs,
  Filter,
  FeFlood,
  FeBlend,
  FeOffset,
  FeColorMatrix,
  FeGaussianBlur
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgKeranjang = props => (
  <Svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d)">
      <rect x="20" y="15" width="60" height="60" rx="5" fill="#FF9957" />
    </G>
    <Path
      d="M36.6667 31.6667H46.6667V41.6667H36.6667V31.6667ZM63.3333 31.6667V41.6667H53.3333V31.6667H63.3333ZM53.3333 50H56.6667V46.6667H53.3333V43.3333H56.6667V46.6667H60V43.3333H63.3333V46.6667H60V50H63.3333V55H60V58.3333H56.6667V55H51.6667V58.3333H48.3333V51.6667H53.3333V50ZM56.6667 50V55H60V50H56.6667ZM36.6667 58.3333V48.3333H46.6667V58.3333H36.6667ZM40 35V38.3333H43.3333V35H40ZM56.6667 35V38.3333H60V35H56.6667ZM40 51.6667V55H43.3333V51.6667H40ZM36.6667 43.3333H40V46.6667H36.6667V43.3333ZM45 43.3333H51.6667V50H48.3333V46.6667H45V43.3333ZM48.3333 35H51.6667V41.6667H48.3333V35ZM33.3333 28.3333V35H30V28.3333C30 27.4493 30.3512 26.6014 30.9763 25.9763C31.6014 25.3512 32.4493 25 33.3333 25H40V28.3333H33.3333ZM66.6667 25C67.5507 25 68.3986 25.3512 69.0237 25.9763C69.6488 26.6014 70 27.4493 70 28.3333V35H66.6667V28.3333H60V25H66.6667ZM33.3333 55V61.6667H40V65H33.3333C32.4493 65 31.6014 64.6488 30.9763 64.0237C30.3512 63.3986 30 62.5507 30 61.6667V55H33.3333ZM66.6667 61.6667V55H70V61.6667C70 62.5507 69.6488 63.3986 69.0237 64.0237C68.3986 64.6488 67.5507 65 66.6667 65H60V61.6667H66.6667Z"
      fill="white"
    />
    <Defs>
      <Filter
        id="filter0_d"
        x="0"
        y="0"
        width="100"
        height="100"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <FeFlood flood-opacity="0" result="BackgroundImageFix" />
        <FeOffset dy="5" />
        <FeGaussianBlur stdDeviation="10" />
        <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </Filter>
    </Defs>
  </Svg>
);

export default SvgKeranjang;
