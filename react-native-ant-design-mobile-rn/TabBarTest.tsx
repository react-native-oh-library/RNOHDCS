
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon, TabBar, Toast } from '@ant-design/react-native';
import { TestSuite, TestCase } from '@rnoh/testerino';

export default () => {
  return (
    <TestSuite name="TabBarTest">
      <TestCase itShould="TabBar barTintColor='red'" tags={['C_API']}>
        <TabBarBarTintColorTest />
      </TestCase>
      <TestCase itShould="TabBar tintColor='green'" tags={['C_API']}>
        <TabBartintColorTest />
      </TestCase>
      <TestCase itShould="TabBar unselectedTintColor='blue'" tags={['C_API']}>
        <TabBarunselectedTintColorTest />
      </TestCase>
      <TestCase itShould="TabBar.Item title='首页' and title='我的'" tags={['C_API']}>
        <TabBarTitleTest />
      </TestCase>
      <TestCase itShould="TabBar.Item badge=2" tags={['C_API']}>
        <TabBarBadgeTest />
      </TestCase>
      <TestCase itShould="TabBar.Item selected='yellowTab'" tags={['C_API']}>
        <TabBarSelectedTest />
      </TestCase>
      <TestCase itShould="TabBar.Item onPress() " tags={['C_API']}>
        <TabBarOnPressTest />
      </TestCase>
      <TestCase itShould="TabBar.Item Icon" tags={['C_API']}>
        <TabBarIconTest />
      </TestCase>
      <TestCase itShould="TabBar.Item selectedIcon" tags={['C_API']}>
        <TabBarSelectedIconTest />
      </TestCase>
      <TestCase itShould="TabBar.Item iconStyle={ width: 40, height: 40 }" tags={['C_API']}>
        <TabBarIconStyleTest />
      </TestCase>
    </TestSuite>
  );
};

function TabBarBarTintColorTest() {
  const [selectedTab, setSelectedTab] = useState('redTab');
  const renderContent = (pageText: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }
  const onChangeTab = (tabName: any) => {
    setSelectedTab(tabName);
  }

  return (
    <View style={{ width: '100%', height: 200 }}>
      <TabBar barTintColor="red">
        <TabBar.Item
          title="Koubei"
          selected={selectedTab === 'redTab'}
          onPress={() => onChangeTab('redTab')}>
          {renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="My"
          selected={selectedTab === 'yellowTab'}
          onPress={() => onChangeTab('yellowTab')}>
          {renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    </View>
  )
}

function TabBartintColorTest() {
  const [selectedTab, setSelectedTab] = useState('redTab');
  const renderContent = (pageText: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }
  const onChangeTab = (tabName: any) => {
    setSelectedTab(tabName);
  }

  return (
    <View style={{ width: '100%', height: 200 }}>
      <TabBar tintColor='green'>
        <TabBar.Item
          title="Koubei"
          selected={selectedTab === 'redTab'}
          onPress={() => onChangeTab('redTab')}>
          {renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="My"
          selected={selectedTab === 'yellowTab'}
          onPress={() => onChangeTab('yellowTab')}>
          {renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    </View>
  )
}

function TabBarunselectedTintColorTest() {
  const [selectedTab, setSelectedTab] = useState('redTab');
  const renderContent = (pageText: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }
  const onChangeTab = (tabName: any) => {
    setSelectedTab(tabName);
  }

  return (
    <View style={{ width: '100%', height: 200 }}>
      <TabBar tintColor='green' unselectedTintColor='blue'>
        <TabBar.Item
          title="Koubei"
          selected={selectedTab === 'redTab'}
          onPress={() => onChangeTab('redTab')}>
          {renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="My"
          selected={selectedTab === 'yellowTab'}
          onPress={() => onChangeTab('yellowTab')}>
          {renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    </View>
  )
}

function TabBarTitleTest() {
  const [selectedTab, setSelectedTab] = useState('redTab');
  const renderContent = (pageText: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }
  const onChangeTab = (tabName: any) => {
    setSelectedTab(tabName);
  }

  return (
    <View style={{ width: '100%', height: 200 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="首页"
          badge={2}
          selected={selectedTab === 'redTab'}
          onPress={() => onChangeTab('redTab')}>
          {renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="我的"
          selected={selectedTab === 'yellowTab'}
          onPress={() => onChangeTab('yellowTab')}>
          {renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    </View>
  )
}

function TabBarBadgeTest() {
  const [selectedTab, setSelectedTab] = useState('redTab');
  const renderContent = (pageText: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }
  const onChangeTab = (tabName: any) => {
    setSelectedTab(tabName);
  }

  return (
    <View style={{ width: '100%', height: 200 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="Koubei"
          badge={2}
          selected={selectedTab === 'redTab'}
          onPress={() => onChangeTab('redTab')}>
          {renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="My"
          selected={selectedTab === 'yellowTab'}
          onPress={() => onChangeTab('yellowTab')}>
          {renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    </View>
  )
}

function TabBarSelectedTest() {
  const [selectedTab, setSelectedTab] = useState('yellowTab');
  const renderContent = (pageText: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }

  return (
    <View style={{ width: '100%', height: 200 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="Koubei"
          selected={selectedTab === 'redTab'}
        >
          {renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="My"
          selected={selectedTab === 'yellowTab'}
        >
          {renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    </View>
  )
}

function TabBarOnPressTest() {
  const [selectedTab, setSelectedTab] = useState('redTab');
  const renderContent = (pageText: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }
  const onChangeTab = (tabName: any) => {
    setSelectedTab(tabName);
    Toast.info(tabName, 1);
  }

  return (
    <View style={{ width: '100%', height: 200 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="Koubei"
          badge={2}
          selected={selectedTab === 'redTab'}
          onPress={() => onChangeTab('redTab')}>
          {renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          title="My"
          selected={selectedTab === 'yellowTab'}
          onPress={() => onChangeTab('yellowTab')}>
          {renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    </View>
  )
}

function TabBarIconTest() {
  const [selectedTab, setSelectedTab] = useState('redTab');
  const renderContent = (pageText: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }
  const onChangeTab = (tabName: any) => {
    setSelectedTab(tabName);
  }

  return (
    <View style={{ width: '100%', height: 200 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          icon={<Icon name="ordered-list" color='pink' />}
          title="Koubei"
          badge={2}
          selected={selectedTab === 'redTab'}
          onPress={() => onChangeTab('redTab')}>
          {renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="My"
          selected={selectedTab === 'yellowTab'}
          onPress={() => onChangeTab('yellowTab')}>
          {renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    </View>
  )
}

function TabBarSelectedIconTest() {
  const [selectedTab, setSelectedTab] = useState('redTab');
  const renderContent = (pageText: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }
  const onChangeTab = (tabName: any) => {
    setSelectedTab(tabName);
  }

  return (
    <View style={{ width: '100%', height: 200 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          icon={<Icon name="ordered-list" color='pink' />}
          title="Koubei"
          badge={2}
          selected={selectedTab === 'redTab'}
          onPress={() => onChangeTab('redTab')}>
          {renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="My"
          selected={selectedTab === 'yellowTab'}
          selectedIcon={<Image source={require('./assets/alipay.png')} style={{ width: 20, height: 20 }} />}
          onPress={() => onChangeTab('yellowTab')}>
          {renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    </View>
  )
}

function TabBarIconStyleTest() {
  const [selectedTab, setSelectedTab] = useState('redTab');
  const renderContent = (pageText: any) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red' }}>
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }
  const onChangeTab = (tabName: any) => {
    setSelectedTab(tabName);
  }

  return (
    <View style={{ width: '100%', height: 200 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          icon={<Icon name="ordered-list" color='pink' />}
          title="Koubei"
          badge={2}
          selected={selectedTab === 'redTab'}
          onPress={() => onChangeTab('redTab')}>
          {renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          iconStyle={{ width: 40, height: 40 }}
          title="My"
          selected={selectedTab === 'yellowTab'}
          selectedIcon={<Image source={require('./assets/alipay.png')} style={{ width: 20, height: 20 }} />}
          onPress={() => onChangeTab('yellowTab')}>
          {renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    </View>
  )
}