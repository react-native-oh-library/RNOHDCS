import { Text, View, TouchableHighlight, Platform, TextInput, ScrollView } from 'react-native';
import { LogicalTestCase, TestSuite, TestCase as _TestCase, Tester } from '@rnoh/testerino';
import { SmartManualTestCaseProps } from '@rnoh/testerino/src/react-native/ManualTestCase';
import {
    MemoryRouter as Router, Outlet, useRoutes, useNavigate, useOutlet, Route, Routes, Navigate, useParams, useLocation
} from "react-router-dom";
import React from 'react';

type TesterTag = 'dev';

type TesterHarmonySkipProp =
    | boolean
    | string
    | {
        arkTS: string | boolean;
        cAPI: string | boolean;
    };

type TesterSkipProp =
    | {
        android: string | boolean;
        harmony: TesterHarmonySkipProp;
    }
    | string;


const PALETTE = {
    REACT_CYAN_LIGHT: 'hsl(193, 95%, 68%)',
    REACT_CYAN_DARK: 'hsl(193, 95%, 30%)',
};

const Button = ({ label, onPress }: { onPress: () => void; label: string }) => {
    return (
        <TouchableHighlight
            underlayColor={PALETTE.REACT_CYAN_DARK}
            style={{
                paddingVertical: 6,
                paddingHorizontal: 12,
                backgroundColor: PALETTE.REACT_CYAN_LIGHT,
                borderWidth: 2,
                borderColor: PALETTE.REACT_CYAN_DARK,
            }}
            onPress={onPress}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>
                {label}
            </Text>
        </TouchableHighlight>
    );
}

const prepareHarmonySkipProp = (
    skipProp: TesterHarmonySkipProp,
): string | boolean => {
    if (typeof skipProp === 'string' || typeof skipProp === 'boolean') {
        return skipProp;
    } else {
        return 'rnohArchitecture' in Platform.constants &&
            Platform.constants.rnohArchitecture === 'C_API'
            ? skipProp?.cAPI
            : skipProp?.arkTS;
    }
}

const prepareSkipProp = (skipProp: TesterSkipProp | undefined) => {
    return skipProp
        ? typeof skipProp === 'string'
            ? skipProp
            : Platform.select({
                android: skipProp?.android,
                harmony: prepareHarmonySkipProp(skipProp?.harmony),
            })
        : undefined;
}

const TestCase = {
    Example: ({
        itShould,
        children,
        skip,
        tags,
        modal,
    }: {
        itShould: string;
        children: any;
        modal?: boolean;
        skip?: TesterSkipProp;
        tags?: TesterTag[];
    }) => {
        return (
            <_TestCase
                itShould={itShould}
                modal={modal}
                tags={tags}
                skip={prepareSkipProp(skip)}>
                {children}
            </_TestCase>
        );
    },
    Manual: <TState = undefined>({
        itShould,
        skip,
        tags,
        modal,
        initialState,
        arrange,
        assert,
    }: {
        itShould: string;
        skip?: TesterSkipProp;
        tags?: TesterTag[];
        modal?: boolean;
        initialState: TState;
        arrange: SmartManualTestCaseProps<TState>['arrange'];
        assert: SmartManualTestCaseProps<TState>['assert'];
    }) => {
        return (
            <_TestCase
                itShould={itShould}
                modal={modal}
                tags={tags}
                skip={prepareSkipProp(skip)}
                initialState={initialState}
                arrange={arrange}
                assert={assert}
            />
        );
    },
    Logical: ({
        itShould,
        skip,
        tags,
        fn,
    }: {
        itShould: string;
        skip?: TesterSkipProp;
        tags?: TesterTag[];
        fn: React.ComponentProps<typeof LogicalTestCase>['fn'];
    }) => {
        return (
            <_TestCase
                itShould={itShould}
                skip={prepareSkipProp(skip)}
                tags={tags}
                fn={fn}
            />
        );
    },
};

const Home = () => {
    const navigate = useNavigate();
    return (
        <View>
            <Text>Home</Text>
            <Button label="To Login by navigate(/Login)" onPress={() => {
                navigate("/Login");
            }} />
            <Button label="To Login by navigate(/Index)" onPress={() => {
                navigate("/Index");
            }} />
            <Button label="Show Tasks by navigate(/Detail)" onPress={() => {
                navigate("/Detail", {
                    replace: false,
                    relative: 'route',
                    preventScrollReset: true,
                });
            }} />
            <Outlet />
        </View>
    );
};

const Login = () => {
    return (
        <View><Text>Login路由内容</Text></View>
    );
};

const Index = () => {
    return (
        <View><Text>Index路由内容</Text></View>
    );
};

const Detail = () => {
    return (
        <View><Text>Detail路由内容</Text></View>
    );
};

const RouteDetail = () => {
    return (
        <View><Text>RouteDetail路由内容</Text></View>
    );
};

const RouteIndex = () => {
    return (
        <View><Text>RouteIndex路由内容</Text></View>
    );
};


const GetRoutes = () => {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: '/Login',
                    element: <Login />
                },
                {
                    path: '/Index',
                    element: <Index />
                },
                {
                    path: '/Detail',
                    element: <Detail />
                }
            ]
        }
    ]);
}


const UseOutletHome = (props: any) => {
    const navigate = useNavigate();
    const outlet = useOutlet();
    return (
        <View>
            <Text>Home</Text>
            <Button label="To Login by navigate(/Login)" onPress={() => {
                navigate("/Login");
            }} />
            <Button label="To Login by navigate(/Index)" onPress={() => {
                navigate("/Index");
            }} />
            <Button label="Show Tasks by navigate(/Detail)" onPress={() => {
                navigate("/Detail", {
                    replace: false,
                    relative: 'route',
                    preventScrollReset: true,
                });
            }} />
            <Outlet />
            <Text>当前激活子路由内容为：</Text>
            {props.parentState && (outlet)}
        </View>
    );
}


const HomeMessages = () => {
    return (
        <View style={{ height: 200, backgroundColor: 'yellow' }}>
            <Text>Outlet Demo: HomeMessages page!</Text>
        </View>
    );
};

const HomeTasks = () => {
    return (
        <View style={{ height: 200, backgroundColor: 'blue' }}>
            <Text>Outlet Demo: HomeTasks page!</Text>
        </View>
    );
};

const Team = () => {
    const { teamId } = useParams();
    return (
        <View style={{ height: 200, backgroundColor: 'blue' }}>
            <Text>Outlet Demo: Team page!</Text>
            <Text>{`----------ID=${teamId}-------------`}</Text>
        </View>
    );
};
const LocationTest = () => {
    const location = useLocation();
    return (
        <View style={{ backgroundColor: "blue" }}>
            <Text>---- {location.key.length == 0 ? "LocationTest page!" : location.key} ----</Text>
            <Text>pathname:{location.pathname} search:{location.search} hash:{location.hash} </Text>
        </View>
    );
};

export default function ReactRouterDomTest() {


    return (
        <ScrollView>
            <Tester>
                <TestSuite name="ReactRouterDomTest">
                    <TestCase.Manual
                        itShould="useRoutes and useNavigate "
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            if (state.changeStatus) {
                                return (
                                    <Router>
                                        <GetRoutes></GetRoutes>
                                        <Button
                                            label="点击"
                                            onPress={() => {
                                                setState(prev => ({ ...prev, changeStatus: false }));
                                            }}
                                        />
                                    </Router>
                                );
                            }
                            return (
                                <Router>
                                    <Routes>
                                        <Route path="/" element={<Detail />}>
                                        </Route>
                                    </Routes>
                                    <Button
                                        label="点击"
                                        onPress={() => {
                                            setState(prev => ({ ...prev, changeStatus: true }));
                                        }}
                                    />
                                </Router>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase.Manual>
                    <View style={{ height: 30 }}></View>
                    <TestCase.Manual
                        itShould="MemoryRouter"
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            return (
                                <Router>
                                    <Routes>
                                        <Route path="/" element={<Detail />}>
                                        </Route>
                                        <Route path="/Index" element={<Index />}></Route>
                                    </Routes>
                                    <Button
                                        label="点击"
                                        onPress={() => {
                                            setState(prev => ({ ...prev, changeStatus: true }));
                                        }}
                                    />
                                </Router>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase.Manual>
                    <View style={{ height: 30 }}></View>
                    <TestCase.Manual
                        itShould="UseOutlet"
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            return (
                                <Router>
                                    <Routes>
                                        <Route path="/" element={<UseOutletHome parentState={state.changeStatus}></UseOutletHome>}>
                                            <Route path="/Login" element={<Login />}></Route>
                                            <Route path="/Index" element={<Index />}></Route>
                                            <Route path="/Detail" element={<Detail />}></Route>
                                        </Route>
                                    </Routes>
                                    <Button
                                        label="点击"
                                        onPress={() => {
                                            setState(prev => ({ ...prev, changeStatus: true }));
                                        }}
                                    />
                                </Router>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase.Manual>

                    <View style={{ height: 30 }}></View>
                    <TestCase.Manual
                        itShould="Outlet"
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            const [messages, setMessages] = React.useState(false);
                            return (
                                <>
                                    <Router>
                                        <Routes>
                                            <Route path='/' element={<View style={{ backgroundColor: "green", }}>

                                                <Text>Welcome to the home page!</Text>
                                                <Text>-------{messages ? "messages" : "tasks"}-------</Text>
                                                {messages && (<Navigate to="/messages" replace={false} />)}
                                                {!messages && (<Navigate to="/tasks" replace={false} />)}
                                                <Outlet />

                                            </View>} >
                                                <Route
                                                    path="messages"
                                                    element={<HomeMessages />}
                                                />
                                                <Route path="tasks" element={<HomeTasks />} />
                                            </Route>
                                        </Routes>
                                    </Router>
                                    <Button
                                        label={`切换按钮:${!messages ? "messages" : "tasks"}`}
                                        onPress={() => {
                                            setMessages(!messages)
                                            setState(prev => ({ ...prev, changeStatus: true }));

                                        }}
                                    />
                                </>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase.Manual>

                    <View style={{ height: 30 }}></View>
                    <TestCase.Manual
                        itShould="Navigate"
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            const [messages, setMessages] = React.useState(false);

                            const [username, setUsername] = React.useState('');
                            const location = {
                                pathname: '/locationTest',
                                search: '?id=1&name=test',
                                hash: '#section1',
                                key: "locationTest page",
                            };
                            return (
                                <>
                                    <Router>
                                        <Routes location={location}>
                                            <Route path='/' element={<View style={{ backgroundColor: "green", }}>

                                                <Text>Navigate text</Text>
                                                <TextInput placeholder="Input your username" style={{
                                                    color: 'black', height: 40, fontSize: 16, backgroundColor: 'white', borderColor: "blue", borderWidth: 1, borderRadius: 20, paddingLeft: 20
                                                }} onChangeText={(value) => {
                                                    setUsername(value);
                                                }}
                                                />

                                                {username.length < 5 && (<Text>用户名最少5位   </Text>)}
                                                {messages && (<Navigate to={`${username}`} replace={true} />)}
                                                <Outlet />

                                            </View>} >
                                                <Route
                                                    path=":teamId"
                                                    element={<Team />}
                                                />

                                            </Route>
                                        </Routes>
                                    </Router>
                                    <Button
                                        label={`点击显示 Navigate 子路由`}
                                        onPress={() => {
                                            setMessages(!messages)
                                            setState(prev => ({ ...prev, changeStatus: true }));

                                        }}
                                    />
                                </>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase.Manual>
                    <View style={{ height: 30 }}></View>
                    <TestCase.Manual
                        itShould="useLocation"
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            const [messages, setMessages] = React.useState(false);
                            return (
                                <>
                                    <Router>
                                        <Routes>
                                            <Route path='/' element={<View style={{ backgroundColor: "green", }}>

                                                <Text>Welcome to the home page!</Text>
                                                <Text>-------{messages ? "messages" : "locationTest"}-------</Text>
                                                {messages && (<Navigate to="/messages" replace={true} />)}
                                                {!messages && (<Navigate to="/locationTest" replace={true} />)}
                                                <Outlet />

                                            </View>} >
                                                <Route
                                                    path="messages"
                                                    element={<HomeMessages />}
                                                />
                                                <Route path="locationTest" element={<LocationTest />} />
                                            </Route>
                                        </Routes>
                                    </Router>
                                    <Button
                                        label={`点击切换按钮:${!messages ? "messages" : "locationTest"}`}
                                        onPress={() => {
                                            setMessages(!messages)
                                            setState(prev => ({ ...prev, changeStatus: true }));

                                        }}
                                    />
                                </>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase.Manual>
                    <TestCase.Manual
                        itShould="Routes and Route"
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            return (
                                <Router>
                                    <Routes>
                                        <Route path="/" element={<RouteDetail />}>
                                        </Route>
                                        <Route path="/Index" element={<RouteIndex />}></Route>
                                    </Routes>
                                    <Button
                                        label="点击"
                                        onPress={() => {
                                            setState(prev => ({ ...prev, changeStatus: true }));
                                        }}
                                    />
                                </Router>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase.Manual>
                </TestSuite>
            </Tester>
        </ScrollView>

    )
}