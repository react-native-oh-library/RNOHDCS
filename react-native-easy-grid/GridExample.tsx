import React, { useState } from 'react';
import { Button, View, StyleSheet, ScrollView, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Tester, TestSuite } from '@rnoh/testerino';
import { TestCase } from '../components';
export function GridExample() {

    return <>
        <Tester>
            <ScrollView style={styles.content}>
                <TestSuite name='三列等宽布局Col'>
                    <View style={styles.section}>
                        <Grid>
                            <Col style={{ backgroundColor: '#FFB6C1' }}></Col>
                            <Col style={{ backgroundColor: '#9400D3' }}></Col>
                            <Col style={{ backgroundColor: '#008000' }}></Col>
                        </Grid>
                    </View>
                </TestSuite>
                <TestSuite name='三行等高布局Row'>
                    <View style={styles.section}>
                        <Grid>
                            <Row style={{ backgroundColor: '#FFB6C1' }}></Row>
                            <Row style={{ backgroundColor: '#9400D3' }}></Row>
                            <Row style={{ backgroundColor: '#008000' }}></Row>
                        </Grid>
                    </View>
                </TestSuite>

                <TestSuite name='三列占比布局Col-size'>
                    <View style={styles.section}>
                        <Grid>
                            <Col size={1} style={{ backgroundColor: '#FFB6C1' }}></Col>
                            <Col size={1} style={{ backgroundColor: '#9400D3' }}></Col>
                            <Col size={2} style={{ backgroundColor: '#008000' }}></Col>
                        </Grid>
                    </View>
                </TestSuite>

                <TestSuite name='三行占比布局Row-size'>
                    <View style={styles.section}>

                        <Grid>
                            <Row size={1} style={{ backgroundColor: '#FFB6C1' }}></Row>
                            <Row size={1} style={{ backgroundColor: '#9400D3' }}></Row>
                            <Row size={2} style={{ backgroundColor: '#008000' }}></Row>
                        </Grid>
                    </View>
                </TestSuite>


                <TestSuite name='三列布局 1列固定宽2列动态占比布局Col_Row-width=40'>
                    <View style={styles.section}>
                        <Grid>
                            <Col style={{ backgroundColor: '#FFB6C1', width: 40 }}></Col>
                            <Col size={1} style={{ backgroundColor: '#9400D3' }}></Col>
                            <Col size={2} style={{ backgroundColor: '#008000' }}></Col>

                        </Grid>
                    </View>
                </TestSuite>
                <TestSuite name='三行布局 1行固定高2行动态高占比布局Col_Row-height=40'>
                    <View style={styles.section}>
                        <Grid>
                            <Row style={{ backgroundColor: '#FFB6C1', height: 40 }}></Row>
                            <Row size={1} style={{ backgroundColor: '#9400D3' }}></Row>
                            <Row size={2} style={{ backgroundColor: '#008000' }}></Row>

                        </Grid>
                    </View>
                </TestSuite>
                <TestSuite name='嵌套占比布局Col_Row-size'>
                    <View style={styles.section}>

                        <Grid>
                            <Col style={{ backgroundColor: '#9400D3' }}>
                                <Row size={1} style={{ backgroundColor: '#FFB6C1' }}></Row>
                                <Row size={2} style={{ backgroundColor: '#9400D3' }}></Row>
                            </Col>
                            <Col size={2} style={{ backgroundColor: '#FF4500' }}></Col>
                            <Col size={3}>
                                <Row size={1} style={{ backgroundColor: '#FFB6C1' }}></Row>
                                <Row size={2} style={{ backgroundColor: '#9400D3' }}></Row>
                                <Row size={3} style={{ backgroundColor: '#008000' }}></Row>
                            </Col>
                        </Grid>
                    </View>
                </TestSuite>
                <TestSuite name='验证Row的onPress方法'>
                    <TestCase.Manual
                        itShould='true'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <View style={styles.section}>
                                    <Grid >
                                        <Row size={1} style={{ backgroundColor: '#FFB6C1' }} onPress={() => {
                                            setState(true)
                                        }}></Row>
                                    </Grid>
                                </View>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>
                <TestSuite name='验证Col的onPress方法'>
                    <TestCase.Manual
                        itShould='true'
                        initialState={false}
                        tags={['dev']}
                        arrange={({ setState }) => {
                            return (
                                <View style={styles.section}>
                                    <Grid >
                                        <Col size={1} style={{ backgroundColor: '#FFB6C1' }} onPress={() => {
                                            setState(true)
                                        }}></Col>
                                    </Grid>
                                </View>
                            )
                        }}
                        assert={({ expect, state }) => {
                            expect(state).to.be.true
                        }}
                    />
                </TestSuite>

            </ScrollView>
        </Tester>

    </>

}
const styles = StyleSheet.create({
    btn: {
        width: 60,
        height: 60,
        aspectRatio: 1,
    },
    content: {
        width: '100%',
        height: '100%',
    },
    section: {
        padding: 20,
        height: 300,
        fontSize: 14,
    },
    tipText: {
        fontSize: 12,
        color: '#999',
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        padding: 10,
        color: '#fff'
    },
    colText: {
        padding: 5,
    },
    col: {
        backgroundColor: '#FFB6C1'
    },
    row: {
        backgroundColor: '#00BFFF'
    },

});