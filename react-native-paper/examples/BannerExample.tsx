import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import {
  Banner, Button, MD2Colors,
} from 'react-native-paper';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import { useRef } from 'react';

export function BannerTest() {
  const [visible, setVisible] = React.useState(true);
  const [handleShowAnimationFinishedText, setHandleShowAnimationFinishedText] = React.useState('');
  const [handleHideAnimationFinishedText, sethandleHideAnimationFinishedText] = React.useState('');

  const viewRef = useRef<View>(null);
  const measureView = () => {
    if (viewRef.current) {
      // 这里只是为了演示如何访问ref  
      console.log('View is referenced');
    }
    console.log('View is viewRef');
  };

  const handleShowAnimationFinished = () => {
    setHandleShowAnimationFinishedText('Banner animation finished!')
  }

  const handleHideAnimationFinished = () => {
    sethandleHideAnimationFinishedText('Banner hide animation finished!')
  };

  return (
    <ScrollView>
      <Tester>
        <TestSuite name='Banner' >

          <TestCase itShould={'visible 是否可见,默认为可见,当点击Fix it,会将visible置于false,变成不可见;'} >
            <Banner
              //visible 可见性，默认为true，即可见，当点击下方aciton时，会变成不可见
              // **特别注释**: children 属性表示，可以'Banner'组件中写入,例如此处文字,可点击的actions等其他属性.children在文档中只是表示该组件可以展示这类东西,统称子节点
              visible={visible}
              // contentStyle 属性用于设置 Banner 内容部分的样式。这可以自定义 Banner的样式
              contentStyle={{ backgroundColor: '#ADD8E6', padding: 10, borderRadius: 5 }}
              //onShowAnimationFinished，Banner展示完毕后，调用的函数，打开该demo后，会触发该回调显示Banner animation finished!
              onShowAnimationFinished={handleShowAnimationFinished} // 设置回调
              //onShowAnimationFinished，Banner隐藏后，调用的函数，点击按键隐藏后，会触发该回调显示Banner hide animation finished!
              onHideAnimationFinished={handleHideAnimationFinished} // 设置回调
              //actions属性,点击如下的label后,可以触发visible的变化
              actions={[
                {
                  label: 'Fix it',
                  onPress: () => setVisible(false),
                },
              ]}
              //theme属性使按键为黑色
              theme={{colors:{
                primary: "rgb(95, 43, 146)"
              }}}
              //icon属性显示图片
              icon={({ size }) => (
                <Image
                  source={{
                    uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                  }}
                  style={{
                    width: size,
                    height: size,
                  }}
                />
              )}>
              <Text style={{ color: 'red', fontSize: 20 }}>
                **特别注释**:
              </Text>
              children 属性表示，可以'Banner'组件中写入,例如此处文字,可点击的actions等其他属性.children在文档中只是表示该组件可以展示这类东西,统称子节点；
            </Banner>
            <Text>这里同时展示的onShowAnimationFinished回调,打开demo展示:{handleShowAnimationFinishedText}</Text>
            <Text>这里同时展示的onHideAnimationFinished回调,点击隐藏触发:{handleHideAnimationFinishedText}</Text>
          </TestCase>

        </TestSuite>
      </Tester>
    </ScrollView>
  )
}

export default BannerTest;
