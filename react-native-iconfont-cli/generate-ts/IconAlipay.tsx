/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconAlipay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 692.736c0-69.632 51.2-106.496 88.064-111.104 111.104-18.432 264.192 74.24 264.192 74.24-69.632 88.064-166.912 134.144-241.152 134.144-65.024-4.608-111.104-41.472-111.104-97.28z"
        fill={getIconColor(color, 0, '#5B8BD4')}
      />
      <Path
        d="M979.456 729.6c-13.824-4.608-329.216-101.888-319.488-111.104 46.592-55.808 78.848-185.344 78.848-185.344v-27.648h-185.344V335.872h226.816v-41.472h-226.816V192.512H460.8v97.28H257.024v41.472H460.8v69.632H298.496v27.648h333.824c0 13.824-23.04 106.496-46.08 148.48-4.608-9.216-153.088-60.416-236.544-65.024-88.064 4.608-157.696 32.256-189.952 97.28-46.592 120.32 27.648 241.152 194.56 241.152 27.648 0 162.304-13.824 264.192-153.088 27.648 13.824 185.344 92.672 282.624 143.872-92.672 111.104-231.936 180.736-389.12 180.736-280.576 1.024-508.928-226.304-509.44-506.88v-3.072C1.024 231.424 227.84 3.072 508.928 2.56h3.072c280.576-1.024 508.928 226.304 509.44 506.88v3.072c4.608 82.944-13.824 152.576-41.984 217.088z"
        fill={getIconColor(color, 1, '#5B8BD4')}
      />
    </Svg>
  );
};

IconAlipay.defaultProps = {
  size: 20,
};

IconAlipay = React.memo ? React.memo(IconAlipay) : IconAlipay;

export default IconAlipay;
