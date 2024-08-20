import * as React from 'react';
import { Keyboard, ScrollView, StyleSheet } from 'react-native';
import { Searchbar,MD2Theme,MD3Theme,useTheme,MD3Colors,Avatar, MD2Colors} from 'react-native-paper';

import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { Style } from 'react-native-paper/lib/typescript/components/List/utils';

type SearcQuery = {
  [key: string]: string;
};

function SearchDemo() { 
  const useExampleTheme = () => useTheme<MD2Theme | MD3Theme>();
  const theme = useExampleTheme();
  const [searchQuery, setSearchQuery] = React.useState<SearcQuery>({});
  const _getSearchQuery = (name: string) => searchQuery[name]

  const _onChangeText=(name: string) => (query: string) =>
  setSearchQuery({ ...searchQuery, [name]: query});
  const _onIconPress =() => {
    console.info('function onIconPress')
    Keyboard.dismiss();
  }

  const _onClearIconPress =() => {
    console.info('function onIconPress')
    Keyboard.dismiss();
  }

  const _onTraileringIconPress =() => {
    console.info('fuction onTraileringIconPress')
  }

  const SearchbarProps = [
    {
      key: ' ProgressBar style:placeholder={"Search"}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar1'),
        value:_getSearchQuery('searchbar1'),
      },
    },
    {
      key: ' ProgressBar style:placeholder={"Search1"}',
      value: {
        placeholder:"Search1",
        onChangeText:_onChangeText('searchbar2'),
        value:_getSearchQuery('searchbar2'),
      },
    },
    {
      key: ' ProgressBar style:value={"aaaaa"}',
      value: {
        placeholder:"Search",
        value:'aaaaa',
      },
    },
    {
      key: ' ProgressBar style:value={"bbbbb"}',
      value: {
        placeholder:"Search",
        value:'bbbbb',
      },
    },
    {
      key: ' ProgressBar style:mode={"bar"}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar3'),
        value:_getSearchQuery('searchbar3'),
        mode:'bar' as 'bar' | 'view'
      },
    },
    {
      key: ' ProgressBar style:mode={"view"}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar4'),
        value:_getSearchQuery('searchbar4'),
        mode:'view' as 'bar' | 'view'
      },
    }
    ,
    {
      key: ' ProgressBar style:icon={ source: "arrow-left", direction: "auto" }',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar5'),
        value:_getSearchQuery('searchbar5'),
        icon:'arrow-left'
      },
    },
    {
      key: ' ProgressBar style:iconColor={ MD2Colors.red100}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar6'),
        value:_getSearchQuery('searchbar6'),
        icon:'arrow-left',
        iconColor:MD2Colors.red100
      },
    },
    {
      key: ' ProgressBar style:iconColor={ MD2Colors.black}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar7'),
        value:_getSearchQuery('searchbar7'),
        icon:'arrow-left',
        iconColor:MD2Colors.black
      },
    },
    {
      key: ' ProgressBar style:rippleColor={ MD2Colors.red100}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar8'),
        value:_getSearchQuery('searchbar8'),
        rippleColor:MD2Colors.red100,
        onIconPress:_onIconPress
      },
    },
    {
      key: ' ProgressBar function:onIconPress={ _onIconPress}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar10'),
        value:_getSearchQuery('searchbar10'),
        rippleColor:MD2Colors.red100,
        onClearIconPress:_onClearIconPress
      },
    }
    ,
    {
      key: ' ProgressBar style:searchAccessibilityLabel={"Accessibility Label"}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar11'),
        value:_getSearchQuery('searchbar11'),
        searchAccessibilityLabel:'Accessibility Label'
      },
    },
    {
      key: ' ProgressBar style:searchAccessibilityLabel={"Accessibility Label1"}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar12'),
        value:_getSearchQuery('searchbar12'),
        searchAccessibilityLabel:'Accessibility Label1'
      },
    },
    {
      key: ' ProgressBar style:clearIcon={"arrow-left"}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar13'),
        value:_getSearchQuery('searchbar13'),
        clearIcon:'arrow-left'
      },
    },
    {
      key: ' ProgressBar style:clearAccessibilityLabel={"clearAccessibilityLabel"}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar14'),
        value:_getSearchQuery('searchbar14'),
        clearAccessibilityLabel:'clearAccessibilityLabel'
      },
    },
    {
      key: ' ProgressBar style:clearAccessibilityLabel={"clearAccessibilityLabel1"}',
      value: {
        placeholder:"Search",
        onChangeText:_onChangeText('searchbar15'),
        value:_getSearchQuery('searchbar15'),
        clearAccessibilityLabel:'clearAccessibilityLabel1'
      },
    }
    ,
    {
      key: ' ProgressBar style:traileringIcon ={"microphone"}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        traileringIcon :'microphone'
      },
    },
    {
      key: ' ProgressBar style:traileringIcon ={MD2Colors.red100}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        traileringIcon :'microphone',
        traileringIconColor  :MD2Colors.red100
      },
    },
    {
      key: ' ProgressBar style:traileringIcon ={MD2Colors.blue100}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        traileringIcon :'microphone',
        traileringIconColor  :MD2Colors.blue100
      },
    },
    {
      key: ' ProgressBar style:traileringIcon ={MD2Colors.blue100}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        traileringRippleColor :MD2Colors.blue100,
        onTraileringIconPress :_onTraileringIconPress
      },
    },
    {
      key: ' ProgressBar style:traileringRippleColor ={MD2Colors.blue100}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        traileringRippleColor :MD2Colors.blue100,
        onTraileringIconPress :_onTraileringIconPress
      },
    },
    {
      key: ' ProgressBar style:traileringRippleColor ={MD2Colors.red100}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        traileringRippleColor :MD2Colors.red100,
        onTraileringIconPress :_onTraileringIconPress
      },
    },
    {
      key: ' ProgressBar fuction:onTraileringIconPress ={_onTraileringIconPress}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        traileringRippleColor :MD2Colors.red100,
        onTraileringIconPress :_onTraileringIconPress
      },
    },
    {
      key: ' ProgressBar style:traileringIconAccessibilityLabel ={"traileringIconAccessibilityLabel"}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        traileringRippleColor :MD2Colors.red100,
        onTraileringIconPress  :_onTraileringIconPress,
        traileringIconAccessibilityLabel:'traileringIconAccessibilityLabel'
      },
    },
    {
      key: ' ProgressBar style:traileringIconAccessibilityLabel ={"traileringIconAccessibilityLabel1"}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        traileringRippleColor :MD2Colors.red100,
        onTraileringIconPress  :_onTraileringIconPress,
        traileringIconAccessibilityLabel:'traileringIconAccessibilityLabel1'
      },
    },
    {
      key: ' ProgressBar style:right ={" <Avatar.Image {...props} size={30} source={require("../assets/images/avatar.png")}"}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        right:(props: { color: string; style: Style; testID: string; }) =>  <Avatar.Image
        {...props}
        size={30}
        source={require('../assets/images/avatar.png')}
      />
      },
    },
    {
      key: ' ProgressBar style:showDivider ={true}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        showDivider:true,
      },
    },
    {
      key: ' ProgressBar style:showDivider={false}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        showDivider:false,
      },
    },
    {
      key: ' ProgressBar style:elevation={0}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        elevation :0 as 0 | 1 | 2 | 3 | 4 | 5 ,
      },
    },
    {
      key: ' ProgressBar style:elevation={1}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        elevation :1 as 0 | 1 | 2 | 3 | 4 | 5 ,
      },
    },
    {
      key: ' ProgressBar style:elevation={2}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        elevation :2 as 0 | 1 | 2 | 3 | 4 | 5 ,
      },
    },
    {
      key: ' ProgressBar style:elevation={3}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        elevation :3 as 0 | 1 | 2 | 3 | 4 | 5 ,
      },
    },
    {
      key: ' ProgressBar style:elevation={4}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        elevation :4 as 0 | 1 | 2 | 3 | 4 | 5 ,
      },
    },
    {
      key: ' ProgressBar style:elevation={5}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        elevation :5 as 0 | 1 | 2 | 3 | 4 | 5 ,
      },
    },
    {
      key: ' ProgressBar style:inputStyle={MD2Colors.red100}',
      value: {
        placeholder:"Search",
        mode:'bar' as 'bar' | 'view',
        onChangeText:_onChangeText('searchbar23'),
        value:_getSearchQuery('searchbar23'),
        inputStyle :{color:MD2Colors.red100},
      },
    },
    {
      key: ' ProgressBar style:inputStyle={MD2Colors.red100}',
      value: {
        mode:'bar' as 'bar' | 'view',
        onChangeText:_onChangeText('searchbar22'),
        value:_getSearchQuery('searchbar22'),
        placeholder:"Search",
        style :{backgroundColor:MD2Colors.red100},
      },
    },
    {
      key: ' ProgressBar style:loading={true}',
      value: {
        mode:'bar' as 'bar' | 'view',
        onChangeText:_onChangeText('searchbar20'),
        value:_getSearchQuery('searchbar20'),
        placeholder:"Search",
        loading :true,
      },
    },
    {
      key: ' ProgressBar style:loading={false}',
      value: {
        mode:'bar' as 'bar' | 'view',
        onChangeText:_onChangeText('searchbar21'),
        value:_getSearchQuery('searchbar21'),
        placeholder:"Search",
        loading :false,
      },
    },
    {
      key: ' ProgressBar style:testID={"Searchbar"}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        testID :"Searchbar",
      },
    },
    {
      key: ' ProgressBar style:testID={"Searchbar1"}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        testID :"Searchbar1",
      },
    },
    {
      key: ' ProgressBar style:theme={theme}',
      value: {
        mode:'bar' as 'bar' | 'view',
        value:'',
        placeholder:"Search",
        theme :theme,
      },
    },
  ]

  //icon={{ source: 'arrow-left', direction: 'auto' }}
  return (
    <Tester>
      <ScrollView>
      <TestSuite name='Search' >
      {SearchbarProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
              <Searchbar {...item.value}/>
            </TestCase>
          );
        })},
        </TestSuite>
      </ScrollView>
    </Tester>
  )
}

const styles = StyleSheet.create({
  searchbar: {
    margin: 4,
  },
});

export default SearchDemo;