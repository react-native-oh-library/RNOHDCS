import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import Barcode from "react-native-barcode-builder";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TestSuite, TestCase, Tester } from "@rnoh/testerino";

export const BarcodeBuilderExample = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState<any>("hllo world");
  const [format, setFormat] = useState("CODE128");
  const [textBoot, setTextBoot] = useState("hllo world");
  const [color, setColor] = useState("red");
  const [background, setBackground] = useState("white");
  const [lineColor, setLineColor] = useState("black");
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(200);
  const [aerror, setError] = useState<any>(null);

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
  });
  useEffect(() => {}, []);

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="barcodeBuilder">
          <TestCase itShould="value:string" tags={["C_API"]}>
            <Barcode
              value={value} //条形码扫描结果
            />
            <View style={{ padding: 15, marginBottom: 15 }}>
              <TextInput
                style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                onChangeText={(text) => setText(text)}
                value={text}
                placeholder="输入条形码扫描结果"
              />
              <Button
                title="生成条形码value"
                onPress={() => {
                  setValue(text);
                }}
              />
            </View>
          </TestCase>
          <TestCase itShould="format:string" tags={["C_API"]}>
            <Barcode
              format={format} //条形码编码类型
              value={"hello"}
            />
            <View style={{ padding: 15, marginBottom: 15 }}>
              <Text>format</Text>
              <Button title="CODE128" onPress={() => setFormat("CODE128")} />
              <Button title="CODE39" onPress={() => setFormat("CODE39")} />
            </View>
          </TestCase>
          <TestCase itShould="text:string" tags={["C_API"]}>
            <Barcode text={textBoot} value={"hello"} />
            <View style={{ padding: 15, marginBottom: 15 }}>
              <Text>条形码下方文字</Text>
              <TextInput
                style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                onChangeText={(text) => setTextBoot(text)}
                value={textBoot}
                placeholder="输入条形码下方文字"
              />
            </View>
          </TestCase>
          <TestCase itShould="lineColor:string" tags={["C_API"]}>
            <Barcode
              lineColor={lineColor} //条形码颜色
              value={"hello"}
            />
            <View style={{ padding: 15, marginBottom: 15 }}>
              <Text>条形码颜色</Text>
              <Button title="black" onPress={() => setLineColor("black")} />
              <Button title="blue" onPress={() => setLineColor("blue")} />
              <Button title="red" onPress={() => setLineColor("red")} />
            </View>
          </TestCase>
          <TestCase itShould="textColor:string" tags={["C_API"]}>
            <Barcode
              text={textBoot}
              textColor={color} //条形码下方字体颜色
              value={"hello"}
            />
            <View style={{ padding: 15, marginBottom: 15 }}>
              <Text>条形码下方文字颜色</Text>
              <Button title="blue" onPress={() => setColor("blue")} />
              <Button title="black" onPress={() => setColor("black")} />
              <Button title="red" onPress={() => setColor("red")} />
            </View>
          </TestCase>
          <TestCase itShould="background:string" tags={["C_API"]}>
            <Barcode
              background={background} //条形码背景颜色
              value={"hello"}
            />
            <View style={{ padding: 15, marginBottom: 15 }}>
              <Text>条形码背景颜色</Text>
              <Button title="white" onPress={() => setBackground("white")} />
              <Button title="blue" onPress={() => setBackground("blue")} />
              <Button title="red" onPress={() => setBackground("red")} />
            </View>
          </TestCase>
          <TestCase itShould="onError:function" tags={["C_API"]}>
            <Barcode
              onError={(e) => {
                console.log(new Error(e).message);
                setError(new Error(e).message);
              }} //条形码value值不合法
              value={value}
            />
            <View style={{ padding: 15, marginBottom: 15 }}>
              <Text>Value设置不合法,点击之后需退出其他属性才能生效</Text>
              <Button
                title="点击"
                onPress={() => {
                  setValue(2);
                }}
              />
              <Text>{aerror}</Text>
            </View>
          </TestCase>
          <TestCase itShould="width:number" tags={["C_API"]}>
            <Barcode width={width} value={"hello"} />
            <View style={{ padding: 15, marginBottom: 15 }}>
              <Text>条形码单条宽度</Text>
              <Button title="2" onPress={() => setWidth(2)} />
              <Button title="3" onPress={() => setWidth(3)} />
              <Button title="1" onPress={() => setWidth(1)} />
            </View>
          </TestCase>
          <TestCase itShould="height:number" tags={["C_API"]}>
            <Barcode
              height={height} //条形码单条高度
              value={"hello"}
            />
            <View style={{ padding: 15, marginBottom: 15 }}>
              <Text>条形码单条高度</Text>
              <Button title="200" onPress={() => setHeight(200)} />
              <Button title="300" onPress={() => setHeight(300)} />
              <Button title="100" onPress={() => setHeight(100)} />
            </View>
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
};
