/* @flow */

import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';



export default class ShimmerPlaceholderTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            stopAutoRunAble: false,
            isInteraction: true,
            contentStylevisible: false,
            shimmerContainerProps: {
                inestVisible: false,
                thisVisible: false,
                outestVisible: false
            },
            containerProps: {
                inestVisible: false,
                thisVisible: false,
                outestVisible: false
            },
            childrenContainerProps: {
                inestVisible: false,
                thisVisible: false,
                outestVisible: false
            },
            animatedObjectkeys: []

        }
        this.avatarRef = React.createRef();
    }
    render() {
        return (
            <ScrollView>
                <Tester>
                    <TestSuite name="shimmer-placeholder">
                        <TestCase
                            itShould="加载网络上的图片
                            {width={150} height={150} shimmerStyle={ borderRadius: 100}">
                            <ShimmerPlaceholder
                                width={150}
                                height={150}
                                shimmerStyle={{ borderRadius: 100 }}
                                visible={this.state.visible}
                            >
                                <Image
                                    style={{ width: 150, height: 150, borderRadius: 100 }}
                                    source={{ uri: 'https://unsplash.it/1000/1000' }}
                                    onLoadEnd={() => { this.sleep(3000); this.setState({ visible: true }) }}
                                />
                            </ShimmerPlaceholder>
                        </TestCase>
                        <TestCase
                            itShould="三个ShimmerPlaceholder组合模拟 文字加载样式">
                            <ShimmerPlaceholder
                                shimmerStyle={{ borderRadius: 10 }}
                                visible={this.state.visible}
                                width={300}
                            >
                                <Text>
                                    这是一段测试用的文字，他会在一段时间之后加载出来。
        </Text>
                            </ShimmerPlaceholder>
                            <ShimmerPlaceholder
                                shimmerStyle={{ borderRadius: 10, marginTop: 2 }}
                                width={280}
                                visible={this.state.visible}
                            />
                            <ShimmerPlaceholder
                                shimmerStyle={{ borderRadius: 10, marginTop: 2 }}
                                width={250}
                                visible={this.state.visible}
                            />
                        </TestCase>
                        <TestCase
                            itShould="width、height均为150，borderRadius为100 visible固定false">
                            <ShimmerPlaceholder
                                width={150}
                                height={150}
                                shimmerStyle={{ borderRadius: 100 }}
                                visible={false}
                            >
                                <Image
                                    style={{ width: 150, height: 150, borderRadius: 100 }}
                                    source={{ uri: 'https://unsplash.it/1000/1000' }}
                                />
                            </ShimmerPlaceholder>
                        </TestCase>
                        <TestCase
                            itShould="宽200*高100  borderRadius为10">
                            <ShimmerPlaceholder
                                height={100}
                                width={200}
                                shimmerStyle={{ borderRadius: 10 }}
                            />
                        </TestCase>

                        <TestCase
                            itShould="设置LinearGradient 宽200*高100  shimmerStyle={{ back: 10 }}
                        ">
                            <ShimmerPlaceholder
                                height={100}
                                width={200}
                                shimmerStyle={{ backgroud: 10 }}
                                LinearGradient={LinearGradient}
                            />
                        </TestCase>
                        <TestCase
                            itShould="shimmerColors[#FFBDBA，#FF9C6D，#11BDBA]">
                            <ShimmerPlaceholder
                                height={100}
                                width={200}
                                LinearGradient={LinearGradient}
                                shimmerColors={["#FFBDBA", "#FF9C6D", "#11BDBA"]}
                            />
                        </TestCase>
                        <TestCase
                            itShould="shimmerStyle={{ borderRadius: 50 }}">
                            <ShimmerPlaceholder
                                height={100}
                                width={200}
                                shimmerStyle={{ borderRadius: 50 }}
                                LinearGradient={LinearGradient}
                                shimmerColors={["#FFBDBA", "#FF9C6D", "#11BDBA"]}
                            />
                        </TestCase>
                        <TestCase
                            itShould="两个ShimmerPlaceholder设置 style={{ margin: 10 }}">
                            <ShimmerPlaceholder
                                style={{ margin: 10 }}
                            />
                            <ShimmerPlaceholder
                                style={{ margin: 10 }}
                            />
                        </TestCase>
                        <TestCase
                            itShould="contentStyle={{ width: 200, height: 50,backgroundColor:#FF9C6D }}">
                            <ShimmerPlaceholder
                                style={{ margin: 10 }}
                                contentStyle={{ width: 200, height: 50, backgroundColor: "#FF9C6D" }}
                                visible={this.state.contentStylevisible}
                            >
                                <Text>这是一段测试文字。</Text>
                            </ShimmerPlaceholder>
                            <Button
                                title={'change visible'}
                                onPress={() => this.setState({ contentStylevisible: !this.state.contentStylevisible })}
                            />
                        </TestCase>
                        <TestCase
                            itShould="shimmerWidthPercent={0.8}">
                            <ShimmerPlaceholder
                                height={50}
                                width={200}
                                LinearGradient={LinearGradient}
                                shimmerWidthPercent={0.8}
                                shimmerColors={["#FFBDBA", "#FF9C6D", "#11BDBA"]}
                            />
                        </TestCase>
                        <TestCase
                            itShould="location={[0.3, 0.3, 0.3]}">
                            <ShimmerPlaceholder
                                height={50}
                                width={200}
                                LinearGradient={LinearGradient}
                                duration={2000}
                                location={[0.3, 0.3, 0.3]}
                                shimmerColors={["green", "yellow", "blue"]}
                            />
                        </TestCase>
                        <TestCase
                            itShould="location={[0.3, 0.3, 0.6]}">
                            <ShimmerPlaceholder
                                height={50}
                                width={200}
                                duration={2000}
                                LinearGradient={LinearGradient}
                                location={[0.3, 0.3, 0.6]}
                                shimmerColors={["green", "yellow", "blue"]}
                            />
                        </TestCase>
                        <TestCase
                            itShould="location={[0.3, 0.3, 0.9]}">
                            <ShimmerPlaceholder
                                height={50}
                                width={200}
                                duration={2000}
                                LinearGradient={LinearGradient}
                                location={[0.3, 0.3, 0.9]}
                                shimmerColors={["green", "yellow", "blue"]}
                            />
                        </TestCase>
                        <TestCase
                            itShould="shimmerWidthPercent={0.1}">
                            <ShimmerPlaceholder
                                height={50}
                                width={200}
                                LinearGradient={LinearGradient}
                                shimmerWidthPercent={0.1}
                                shimmerColors={["#FFBDBA", "#FF9C6D", "#11BDBA"]}
                            />
                        </TestCase>
                        <TestCase
                            itShould="duration 1000">
                            <ShimmerPlaceholder
                                height={50}
                                width={200}
                                LinearGradient={LinearGradient}
                                shimmerColors={["#FFBDBA", "#FF9C6D", "#11BDBA"]}
                                duration={1000}
                            />
                        </TestCase>
                        <TestCase
                            itShould="duration 500">
                            <ShimmerPlaceholder
                                height={50}
                                width={200}
                                LinearGradient={LinearGradient}
                                shimmerColors={["#FFBDBA", "#FF9C6D", "#11BDBA"]}
                                duration={500}
                            />
                        </TestCase>
                        <TestCase
                            itShould="isReversed={true} 默认为false">
                            <ShimmerPlaceholder
                                height={50}
                                width={200}
                                LinearGradient={LinearGradient}
                                shimmerWidthPercent={0.1}
                                shimmerColors={["#FFBDBA", "#FF9C6D", "#11BDBA"]}
                                isReversed={true}
                            />
                        </TestCase>
                        <TestCase
                            itShould="按下按钮stopAutoRun={true} 默认为false">
                            <ShimmerPlaceholder
                                height={50}
                                width={200}
                                LinearGradient={LinearGradient}
                                shimmerColors={["#FFBDBA", "#FF9C6D", "#11BDBA"]}
                                stopAutoRun={this.state.stopAutoRunAble}
                            />
                            <Button
                                title={'STOP'}
                                onPress={() => this.setState({ stopAutoRunAble: !this.state.stopAutoRunAble })}
                            />
                        </TestCase>
                        <TestCase
                            itShould="按下按钮isInteraction={false} 默认为true">
                            <ShimmerPlaceholder
                                height={50}
                                width={200}
                                LinearGradient={LinearGradient}
                                shimmerColors={["#FFBDBA", "#FF9C6D", "#11BDBA"]}
                                isInteraction={this.state.isInteraction}
                            />
                            <Text>当前isInteraction值：{''+this.state.isInteraction}</Text>
                            <Button
                                title={'change isInteraction'}
                                onPress={()=>{this.setState({
                                    isInteraction:!this.state.isInteraction
                                })}}
                            />
                        </TestCase>
                        <TestCase
                            itShould="getAnimated 实例方法验证">
                            <ShimmerPlaceholder
                                style={{ width: 200, height: 50 }}
                                ref={this.avatarRef}
                                LinearGradient={LinearGradient}
                            >
                            </ShimmerPlaceholder>
                            <Text>getAnimated获取到的对象的keys：{this.state.animatedObjectkeys.toString()}</Text>
                            <Button
                                title={'click me getAnimated'}
                                onPress={this.getAnimatedFun}
                            />
                        </TestCase>
                        <TestCase
                            itShould="default ShimmerPlaceholder">
                            <ShimmerPlaceholder>
                                <Text>这是一段测试文字。</Text>
                            </ShimmerPlaceholder>
                        </TestCase>
                    </TestSuite>

                </Tester>
            </ScrollView>
        )
    }
    getAnimatedFun = () => {
        this.setState({ animatedObjectkeys: Object.keys(this.avatarRef.current.getAnimated()) })
    }
    sleep(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
}
const styles = StyleSheet.create({
    shimmer: {
        backgroundColor: "red",
        padding: 10
    },
    container: {
        backgroundColor: "green",
        padding: 10

    },
    children: {
        backgroundColor: "blue",
        padding: 10

    }
});