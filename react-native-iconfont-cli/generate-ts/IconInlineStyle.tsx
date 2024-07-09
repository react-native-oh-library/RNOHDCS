/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps, SvgCss } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const xml = `
<svg xmlns="http://www.w3.org/2000/svg">
  <style type="text/css">
    <![CDATA[

        circle {
           stroke: #006600;
           fill:   #00cc00;
        }

      ]]>
  </style>
  <circle cx="40" cy="40" r="24"/>
</svg>
`

let IconInlineStyle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <SvgCss xml={xml}  width={size} height={size} {...rest} />
  );
};

IconInlineStyle.defaultProps = {
  size: 20,
};

IconInlineStyle = React.memo ? React.memo(IconInlineStyle) : IconInlineStyle;

export default IconInlineStyle;
