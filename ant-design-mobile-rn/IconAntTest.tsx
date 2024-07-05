import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Grid, SearchBar, Icon } from '@ant-design/react-native';
import {
  outlineGlyphMap,
} from '@ant-design/icons-react-native/lib/outline';
import { TestSuite, TestCase } from '@rnoh/testerino';

const datas = Object.keys(outlineGlyphMap).map((item: any) => ({
  icon: <Icon name={item} />,
  text: item,
}))

export default () => {
  const [data, setdata] = useState(datas);
  return (
    <TestSuite name="IconAntTest">
      <TestCase itShould="Icon support size" tags={['C_API']}>
        <Text>size={'xxs'}</Text>
        <Icon name='alipay-circle' size={'xxs'} />
        <Text>size={'xs'}</Text>
        <Icon name='alipay-circle' size={'xs'} />
        <Text>size={'sm'}</Text>
        <Icon name='alipay-circle' size={'sm'} />
        <Text>size={'md'}</Text>
        <Icon name='alipay-circle' size={'md'} />
        <Text>size={'lg'}</Text>
        <Icon name='alipay-circle' size={'lg'} />
        <Text>size={'40'}</Text>
        <Icon name='alipay-circle' size={40} />
      </TestCase>
      <TestCase itShould="Icon support color" tags={['C_API']}>
        <Text>color='red'</Text>
        <Icon name='alipay-circle' color='red' />
        <Text>color='pink'</Text>
        <Icon name='alipay-circle' color='pink' />
      </TestCase>
      <TestCase itShould="Icon List" tags={['C_API']}>
        <ScrollView>
          <SearchBar
            placeholder="Search by icon name"
            onChange={(text) => {
              setdata(data.filter((d) => d.text.match(new RegExp(text, 'gi'))))
            }}
          />
          <Grid data={data} columnNum={3} hasLine={false} />
        </ScrollView>
      </TestCase>
    </TestSuite>
  );
};


