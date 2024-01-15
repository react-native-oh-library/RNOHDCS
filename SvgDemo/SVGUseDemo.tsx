import { ScrollView } from "react-native";
import Svg,{Defs,Rect,Circle,Path,LinearGradient,Stop,G,Text as SVGText,Use} from "react-native-svg";

function App() {
  return (
    <ScrollView style={{ width: "100%", height: "100%" }}>
      <Svg width="100%" height="2000">
        <Defs>
          <Rect
            id="Rect"
            width="30"
            height="30"
            fill="black"
            stroke="red"
            strokeWidth={5}
          ></Rect>
          <Circle
            id="Circle"
            r="20"
            fill="black"
            stroke="red"
            strokeWidth={5}
          ></Circle>
          <Path
            id="Path"
            d="M 0,0 l 60,30 v -30 h -20"
            fill="black"
            stroke="red"
            strokeWidth={5}
          ></Path>

          <LinearGradient id="LinearGradient">
            <Stop offset={"5%"} stopColor="gold" />
            <Stop offset={"99%"} stopColor="red" />
          </LinearGradient>
          <Circle
            id="CircleGradient"
            fill="url(#LinearGradient)"
            r={30}
          ></Circle>

          <G id="G">
            <Rect
              width="30"
              height="30"
              fill="black"
              stroke="red"
              strokeWidth={5}
            ></Rect>
            <Circle r="20" x={60} y={30} fill="black" stroke="red" strokeWidth={5}></Circle>
            <Path
              d="M 0,0 l 60,30 v -30 h -20"
              fill="black"
              stroke="red"
              strokeWidth={5}
              x={110}
            
            ></Path>

            <LinearGradient id="LinearGradient">
              <Stop offset={"5%"} stopColor="gold" />
              <Stop offset={"99%"} stopColor="red" />
            </LinearGradient>
            <Circle fill="url(#LinearGradient)" r={30} x={220}></Circle>
          </G>
        </Defs>

        <SVGText x={100} y={20}>
          Use 使用各种基础组件
        </SVGText>
        <Use href="#Rect" x={0} y={50}></Use>
        <Use href="#Circle" x={60} y={60}></Use>
        <Use href="#Path" x={100} y={60}></Use>
        <Use href="#CircleGradient" x={200} y={60}></Use>

        <SVGText x={100} y={140}>
          Use 使用G组件
        </SVGText>
        <Use href="#G" y={180}></Use>
      </Svg>
    </ScrollView>
  );
}

export default App;
