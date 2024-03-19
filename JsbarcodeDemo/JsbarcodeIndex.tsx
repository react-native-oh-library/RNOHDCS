import {ScrollView, View} from 'react-native';
// import {NavigationContainer, Page} from '../../components';
import JsbarcodeSvgDemo from './JsbarcodeSvgDemo';
import JsbarcodeInfoDemo from './JsbarcodeInfoDemo';

export default function JsbarcodeDemo() {
  return (
    <View style={{width:'100%', height:'100%'}}>
      {/* <NavigationContainer>
        <Page name="svg展示条形码"> */}
          {/* <ScrollView> */}
            <JsbarcodeSvgDemo />
          {/* </ScrollView> */}
        {/* </Page>
        <Page name="条形码接口数据展示"> */}
          {/* <ScrollView> */}
            {/* <JsbarcodeInfoDemo /> */}
          {/* </ScrollView> */}
        {/* </Page>
      </NavigationContainer> */}
    </View>
  );
}
