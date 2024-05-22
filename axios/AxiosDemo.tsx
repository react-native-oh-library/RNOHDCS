
import axios from 'axios';
import React,{useState} from 'react';
import {SafeAreaView,Text,View,StyleSheet,ScrollView} from 'react-native';

const AxiosDemo = () => {
  let [requestAddress, setRequestAddress] = useState('');
  let [requestStatus, setRequestStatus] = useState('');
  let [requestResult, setRequestResult] = useState('');

  let requestUrl = {
    baseUrl: 'http://139.9.199.99:3000', // 基础请求地址
    getUrl: 'http://139.9.199.99:3000/tpc/get', // get请求地址
    putUrl: 'http://139.9.199.99:3000/tpc/put',// put请求地址
    postUrl: 'http://139.9.199.99:3000/tpc/post', // post请求地址
    deleteUrl: 'https://mock.presstime.cn/mock/65dd9694a07c65d1ba49b371/example/http:/139.9.199.99:3000/tpc/delete',// delete请求地址
    patchUrl: 'https://jsonplaceholder.typicode.com/posts/1',// patch请求地址
    optionsUrl: 'http://1.94.37.200:7070/AntiTheftChain/downloadImage', //options请求地址
    errorUrl: 'https://mock.presstime.cn/mock/65dd9694a07c65d1ba49b371/example/patch',// error请求地址
    headUrl: 'https://httpbin.org/headers',// head请求地址
    proxyUrl: 'https://www.baidu.com',// https请求地址
    paramsUrl: 'https://www.baidu.com/sugrec',// params请求地址
    hostL: '1.94.37.200'// 代理host
  }

  // 请求方法别名
  const aliasesRequet = () => {
    Clearcontents();
    axios.request({
      url: requestUrl.getUrl
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Request请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Request请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.getUrl);
  }

  const aliasesGetRequet = () => {
    Clearcontents();
    axios.get(requestUrl.getUrl)
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Get请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Get请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.getUrl);
  }

  const aliasesPostRequet = () => {
    Clearcontents();
    axios.post(requestUrl.postUrl,{id: 591})
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Post请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Post请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.postUrl);
  }

  const aliasesDeleteRequet = () => {
    Clearcontents();
    axios.delete(requestUrl.deleteUrl)
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Delete请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Delete请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.deleteUrl);
  }

  const aliasesHeadRequet = () => {
    Clearcontents();
    axios.head(requestUrl.headUrl)
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Head请求成功！' + '\n' + JSON.stringify(res));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Head请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.headUrl);
  }

  const aliasesOptionsRequet = () => {
    Clearcontents();
    axios.get(requestUrl.optionsUrl)
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Options请求成功！' + '\n' + JSON.stringify(res));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Options请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.optionsUrl);
  }

  const aliasesPutRequet = () => {
    Clearcontents();
    axios.put(requestUrl.putUrl,{id: 590})
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Put请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Put请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.putUrl);
  }

  const aliasesPatchRequet = () => {
    Clearcontents();
    axios.patch(requestUrl.patchUrl)
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Patch请求成功！' + '\n' + JSON.stringify(res.data.title));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Patch请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.patchUrl);
  }

  // 实例方法
  const instance = axios.create();

  const instanceRequet = () => {
    Clearcontents();
    instance.request({
      url: requestUrl.getUrl
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Request请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Request请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.getUrl);
  }

  const instanceGetRequet = () => {
    Clearcontents();
    instance.get(requestUrl.getUrl)
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Get请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Get请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.getUrl);
  }

  const instancePostRequet = () => {
    Clearcontents();
    instance.post(requestUrl.postUrl,{id: 591})
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Post请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Post请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.postUrl);
  }

  const instanceDeleteRequet = () => {
    Clearcontents();
    instance.delete(requestUrl.deleteUrl)
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Delete请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Delete请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.deleteUrl);
  }

  const instanceHeadRequet = () => {
    Clearcontents();
    instance.head(requestUrl.headUrl)
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Head请求成功！' + '\n' + JSON.stringify(res));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Head请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.headUrl);
  }

  const instanceOptionsRequet = () => {
    Clearcontents();
    instance.get(requestUrl.optionsUrl)
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Options请求成功！' + '\n' + JSON.stringify(res));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Options请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.optionsUrl);
  }

  const instancePutRequet = () => {
    Clearcontents();
    instance.put(requestUrl.putUrl,{id: 590})
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Put请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Put请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.putUrl);
  }

  const instancePatchRequet = () => {
    Clearcontents();
    instance.patch(requestUrl.patchUrl)
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:Patch请求成功！' + '\n' + JSON.stringify(res.data.title));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:Patch请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.patchUrl);
  }

  // 请求配置
  const configUrl = () => {
    Clearcontents();
    axios({
      url: requestUrl.getUrl
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.getUrl);
  }

  const configMethod = () => {
    Clearcontents();
    axios({
      url: requestUrl.deleteUrl,
      method: 'delete'
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:请求成功！' + '\n' + JSON.stringify(res));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.deleteUrl);
  }

  const configBaseUrl = () => {
    Clearcontents();
    axios.defaults.baseURL = requestUrl.baseUrl;
    axios.defaults.headers['customer-header'] = 'customer-value';
    axios.defaults.method = 'get';
    axios({
      url: requestUrl.getUrl
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:请求成功！' + '\n' + JSON.stringify(res.data));
      axios.defaults.baseURL = '';
      axios.defaults.method = '';
      axios.defaults.headers['customer-header'] = '';
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:请求错误！' + '\n' + error);
      axios.defaults.baseURL = '';
      axios.defaults.method = '';
      axios.defaults.headers['customer-header'] = '';
    });
    setRequestAddress(requestUrl.getUrl);
  }

  const configHeaders = () => {
    Clearcontents();
    axios.defaults.baseURL = requestUrl.baseUrl;
    axios.defaults.headers['customer-header'] = 'customer-value';
    axios.defaults.method = 'get';
    axios({
      url: requestUrl.getUrl
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:请求成功！' + '\n' + JSON.stringify(res.data));
      axios.defaults.baseURL = '';
      axios.defaults.method = '';
      axios.defaults.headers['customer-header'] = '';
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:请求错误！' + '\n' + error);
      axios.defaults.baseURL = '';
      axios.defaults.method = '';
      axios.defaults.headers['customer-header'] = '';
    });
    setRequestAddress(requestUrl.getUrl);
  }

  const configParams = () => {
    Clearcontents();
    axios({
      url: requestUrl.paramsUrl,
      method: 'get',
      params: {
        prod: 'pc',
        from: 'pc_web',
        wd: '12306'
      }
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:请求成功！' + '\n' + JSON.stringify(res));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.paramsUrl);
  }

  const configData = () => {
    Clearcontents();
    axios({
      url: requestUrl.postUrl,
      method: 'post',
      data: {
        id: 591
      }
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.postUrl);
  }

  const configTimeout = () => {
    Clearcontents();
    axios({
      url: requestUrl.deleteUrl,
      method: 'delete',
      timeout: 10000
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:请求成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.deleteUrl);
  }

  // 设置代理
  const settingProxy = () => {
    Clearcontents();
    axios({
      url: requestUrl.proxyUrl,
      method: 'get',
      proxy: {
        host: requestUrl.hostL,
        port: 6443
      }
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:设置代理成功！' + '\n' + JSON.stringify(res.data));
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:设置代理错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.proxyUrl);
  }

  // 拦截器
  const requestInterceptors = () => {
    Clearcontents();
    const myInterceptor = axios.interceptors.request.use(request => {
      request.data = '在拦截器中，内容被更改了';
      return request;
    }, (error) => {
      return Promise.reject(error);
    });

    axios({
      url: requestUrl.getUrl,
      method: 'get'
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:请求成功！' + '\n' + JSON.stringify(res.data));
      // 移除拦截器
      axios.interceptors.request.eject(myInterceptor);
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:请求错误！' + '\n' + error);
      axios.interceptors.request.eject(myInterceptor);
    });
    setRequestAddress(requestUrl.getUrl);
  }

  const responseInterceptors = () => {
    Clearcontents();
    const myInterceptor = axios.interceptors.response.use(response => {
      // 处理响应数据
      response.data = '在拦截器中，内容被更改了';
      return response;
    }, (error) => {
      // 处理响应错误
      return Promise.reject(error);
    });

    axios({
      url: requestUrl.getUrl,
      method: 'get'
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:请求成功！' + '\n' + JSON.stringify(res.data));
      // 移除拦截器
      axios.interceptors.response.eject(myInterceptor);
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:请求错误！' + '\n' + error);
      axios.interceptors.response.eject(myInterceptor);
    });
    setRequestAddress(requestUrl.getUrl);
  }

  // 默认设置
  const defaultSetting = () => {
    Clearcontents();
    axios.defaults.baseURL = requestUrl.baseUrl;
    axios.defaults.headers['customer-header'] = 'customer-value';
    axios.defaults.method = 'get';
    axios({
      url: requestUrl.getUrl
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult('Data:默认设置请求成功！' + '\n' + JSON.stringify(res.data));
      axios.defaults.baseURL = '';
      axios.defaults.method = '';
      axios.defaults.headers['customer-header'] = '';
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:默认设置请求错误！' + '\n' + error);
      axios.defaults.baseURL = '';
      axios.defaults.method = '';
      axios.defaults.headers['customer-header'] = '';
    });
    setRequestAddress(requestUrl.getUrl);
  }

  const settingResponseType = () => {
    Clearcontents();
    axios({
      url: requestUrl.getUrl,
      method: 'get',
      responseType: 'arraybuffer'
    })
    .then(res => {
      setRequestStatus('Status:200');
      setRequestResult(JSON.stringify(res.data));
      if (res.data instanceof ArrayBuffer) { 
        setRequestResult('responseType设置成功');
      } else {
        setRequestResult('responseType设置失败');
      }
    })
    .catch(error => {
      setRequestStatus('');
      setRequestResult('Error:设置响应类型请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.getUrl);
  }

  // 错误处理
  const errorTypes = () => {
    Clearcontents();
    axios.patch(requestUrl.errorUrl)
    .catch(function(error) {
      setRequestResult('Error:请求错误！' + '\n' + error);
    });
    setRequestAddress(requestUrl.errorUrl);
  }

  // 取消
  const abortController = () => {
    Clearcontents();
    const controller = new AbortController();
    axios.get(requestUrl.getUrl,{
      signal: controller.signal
    })
    .then(function(response) {
      setRequestResult('取消请求失败！' + '\n' + JSON.stringify(response.data));
    })
    .catch(function(request) {
      setRequestResult('取消请求成功！' + '\n' + request);
    });
    //  cancel the request
    controller.abort();
    setRequestAddress(requestUrl.getUrl);
  }

  const cancelToken = () => {
    Clearcontents();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios.get(requestUrl.getUrl,{
      cancelToken: source.token
    })
    .then(res => {
      setRequestResult('取消请求失败！' + '\n' + JSON.stringify(res.data));
    })
    .catch(thrown => {
      if (axios.isCancel(thrown)){
        setRequestResult('取消请求成功！' + '\n' + thrown);
      } else {
        setRequestResult('取消请求失败！' + '\n' + thrown);
      }
    });
    source.cancel();
    setRequestAddress(requestUrl.getUrl);
  }
  
  // 清空 setRequestAddress、setRequestStatus、setRequestResult
  const Clearcontents = () => {
    setRequestAddress('');
    setRequestStatus('');
    setRequestResult('');
  }

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>axios</Text>
        </View>
        <View>
          <Text style={styles.smallTitle}>Request method aliases（请求方法别名）</Text>
        </View>
        <View style={styles.clickBox}>
          <Text style={styles.click} onPress={aliasesRequet}>Request</Text>
          <Text style={styles.click} onPress={aliasesGetRequet}>Get</Text>
          <Text style={styles.click} onPress={aliasesDeleteRequet}>Delete</Text>
          <Text style={styles.click} onPress={aliasesHeadRequet}>Head</Text>
          <Text style={styles.click} onPress={aliasesOptionsRequet}>Options</Text>
          <Text style={styles.click} onPress={aliasesPostRequet}>Post</Text>
          <Text style={styles.click} onPress={aliasesPutRequet}>Put</Text>
          <Text style={styles.click} onPress={aliasesPatchRequet}>Patch</Text>
        </View>
        <View>
          <Text style={styles.smallTitle}>Instance methods（实例方法）</Text>
        </View>
        <View style={styles.clickBox}>
          <Text style={styles.click} onPress={instanceRequet}>Request</Text>
          <Text style={styles.click} onPress={instanceGetRequet}>Get</Text>
          <Text style={styles.click} onPress={instanceDeleteRequet}>Delete</Text>
          <Text style={styles.click} onPress={instanceHeadRequet}>Head</Text>
          <Text style={styles.click} onPress={instanceOptionsRequet}>Options</Text>
          <Text style={styles.click} onPress={instancePostRequet}>Post</Text>
          <Text style={styles.click} onPress={instancePutRequet}>Put</Text>
          <Text style={styles.click} onPress={instancePatchRequet}>Patch</Text>
        </View>
        <View style={styles.smallTitle}>
          <Text>Request Config（请求配置）</Text>
        </View>
        <View style={styles.clickBox}>
          <Text style={styles.click} onPress={configUrl}>url</Text>
          <Text style={styles.click} onPress={configMethod}>method</Text>
          <Text style={styles.click} onPress={configBaseUrl}>baseUrl</Text>
          <Text style={styles.click} onPress={configHeaders}>headers</Text>
          <Text style={styles.click} onPress={configParams}>params</Text>
          <Text style={styles.click} onPress={configData}>data</Text>
          <Text style={styles.click} onPress={configTimeout}>timeout</Text>
          <Text style={styles.click} onPress={settingProxy}>设置代理</Text>
        </View>
        <View style={styles.smallTitle}>
          <Text>Response Schema（响应类型）</Text>
        </View>
        <View style={styles.clickBox}>
          <Text style={styles.click} onPress={settingResponseType}>响应类型</Text>
        </View>
        <View style={styles.smallTitle}>
          <Text>Config Defaults（默认配置）</Text>
        </View>
        <View style={styles.clickBox}>
          <Text style={styles.click} onPress={defaultSetting}>默认配置</Text>
        </View>
        <View style={styles.smallTitle}>
          <Text>Handling Errors（错误处理）</Text>
        </View>
        <View style={styles.clickBox}>
          <Text style={styles.click} onPress={errorTypes}>错误处理</Text>
        </View>
        <View style={styles.smallTitle}>
          <Text>Interceptors（拦截器）</Text>
        </View>
        <View style={styles.interceptors}>
          <Text style={styles.click} onPress={requestInterceptors}>请求拦截</Text>
          <Text style={styles.interceptorsClick} onPress={responseInterceptors}>响应拦截</Text>
        </View>
        <View style={styles.smallTitle}>
          <Text>Cancellation（取消）</Text>
        </View>
        <View style={styles.interceptors}>
          <Text style={styles.click} onPress={abortController}>中止控制</Text>
          <Text style={styles.interceptorsClick} onPress={cancelToken}>取消令牌</Text>
        </View>
        <View style={styles.requestAddress}>
          <Text style={styles.requestAddressText}>请求地址：</Text>
          <Text style={styles.requestAddressUrl}>{requestAddress}</Text>
        </View>
        <View style={styles.requestResult}>
          <Text style={styles.requestResultTeaxt}>请求地址：</Text>
          <Text style={styles.requestResultState}>{requestStatus}{'\n'}{requestResult}</Text>
        </View>
        <View style={styles.requestResult}>
          <Text style={styles.clear} onPress={Clearcontents}>清空输入框内容</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  smallTitle: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold'
  },
  clickBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  interceptors: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  click: {
    marginTop: 5,
    width: 80,
    height: 25,
    backgroundColor: '#007FFF',
    lineHeight: 23,
    textAlign: 'center',
    fontSize: 15,
    borderStyle: 'solid',
    borderColor:'#000000',
    borderRadius: 10
  },
  interceptorsClick: {
    marginTop: 5,
    marginLeft: 20,
    width: 70,
    height: 25,
    backgroundColor: '#007FFF',
    lineHeight: 23,
    textAlign: 'center',
    fontSize: 15,
    borderStyle: 'solid',
    borderColor:'#000000',
    borderRadius: 10
  },
  requestAddress: {
    marginTop: 20
  },
  requestAddressText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  requestAddressUrl: {
    width: '100%',
    fontSize: 15,
    color: '#000000',
    borderStyle: 'solid',
    borderColor:'#000000',
    borderWidth: 0.5,
    paddingLeft: 5,
    paddingRight: 5
  },
  requestResult: {
    marginTop: 20
  },
  requestResultTeaxt: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  requestResultState: {
    width: '100%',
    fontSize: 15,
    color: '#000000',
    borderStyle: 'solid',
    borderColor:'#000000',
    borderWidth: 0.5,
    paddingLeft: 5,
    paddingRight: 5
  },
  clearBox: {
    marginTop: 30,
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  clear: {
    width: 200,
    height: 40,
    backgroundColor: '#007FFF',
    fontSize: 22,
    borderStyle: 'solid',
    borderColor:'#000000',
    borderRadius: 10,
    lineHeight: 36,
    textAlign: 'center'
  }
});

export default AxiosDemo;