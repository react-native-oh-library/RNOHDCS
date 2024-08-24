import React, { Component, useState } from 'react';
import Svg, {
  Circle,
  Ellipse,
  G,
  Text as SVGText,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  Mask,
  Stop,
  SvgXml,
} from 'react-native-svg';
import { View, StyleSheet, ScrollView, Text, Button, TouchableOpacity } from 'react-native';
import { Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';
import Issue241 from './issueTests/Issue241';
import Issue236 from './issueTests/Issue236';
import Issue244 from './issueTests/Issue244';
import Issue267 from './issueTests/Issue267';
import Issue280 from './issueTests/Issue280';

class SvgLayoutExample extends Component {
  static title = 'SVG with flex layout';
  render() {
    return (
      <View style={styles.container}>
        <Svg style={styles.svg}>
          <Rect
            width="80%"
            height="80%"
            x="10%"
            y="10%"
            fill="purple"
            stroke="yellow"
            strokeWidth="4"
          />
          <Line
            x1="10%"
            y1="10%"
            x2="90%"
            y2="90%"
            stroke="yellow"
            strokeWidth="4"
          />
          <Line
            x1="10%"
            y1="90%"
            x2="90%"
            y2="10%"
            stroke="yellow"
            strokeWidth="4"
          />
        </Svg>
      </View>
    );
  }
}

class Issue178 extends Component {
  static title = 'Stroke LinearGradient';
  render() {
    return (
      <Svg style={{ height: 200, width: 374.1538391113281 }}>
        <Defs key={'gradient'}>
          <LinearGradient id={'gradient'} x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
            <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
          </LinearGradient>
        </Defs>
        <Path
          d="M0,61.14285714285714L26.725274222237722,97.71428571428572L53.450548444475444,70.28571428571428L80.17582266671316,20L106.90109688895089,110.51428571428572L133.62637111118863,128.79999999999998L160.35164533342632,29.142857142857146L187.07691955566406,23.657142857142865L213.80219377790178,74.85714285714286L240.52746800013952,58.39999999999999L267.25274222237726,155.31428571428572L293.9780164446149,84.91428571428571L320.70329066685264,61.14285714285714L347.4285648890904,125.14285714285715L374.1538391113281,180"
          fillOpacity={0}
          stroke="url(#gradient)"
          strokeWidth="4"></Path>
      </Svg>
    );
  }
}

class Issue185 extends Component {
  static title = 'Stroke LinearGradient';
  render() {
    return (
      <Svg style={{ height: 200, width: 200 }}>
        <Path
          d="M 5 2,h 154,q 3 0 3 3,v 164,q 0 3 -3 3,h -154,q -3 0 -3 -3,v -164,q 0 -3 3 -3"
          fill="rgba(3,102,214,0.2)"></Path>
      </Svg>
    );
  }
}

class Issue193 extends Component {
  static title = 'Mask with LinearGradient';
  svgXml = `<svg width="240" height="240" viewBox="0 0 240 240" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="120" cy="120" r="120" fill="#FFECDE"/>
  <mask id="mask0_14651_25129" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="240">
  <rect width="240" height="240" rx="30" fill="#FF00DC"/>
  </mask>
  <g mask="url(#mask0_14651_25129)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M57.1418 157.143C57.1418 169.767 67.3753 180 79.999 180H159.999C172.623 180 182.856 169.767 182.856 157.143V97.1429H57.1418V157.143ZM57.1419 85.7143H182.856L169.147 68.5784C164.81 63.1563 158.243 60 151.299 60H88.699C81.7554 60 75.1882 63.1563 70.8506 68.5784L57.1419 85.7143ZM82.2853 147.429C78.4982 147.429 75.4281 150.499 75.4281 154.286C75.4281 158.073 78.4982 161.143 82.2853 161.143H116.571C120.358 161.143 123.428 158.073 123.428 154.286C123.428 150.499 120.358 147.429 116.571 147.429H82.2853Z" fill="url(#paint0_linear_14651_25129)"/>
  </g>
  <defs>
  <linearGradient id="paint0_linear_14651_25129" x1="57.1418" y1="180" x2="177.032" y2="54.4397" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FF003A"/>
  <stop offset="1" stop-color="#FF0056"/>
  </linearGradient>
  </defs>
  </svg>`;
  render() {
    return <SvgXml xml={this.svgXml} width={240} height={240} />;
  }
}

class Issue203 extends Component {
  static title = 'Stroke LinearGradient';
  static data = [
    [0, 2, 4],
    [0, 6, 12, -6, -12, -18, -24],
    [0, 3, 6, 9, -3, -6],
  ];
  static index = 0;
  constructor(props) {
    super(props);
    this.state = {
      dataY: Issue203.data[0],
    };
  }

  render() {
    return (
      <View style={{ magrinTop: 100 }}>
        <View style={{ display: 'flex', height: 200, flexDirection: 'row' }}>
          <View style={{ padding: 20 }}>
            <Text>RN Text</Text>
            {this.state.dataY.map((value, index) => {
              return <Text key={value + index}>{value}</Text>;
            })}
          </View>
          <View style={{ padding: 20 }}>
            <Text>RNSVG Text</Text>
            <Svg
              style={{
                position: 'absolute',
                top: 40,
                left: 0,
                height: 300,
                width: 180,
              }}>
              <G>
                {this.state.dataY.map((value, index) => {
                  return (
                    <SVGText
                      textAnchor={'middle'}
                      x={'30%'}
                      alignmentBaseline={'middle'}
                      key={value}
                      y={(index + 1) * 15}>
                      {value}
                    </SVGText>
                  );
                })}
              </G>
            </Svg>
          </View>
        </View>
        <Button
          title="切换"
          onPress={() => {
            this.setState({ dataY: Issue203.data[Issue203.index] });
            Issue203.index = (Issue203.index + 1) % 3;
          }}>
          切换
        </Button>
      </View>
    );
  }
}

export function Issue203Extend() {
  const [dataX, setDataX] = useState(25);
  return (
    <View>
      <Svg height="100" width="100%">
        <Rect
          x={dataX}
          y="70"
          width="50"
          height="25"
          fill="rgb(0,0,255)"
          strokeWidth="3"
          stroke="red"
        />
        <Circle
          cx={dataX}
          cy="25"
          r="25"
          stroke="purple"
          strokeWidth="2.5"
          fill="none"
        />
      </Svg>
      <Button
        title="切换"
        onPress={() => {
          let data = dataX + 5 < 300 ? dataX + 5 : 25;
          setDataX(dataX + 5);
        }}
      />
    </View>
  );
}

class Issue212 extends Component {
  static title = 'Issues#212';
  static Svgs = {
    icon_selected: `<svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M208.696 120C208.696 168.986 168.986 208.696 120 208.696C71.0151 208.696 31.3047 168.986 31.3047 120C31.3047 71.0151 71.0151 31.3047 120 31.3047C168.986 31.3047 208.696 71.0151 208.696 120ZM159.284 105.856C162.998 101.45 162.437 94.8666 158.03 91.1523C153.624 87.4381 147.041 87.9992 143.327 92.4056L115.174 125.804L95.7689 107.917C91.5315 104.011 84.9301 104.279 81.0241 108.517C77.1181 112.754 77.3868 119.356 81.6242 123.262L109.05 148.542C111.144 150.473 113.936 151.463 116.778 151.284C119.62 151.105 122.266 149.773 124.101 147.595L159.284 105.856Z" fill="url(#paint0_linear_14651_25106)"/><defs><linearGradient id="paint0_linear_14651_25106" x1="45.284" y1="100.573" x2="120" y2="208.696" gradientUnits="userSpaceOnUse"><stop stop-color="#FD573B"/><stop offset="1" stop-color="#FF3A3A"/></linearGradient></defs></svg>`,
    icon_unselected: `<svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M208.696 120C208.696 168.986 168.986 208.696 120 208.696C71.0151 208.696 31.3047 168.986 31.3047 120C31.3047 71.0151 71.0151 31.3047 120 31.3047C168.986 31.3047 208.696 71.0151 208.696 120ZM159.284 105.856C162.998 101.45 162.437 94.8666 158.03 91.1523C153.624 87.4381 147.041 87.9992 143.327 92.4056L115.174 125.804L95.7689 107.917C91.5315 104.011 84.9301 104.279 81.0241 108.517C77.1181 112.754 77.3868 119.356 81.6242 123.262L109.05 148.542C111.144 150.473 113.936 151.463 116.778 151.284C119.62 151.105 122.266 149.773 124.101 147.595L159.284 105.856Z"/></svg>`,
    icon_selected2: `<svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="96" cy="96" r="80" fill="#D2001C"/><path d="M141.081 77.6575L90.1695 128.569L54.3428 92.7424L65.6565 81.4287L90.1695 105.942L129.767 66.3438L141.081 77.6575Z" fill="white"/></svg>`
  };
  constructor(props) {
    super(props);
    this.state = {
      isSelect: false,
    };
  }

  onPress() {
    this.setState({ isSelect: !this.state.isSelect });
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: 'transparent' }]}>
        {this.state.isSelect ? (
          <SvgXml
            xml={Issue212.Svgs.icon_selected}
            width={30}
            height={30}
            style={{
              padding: 10
            }}
          />
        ) : (
          <SvgXml
            xml={Issue212.Svgs.icon_unselected}
            fill={'#DCDDDE'}
            width={40}
            height={40}
            style={{
              padding: 10,

              backgroundColor: 'yellow',
            }}
          />
        )}
        <SvgXml
          xml={this.state.isSelect ? Issue212.Svgs.icon_selected2 : Issue212.Svgs.icon_unselected}
          height={24}
          width={24}
          fill={"rgba(10, 15, 22, 0.2)"}
        />
        <View>
          <Button
            title="switch"
            onPress={() => {
              this.setState({ isSelect: !this.state.isSelect });
            }}
          />
        </View>
      </View>
    );
  }
}

const Issue218 = React.memo((props: {}) => {
  const [showRect, setShowRect] = useState(false);
  const ScreenHeight = 200;
  const ScreenWidth = 200;
  const RectHeight = 100;
  const RectWidth = 100;
  return (
    <>
      <Svg height="300" width="300">
        <Defs>
          <Mask id="mask" x="0" y="0" height={ScreenHeight} width={ScreenWidth}>
            <Rect height={ScreenHeight} width={ScreenWidth} fill="#fff" />
            {showRect && (
              <Rect
                height={RectHeight}
                rx={10}
                width={RectWidth}
                fill="#000"
                translateX={10}
                translateY={20}
              />
            )}
          </Mask>
        </Defs>
        <Rect
          height={ScreenHeight}
          width={ScreenWidth}
          fill="rgba(0, 0, 0, 0.8)"
          mask="url(#mask)"
          fill-opacity="0"
        />
      </Svg>
      <TouchableOpacity
        onPress={() => {
          setShowRect(!showRect);
        }}
        style={{
          width: 100,
          height: 50,
          backgroundColor: "red"
        }}>
        <Text>{"切换 Rect"}</Text>
      </TouchableOpacity>
    </>
  );
});

const samples = [
  SvgLayoutExample,
  Issue178,
  Issue185,
  Issue193,
  Issue203,
  Issue203Extend,
  Issue212,
  Issue241,
  Issue244,
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: 200,
    backgroundColor: 'red',
  },
  svg: {
    height: '80%',
    width: '80%',
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default function () {
  return (
    <Tester style={{ flex: 1 }}>
      <ScrollView>
        <TestCase itShould="SVG with flex layout">
          <SvgLayoutExample />
        </TestCase>
        <TestCase itShould="Issue#178: Stroke color should have linear gradient">
          <Issue178 />
        </TestCase>
        <TestCase itShould="Issue #185: The <Path d='M 5 2,h 154,q 3 0 3 3,v 164,q 0 3 -3 3,h -154,q -3 0 -3 -3,v -164,q 0 -3 3 -3'> should draw properly">
          <Issue185 />
        </TestCase>
        <TestCase itShould="Issue #193: Box with window surrounded by circle">
          <Issue193 />
        </TestCase>
        <TestCase itShould="Issue #203: The content of RNSVG Text should display as same as the RN Text">
          <Issue203 />
        </TestCase>
        <TestCase itShould="Issue #203 extend: The path should not repeat display">
          <Issue203Extend />
        </TestCase>
        <TestCase itShould="Issue #212: The selected icon should display in red and the unselected one should display in grey with yellow background">
          <Issue212 />
        </TestCase>
        <TestCase itShould="Issue #218: Mask should refresh when children remove">
          <Issue218 />
        </TestCase>
        <TestCase itShould="Issue #236: maskuints">
          <Issue236 />
        </TestCase>
        <TestCase itShould="Issue #241: Text alignmentBaseline">
          <Issue241 />
        </TestCase>
        <TestCase itShould="Issue #244: Text linear gradient">
          <Issue244 />
        </TestCase>
        <TestCase itShould="Issue #267: Pattern width erroneously set equal to height">
          <Issue267 />
        </TestCase>
        <TestCase itShould="Issue #280: The svg image is not displayed when mask and use are used at the same time.">
          <Issue280 />
        </TestCase>
      </ScrollView>
    </Tester>
  );
}
