import {Alert, View, Text} from 'react-native';
export interface CaseParams {
  type?: 'mulKey' | 'key-value' | undefined;
  id?: string;
  key?: string;
  values?: string[] | Object[];
  title?: string;
  desc?: string;
  othersProps?: Object;
  showOtherProps?: boolean;
  showBasicProps?: boolean;
  opacity?: string;
}

export function genGradientsCommonProps(): CaseParams[] {
  return [
    {
      key: 'colors',
      values: [
        ['blue', 'yellow'],
        ['lightblue', '#ffaa00'],
        ['#ff00ee', 'pink'],
      ],
    },
    {
      key: 'positions',
      values: [
        [40, 100],
        [60, 150],
        [80, 200],
      ],
    },
    {
      key: 'mode',
      values: ['clamp', 'repeat', 'mirror', 'decal'],
    },
    {
      key: 'flags',
      values: [0, 1],
    },
    {
      key: 'transform',
      values: [
        [{skewX: Math.PI / 6}],
        [{scale: Math.PI / 6}],
        [{translate: [10, 20, 30]}],
      ],
    },
  ];
}

export function genStrokeWidthColorCommonProps(): CaseParams[] {
  return [
    {
      key: 'strokeWidth',
      values: [4, 6, 8],
      othersProps: {
        style: 'stroke',
      },
    },
    {
      key: 'color',
      values: ['lightblue', '#ff00ee', 'pink'],
      othersProps: {
        strokeWidth: 5,
      },
    },
  ];
}

export function genStyleColorCommonProps(): CaseParams[] {
  return [
    {
      key: 'style',
      values: ['fill', 'stroke'],
      othersProps: {
        strokeWidth: 5,
      },
    },
    {
      key: 'color',
      values: ['skyblue', '#ffddee', 'cyan'],
      othersProps: {
        strokeWidth: 5,
      },
    },
  ];
}

export function genPaint_BlendModeProps(): CaseParams[] {
  return [
    {
      key: 'blendMode',
      values: [
        'clear',
        'src',
        'dst',
        'srcOver',
        'dstOver',
        'srcIn',
        'dstIn',
        'srcOut',
        'dstOut',
        'srcATop',
        'dstATop',
        'xor',
        'plus',
        'modulate',
        'screen',
        'overlay',
        'darken',
        'lighten',
        'colorDodge',
        'colorBurn',
        'hardLight',
        'softLight',
        'difference',
        'exclusion',
        'multiply',
        'hue',
        'saturation',
        'color',
        'luminosity',
      ],
    },
  ];
}

export function genImage_fitProps(): CaseParams[] {
  return [
    {
      key: 'fit',
      values: [
        'cover',
        'contain',
        'fill',
        'fitHeight',
        'fitWidth',
        'none',
        'scaleDown',
      ],
    },
  ];
}

export function genPaintProps(): CaseParams[] {
  return [
    {
      key: 'color',
      values: ['#000', 'pink', 'green', 'red'],
    },
    {
      key: 'strokeWidth',
      values: [4, 6, 8],
    },
    {
      key: 'style',
      values: ['stroke', 'fill'], //"stroke" | "fill" | undefined
    },
    {
      key: 'strokeJoin',
      values: ['round', 'miter', 'bevel'], //"round" | "miter" | "bevel" | undefined
    },
    {
      key: 'strokeCap',
      values: ['round', 'butt', 'square'], //"round" | "butt" | "square" | undefined
    },
    {
      key: 'strokeMiter',
      values: [2, 5, 8],
    },
    {
      key: 'opacity',
      values: [0.1, 0.5, 1],
    },
    {
      key: 'antiAlias',
      values: [true, false],
    },
    {
      key: 'dither',
      values: [true, false],
    },
  ];
}

export function genTransformProps() {
  return [
    {
      key: 'transform',
      values: genTransformValue,
    },
    {
      key: 'origin',
      values: ['true', 'false'],
    },
    {
      key: 'matrix',
      values: ['true', 'false'],
    },
  ];
}

export function genTransformValue() {
  return [
    {
      key: 'translate',
      values: [
        ['10', '20', '30'],
        ['20', '10', '30'],
        ['30', '20', '10'],
      ],
    },
    {
      key: 'translateX',
      values: ['10', '20', '30'],
    },
    {
      key: 'translateY',
      values: ['10', '20', '30'],
    },
    {
      key: 'translateZ',
      values: ['10', '20', '30'],
    },
    {
      key: 'scale',
      values: [
        ['0.5', '1.2'],
        ['0.7', '1.4'],
      ],
    },
    {
      key: 'scaleX',
      values: ['0.7', '1.2', '1.5'],
    },
    {
      key: 'scaleY',
      values: ['0.7', '1.2', '1.5'],
    },
    {
      key: 'skewX',
      values: ['0.1', '0.5', '1.1'],
    },
    {
      key: 'skewY',
      values: ['0.1', '0.5', '1.1'],
    },
  ];
}
