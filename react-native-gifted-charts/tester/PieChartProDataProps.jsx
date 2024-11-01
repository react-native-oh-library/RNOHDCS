import { PieChartPro } from "react-native-gifted-charts";
import { TestCase, Tester } from "@rnoh/testerino";
import { ScrollView } from "react-native";

export default function () {

  const pieData = [
    { value: 54, color: '#177AD5', text: '54%', onPress: () => console.log('ddddd') },
    { value: 30, color: '#79D2DE', text: '30%', onPress: () => setOnPressText('onPress被触发 text:30%') },
    { value: 26, color: '#ED6665', text: '26%', onPress: () => setOnPressText('onPress被触发 text:26%') },
  ];

  const pieChartProDataPro = [
    {
      data: [
        { value: 54, },
        { value: 30 },
        { value: 26 }
      ]
    },
    {
      data: [
        { value: 54, text: '54%' },
        { value: 30, text: '30%' },
        { value: 26, text: '26%' }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red' },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black' }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', labelPosition: 'outward' },
        { value: 30, text: '30%', color: 'green', labelPosition: 'onBorder' },
        { value: 26, text: '26%', color: 'black', labelPosition: 'inward' },
        { value: 10, text: '10%', color: 'pink', labelPosition: 'mid' }
      ]
    },
    {
      data: [
        { value: 60, text: '60', font: 'Arial' },
        { value: 70, text: '70', font: 'Cursive' },
        { value: 40, text: '40', font: 'Comic Sans MS' },
      ],
    },
    {
      data: [
        { value: 60, text: '60', textColor: 'red',  },
        { value: 70, text: '70', textColor: 'blue',},
        { value: 40, text: '40', textColor: 'black',  },
      ],
    },
    {
      data: [
        { value: 60, text: '60', fontStyle: 'normal', },
        { value: 70, text: '70',  fontStyle: 'italic',  },
        { value: 40, text: '40',  fontStyle: 'oblique',  },
      ],
    },
    {
      data: [
        { value: 60, text: '60', textSize: 18,  },
        { value: 70, text: '70',  textSize: 20,  },
        { value: 40, text: '40',  textSize: 24,  },
      ],
    },
    {
      data: [
        { value: 60, text: '60', fontWeight: 'bold' },
        { value: 70, text: '70', fontWeight: 'bolder' },
        { value: 40, text: '40',  fontWeight: 'lighter' },
      ],
    },
    {
      showGradient: true,
      data: [
        { value: 54, text: '54%', color: 'red', gradientCenterColor: 'pink' },
        { value: 30, text: '30%', color: 'green', gradientCenterColor: 'yellow' },
        { value: 26, text: '26%', color: 'black', gradientCenterColor: 'blue' }]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', shiftTextX: 10, shiftTextY: 20 },
        { value: 30, text: '30%', color: 'green', shiftTextX: -10, shiftTextY: -20 },
        { value: 26, text: '26%', color: 'black', shiftTextX: 30, shiftTextY: 30 }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', shiftTextX: 10, shiftTextY: 20, textSize: 30, },
        { value: 30, text: '30%', color: 'green', shiftTextX: -10, shiftTextY: -20, textSize: 30, },
        { value: 26, text: '26%', color: 'black', shiftTextX: 30, shiftTextY: 30, textSize: 30, }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', strokeWidth: 5 },
        { value: 30, text: '30%', color: 'green', strokeWidth: 10 },
        { value: 26, text: '26%', color: 'yellow', strokeWidth: 25 }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', strokeWidth: 5, strokeColor: 'black' },
        { value: 30, text: '30%', color: 'green', strokeWidth: 10, strokeColor: 'gray' },
        { value: 26, text: '26%', color: 'yellow', strokeWidth: 25, strokeColor: 'pink' }
      ]
    },
    {
      data: [
        { value: 54, text: '54%', color: 'red', strokeWidth: 5, strokeColor: 'black', strokeDashArray: [2, 4] },
        { value: 30, text: '30%', color: 'green', strokeWidth: 10, strokeColor: 'black', strokeDashArray: [3, 6] },
        { value: 26, text: '26%', color: 'yellow', strokeWidth: 15, strokeColor: 'black', strokeDashArray: [2, 8] }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red', isStartEdgeCurved: true },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black' }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red', startEdgeRadius: 5 },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black' }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red', startEdgeRadius: 40 },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black' }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red' },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black', isEndEdgeCurved: true }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red' },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black', endEdgeRadius: 5 }
      ]
    },
    {
      donut: true,
      data: [
        { value: 54, text: '54%', color: 'red' },
        { value: 30, text: '30%', color: 'green' },
        { value: 26, text: '26%', color: 'black', endEdgeRadius: 40 }
      ]
    },
  ]

  return (
    <Tester>

      <ScrollView >
        {
          pieChartProDataPro.map((item, index) => {
            return (
              <TestCase itShould={JSON.stringify(item)} key={index + '_' + JSON.stringify(item)} tags={['C_API']}>
                <PieChartPro data={pieData} {...item}></PieChartPro>
              </TestCase>
            )
          })
        }
      </ScrollView>
    </Tester>
  )
}