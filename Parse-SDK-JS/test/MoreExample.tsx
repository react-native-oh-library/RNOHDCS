import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TextInput,
  ScrollView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  'myParseApp2024',
  'JSKey@Parse#2024!Secure',
  'P@rseM@sterKey#2024',
);
Parse.serverURL = 'http://localhost:1337/parse';
Parse.CoreManager.set('REQUEST_HEADERS', {
  'X-Parse-REST-API-Key': 'MYRESTAPIKEY',
});

const MoreExample = () => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [queryResult, setQueryResult] = useState('');
  const [locations, setLocations] = useState([]);
  const [message, setMessage] = useState('');

  // 检测链接
  async function checkParseServerStatus() {
    try {
      // 尝试使用 Parse SDK 的功能（例如查询对象）来检查服务器状态
      const query = new Parse.Query('TestQuery'); // 替换成你的 Parse 类名
      await query.first(); // 尝试查询第一个对象
      return true; // 如果成功，表示服务器是可达的
    } catch (error) {
      return false; // 如果出现错误，表示服务器不可达
    }
  }

  const generateTestData = async () => {
    const TestLocation = Parse.Object.extend('QueryAddress');
    const testData = [
      {name: '地点A', latitude: 37.78825, longitude: -122.4324},
      {name: '地点B', latitude: 37.78845, longitude: -122.4344},
      {name: '地点C', latitude: 37.78815, longitude: -122.4314},
      {name: '地点D', latitude: 87.78815, longitude: -102.4314},
    ];

    try {
      for (const data of testData) {
        const location = new TestLocation();
        location.set('name', data.name);
        location.set(
          'location',
          new Parse.GeoPoint(data.latitude, data.longitude),
        );
        await location.save();
      }
      setMessage('测试数据生成成功！');
    } catch (error) {
      console.error('生成测试数据出错:', error);
      setMessage('生成测试数据失败。');
    }
  };

  const fetchNearbyLocations = async queryType => {
    const Query = new Parse.Query('QueryAddress');
    const userLocation = new Parse.GeoPoint(37.78825, -122.4324); // 示例用户位置

    switch (queryType) {
      case 'near':
        Query.near('location', userLocation);
        break;
      case 'withinRadians':
        Query.withinRadians('location', userLocation, 0.5); // 0.5 radians
        break;
      case 'withinMiles':
        Query.withinMiles('location', userLocation, 0.05); // 0.05 miles
        break;
      case 'withinKilometers':
        Query.withinKilometers('location', userLocation, 5); // 5 kilometers
        break;
      case 'withinGeoBox':
        const southWest = new Parse.GeoPoint(37.787, -122.435);
        const northEast = new Parse.GeoPoint(37.789, -122.43);
        Query.withinGeoBox('location', southWest, northEast);
        break;
      default:
        break;
    }

    Query.include("relatedObject"); // 加载关联对象
    Query.limit(10); // 限制返回的结果数量

    try {
      const results = await Query.find();
      setLocations(results);
      setMessage(`找到 ${results.length} 个附近的位置`);
    } catch (error) {
      console.error('查询位置出错:', error);
      setMessage('查询位置失败。');
    }
  };

  // 添加测试数据
  const addTestData = async () => {
    try {
      const TestQuery = Parse.Object.extend('TestQuery');
      const testData = new TestQuery();
      const randomCount = Math.floor(Math.random() * 10); // 随机生成一个 count 值
      testData.set('count', randomCount);
      await testData.save();
      Alert.alert('Success', `Added test data with count: ${randomCount}`);
      fetchData(); // 重新获取数据
    } catch (error) {
      console.error('Error adding test data:', error);
      Alert.alert('Error', 'Failed to add test data.');
    }
  };

  // 添加特定测试数据以供各类查询使用
  const addSpecificTestData = async () => {
    try {
      const TestQuery = Parse.Object.extend('TestQuery');
      const testDataList = [
        {count: 5, status: 'active'}, // equalTo、lessThan、greaterThan等
        {count: 10, status: 'inactive'}, // notEqualTo
        {count: 15, status: 'active'}, // greaterThan
        {count: 20, status: 'inactive'}, // lessThan
        {count: 25, status: 'active'}, // greaterThanOrEqualTo
        {count: 30, status: 'inactive'}, // lessThanOrEqualTo
        {count: 35, status: 'active'}, // containedIn
        {count: 40, status: 'inactive'}, // notContainedIn
        {count: 45, status: 'active'}, // exists
        {count: 50, status: 'inactive'}, // doesNotExist
        {count: 55, status: 'active'}, // containsAll
        {count: 123, status: 'startactive'}, // startsWith
        {count: 456, status: 'inactiveend'}, // endsWith
      ];

      for (const data of testDataList) {
        const testData = new TestQuery();
        testData.set('count', data.count);
        testData.set('status', data.status);
        await testData.save();
      }

      Alert.alert('Success', 'Added specific test data for various queries');
      fetchAllData();
    } catch (error) {
      console.error('Error adding specific test data:', error);
      Alert.alert('Error', 'Failed to add specific test data.');
    }
  };

  // 获取数据
  const fetchData = async () => {
    const TestQuery = Parse.Object.extend('TestQuery');
    const query = new Parse.Query(TestQuery);
    const results = await query.find();
    setData(results);
  };

  // 获取所有数据
  const fetchAllData = async () => {
    try {
      const TestQuery = Parse.Object.extend('TestQuery');
      const query = new Parse.Query(TestQuery);
      const results = await query.find();
      setData(results);
      setQueryResult('Fetched all data');
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', 'Failed to fetch data.');
    }
  };

  // 删除所有数据
  const deleteAllData = async () => {
    try {
      const TestQuery = Parse.Object.extend('TestQuery');
      const query = new Parse.Query(TestQuery);
      const results = await query.find();

      // 批量删除
      await Parse.Object.destroyAll(results);
      setData([]);
      setQueryResult('Deleted all data');
      Alert.alert('Success', 'All data deleted successfully.');
    } catch (error) {
      console.error('Error deleting data:', error);
      Alert.alert('Error', 'Failed to delete all data.');
    }
  };

  // 执行不同的查询
  const handleQuery = async queryType => {
    try {
      const TestQuery = Parse.Object.extend('TestQuery');
      const query = new Parse.Query(TestQuery);

      // 根据不同的查询类型执行不同的查询
      switch (queryType) {
        case 'equalTo':
          query.equalTo('count', 10);
          setQueryResult('Filtered with equalTo (count = 10)');
          break;
        case 'notEqualTo':
          query.notEqualTo('count', 10);
          setQueryResult('Filtered with notEqualTo (count != 10)');
          break;
        case 'lessThan':
          query.lessThan('count', 20);
          setQueryResult('Filtered with lessThan (count < 20)');
          break;
        case 'greaterThan':
          query.greaterThan('count', 10);
          setQueryResult('Filtered with greaterThan (count > 10)');
          break;
        case 'lessThanOrEqualTo':
          query.lessThanOrEqualTo('count', 20);
          setQueryResult('Filtered with lessThanOrEqualTo (count <= 20)');
          break;
        case 'greaterThanOrEqualTo':
          query.greaterThanOrEqualTo('count', 10);
          setQueryResult('Filtered with greaterThanOrEqualTo (count >= 10)');
          break;
        case 'containedIn':
          query.containedIn('count', [5, 10, 15, 20]);
          setQueryResult(
            'Filtered with containedIn (count in [5, 10, 15, 20])',
          );
          break;
        case 'notContainedIn':
          query.notContainedIn('count', [5, 10]);
          setQueryResult('Filtered with notContainedIn (count not in [5, 10])');
          break;
        case 'exists':
          query.exists('status');
          setQueryResult('Filtered with exists (status field exists)');
          break;
        case 'doesNotExist':
          query.doesNotExist('nonExistingField');
          setQueryResult(
            'Filtered with doesNotExist (nonExistingField does not exist)',
          );
          break;
        case 'containsAll':
          query.containsAll('status', ['active']);
          setQueryResult(
            'Filtered with containsAll (status contains "active")',
          );
          break;
        case 'startsWith':
          query.startsWith('status', 'start');
          setQueryResult('Filtered with startsWith');
          break;
        case 'endsWith':
          query.endsWith('status', 'end');
          setQueryResult('Filtered with endsWith');
          break;
        case 'select':
          query.select('count', 'status');
          setQueryResult('Selected only the count and status fields');
          break;
        case 'skip':
          query.skip(2);
          setQueryResult('Skipped the first 2 results');
          break;
        case 'ascending':
          query.ascending('count');
          setQueryResult('Ordered by count in ascending');
          break;
        case 'descending':
          query.descending('count');
          setQueryResult('Ordered by count in descending');
          break;
        case 'count':
          const count = await query.count();
          setQueryResult(`Total count: ${count}`);
          return; // 直接返回不需要执行查询
      }

      const results = await query.find();
      setData(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({item}) => (
    <View style={style.item}>
      <Text>Object ID: {item.id}</Text>
      <Text>Count: {item.get('count')}</Text>
    </View>
  );

  return (
    <Tester style={{flex: 1}}>
      <View style={style.box}>
        <TestSuite name={`Parse-SDK-js`}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <TestCase itShould="Parse Server 连接状态">
              <View style={{padding: 10}}>
                <Text style={{color: status ? 'green' : 'red'}}>
                  {status ? '已连接' : '未连接'}
                </Text>
                <View style={{marginBottom: 10}}>
                  <Button
                    title="刷新连接状态"
                    onPress={async () => {
                      const flag = await checkParseServerStatus();
                      setStatus(flag);
                    }}
                  />
                </View>
              </View>
            </TestCase>
            <TestCase itShould="位置示例: QueryAddress、relatedObject表">
              <View style={style.container}>
                <Button title="生成测试数据" onPress={generateTestData} />
                <Button
                  title="查询附近位置 (near)"
                  onPress={() => fetchNearbyLocations('near')}
                />
                <Button
                  title="查询附近位置 (withinRadians)"
                  onPress={() => fetchNearbyLocations('withinRadians')}
                />
                <Button
                  title="查询附近位置 (withinMiles)"
                  onPress={() => fetchNearbyLocations('withinMiles')}
                />
                <Button
                  title="查询附近位置 (withinKilometers)"
                  onPress={() => fetchNearbyLocations('withinKilometers')}
                />
                <Button
                  title="查询附近位置 (withinGeoBox)"
                  onPress={() => fetchNearbyLocations('withinGeoBox')}
                />
                <Text style={style.message}>{message}</Text>
                {locations.map(location => (
                  <Text key={location.id} style={style.locationText}>
                    {location.get('name')} (Lat:{' '}
                    {location.get('location').latitude}, Lon:{' '}
                    {location.get('location').longitude})
                  </Text>
                ))}
              </View>
            </TestCase>
            <TestCase itShould="例子： TestQuery表">
              <View style={style.container}>
                {/* <Button title="Add Test Data" onPress={addTestData} /> */}
                <View style={{height: 10}} />
                <Button
                  title="Add Specific Test Data"
                  onPress={addSpecificTestData}
                />
                <View style={{height: 10}} />
                <Button title="Fetch All Data" onPress={fetchAllData} />
                <View style={{height: 10}} />
                <Button
                  title="Delete All Data"
                  onPress={deleteAllData}
                  color="red"
                />
                <Text style={style.result}>{queryResult}</Text>
                <View style={style.buttonContainer}>
                  <Button
                    title="Count = 3"
                    onPress={() => handleQuery('equalTo')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Count != 3"
                    onPress={() => handleQuery('notEqualTo')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Count < 5"
                    onPress={() => handleQuery('lessThan')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Count > 1"
                    onPress={() => handleQuery('greaterThan')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Count <= 5"
                    onPress={() => handleQuery('lessThanOrEqualTo')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Count >= 3"
                    onPress={() => handleQuery('greaterThanOrEqualTo')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Count in [1,2,3]"
                    onPress={() => handleQuery('containedIn')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Count not in [1,2,3]"
                    onPress={() => handleQuery('notContainedIn')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Count exists"
                    onPress={() => handleQuery('exists')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Count does not exist"
                    onPress={() => handleQuery('doesNotExist')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Tags contain all [tag1, tag2]"
                    onPress={() => handleQuery('containsAll')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title='Name starts with "prefix"'
                    onPress={() => handleQuery('startsWith')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title='Name ends with "suffix"'
                    onPress={() => handleQuery('endsWith')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Select Count"
                    onPress={() => handleQuery('select')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Skip First 2"
                    onPress={() => handleQuery('skip')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Order Ascending"
                    onPress={() => handleQuery('ascending')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Order Descending"
                    onPress={() => handleQuery('descending')}
                  />
                  <View style={{height: 10}} />
                  <Button
                    title="Count Total"
                    onPress={() => handleQuery('count')}
                  />
                  <View style={{height: 10}} />
                </View>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  contentContainerStyle={style.list}
                />
              </View>
            </TestCase>
            <View style={{height: 300}} />
          </ScrollView>
        </TestSuite>
      </View>
    </Tester>
  );
};

const style = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    width: 300,
    backgroundColor: '#f5f5f5',
  },
  result: {
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginVertical: 10,
    fontSize: 16,
    color: 'blue',
  },
  locationText: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    marginBottom: 15,
  },
  list: {
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
  },
});

export default MoreExample;
