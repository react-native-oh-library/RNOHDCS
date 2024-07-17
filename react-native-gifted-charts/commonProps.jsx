import { yAxisSides } from 'gifted-charts-core';

export const axesProps = [
  { xAxisLength: 200 }, { xAxisLength: 300 },
  { xAxisColor: 'red', }, { xAxisColor: 'blue' },
  { xAxisThickness: 5, }, { xAxisThickness: 15 },
  { yAxisColor: 'red' }, { yAxisColor: 'blue' },
  { yAxisThickness: 5 }, { yAxisThickness: 15 },
  { yAxisExtraHeight: 20 }, { yAxisExtraHeight: 30 },
  { xAxisType: 'solid' }, { xAxisType: 'dotted' }, { xAxisType: 'dashed' },
  { yAxisLabelWidth: 40 }, { yAxisLabelWidth: 45 },
  { yAxisTextStyle: { color: 'red', backgroundColor: 'blue' } }, { yAxisTextStyle: { color: 'blue', backgroundColor: 'red' } },
  { yAxisTextNumberOfLines: 2 }, { yAxisTextNumberOfLines: 10 },
  { yAxisLabelContainerStyle: { backgroundColor: 'blue' } }, { yAxisLabelContainerStyle: { backgroundColor: 'red' } },
  { trimYAxisAtTop: true }, { trimYAxisAtTop: false },
  { horizontalRulesStyle: { backgroundColor: 'blue' } }, { horizontalRulesStyle: { backgroundColor: 'red' } },
  { showFractionalValues: true }, { showFractionalValues: false },
  { roundToDigits: 5 }, { roundToDigits: 15 },
  { yAxisLabelPrefix: '$' }, { yAxisLabelPrefix: '#' },
  { yAxisLabelSuffix: '$' }, { yAxisLabelSuffix: '#' },
  { hideYAxisText: true }, { hideYAxisText: false },
  { width: 280, yAxisSide: yAxisSides.RIGHT }, { width: 280, yAxisSide: yAxisSides.LEFT },
  { rulesLength: 100, rulesColor: 'red' }, { rulesLength: 300, rulesColor: 'blue' },
  { rulesThickness: 5 }, { rulesThickness: 10 },
  { hideRules: true }, { hideRules: false },
  { rulesType: 'solid', rulesThickness: 5 }, { rulesType: 'dotted', rulesThickness: 5 }, { rulesType: 'dashed', rulesThickness: 5 },
  { dashWidth: 10 }, { dashWidth: 20 },
  { dashGap: 10 }, { dashGap: 20 },
  {
    rulesConfigArray: [
      { rulesLength: 5, rulesColor: 'red', rulesType: 'solid', rulesThickness: 5, dashWidth: 20, dashGap: 5 },
      { rulesLength: 8, rulesColor: 'blue', rulesType: 'dotted', rulesThickness: 8, dashWidth: 20, dashGap: 8 },
      { rulesLength: 10, rulesColor: 'green', rulesType: 'dashed', rulesThickness: 10, dashWidth: 20, dashGap: 10 }]
  },
  { showReferenceLine1: true }, { showReferenceLine1: false },
  {
    showReferenceLine1: true,
    referenceLine1Config: {
      thickness: 2, width: 200, color: 'red', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '$100', labelTextStyle: { clolr: 'blue' }, zIndex: 100, stripBehindBars: false
    },
    referenceLine1Position: 100,
  },
  {
    showReferenceLine1: true,
    referenceLine1Config: {
      thickness: 2, width: 200, color: 'red', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '$100', labelTextStyle: { clolr: 'blue' }, zIndex: 100, stripBehindBars: true
    },
    referenceLine1Position: 50,
  },
  {
    showReferenceLine2: true,
    referenceLine2Position: 120,
    referenceLine2Config: {
      thickness: 2, width: 200, color: 'blue', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '第二条线', labelTextStyle: { clolr: 'blue' }, zIndex: 100, stripBehindBars: true
    },
    showReferenceLine1: true,
    referenceLine1Position: 100,
    referenceLine1Config: {
      thickness: 2, width: 200, color: 'red', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '第一条线', labelTextStyle: { clolr: 'blue' }, zIndex: 100, stripBehindBars: true
    },
  },
  {
    showReferenceLine3: true,
    referenceLine3Position: 120,
    referenceLine3Config: {
      thickness: 2, width: 200, color: 'green', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '第三条线', labelTextStyle: { clolr: 'blue' }, zIndex: 100, stripBehindBars: true
    },
    showReferenceLine2: true,
    referenceLine2Position: 100,
    referenceLine2Config: {
      thickness: 2, width: 200, color: 'blue', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '第二条线', labelTextStyle: { clolr: 'blue' }, zIndex: 100, stripBehindBars: true
    },
    showReferenceLine1: true,
    referenceLine1Position: 80,
    referenceLine1Config: {
      thickness: 2, width: 200, color: 'red', type: 'solid', dashWidth: 10, dashGap: 2, labelText: '第一条线', labelTextStyle: { clolr: 'blue' }, zIndex: 100, stripBehindBars: true
    },
  },
  { showVerticalLines: true }, { showVerticalLines: false },
  { showVerticalLines: true, verticalLinesColor: 'red' }, { showVerticalLines: true, verticalLinesColor: 'blue' },
  { verticallinesThickness: 5, showVerticalLines: true, verticalLinesColor: 'red', verticalLinesHeight: 180 },
  { verticallinesThickness: 10, showVerticalLines: true, verticalLinesColor: 'blue', verticalLinesHeight: 150 },
  { verticalLinesStrokeDashArray: [2, 8], verticallinesThickness: 10, showVerticalLines: true, verticalLinesColor: 'blue', verticalLinesHeight: 150 },
  { verticalLinesStrokeDashArray: [3, 9], verticallinesThickness: 5, showVerticalLines: true, verticalLinesColor: 'red', verticalLinesHeight: 180 },
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
  { hideAxesAndRules: true }, { hideAxesAndRules: false },
  { hideOrigin: true }, { hideOrigin: false },
  { xAxisTextNumberOfLines: 2 }, { xAxisTextNumberOfLines: 5 },
  { xAxisLabelsHeight: 20 }, { xAxisLabelsHeight: 30 },
  { xAxisLabelsVerticalShift: 10 }, { xAxisLabelsVerticalShift: 20 },
  { labelsExtraHeight: 20 }, { labelsExtraHeight: 30 },
  { secondaryData: [0.055, 0.02, 0.1, 0.01, 0.05, 0.06], secondaryYAxis: { maxValue: 0.2, noOfSections: 4, showFractionalValues: true, roundToDigits: 3, yAxisColor: 'blue', yAxisIndicesColor: 'blue', } },
  { secondaryData: [0.02, 0.055, 0.01, 0.05, 0.06], secondaryYAxis: { maxValue: 0.2, noOfSections: 4, showFractionalValues: true, roundToDigits: 3, yAxisColor: 'red', yAxisIndicesColor: 'red', } }
];

export const commonPointerProps = [
  { pointerConfig: { width: 10, height: 10 } }, { pointerConfig: { width: 30, height: 30 } },
  { pointerConfig: { radius: 8 } }, { pointerConfig: { radius: 15 } },
  { pointerConfig: { pointerColor: 'yellow' } }, { pointerConfig: { pointerColor: 'blue' } },
  { pointerConfig: { secondaryPointerColor: 'green' }, }, { pointerConfig: { secondaryPointerColor: 'gray' }, },
  { pointerConfig: { showPointerStrip: true }, }, { pointerConfig: { showPointerStrip: false }, },
  { pointerConfig: { pointerStripWidth: 10 }, }, { pointerConfig: { pointerStripWidth: 20 }, },
  { pointerConfig: { pointerStripHeight: 10 }, }, { pointerConfig: { pointerStripHeight: 20 }, },
  { pointerConfig: { pointerStripColor: 'green' }, }, { pointerConfig: { pointerStripColor: 'blue' }, },
  { pointerConfig: { pointerStripUptoDataPoint: true }, }, { pointerConfig: { pointerStripUptoDataPoint: false }, },
  { pointerConfig: { stripOverPointer: true }, }, { pointerConfig: { stripOverPointer: false }, },
  { pointerConfig: { pointerVanishDelay: 500 }, }, { pointerConfig: { pointerVanishDelay: 1000 }, },
  { pointerConfig: { activatePointersOnLongPress: true }, }, { pointerConfig: { activatePointersOnLongPress: false }, },
  { pointerConfig: { activatePointersDelay: 500 }, }, { pointerConfig: { activatePointersDelay: 2000 }, },
  { pointerConfig: { initialPointerIndex: 1, persistPointer: true, }, }, { pointerConfig: { initialPointerIndex: 2, persistPointer: true, }, },
  { pointerConfig: { initialPointerAppearDelay: 10 }, isAnimated: true, }, { pointerConfig: { initialPointerAppearDelay: 100 }, isAnimated: true, },
  { pointerConfig: { strokeDashArray: [10, 20] } }, { pointerConfig: { strokeDashArray: [10, 40] } },
]