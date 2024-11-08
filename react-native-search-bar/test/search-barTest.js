import React, { useState } from 'react';
import { TestCase, TestSuite, Tester } from '@rnoh/testerino';
import { StyleSheet, SafeAreaView, ScrollView, Text } from 'react-native';
import SearchBar from 'react-native-search-bar';

const items = ['Apples', 'Pie', 'Juice', 'Cake', 'Nuggets'];

const App = () => {
  const [search, setSearch] = useState('');
  const search1 = React.createRef();
  const search2 = React.createRef();
  const search3 = React.createRef();
  const search4 = React.createRef();
  const search5 = React.createRef();
  
  


  return (
  <Tester  style={{ flex: 1, marginTop: 50 }}>
      <ScrollView style={styles.inset}>
	   <TestSuite  name="接口测试">
	  
			<TestCase
				itShould="点击搜索按钮调用unFocus接口后，搜索框失去焦点">
				<SearchBar
				style={{height: 55}}
				  ref={search2}
				  onSearchButtonPress={() => {
					  search2.current.unFocus()
				  }}
				/>
			</TestCase>
			
			<TestCase
				itShould="点击搜索按钮调用focus接口后，搜索框焦点未消失">
				<SearchBar
				style={{height: 55}}
				  ref={search1}
				  onSearchButtonPress={() => {
					  search1.current.focus()
				  }}
				/>
			</TestCase>
			
			
			
			<TestCase
				itShould="点击搜索按钮调用blur接口后，搜索框失去焦点">
				<SearchBar
				style={{height: 55}}
				  ref={search3}
				  onSearchButtonPress={() => {
					  search3.current.blur()
				  }}
				/>
			</TestCase>
			
			<TestCase
				itShould="输入内容，点击搜索按钮调用clearText接口后，搜索框已输入的内容消失">
				<SearchBar
				style={{height: 55}}
				  ref={search4}
				  onSearchButtonPress={() => {
					  search4.current.clearText()
				  }}
				/>
			</TestCase>
		</TestSuite>
		
		<TestSuite   name="事件属性测试">
	  
			<TestCase
				itShould="onchange 事件：输入内容即可"
				initialState={undefined}
				arrange={({ setState, state }) => {
					return (
						<SearchBar
							style={{height: 55}}
							  onChange={(e) => {
								  setState(e.nativeEvent);
							  }}
						/>
					)
					
				}}
				assert={({ expect, state }) => {
				  expect(state).to.be.not.undefined;
				  if (state) {
					expect(typeof state.text === 'string').to.be.true;
				  }
				}}
				>
			</TestCase>
			
			<TestCase
				itShould="onChangeText 事件：输入内容即可"
				initialState={undefined}
				arrange={({ setState, state }) => {
					return (
						<SearchBar
							style={{height: 55}}
							  onChangeText={(text) => {
								  setState(text);
							  }}
						/>
					)
					
				}}
				assert={({ expect, state }) => {
				  expect(state).to.be.not.undefined;
				  if (state) {
					expect(typeof state === 'string').to.be.true;
				  }
				}}
				>
			</TestCase>
			
			<TestCase
				itShould="onFocus 事件：点击输入框使其获取焦点"
				initialState={undefined}
				arrange={({ setState, state }) => {
					return (
						<SearchBar
							style={{height: 55}}
							  onFocus={() => {
								  setState(true);
							  }}
						/>
					)
					
				}}
				assert={({ expect, state }) => {
				  expect(state).to.be.not.undefined;
				  if (state) {
					expect(state).to.be.true;
				  }
				}}
				>
			</TestCase>
			
			<TestCase
				itShould="onBlur 事件：点击输入框使其获取焦点，然后隐藏键盘使其失去焦点"
				initialState={undefined}
				arrange={({ setState, state }) => {
					return (
						<SearchBar
							style={{height: 55}}
							  onBlur={() => {
								  setState(true);
							  }}
						/>
					)
					
				}}
				assert={({ expect, state }) => {
				  expect(state).to.be.not.undefined;
				  if (state) {
					expect(state).to.be.true;
				  }
				}}
				>
			</TestCase>
			
			<TestCase
				itShould="onSearchButtonPress 事件：输入内容点击搜索按钮"
				initialState={undefined}
				arrange={({ setState, state }) => {
					return (
						<SearchBar
							style={{height: 55}}
							  onSearchButtonPress={(text) => {
								  setState(text);
							  }}
						/>
					)
					
				}}
				assert={({ expect, state }) => {
				  expect(state).to.be.not.undefined;
				  if (state) {
					expect(typeof state === 'string').to.be.true;
				  }
				}}
				>
			</TestCase>
			
			<TestCase
				itShould="onCancelButtonPress 事件：点击输入框输入内容，点击取消按钮"
				initialState={undefined}
				arrange={({ setState, state }) => {
					return (
						<SearchBar
							style={{height: 55}}
							  onCancelButtonPress={() => {
								  setState(true);
							  }}
						/>
					)
					
				}}
				assert={({ expect, state }) => {
				  expect(state).to.be.not.undefined;
				  if (state) {
					expect(state).to.be.true;
				  }
				}}
				>
			</TestCase>
			
			
		</TestSuite>
		

		<TestSuite  name="UI 属性测试">
		
			<TestCase
				itShould="barStyle:default">
				<SearchBar
				  style={{height: 55}}
				  barStyle="default"
				/>
			</TestCase>
			
			<TestCase
				itShould="barStyle:Dark">
				<SearchBar
				  style={{height: 55}}
				  barStyle="Dark"
				/>
			</TestCase>
			
			<TestCase
				
				itShould="hideBackground?: ture">
				<SearchBar
				  style={{height: 55}}
				  hideBackground={true}
				/>
			</TestCase>
			
			<TestCase
				itShould="hideBackground?: false">
				<SearchBar
				  style={{height: 55}}
				  hideBackground={false}
				/>
			</TestCase>
			
			<TestCase
				itShould="showsCancelButton?:ture">
				<SearchBar
				  style={{height: 55}}
				  showsCancelButton={true}
				/>
			</TestCase>
			
			<TestCase
				itShould="showsCancelButton?:false">
				<SearchBar
				  style={{height: 55}}
				  showsCancelButton={false}
				/>
			</TestCase>
			
			<TestCase
				itShould="textFieldBackgroundColor: red">
				<SearchBar
				  style={{height: 55}}
				  textFieldBackgroundColor="red"
				/>
			</TestCase>
			
			<TestCase
				itShould="tintColor: green">
				<SearchBar
				  style={{height: 55}}
				  tintColor="green"
				/>
			</TestCase>
			
			<TestCase
				itShould="barTintColor: green">
				<SearchBar
				  style={{height: 55}}
				  barTintColor="green"
				/>
			</TestCase>
			
			<TestCase
				itShould="searchBarStyle?: 'default'">
				<SearchBar
				  style={{height: 55}}
				  searchBarStyle="default"
				/>
			</TestCase>
			
			<TestCase
				itShould="searchBarStyle?: 'prominent'">
				<SearchBar
				  style={{height: 55}}
				  searchBarStyle="prominent"
				/>
			</TestCase>
			
			<TestCase
				itShould="searchBarStyle?: 'minimal'">
				<SearchBar
				  style={{height: 55}}
				  searchBarStyle="minimal"
				/>
			</TestCase>
			
			<TestCase
				itShould="editable?: 'true'">
				<SearchBar
				  style={{height: 55}}
				  editable={true}
				/>
			</TestCase>
			
			<TestCase
				itShould="editable?: 'false'">
				<SearchBar
				  style={{height: 55}}
				  editable={false}
				/>
			</TestCase>
			
			
		
		</TestSuite>
      </ScrollView>
</Tester>
  );
};




const styles = StyleSheet.create({
  inset: {
    flex: 1,
	marginTop:30,
    backgroundColor: 'pink',
  },
});

export default App;