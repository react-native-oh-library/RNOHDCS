import { Text, View, TouchableHighlight, Platform, TextInput, ScrollView } from 'react-native';
import { LogicalTestCase, TestSuite, TestCase, Tester } from '@rnoh/testerino';
import {
    MemoryRouter as Router,
    Outlet,
    useMatch,
    useInRouterContext,
    NavigationType,
    useOutletContext,
    useHref,
    useAsyncValue,
    useAsyncError,
    parsePath,
    useNavigationType,
    useRoutes,
    useNavigate,
    useOutlet,
    Route,
    Routes,
    Navigate,
    useParams,
    useLocation,
    Await
} from 'react-router-dom';
import React, { useState } from 'react';

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

const Home = () => {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0);
    return (
        <View>
            <Text>Home</Text>
            <Button label='To Login by navigate(/Login)' onPress={() => {
                navigate('/Login');
            }} />
            <Button label='To Login by navigate(/Index1)' onPress={() => {
                navigate('/Index1');
            }} />
            <Button label='Show Tasks by navigate(/Detail)' onPress={() => {
                navigate('/Detail', {
                    replace: false,
                    relative: 'route',
                    preventScrollReset: true,
                });
            }} />
            <Outlet context={[count, setCount]} />
        </View>
    );
};

const Login = () => {
    return (
        <View><Text>Login路由内容</Text></View>
    );
};

const Index1 = () => {
    const [count, setCount] = useOutletContext();
    const increment = () => setCount(2);
    return (
        <View>
            <Text>Index路由内容</Text>
            <Button label='useOutletContext' onPress={increment} />
            <Text>{count}</Text>
        </View>
    );
};

const Index = () => {
    return (
        <View>
            <Text>Index路由内容</Text>
        </View>
    );
};

const Detail = () => {
    return (
        <View style={{ display: 'flex' }}>
            <Text>Detail路由内容</Text>
            <Text>{`-----${useInRouterContext()}`}</Text>
        </View>
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
            path: '/',
            element: <Home />,
            children: [
                {
                    path: '/Login',
                    element: <Login />
                },
                {
                    path: '/Index1',
                    element: <Index1 />
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
    const [count, setCount] = React.useState(0);
    return (
        <View>
            <Text>Home</Text>
            <Button label='To Login by navigate(/Login)' onPress={() => {
                navigate('/Login');
            }} />
            <Button label='To Login by navigate(/Index)' onPress={() => {
                navigate('/Index');
            }} />
            <Button label='Show Tasks by navigate(/Detail)' onPress={() => {
                navigate('/Detail', {
                    replace: false,
                    relative: 'route',
                    preventScrollReset: true,
                });
            }} />
            <Outlet context={[count, setCount]} />
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

const NavigateView = () => {
    return (
        <View style={{ height: 200, backgroundColor: 'blue' }}>
            <Text>NavigateView page!</Text>
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
        <View style={{ backgroundColor: 'blue' }}>
            <Text>---- {location.key.length == 0 ? 'LocationTest page!' : location.key} ----</Text>
            <Text>pathname:{location.pathname} search:{location.search} hash:{location.hash} </Text>
        </View>
    );
};


const Users = () => {
    const { id } = useParams();
    return (
        <View>
            <Text>User路由内容</Text><Text>{`----------ID=${id}-------------`}</Text>
        </View>

    );
};

const Users2 = () => {
    const { id } = useParams();
    return (
        <View><Text>User2路由内容</Text><Text>{`----------ID=${id}-------------`}</Text></View>

    );
};
const LayoutPage = () => {
    return useRoutes([
        {
            path: '/',
            element: <Navigation />,
            children: [

                {
                    path: '/Users',
                    element: <Users />
                },
                {
                    path: '/Users2',
                    element: <Users2 />
                },
            ]
        }
    ]);
}

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Text>Navigation</Text>
            <Button label='Users组件跳转' onPress={() => {
                navigate('/Users');
            }} />
            <Button label='Users2组件跳转' onPress={() => {
                navigate('/Users2');
            }} />
            <Outlet />
        </View>
    );
};

function MatchPath({ path, Comp }) {
    let match = useMatch(path);
    return match ? <Comp {...match} /> : null;
}

const Users1 = () => {
    return (
        <View>
            <Text>路由内容</Text>
            <Text>{`type=${useNavigationType()}`}</Text>
            <Text>{`Pop=${NavigationType.Pop}`}</Text>
            <Text>{`Pop=${NavigationType.Push}`}</Text>
            <Text>{`Pop=${NavigationType.Replace}`}</Text>
        </View>

    );
};

const Users4 = ({ to }: { to: string }) => {
    return <View>
        <Text>{useHref(to)}</Text>
    </View>
}

const TypePage = () => {
    return useRoutes([
        {
            path: '/',
            element: <NavigationTypePage />,
            children: [

                {
                    path: '/Users1',
                    element: <Users1 />
                },

                {
                    path: '/Users4',
                    element: <Users4 to='Users1' />
                },
            ]
        },
        {

        }
    ]);
}

const NavigationTypePage = () => {
    const navigate = useNavigate();
    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Text>Navigation</Text>
            <Button label='Navigation组件跳转' onPress={() => {
                navigate('/Users1');
            }} />
            <Outlet />
        </View>
    );
};
function ErrorElement() {
    const error = useAsyncError();
    return (
        <Text>error: {error}</Text>
    );
}

function ProductVariants() {
    const variants = useAsyncValue();
    return <Text>AsyncValue: {variants}</Text>
}

const Users6 = () => {
    const pares = parsePath('/Users6')
    return (
        <View>
            <Text>路由名称</Text>
            <Text>{`----------parsePath=${pares.pathname}-------------`}</Text>
        </View>

    );
};

const AsyncValue = () => {
    const rand = () => Math.round(Math.random() * 100);
    const resolve = (d: string, ms: number) =>
        new Promise((r, rej) => setTimeout(() => r(`${d} - ${rand()}`), ms));
    return (
        <View>
            <React.Suspense fallback={<Text>AsyncValue</Text>}>
                <Await resolve={resolve("Lazy 1", 1000)} errorElement={<ErrorElement />}>
                    <ProductVariants />
                </Await>
            </React.Suspense>
        </View>
    );
};

const AsyncError = () => {
        const resolve = (d: string, ms: number) =>
        new Promise((r, rej) => setTimeout(() => rej('错误信息')))
    return (
        <View>
            <React.Suspense fallback={<Text>AsyncError</Text>}>
                <Await resolve={resolve("Lazy 1", 1000)} errorElement={<ErrorElement />}>
                    <ProductVariants />
                </Await>
            </React.Suspense>
        </View>

    );
};

const HrefView = () => {
    return useRoutes([
        {
            path: '/',
            element: <HrefPage />,
            children: [

                {
                    path: '/Users1',
                    element: <Users1 />
                },
                {
                    path: '/Users4',
                    element: <Users4 to='Users1' />
                },
                {
                    path: '/Users6',
                    element: <Users6 />
                },
            ]
        },
        {

        }
    ]);
}

const AsyncView = () => {
    return useRoutes([
        {
            path: '/',
            element: <AsyncPage />,
            children: [

                {
                    path: '/AsyncValue',
                    element: <AsyncValue />
                },
                {
                    path: '/AsyncError',
                    element: <AsyncError/>
                },
            ]
        },
        {

        }
    ]);
}


const HrefPage = () => {
    const navigate = useNavigate();
    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Text>Navigation</Text>
            <Button label='模拟路径' onPress={() => {
                navigate('/Users4');
            }} />
            <Button label='捕获路径' onPress={() => {
                navigate('/Users6');
            }} />
            <Outlet />
        </View>
    );
};

const AsyncPage = () => {
    const navigate = useNavigate();
    return (
        <View style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Text>useAsyncValue and useAsyncError</Text>
            <Button label='useAsyncValue' onPress={() => {
                navigate('/AsyncValue');
            }} />
            <Button label='useAsyncError' onPress={() => {
                navigate('/AsyncError');
            }} />
            <Outlet />
        </View>
    );
};


export default function ReactRouterDomTest() {
    return (
        <ScrollView>
            <Tester>
                <TestSuite name='ReactRouterDomTest'>
                    <TestCase
                        itShould='useRoutes and useNavigate and  useOutletContext '
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            if (state.changeStatus) {
                                return (
                                    <Router>
                                        <GetRoutes></GetRoutes>
                                        <Button
                                            label='点击'
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
                                        <Route path='/' element={<Detail />}>
                                        </Route>
                                    </Routes>
                                    <Button
                                        label='点击'
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
                    </TestCase>
                    <View style={{ height: 30 }}></View>
                    <TestCase
                        itShould='MemoryRouter'
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            const [messages, setMessages] = React.useState(false);
                            return (
                                <Router>
                                    <Routes>
                                        {messages && <Route path='/' element={<Detail />}>
                                        </Route>}
                                        {/* <Route path='/Index' element={<Index />}></Route> */}
                                    </Routes>
                                    <Button
                                        label='点击显示MemoryRouter路由'
                                        onPress={() => {
                                            setMessages(!messages)
                                            setState(prev => ({ ...prev, changeStatus: true }));

                                        }}
                                    />
                                </Router>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase>
                    <View style={{ height: 30 }}></View>
                    <TestCase
                        itShould='UseOutlet and useInRouterContext'
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            return (
                                <Router>
                                    <Routes>
                                        <Route path='/' element={<UseOutletHome parentState={state.changeStatus}></UseOutletHome>}>
                                            <Route path='/Login' element={<Login />}></Route>
                                            <Route path='/Index' element={<Index />}></Route>
                                            <Route path='/Detail' element={<Detail />}></Route>
                                        </Route>
                                    </Routes>
                                    <Button
                                        label='点击'
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
                    </TestCase>

                    <View style={{ height: 30 }}></View>
                    <TestCase
                        itShould='Outlet'
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            const [messages, setMessages] = React.useState(false);
                            return (
                                <>
                                    <Router>
                                        <Routes>
                                            <Route path='/' element={<View style={{ backgroundColor: 'green', }}>

                                                <Text>Welcome to the home page!</Text>
                                                <Text>-------{messages ? 'messages' : 'tasks'}-------</Text>
                                                {messages && (<Navigate to='/messages' replace={false} />)}
                                                {!messages && (<Navigate to='/tasks' replace={false} />)}
                                                <Outlet />

                                            </View>} >
                                                <Route
                                                    path='messages'
                                                    element={<HomeMessages />}
                                                />
                                                <Route path='tasks' element={<HomeTasks />} />
                                            </Route>
                                        </Routes>
                                    </Router>
                                    <Button
                                        label={`切换按钮:${!messages ? 'messages' : 'tasks'}`}
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
                    </TestCase>

                    <View style={{ height: 30 }}></View>
                    <TestCase
                        itShould='Navigate'
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
                                key: 'locationTest page',
                            };
                            return (
                                <>
                                    <Router>
                                        <Routes>
                                            <Route path='/' element={<View style={{ backgroundColor: 'green', }}>

                                                <Text>Welcome to the Navigate page!</Text>
                                                {messages && (<Navigate to='/messages' replace={true} />)}
                                                <Outlet />
                                            </View>} >
                                                <Route
                                                    path='messages'
                                                    element={<NavigateView />}
                                                />
                                            </Route>
                                        </Routes>
                                    </Router>
                                    <Button
                                        label='点击显示Navigate路由'
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
                    </TestCase>
                    <View style={{ height: 30 }}></View>
                    <TestCase
                        itShould='useLocation'
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            const [messages, setMessages] = React.useState(false);
                            return (
                                <>
                                    <Router>
                                        <Routes>
                                            <Route path='/' element={<View style={{ backgroundColor: 'green', }}>

                                                <Text>Welcome to the home page!</Text>
                                                <Text>-------{messages ? 'messages' : 'locationTest'}-------</Text>
                                                {messages && (<Navigate to='/messages' replace={true} />)}
                                                {!messages && (<Navigate to='/locationTest' replace={true} />)}
                                                <Outlet />

                                            </View>} >
                                                <Route
                                                    path='messages'
                                                    element={<HomeMessages />}
                                                />
                                                <Route path='locationTest' element={<LocationTest />} />
                                            </Route>
                                        </Routes>
                                    </Router>
                                    <Button
                                        label={`点击切换按钮:${!messages ? 'messages' : 'locationTest'}`}
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
                    </TestCase>
                    <TestCase
                        itShould='Routes and Route'
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            const [messages, setMessages] = React.useState(false);
                            return (
                                <Router>
                                    <Routes>
                                        {messages && <Route path='/' element={<RouteDetail />}></Route>}
                                        {/* <Route path='/Index' element={<RouteIndex />}></Route> */}
                                    </Routes>
                                    <Button
                                        label='点击显示Route路由'
                                        onPress={() => {
                                            setMessages(!messages)
                                            setState(prev => ({ ...prev, changeStatus: true }));

                                        }}
                                    />
                                </Router>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase>
                    <TestCase
                        itShould='useNavigate and useParams '
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            return (
                                <Router>
                                    <LayoutPage></LayoutPage>
                                    <Routes>
                                        <Route
                                            path=':teamId'
                                            element={<Team />}
                                        />
                                    </Routes>
                                </Router>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase>
                    <TestCase
                        itShould='navigationType and useNavigationType'
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            return (
                                <Router>
                                    <TypePage></TypePage>
                                </Router>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase>
                    <TestCase
                        itShould='useHref'
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            return (
                                <Router>
                                    <HrefView></HrefView>
                                </Router>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase>
                    <TestCase
                        itShould='useAsyncValue and useAsyncError'
                        initialState={{
                            changeStatus: false
                        }}
                        arrange={({ setState, state }) => {
                            return (
                                <Router>
                                    <AsyncView></AsyncView>
                                </Router>
                            );
                        }}
                        assert={({ expect, state }) => {
                            expect(state.changeStatus).to.be.true;
                        }}>
                    </TestCase>
                </TestSuite>
            </Tester>
        </ScrollView>

    )
}