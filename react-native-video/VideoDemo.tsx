import React, {useState, useRef} from 'react';
import {View, ScrollView, StyleSheet, Text,TextInput, Image} from 'react-native';
import RNCVideo from 'react-native-video'

function RNCVideoDemo() {

  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [repeat, setRepeat] = useState(true);
  const [disableFocus, setDisableFocus] = useState(false);
  const [uri, setUri] = useState('https://res.vmallres.com//uomcdn/CN/cms/202210/C75C7E20060F3E909F2998E13C3ABC03.mp4');
  const [txt, setTxt] = useState('empty');
  const [resizeMode, setResizeMode] = useState('none');
  const [posterResizeMode, setPosterResizeMode] = useState('cover');
  const [seekSec, setSeekSec] = useState(5000);

  const [onVideoLoad, setOnVideoLoad] = useState("onVideoLoad");
  const [onVideoLoadStart, setOnVideoLoadStart] = useState("onVideoLoadStart");
  const [onVideoError, setOnVideoError] = useState("onVideoError");
  const [onVideoProgress, setOnVideoProgress] = useState("onVideoProgress");
  const [onVideoEnd, setOnVideoEnd] = useState("onVideoEnd");
  const [onVideoBuffer, setOnVideoBuffer] = useState("onVideoBuffer");
  const [onPlaybackStalled, setOnPlaybackStalled] = useState("onPlaybackStalled");
  const [onPlaybackResume, setOnPlaybackResume] = useState("onPlaybackResume");

  const scrollRef = React.useRef<ScrollView>(null);
  const videoRef = React.useRef<typeof RNCVideo>(null);

  const toggleMuted = () => {
      setMuted((prevMuted) => !prevMuted);
  };

  const togglePaused = () => {
      setPaused((prevPaused) => !prevPaused);
  };

  const toggleRepeat = () => {
      setRepeat((prevRepeat) => !prevRepeat);
  };

  const toggleDisableFocus = () => {
    setDisableFocus((prevDisableFocus) => !prevDisableFocus);
  };

  const firstVideo = () => {
      setUri((prevRepeat) => 'https://vjs.zencdn.net/v/oceans.mp4');
  };

  const secondVideo = () => {
      // setUri((prevRepeat) => 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4');
      setUri((prevRepeat) => 'https://res.vmallres.com//uomcdn/CN/cms/202210/C75C7E20060F3E909F2998E13C3ABC03.mp4');
  };

  const changeResizeMode = (resizeMode) => {
      setResizeMode((prevResizeMode) => resizeMode);
  };

  return (

    <ScrollView style={styles.container} ref={scrollRef}>
        <Image style={styles.video} source={{uri: 'https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/sbom/4002010007801/group/800_800_9B1356F1330EADDCB20D35D2AE1F46E0.jpg'}}/>
          <RNCVideo
        style={styles.video}
        ref={videoRef}
        drm={{ type: 'fairplay', certificateUrl: 'sasddd', drmType: "drmfairplay", }}
        source={{ uri: uri ,isNetwork:true}}
        paused={paused}
        muted={muted}
        resizeMode={resizeMode}
        repeat={repeat}
        volume={1}
        disableFocus={disableFocus}
        poster={'https://res.vmallres.com/pimages/uomcdn/CN/pms/202304/sbom/4002010007801/group/800_800_9B1356F1330EADDCB20D35D2AE1F46E0.jpg'}
        posterResizeMode={posterResizeMode}
        onLoad={(e) => {
          setOnVideoLoad("onVideoLoad currentTime =" + e.currentPosition + "s duration =" + e.duration + "s width =" + e.naturalSize.width+ " orientation =" + e.naturalSize.orientation)
          setOnVideoError("onVideoError error = ok" )
        }}
        onLoadStart={(e) => {
          setOnVideoLoadStart("onVideoLoadStart isNetwork =" + e.isNetwork + " type=" + e.type + " uri=" + e.uri)
        }}
        onProgress={(e) => {
          setOnVideoProgress("onVideoProgress currentTime =" + e.currentTime + " playableDuration=" + e.playableDuration + " seekableDuration=" + e.seekableDuration)
        }}
        onError={(e) => {
          setOnVideoError("onVideoError error =" + e.error)
        }}
        onEnd={() => {
          setOnVideoEnd("onVideoEnd completed")
        }}
        onBuffer={(e) => {
          setOnVideoBuffer("onVideoBuffer :"+ e.isBuffering)
        }}
        onPlaybackStalled={() => {
          setOnPlaybackStalled("onPlaybackStalled : true")
          setOnPlaybackResume("onPlaybackResume :false")
        }}
        onPlaybackResume={() => {
          setOnPlaybackStalled("onPlaybackStalled :false")
          setOnPlaybackResume("onPlaybackResume :true")
        }}
        onReadyForDisplay={() => {
          console.log(`onReadyForDisplay :setShowPoster(false)`)
        }}
      ></RNCVideo>
    <View style={styles.container} >
        <Text style={styles.title}>网络视频demo</Text>
        <Text style={styles.labelB}>{onVideoLoad}</Text>
        <Text style={styles.label}>{onVideoError}</Text>
        <Text style={styles.label}>{onVideoLoadStart}</Text>
        <Text style={styles.labelB}>{onVideoProgress}</Text>
        <Text style={styles.label}>{onVideoEnd}</Text>
        <Text style={styles.label}>{onVideoBuffer}</Text>
        <Text style={styles.label}>{onPlaybackStalled}</Text>
        <Text style={styles.label}>{onPlaybackResume}</Text>
        <Text style={styles.title}>update source </Text>
        <View
              style={{
                flexDirection: "row",
                height: 40,
                padding: 0
              }}
            >
          <Text style={{ backgroundColor: "blue", flex: 0.25 }} onPress={() => { 
            setUri( 'https://res.vmallres.com//uomcdn/CN/cms/202210/C75C7E20060F3E909F2998E13C3ABC03.mp4');
            setPosterResizeMode("stretch");
          }}>切换net:vmallres</Text>
          <Text style={{ backgroundColor: "red", flex: 0.25 }} onPress={() => {   
            setUri('https://vjs.zencdn.net/v/oceans.mp4');
            setPosterResizeMode("contain");
          }}>切换net:oceans</Text>
        </View>
        <Text style={styles.title}>set resizeMode </Text>
        <View
              style={{
                flexDirection: "row",
                height: 40,
                padding: 0
              }}
            >
        <Text style={{ backgroundColor: "blue", flex: 0.25 }} onPress={() => {  setResizeMode("none");}} >none</Text>
        <Text style={{ backgroundColor: "red", flex: 0.25 }} onPress={() => {   setResizeMode("contain");}} >contain</Text>
        <Text style={{ backgroundColor: "yellow", flex: 0.25 }} onPress={() => {  setResizeMode("stretch");}} >stretch</Text>
        <Text style={{ backgroundColor: "green", flex: 0.25 }} onPress={() => {   setResizeMode("cover");}} >cover</Text>
        </View>
        <View
              style={{
                flexDirection: "row",
                flexWrap:"wrap",
                padding: 0
              }}
            >
        <Text style={styles.title}>操作 </Text>
        <TextInput  style={ styles.prop_input}
              placeholder='input seek sec number:'
              multiline={false}
              maxLength={30}
              keyboardType='numeric'
              onChangeText={(text)=>{ 
                const newText = text.replace(/[^\d]+/, '');
                setSeekSec(Number(newText))
              }}
              autoFocus={false}
        />
        </View>
        <View
              style={{
                flexDirection: "row",
                flexWrap:"wrap",
                padding: 0
              }}
            >
        <Text style={styles.button_b} onPress={() => {  videoRef.current?.seek(seekSec)}} >seek:{seekSec.toString()}</Text>
        <Text style={styles.button_b} onPress={() => {  togglePaused()}} >paused:{paused.toString()}</Text>
        <Text style={styles.button_b} onPress={() => {  toggleMuted() }} >muted:{muted.toString()}</Text>
        <Text style={styles.button_b} onPress={() => {  toggleRepeat() }} >repeat:{repeat.toString()}</Text>
        <Text style={styles.button_b} onPress={() => {  toggleDisableFocus() }} >disableFocus:{disableFocus.toString()}</Text>
        <Text style={styles.button_b}  >ReSizeMode:{resizeMode.toString()}</Text>
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 260,
},
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
  },
  title: {
    color: 'white',
    width: '30%', // hack
    height: 30, // hack
  },
  label: {
    color: 'gray',
    width: '100%', // hack
    minHeight:20
  },
  labelB: {
    color: 'gray',
    width: '100%', // hack
    minHeight:40
  },
  button: {
    width: 160,
    height: 36,
    backgroundColor: 'hsl(190, 50%, 70%)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    width: '100%',
    height: '100%',
    fontWeight: 'bold',
  },
  button_b: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "25%",
    minHeight:20,
    textAlign: "center",
  },
  prop_input:{
    width:160,
    height:40,
    borderWidth:1,
    backgroundColor:'white',
    color:"black",
    borderRadius: 8,
  },
});

export default RNCVideoDemo;
