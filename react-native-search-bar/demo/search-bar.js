import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import SearchBar from 'react-native-search-bar';

const items = ['Apples', 'Pie', 'Juice', 'Cake', 'Nuggets'];

const App = () => {
  const [search, setSearch] = useState('');
  const [changeInfo, setChangeInfo] = useState('');
  const [changeTextInfo, setChangeTextInfo] = useState('');
  const [onSearchButtonPressInfo, setOnSearchButtonPressInfo] = useState('');
  const [onBlur, setOnBlur] = useState(false);
  const [onFocus, setOnFocus] = useState(false);
  const [onCancelButtonPress, setOnCancelButtonPress] = useState(false);
  const search0 = React.createRef();
  const search1 = React.createRef();
  const search2 = React.createRef();
  const search3 = React.createRef();
  const search4 = React.createRef();


  return (
      <ScrollView style={styles.inset}>

		<Text style={styles.header}>1.unFocus:输入内容点击键盘右下角搜索按钮，焦点消失</Text>
        <SearchBar
		style={{marginTop:10,height: 55}}
          ref={search0}
          onSearchButtonPress={() => {
			  search0.current.unFocus()
		  }}
        />
		
		<Text style={styles.header}>2.focus:输入内容搜点击键盘右下角搜索按钮，焦点保持在搜索框内</Text>
        <SearchBar
		style={{marginTop:10,height: 55}}
          ref={search1}
          onSearchButtonPress={() => {
			  search1.current.focus()
		  }}
        />
		
		<Text style={styles.header}>3.blur:输入内容点击键盘右下角搜索按钮，焦点消失</Text>
        <SearchBar
		style={{marginTop:10,height: 55}}
          ref={search2}
          onSearchButtonPress={() => {
			  search2.current.blur()
		  }}
        />
		
		<Text style={styles.header}>4.clearText:输入内容搜点击键盘右下角搜索按钮，输入的内容被删除</Text>
        <SearchBar
		style={{marginTop:10,height: 55}}
          ref={search3}
          onSearchButtonPress={() => {
			  search3.current.clearText()
		  }}
        />

		<Text style={styles.header}>5.placeholder:提示文字：占位符</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          placeholder="占位符"
        />
		
		<Text style={styles.header}>6.textColor:输入框输入的文字颜色：红色</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          textColor="red"
        />
		
		<Text style={styles.header}>7.barTintColor: 整个搜索组件背景色：绿色</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          barTintColor="green"
        />
		
		<Text style={styles.header}>8.tintColor: 文本选中是底板颜色/光标颜色/取消按钮颜色：绿色</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          tintColor="green"
        />
		
		<Text style={styles.header}>9.text: 默认搜索文字：test_text</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          text="test_text"
        />
		
		<Text style={styles.header}>10.textFieldBackgroundColor: 输入框背景色：红色</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          textFieldBackgroundColor="red"
        />
		
		<Text style={styles.header}>11.returnKeyType: 软键盘右下角文字：搜索</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          returnKeyType="Search"
        />
		
		<Text style={styles.header}>12.returnKeyType: 软键盘右下角文字：完成</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          returnKeyType="Done"
        />
		
		<Text style={styles.header}>13.returnKeyType: 软键盘右下角文字：下一步</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          returnKeyType="Next"
        />
		
		<Text style={styles.header}>14.returnKeyType: 软键盘右下角文字：发送</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          returnKeyType="Send"
        />
		
		<Text style={styles.header}>15.keyboardType: 弹出的软键盘为：数字风格</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          keyboardType="numeric"
        />
		
		<Text style={styles.header}>16.keyboardType: 弹出的软键盘为：电话风格</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          keyboardType="phone-pad"
        />
		
		<Text style={styles.header}>17.keyboardType: 弹出的软键盘为：邮箱风格</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          keyboardType="email-address"
        />
		
		<Text style={styles.header}>18.showsCancelButtonWhileEditing: 编辑的情况下显示取消按钮</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          showsCancelButtonWhileEditing={true}
        />
		
		<Text style={styles.header}>19.showsCancelButtonWhileEditing: 编辑的情况下不显示取消按钮</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          showsCancelButtonWhileEditing={false}
        />
		
		<Text style={styles.header}>20.hideBackground: 隐藏整体搜索框背景色</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          hideBackground={true}
        />
		
		<Text style={styles.header}>21.hideBackground: 显示整体搜索框背景色</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          hideBackground={false}
        />
		
		<Text style={styles.header}>22.barStyle: black</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          barStyle="black"
        />
		
		<Text style={styles.header}>23.barStyle: default</Text>
        <SearchBar
		style={{marginTop:10,height: 55}}
          barStyle="default"
        />
		
		<Text style={styles.header}>24.editable: 输入框可以获取焦点</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          editable={true}
        />
		
		<Text style={styles.header}>25.editable: 输入框获取不到焦点</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          editable={false}
        />
		
		<Text style={styles.header}>26.showsCancelButton: 在没有获取焦点的情况下直接显示取消按钮</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          showsCancelButton={true}
        />
		
		<Text style={styles.header}>27.showsCancelButton: 获取焦点的时候显示取消按钮</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          showsCancelButton={false}
        />
		
		
		<Text style={styles.header}>28.searchBarStyle?: 'default'</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          searchBarStyle="default"
        />
		
		<Text style={styles.header}>29.searchBarStyle?: 'prominent'</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          searchBarStyle="prominent"
        />
		
		<Text style={styles.header}>30.searchBarStyle?: 'minimal'</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          searchBarStyle="minimal"
        />
		
		<Text style={styles.header}>31.cancelButtonText: 设置取消按钮文本为：清理，默认是Cancel</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          cancelButtonText="清理"
        />
		
		<Text style={styles.header}>32.onBlur 失去焦点的时候为true: {onBlur? 'true' : 'false'}</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          onBlur={()=>{
			  setOnBlur(true);
		  }}
        />
		
		<Text style={styles.header}>33.onFocus 获取焦点的时候为true：{onFocus? 'true' : 'false'}</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          onFocus={()=>{
			  setOnFocus(true);
		  }}
        />
		
		<Text style={styles.header}>34.onchange 回调参数：{changeInfo}</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          onChange={(e) => {
			setChangeInfo(JSON.stringify(e.nativeEvent))
			console.log('onChange-------------------> target: ' + e.nativeEvent.target + ", text: " + e.nativeEvent.text + ", eventCount: " + e.nativeEvent.eventCount)
		  }}
        />
		
		<Text style={styles.header}>35.onChangeText 回调参数：{changeTextInfo}</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          onChangeText={(text) => {
			setChangeTextInfo(text)
		  }}
        />
		
		<Text style={styles.header}>36.onSearchButtonPress 回调参数：{onSearchButtonPressInfo}</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          onSearchButtonPress={(text) => {
			setOnSearchButtonPressInfo(text)
		  }}
        />
		
		<Text style={styles.header}>37.onCancelButtonPress 当点击取消按钮或者删除完输入框输入的内容是为true: {onCancelButtonPress? 'true' : 'false'}</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          onCancelButtonPress={() => {
			setOnCancelButtonPress(true)
		  }}
        />

        <Text style={styles.header}>Search Example</Text>
        <SearchBar
		  style={{marginTop:10,height: 55}}
          text={search}
          ref={search4}
          onChange={e => console.log(e.nativeEvent)}
          onChangeText={setSearch}
          onSearchButtonPress={() => search4.current.blur()}
        />

        {items
          .filter(a => a.toLowerCase().indexOf(search.toLowerCase()) !== -1)
          .map(a => (
            <Text style={styles.listItem} key={a}>
              {a}
            </Text>
          ))}
      </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  inset: {
    flex: 1,
	marginTop:50,
    backgroundColor: '#F5FCFF',
  },
  header: {
	marginLeft:10,
	marginTop:10,
    fontSize: 12,
  },
  listItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 18,
    backgroundColor: '#fff',
  },
});

export default App;