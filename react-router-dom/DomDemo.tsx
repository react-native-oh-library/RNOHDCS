import React from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import {
  Route, Routes, Navigate, Outlet, useLocation,
  useNavigate,
  useOutlet,
  useRoutes,
  MemoryRouter as Router
} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const outlet = useOutlet();
  const [messages, setMessages] = React.useState(false);
  const [tasks, setTasks] = React.useState(false);
  return (
    <View>
      <Text>Welcome to the Home page!</Text>
      <Button title={`To Login by navigate("/login")`} onPress={() => {
        navigate("/login");
      }} />
      <Button title={"To Login by navigate(1)"} onPress={() => {
        navigate(1);
      }} />

      <Button title={"To detail by navigate(2)"} onPress={() => {
        navigate(2);
      }} />

      <Button title={"To Index3 by navigate(3) initialEntries下标"} onPress={() => {
        navigate(3);
        // 
      }} />

      <Button title={`To Index3 by navigate("/index3")`} onPress={() => {
        navigate("/index3");
      }} />
      <Button title={"Show messages by Navigate"} onPress={() => {
        setMessages(true)
        setTasks(false)
      }} />
      <Button title={`Show Tasks by navigate("/messages")`} onPress={() => {
        setTasks(true)
        setMessages(false)
        navigate("/messages", {
          state: {
          },
          replace: false,
          relative: 'route',
          preventScrollReset: false,
        });
      }} />
      <Button title={`Show Tasks by navigate("/tasks")`} onPress={() => {
        setTasks(true)
        setMessages(false)
        navigate("/tasks", {
          state: {
          },
          replace: false,
          relative: 'route',
          preventScrollReset: true,
        });
      }} />

      {messages && (<Navigate to="/messages" replace={false} />)}
      {tasks && (<Text>下面由Outlet生成</Text>)}
      {tasks && (<Outlet />)}
      {messages && (<Text>下面由useOutlet生成</Text>)}
      {messages && (outlet)}
    </View>
  );
};

const HomeMessages = () => {
  return (
    <View style={{ height: 200, backgroundColor: 'yellow' }}>
      <Text>Outlet Demo: HomeMessages page!</Text>
    </View>
  );
};

const HomeTasks = () => {
  return (
    <View style={{ height: 200, backgroundColor: 'red' }}>
      <Text>Outlet Demo: HomeTasks page!</Text>
    </View>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState(false);
  const [warning, setWarning] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const location = useLocation();

  return (
    <View>
      <Text>Welcome to the Login page!</Text>
      <Text>{location.state?.stateTest} </Text>
      <TextInput placeholder="Input your username" style={{
        color: 'black', height: 40, fontSize: 16, backgroundColor: 'white', borderColor: "blue", borderWidth: 1, borderRadius: 20, paddingLeft: 20
      }}
        onChangeText={(value) => {
          setUsername(value);
          setWarning(value.length == 0)
        }} />
      {warning && (<Text style={{ color: 'red' }}>username is empty.</Text>)}
      <Button title={"Login by <Navigate/>"} onPress={() => {
        if (username.length == 0) {
          setWarning(true)
          return
        }
        setLogin(true)
      }} />
      {login && (<Navigate to="/detail" state={{ name: username }} replace={false} />)}

      <Button title={`Login by navigate("/detail")`} onPress={() => {
        if (username.length == 0) {
          setWarning(true)
          return
        }
        navigate("/detail", {
          state: {
            name: username
          },
          replace: false,
          relative: 'route',
          preventScrollReset: true,
        });

      }} />
      <Button title={"Back Home by navigate(-1)"} onPress={() => {
        navigate(-1);
      }} />
    </View>
  );
};


const LocationTest = () => {
  const location = useLocation();
  return (
    <View>
      <Text>---- {location.key.length == 0 ? "LocationTest page!" : location.key} ----</Text>
      <Text>pathname:{location.pathname} search:{location.search} hash:{location.hash} </Text>
    </View>
  );
};

const UseRoutesTestHome = () => {
  const location = useLocation();
  return (
    <View>
      <Text>---- UseRoutesTestHome home page! ----</Text>
      <Text>pathname:{location.pathname} search:{location.search} hash:{location.hash} </Text>
    </View>
  );
};


const Index3 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <View>
      <Text>---- Index3 page! ----</Text>
      <Text>`---- 如果跳转由navigate("/index3") navigate(-1),回返回上一个页面；如果由navigate(3)，则返回initialEntries 下标为2的页面 ----`</Text>
      <Button title={"Back Home by navigate(-1)"} onPress={() => {
        navigate(-1);
      }} />
      <Button title={"Back Home by navigate(-2)"} onPress={() => {
        navigate(-2);
      }} />
      <Button title={"Back Home by navigate(-3)"} onPress={() => {
        navigate(-3);
      }} />
    </View>
  );
};



const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <View>
      <Text>{location.state?.name}  logged in successfully! Detail page!</Text>
      <Button title={"Logout"} onPress={() => {
        navigate(-1)
      }} />
      <Button title={"Back Home navigate(-2)"} onPress={() => {
        // seHome(true)
        // 返回上两个  replace={false} 需要
        navigate(-2);
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 50 : 5, margin: 10,
  },
  root: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  link: {
    padding: 10,
    backgroundColor: 'lightblue',
  },
});

function UseRoutesTest() {
  let element = useRoutes([
    {
      path: "/",
      element: <UseRoutesTestHome />,
    },
    { path: "/locationTest", element: <LocationTest /> },
  ]);
  return element;
}

function UseRoutesTest2() {
  const location = {
    pathname: '/locationTest',
    search: '?id=1&name=test',
    hash: '#section1',
    key: "UseRoutesTest2 page",
  };
  let element = useRoutes([
    { path: "/locationTest", element: <LocationTest /> },
  ], location);
  return element;
}

const DomDemo = () => {
  const initialEntries = [
    "/",
    { pathname: "/login", state: { stateTest: "stateTestContent" } },
    { pathname: "/detail", state: { stateTest: "stateTestContent" } },
    "/index3",
  ];
  const location = {
    pathname: '/locationTest',
    search: '?id=1&name=test',
    hash: '#section1',
    key: "locationTest page",
  };
  const initialIndex = 0;
  return (
    <ScrollView style={styles.container}>
      <Router>
        <Routes location={location}>
          <Route path="/locationTest" element={<LocationTest />} />
        </Routes>
      </Router>

      <Router>
        <UseRoutesTest />
      </Router>
      <Router>
        <UseRoutesTest2 />
      </Router>
      <Router initialEntries={initialEntries} initialIndex={initialIndex} future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="messages" element={<HomeMessages />} />
            <Route path="tasks" element={<HomeTasks />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/index3" element={<Index3 />} />
        </Routes>
      </Router>
    </ScrollView>
  );
};
export default DomDemo;