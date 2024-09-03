import React, {Component} from 'react';
import {ScrollView, StyleSheet, Alert, Image} from 'react-native';
import {
  Text,
  View,
  Assets,
  Constants,
  Button,
  Colors,
  Typography,
  ButtonProps,
} from 'react-native-ui-lib';
import {TestCase, TestSuite} from '@rnoh/testerino';

const ButtonSpace = 20;
const plusIcon = Assets.getAssetByPath('icons.demo.plus');
const settingsIcon = Assets.getAssetByPath('icons.demo.settings');
const labelButton = {label: 'Animated'};
const iconButton = {round: true};

export default class ButtonsScreen extends Component {
  state = {
    backgroundColor: Colors.yellow30,
    label: 'Button',
    // outline: true,
    buttonProps: labelButton as ButtonProps,
  };

  changeProps = () => {
    if (this.state.buttonProps === labelButton) {
      this.setState({buttonProps: iconButton});
    }
    if (this.state.buttonProps === iconButton) {
      this.setState({buttonProps: labelButton});
    }
  };

  render() {
    const {buttonProps} = this.state;

    return (
      <TestSuite name="Button">
        <TestCase itShould="设置 backgroundColor 属性">
          <View padding-10 centerH>
            <Button
              backgroundColor="#30B650"
              label="#30B650"
              labelStyle={{fontWeight: '600'}}
              enableShadow
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              backgroundColor="red"
              label="red"
              labelStyle={{fontWeight: '600'}}
              enableShadow
            />
          </View>
        </TestCase>
        <TestCase itShould="设置 borderRadius">
          <View padding-10 centerH>
            <Button
              backgroundColor="#30B650"
              label="SHUFFLE PLAY 7"
              labelStyle={{fontWeight: '600'}}
              enableShadow
              borderRadius={7}
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              backgroundColor="#30B650"
              label="SHUFFLE PLAY 20"
              labelStyle={{fontWeight: '600'}}
              enableShadow
              borderRadius={20}
            />
          </View>
        </TestCase>
        <TestCase itShould="设置outline, outlineColor">
          <View padding-10 centerH>
            <Button
              outline
              outlineColor={'red'}
              label="SHOP HOLIDAY red"
              borderRadius={0}
              size={Button.sizes.medium}
              text60
              labelStyle={{fontWeight: '700', letterSpacing: 4}}
              style={{borderWidth: 3, marginBottom: ButtonSpace}}
            />
            <Button
              outline
              outlineColor={'blue'}
              label="SHOP HOLIDAY blue"
              borderRadius={0}
              size={Button.sizes.medium}
              text60
              labelStyle={{fontWeight: '700', letterSpacing: 4}}
              style={{borderWidth: 3}}
            />
          </View>
        </TestCase>

        <TestCase itShould="size属性">
          <View padding-10 centerH>
            <Button label={'Default'} style={{marginBottom: ButtonSpace}} />
            <Button
              label={'Medium'}
              size={Button.sizes.medium}
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              label={'Small'}
              size={Button.sizes.small}
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              label={'xSmall'}
              size={Button.sizes.xSmall}
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              label={'This is a button with long text'}
              style={{marginBottom: ButtonSpace}}
            />
          </View>
        </TestCase>
        <TestCase itShould="disabled属性">
          <View padding-10 centerH>
            <Button
              label={'Disabled true'}
              disabled
              style={{marginBottom: ButtonSpace}}
            />
            <Button label={'Disabled false'} />
          </View>
        </TestCase>
        <TestCase itShould="Outline属性">
          <View padding-10 centerH>
            <Button
              label="Outline"
              outline
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              label="Outline M"
              size={Button.sizes.medium}
              outline
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              label="Outline S"
              size={Button.sizes.small}
              outline
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              label="Red Outline"
              outline
              outlineWidth={3}
              outlineColor={Colors.$outlineDanger}
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              label="Outline with background"
              outlineColor={Colors.$outlineDisabledHeavy}
              backgroundColor={Colors.$backgroundNeutralIdle}
              style={{marginBottom: ButtonSpace}}
            />
            <Button
              label="Disabled Outline"
              outline
              disabled
              style={{marginBottom: ButtonSpace}}
            />
          </View>
        </TestCase>
        <TestCase itShould="Round属性">
          <View padding-10 centerH>
            <View row width={'100%'} center>
              <Button
                round
                label="round"
                backgroundColor="#FF69B4"
                style={{margin: ButtonSpace}}
                size={Button.sizes.xSmall}
              />
              <Button
                round
                backgroundColor="#ff4fa7"
                style={{margin: ButtonSpace}}
                label="round"
                size={Button.sizes.small}
              />
              <Button
                round
                backgroundColor="#ff369b"
                style={{margin: ButtonSpace}}
                label="round"
                size={Button.sizes.medium}
              />
              <Button
                round
                backgroundColor="#ff1d8e"
                style={{margin: ButtonSpace}}
                label="round"
              />
            </View>
          </View>
        </TestCase>
        <TestCase itShould="Animated属性">
          <View padding-10 centerH>
            <Button
              size={'small'}
              style={{marginBottom: ButtonSpace / 4, marginLeft: ButtonSpace}}
              backgroundColor={Colors.$backgroundSuccessHeavy}
              iconSource={settingsIcon}
              {...buttonProps}
              onPress={this.changeProps}
              iconOnRight
              animateLayout
              animateTo={'left'}
            />
            <Button
              size={'medium'}
              style={{marginBottom: ButtonSpace / 4}}
              backgroundColor={Colors.$backgroundSuccessHeavy}
              iconSource={settingsIcon}
              {...buttonProps}
              onPress={this.changeProps}
              animateLayout
            />
            <Button
              style={{marginBottom: ButtonSpace / 4, marginRight: ButtonSpace}}
              backgroundColor={Colors.$backgroundSuccessHeavy}
              iconSource={settingsIcon}
              {...buttonProps}
              onPress={this.changeProps}
              animateLayout
              animateTo={'right'}
            />
          </View>
        </TestCase>
        <TestCase
          itShould="onPress属性"
          initialState={false}
          arrange={({setState, reset}) => (
            <View padding-10 centerH>
              <Button
                onPress={() => {
                  Alert.alert('点击了’点我‘');
                  setState(true);
                }}>
                <Text white>点我</Text>
              </Button>
            </View>
          )}
          assert={({state, expect}) => {
            expect(state).to.be.true;
          }}
        />
        <TestCase itShould="fullWidth属性">
          <Button fullWidth label="Full Width" marginB-10 />
          <Button
            fullWidth
            size="medium"
            bg-$backgroundDangerLight
            $textDefault
            label="Medium Size Full Width"
            marginB-10
          />
          <Button
            fullWidth
            size="small"
            bg-$backgroundSuccessLight
            black
            label="Small Size Full Width"
            style={{marginBottom: ButtonSpace}}
          />
        </TestCase>
      </TestSuite>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 25,
  },
  title: {
    ...Typography.text20,
    color: Colors.$textDefault,
  },
  header: {
    ...Typography.text60,
    marginVertical: 20,
    color: Colors.$textDefault,
  },
});
