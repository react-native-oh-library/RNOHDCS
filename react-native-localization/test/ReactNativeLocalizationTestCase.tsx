import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
} from 'react-native';
import {
    Tester,
    TestSuite,
    TestCase
} from '@rnoh/testerino';
import Localize from 'react-native-localization';

// 定义本地化内容
const strings = new Localize({
    en: {//英语
        welcome: 'Welcome',
        question: 'I\'d like some {0} and {1}, or just {0}',
        bread: 'bread',
        butter: 'butter',
        greeting: 'Hello~~~',
        currentlanguage: 'Current Language',
        availableLanguages: 'Available Languages',
        interfaceLanguage: 'The System Language'
    },
    zh: {//中文
        welcome: '欢迎',
        question: '我想要一些{0}和{1}，或者只要{0}',
        bread: '面包',
        butter: '黄油',
        greeting: '你好~~~',
        currentlanguage: '当前语言',
        availableLanguages: '当前可用语言列表',
        interfaceLanguage: '当前系统语言'
    },
    fr: {//法语
        welcome: 'Bienvenue',
        question: 'Je voudrais un peu de {0} et {1}, ou juste {0}',
        bread: 'pain',
        butter: 'beurre',
        greeting: 'Bonjour~~~',
        currentlanguage: 'Langue actuelle',
        availableLanguages: 'Langues disponibles',
        interfaceLanguage: 'Langue du système'
    },
});

export function LocalizationTestCase() {
    const [language, setLanguage] = useState(strings.getLanguage());
    const changeLanguage = (lang: string) => {
        strings.setLanguage(lang);
        setLanguage(strings.getLanguage());
    };

    const [buttonCurrentLanguageTitle, setCueerntLanguageTitle] = useState('');
    const handleGetLanguage = () => {
        setCueerntLanguageTitle(strings.getLanguage());
    };

    const [buttonSystemLanguageTitle, setSystemLanguageTitle] = useState('');
    const handleGetSystemLanguage = () => {
        setSystemLanguageTitle(strings.getInterfaceLanguage());
    };


    const [buttonFormatString, formatString] = useState('');
    const handleFormatString = () => {
        let name = strings.formatString(strings.question, strings.bread, strings.butter);
        formatString(name);
    };

    let [buttonGetAvailableLanguages, getAvailableLanguages] = useState('');
    const handleGetAvailableLanguage = () => {
        getAvailableLanguages(strings.getAvailableLanguages().join('、 '));
    };

    const [buttonGetString, getString] = useState('');
    const handleGetString = () => {
        getString(strings.getString("greeting"));
    };

    const [buttonsetContent, setContent] = useState('');
    const handleSetContent = () => {
        strings.setContent({
            ko: { // 韩语
                welcome: '환영합니다',
                question: '저는 {0}와 {1}이 조금 필요합니다, 아니면 그냥 {0}만요',
                bread: '빵',
                butter: '버터',
                greeting: '안녕하세요~~~',
                currentlanguage: '현재 언어',
                availableLanguages: '사용 가능한 언어',
                interfaceLanguage: '시스템 언어'
            }
        })
        setContent(strings.welcome + strings.question + strings.bread + strings.greeting)
    };

    return (
        <View style={styles.screen}>
            <Tester style={{ flex: 1, backgroundColor: 'black' }}>
                <ScrollView>
                    <TestSuite name="ReactNativeLocalization">
                        {/* testcase_01切换语言 setLanguage API */}
                        <View style={{ justifyContent: 'space-between', marginBottom: 30 }}>
                            <Text style={styles.text}>
                                {strings.greeting}
                            </Text>
                            <Text style={styles.text}>
                                {strings.welcome}
                            </Text>
                            <TestCase
                                tags={['C_API']}
                                itShould="setLanguage('en')"
                                initialState={false}
                                arrange={({ setState, reset }) => (
                                    <Button
                                        title="切换成英语"
                                        onPress={() => {
                                            changeLanguage('en');
                                            if (strings.getLanguage() == 'en') {
                                                setState(true);
                                            }
                                        }}
                                    />
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
                            <TestCase
                                tags={['C_API']}
                                itShould="setLanguage('fr')"
                                initialState={false}
                                arrange={({ setState, reset }) => (
                                    <Button
                                        title="切换成法语"
                                        onPress={() => {
                                            changeLanguage('fr');
                                            if (strings.getLanguage() == 'fr') {
                                                setState(true);
                                            }

                                        }}
                                    />
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
                            <TestCase
                                tags={['C_API']}
                                itShould="setLanguage('zh')"
                                initialState={false}
                                arrange={({ setState, reset }) => (
                                    <Button
                                        title="切换成中文"
                                        onPress={() => {
                                            changeLanguage('zh');
                                            if (strings.getLanguage() == 'zh') {
                                                setState(true);
                                            }

                                        }}
                                    />
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
                        </View>

                        {/* testcase_02格式化传递的字符串 formatString API */}
                        <View style={{ justifyContent: 'space-between', marginBottom: 30 }}>
                            <Text style={styles.text}>
                                {buttonFormatString}
                            </Text>
                            <TestCase
                                tags={['C_API']}
                                itShould="formatString"
                                initialState={false}
                                arrange={({ setState, reset }) => (
                                    <Button
                                        title="调用formatString API"
                                        onPress={() => {
                                            { handleFormatString() }
                                            if (buttonFormatString != null) {
                                                setState(true);
                                            }
                                        }}
                                    />
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
                        </View>

                        {/* testcase_03获取当前显示的语言 getLanguage API */}
                        <TestCase
                            tags={['C_API']}
                            itShould="getLanguage()"
                            initialState={false}
                            arrange={({ setState, reset }) => (
                                <View>
                                    <Button
                                        title={"当前显示语言：" + buttonCurrentLanguageTitle}
                                        onPress={() => {
                                            if (['zh', 'en', 'fr', 'ko'].includes(strings.getLanguage())) {
                                                { handleGetLanguage() }
                                                setState(true);
                                            }
                                        }}
                                    />
                                </View>
                            )}
                            assert={({ state, expect }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        {/* testcase_04获取构造函数中传递的语言数组 getAvailableLanguages API */}
                        <TestCase
                            tags={['C_API']}
                            itShould="getAvailableLanguages()"
                            initialState={false}
                            arrange={({ setState, reset }) => (
                                <View>
                                    <Button
                                        title={"当前可用语言数组 : " + buttonGetAvailableLanguages}
                                        onPress={() => {
                                            { handleGetAvailableLanguage() }
                                            if (strings.getAvailableLanguages().length > 0) {
                                                setState(true);
                                            }
                                        }}
                                    />
                                </View>
                            )}
                            assert={({ state, expect }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        {/* testcase_05获取当前设备语言 getInterfaceLanguage API */}
                        <TestCase
                            tags={['C_API']}
                            itShould="getInterfaceLanguage()"
                            initialState={false}
                            arrange={({ setState, reset }) => (
                                <View>
                                    <Button
                                        title={"当前UE系统设置语言：" + buttonSystemLanguageTitle}
                                        onPress={() => {
                                            { handleGetSystemLanguage() }
                                            if (buttonSystemLanguageTitle != null) {
                                                setState(true);
                                            }
                                        }}
                                    />
                                </View>
                            )}
                            assert={({ state, expect }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        {/* testcase_06通过key值查询对应的字符 getString API */}
                        <TestCase
                            tags={['C_API']}
                            itShould="getString()"
                            initialState={false}
                            arrange={({ setState, reset }) => (
                                <View>
                                    <Button
                                        title={"getString返回值：" + buttonGetString}
                                        onPress={() => {
                                            { handleGetString() }
                                            if (buttonGetString != null) {
                                                setState(true);
                                            }
                                        }}
                                    />
                                </View>
                            )}
                            assert={({ state, expect }) => {
                                expect(state).to.be.true;
                            }}
                        />

                        {/* testcase_07  setContent API  使用 setContent 方法会覆盖整个对象。请注意：使用此方法将移除所有其他本地化内容，只保留当前的内容*/}
                        <View style={{ justifyContent: 'space-between', marginBottom: 30 }}>
                            <Text style={styles.text}>
                                {buttonsetContent}
                            </Text>
                            <TestCase
                                tags={['C_API']}
                                itShould="setContent()"
                                initialState={false}
                                arrange={({ setState, reset }) => (
                                    <View>
                                        <Button
                                            title={"调用setContent API接口"}
                                            onPress={() => {
                                                { handleSetContent() }
                                                if (buttonsetContent != null) {
                                                    setState(true);
                                                }
                                            }}
                                        />
                                    </View>
                                )}
                                assert={({ state, expect }) => {
                                    expect(state).to.be.true;
                                }}
                            />
                        </View>

                    </TestSuite>
                </ScrollView>
            </Tester>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        padding: 10,
        color: 'black',
        backgroundColor: 'white',
    },

    screen: {
        flex: 1,
        padding: 4,
        paddingTop: 10,
        backgroundColor: 'black',
        marginHorizontal: 4,
        marginVertical: 8,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


