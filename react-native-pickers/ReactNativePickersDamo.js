import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Button} from 'react-native';
import {
    BaseComponent,
    AreaPicker,
    CustomPicker,
    DatePicker,
    InputDialog,
    SimpleChooseDialog,
    SimpleItemsDialog,
    AlertDialog,
    DownloadDialog,
    ToastComponent
} from 'react-native-pickers';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';

import AreaJson from './Area.json';

export default class ReactNativePickers extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            unit: ['年', '月', '日'],
            startYear: 1900,
            endYear: 2026,
            active: false,
            modalVisible: false
        }
    }

    startDownload() {
        let count = 0;
        this.setState({ active: false })
        this.interval = setInterval(() => {
            if (count > 100) {
                //下载完成
                this.setState({ active: true })
                clearInterval(this.interval);
                return;
            }
            this.DownloadDialog.setProcess(count / 100, '4.23MB');
            count++;
            count++;
        }, 100);
    }

    renderButton(text, callback) {
        return <TouchableOpacity
            onPress={callback.bind(this)}
            style={{
                width: this.getSize(180), height: this.getSize(20),
                justifyContent: 'center', alignItems: 'center',
                borderColor: '#999999', borderWidth: this.mOnePixel,
                padding: this.getSize(10), backgroundColor: '#cccccc',
            }}>
            <Text>{text}</Text>
        </TouchableOpacity >
    }

    render() {
        return <View style={{
            width: this.mScreenWidth, height: this.mScreenHeight,
            backgroundColor: '#f9fafb', justifyContent: 'center', alignItems: 'center'
        }}>
            <View style={{ width: this.mScreenWidth, height: 20, backgroundColor: 0x00000030 }} />
            <View style={{ flex: 1, width: this.mScreenWidth, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView>
                    <Tester>
                        <TestSuite name='ReactNativePickers'>
                            <TestCase itShould='AlertDialog' 
                                initialState={false}
                                arrange={({setState}) => (  <Button title='AlertDialog' onPress={() => { this.AlertDialog.show();setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                            <TestCase itShould='SimpleItemsDialog'
                                initialState={false}
                                arrange={({setState}) => (  <Button title='SimpleItemsDialog' onPress={() => { this.SimpleItemsDialog.show();setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                            <TestCase itShould='SimpleChooseDialog'
                                initialState={false}
                                arrange={({setState}) => (  <Button title='SimpleChooseDialog' onPress={() => { this.SimpleChooseDialog.show();setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                            <TestCase itShould='InputDialog'
                                initialState={false}
                                arrange={({setState}) => (  <Button title='InputDialog' onPress={() => { this.InputDialog.show();setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                            <TestCase itShould='最简单的自定义picker'
                                initialState={false}
                                arrange={({setState}) => (  <Button title='最简单的自定义picker' onPress={() => { this.CustomPicker.show();setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                            <TestCase itShould='行政区域picker'
                                initialState={false}
                                arrange={({setState}) => (  <Button title='行政区域picker' onPress={() => { this.AreaPicker.show();setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                            <TestCase itShould='DatePicker'
                                initialState={false}
                                arrange={({setState}) => (  <Button title='DatePicker' onPress={() => { this.DatePicker.show();setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                            <TestCase itShould='DatePicker1'
                                initialState={false}
                                arrange={({setState}) => (  <Button title='DatePicker1' onPress={() => { this.DatePicker1.show();setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                            <TestCase itShould='实现全屏覆盖'
                                initialState={false}
                                arrange={({setState}) => (  <Button title='实现全屏覆盖' onPress={() => { this.setState({modalVisible: true}, ()=>{this.SimpleChooseDialog1.show();});setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                            <TestCase itShould='下载进度'
                                initialState={false}
                                arrange={({setState}) => (  <Button title='下载进度' onPress={() => { this.DownloadDialog.show(); this.startDownload();setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                            <TestCase itShould='showToast'
                                initialState={false}
                                arrange={({setState}) => (  <Button title='showToast' onPress={() => { this.ToastComponent.show('给个星星呗~');setState(true) }}></Button>)} 
                                assert={({state, expect}) => { expect(state).to.be.true; }}/>
                        </TestSuite>
                    </Tester>
                </ScrollView>
                <AlertDialog
                    messageText= '测试弹框'
                    showAnimationType='timing'
                    messageTextColor= '#ff4444'
                    messageTextSize= {20}
                    negativeText= 'cancel'
                    negativeColor= '#66ff66'
                    negativeSize= {10}
                    positiveText= 'ok'
                    positiveColor= '#1000D5'
                    positiveSize= {20}
                    onPress={(isOK) => {
                        alert(isOK ? 'ok' : 'cancel');
                    }} ref={ref => this.AlertDialog = ref} />
                    <SimpleItemsDialog
                    items={[{ value: 1 }, { value: 2 }, { value: 3 }]}
                    itemKey='value'
                    itemStyle= {
                        {fontSize: 20,
                        fontWeight: '400',
                        color: '#3FF333'}
                    }
                    cancel= {true}
                    cancelText= '撤回'
                    cancelTextStyle= {
                        {fontSize: 10,
                        fontWeight: '400',
                        color: '#990099'}
                    }
                    ref={ref => this.SimpleItemsDialog = ref}
                    onPress={(which) => {
                        alert("点击了下标为"+which+"的item")
                    }} />
                <SimpleChooseDialog ref={ref => this.SimpleChooseDialog = ref}
                    items= {['ae', 'bf', 'cg']}
                    itemKey= 'key'
                    itemStyle= {
                        {fontSize: 20,
                        fontWeight: '400',
                        color: '#333333'}
                    }
                    selectColor= '#1097D5'
                    normalColor= '#660066'
                    pointSize= {18}
                    pointBorderRadius= {9}
                    confirmText= '确定~'
                    confirmBtnColor= '#1097D5'
                    confirmTextColor= '#ff00ff'
                    onPress={(which) => { alert("点击了下标为"+which+"的item") }} />
                <InputDialog ref={ref => this.InputDialog = ref}
                    title= '8384h43h4h3h'
                    titleSize= {16}
                    titleColor= '#003333'
                    cancelText= 'come back'
                    cancelSize= {14}
                    cancelColor= '#333333'
                    btnText= 'upload'
                    btnTextSize= {18}
                    btnTextColor= '#ff00ff'
                    btnBgColor= '#1097D5'
                    placeholder= '输入提示'
                    onSubmit={(text) => { alert(text) }} />
                <CustomPicker 
                    list= {['sadasda', 'gegegeg', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9']}
                    list1= {['asdasdagegege', 'item11', 'item12', 'item13', 'item14', 'item15', 'item16', 'asdasdad', 'item18', 'item19']}
                    ref={ref => this.CustomPicker = ref} />
                <AreaPicker
                    areaJson={AreaJson}
                    confirmText= '确认'
                    confirmTextSize= {20}
                    confirmTextColor= '#333333'
                    cancelText= '撤销'
                    cancelTextSize= {10}
                    cancelTextColor= '#333333'
                    itemTextColor= {0x338833ff}
                    itemSelectedColor= {0x109005ff}
                    itemHeight= {20}
                    onPickerCancel={() => { }}
                    onPickerConfirm={(value) => {
                        alert(JSON.stringify(value));
                    }}
                    ref={ref => this.AreaPicker = ref} />
                <DatePicker
                    unit={this.state.unit}
                    startYear={this.state.startYear}
                    onPickerConfirm={(value) => {
                        alert(JSON.stringify(value))
                    }}
                    onPickerCancel={() => {
                        alert('cancel')
                    }}
                    ref={ref => this.DatePicker = ref} />
                <DatePicker
                    HH={false}
                    mm={false}
                    ss={false}
                    unit={this.state.unit}
                    itemHeight = {60}
                    startYear={this.state.startYear}
                    endYear={this.state.endYear}
                    onPickerConfirm={(value) => {
                        alert(JSON.stringify(value))
                    }}
                    onPickerCancel={() => {
                        alert('cancel')
                    }}
                    ref={ref => this.DatePicker1 = ref} />
                <DownloadDialog
                    title= '水杯'
                    titleColor= '#33F033'
                    titleSize= {30}
                    actionText= '打开'  
                    active={this.state.active}
                    onAction={() => { alert('打开') }}
                    onCoverPress={() => { this.interval && clearInterval(this.interval) }}
                    ref={ref => this.DownloadDialog = ref} />
                <ToastComponent ref={ref => this.ToastComponent = ref} />
            </View>
            <Modal
                animationType="none"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    
                }}
            >
                <SimpleChooseDialog ref={ref => this.SimpleChooseDialog1 = ref}
                    onCoverPress={()=>{
                        this.setState({modalVisible: false});
                    }}
                    onPress={(which) => {  
                        console.log(which);
                        this.setState({modalVisible: false});
                    }} />
            </Modal>
            <View>
            </View>
        </View>
    }

}
