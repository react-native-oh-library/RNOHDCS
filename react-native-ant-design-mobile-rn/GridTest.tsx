
import React from 'react';
import { View, Text } from 'react-native';
import { Grid, Toast } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const data = Array.from(new Array(5)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
    text: `Name${i}`,
  }))
  return (
    <TestSuite name="GridTest">
      <TestCase itShould="render a Grid" tags={['C_API']}>
        <View style={[{ padding: 10 }]}>
          <Grid data={data} />
        </View>
      </TestCase>
      <TestCase itShould="render a Grid onPress()" tags={['C_API']} initialState={undefined}
        arrange={({ setState }: any) =>
          <View>
            <Grid
              data={data}
              onPress={(_el: any, index: any) => {
                setState(true);
              }}
            />
          </View>
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase itShould="render a Grid columnNum={2}" tags={['C_API']}>
        <View style={[{ padding: 10 }]}>
          <Grid data={data} columnNum={2} />
        </View>
      </TestCase>
      <TestCase itShould="render a Grid hasLine={false}" tags={['C_API']}>
        <View style={[{ padding: 10 }]}>
          <Grid data={data} hasLine={false} />
        </View>
      </TestCase>
      <TestCase itShould="render a Grid isCarousel" tags={['C_API']}>
        <Grid
          data={data}
          columnNum={1}
          isCarousel
        />
      </TestCase>
      <TestCase itShould="render a Grid carouselProps" tags={['C_API']}>
        <Grid
          data={data}
          columnNum={1}
          isCarousel
          carouselProps={{
            style: {
              width: '100%',
              height: 120,
              backgroundColor: 'pink'
            },
          }}
        />
      </TestCase>
      <TestCase itShould="render a Grid carouselMaxRow={1}" tags={['C_API']}>
        <Grid
          data={data}
          columnNum={1}
          isCarousel
          carouselProps={{
            style: {
              width: '100%',
              height: 120,
              backgroundColor: 'pink'
            },
          }}
          carouselMaxRow={1}
        />
      </TestCase>
      <TestCase itShould="render a Grid renderItem" tags={['C_API']}>
        <GridRenderItemTest />
      </TestCase>
      <TestCase itShould="render a Grid itemStyle={{ height: 150, backgroundColor: '#ffff00' }}" tags={['C_API']}>
        <GridItemStyleTest />
      </TestCase>
    </TestSuite>
  );
};

function GridRenderItemTest() {
  const data = Array.from(new Array(5)).map((_val, i) => ({
    text: `Name${i}`,
  }))

  const renderItem = (dataItem: any) => (
    <View style={{ padding: 10, backgroundColor: '#f3f3f3' }}>
      <Text style={{ color: '#888', fontSize: 12, textAlign: 'center' }}>
        {dataItem.text}
      </Text>
    </View>
  );
  return (
    <View>
      <Grid
        data={data}
        columnNum={3}
        renderItem={renderItem}
      />
    </View>
  )
}

function GridItemStyleTest() {
  const data = Array.from(new Array(5)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
    text: `Name${i}`,
  }))
  return (
    <View>
      <Grid
        data={data}
        columnNum={3}
        itemStyle={{ height: 150, backgroundColor: '#ffff00' }}
      />
    </View>
  )
}