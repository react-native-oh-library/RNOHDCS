export interface CaseParams {
    type?: | 'mulKey' | 'key-value' | undefined,
    id?: string,
    key?: string,
    values?: string[] | Object[],
    title?: string,
    desc?: string,
    othersProps?: Object,
    showOtherProps?: boolean,
    showBasicProps?: boolean,
    opacity?: string
}

export function genCommonProps() {
    return [
        {
            type: 'contentInset',
            key: 'contentInset',
            values: [
                { contentInset: { top: 0, left: 0, right: 0, bottom: 0 } },
                { contentInset: { top: 20, left: 20, right: 20, bottom: 20 } },
                { contentInset: { top: 30, bottom: 30 } }],
            title: 'contentInset',
        },
        {
            type: 'yMin',
            key: 'yMin',
            values: [{ yMin: 0 }, { yMin: 20 }, { yMin: 50 }],
            title: 'yMin',
        },
        {
            type: 'xMin',
            key: 'xMin',
            values: [{ xMin: 0 }, { xMin: -10 }, { xMin: -20 }],
            title: 'xMin',
        },
        {
            type: 'xMax',
            key: 'xMax',
            values: [{ xMax: 10 }, { xMax: 20 }, { xMax: 200 }],
            title: 'xMax',
        },
        {
            type: 'showGrid',
            key: 'showGrid',
            values: [{ showGrid: true }, { showGrid: false }],
            title: 'showGrid',
        },
        {
            type: 'animate',
            key: 'animate',
            values: [{ animate: true, animationDuration: 1000 }, { animate: false }],
            title: 'animate',
        },
    ]
}

export const ordersProp = [
    {
        lable: 'order:{d3.stackOrderAppearance}',
        value: 'stackOrderAppearance',
    },
    {
        lable: 'order:{d3.stackOrderAscending}',
        value: 'stackOrderAscending',
    },
    {
        lable: 'order:{d3.stackOrderDescending}',
        value: 'stackOrderDescending',
    },
    {
        lable: 'order:{d3.stackOrderInsideOut}',
        value: 'stackOrderInsideOut',
    },
];

export const offsetsProp = [
    {
        lable: 'offset:{d3.stackOffsetDiverging}',
        value: 'stackOffsetDiverging',
    },
    {
        lable: 'offset:{d3.stackOffsetExpand}',
        value: 'stackOffsetExpand',
    },
    {
        lable: 'offset:{d3.stackOffsetNone}',
        value: 'stackOffsetNone',
    },
    {
        lable: 'offset:{d3.stackOffsetSilhouette}',
        value: 'stackOffsetSilhouette',
    },
    {
        lable: 'offset:{d3.stackOffsetWiggle}',
        value: 'stackOffsetWiggle',
    }
];

export const stackedDatas = [
    {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
    },
    {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
    },
];

export const stackesKeys = ['apples', 'bananas', 'cherries', 'dates'];

export const cursProp = [
    {
      label: '{curve:shape.curveLinear}',
      value: 'curveLinear',
    },
    {
      label: '{curve:curveNatural}',
      value: 'curveNatural',
    },
    {
      label: '{curve:shape.curveBasis}',
      value: 'curveBasis',
    },
    {
      label: '{curve:shape.curveBasisClosed}',
      value: 'curveBasisClosed',
    },
    {
      label: '{curve:shape.curveBasisOpen}',
      value: 'curveBasisOpen',
    },
    {
      label: '{curve:shape.curveBumpX}',
      value: 'curveBumpX',
    },
    {
      label: '{curve:shape.curveBumpY}',
      value: 'curveBumpY',
    },
    {
      label: '{curve:shape.curveCardinal}',
      value: 'curveCardinal',
    },
    {
      label: '{curve:shape.curveCardinalClosed}',
      value: 'curveCardinalClosed',
    },
    {
      label: '{curve:shape.curveCardinalOpen}',
      value: 'curveCardinalOpen',
    },
    {
      label: '{curve:shape.curveCatmullRom}',
      value: 'curveCatmullRom',
    },
    {
      label: '{curve:shape.curveCatmullRomClosed}',
      value: 'curveCatmullRomClosed',
    },
    {
      label: '{curve:shape.curveCatmullRomOpen}',
      value: 'curveCatmullRomOpen',
    },
    {
      label: '{curve:shape.curveLinearClosed}',
      value: 'curveLinearClosed',
    },
    {
      label: '{curve:shape.curveMonotoneX}',
      value: 'curveMonotoneX',
    },
    {
      label: '{curve:curveMonotoneY}',
      value: 'curveMonotoneY',
    },
    {
      label: '{curve:curveStep}',
      value: 'curveStep',
    },
    {
      label: '{curve:curveStepAfter}',
      value: 'curveStepAfter',
    },
    {
      label: '{curve:curveStepBefore}',
      value: 'curveStepBefore',
    },
  ]