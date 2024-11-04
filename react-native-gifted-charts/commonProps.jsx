import { yAxisSides } from 'gifted-charts-core';

export const axesProps = [
  { xAxisLength: 200 }, { xAxisLength: 300 },
  { xAxisColor: 'red', }, { xAxisColor: 'blue' },
  { xAxisThickness: 5, }, { xAxisThickness: 15 },
  { yAxisColor: 'red' }, { yAxisColor: 'blue' },
  { yAxisThickness: 5 }, { yAxisThickness: 15 },
  { yAxisExtraHeight: 20 }, { yAxisExtraHeight: 30 },
  { xAxisType: 'solid' }, { xAxisType: 'dashed' },
  { yAxisLabelWidth: 25 }, { yAxisLabelWidth: 45 },
  { yAxisTextStyle: { color: 'red', backgroundColor: 'blue' } }, { yAxisTextStyle: { color: 'blue', backgroundColor: 'red' } },
  { yAxisTextNumberOfLines: 1, yAxisLabelPrefix: "hello", stepHeight: 30 }, { yAxisTextNumberOfLines: 2, stepHeight: 30, yAxisLabelPrefix: "hello", },
  { yAxisLabelContainerStyle: { backgroundColor: 'blue' } }, { yAxisLabelContainerStyle: { backgroundColor: 'red' } },
  { trimYAxisAtTop: true }, { trimYAxisAtTop: false },
  { horizontalRulesStyle: { backgroundColor: 'blue' } }, { horizontalRulesStyle: { backgroundColor: 'red' } },
  { showFractionalValues: true, yAxisLabelWidth: 50 }, { showFractionalValues: false, yAxisLabelWidth: 50 },
  { roundToDigits: 1, showFractionalValues: true, yAxisLabelWidth: 50, data: [{ value: 49.5 }, { value: 64.2 }, { value: 52.2 }, { value: 76.5 }] },
  { roundToDigits: 2, showFractionalValues: true, yAxisLabelWidth: 50, data: [{ value: 49.5 }, { value: 64.2 }, { value: 52.2 }, { value: 76.5 }] },
  { yAxisLabelPrefix: '$' }, { yAxisLabelPrefix: '#' },
  { yAxisLabelSuffix: '$' }, { yAxisLabelSuffix: '#' },
  { hideYAxisText: true }, { hideYAxisText: false },
  { width: 280, yAxisSide: yAxisSides.RIGHT }, { width: 280, yAxisSide: yAxisSides.LEFT },
  { rulesLength: 100, rulesColor: 'red' }, { rulesLength: 300, rulesColor: 'blue' },
  { rulesThickness: 5 }, { rulesThickness: 10 },
  { hideRules: true }, { hideRules: false },
  { rulesType: 'solid', rulesThickness: 5 }, { rulesType: 'dashed', rulesThickness: 5 },
  { dashWidth: 10 }, { dashWidth: 20 },
  { dashGap: 10 }, { dashGap: 20 },
  {
    rulesConfigArray: [
      { rulesLength: 210, rulesColor: 'red', rulesType: 'solid', rulesThickness: 5, dashWidth: 40, dashGap: 5 },
      { rulesLength: 180, rulesColor: 'blue', rulesType: 'dotted', rulesThickness: 8, dashWidth: 40, dashGap: 8 },
      { rulesLength: 100, rulesColor: 'green', rulesType: 'dashed', rulesThickness: 10, dashWidth: 40, dashGap: 10 }]
  },
  { showReferenceLine1: true }, { showReferenceLine1: false },
  {
    showReferenceLine1: true,
    referenceLine1Config: {
      thickness: 2, width: 200, color: 'red', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '$100', labelTextStyle: { color: 'blue' }, zIndex: 100, stripBehindBars: false
    },
    referenceLine1Position: 100,
  },
  {
    showReferenceLine1: true,
    referenceLine1Config: {
      thickness: 2, width: 200, color: 'red', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '$100', labelTextStyle: { color: 'blue' }, zIndex: 100, stripBehindBars: true
    },
    referenceLine1Position: 50,
  },
  {
    showReferenceLine2: true,
    referenceLine2Position: 50,
    referenceLine2Config: {
      thickness: 2, width: 200, color: 'blue', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '第二条线', labelTextStyle: { color: 'blue' }, zIndex: 100, stripBehindBars: true
    },
    showReferenceLine1: true,
    referenceLine1Position: 20,
    referenceLine1Config: {
      thickness: 2, width: 200, color: 'red', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '第一条线', labelTextStyle: { color: 'blue' }, zIndex: 100, stripBehindBars: true
    },
  },
  {
    showReferenceLine3: true,
    referenceLine3Position: 90,
    referenceLine3Config: {
      thickness: 2, width: 200, color: 'green', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '第三条线', labelTextStyle: { color: 'blue' }, zIndex: 100, stripBehindBars: true
    },
    showReferenceLine2: true,
    referenceLine2Position: 50,
    referenceLine2Config: {
      thickness: 2, width: 200, color: 'blue', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '第二条线', labelTextStyle: { color: 'blue' }, zIndex: 100, stripBehindBars: true
    },
    showReferenceLine1: true,
    referenceLine1Position: 20,
    referenceLine1Config: {
      thickness: 2, width: 200, color: 'red', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '第一条线', labelTextStyle: { color: 'blue' }, zIndex: 100, stripBehindBars: true
    },
  },
  { showVerticalLines: true }, { showVerticalLines: false },
  { showVerticalLines: true, verticalLinesColor: 'red' }, { showVerticalLines: true, verticalLinesColor: 'blue' },
  { verticalLinesThickness: 5, showVerticalLines: true, verticalLinesColor: 'red', verticalLinesHeight: 180 },
  { verticalLinesThickness: 10, showVerticalLines: true, verticalLinesColor: 'blue', verticalLinesHeight: 150 },
  { verticalLinesStrokeDashArray: [2, 8], verticalLinesThickness: 10, showVerticalLines: true, verticalLinesColor: 'blue', verticalLinesHeight: 150 },
  { verticalLinesStrokeDashArray: [3, 9], verticalLinesThickness: 5, showVerticalLines: true, verticalLinesColor: 'red', verticalLinesHeight: 180 },
  { verticalLinesShift: 30, showVerticalLines: true, verticalLinesColor: 'red' }, { verticalLinesShift: 40, showVerticalLines: true, verticalLinesColor: 'blue' },
  { verticalLinesZIndex: 0, showVerticalLines: true, verticalLinesColor: 'red' }, { verticalLinesZIndex: 40, showVerticalLines: true, verticalLinesColor: 'blue' },
  { noOfVerticalLines: 2, showVerticalLines: true, verticalLinesColor: 'red' }, { noOfVerticalLines: 4, showVerticalLines: true, verticalLinesColor: 'blue' },
  { verticalLinesSpacing: 20, showVerticalLines: true, verticalLinesColor: 'red' }, { verticalLinesSpacing: 40, showVerticalLines: true, verticalLinesColor: 'blue' },
  { showXAxisIndices: true, xAxisIndicesHeight: 10, xAxisIndicesWidth: 10, xAxisIndicesColor: 'red' },
  { showYAxisIndices: true, yAxisIndicesHeight: 10, yAxisIndicesWidth: 10, yAxisIndicesColor: 'red' },
  { yAxisLabelTexts: [10, 50, 100, 150, 200] }, { yAxisLabelTexts: [20, 40, 80, 160, 240] },
  { xAxisLabelTexts: [10, 50, 100, 150, 200], data: [{ value: 10 }, { value: 50 }, { value: 100 }] },
  { xAxisLabelTexts: [20, 40, 80, 160, 240], data: [{ value: 20 }, { value: 40 }, { value: 80 }] },
  { xAxisLabelTextStyle: { color: 'red', fontSize: 20 }, xAxisLabelTexts: [10, 50, 100, 150, 200], data: [{ value: 10 }, { value: 50 }, { value: 100 }] },
  { rotateLabel: true }, { rotateLabel: false },
  { hideAxesAndRules: true, data: [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }] }, { hideAxesAndRules: false },
  { hideOrigin: true }, { hideOrigin: false },
  { xAxisTextNumberOfLines: 2 }, { xAxisTextNumberOfLines: 5 },
  { xAxisLabelsHeight: 20 }, { xAxisLabelsHeight: 30 },
  { xAxisLabelsVerticalShift: 10 }, { xAxisLabelsVerticalShift: 20 },
  { labelsExtraHeight: 20 }, { labelsExtraHeight: 100 },
  { secondaryData: [0.055, 0.02, 0.1, 0.01, 0.05, 0.06], data: [{ value: 10 }, { value: 20 }, { value: 30 }], secondaryYAxis: { maxValue: 0.2, noOfSections: 4, showFractionalValues: true, roundToDigits: 3, yAxisColor: 'blue', showYAxisIndices: true, yAxisIndicesColor: 'blue', } },
  { secondaryData: [0.02, 0.055, 0.01, 0.05, 0.06], data: [{ value: 10 }, { value: 20 }, { value: 30 }], secondaryYAxis: { maxValue: 0.2, noOfSections: 4, showFractionalValues: true, roundToDigits: 3, yAxisColor: 'red', showYAxisIndices: true, yAxisIndicesColor: 'red', } }
];

export const commonPointerProps = [
  { pointerConfig: { width: 10, height: 10,pointerStripColor: 'blue',stripBehindBars: false,} }, { pointerConfig: { width: 30, height: 30 ,pointerStripColor: 'blue',stripBehindBars: false,} },
  { pointerConfig: { radius: 8 } }, { pointerConfig: { radius: 15 } },
  { pointerConfig: { pointerColor: 'yellow' } }, { pointerConfig: { pointerColor: 'blue' } },
  { pointerConfig: { showPointerStrip: true }, }, { pointerConfig: { showPointerStrip: false }, },
  { pointerConfig: { pointerStripWidth: 10 ,pointerStripColor: 'blue',stripBehindBars: false,}, }, { pointerConfig: { pointerStripWidth: 20 ,pointerStripColor: 'blue',stripBehindBars: false,}, },
  { pointerConfig: { pointerStripHeight: 150, pointerStripWidth: 5 }, }, { pointerConfig: { pointerStripHeight: 200, pointerStripWidth: 5 }, },
  { pointerConfig: { pointerStripColor: 'green' }, }, { pointerConfig: { pointerStripColor: 'blue' }, },
  { pointerConfig: { pointerStripUptoDataPoint: true }, }, { pointerConfig: { pointerStripUptoDataPoint: false }, },
  { pointerConfig: { stripOverPointer: true, stripBehindBars: false, pointerStripColor: 'blue' }, }, { pointerConfig: { stripOverPointer: false, stripBehindBars: false, pointerStripColor: 'blue' }, },
  { pointerConfig: { pointerVanishDelay: 500 }, }, { pointerConfig: { pointerVanishDelay: 1000 }, },
  { pointerConfig: { activatePointersOnLongPress: true }, }, { pointerConfig: { activatePointersOnLongPress: false }, },
  { pointerConfig: { persistPointer: true, }, },
  { pointerConfig: { persistPointer: false, }, },
  { pointerConfig: { strokeDashArray: [10, 20] } }, { pointerConfig: { strokeDashArray: [10, 40] } },
]