import React, { useState, useRef } from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { TestSuite, TestCase, Tester } from '@rnoh/testerino';
import SignatureScreen from 'react-native-signature-canvas';
import SignatureCanvas from 'react-native-signature-canvas';

export function AutoClear() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="autoClear:(true)" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>单击“Confirm”按钮后自动清除签名</Text>
                            <SignatureScreen autoClear={true} />
                        </View>
                    </TestCase>
                    <TestCase itShould="autoClear:(false)" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>单击“Confirm”按钮后不会自动清除签名</Text>
                            <SignatureScreen autoClear={false} />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function GetbackgroundColor() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="backgroundColor(#fff)" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>backgroundColor:#fff</Text>
                            <SignatureScreen backgroundColor={'#fff'} />
                        </View>
                    </TestCase>
                    <TestCase itShould="backgroundColor(#fff134)" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>backgroundColor:#fff134</Text>
                            <SignatureScreen backgroundColor={'#fff134'} />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function BgInfo() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="bgSrc/bgHeight:200/bgWidth:300" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>bgSrc：https://via.placeholder.com/300x200/ff726b</Text>
                            <Text>bgHeight:300</Text>
                            <Text>bgWidth:200</Text>
                            <SignatureScreen
                                bgSrc="https://via.placeholder.com/300x200/ff726b"
                                bgWidth={300}
                                bgHeight={200}
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="bgSrc/bgHeight:400/bgWidth:400" tags={['C_API']}>
                        <View style={{ height: 500 }}>
                            <Text>
                                bgSrc：http://pngimg.com/uploads/circle/circle_PNG63.png
                            </Text>
                            <Text>bgHeight:200</Text>
                            <Text>bgWidth:300</Text>
                            <SignatureScreen
                                bgSrc="http://pngimg.com/uploads/circle/circle_PNG63.png"
                                bgWidth={200}
                                bgHeight={300}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function ClearText() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="clearText:string default:Clear" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>清除按钮的文字内容</Text>
                            <SignatureScreen />
                        </View>
                    </TestCase>
                    <TestCase itShould="clearText:string" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>清除按钮的文字内容</Text>
                            <SignatureScreen
                                autoClear={true}
                                backgroundColor={'#fff'}
                                clearText={'清除按钮'}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function ConfirmText() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase
                        itShould="ConfirmText:string default:Confirm"
                        tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>确认按钮的文字内容 默认为Confirm</Text>
                            <SignatureScreen />
                        </View>
                    </TestCase>
                    <TestCase itShould="ClearText:string" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>确认按钮的文字内容</Text>
                            <SignatureScreen confirmText={'确认按钮'} />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function CustomHtml() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="CustomHtml:Component " tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>html 字符串，可让您修改布局或元素等内容</Text>
                            <SignatureScreen
                                autoClear={true}
                                backgroundColor={'#fff'}
                                customHtml={() => {
                                    return `
                  <div style="border: 1px solid black; background-color: white;height:400;">
                    <p>this is customHtml</p>
                  </div>
                `;
                                }}
                            />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function DataURL() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="DataURL:string " tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>
                                默认为“”，Base64字符串，从dataURL中提取保存的签名
                                dataURL="https://via.placeholder.com/300x200/ff726b"
                            </Text>
                            <SignatureScreen dataURL="https://via.placeholder.com/300x200/ff726b" />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function DescriptionText() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="descriptionText:string" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>签名的描述文字</Text>
                            <SignatureScreen descriptionText={'这是一段签名的描述文字'} />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function DotSize() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="dotSize:number(10)" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>单个点的半径（不是笔划宽度）dotSize:10</Text>
                            <SignatureScreen dotSize={10} />
                        </View>
                    </TestCase>
                    <TestCase itShould="dotSize:number(5)" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>单个点的半径（不是笔划宽度）dotSize:5</Text>
                            <SignatureScreen dotSize={5} />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function ImageType() {
    const [imageTypeInfo, setimageTypeInfo] = useState('');
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="imageType:image/jpeg" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>点击confirm查看imageType:{imageTypeInfo}</Text>
                            <SignatureScreen
                                onOK={img => setimageTypeInfo(img.slice(0, 15))}
                                imageType="image/jpeg"
                            />
                        </View>
                    </TestCase>
                    <TestCase itShould="imageType:image/svg+xml" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>点击confirm查看imageType:{imageTypeInfo}</Text>
                            <SignatureScreen
                                onOK={img => setimageTypeInfo(img.slice(0, 15))}
                                imageType="image/svg+xml"
                            />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function MinWidth() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="minWidth:numbe(0.5)" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>线的最小宽度。 0.5</Text>
                            <SignatureScreen minWidth={0.5} />
                        </View>
                    </TestCase>
                    <TestCase itShould="minWidth:numbe(2.0)" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>线的最小宽度。 2.0</Text>
                            <SignatureScreen minWidth={2.0} />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function MaxWidth() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="maxWidth:numbe(2.5)" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>线的最大宽度。默认为 2.5 </Text>
                            <SignatureScreen maxWidth={2.5} />
                        </View>
                    </TestCase>
                    <TestCase itShould="maxWidth:numbe(5.0)" tags={['C_API']}>
                        <View style={{ height: 400 }}>
                            <Text>线的最大宽度。 5.0</Text>
                            <SignatureScreen maxWidth={5.0} />
                        </View>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnOK() {
    const [onOKInfo, setonOKInfo] = useState('点击confirm触发回调');

    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onOK :function " tags={['C_API']}>
                        <Text>保存非空签名后的回调函数 : {onOKInfo} </Text>
                        <SignatureScreen
                            style={{ height: 380 }}
                            onOK={() => {
                                setonOKInfo('回调触发');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnEmpty() {
    const [Empty, setEmpty] = useState('点击confirm触发回调');

    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onEmpty :function " tags={['C_API']}>
                        <Text>尝试保存空签名后的回调函数 : {Empty} </Text>
                        <SignatureScreen
                            style={{ height: 380 }}
                            onEmpty={() => {
                                setEmpty('Empty');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnClear() {
    const [Clear, setClear] = useState('点击Clear触发回调');

    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onClear :function " tags={['C_API']}>
                        <Text> 清除签名后的回调函数 : {Clear} </Text>
                        <SignatureScreen
                            style={{ height: 380 }}
                            onClear={() => {
                                setClear('clear success!');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnGetData() {
    const [getData, setgetData] = useState('点击confirm触发回调');
    const handleData = () => {
        setgetData('getData');
    };
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onGetData:function " tags={['C_API']}>
                        <Text> 获取data的回调函数: {getData} </Text>
                        <SignatureScreen style={{ height: 380 }} onGetData={handleData} />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnBegin() {
    const [onBegin, setonBegin] = useState('笔画开始时触发回调');
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onBegin	 :function " tags={['C_API']}>
                        <Text> 新笔画开始时的回调函数: {onBegin} </Text>
                        <SignatureScreen
                            style={{ height: 380 }}
                            onBegin={() => {
                                setonBegin('笔画开始！');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnEnd() {
    const [onEnd, setonEnd] = useState('笔画结束时触发回调');

    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onEnd	 :function " tags={['C_API']}>
                        <Text> 笔画结束时的回调函数: {onEnd} </Text>
                        <SignatureScreen
                            style={{ height: 380 }}
                            onEnd={() => {
                                setonEnd('笔画结束！');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnLoadEnd() {
    const [onLoadEnd, setonLoadEnd] = useState('画布正在加载.......');

    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onLoadEnd	:function " tags={['C_API']}>
                        <Text>webview 画布加载结束时的回调函数 :{onLoadEnd} </Text>
                        <SignatureScreen
                            style={{ height: 380 }}
                            onLoadEnd={() => {
                                setonLoadEnd('画布加载结束!');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnUndo() {
    const ref = useRef();
    const [undo, setundo] = useState('点击撤销按钮');

    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onUndo:function " tags={['C_API']}>
                        <Button
                            title="点击撤销"
                            onPress={() => {
                                ref.current.undo();
                            }}
                        />
                        <Text>调用撤销函数时的回调函数 :{undo} </Text>
                        <SignatureScreen
                            ref={ref}
                            style={{ height: 380 }}
                            onUndo={() => {
                                setundo('撤销回调已触发!!!');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnRedo() {
    const refOnRedo = useRef();
    const [redo, setredo] = useState('点击重做按钮');
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onRedo:function " tags={['C_API']}>
                        <Button
                            title="点击重做"
                            onPress={() => {
                                refOnRedo.current.redo();
                            }}
                        />
                        <Text>调用重做函数时的回调函数 :{redo} </Text>
                        <SignatureScreen
                            ref={refOnRedo}
                            style={{ height: 380 }}
                            onRedo={() => {
                                setredo('重做回调已触发!!!');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnDraw() {
    const refDraw = useRef();
    const [onDraw, setonDraw] = useState('点击时触发回调');
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onDraw:function " tags={['C_API']}>
                        <Button
                            title="点击绘制触发"
                            onPress={() => {
                                refDraw.current.draw();
                            }}
                        />
                        <Text>点击时的回调函数 :{onDraw} </Text>
                        <SignatureScreen
                            ref={refDraw}
                            style={{ height: 380 }}
                            onDraw={() => {
                                setonDraw('回调已触发!!!');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnErase() {
    const refOnErase = useRef();
    const [erase, seterase] = useState('点击擦除按钮时触发回调');

    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onErase:function " tags={['C_API']}>
                        <Button
                            title="点击擦除"
                            onPress={() => {
                                refOnErase.current.erase();
                            }}
                        />
                        <Text>擦除时的回调函数 :{erase} </Text>
                        <SignatureScreen
                            ref={refOnErase}
                            style={{ height: 380 }}
                            onErase={() => {
                                seterase('擦除时的回调已触发!!!');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnChangePenColor() {
    const refonChangePenColor = useRef();
    const [onChangePenColor, setonChangePenColor] =
        useState('更改笔颜色时触发回调');

    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onChangePenColor:function " tags={['C_API']}>
                        <Button
                            title="点击更改笔颜色"
                            onPress={() => {
                                refonChangePenColor.current.changePenColor('red');
                            }}
                        />
                        <Text>更改笔颜色时的回调函数 :{onChangePenColor} </Text>
                        <SignatureScreen
                            ref={refonChangePenColor}
                            style={{ height: 380 }}
                            onChangePenColor={() => {
                                setonChangePenColor('更改笔颜色时的回调已触发!!!');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function OnChangePenSize() {
    const refonChangePenSize = useRef();
    const [onChangePenSize, setonChangePenSize] =
        useState('更改笔粗细时触发回调');

    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="onChangePenSize	:function " tags={['C_API']}>
                        <Button
                            title="点击更改笔尺寸"
                            onPress={() => {
                                refonChangePenSize.current.changePenSize(2.5, 5);
                            }}
                        />
                        <Text>更改笔尺寸时的回调函数 :{onChangePenSize} </Text>
                        <SignatureScreen
                            ref={refonChangePenSize}
                            style={{ height: 380 }}
                            onChangePenSize={() => {
                                setonChangePenSize('更改笔尺寸时的回调已触发!!!');
                            }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function Overlay() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase
                        itShould="overlayHeight	:number(300) /overlayWidth:number(300)/overlaySrc:string"
                        tags={['C_API']}>
                        <Text>下面示例展示覆盖图像的高宽以及url属性</Text>
                        <Text>overlayWidth:300 </Text>
                        <Text>overlayHeight:300 </Text>
                        <Text>
                            overlaySrc:http://pngimg.com/uploads/circle/circle_PNG63.png{' '}
                        </Text>
                        <SignatureScreen
                            style={{ height: 380 }}
                            overlaySrc="http://pngimg.com/uploads/circle/circle_PNG63.png"
                            overlayWidth={300}
                            overlayHeight={300}
                        />
                    </TestCase>
                    <TestCase
                        itShould="overlayHeight	:number(200) /overlayWidth:number(100)/overlaySrc:string"
                        tags={['C_API']}>
                        <Text>下面示例展示覆盖图像的高宽以及url属性</Text>
                        <Text>overlayWidth:100 </Text>
                        <Text>overlayHeight:200 </Text>
                        <Text>
                            overlaySrc:http://pngimg.com/uploads/circle/circle_PNG63.png{' '}
                        </Text>
                        <SignatureScreen
                            style={{ height: 380 }}
                            overlaySrc="http://pngimg.com/uploads/circle/circle_PNG63.png"
                            overlayWidth={100}
                            overlayHeight={200}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function PenColor() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="penColor:red" tags={['C_API']}>
                        <Text>下面示例展示画笔颜色为红色</Text>
                        <SignatureScreen penColor="red" style={{ height: 380 }} />
                    </TestCase>
                    <TestCase itShould="penColor:blue" tags={['C_API']}>
                        <Text>下面示例展示画笔颜色为蓝色</Text>
                        <SignatureScreen penColor="blue" style={{ height: 380 }} />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function Rotated() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="rotated:boolean" tags={['C_API']}>
                        <Text>下面示例展示将签名版旋转90</Text>
                        <SignatureScreen
                            style={{ height: 380 }}
                            bgSrc="https://via.placeholder.com/300x200/ff726b"
                            bgWidth={300}
                            bgHeight={300}
                            rotated={true}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function Onstyle() {
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="style:object" tags={['C_API']}>
                        <Text>包装视图的样式 height: 380,width:300 </Text>
                        <SignatureScreen style={{ height: 380, width: 300 }} />
                        <Text>包装视图的样式 height: 400,width:340,backgroundColor:'blue'</Text>
                        <SignatureScreen style={{ height: 400, width: 340, backgroundColor: 'blue' }} />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function TrimWhitespace() {
    const [TrimWhitespace, setTrimWhitespace] = useState('');
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="trimWhitespace:true" tags={['C_API']}>
                        <Text>修剪空白,只保留图像 </Text>
                        <Text>{TrimWhitespace} </Text>
                        <SignatureScreen
                            onOK={e => {
                                setTrimWhitespace(e);
                            }}
                            trimWhitespace={true}
                            style={{ height: 380 }}
                        />
                    </TestCase>
                    <TestCase itShould="trimWhitespace:false" tags={['C_API']}>
                        <Text>修剪空白,只保留图像 </Text>
                        <Text>{TrimWhitespace} </Text>
                        <SignatureScreen
                            onOK={e => {
                                setTrimWhitespace(e);
                            }}
                            trimWhitespace={false}
                            style={{ height: 380 }}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function WebStyle() {
    const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;

    const styles = `.m-signature-pad--footer
    .button {
      background-color: blue;
      color: #FFF;
    }`;

    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="WebStyle:string" tags={['C_API']}>
                        <Text>自定义webStyle</Text>
                        <SignatureScreen style={{ height: 380 }} webStyle={style} />

                        <Text>自定义webStyles</Text>
                        <SignatureScreen style={{ height: 380 }} webStyle={styles} />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}
export function ClearSignature() {
    const ClearSignatureRef = useRef();
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="clearSignature:funtion" tags={['C_API']}>
                        <Button
                            title="点击清除当前签名"
                            onPress={() => {
                                ClearSignatureRef.current.clearSignature();
                            }}
                        />
                        <Text>清除当前签名 </Text>
                        <SignatureScreen style={{ height: 380 }} ref={ClearSignatureRef} />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function ChangePenColor() {
    const ChangePenColorRef = useRef();
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="changePenColor:funtion(color)" tags={['C_API']}>
                        <Button
                            title="点击改变笔的颜色为红色"
                            onPress={() => {
                                ChangePenColorRef.current.changePenColor('red');
                            }}
                        />
                        <Button
                            title="点击改变笔的颜色为蓝色"
                            onPress={() => {
                                ChangePenColorRef.current.changePenColor('blue');
                            }}
                        />
                        <SignatureScreen style={{ height: 380 }} ref={ChangePenColorRef} />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function ChangePenSize() {
    const ChangePenSizeRef = useRef();
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase
                        itShould="changePenSize:funtion(minW, maxW)"
                        tags={['C_API']}>
                        <Button
                            title="点击改变笔的尺寸为(1,3)"
                            onPress={() => {
                                ChangePenSizeRef.current.changePenSize(1, 3);
                            }}
                        />
                        <Button
                            title="点击改变笔的尺寸为(5,10)"
                            onPress={() => {
                                ChangePenSizeRef.current.changePenSize(5, 10);
                            }}
                        />
                        <SignatureScreen style={{ height: 380 }} ref={ChangePenSizeRef} />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function Draw() {
    const DrawRef = useRef();
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="draw:funtion/erase:function" tags={['C_API']}>
                        <Button
                            title="点击启用绘图签名"
                            onPress={() => {
                                DrawRef.current.draw();
                            }}
                        />
                        <Button
                            title="点击启用擦除签名"
                            onPress={() => {
                                DrawRef.current.erase();
                            }}
                        />
                        <SignatureScreen style={{ height: 380 }} ref={DrawRef} />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function GetData() {
    const [getDatas, setGetData] = useState('点击按钮时触发回调');
    const GetDataRef = useRef();
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="getData:funtion" tags={['C_API']}>
                        <Button
                            title="点击获取当前签名数据"
                            onPress={() => {
                                GetDataRef.current.getData();
                            }}
                        />
                        <Text>{getDatas}</Text>
                        <SignatureScreen
                            onGetData={e => {
                                setGetData(e);
                            }}
                            style={{ height: 380 }}
                            ref={GetDataRef}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function ReadSignature() {
    const [baseData, setBaseData] = useState('点击按钮获取base64数据');

    const ReadSignatureRef = useRef();
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="readSignature:funtion" tags={['C_API']}>
                        <Text> {baseData} </Text>
                        <Button
                            title="点击获取当前签名的Base64数据"
                            onPress={() => {
                                ReadSignatureRef.current.readSignature();
                            }}
                        />
                        <SignatureScreen
                            onOK={e => {
                                setBaseData(e);
                            }}
                            style={{ height: 380 }}
                            ref={ReadSignatureRef}
                        />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function Undo() {
    const UndoRef = useRef();
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="undo:funtion" tags={['C_API']}>
                        <Button
                            title="点击撤销上一笔"
                            onPress={() => {
                                UndoRef.current.undo();
                            }}
                        />
                        <SignatureScreen style={{ height: 380 }} ref={UndoRef} />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}

export function Redo() {
    const RedoRef = useRef();
    return (
        <ScrollView>
            <Tester style={{ flex: 1 }}>
                <TestSuite name="SignatureScreen">
                    <TestCase itShould="redo:funtion" tags={['C_API']}>
                        <Button
                            title="点击撤销上一笔"
                            onPress={() => {
                                RedoRef.current.undo();
                            }}
                        />
                        <Button
                            title="点击重做(恢复上一笔的提交)"
                            onPress={() => {
                                RedoRef.current.redo();
                            }}
                        />
                        <SignatureScreen style={{ height: 380 }} ref={RedoRef} />
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>
    );
}