import { GenMain, TestItem } from '../../gen';

import ProgressCircleExample from './ProgressCircleExample';

const progressCircleProps = [
  {
    type: 'progress',
    key: 'progress',
    values: [{ progress: 0.2 }, { progress: 0.8 }],
    title: 'progress',
  },
  {
    type: 'progressColor',
    key: 'progressColor',
    values: [{ progressColor: 'rgb(134, 65, 244)' }, { progressColor: 'rgba(90, 80, 200,0.7)' }],
    title: 'progressColor',
  },
  {
    type: 'backgroundColor',
    key: 'backgroundColor',
    values: [{ backgroundColor: '#ECECEC' }, { backgroundColor: 'blue' }],
    title: 'backgroundColor',
  },
  {
    type: 'endAngle',
    key: 'endAngle',
    values: [{ endAngle: Math.PI * 2 }, { endAngle: Math.PI }],
    title: 'endAngle',
  },
  {
    type: 'strokeWidth',
    key: 'strokeWidth',
    values: [{ strokeWidth: 5 }, { strokeWidth: 10 }],
    title: 'strokeWidth',
  },
  {
    type: 'cornerRadius',
    key: 'cornerRadius',
    values: [{ cornerRadius: 0 }, { cornerRadius: 45 }],
    title: 'cornerRadius',
  },

]

const allCases = [
  ...progressCircleProps,
]


const basicProps = {
  progress: 0.7,
  progressColor: 'rgb(134, 65, 244)',
}


export default function () {
  return <GenMain
    cases={allCases}
    basicProps={basicProps}
    comName='ProgressCircle'
  >
     <TestItem desc="LineChartDoubleLineExample">
      <ProgressCircleExample></ProgressCircleExample>
    </TestItem>
  </GenMain>

};