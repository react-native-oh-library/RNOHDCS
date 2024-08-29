
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Grid, Toast } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  const data = Array.from(new Array(5)).map((_val, i) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
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
      <TestCase itShould="render a Grid columnNum={2}， columnNum={4}" tags={['C_API']}>
        <View style={[{ padding: 10 }]}>
          <Grid data={data} columnNum={2} />
          <Grid data={data} columnNum={4} />
        </View>
      </TestCase>
      <TestCase itShould="render a Grid hasLine={false}, hasLine={true}" tags={['C_API']}>
        <View style={[{ padding: 10 }]}>
          <Grid data={data} hasLine={false} />
          <Grid data={data} hasLine={true} />
        </View>
      </TestCase>
      <TestCase itShould="render a Grid isCarousel" tags={['C_API']}>
        <Grid
          data={data}
          isCarousel={true}
          carouselMaxRow={1}
          carouselProps={{
            style: {
              width: '100%',
              height: 200,
            }
          }}
        />
      </TestCase>
      <TestCase itShould="render a Grid carouselProps width: '100%', height:200,backgroundColor: 'pink'" tags={['C_API']}>
        <Grid
          data={data}
          columnNum={3}
          isCarousel={true}
          carouselMaxRow={1}
          carouselProps={{
            style: {
              width: '100%',
              height: 200,
              backgroundColor: "pink"
            },
          }}
        />
      </TestCase>
      <TestCase itShould="render a Grid carouselMaxRow={1}, carouselMaxRow={2}" tags={['C_API']}>
        <Grid
          data={data}
          isCarousel={true}
          carouselMaxRow={1}
          carouselProps={{
            style: {
              width: '100%',
              height: 200,
            },
          }}
        />
        <Grid
          data={data}
          isCarousel={true}
          carouselMaxRow={2}
          carouselProps={{
            style: {
              width: '100%',
              height: 200,
            },
          }}
        />
      </TestCase>
      <TestCase itShould="render a Grid renderItem backgroundColor: '#f3f3f3', backgroundColor: 'red'" tags={['C_API']}>
        <GridRenderItemTest />
      </TestCase>
      <TestCase itShould="render a Grid itemStyle={{ height: 150, backgroundColor: '#ffff00' }},itemStyle={{ height: 150, backgroundColor: 'aqua' }}" tags={['C_API']}>
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
  const renderItem1 = (dataItem: any) => (
    <View style={{ padding: 10, backgroundColor: 'red' }}>
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
      <Grid
        data={data}
        columnNum={3}
        renderItem={renderItem1}
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
      <Grid
        data={data}
        columnNum={3}
        itemStyle={{ height: 150, backgroundColor: 'aqua' }}
      />
    </View>
  )
}