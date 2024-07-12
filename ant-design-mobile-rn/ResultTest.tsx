import React from 'react';
import { View, Image } from 'react-native';
import { Result } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="ResultTest">
      <TestCase itShould="Result imgUrl" tags={['C_API']}>
        <View>
          <Result imgUrl={require('./assets/alipay.png')} />
        </View>
      </TestCase>
      <TestCase itShould="Result Img" tags={['C_API']}>
        <View>
          <Result img={<Image source={require('./assets/alipay.png')} />}
          />
        </View>
      </TestCase>
      <TestCase itShould="Result Title='支付宝'" tags={['C_API']}>
        <View>
          <Result
            title='支付宝'
            img={
              <Image source={require('./assets/alipay.png')} />
            }
          />
        </View>
      </TestCase>
      <TestCase itShould="Result message='支付就用支付宝'" tags={['C_API']}>
        <View>
          <Result
            title='支付宝'
            message='支付就用支付宝'
            img={
              <Image source={require('./assets/alipay.png')} />
            }
          />
        </View>
      </TestCase>
      <TestCase itShould="Result buttonText='支付'">
        <Result
          img={
            <Image source={require('./assets/alipay.png')} />
          }
          title='支付宝'
          message='支付就用支付宝'
          buttonText="支付"
        />
      </TestCase>
      <TestCase itShould="Result buttonType='primary'">
        <Result
          img={
            <Image source={require('./assets/alipay.png')} />
          }
          title='支付宝'
          message='支付就用支付宝'
          buttonText="支付"
          buttonType='primary'
        />
      </TestCase>
      <TestCase itShould="Result onButtonClick()" initialState={false}
        arrange={({ setState }: any) =>
          <Result
            img={
              <Image source={require('./assets/alipay.png')} />
            }
            title='支付宝'
            message='支付就用支付宝'
            buttonText="支付"
            buttonType='primary'
            onButtonClick={() => { setState(true) }}
          />
        }
        assert={({ expect, state }) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
    </TestSuite>
  );
};
