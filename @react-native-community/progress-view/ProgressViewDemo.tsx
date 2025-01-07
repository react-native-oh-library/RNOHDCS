import * as React from 'react';
import {StyleSheet, Text, SafeAreaView, Platform,Button,View,TextInput} from 'react-native';
import {ProgressView} from '@react-native-oh-library/progress-view';
import {HMLog} from './Log'

let startTime=Date.now()

type Props = {||};
type State = {|
  progress: number,
|};


class App extends React.Component<Props, State> {
  _rafId: ?AnimationFrameID = null;

  state = {
    progress: 0,
    colorarr :['red','orange','yellow','green','cyan','blue','purple'],
    progressColor:'',
    trackColor:'',
    i:0,
    j:0,
    len:200,
    l:'',
    n:'',
    p:0.5,
  };

  

  componentDidMount() {
    this.updateProgress();
  }

  componentWillUnmount() {
    if (this._rafId != null) {
      cancelAnimationFrame(this._rafId);
    }
  }

  updateProgress = () => {
    const progress = this.state.progress + 0.001;
    this.setState({progress});
    this._rafId = requestAnimationFrame(() => this.updateProgress());
  };

  /* $FlowFixMe(>=0.85.0 site=react_native_fb) This comment suppresses an error
   * found when Flow v0.85 was deployed. To see the error, delete this comment
   * and run Flow. */
  getProgress = (offset) => {
    const progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>
          ProgressView Example (
          {global?.nativeFabricUIManager ? 'Fabric' : 'Paper'})
        </Text>
        <Text style={styles.text}>设置进度条长度测试：</Text>
        <View style={{flexDirection:'row'}}>
        <TextInput
              placeholder="输入长度"
              value={this.state.l}
              onChangeText={text=>{
                const l = text;
                this.setState({l});
              }}
              style={{width:200}}
            />
        <Button onPress={()=> {
            const len = parseInt(this.state.l);
            this.setState({len});
        }}
            title='change_len'
        />
        </View>
        <ProgressView
          style={{marginTop:20,width:this.state.len}}
          progressTintColor={this.state.progressColor}
          trackTintColor={this.state.trackColor}
          progress={this.getProgress(0)}
          testID={'p1'}
        />
        <View style={{flexDirection:'row'}}>
        <Text style={styles.text}>{(this.getProgress(0)*100).toFixed(2)}% </Text>
        <View style={{width:15}}></View>
        <Button onPress={()=> { 
                                const progressColor = this.state.colorarr[this.state.i%7];
                                this.setState({progressColor});
                                const i = this.state.i+1;
                                this.setState({i});
                                }}
                title='progressTintColor'/>
        <View style={{width:15}}></View>
        <Button onPress={()=> { 
                                const trackColor = this.state.colorarr[this.state.j%7];
                                this.setState({trackColor});
                                const j = this.state.j+1;
                                this.setState({j});
                                }} 
                title='trackTintColor'/>
        </View>

        <Text style={styles.text}>isIndeterminate</Text>
        <ProgressView
          style={styles.progressView}
          isIndeterminate={true}
          progress={0.5}
          testID={'Indeterminate'}
        />
        <Text style={styles.text}>ProgressImage with local image</Text>
        <ProgressView
          style={styles.progressView}
          progress={0.5}
          progressImage={require('./test.png')}
          testID={'localimage'}
        />
        <Text style={styles.text}>TrackImage with local image</Text>
        <ProgressView
          style={styles.progressView}
          progress={0.5}
          trackImage={require('./test.png')}
          testID={'localimage'}
        />
        <Text style={styles.text}>TrackImage with network image</Text>
        {Platform.OS === 'windows' ? (
          <ProgressView
            style={styles.progressView}
            progress={0.5}
            trackImage={{
              uri: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
            }}
            testID={'networkimage'}
          />
        ) : (
          <Text>Network Images only work on Windows</Text>
        )}
        {/* <Text style={styles.text}>TrackTint Color</Text>
        <ProgressView
          style={styles.progressView}
          progress={0.8}
          trackTintColor={'red'}
          progressTintColor={'yellow'}
          testID={'trackcolor'}
        /> */}
        <Text style={styles.text}>设置进度值测试：</Text>
        <View style={{flexDirection:'row'}}>
        <TextInput
              placeholder="输入进度值"
              value={this.state.n}
              onChangeText={text=>{
                const n = text;
                this.setState({n});
              }}
              style={{width:200}}
            />
        <Button onPress={()=> {
            const p = parseFloat(this.state.n);
            this.setState({p});
        }}
            title='change_progress'
        />
        </View>
        <ProgressView
          style={styles.progressView}
          progress={this.state.p}
        />
        <Text style={styles.text}>Bar Style</Text>
        <ProgressView
          style={styles.progressView}
          progress={0.4}
          progressViewStyle={'bar'}
          testID={'bar'}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  progressView: {
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});

export default App;


let endTime=Date.now()

HMLog(`ProgressView_LoadTime:${endTime-startTime}ms`)