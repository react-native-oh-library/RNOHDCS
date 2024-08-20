import React, { useRef }  from 'react';
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { Appbar ,Button,MD2Colors} from 'react-native-paper';
import { ScrollView,View,StyleSheet} from 'react-native';

type mode = 'small' | 'medium' | 'large' | 'center-aligned';

export function AppbarDemo() {
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleContent = () => console.log('Content');
  const _handleMore = () => console.log('Shown more');

  const AppbarActionProps = [
    {
      key: 'Appbar.Action style:icon= calendar',
      value: {
        icon:"calendar"
      }
    },
    {
      key: 'Appbar.Action style:color is MD2Colors.blue100',
      value: {
        color:MD2Colors.blue100,
        icon:"calendar"
      }
    },
    {
      key: 'Appbar.Action style:color is MD2Colors.red500',
      value: {
        color:MD2Colors.red500,
        icon:"calendar"
      }
    },    
    {
      key: 'Appbar.Action style:icon is magnify',
      value: {
        icon:"magnify",
        rippleColor:MD2Colors.red500
      }
    },
    {
      key: 'Appbar.Action style:size is 30',
      value: {
        icon:"magnify",
        rippleColor:MD2Colors.red500,
        size:30
      }
    },
    {
      key: 'Appbar.Action style:size is 40',
      value: {
        icon:"magnify",
        rippleColor:MD2Colors.red500,
        size:40
      }
    },
    {
      key: 'Appbar.Action style:disabled is false',
      value: {
        icon:"magnify",
        size:30,
        disabled:false,
        onPress:_handleSearch,
      }
    },
    {
      key: 'Appbar.Action style:disabled is true',
      value: {
        icon:"magnify",
        size:30,
        disabled:true,
        onPress:_handleSearch,
      }
    },
    {
      key: 'Appbar.Action style:accessibilityLabel is accessibility(accessibilityLabel 属性，这是为了增强应用的无障碍性,该属性为屏幕阅读器提供了一个标签，这样视力障碍的用户就能通过语音助手了解界面上各个元素的功能)',
      value: {
        icon:"magnify",
        accessibilityLabel:'accessibility'
      }
    },
    {
      key: 'Appbar.Action style:isLeading is true',
      value: {
        icon:"magnify",
        isLeading:true
      }
    },
    {
      key: 'Appbar.Action style:isLeading is false',
      value: {
        icon:"magnify",
        isLeading:false
      }
    },
    {
      key: 'Appbar.Action style:backgroundColor is MD2Colors.blue100',
      value: {
        icon:"magnify",
        style:{ backgroundColor:MD2Colors.blue100}
      }
    }
  ]


  const viewRef = useRef(null); 
  // 你可以使用这个ref来访问View组件，例如测量其尺寸  
  const measureView = () => {  
    if (viewRef.current) {  
      // 这里只是为了演示如何访问ref  
      console.log('View is referenced');
    }  
  };  


  const AppbarBackActionProps = [
    {
      key: 'Appbar.BackAction style:color is MD2Colors.blue100',
      value: {
        color:MD2Colors.blue100,
      }
    },
    {
      key: 'Appbar.BackAction style:color is MD2Colors.red100',
      value: {
        color:MD2Colors.red100,
      }
    },
    {
      key: 'Appbar.BackAction style:color is 20',
      value: {
        size:20,
      }
    },
    {
      key: 'Appbar.BackAction style:color is 40',
      value: {
        size:40,
      }
    },
    {
      key: 'Appbar.BackAction style:disabled is true',
      value: {
        disabled:true,
      }
    },
    {
      key: 'Appbar.BackAction style:disabled is false',
      value: {
        disabled:false,
      }
    },
    {
      key: 'Appbar.BackAction style:accessibilityLabel is Appbar.BackAction(这样视力障碍的用户就能通过语音助手了解界面上各个元素的功能)',
      value: {
        accessibilityLabel:'Appbar.BackAction',
      }
    },
    {
      key: 'Appbar.BackAction style:style is backgroundColor:MD2Colors.blue100',
      value: {
        style:{ backgroundColor:MD2Colors.blue100}
      }
    },
  ]

  const AppbarContentActionProps = [
    {
      key: 'AppbarContent style:title is Title)',
      value: {
        title:'Title',
      }
    },
    {
      key: 'AppbarContent style:titleStyle is {color:"red"})',
      value: {
        title:'Title',
        titleStyle:{color:'red'},
      }
    },
    {
      key: 'AppbarContent style:disabled:true',
      value: {
        title:'Title',
        disabled:true,
      }
    },
    {
      key: 'AppbarContent style:disabled:false',
      value: {
        title:'Title',
        disabled:false,
      }
    },
    {
      key: 'AppbarContent style:titleMaxFontSizeMultiplier is 2',
      value: {
        title:'Title',
        titleMaxFontSizeMultiplier:2
      }
    },
    {
      key: 'AppbarContent style: style is backgroundColor:MD2Colors.blue100',
      value: {
        title:'Title',
        style:{ backgroundColor:MD2Colors.blue100}
      }
    },
    {
      key: 'AppbarContent style: theme = { colors: { primary:"green"}}',
      value: {
        title:'Title',
        theme:{ colors: { primary: 'green' }}
      }
    },
    {
      key: 'AppbarContent style: testID is "test1"',
      value: {
        title:'Title',
        testID:'test1'
      }
    }
  ]

  const AppbarHeaderActionProps = [
    {
      key: 'AppbarHeader style:dark is true',
      value: {
        dark:true,
        style:{ backgroundColor:MD2Colors.black}
      }
    },
    {
      key: 'AppbarHeader style:dark is flase',
      value: {
        dark:false,
        style:{ backgroundColor:MD2Colors.white}
      }
    },
    {
      key: 'AppbarHeader style:statusBarHeight is 60',
      value: {
        statusBarHeight:60,
      }
    },
    {
      key: 'AppbarHeader style:mode is small',
      value: {
        mode:'small' as mode,
      }
    },
    {
      key: 'AppbarHeader style:mode is medium',
      value: {
        mode:'medium' as mode,
      }
    },
    {
      key: 'AppbarHeader style:mode is large',
      value: {
        mode:'large' as mode,
      }
    },
    {
      key: 'AppbarHeader style:mode is center-aligned',
      value: {
        mode:'center-aligned' as mode,
      }
    },
    {
      key: 'AppbarHeader style:style is backgroundColor:MD2Colors.blue100',
      value: {
        mode:'center-aligned' as mode ,
        style:{ backgroundColor:MD2Colors.blue100}
      }
    },
    {
      key: 'AppbarHeader style:theme is  colors: { primary: "green" }(如果style属性不生效，可以使用theme进行颜色覆盖)',
      value: {
        theme:{ colors: { primary: 'green' } }
      }
    },
    {
      key: 'AppbarHeader style:testID is AppbarHeader',
      value: {
        testID:'AppbarHeader'
      }
    },
    {
      key: 'AppbarHeader style:elevated is true',
      value: {
        elevated :true
      }
    },
    {
      key: 'AppbarHeader style:elevated is false',
      value: {
        elevated :false
      }
    },
  ]

  return (
    <Tester> 
    <ScrollView>
     <TestSuite name='Appbar'>
        <TestCase  itShould='Appbar.Action style rippleColor is MD2Colors.red500'> 
          <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="magnify" rippleColor={MD2Colors.red500} onPress={() => {}}/>
          </Appbar.Header>
        </TestCase>
        <TestCase  itShould='Appbar.BackAction fuction: onPress={_goBack}'> 
          <Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="magnify" rippleColor={MD2Colors.red500}/>
          </Appbar.Header>
        </TestCase>
        <TestCase  itShould='Appbar.Action fuction: onPress = {_handleSearch}'> 
          <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="magnify" onPress={_handleSearch}/>
          </Appbar.Header>
        </TestCase>
        <TestCase  itShould='Appbar.Content fuction: onPress'> 
          <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Title" onPress={_handleContent}/>
            <Appbar.Action icon="magnify" />
          </Appbar.Header>
        </TestCase>
         {AppbarActionProps.map((item) => {
            return (
              <TestCase  itShould={item.key}  key={item.key} > 
                <Appbar.Header>
                  <Appbar.BackAction onPress={() => {}} />
                  <Appbar.Content title="Title" />
                  <Appbar.Action  {...item.value} />
                </Appbar.Header>
              </TestCase>
            );
          })}
       <TestCase itShould={'Appbar.Header style:ref={viewRef}'}  >
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} ref={viewRef}/>
        </Appbar.Header>
          <Button onPress={measureView} >Press me</Button>  
         </TestCase>
        {AppbarBackActionProps.map((item) => {
              return (
                <TestCase  itShould={item.key}  key={item.key} > 
                    <Appbar.Header>
                      <Appbar.BackAction {...item.value} />
                    </Appbar.Header>
                </TestCase>
              );
          })}
      
          {AppbarContentActionProps.map((item) => {
              return (
                <TestCase  itShould={item.key}  key={item.key} > 
                    <Appbar.Header>
                      <Appbar.Content {...item.value} />
                    </Appbar.Header>
                </TestCase>
              );
          })}
          <TestCase  itShould={'AppbarContent theme: colors: { primary: "green" }'}> 
            <Appbar.Header>
              <Appbar.Content title='title' color='green' theme={{ colors: { primary: 'green' } }} />
            </Appbar.Header>
          </TestCase>
          <TestCase  itShould={'AppbarHeader style:children:<Appbar.BackAction/><Appbar.Action/>'} > 
              <Appbar.Header >
                <Appbar.BackAction/>
                <Appbar.Content title="Title" />
                <Appbar.Action icon="magnify"  />
                <Appbar.Action icon="dots-vertical"/>
              </Appbar.Header>
          </TestCase>
          {AppbarHeaderActionProps.map((item) => {
              return (
                <TestCase  itShould={item.key}  key={item.key} > 
                  <Appbar.Header  {...item.value}>
                    <Appbar.BackAction/>
                    <Appbar.Content title="Title" />
                    <Appbar.Action icon="magnify"  />
                    <Appbar.Action icon="dots-vertical"/>
                  </Appbar.Header>
                </TestCase>
              );
          })}
     </TestSuite>
    </ScrollView>
  </Tester>
  )
}

const styles = StyleSheet.create({  
  container: {  
    // 这里你可以尝试一些样式变化，但请注意 React Native 不支持直接的阴影效果  
    // 如果你需要阴影，你可能需要使用额外的库  
    // 例如，你可以尝试给 Appbar 添加一个背景色和边框来模拟提升效果（但这不是真正的阴影）  
    backgroundColor: 'white',   
    borderBottomColor: '#ccc',  
    height:160,  
  },  
  content: {  
    flex: 1,  
    // 页面内容的样式  
  },  
});  

export default AppbarDemo;