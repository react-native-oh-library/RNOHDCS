import React from 'react';
import {ScrollView, Text} from 'react-native';
import {PricingCard} from '@rneui/themed';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

type PricingCardComponentProps = {};

const Pricing: React.FunctionComponent<PricingCardComponentProps> = () => {
  const [changeBg2, setChangeBg2] = React.useState(false);

  return (
    <Tester>
      <ScrollView style={{height: '92%'}}>
        <TestSuite name="Pricing属性button 设置按钮">
          <TestCase itShould="button" tags={['C_API']}>
            <PricingCard
              title="Starter"
              price="$19"
              containerStyle={{backgroundColor: 'white', borderWidth: 0}}
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Pricing属性color 设置主题色">
          <TestCase itShould="color" tags={['C_API']}>
            <PricingCard
              title="Starter"
              price="$19"
              containerStyle={{backgroundColor: 'white', borderWidth: 0}}
              color="green"
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Pricing属性containerStyle 设置容器样式">
          <TestCase itShould="containerStyle" tags={['C_API']}>
            <PricingCard
              title="Starter"
              price="$19"
              color="green"
              containerStyle={{backgroundColor: 'pink', borderRadius: 20}}
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Pricing属性info 设置info数据">
          <TestCase itShould="info" tags={['C_API']}>
            <PricingCard
              info={['red', 'green', 'blue']}
              title="Starter"
              price="$19"
              color="green"
              containerStyle={{backgroundColor: 'pink', borderRadius: 20}}
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Pricing属性infoStyle 设置info样式">
          <TestCase itShould="infoStyle" tags={['C_API']}>
            <PricingCard
              info={['red', 'green', 'blue']}
              infoStyle={{fontSize: 20, fontWeight: '400', color: 'black'}}
              title="Starter"
              price="$19"
              color="green"
              containerStyle={{backgroundColor: 'pink', borderRadius: 20}}
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Pricing属性onButtonPress 设置Button点击事件">
          <TestCase itShould="onButtonPress事件切换主题颜色" tags={['C_API']}>
            <PricingCard
              onButtonPress={() => {
                setChangeBg2(!changeBg2);
              }}
              info={['red', 'green', 'blue']}
              infoStyle={{fontSize: 20, fontWeight: '400', color: 'black'}}
              title="Starter"
              price="$19"
              color={changeBg2 ? 'red' : 'green'}
              containerStyle={{backgroundColor: 'pink', borderRadius: 20}}
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Pricing属性price 设置price">
          <TestCase itShould="price" tags={['C_API']}>
            <PricingCard
              info={['red', 'green', 'blue']}
              infoStyle={{fontSize: 20, fontWeight: '400', color: 'black'}}
              title="Starter"
              price="$1900"
              color="green"
              containerStyle={{backgroundColor: 'pink', borderRadius: 20}}
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Pricing属性pricingStyle 设置price样式">
          <TestCase itShould="pricingStyle" tags={['C_API']}>
            <PricingCard
              pricingStyle={{
                color: 'white',
                textShadowOffset: {width: 10, height: 20},
                textShadowColor: 'black',
              }}
              info={['red', 'green', 'blue']}
              infoStyle={{fontSize: 20, fontWeight: '400', color: 'black'}}
              title="Starter"
              price="$1900"
              color="green"
              containerStyle={{backgroundColor: 'pink', borderRadius: 20}}
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Pricing属性title 设置title">
          <TestCase itShould="title标题" tags={['C_API']}>
            <PricingCard
              pricingStyle={{
                color: 'white',
                textShadowOffset: {width: 10, height: 20},
                textShadowColor: 'black',
              }}
              info={['red', 'green', 'blue']}
              infoStyle={{fontSize: 20, fontWeight: '400', color: 'black'}}
              title="我是title"
              price="$19000"
              color="green"
              containerStyle={{backgroundColor: 'pink', borderRadius: 20}}
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Pricing属性title 设置titleStyle">
          <TestCase itShould="设置title样式" tags={['C_API']}>
            <PricingCard
              pricingStyle={{
                color: 'white',
                textShadowOffset: {width: 10, height: 20},
                textShadowColor: 'black',
              }}
              info={['red', 'green', 'blue']}
              infoStyle={{fontSize: 20, fontWeight: '400', color: 'black'}}
              title="我是title"
              titleStyle={{fontSize: 30, fontWeight: '700', color: 'yellow'}}
              price="$19000"
              color="yellow"
              containerStyle={{backgroundColor: 'pink', borderRadius: 20}}
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="Pricing属性wrapperStyle 设置wrapperStyle">
          <TestCase itShould="设置wrapperStyle样式" tags={['C_API']}>
            <PricingCard
              wrapperStyle={{
                backgroundColor: 'yellow',
                alignSelf: 'center',
                borderRadius: 20,
                width: 200,
              }}
              pricingStyle={{
                color: 'white',
                textShadowOffset: {width: 10, height: 20},
                textShadowColor: 'black',
              }}
              info={['red', 'green', 'blue']}
              infoStyle={{fontSize: 20, fontWeight: '400', color: 'black'}}
              title="我是title"
              titleStyle={{fontSize: 20, fontWeight: '500', color: 'yellow'}}
              price="$19000"
              color="green"
              containerStyle={{backgroundColor: 'pink', borderRadius: 20}}
              button={{
                title: ' GET STARTED',
                icon: {name: 'rocket', type: 'font-awesome'},
              }}
            />
          </TestCase>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
};

export default Pricing;
