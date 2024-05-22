import {ScrollView, View} from 'react-native';
import {NavigationContainer, Page} from '../../components';
import JsbarcodeSvgDemo from './JsbarcodeSvgDemo';

export default function JsbarcodeDemo() {
  return (
    <View style={{width:'100%', height:'100%'}}>
       <NavigationContainer>
        <Page name="svg展示条形码">
           <ScrollView>
            <JsbarcodeSvgDemo />
           </ScrollView>
         </Page>
      </NavigationContainer>
    </View>
  );
}
