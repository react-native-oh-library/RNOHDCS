import React, { useState } from 'react';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import {
  View,
  ScrollView,
  Button,
  Text,
  Dimensions
} from 'react-native';
import Pdf from "react-native-pdf";

export const RnPdfTest = () => {
   const [source,setSource] = useState(require("../assets/test.pdf"))
  const [width,setWidth] = useState(Dimensions.get("window").width)
  return (
    <Tester>
      <ScrollView>
        <TestSuite name="react-native-pdf">
          <TestCase
            key={"getInitStatus_1"}
            itShould={`更改pdf的数据源 source`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow,setIsShow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                 {
                   isShow&& <Pdf
                   source={source}
                   style={{width:Dimensions.get("window").width,height:500}}
                 />
                 }
                  <Button title={"start"} onPress={() => {
                    setIsShow(false)
                    setSource(require("../assets/test2.pdf"))
                    setState(true)
                    setTimeout(()=> {setIsShow(true)},300)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />
            <TestCase
            key={"getInitStatus_2"}
            itShould={`更改pdf样式（更改宽度） style`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {

              return (
                <View style={{ flex: 1 }}>
                  <Pdf
                    source={require("../assets/test.pdf")}
                    style={{width:width,height:500}}
                  />
                  <Button title={"start"} onPress={() => {
                    setWidth(200)
                    setState(true)
                  }}></Button>
                </View>
              );
            }}
            assert={async ({ expect, state }) => {
              expect(state).to.be.true;
            }}
          />


        </TestSuite>

      </ScrollView>
    </Tester>
  );
}




