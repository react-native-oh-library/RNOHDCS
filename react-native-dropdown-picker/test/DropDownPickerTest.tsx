import { useState } from 'react'
import { View, Text, Pressable, SafeAreaView, StatusBar, ScrollView, StyleSheet, Button, Image, Alert, TouchableOpacity } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';
let ImageSource = require('@/assets/expo.png')

const MyTheme = require("./MyTheme");

//检查一个数据的类型
const checkType = (obj: any) => {
    return Object.prototype.toString.call(obj).slice(8, -1)
}
//检查一个数据是否是Object
const checkIsObject = (obj: any) => {
    return checkType(obj) === 'Object'
}


export default function DropDownPickerTest() {
    //选项切换组件
    const ToggleButton: React.FC<{
        title?: string,
        list: any[],
        initValue: any,
        onChange: Function
    }> = ({
        title,
        list,
        initValue,
        onChange
    }) => {
            let title1 = initValue, value1 = initValue;
            if (checkIsObject(initValue)) {
                title1 = initValue.title;
                value1 = initValue.value
            }

            let [state, setState] = useState(title1)

            console.log('initValue', initValue, title)
            return (
                <View style={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    marginVertical: 5
                }}>
                    <Text style={{ color: '#fff' }}>{title}：</Text>
                    <View style={{
                        borderWidth: 1,
                        borderColor: '#eee',
                        borderRadius: 2,
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                    }}>
                        {
                            list.map((key: any, index: number) => {
                                let title = key, value = key;

                                if (Object.prototype.toString.call(key).slice(8, -1) === 'Object') {
                                    title = key.title;
                                    value = key.value
                                }

                                return (
                                    <Pressable
                                        style={{
                                            borderEndWidth: (index + 1) === list.length ? 0 : 1,
                                            borderColor: '#eee',
                                            backgroundColor: state === title ? '#0081f1' : '#ffffff',
                                            paddingHorizontal: 6,
                                        }}
                                        key={index + ''} onPress={() => {
                                            setState(title)
                                            onChange(key)
                                        }}
                                    >
                                        <Text>{title + ''}</Text>
                                    </Pressable>
                                )
                            })
                        }
                    </View>
                </View>
            )
        }


    interface State {
        //每个要测试的属性的数据形式
        [propName: string]: {
            tip?: string, //额外的提示语
            testName?: string, //展示在demo里的标题，用于替换默认的属性名
            type?: undefined | 'custom' | 'preview' | 'callBack',  //demo有4种，type不设置为默认，可以切换值做查看；为custom代表自定义，需要在循环中添加if,自己写逻辑;preview为简单的展示，没有值可供切换，这种一般用在展示样式的属性中；callBack用在回调类属性，目的是匹配断言，触发回调时，让demo自动显示pass
            description?: string, //此属性的具体描述，以及demo效果的描述
            props?: {
                [propName: string]: any | any[], //type为preview时，添加的属性，有时需要额外属性来辅助正在测试的属性，可添加在这里
            },
            value?: any, // type为空时，即可切换选项时生效，这个代表属性的默认值，
            valueList?: any[], //type为空时，即可切换选项时生效，这个代表属性的可选列表，具体其中项可以是简单数据类型，也可以是{title:'',value:''}类型的对象，这时上面的value和这个对象内的title匹配
            extraOptions?: object, //type为空时，即可切换选项时生效，有时需要额外属性来辅助正在测试的属性，可添加在这里
            noRender?: boolean //此项不做渲染
        };
    }


    const [state, setState] = useState<State>(() => {
        return {
            items: {
                type: 'custom',
                testName: 'items & setItems',
                description: '增加一项查看效果',

            },
            value: {
                type: 'custom',
                testName: 'value & setValue',
                description: '切换选项查看效果',
            },
            open: {
                type: 'custom',
                testName: 'open & setOpen',
                description: '切换open状态查看效果',
            },
            props: {
                description: '增加TouchableOpacity的属性,样例里修改了activeOpacity',
                value: 0.2,
                valueList: [
                    {
                        title: 0,
                        value: {
                            activeOpacity: 0
                        }
                    },
                    {
                        title: 0.2,
                        value: {
                            activeOpacity: 0.2
                        }
                    },
                    {
                        title: 0.5,
                        value: {
                            activeOpacity: 0.5
                        }
                    },
                    {
                        title: 1,
                        value: {
                            activeOpacity: 1
                        }
                    },
                ],
            },
            itemProps: {
                type: 'preview',
                description: '增加每一列表项TouchableOpacity的属性,如修改样式，背景变为红色',
                props: {
                    itemProps: {
                        style: {
                            backgroundColor: 'red'
                        }
                    }
                }
            },
            containerProps: {
                type: 'preview',
                description: '增加container的属性,如修改pointerEvents为none,使其对点击无响应',
                props: {
                    containerProps: {
                        pointerEvents: 'none'
                    }
                }
            },
            labelProps: {
                type: 'preview',
                description: '增加label的属性,如修改color为red',
                props: {
                    labelProps: {
                        style: {
                            color: 'red'
                        }
                    }
                }
            },
            multiple: {
                type: 'custom',
                testName: 'multiple & min & max',
                description: 'min和max定义可选多少个值，multiple为true时生效',
                value: true,
                valueList: [false, true],
            },
            min: {
                type: 'custom',
                value: 1,
                valueList: [1, 2],
                noRender: true,
            },
            max: {
                type: 'custom',
                value: 3,
                valueList: [2, 3],
                noRender: true,
            },
            disabled: {
                description: '禁用选框',
                value: false,
                valueList: [false, true],
            },
            maxHeight: {
                description: '下拉框高度',
                value: undefined,
                valueList: [undefined, 100, 200, 300],
            },
            disableBorderRadius: {
                description: '打开时关闭圆角',
                value: false,
                valueList: [false, true],
            },
            stickyHeader: {
                type: 'custom',
                description: '在多级目录时，吸住父级',
                value: false,
                valueList: [false, true],
            },
            autoScroll: {
                description: '自动滚动到第一个选中的位置',
                value: false,
                valueList: [false, true],
            },
            testID: {
                type: 'custom',
                description: '测试用的ID',
                value: 'ID1',
                valueList: ['ID1', 'ID2']
            },
            zIndex: {
                description: '设置选框层级，当选框向下打开时生效',
                value: 1000,
                valueList: [-1, 0, 1, 1000],
                extraOptions: {
                    dropDownDirection: 'BOTTOM'
                }
            },
            zIndexInverse: {
                description: '设置选框层级，当选框向上打开时生效',
                value: 1000,
                valueList: [-1, 0, 1, 1000],
                extraOptions: {
                    dropDownDirection: 'TOP'
                }
            },
            onChangeValue: {
                type: 'callBack',
                description: '设置值改变时触发',
                extraOptions: {
                    multiple: 'true'
                }
            },
            onSelectItem: {
                type: 'callBack',
                description: '选中选项时触发',
                extraOptions: {
                    multiple: 'true'
                }
            },
            onPress: {
                type: 'callBack',
                description: '点击选框时触发',
                extraOptions: {
                    multiple: 'true'
                }
            },
            onOpen: {
                type: 'callBack',
                description: '打开选框时触发',
                extraOptions: {
                    multiple: 'true'
                }
            },
            onClose: {
                type: 'callBack',
                description: '关闭选框时触发',
                extraOptions: {
                    multiple: 'true'
                }
            },
            style: {
                type: 'preview',
                description: '修改样式，示例将背景变为红色',
                props: {
                    style: {
                        backgroundColor: 'red'
                    }
                }
            },
            containerStyle: {
                type: 'preview',
                description: '修改容器样式，示例将背景变为红色',
                props: {
                    containerStyle: {
                        backgroundColor: 'red'
                    }
                }
            },
            disabledStyle: {
                type: 'preview',
                description: '修改禁用时样式，示例修改透明度为0.5',
                props: {
                    disabled: true,
                    disabledStyle: {
                        opacity: 0.5
                    }
                }
            },
            textStyle: {
                type: 'preview',
                description: '修改文字样式，示例增加文字大小',
                props: {
                    textStyle: {
                        fontSize: 17
                    }
                }
            },
            labelStyle: {
                type: 'preview',
                description: '修改标签文字样式，示例修改颜色为blue',
                props: {
                    labelStyle: {
                        color: 'blue'
                    }
                }
            },
            placeholder: {
                type: 'preview',
                description: '修改占位符文字',
                props: {
                    placeholder: '我是占位符'
                }
            },
            placeholderStyle: {
                type: 'preview',
                description: '修改占位符样式,示例修改color为red',
                props: {
                    placeholderStyle: {
                        color: 'red'
                    }
                }
            },
            showArrowIcon: {
                description: '右侧箭头图标',
                value: true,
                valueList: [true, false]
            },
            showTickIcon: {
                description: '选项的打钩图标',
                value: true,
                valueList: [true, false],
            },
            hideSelectedItemIcon: {
                description: '选中项的图标，标签中是否显示',
                value: true,
                valueList: [true, false],
            },
            ArrowUpIconComponent: {
                type: 'preview',
                description: '修改向上箭头的图标',
                props: {
                    ArrowUpIconComponent: () => <Image source={ImageSource} style={styles.iconStyle} />
                }
            },
            ArrowDownIconComponent: {
                type: 'preview',
                description: '修改向下箭头的图标',
                props: {
                    ArrowDownIconComponent: () => <Image source={ImageSource} style={styles.iconStyle} />
                }
            },
            TickIconComponent: {
                type: 'preview',
                description: '修改选中时打钩的图标',
                props: {
                    TickIconComponent: () => <Image source={ImageSource} style={styles.iconStyle} />
                }
            },
            CloseIconComponent: {
                type: 'preview',
                description: '在modal模式下，打开可搜索，显示在搜索框右侧的关闭图标',
                props: {
                    listMode: 'MODAL',
                    searchable: true,
                    CloseIconComponent: () => <Image source={ImageSource} style={styles.iconStyle} />
                }
            },
            arrowIconStyle: {
                type: 'preview',
                description: '箭头图标的样式，修改大小',
                props: {
                    arrowIconStyle: {
                        width: 30,
                        height: 30
                    }

                }
            },
            tickIconStyle: {
                type: 'preview',
                description: '打钩图标的样式，修改大小',
                props: {
                    tickIconStyle: {
                        width: 30,
                        height: 30
                    }

                }
            },
            closeIconStyle: {
                type: 'preview',
                description: '右上角关闭图标的样式，修改大小',
                props: {
                    listMode: 'MODAL',
                    searchable: true,
                    closeIconStyle: {
                        width: 50,
                        height: 50
                    }

                }
            },
            iconContainerStyle: {
                type: 'preview',
                description: '选项中图标容器的样式，修改了右边距',
                props: {
                    iconContainerStyle: {
                        marginRight: 50
                    }
                }
            },
            arrowIconContainerStyle: {
                type: 'preview',
                description: '箭头图标容器的样式，修改了右边距',
                props: {
                    arrowIconContainerStyle: {
                        marginRight: 50
                    }
                }
            },
            tickIconContainerStyle: {
                type: 'preview',
                description: '选中图标容器的样式，修改了右边距',
                props: {
                    tickIconContainerStyle: {
                        marginRight: 50
                    }
                }
            },
            closeIconContainerStyle: {
                type: 'preview',
                description: '关闭图标容器的样式，修改了右边距',
                props: {
                    listMode: 'MODAL',
                    searchable: true,
                    closeIconContainerStyle: {
                        marginRight: 50
                    }
                }
            },
            loading: {
                description: '搜索列表为空时是否展示loading',
                value: false,
                valueList: [true, false],
                extraOptions: {
                    searchable: true,
                }

            },
            ActivityIndicatorComponent: {
                type: 'preview',
                description: '搜索列表为空时展示的loading元素',
                props: {
                    searchable: true,
                    loading: true,
                    ActivityIndicatorComponent: () => <Image source={ImageSource} style={styles.iconStyle} />
                }
            },

            activityIndicatorColor: {
                type: 'preview',
                description: '搜索列表为空时展示的loading的颜色，改为red',
                props: {
                    searchable: true,
                    loading: true,
                    activityIndicatorColor: 'red',
                }
            },
            activityIndicatorSize: {
                type: 'preview',
                description: '搜索列表为空时展示的loading的大小，改为100',
                props: {
                    searchable: true,
                    loading: true,
                    activityIndicatorSize: 100,
                }
            },
            searchable: {
                description: '是否可搜索',
                value: false,
                valueList: [false, true],
            },
            searchTextInputProps: {
                type: 'preview',
                description: '搜索框的属性,示例里设置文字最大长度为10',
                props: {
                    searchable: true,
                    searchTextInputProps: {
                        maxLength: 10
                    }
                }
            },
            // searchWithRegionalAccents: {
            //     type: 'custom',
            //     description: '是否启用带有地区口音的搜索,搜索a试试',
            //     value: false,
            //     valueList: [false, true],
            //     extraOptions: {
            //         searchable: true,
            //     }
            // },
            disableLocalSearch: {
                description: '关闭本地搜索',
                value: false,
                valueList: [false, true],
                extraOptions: {
                    searchable: true,
                }
            },
            addCustomItem: {
                description: '把被搜索的文字作为一个可增加项',
                value: false,
                valueList: [false, true],
                extraOptions: {
                    searchable: true,
                }
            },
            searchPlaceholder: {
                type: 'preview',
                description: '搜索项的占位符，这里设置为 我是占位符',
                props: {
                    searchPlaceholder: '我是占位符',
                    searchable: true,
                }
            },
            onChangeSearchText: {
                type: 'callBack',
                description: '搜索的文字改变时触发',
                extraOptions: {
                    searchable: true,
                }
            },
            searchContainerStyle: {
                type: 'preview',
                description: '搜索容器的样式，背景改为red',
                props: {
                    searchable: true,
                    searchContainerStyle: {
                        backgroundColor: 'red'
                    }
                }
            },
            searchTextInputStyle: {
                type: 'preview',
                description: '搜索文字的样式，改为red',
                props: {
                    searchable: true,
                    searchTextInputStyle: {
                        color: "red"
                    }
                }
            },
            searchPlaceholderTextColor: {
                type: 'preview',
                description: '搜索占位符文字的样式，改为red',
                props: {
                    searchable: true,
                    searchPlaceholderTextColor: 'red'
                }
            },
            customItemContainerStyle: {
                type: 'custom',
                description: '自定义项的样式，背景改为red，奇数列为自定义项',
                props: {
                    customItemContainerStyle: {
                        backgroundColor: 'red'
                    }
                }
            },
            customItemLabelStyle: {
                type: 'custom',
                description: '自定义项标签的样式，改为粗体,奇数列为自定义项',
                props: {
                    customItemLabelStyle: {
                        fontWeight: 'bold'
                    }
                }
            },
            categorySelectable: {
                type: 'custom',
                value: false,
                valueList: [true, false],
                description: '是否可选择目录',
            },
            listParentContainerStyle: {
                type: 'custom',
                description: '父项容器样式，这里设置背景为red',
                props: {
                    listParentContainerStyle: {
                        backgroundColor: 'red'
                    }
                }
            },
            listParentLabelStyle: {
                type: 'custom',
                description: '父项标签样式，这里设置为red',
                props: {
                    listParentLabelStyle: {
                        color: 'red'
                    }
                }
            },
            listChildContainerStyle: {
                type: 'custom',
                description: '子项容器样式，这里设置背景为red',
                props: {
                    listChildContainerStyle: {
                        backgroundColor: 'red'
                    }
                }
            },
            listChildLabelStyle: {
                type: 'custom',
                description: '子项标签样式，这里设置为red',
                props: {
                    listChildLabelStyle: {
                        color: 'red'
                    }
                }
            },
            mode: {
                description: '已选项目的显示模式',
                value: 'SIMPLE',
                valueList: ['SIMPLE', 'DEFAULT', 'BADGE'],
                extraOptions: {
                    multiple: true,
                }
            },
            showBadgeDot: {
                description: 'BADGE模式下，是否显示dot',
                value: true,
                valueList: [true, false],
                extraOptions: {
                    mode: 'BADGE',
                    multiple: true,
                }
            },
            badgeProps: {
                description: 'BADGE模式下，badge的属性，这里设置激活时的透明度',
                value: 0.5,
                valueList: [
                    {
                        title: 0,
                        value: {
                            activeOpacity: 0,
                        }
                    },
                    {
                        title: 0.5,
                        value: {
                            activeOpacity: 0.5,
                        }
                    },
                    {
                        title: 1,
                        value: {
                            activeOpacity: 1,
                        }
                    },
                ],
                extraOptions: {
                    mode: 'BADGE',
                    multiple: true,
                }
            },
            extendableBadgeContainer: {
                description: 'BADGE模式下，允许在容器中展开显示',
                value: true,
                valueList: [true, false],
                extraOptions: {
                    mode: 'BADGE',
                    multiple: true,
                }
            },
            renderBadgeItem: {
                type: 'preview',
                description: '自定义渲染badge',
                props: {
                    mode: 'BADGE',
                    multiple: true,
                    renderBadgeItem: ((props: { label: string }) => {
                        return <View style={{ borderWidth: 1, marginRight: 5 }}>
                            <Text>{props?.label}</Text>
                        </View>
                    })
                }
            },
            badgeStyle: {
                type: 'preview',
                description: 'badge样式，增加margin',
                props: {
                    mode: 'BADGE',
                    multiple: true,
                    badgeStyle: {
                        margin: 20
                    }
                }
            },
            badgeTextStyle: {
                type: 'preview',
                description: 'badge文字样式，设为red',
                props: {
                    mode: 'BADGE',
                    multiple: true,
                    badgeTextStyle: {
                        color: 'red'
                    }
                }
            },
            badgeDotStyle: {
                type: 'preview',
                description: 'badge样式，设置透明度为0.1',
                props: {
                    mode: 'BADGE',
                    multiple: true,
                    badgeDotStyle: {
                        opacity: 0.1
                    }
                }
            },
            badgeSeparatorStyle: {
                type: 'preview',
                description: 'badge间距样式，增加width',
                props: {
                    mode: 'BADGE',
                    multiple: true,
                    badgeSeparatorStyle: {
                        width: 50
                    }
                }
            },
            badgeColors: {
                type: 'preview',
                description: 'badge颜色，设置一个数组"red", "blue", "orange"',
                props: {
                    mode: 'BADGE',
                    multiple: true,
                    badgeColors: ["red", "blue", "orange"]
                }
            },
            badgeDotColors: {
                type: 'preview',
                description: 'badge的dot的颜色，设置一个数组"red", "blue", "orange"',
                props: {
                    mode: 'BADGE',
                    multiple: true,
                    badgeDotColors: ["red", "blue", "orange"]
                }
            },
            dropDownDirection: {
                description: '选项框弹出的方向',
                value: 'AUTO',
                valueList: ['DEFAULT', 'TOP', 'BOTTOM', 'AUTO'],
            },
            bottomOffset: {
                description: '当方向设置为AUTO时，距离底部的方向改变触发距离',
                value: 0,
                valueList: [0, 10, 50, 100, 200],
            },
            onDirectionChanged: {
                type: 'callBack',
                description: '当方向改变时触发',
            },
            dropDownContainerStyle: {
                type: 'preview',
                description: '选项框容器的样式,设置一个border',
                props: {
                    dropDownContainerStyle: {
                        borderWidth: 5
                    }
                }
            },
            itemKey: {
                type: 'custom',
                description: '决定items里的哪个数据作为key',
                value: 'value',
                valueList: ['value', 'label']
            },
            closeAfterSelecting: {
                description: '选择后即关闭选项框',
                value: false,
                valueList: [true, false],
            },

            closeOnBackPressed: {
                description: '按返回键后关闭选项框',
                value: false,
                valueList: [true, false],
            },
            itemSeparator: {
                description: '分隔符是否显示',
                value: false,
                valueList: [true, false],
            },
            renderListItem: {
                type: 'preview',
                description: '渲染选项列表',
                props: {
                    renderListItem: ((props: { label: string, onPress: (a?: object, b?: object) => any, item?: object, custom?: object }) => {
                        return <View style={{ borderWidth: 1, marginRight: 5 }}>
                            <TouchableOpacity onPress={() => props.onPress(props.item, props.custom)}>
                                <Text>{props?.label}</Text>
                            </TouchableOpacity>
                        </View>
                    })
                }
            },
            ListEmptyComponent: {
                type: 'preview',
                description: '渲染`列表为空`组件',
                props: {
                    searchable: true,
                    ListEmptyComponent: ((props: { label: string }) => {
                        return <View>
                            <Text style={{ color: 'red' }}>
                                我是自定义的空列表
                            </Text>

                        </View>
                    })
                }
            },

            listItemContainerStyle: {
                type: 'preview',
                description: '列表项容器样式，高度设置为60',
                props: {
                    listItemContainerStyle: {
                        height: 60
                    }
                }
            },
            listItemLabelStyle: {
                type: 'preview',
                description: '列表项标签样式，颜色设置为blue',
                props: {
                    listItemLabelStyle: {
                        color: 'blue'
                    }
                }
            },
            selectedItemContainerStyle: {
                type: 'preview',
                description: '已选列表项容器样式，背景色设置为red',
                props: {
                    selectedItemContainerStyle: {
                        backgroundColor: 'red'
                    }
                }
            },
            selectedItemLabelStyle: {
                type: 'preview',
                description: '已选列表项标签样式，颜色设置为orange',
                props: {
                    selectedItemLabelStyle: {
                        color: 'orange'
                    }
                }
            },
            disabledItemContainerStyle: {
                type: 'preview',
                description: '禁选列表项容器样式，背景色设置为gray',
                props: {
                    disabledItemContainerStyle: {
                        backgroundColor: 'gray'
                    }
                }
            },
            disabledItemLabelStyle: {
                type: 'preview',
                description: '禁选列表项容器样式，颜色设置为pink',
                props: {
                    disabledItemLabelStyle: {
                        color: 'pink'
                    }
                }
            },
            listMessageContainerStyle: {
                type: 'preview',
                description: '`列表为空`容器样式，背景色设置为yellow',
                props: {
                    searchable: true,
                    listMessageContainerStyle: {
                        backgroundColor: 'yellow'
                    }
                }
            },
            listMessageTextStyle: {
                type: 'preview',
                description: '`列表为空`文字的样式，颜色设置为green',
                props: {
                    searchable: true,
                    listMessageTextStyle: {
                        color: 'green'
                    }
                }
            },
            itemSeparatorStyle: {
                type: 'preview',
                description: '分隔符的样式，颜色设置为red',
                props: {
                    itemSeparator: true,
                    itemSeparatorStyle: {
                        backgroundColor: 'red'
                    }
                }
            },
            listMode: {
                tip: '在FLATLIST模式下会报一个警告`VirtualizedLists should never...`,这是因为整个demo为列表，rn不允许里面再嵌套一个flatlist，单独使用dropdownpicker就没问题。',
                description: '列表模式',
                value: 'SCROLLVIEW',
                valueList: ['DEFAULT', 'FLATLIST', 'SCROLLVIEW', 'MODAL'],
            },

            flatListProps: {
                tip: '在FLATLIST模式下会报一个警告`VirtualizedLists should never...`,这是因为整个demo为列表，rn不允许里面再嵌套一个flatlist，单独使用dropdownpicker就没问题。',
                type: 'preview',
                description: 'FLATLIST模式下的额外属性，加一个尾部',
                props: {
                    listMode: 'FLATLIST',
                    flatListProps: {
                        ListFooterComponent: () => {
                            return <View>
                                <Text>我是尾部</Text>
                            </View>
                        }
                    }
                }
            },
            scrollViewProps: {
                type: 'preview',
                description: 'SCROLLVIEW模式下的额外属性,可以设置样式,如设置个blue背景',
                props: {
                    listMode: 'SCROLLVIEW',
                    scrollViewProps: {
                        contentContainerStyle: {
                            backgroundColor: 'blue'
                        }
                    }
                }
            },
            modalProps: {
                type: 'preview',
                description: 'MODAL模式下的额外属性,改变动画为fade',
                props: {
                    listMode: 'MODAL',
                    modalProps: {
                        animationType: "fade"
                    }
                }
            },
            modalTitle: {
                type: 'preview',
                description: 'MODAL模式下的标题',
                props: {
                    listMode: 'MODAL',
                    modalTitle: '我是modal的标题'
                }
            },
            modalAnimationType: {
                description: 'MODAL模式下，动画的类型',
                value: 'none',
                valueList: ['slide', 'fade', 'none'],
                extraOptions: {
                    listMode: 'MODAL'
                }
            },
            modalContentContainerStyle: {
                type: 'preview',
                description: 'MODAL容器样式,背景设置为yellow',
                props: {
                    listMode: 'MODAL',
                    modalContentContainerStyle: {
                        backgroundColor: 'yellow'
                    }
                }
            },
            modalTitleStyle: {
                type: 'preview',
                description: 'MODAL标题样式,颜色设置为red',
                props: {
                    listMode: 'MODAL',
                    modalTitle: '我是modal的标题',
                    modalTitleStyle: {
                        color: 'red'
                    }
                }
            },
            rtl: {
                description: '设置组件阅读方向为从右向左',
                value: false,
                valueList: [false, true],
            },
            setLanguage: {
                type: 'custom',
                description: '设置语言',
                value: 'EN',
                valueList: ['EN', 'AR', 'RU', 'IT'],
                extraOptions: {
                    searchable: true,
                    multiple: true,
                }
            },
            addTranslation: {
                type: 'custom',
                description: '添加一份语言，这里添加中文，并切换成中文',
                props: {
                    searchable: true,
                    multiple: true,
                }
            },
            modifyTranslation: {
                type: 'custom',
                description: '修改一份语言，这里修改默认的英文',
                props: {
                    searchable: true,
                    multiple: true,
                }
            },
            addTheme: {
                type: 'custom',
                description: '新增主题,这里自定义了一个主题，把默认颜色改成了blue,图标换成了自定义的',
            },
            setTheme: {
                type: 'custom',
                description: '设置主题',
                value: 'LIGHT',
                valueList: ['LIGHT', 'DARK'],
                extraOptions: {
                    searchable: true,
                    multiple: true,
                }
            },
        }
    })



    //定义当前展开的属性demo是哪一个
    const [currentIndex, setIndex] = useState(0)

    type ComButtonProps = {
        index: number
        title: string
    }

    const ComButton = ({ index, title }: ComButtonProps) => {
        return <Pressable onPress={() => {
            setIndex(index)
        }}>
            <View style={styles.comButton}>
                <Text style={styles.comButtonText}>[{index + 1}]</Text>
                <Text style={styles.comButtonText}>打开{title}</Text>
            </View>
        </Pressable>
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden></StatusBar>
            <Tester style={{ flex: 1 }}>
                <ScrollView nestedScrollEnabled={true}>
                    {
                        //循环定义的state,把属性都渲染出来
                        Object.entries(state).filter(([a, b]) => b?.noRender !== true).map(([title, obj = {}], index) => {
                            let { tip, testName, type, props = {}, value, description = '', valueList = [], extraOptions = {} } = obj

                            return (() => {
                                //定义基础数据
                                const [open, setOpen] = useState(false);
                                const [value2, setValue] = useState(null);
                                const [items, setItems] = useState([
                                    {
                                        label: 'Banana_disable',
                                        value: 'banana_disable',
                                        icon: () => <Image source={ImageSource} style={styles.iconStyle} />,
                                        disabled: true,
                                    },
                                    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
                                        return {
                                            label: 'Banana' + i,
                                            value: 'banana' + i,
                                            icon: () => <Image source={ImageSource} style={styles.iconStyle} />
                                        }
                                    }),

                                ]);
                                const [loading, setLoading] = useState(false);


                                const [items_custom, setItems_custom] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
                                    return {
                                        label: 'Banana' + i,
                                        value: 'banana' + i,
                                        custom: i % 2 === 1,
                                        icon: () => <Image source={ImageSource} style={styles.iconStyle} />
                                    }
                                }));

                                const [items_custom2, setItems_custom2] = useState([
                                    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, i) => {
                                        return {
                                            label: 'Banana' + i,
                                            value: 'banana' + i,
                                            icon: () => <Image source={ImageSource} style={styles.iconStyle} />
                                        }
                                    }),
                                    {
                                        label: 'Àger',
                                        value: 'Àger',
                                        icon: () => <Image source={ImageSource} style={styles.iconStyle} />
                                    },
                                    {
                                        label: 'āáǎà',
                                        value: 'āáǎà',
                                        icon: () => <Image source={ImageSource} style={styles.iconStyle} />
                                    },
                                ]);

                                const [items_category, setItems_category] = useState([{
                                    label: 'Banana',
                                    value: 'banana',
                                    icon: () => <Image source={ImageSource} style={styles.iconStyle} />,
                                },
                                ...[0, 1, 2, 3].map((e, i) => {
                                    return {
                                        label: 'Banana' + i,
                                        value: 'banana' + i,
                                        parent: 'banana',
                                        icon: () => <Image source={ImageSource} style={styles.iconStyle} />
                                    }

                                }), {
                                    label: 'Apple',
                                    value: 'apple',
                                    icon: () => <Image source={ImageSource} style={styles.iconStyle} />,
                                },
                                ...[0, 1, 2, 3].map((e, i) => {
                                    return {
                                        label: 'Apple' + i,
                                        value: 'apple' + i,
                                        parent: 'apple',
                                        icon: () => <Image source={ImageSource} style={styles.iconStyle} />
                                    }
                                })
                                ]);

                                //只展示1项属性demo,其它项隐藏起来，节省性能，也避免数据污染
                                if (index !== currentIndex) {
                                    return <ComButton index={index} title={testName || title} key={title} />
                                }

                                if (!type) {
                                    return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                        {
                                            tip ? <View>
                                                <Text style={styles.tip}>
                                                    TIP:{tip}
                                                </Text>
                                            </View> : null
                                        }
                                        <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                            setValue(null)
                                            setState({
                                                ...state,
                                                [title]: {
                                                    ...state?.[title],
                                                    value: val
                                                }
                                            })
                                        }}></ToggleButton>
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={[styles.container]}>
                                                <DropDownPicker
                                                    style={[styles.dropDownPicker]}
                                                    open={open}
                                                    value={value2}
                                                    items={items}
                                                    loading={loading}
                                                    setOpen={setOpen}
                                                    setValue={setValue}
                                                    setItems={setItems}
                                                    listMode="SCROLLVIEW"
                                                    {...{
                                                        ...extraOptions,
                                                        [title]: checkIsObject(state?.[title]?.value) ? state?.[title]?.value.value : state?.[title]?.value,
                                                    }}
                                                />
                                            </View>
                                        </TestCase>
                                    </TestSuite>
                                } else if (type === 'preview') {
                                    return <TestSuite name={(testName || title)} key={title}>
                                        {
                                            tip ? <View>
                                                <Text style={styles.tip}>
                                                    TIP:{tip}
                                                </Text>
                                            </View> : null
                                        }
                                        <TestCase itShould={description} tags={['C_API']}>
                                            <View style={[styles.container]}>
                                                <DropDownPicker
                                                    style={[styles.dropDownPicker]}
                                                    open={open}
                                                    value={value2}
                                                    items={items}
                                                    loading={loading}
                                                    setOpen={setOpen}
                                                    setValue={setValue}
                                                    setItems={setItems}
                                                    listMode="SCROLLVIEW"
                                                    {...props}
                                                />
                                            </View>

                                        </TestCase>
                                    </TestSuite>
                                } else if (type === 'callBack') {

                                    return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                        {
                                            tip ? <View>
                                                <Text style={styles.tip}>
                                                    TIP:{tip}
                                                </Text>
                                            </View> : null
                                        }
                                        <TestCase itShould={description} tags={['C_API']}
                                            initialState={false}
                                            assert={({ expect, state }) => {
                                                expect(state).to.be.true;
                                            }}
                                            arrange={({ setState }) => {
                                                return <View style={[styles.container]}>
                                                    <DropDownPicker
                                                        style={styles.dropDownPicker}
                                                        open={open}
                                                        value={value2}
                                                        items={items}
                                                        setOpen={setOpen}
                                                        setValue={setValue}
                                                        setItems={setItems}
                                                        listMode="SCROLLVIEW"
                                                        {
                                                        ...{
                                                            ...extraOptions,
                                                            [title]: () => {
                                                                setState(true)
                                                            },
                                                        }
                                                        }
                                                    />
                                                </View>
                                            }}
                                        />
                                    </TestSuite>
                                } else {
                                    //以下为type='custom'的自定义组件逻辑

                                    if (title === 'items') {

                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            <TestCase itShould={description} tags={['C_API']}
                                                initialState={false}
                                                assert={({ expect, state }) => {
                                                    expect(state).to.be.true;
                                                }}
                                                arrange={({ setState }) => {
                                                    return <View style={styles.container}>
                                                        <Button
                                                            title='Add Item'
                                                            onPress={
                                                                () => setItems((list) => {
                                                                    setState(true)
                                                                    let id = Math.floor(Math.random() * 1000000);
                                                                    return [...list, { label: 'Apple' + id, value: 'apple' + id, icon: () => <Image source={ImageSource} style={styles.iconStyle} /> }]
                                                                })
                                                            } />
                                                        <DropDownPicker
                                                            style={styles.dropDownPicker}
                                                            open={open}
                                                            value={value2}
                                                            items={items}
                                                            setOpen={setOpen}
                                                            setValue={(val) => {
                                                                setValue(val)
                                                            }}
                                                            setItems={setItems}
                                                            listMode="SCROLLVIEW"
                                                        />

                                                    </View>

                                                }}
                                            />

                                        </TestSuite>
                                    }

                                    if (title === 'value') {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            <TestCase itShould={description} tags={['C_API']}
                                                initialState={false}
                                                assert={({ expect, state }) => {
                                                    expect(state).to.be.true;
                                                }}
                                                arrange={({ setState }) => {
                                                    return <View style={styles.container}>
                                                        <DropDownPicker
                                                            style={styles.dropDownPicker}
                                                            open={open}
                                                            value={value2}
                                                            items={items}
                                                            setOpen={setOpen}
                                                            setValue={(val) => {
                                                                setState(true)
                                                                setValue(val)
                                                            }}
                                                            setItems={setItems}
                                                            listMode="SCROLLVIEW"
                                                        />
                                                    </View>
                                                }}
                                            />
                                        </TestSuite>
                                    }
                                    if (title === 'open') {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            <TestCase itShould={description} tags={['C_API']}
                                                initialState={false}
                                                assert={({ expect, state }) => {
                                                    expect(state).to.be.true;
                                                }}
                                                arrange={({ setState }) => {
                                                    return <View style={styles.container}>
                                                        <Button
                                                            title='setOpen'
                                                            onPress={
                                                                () => setOpen((val) => {
                                                                    setState(true)
                                                                    return !val
                                                                })
                                                            } />
                                                        <DropDownPicker
                                                            style={styles.dropDownPicker}
                                                            open={open}
                                                            value={value2}
                                                            items={items}
                                                            setOpen={setOpen}
                                                            setValue={(val) => {
                                                                setState(true)
                                                                setValue(val)
                                                            }}
                                                            setItems={setItems}
                                                            listMode="SCROLLVIEW"
                                                        />
                                                    </View>
                                                }}
                                            />
                                        </TestSuite>
                                    }

                                    if (title === 'multiple') {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            <ToggleButton title={'切换' + 'multiple'} list={state.multiple.valueList || []} initValue={state.multiple.value} onChange={(val: any) => {
                                                setValue(null)
                                                setState({
                                                    ...state,
                                                    [title]: {
                                                        ...state?.[title],
                                                        value: val
                                                    }
                                                })
                                            }}></ToggleButton>

                                            <ToggleButton title={'切换' + 'min'} list={state.min.valueList || []} initValue={state.min.value} onChange={(val: any) => {
                                                setValue(null)
                                                setState({
                                                    ...state,
                                                    min: {
                                                        ...state.min,
                                                        value: val
                                                    }
                                                })
                                            }}></ToggleButton>
                                            <ToggleButton title={'切换' + 'max'} list={state.max.valueList || []} initValue={state.max.value} onChange={(val: any) => {

                                                setValue(null)

                                                setState({
                                                    ...state,
                                                    max: {
                                                        ...state.max,
                                                        value: val
                                                    }
                                                })
                                            }}></ToggleButton>
                                            <TestCase itShould={description} tags={['C_API']}>
                                                <View style={[styles.container]}>
                                                    <DropDownPicker
                                                        style={styles.dropDownPicker}
                                                        open={open}
                                                        value={value2}
                                                        items={items}
                                                        setOpen={setOpen}
                                                        setValue={setValue}
                                                        setItems={setItems}
                                                        listMode="SCROLLVIEW"
                                                        {...{
                                                            ...extraOptions,
                                                            multiple: state.multiple.value,
                                                            min: state.min.value,
                                                            max: state.max.value
                                                        }} />
                                                </View>
                                            </TestCase>
                                        </TestSuite>
                                    }

                                    if (title === 'testID' || title === 'itemKey') {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>

                                            <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                                setValue(null)
                                                setState({
                                                    ...state,
                                                    [title]: {
                                                        ...state?.[title],
                                                        value: val
                                                    }
                                                })
                                            }}></ToggleButton>
                                            <TestCase itShould={description} tags={['C_API']}>
                                                <View style={[styles.container]}>
                                                    <View>
                                                        <Text >当前值：{state?.[title]?.value}</Text>
                                                    </View>
                                                    <DropDownPicker
                                                        style={[styles.dropDownPicker]}
                                                        open={open}
                                                        value={value2}
                                                        items={items}
                                                        loading={loading}
                                                        setOpen={setOpen}
                                                        setValue={setValue}
                                                        setItems={setItems}
                                                        listMode="SCROLLVIEW"
                                                        {...{
                                                            [title]: checkIsObject(state?.[title]?.value) ? state?.[title]?.value?.value : state?.[title]?.value,
                                                            ...props,
                                                            ...extraOptions,
                                                        }}
                                                    />
                                                </View>
                                            </TestCase>
                                        </TestSuite>
                                    }


                                    if (title === 'searchWithRegionalAccents') {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                                setValue(null)
                                                setState({
                                                    ...state,
                                                    [title]: {
                                                        ...state?.[title],
                                                        value: val
                                                    }
                                                })
                                            }}></ToggleButton>
                                            <TestCase itShould={description} tags={['C_API']}>
                                                <View style={[styles.container]}>
                                                    <DropDownPicker
                                                        style={[styles.dropDownPicker]}
                                                        open={open}
                                                        value={value2}
                                                        items={items_custom2}
                                                        loading={loading}
                                                        setOpen={setOpen}
                                                        setValue={setValue}
                                                        setItems={setItems_custom2}
                                                        listMode="SCROLLVIEW"
                                                        {...{
                                                            [title]: checkIsObject(state?.[title]?.value) ? state?.[title]?.value?.value : state?.[title]?.value,
                                                            ...props,
                                                            ...extraOptions,
                                                        }}
                                                    />
                                                </View>
                                            </TestCase>
                                        </TestSuite>
                                    }
                                    if (title === 'customItemContainerStyle' || title === 'customItemLabelStyle') {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            <TestCase itShould={description} tags={['C_API']}>
                                                <View style={[styles.container]}>
                                                    <DropDownPicker
                                                        style={[styles.dropDownPicker]}
                                                        open={open}
                                                        value={value2}
                                                        items={items_custom}
                                                        loading={loading}
                                                        setOpen={setOpen}
                                                        setValue={setValue}
                                                        setItems={setItems_custom}
                                                        listMode="SCROLLVIEW"
                                                        {
                                                        ...props
                                                        }
                                                    />
                                                </View>
                                            </TestCase>
                                        </TestSuite>
                                    }

                                    if (title === 'categorySelectable'
                                        || title === 'listParentContainerStyle'
                                        || title === 'listParentLabelStyle'
                                        || title === 'listChildContainerStyle'
                                        || title === 'listChildLabelStyle'
                                        || title === 'stickyHeader'

                                    ) {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            {valueList.length ? <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                                setValue(null)
                                                setState({
                                                    ...state,
                                                    [title]: {
                                                        ...state?.[title],
                                                        value: val
                                                    }
                                                })
                                            }}></ToggleButton> : null
                                            }
                                            <TestCase itShould={description} tags={['C_API']}>
                                                <View style={[styles.container]}>
                                                    <DropDownPicker
                                                        style={[styles.dropDownPicker]}
                                                        open={open}
                                                        value={value2}
                                                        items={items_category}
                                                        loading={loading}
                                                        setOpen={setOpen}
                                                        setValue={setValue}
                                                        setItems={setItems_category}
                                                        listMode="SCROLLVIEW"
                                                        {...{
                                                            [title]: checkIsObject(state?.[title]?.value) ? state?.[title]?.value?.value : state?.[title]?.value,
                                                            ...props,
                                                            ...extraOptions,
                                                        }}
                                                    />
                                                </View>
                                            </TestCase>
                                        </TestSuite>
                                    }


                                    if (title === 'setLanguage') {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            {valueList.length ? <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                                DropDownPicker.setLanguage(val);
                                                setValue(null)
                                                setState({
                                                    ...state,
                                                    [title]: {
                                                        ...state?.[title],
                                                        value: val
                                                    }
                                                })
                                            }}></ToggleButton> : null
                                            }
                                            <TestCase itShould={description} tags={['C_API']}>
                                                <View style={[styles.container]}>
                                                    <DropDownPicker
                                                        style={[styles.dropDownPicker]}
                                                        open={open}
                                                        value={value2}
                                                        items={items}
                                                        loading={loading}
                                                        setOpen={setOpen}
                                                        setValue={setValue}
                                                        setItems={setItems}
                                                        listMode="SCROLLVIEW"
                                                        {...{
                                                            ['language']: checkIsObject(state?.[title]?.value) ? state?.[title]?.value?.value : state?.[title]?.value,
                                                            ...props,
                                                            ...extraOptions,
                                                        }}
                                                    />
                                                </View>
                                            </TestCase>
                                        </TestSuite>
                                    }


                                    if (title === 'addTranslation' || title === 'modifyTranslation') {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            {valueList.length ? <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                                DropDownPicker.setLanguage(val);
                                                setValue(null)

                                                setState({
                                                    ...state,
                                                    [title]: {
                                                        ...state?.[title],
                                                        value: val
                                                    }
                                                })
                                            }}></ToggleButton> : null
                                            }
                                            <TestCase itShould={description} tags={['C_API']}>
                                                <View style={[styles.container]}>
                                                    {
                                                        title === 'addTranslation' && <Button title='增加中文并切换到中文' onPress={() => {
                                                            DropDownPicker.addTranslation("ZH", {
                                                                PLACEHOLDER: '选择一项',
                                                                SEARCH_PLACEHOLDER: '输点儿什么...',
                                                                SELECTED_ITEMS_COUNT_TEXT: {
                                                                    1: '已选择1项',
                                                                    n: '已选择{count}项'
                                                                },
                                                                NOTHING_TO_SHOW: '没啥可展示的~'
                                                            });

                                                            DropDownPicker.setLanguage("ZH");

                                                            Alert.alert('已增加并切换')
                                                        }}></Button>
                                                    }
                                                    {
                                                        title === 'modifyTranslation' && <Button title='修改英文并切换到英文' onPress={() => {
                                                            DropDownPicker.modifyTranslation("EN", {
                                                                PLACEHOLDER: 'Select one~~~',
                                                                SEARCH_PLACEHOLDER: 'Type~~~',
                                                                SELECTED_ITEMS_COUNT_TEXT: {
                                                                    1: '1 selected~~~',
                                                                    n: '{count} selected~~~'
                                                                },
                                                                NOTHING_TO_SHOW: 'Nothing~~~'
                                                            });

                                                            DropDownPicker.setLanguage("EN");

                                                            Alert.alert('已修改并切换')
                                                        }}></Button>

                                                    }
                                                    <DropDownPicker
                                                        style={[styles.dropDownPicker]}
                                                        open={open}
                                                        value={value2}
                                                        items={items}
                                                        loading={loading}
                                                        setOpen={setOpen}
                                                        setValue={setValue}
                                                        setItems={setItems}
                                                        listMode="SCROLLVIEW"
                                                        {...{
                                                            ['language']: checkIsObject(state?.[title]?.value) ? state?.[title]?.value?.value : state?.[title]?.value,
                                                            ...props,
                                                            ...extraOptions,
                                                        }}
                                                    />
                                                </View>
                                            </TestCase>
                                        </TestSuite>
                                    }


                                    if (title === 'addTheme') {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            <TestCase itShould={description} tags={['C_API']}>
                                                <View style={[styles.container]}>
                                                    <Button title='增加一个主题并切换' onPress={() => {
                                                        DropDownPicker.addTheme("MyTheme", MyTheme);

                                                        DropDownPicker.setTheme("MyTheme");

                                                        Alert.alert('已修改并切换')
                                                    }}></Button>
                                                    <DropDownPicker
                                                        style={[styles.dropDownPicker]}
                                                        open={open}
                                                        value={value2}
                                                        items={items}
                                                        loading={loading}
                                                        setOpen={setOpen}
                                                        setValue={setValue}
                                                        setItems={setItems}
                                                        listMode="SCROLLVIEW"
                                                        {...{
                                                            ['theme']: checkIsObject(state?.[title]?.value) ? state?.[title]?.value?.value : state?.[title]?.value,
                                                            ...props,
                                                            ...extraOptions,
                                                        }}
                                                    />
                                                </View>
                                            </TestCase>
                                        </TestSuite>
                                    }

                                    if (title === 'setTheme') {
                                        return <TestSuite name={(testName || title)} key={title + state?.[title]?.value}>
                                            {valueList.length ? <ToggleButton title={'切换' + title} list={valueList} initValue={value} onChange={(val: any) => {
                                                DropDownPicker.setTheme("DARK");
                                                setValue(null)

                                                setState({
                                                    ...state,
                                                    [title]: {
                                                        ...state?.[title],
                                                        value: val
                                                    }
                                                })
                                            }}></ToggleButton> : null
                                            }
                                            <TestCase itShould={description} tags={['C_API']}>
                                                <View style={[styles.container]}>
                                                    <DropDownPicker
                                                        style={[styles.dropDownPicker]}
                                                        open={open}
                                                        value={value2}
                                                        items={items}
                                                        loading={loading}
                                                        setOpen={setOpen}
                                                        setValue={setValue}
                                                        setItems={setItems}
                                                        listMode="SCROLLVIEW"
                                                        {...{
                                                            ['theme']: checkIsObject(state?.[title]?.value) ? state?.[title]?.value?.value : state?.[title]?.value,
                                                            ...props,
                                                            ...extraOptions,
                                                        }}
                                                    />
                                                </View>
                                            </TestCase>
                                        </TestSuite>
                                    }
                                }
                            })()
                        })
                    }
                </ScrollView>
            </Tester >
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    dropDownPicker: {

    },
    btn: {
        marginTop: 10
    },
    icon: {
        backgroundColor: 'blue'
    },
    textInput: {
        borderWidth: 1,
        width: 150
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    comButton: {
        borderWidth: 3,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: 'pink',
        borderColor: 'gray'
    },

    comButtonText: {
        fontSize: 20,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    tip: {
        color: 'red'
    }
});

export { DropDownPickerTest }