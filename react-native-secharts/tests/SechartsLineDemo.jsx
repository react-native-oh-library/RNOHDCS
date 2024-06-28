import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, findNodeHandle, Alert } from 'react-native';
import { Echarts, echarts } from 'react-native-secharts';

const l1 = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#1a98f8'
}, {
    offset: 1,
    color: '#fff'
}])

export default class SechartsLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            value: null,
            option1: {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                color: l1,
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                }]
            },
            flag: false  // 这个布尔值是为了测试option1在setstate操作后不会被重置成初始状态。
        }
        this.echart1 = React.createRef();
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Echarts ref={this.echart1}
                        option={this.state.option1}
                        onPress={this.onPress}
                        width={350}
                        height={400}
                        backgroundColor={'#499C9F'}
                        renderLoading={() => <View style={{ backgroundColor: '#468B58', width: 350, height: 400 }} ><Text>我是一个遮罩层</Text><Text>(设置源码index.js里的startInLoadingState=true才生效)</Text></View>} />
                </View>
                <View><Text numberOfLines={2}>{!this.state.image ? '这里显示base64格式的img字符串' : this.state.image}</Text>
                </View>
                {/* <View><Text>{!this.state.value ? '这里显示被点击的值' : this.state.value}</Text>
                </View> */}

                <View style={styles.buttonContainer}>
                    <Button
                        title={'点我获取echarts image的base64字符串'}
                        color="blue"
                        onPress={this.getImage}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={'点我改变echarts option的Y轴值'}
                        color="blue"
                        onPress={this.editOption}
                    />
                </View>
                <View style={{ alignItems: "center", size: 16}}><Text>{`当前state内状态: falg = ${this.state.flag.toString()}`}</Text></View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={'点我测试option 改变后进行setState'}
                        color="blue"
                        onPress={() => this.setState({ flag: !this.state.flag })}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title={'点我测试清空secharts画布'}
                        color="blue"
                        onPress={this.clearSecharts}
                    />
                </View>
            </View>
        );
    }

    editOption = () => {
        this.setState({
            option1: {
                ...this.state.option1,
                series: [
                    {
                        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]
                    }
                ]
            }
        })
    }
    getImage = () => {
        this.echart1.current.getImage((res) => {
            this.setState({ image: res })
        })
    }
    onPress = (e) => {
        this.setState({ value: e.value })
    }
    clearSecharts = () => {
        console.log("start clear")
        this.echart1.current.clear();
        console.log("end clear")
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    buttonContainer: {
        width: 300,
        marginTop: 5
    }
});


