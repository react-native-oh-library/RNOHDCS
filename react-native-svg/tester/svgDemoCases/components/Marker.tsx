import React, {Component} from 'react';
import {
  Svg,
  Circle,
  Defs,
  Marker,
  Rect,
  Ellipse,
  Line,
  Polygon,
  Path,
  RNSVGMarker,
  RNSVGPath,
  G,
  Pattern,
} from 'react-native-svg';
import { ScrollView } from 'react-native'
import {Tester, Filter, TestCase, TestSuite } from '@rnoh/testerino';

class EllipseExample extends Component {
  static title = 'Circle shaped marker on ellipse';
  render() {
    return (
      <Svg height="300" width="400">
        <Defs>
          <Marker
            id="selection1"
            markerUnits="userSpaceOnUse"
            refX="0"
            refY="0"
            orient="auto">
            <Circle
              fill="skyblue"
              r={8}
              cx={0}
              cy={0}
              strokeWidth={1}
              stroke="pink"
            />
          </Marker>
          <Marker
            id="selection2"
            markerUnits="userSpaceOnUse"
            refX="0"
            refY="0"
            orient="auto">
            <Circle
              fill="none"
              r={5}
              cx={0}
              cy={0}
              strokeWidth={1}
              stroke="blue"
            />
          </Marker>
          <Marker
            id="selection3"
            markerUnits="userSpaceOnUse"
            refX="0"
            refY="0"
            orient="auto">
            <Circle
              fill="none"
              r={5}
              cx={0}
              cy={0}
              strokeWidth={1}
              stroke="red"
            />
          </Marker>
        </Defs>
        <Ellipse
          cx="200"
          cy="170"
          rx="30%"
          ry="10%"
          stroke="purple"
          strokeWidth="2"
          fill="yellow"
          markerStart="url(#selection1)"
          markerMid="url(#selection2)"
          markerEnd="url(#selection3)"
        />
      </Svg>
    );
  }
}

class CircleExample extends Component {
  static title = 'Rect shaped marker on circle';
  render() {
    return (
      <Svg height="150" width="200">
        <Defs>
          <Marker
            id="selection1"
            markerUnits="userSpaceOnUse"
            refX="0"
            refY="0"
            orient="auto">
            <Rect x="0" y="0" width="15" height="15" fill="red" />
          </Marker>
          <Marker
            id="selection2"
            markerUnits="userSpaceOnUse"
            refX="0"
            refY="0"
            orient="auto">
            <Rect x="0" y="0" width="15" height="15" fill="skyblue" />
          </Marker>
          <Marker
            id="selection3"
            markerUnits="userSpaceOnUse"
            refX="0"
            refY="0"
            orient="auto">
            <Rect x="0" y="0" width="15" height="15" fill="pink" />
          </Marker>
        </Defs>
        <Circle
          cx="70"
          cy="70"
          r="30%"
          stroke="purple"
          strokeOpacity="0.5"
          strokeWidth="10"
          fill="pink"
          markerStart="url(#selection1)"
          markerMid="url(#selection2)"
          markerEnd="url(#selection3)"
        />
      </Svg>
    );
  }
}

class RectExample extends Component {
  static title = 'Ellipse shaped marker on rect';
  render() {
    return (
      <Svg width="400" height="200" viewBox="0 0 100 100">
        <Defs>
          <Marker
            id="selection1"
            markerUnits="strokeWidth"
            refX="0"
            refY="0"
            orient="auto">
            <Ellipse
              fill="#3aeeff"
              rx={5}
              ry={8}
              cx={0}
              cy={0}
              strokeWidth={1}
              stroke="yellow"
            />
          </Marker>
          <Marker
            id="selection2"
            markerUnits="strokeWidth"
            refX="0"
            refY="0"
            orient="auto">
            <Ellipse
              fill="#0000ee"
              rx={5}
              ry={8}
              cx={0}
              cy={0}
              strokeWidth={1}
              stroke="yellow"
            />
          </Marker>
          <Marker
            id="selection3"
            markerUnits="strokeWidth"
            refX="0"
            refY="0"
            orient="auto">
            <Ellipse
              fill="#ff6cff"
              rx={5}
              ry={8}
              cx={0}
              cy={0}
              strokeWidth={1}
              stroke="yellow"
            />
          </Marker>
        </Defs>
        <Rect
          x="50"
          y="50"
          width="30"
          height="30"
          fill="red"
          stroke="blue"
          strokeWidth="1"
          markerStart="url(#selection1)"
          markerMid="url(#selection2)"
          markerEnd="url(#selection3)"
        />
      </Svg>
    );
  }
}

class PathPathExample extends Component {
  static title = 'Ellipse shaped marker on rect';
  render() {
    return (
      <Svg width="400" height="200" viewBox="0 0 4000 2000">
        <Defs>
          <Marker
            id="Triangle"
            viewBox="0 0 10 10"
            refX="0"
            refY="5"
            markerUnits="strokeWidth"
            markerWidth="4"
            markerHeight="3"
            orient="auto">
            <Path d="M 0 0 L 10 5 L 0 10 z" />
          </Marker>
        </Defs>
        <Rect
          x="10"
          y="10"
          width="3980"
          height="1980"
          fill="none"
          stroke="blue"
          strokeWidth="10"
        />
        <Path
          d="M 1000 750 L 2000 750 L 2500 1250"
          fill="none"
          stroke="black"
          strokeWidth="100"
          markerEnd="url(#Triangle)"
        />
      </Svg>
    );
  }
}



class LineExample extends Component {
  static title = 'Triangle shaped marker on line';
  render() {
    return (
      <Svg height="200" width="200">
        <Defs>
          <Marker
            id="selection"
            // viewBox="0 0 2 1"
            markerUnits="userSpaceOnUse"
            // refX="-10"
            // refY="5"
            // preserveAspectRatio="xMinYMax slice"
            orient="auto">
            <Polygon
              points="0,0 -5,20 10,30"
              fill="lime"
              stroke="purple"
              strokeWidth="1"
            />
          </Marker>
        </Defs>
        <Line
          x1="20"
          y1="10%"
          x2="60%"
          y2="60%"
          stroke="red"
          strokeWidth="2"
          marker="url(#selection)"
        />
      </Svg>
    );
  }
}

class PathExample extends Component {
  static title = 'Path shaped marker on line';
  render() {
    return (
      <Svg height="200" width="400">
        <Defs>
          <Marker
            id="arrow"
            userSpaceOnUse="userSpaceOnUse"
            // viewBox="0 0 6 6"
            // refX="0"
            // refY="0"
            // markerWidth="4"
            // markerHeight="4"
            // orient="auto-start-reverse"
            // orient="auto"
          >
            <Path fill="blue" d="M 0 0 L 10 5 L 0 10 z" />
          </Marker>
        </Defs>
        <Line
          x1="10"
          y1="10"
          x2="90"
          y2="90"
          stroke="black"
          strokeWidth="3"
          markerEnd="url(#arrow)"
        />
      </Svg>
    );
  }
}

class RNLineExample extends Component {
    static title = 'Triangle shaped marker on line';
    render() {
      return (
        <Svg height="200" width="200">
          <Defs>
            <RNSVGMarker
              name="selection"
              markerUnits="userSpaceOnUse"
              refX="-15"
              refY="10"
              markerWidth="3"
              markerHeight="3"
              minX={0}
              minY={0}
              vbWidth={1}
              vbHeight={1}
              align="xMidYMid"
              meetOrSlice={2}
              orient="auto">
              <Polygon
                points="0,0 -5,20 10,30"
                fill="lime"
                stroke="purple"
                strokeWidth="1"
              />
            </RNSVGMarker>
          </Defs>
          <Line
            x1="20"
            y1="10%"
            x2="60%"
            y2="60%"
            stroke="red"
            strokeWidth="2"
            marker="url(#selection)"
            />
        </Svg>
      );
    }
  }
  
class RNPathExample extends Component {
    static title = 'Path shaped marker on line';
    render() {
      return (
        <Svg height="200" width="400" viewBox="0 0 300 100">
          <Defs>
            <RNSVGMarker
              name="arrow"
              refX="-15"
              refY="10"
              markerWidth="3"
              markerHeight="3"
              minX={0}
              minY={0}
              vbWidth={1}
              vbHeight={1}
              align="xMidYMid"
              meetOrSlice={2}
              orient="auto"
              // orient="auto-start-reverse"
            >
              <Path fill="blue" d="M 0 0 L 10 5 L 0 10 z" />
            </RNSVGMarker>
          </Defs>
          <Line
            x1="10"
            y1="10"
            x2="90"
            y2="90"
            stroke="black"
            strokeWidth="3"
            markerEnd="url(#arrow)"
          />
        </Svg>
      );
    }
  }
  
const icon = (
  <Svg height="30" width="30" viewBox="0 0 3000 2500">
    <Defs>
      <Marker
        id="Triangle"
        // viewBox="0 0 10 10"
        refX="0"
        refY="5"
        markerUnits="strokeWidth"
        markerWidth="4"
        markerHeight="3"
        orient="auto">
        <Path fill="blue" d="M 0 0 L 10 5 L 0 10 z" />
      </Marker>
    </Defs>
    <Path
      d="M 1000 750 L 2000 750 L 2500 1250"
      fill="none"
      stroke="black"
      strokeWidth="70"
      markerEnd="url(#Triangle)"
      markerStart="url(#Triangle)"
    />
  </Svg>
);

const samples = [
  LineExample,
  PathExample,
];
export {icon, samples};

export default function () {
    return (
        <Tester style={{flex: 1}}>
             <ScrollView>
                <TestCase itShould="case1: Circle shaped marker on ellipse">
                    <EllipseExample />
                </TestCase>
               <TestCase itShould="case2: Rect shaped marker on circle">
                    <CircleExample />
                </TestCase>
                <TestCase itShould="case3: Ellipse shaped marker on rect">
                    <RectExample />
                </TestCase>
                <TestCase itShould="case4: Path shaped marker on path">
                    <PathPathExample />
                </TestCase>
                <TestCase itShould="case5: Triangle shaped marker on line">
                    <LineExample />
                </TestCase>
                <TestCase itShould="case6: Path shaped marker on line">
                    <PathExample />
                </TestCase>
                <TestCase itShould="case7: Triangle shaped marker on line (RNSVGMarker)">
                    <RNLineExample />
                </TestCase>
                <TestCase itShould="case8: Path shaped marker on line (RNSVGMarker)">
                    <RNPathExample />
                </TestCase>
            </ScrollView>
        </Tester>      
    )
}
