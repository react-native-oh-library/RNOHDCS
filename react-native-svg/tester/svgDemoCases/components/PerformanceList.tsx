
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {NavigationContainer, Page} from '../Navigation';
import {PortalProvider} from '@gorhom/portal';
import { Circle, Svg, Ellipse, Path, Polygon, Polyline, Mask, Symbol, Text, Use, LinearGradient, RadialGradient, 
    TSpan, Image, G, Defs, ClipPath, Rect, Line, TextPath, Stop, Pattern } from 'react-native-svg'
const testCount = 1500

function repeat(com: React.ReactElement, repeatCount: number) {
    const cases = []
    for(let i = 0; i < repeatCount; i++) {
        cases.push(
            (
                <View key={i}>
                    { com }
                </View>
            )
        )
    }
    return cases
}

const width = 100
const height = 100

const CircleCase = (
    <Svg height={height} width={width}>
        <Circle cx="50%" cy="50%" r="40%" fill="pink" />
    </Svg>
)

const EllipseCase = (
    <Svg height={height} width={width}>
        <Ellipse
          cx="50%"
          cy="50%"
          rx="45%"
          ry="40%"
          stroke="purple"
          strokeWidth="2"
          fill="yellow"
        />
      </Svg>
)

const PathCase = (
    <Svg height={height} width={width}>
        <Path fill="red" d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
    </Svg>
)

const PolygonCase = (
    <Svg height={height} width={width}>
        <Polygon fill="red" points="40,5 70,80 25,95" />
    </Svg>
)

const PolyLineCase = (
    <Svg height={height} width={width}>
        <Polyline fill="red" points="10 10 20 12 30 20 40 60 60 70 95 90" />
    </Svg>
)

const RectCase = (
    <Svg height={height} width={width}>
        <Rect  width={80} height={80} fill='green' />
    </Svg>
)

const LineCase = (
    <Svg height={height} width={width}>
        <Line x1="10" y1="10" x2="100" x2="100" stroke='green' strokeWidth="4" />
    </Svg>
)

const TextCase = (
    <Svg height={height} width={width}>
        <Text x={10} y={10}>
            <TSpan stroke={'pink'}>Test text with 012345 svg</TSpan>
        </Text>
    </Svg>
)

const DefsCase = (
    <Svg viewBox="0 0 400 400" width={width} height={height}>
        <Circle cx="100" cy="100" r="50" stroke="green" fill={'green'} />
        <Defs>
            <G id="shape">
                <Circle cx="100" cy="100" r="50" stroke="red"  fill={'red'} />
            </G>
        </Defs>
        <Use href="#shape" x="200" y="200" />
        <Use href="#shape" x="0" y="300" fill={'yellow'} />
    </Svg>
)

const TextPathCase = (
    <Svg viewBox="0 0 100 100" width={200} height={height}>
        <G stroke="blue">
            <Path
                id="MyPath"
                fill="none"
                stroke="red"
                d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />

            <Text stroke="blue" fill="blue" fontVariant="small-caps" fontStretch="ultra-expanded">
                <TextPath stroke="blue" fill="blue" href="#MyPath">Quick
                0<TSpan kerning="10">brown</TSpan> fox jumps over <TSpan kerning="1">the</TSpan> lazy dog.</TextPath>
            </Text>
        </G>
    </Svg >
)

const LinearGradientCase = (
    <Svg viewBox="0 0 100 100" width={width} height={height}>
        <Defs>
            <LinearGradient id="myGradient" gradientTransform="rotate(90)">
            <Stop offset="30%" stopColor="yellow" />
            <Stop offset="95%" stopColor="red" />
            </LinearGradient>
        </Defs>
        <Circle cx="50" cy="50" r="40" fill={`url(#myGradient)`} />
    </Svg>
)

const RadialGradientCase = (
    <Svg viewBox="0 0 100 100" width={width} height={height}>
        <Defs>
            <RadialGradient id="myGradient22" cx={'30%'} cy="50%" r='30%'>
                <Stop offset="30%" stopColor="yellow" />
                <Stop offset="95%" stopColor="red" />
            </RadialGradient>
        </Defs>
        <Ellipse cx="50" cy="50" rx="50" ry="30"  fill={`url(#myGradient22)`} />
    </Svg>
)

const ClipPathCase = (
    <Svg width={width} height={100} viewBox='0 0 100 100'>
        <ClipPath id="emptyStar1">
            <Path d="M50,0 21,90 98,35 2,35 79,90z" />
        </ClipPath>
        <ClipPath id="emptyStar2">
            <Path d="M50,0 21,90 98,35 2,35 79,90z" />
        </ClipPath>

        <Rect clipPath="url(#emptyStar1)" width="50" height="90" fill="blue" />
        <Rect clipPath="url(#emptyStar2)" width="50" height="90" x="50" fill="red" />
    </Svg>
)

const ImageCase = (
    <Svg width={width} height={100} viewBox='0 0 100 100'>
        <Image width={80} height={80} href={'https://live.mdnplay.dev/zh-CN/docs/Web/SVG/Element/image/mdn_logo_only_color.png'}/>
    </Svg>
)

const MaskCase = (
    <Svg viewBox="-10 -10 120 120" width={width} height={height}>
        <Rect x={-10} y={-10} width={120} height={120} fill="blue" />
        <Mask id="myMask">
            <Rect x={0} y={0} width={100} height={100} fill="white" />
            <Path
                d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
                fill="black"
            />
        </Mask>
        <Polygon points="-10,110 110,110 110,-10" fill="orange" />
        <Circle cx={50} cy={50} r={50} fill="purple" mask="url(#myMask)" />
    </Svg>
)

const SymbolCase = (
    <Svg width={width} height={height} viewBox="0 0 200 110">
        <Symbol id="sym01" viewBox="0 0 100 110">
            <Circle cx="150" cy="120" r="100" strokeWidth="8" stroke="green" fill="red" />
            <Circle cx="200" cy="150" r="100" strokeWidth="8" stroke="green" fill="white" />
        </Symbol>
        <Use href="#sym01" x="0" y="0" width="100" height="50" />
    </Svg>
)

const PatternCase = (
    <Svg viewBox="0 0 100 100" width={width} height={height}>
        <Pattern
            id="p1"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
            patternTransform="rotate(20)
                      skewX(30)
                      scale(1 0.5)"
        >
            <Circle cx="10" cy="10" r="10" fill={'red'}/>
        </Pattern>
        <Rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
    </Svg>
)

interface ComInfo{
    name: string,
    com: React.ReactElement
}


const comList: ComInfo[] = [
    {
        name: 'Circle',
        com: CircleCase
    },
    {
        name: 'Ellipse',
        com: EllipseCase
    },
    {
        name: 'Path',
        com: PathCase
    },
    {
        name: 'Polygon',
        com: PolygonCase
    },
    {
        name: 'PolyLine',
        com: PolyLineCase
    },
    {
        name: 'Rect',
        com: RectCase
    },
    {
        name: 'Line',
        com: LineCase
    },
    {
        name: 'Text & TSpan',
        com: TextCase
    },
    {
        name: 'Defs & Use',
        com: DefsCase
    },
    {
        name: 'TextPath',
        com: TextPathCase
    },
    {
        name: 'LinearGradient & Stop',
        com: LinearGradientCase
    },
    {
        name: 'RadialGradient & Stop',
        com: RadialGradientCase
    },
    {
        name: 'ClipPath',
        com: ClipPathCase
    },
    {
        name: 'Image',
        com: ImageCase
    },
    {
        name: 'Mask',
        com: MaskCase
    },
    {
        name: 'Symbol',
        com: SymbolCase
    },
    {
        name: 'Pattern',
        com: PatternCase
    }
]
// @ts-ignore
comList.sort((a, b) => {
  return a.name.localeCompare(b.name)
})

function SingleComCase(TestCase: React.ReactElement, testCount: number) {
    return (
        <SafeAreaView>
            <ScrollView>
                { repeat(TestCase, testCount) }
            </ScrollView>
        </SafeAreaView>
    )
}

function AllComCase(comList: ComInfo[], testCount: number) {
    const cases: React.ReactElement[] = []
    let i = 0
    while( cases.length < testCount) {
        comList.forEach(com => {
            cases.push(
                (
                    <View key={i}>
                        { com.com }
                    </View>
                )
            )
            i++;
        })
    }
    return (
        <SafeAreaView>
            <ScrollView
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row'
                }}
            >
                { cases }
            </ScrollView>
        </SafeAreaView>
    )
}


function PerformanceList() {
    return (
      <View style={{backgroundColor: 'black'}}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <NavigationContainer hasHeader={false}>
            <PortalProvider>
                <Page
                    key={'All'}
                    name={`All`}>
                        { AllComCase(comList, testCount) }
                </Page>

              {comList.map(com => {
                const TestSuite = com.com
                return (
                  <Page
                    key={com.name}
                    name={`${com.name.replace('Test', '')}`}>
                        { SingleComCase(TestSuite, testCount) }
                  </Page>
                );
              })}
            </PortalProvider>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    );
  }
  export default PerformanceList