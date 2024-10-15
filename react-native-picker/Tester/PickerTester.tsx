import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
import Picker from 'react-native-picker';

export const PickerTester = () => {
    return (
        <Tester style={{ paddingBottom: 100 }}>
            <ScrollView>
                <TestSuite name="react-native-picker">
                    <TestCase
                        key={"getInitStatus_1"}
                        itShould={`isLoop`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [isLoop, setIsLoop] = useState<boolean>(false);

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                isLoop: isLoop,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>isLoop: {isLoop + ''}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setIsLoop(!isLoop)
                                        }}>change isLoop</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_2"}
                        itShould={`pickerConfirmBtnText`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [text, setText] = useState<string>('确认');

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerConfirmBtnText: text,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerConfirmBtnText: {text}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setText('Confirm')
                                        }}>change ConfirmBtnText</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_3"}
                        itShould={`pickerCancelBtnText`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [text, setText] = useState<string>('取消');

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerCancelBtnText: text,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerCancelBtnText: {text}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setText('cancel')
                                        }}>change CancelBtnText</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_4"}
                        itShould={`pickerTitleText`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [text, setText] = useState<string>('标题');

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerTitleText: text,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerTitleText: {text}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setText('Top')
                                        }}>change TitleText</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_5"}
                        itShould={`pickerConfirmBtnColor`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [color, setColor] = useState<number[]>([1, 186, 245, 1]);

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerConfirmBtnColor: color,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerConfirmBtnColor: {JSON.stringify(color)}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setColor([1, 10, 250, 1])
                                        }}>change ConfirmBtnColor</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_6"}
                        itShould={`pickerCancelBtnColor`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [color, setColor] = useState<number[]>([1, 186, 245, 1]);

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerCancelBtnColor: color,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerCancelBtnColor: {JSON.stringify(color)}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setColor([1, 10, 250, 1])
                                        }}>change CancelBtnColor</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_7"}
                        itShould={`pickerTitleColor`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [color, setColor] = useState<number[]>([1, 186, 245, 1]);

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerTitleColor: color,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerTitleColor: {JSON.stringify(color)}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setColor([1, 10, 250, 1])
                                        }}>change pickerTitleColor</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_8"}
                        itShould={`pickerToolBarBg`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [color, setColor] = useState<number[]>([232, 232, 232, 1]);

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerToolBarBg: color,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerToolBarBg: {JSON.stringify(color)}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setColor([1, 10, 250, 1])
                                        }}>change pickerToolBarBg</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_9"}
                        itShould={`pickerBg`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [color, setColor] = useState<number[]>([196, 199, 206, 1]);

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerBg: color,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerBg: {JSON.stringify(color)}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setColor([1, 10, 250, 1])
                                        }}>change pickerBg</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_10"}
                        itShould={`pickerToolBarFontSize`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [size, setSize] = useState<number>(16);

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerToolBarFontSize: size,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerToolBarFontSize: {size}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setSize(30)
                                        }}>change FontSize</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_11"}
                        itShould={`pickerFontSize`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [size, setSize] = useState<number>(16);

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerFontSize: size,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerFontSize: {size}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setSize(25)
                                        }}>change FontSize</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_12"}
                        itShould={`pickerFontColor`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [color, setColor] = useState<number[]>([31, 31, 31, 1]);

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerFontColor: color,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerFontColor: {JSON.stringify(color)}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setColor([1, 10, 250, 1])
                                        }}>change FontColor</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_13"}
                        itShould={`pickerRowHeight`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [height, setHeight] = useState<number>(24);

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                pickerRowHeight: height,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerRowHeight: {height}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setHeight(35)
                                        }}>change RowHeight</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_14"}
                        itShould={`pickerData`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [content, setData] = useState<number[]>([1, 2, 3]);

                            let data = {
                                pickerData:
                                    content,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>pickerData: {content}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setData([4, 5, 6])
                                        }}>change pickerData</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_15"}
                        itShould={`selectedValue`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [select, setSelect] = useState<number[]>([1]);

                            let data = {
                                pickerData:[1, 2, 3, 4],
                                selectedValue: select,
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>selectedValue: {JSON.stringify(select)}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            setSelect([3])
                                        }}>change selectedValue</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_16"}
                        itShould={`onPickerConfirm`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [select, setSelect] = useState<string[] | number[]>([]);

                            let data = {
                                pickerData:[[1,2,3,4],
                                [5,6,7,8]],
                                selectedValue: [1, 5],
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                    setSelect(data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>onPickerConfirm: {JSON.stringify(select)}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_17"}
                        itShould={`onPickerCancel`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [select, setSelect] = useState<string[] | number[]>([]);

                            let data = {
                                pickerData:[[1,2,3,4],
                                [5,6,7,8]],
                                selectedValue: [1, 5],
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                    setSelect(data)
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>onPickerCancel: {JSON.stringify(select)}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_18"}
                        itShould={`onPickerSelect`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [select, setSelect] = useState<string[] | number[]>([]);

                            let data = {
                                pickerData:[[1,2,3,4],
                                [5,6,7,8]],
                                selectedValue: [1, 5],
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                    setSelect(data)
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>onPickerSelect: {JSON.stringify(select)}</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_19"}
                        itShould={`init`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {

                            let data = {
                                pickerData:[[1,2,3,4],
                                [5,6,7,8]],
                                selectedValue: [1, 5],
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                     <TestCase
                        key={"getInitStatus_20"}
                        itShould={`toggle`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {

                            let data = {
                                pickerData:[[1,2,3,4],
                                [5,6,7,8]],
                                selectedValue: [1, 5],
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                          Picker.show()
                                          setTimeout(() => {
                                            Picker.toggle()                                                                                 
                                        }, 1000);
                                           setState(true)
                                        }}>picker.toggle </Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                      <TestCase
                        key={"getInitStatus_21"}
                        itShould={`show`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {

                            let data = {
                                pickerData:[[1,2,3,4],
                                [5,6,7,8]],
                                selectedValue: [1, 5],
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                          Picker.show()                                    
                                           setState(true)
                                        }}>picker.show() </Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_21"}
                        itShould={`hide`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {

                            let data = {
                                pickerData:[[1,2,3,4],
                                [5,6,7,8]],
                                selectedValue: [1, 5],
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                          Picker.show()  
                                          setTimeout(() => {
                                            Picker.hide()                                                                                 
                                        }, 1000);                                  
                                           setState(true)
                                        }}>picker.hide() </Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                     <TestCase
                        key={"getInitStatus_22"}
                        itShould={`isPickerShow`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            const [isShow, setIsshow] = useState<boolean | undefined>();

                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ color: 'black', marginTop: 20 }}>isPickerShow: {isShow + ''}</Text>
                                        <Text style={{ width: 180, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.isPickerShow(show => {
                                                setIsshow(show)
                                              })
                                        }}>isPickerShow</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            Picker.isPickerShow(show => {
                                                setIsshow(show)
                                              })
                                            setState(true)
                                        }}>show picker</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                    <TestCase
                        key={"getInitStatus_23"}
                        itShould={`select`}
                        tags={['C_API']}
                        initialState={false}

                        arrange={({ setState }) => {
                            let data = {
                                pickerData:
                                    [1, 2, 3],
                                    selectedValue: ['2'],
                                onPickerConfirm: data => {
                                    console.log('onPickerConfirm:', data)
                                },
                                onPickerCancel: data => {
                                    console.log('onPickerCancel:', data);
                                },
                                onPickerSelect: data => {
                                    console.log('onPickerSelect:', data);
                                }
                            }
                            return (
                                <View style={{ minHeight: 220 }} >
                                    <View style={{ marginBottom: 20 }}>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.init(data)
                                        }}>init picker</Text>
                                        <Text style={{ width: 160, height: 34, borderRadius: 8, backgroundColor: 'hsl(190,50%,70%)', lineHeight: 28, marginTop: 10, fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                                            Picker.show()
                                            setTimeout(() => {
                                                Picker.select(['3'])                                                
                                              }, 2000);
                                            setState(true)
                                        }}>show and select</Text>
                                    </View>
                                </View>
                            );
                        }}
                        assert={async ({ expect, state }) => {
                            expect(state).to.be.true;
                        }}
                    />
                </TestSuite>

            </ScrollView>
        </Tester>
    );
}

