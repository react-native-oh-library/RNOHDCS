import { View, Text, ScrollView, TextInput, TextInputProps } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import React, { useRef } from 'react';
import { NavigationContainer, Page } from './Navigation';

import { CustomRightIconExample } from './CustomRightIconExample';
import { LocalDataSetExample } from './LocalDataSetExample';
import { LocalDataSetExample2 } from './LocalDataSetExample2';
import { RemoteDataSetExample } from './RemoteDataSetExample';
import { LoadingExample } from './LoadingExample';
import { ShowClearExample } from './showClearExample';
import { ShowChevronExample } from './showChevron';
import { CloseOnBlurExample } from './CloseOnBlurExample'
import { CloseOnSubmitExample } from './CloseOnSubmitExample';
import { IgnoreAccentExample } from './IgnoreAccentsExample';
import { TrimSearchTextExample } from './TrimSearchTextExample';
import { DebounceExample } from './DebounceExample';
import { SuggestionsListExample } from "./SuggestListHeightExample";
import { MatchFormExample } from './matchFormExample';
import { EventExample } from './EventExample';
import { ControlerExample } from './ControlerExample';
import { ContainerStyleExample} from './ContainerStyleExample';
import { EmptyResultExample } from './EmptyResultExample';
import { BasicDrpExample } from './BasicDropDownExample';
import * as Icon from 'react-native-feather';



// 下拉选择demo
export const DrpDemo = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="autoComplete dropdown">
                    {/* 本地数据 */}
                    <TestCase itShould="dateSet">
                        <LocalDataSetExample />
                    </TestCase>
                    <TestCase itShould="initialValue: 2">
                        <LocalDataSetExample />
                    </TestCase>
                    <TestCase itShould="renderItem">
                        <LocalDataSetExample2 />
                    </TestCase>
                    {/* Custom Icon */}
                    <TestCase itShould="RightIconComponent">
                        <CustomRightIconExample />
                    </TestCase>
                    <TestCase itShould="RemoteDataSet">
                        <RemoteDataSetExample />
                    </TestCase>
                    <TestCase itShould="IgnoreAccents(特殊字符搜索)">
                        <IgnoreAccentExample />
                    </TestCase>
                    <TestCase itShould="TrimSearchText">
                        <TrimSearchTextExample />
                    </TestCase>
                    <TestCase itShould="Debounce: 0">
                        <DebounceExample debounce={0} />
                    </TestCase>
                    <TestCase itShould="Debounce: 1000">
                        <DebounceExample debounce={1000} />
                    </TestCase>
                    {/* 本地数据 */}
                    <TestCase itShould="LoadingExample">
                        <LoadingExample />
                    </TestCase>
                    <TestCase itShould="ShowClearExample">
                        <ShowClearExample />
                    </TestCase>
                    <TestCase itShould="ShowChevronExample">
                        <ShowChevronExample />
                    </TestCase>
                    <TestCase itShould="clearOnFocus: true">
                        <BasicDrpExample clearOnFocus={true}/>
                    </TestCase>
                    <TestCase itShould="clearOnFocus: false">
                        <BasicDrpExample clearOnFocus={false}/>
                    </TestCase>
                    <TestCase itShould="CloseOnSubmit">
                        <CloseOnSubmitExample />
                    </TestCase>
                    <TestCase itShould="useFilter: true">
                        <BasicDrpExample useFilter={true}/>
                    </TestCase>
                    <TestCase itShould="useFilter: false">
                        <BasicDrpExample useFilter={false}/>
                    </TestCase>
                    <TestCase itShould="editable: true">
                        <BasicDrpExample editable={true}/>
                    </TestCase>
                    <TestCase itShould="editable: false">
                        <BasicDrpExample editable={false}/>
                    </TestCase>
                    <TestCase itShould="caseSensitive: true">
                        <BasicDrpExample caseSensitive={true}/>
                    </TestCase>
                    <TestCase itShould="caseSensitive: false">
                        <BasicDrpExample caseSensitive={false}/>
                    </TestCase>
                    <TestCase itShould="direction: down">
                        <BasicDrpExample direction='down' />
                    </TestCase>
                    <TestCase itShould="direction: up">
                        <BasicDrpExample direction='up' />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    )
}


const InputComp = React.forwardRef((props: {}, ref) => {

    
    React.useImperativeHandle(ref, () => inpRef.current);

    const inpRef = useRef<any>(null);

    return (
        <TextInput ref={inpRef} style={{width: '80%', backgroundColor: 'blue', height: 30}} placeholderTextColor="blue"/>
    );
})


// 下拉选择demo 2
export const DrpDemo2 = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="autoComplete dropdown">
                    <TestCase itShould={'suggestionsListMaxHeight: 100'}>
                        <SuggestionsListExample suggestionsListMaxHeight={100}/>
                    </TestCase>
                    <TestCase itShould={'suggestionsListMaxHeight: 200'}>
                        <SuggestionsListExample suggestionsListMaxHeight={200}/>
                    </TestCase>
                    <TestCase itShould={'suggestionsListTextStyle: (color: red) (fontWeight: 800)'}>
                        <SuggestionsListExample suggestionsListTextStyle={{
                            shadowColor: 'red', fontWeight: '800', color: 'red'
                        }}/>
                    </TestCase>
                    <TestCase itShould={'suggestionsListContainerStyle: (borderRadius: 30) (bcg: #ccc)'}>
                        <SuggestionsListExample suggestionsListContainerStyle={{
                            borderRadius: 0, backgroundColor: '#ccc'
                        }}/>
                    </TestCase>
                    <TestCase itShould={'matchForm: any'}>
                        <MatchFormExample matchFrom='any'/>
                    </TestCase>
                    <TestCase itShould={'matchForm: start'}>
                        <MatchFormExample matchFrom='start'/>
                    </TestCase>
                    <TestCase itShould={'Control example'}>
                        <ControlerExample/>
                    </TestCase>
                    <TestCase itShould={'ContainerStyle & InputContainerStyle example'}>
                        <ContainerStyleExample 
                            containerStyle={{backgroundColor: 'red'}}
                            inputContainerStyle={{width: '60%'}}
                        />
                    </TestCase>
                    <TestCase itShould={'rightButtonsContainerStyle'}>
                        <BasicDrpExample rightButtonsContainerStyle={{
                                        right: 8,
                                        height: 36,
                                        alignSelf: 'center',
                                        backgroundColor: 'red',
                                        borderRadius: 10
                        }}></BasicDrpExample>
                    </TestCase>
                    <TestCase itShould={'emptyResult'}>
                        <EmptyResultExample 
                            emptyResultText='未找到结果'
                        />
                    </TestCase>
                    <TestCase itShould={'emptyResultComponent'}>
                        <EmptyResultExample 
                            EmptyResultComponent={
                                <View style={{padding: 10}}>
                                    <Text style={{fontWeight: '800', color: 'red'}}>未找到结果</Text>
                                </View>
                            }
                        />
                    </TestCase>
                    <TestCase itShould={'ChevronIcon Component'}>
                        <BasicDrpExample 
                            ChevronIconComponent={
                                <Icon.Book></Icon.Book>
                            }
                        />
                    </TestCase>
                    <TestCase itShould={'ClearIcon Component'}>
                        <BasicDrpExample 
                            ClearIconComponent={
                                <Icon.XCircle fill='red'></Icon.XCircle>
                            }
                        />
                    </TestCase>
                    <TestCase itShould={'Input Component'}>
                        <BasicDrpExample 
                            InputComponent={ InputComp }
                        />
                    </TestCase>
                    <TestCase itShould={'TextInputProps: {keyboardType: "email-address"}'}>
                        <BasicDrpExample 
                            textInputProps={{
                                keyboardType: 'email-address'
                            }}
                        />
                    </TestCase>
                    <TestCase itShould={'flatListProps'}>
                        <BasicDrpExample 
                            flatListProps={{
                                data: [
                                    {id: 1, title: 'aaa'},
                                    {id: 2, title: 'bbb'},
                                    {id: 3, title: 'ccc'},
                                ],
                                renderItem: ({item, index}) => <View style={{padding: 6}}>
                                    <Text>{item.title}</Text>
                                </View>
                            }}
                        />
                    </TestCase>
                    {/* <TestCase itShould={'remote data'}>
                    <RemoteDataSetExample></RemoteDataSetExample>
                    </TestCase> */}
                </TestSuite>
            </Tester>
        </ScrollView>
    )
}

export default DropDownDemo = () => {
    return (
        <NavigationContainer>
            <Page name="autocomplete DropDown demo 01">
              <DrpDemo />
            </Page>
            <Page name="autocomplete DropDown demo 02">
              <DrpDemo2 />
            </Page>
            <Page name="autocomplete DropDown demo 03">
              <ScrollView>
                <Tester>
                    <TestSuite name="Event test">
                        <EventExample/>
                    </TestSuite>
                </Tester>
              </ScrollView>
            </Page>
        </NavigationContainer>
    )
}