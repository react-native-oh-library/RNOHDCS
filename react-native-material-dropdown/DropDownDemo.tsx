import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import {
  Tester,
  TestSuite,
  TestCase
} from '@rnoh/testerino';

export class Example extends Component {
  constructor(props) {
    super(props);

    this.onChangeText = this.onChangeText.bind(this);

    this.codeRef = this.updateRef.bind(this, 'code');
    this.nameRef = this.updateRef.bind(this, 'name');
    this.sampleRef = this.updateRef.bind(this, 'sample');
    this.typographyRef = this.updateRef.bind(this, 'typography');

    this.state = {
      sample: 'The quick brown fox jumps over the lazy dog',
      typography: 'value',
      name: 'Cyan',
      code: 'A700',
    };
  }

  onChangeText(text) {
    ['name', 'code', 'sample', 'typography']
      .map((name) => ({ name, ref: this[name] }))
      .filter(({ ref }) => ref && ref.isFocused())
      .forEach(({ name, ref }) => {
        this.setState({ [name]: text });
      });

  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  render() {
    let { typography, name, code, sample } = this.state;
    let textStyle = [
      styles.text,
      styles[typography],
      styles[name + code],
    ];

    return (
      <View style={styles.screen}>
        <Tester style={{ flex: 1, backgroundColor: 'black' }}>
          <ScrollView >
            <TestSuite name="DropDown test">
              <View style={styles.container}>
                <TestCase
                  itShould="TestCase01 DropDown data and value "
                  tags={['C_API']}
                  initialState={undefined as any}
                  arrange={({ setState }) => {
                    return (
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography} //选中值
                        data={typographyData} //item 条目值
                        onChangeText={(e) => {
                          this.onChangeText(e);
                          setState(true);
                        }}
                      />
                    );
                  }}
                  assert={({ state, expect }) => {
                    expect(state).to.be.true;
                  }}
                />
                <TestCase
                  itShould="TestCase02 DropDown textColor "
                  tags={['C_API']}
                  initialState={undefined as any}
                  arrange={({ setState }) => {
                    return (
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        textColor='rgba(255, 5, 0, .87)' // 被选中的vlue颜色值
                        onChangeText={(e) => {
                          this.onChangeText(e);
                          setState(true);
                        }}
                      />
                    );
                  }}
                  assert={({ state, expect }) => {
                    expect(state).to.be.true;
                  }}
                />
                <TestCase
                  itShould="TestCase03 DropDown itemColor "
                  tags={['C_API']}
                  initialState={undefined as any}
                  arrange={({ setState }) => {
                    return (
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        textColor='rgba(0, 5, 0, .87)' // 被选中的vlue颜色值
                        itemColor='rgba(0, 100, 0, .87)' //下拉列表里面的item颜色
                        onChangeText={(e) => {
                          this.onChangeText(e);
                          setState(true);
                        }}
                      />
                    );
                  }}
                  assert={({ state, expect }) => {
                    expect(state).to.be.true;
                  }}
                />
                <TestCase
                  itShould="TestCase04 DropDown selectedItemColor "
                  tags={['C_API']}
                  initialState={undefined as any}
                  arrange={({ setState }) => {
                    return (
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        textColor='rgba(255, 100, 0, .87)' // 被选中的vlue颜色值
                        itemColor='rgba(0, 100, 0, .87)' //下拉列表里面的item颜色
                        selectedItemColor='rgba(255, 100, 0, .87)'//下拉列表里面的item被选中的颜色
                        onChangeText={(e) => {
                          this.onChangeText(e);
                          setState(true);
                        }}
                      />
                    );
                  }}
                  assert={({ state, expect }) => {
                    expect(state).to.be.true;
                  }}
                />
                <TestCase
                  itShould="TestCase05 DropDown dropdownPosition "
                  tags={['C_API']}
                  initialState={undefined as any}
                  arrange={({ setState }) => {
                    return (
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        dropdownPosition='10' //点击弹出下拉列表的位置
                        onChangeText={(e) => {
                          this.onChangeText(e);
                          setState(true);
                        }}
                      />
                    );
                  }}
                  assert={({ state, expect }) => {
                    expect(state).to.be.true;
                  }}
                />
                <TestCase
                  itShould="TestCase06 DropDown label "
                  tags={['C_API']}
                  initialState={undefined as any}
                  arrange={({ setState }) => {
                    return (
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        label='...我是标签....' //下拉列表默认标签
                        onChangeText={(e) => {
                          this.onChangeText(e);
                          setState(true);
                        }}
                      />
                    );
                  }}
                  assert={({ state, expect }) => {
                    expect(state).to.be.true;
                  }}
                />
                <TestCase
                  itShould="TestCase07 DropDown itemCount "
                  tags={['C_API']}
                  initialState={undefined as any}
                  arrange={({ setState }) => {
                    return (
                      <Dropdown
                        ref={this.typographyRef}
                        value={typography}
                        data={typographyData}
                        itemCount='2' //点击弹出下拉列表显示的item的数量，默认4个
                        dropdownPosition='4'
                      />
                    );
                  }}
                  assert={({ state, expect }) => {
                    expect(state).to.be.true;
                  }}
                />
              </View>
            </TestSuite>
          </ScrollView>
        </Tester>
      </View>
    );
  }
}


const styles = {
  TextInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width: '90%',
  },
  btn: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'blue',
  },
  btnText: { fontWeight: 'bold', color: '#fff', fontSize: 20 },

  screen: {
    flex: 1,
    padding: 4,
    paddingTop: 56,
    backgroundColor: 'black',
  },

  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 8,
  },

  text: {
    textAlign: 'center',
  },

  textContainer: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 16,
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },

  Display2: { fontSize: 45 },
  Display1: { fontSize: 34 },
  Headline: { fontSize: 24 },
  Title: { fontSize: 20, fontWeight: '500' },
  Subheading: { fontSize: 16 },
  Body: { fontSize: 14 },
  Caption: { fontSize: 12 },

  Blue900: { color: '#0D47A1' },
  Blue700: { color: '#1976D2' },
  BlueA700: { color: '#2962FF' },
  BlueA400: { color: '#2979FF' },

  Teal900: { color: '#004D40' },
  Teal700: { color: '#00796B' },
  TealA700: { color: '#00BFA5' },
  TealA400: { color: '#1DE9B6' },

  Cyan900: { color: '#006064' },
  Cyan700: { color: '#0097A7' },
  CyanA700: { color: '#00E5FF' },
  CyanA400: { color: '#00B8D4' },
};

const typographyData = [
  { value: 'value' },
  { value: 'textColor'},
  { value: 'itemColor' },
  { value: 'selectedItemColor' },
  { value: 'DropDown Postion' },
  { value: 'DropDown label' },
  { value: 'itemCount' },
];
