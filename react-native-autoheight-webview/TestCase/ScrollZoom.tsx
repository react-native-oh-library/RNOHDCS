import React, {useState } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Button
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import AutoHeightWebView from 'react-native-autoheight-webview';

export default function Exmple ()  {
    const [scrollEnabledWithZoomedin,setScrollEnabledWithZoomedin] = useState(true)
  return (
    <Tester style={{paddingBottom:60}}>
      <ScrollView scrollEnabled={false}>
        <TestSuite name="scrollEnabledWithZoomedin">
            <TestCase
            key={"getInitStatus_12"}
            itShould={`scrollEnabledWithZoomedin change   当scrollEnable 为false是可以通过scrollEnabledWithZoomedin来进行滚动`}
            tags={['C_API']}
            initialState={false}

            arrange={({ setState }) => {
              const [isShow,setIsShow] = useState(true)
              return (
                <View style={{ flex: 1 }}>
                {
                    isShow && <AutoHeightWebView
                    style={{ width: Dimensions.get('window').width - 15, marginTop: 35,height:200}}
                    scrollEnabled={false} scalesPageToFit={false}   scrollEnabledWithZoomedin={scrollEnabledWithZoomedin}
                    source={{ html: `
                    <p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span></p>
                    <p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span></p>
                     ` }}
                  />
                }
                  <Button title={"start"} onPress={() => {
                    setIsShow(false)
                    setScrollEnabledWithZoomedin(false)
               setTimeout(()=>setIsShow(true),100)
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



