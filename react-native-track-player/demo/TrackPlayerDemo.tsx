import React, { useEffect, useState } from "react";
import { ScrollView, Text, Button, View, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';
const TrackPlayerDemo = () => {

  const [getAddResult, setAddTrackResult] = useState('');
  const [getVolume, setVolume] = useState('');
  const [getRate, setRate] = useState('');
  const [getProgress, setProgress] = useState('');
  const [getPlaybackState, setPlaybackState] = useState('');
  const [getPlayWhenReady, setPlayWhenReady] = useState('');
  const [getState, setState] = useState('');
  const [getDuration, setDuration] = useState('');
  const [getPosition, setPosition] = useState('');
  const [getBufferedPosition, setBufferedPosition] = useState('');
  const [getRemoveResult, setRemoveTrackResult] = useState('');
  const [getSetQueuerackResult, setQueuerackResult] = useState('');
  const [getLoadResult, setLoadResult] = useState('');
  const [getMoveResult, setMoveResult] = useState('');
  const [getResetResult, setResetResult] = useState('');
  const [getGetTrackResult, setGetTrackResult] = useState('');
  const [getGetActiveTrackResult, setGetActiveTrackResult] = useState('');
  const [getGetActiveTrackIndexResult, setGetActiveTrackIndexResult] = useState('');
  const [getGetQueueResult, setGetQueueResult] = useState('');
  const [getRemoveUpcomingTracksResult, setRmoveUpcomingTracksResult] = useState('');
  const [getGetRepeatModeResult, setGetRepeatModeResult] = useState('');
  const [getGetCurrentTrackResult, setGetCurrentTrackResult] = useState('');

  useEffect(() => {
    // Set up the player
    TrackPlayer.setupPlayer();
  }, []);

  const addExample = () => {
    TrackPlayer.add([
      {
        url: "https://ting8.yymp3.com/new27/chengxiang10/1.mp3",
        title: "世界这么大还是遇见你",
        artist: "程响",
        artwork: "https://rntp.dev/example/Longing.jpeg",
        duration: 237
      },
      {
        url: "https://ting8.yymp3.com/new18/fhzq4/8.mp3",
        title: "最炫民族风",
        artist: "凤凰传奇",
        artwork: "https://rntp.dev/example/Rhythm%20City%20(Demo).jpeg",
        duration: 283
      }, {
        url: "https://ting8.yymp3.com/new27/jinzhiwen3/1.mp3",
        title: "远走高飞",
        artist: "金志文",
        artwork: "https://rntp.dev/example/Rhythm%20City%20(Demo).jpeg",
        duration: 235
      }]);
    TrackPlayer.getQueue().then((result) => {
      setAddTrackResult(JSON.stringify(result));
      console.log('TrackPlayer，getQueue: ' + JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getQueue: ' + err.message);
    });
  }

  // 开始播放歌曲
  const startExample = () => {
    // Start playing it
    TrackPlayer.play();
  }
  // 暂停播放歌曲
  const pauseExample = () => {
    TrackPlayer.pause();
  }

  // 停止播放歌曲
  const stopExample = () => {
    TrackPlayer.stop();
  }
  // 在原有当前音频位置基础上跳转
  const seekByExample = () => {
    TrackPlayer.seekBy(50);
  }
  // 跳转指定位置
  const seekToExample = () => {
    TrackPlayer.seekTo(50);
  }
  //设置音量
  const setVolumeExample = () => {
    TrackPlayer.setVolume(0.5);
  }
  //获取音量
  const getVolumeExample = () => {
    TrackPlayer.getVolume().then((result) => {
      setVolume('getVolume: ' + result);
    })
  }
  //设置播放速度
  const setRateExample = () => {
    TrackPlayer.setRate(1.5);
  }

  //获取播放速度
  const getRateExample = () => {
    TrackPlayer.getRate().then((result) => {
      setRate('getRate: ' + result);
    })
  }

  //获取当前播放音频的进度信息
  const getProgressExample = () => {
    TrackPlayer.getProgress().then((result) => {
      setProgress('getProgress: ' + JSON.stringify(result));
    })
  }

  //设置当前播放音频的播放状态
  const getPlaybackStateExample = () => {
    TrackPlayer.getPlaybackState().then((result) => {
      setPlaybackState('getPlaybackState: ' + JSON.stringify(result));
    })
  }

  // 判断当前播放器是否会自动播放
  const getPlayWhenReadyExample = () => {
    TrackPlayer.getPlayWhenReady().then((result) => {
      setPlayWhenReady('getPlayWhenReady: ' + JSON.stringify(result));
    })
  }

  // 设置当前播放器自动播放
  const setPlayWhenReadyExample = () => {
    TrackPlayer.setPlayWhenReady(false).then((result) => {
    })
  }

  // 获取播放器的播放情况.
  const getStateExample = () => {
    TrackPlayer.getState().then((result) => {
      setState('getState: ' + JSON.stringify(result))
    })
  }

  // 获取当前曲目的时长.
  const getDurationExample = () => {
    TrackPlayer.getDuration().then((result) => {
      setDuration('getDuration: ' + result)
    })
  }

  // 获取当前曲目的位置
  const getPositionExample = () => {
    TrackPlayer.getPosition().then((result) => {
      setPosition('getPosition: ' + result)
    })
  }

  // 获取当前曲目的缓冲位置
  const getBufferedPositionExample = () => {
    TrackPlayer.getBufferedPosition().then((result) => {
      setBufferedPosition('getBufferedPosition: ' + result)
    })
  }

  // 删除曲目
  const removeExample = () => {
    TrackPlayer.remove([0, 2]);
    TrackPlayer.getQueue().then((result) => {
      setRemoveTrackResult(JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getQueue: ' + err.message);
    });
  }

  // 清除队列 插入新的曲目
  const setQueueExample = () => {
    TrackPlayer.setQueue([{
      "url": "https://ting8.yymp3.com/new27/vae13/1.mp3",
      "title": "今年勇",
      "artist": "许嵩",
      "artwork": "https://rntp.dev/example/Longing.jpeg",
      "duration": 204
    },
    {
      "url": "https://ting8.yymp3.com/new27/mljyyj/1.mp3",
      "title": "起风了",
      "artist": "买辣椒也用券",
      "artwork": "https://rntp.dev/example/Soul%20Searching.jpeg",
      "duration": 323
    }])
    TrackPlayer.getQueue().then((result) => {
      setQueuerackResult(JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getQueue: ' + err.message);
    });
  }

  // 替换当前曲目
  const loadExample = () => {
    TrackPlayer.load({
      url: "https://ting8.yymp3.com/new27/jinzhiwen3/1.mp3",
      title: "远走高飞",
      artist: "金志文",
      artwork: "https://rntp.dev/example/Rhythm%20City%20(Demo).jpeg",
      duration: 235
    });
    TrackPlayer.getQueue().then((result) => {
      setLoadResult(JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getQueue: ' + err.message);
    });
  }

  // 跳至队列中的曲目 参数2 为跳转后曲目的播放位置
  const skipExample = () => {
    TrackPlayer.skip(1, 100);
  }

  // 下一首 参数 下一首曲目的播放位置
  const skipToNextExample = () => {
    TrackPlayer.skipToNext(30);
  }

  // 上一首 参数 上一首曲目的播放位置
  const skipToPreviousExample = () => {
    TrackPlayer.skipToPrevious(30);
  }

  // 将音频从指定索引移动到另一个索引
  const moveExample = () => {
    TrackPlayer.move(2, 0);
    TrackPlayer.getQueue().then((result) => {
      setMoveResult(JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getQueue: ' + err.message);
    });
  }

  // 重置播放器，停止当前曲目并清除队列
  const resetExample = () => {
    TrackPlayer.reset();
    TrackPlayer.getQueue().then((result) => {
      setResetResult('resetResult: ' + JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getQueue: ' + err.message);
    });
  }

  // 从队列中获取跟踪对象
  const getTrackExample = () => {
    TrackPlayer.getTrack(1).then((result) => {
      setGetTrackResult('getTrackResult: ' + JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer，TrackPlayer getTrack: ' + err.message);
    });
  }

  // 获取活动音频
  const getActiveTrackExample = () => {
    TrackPlayer.getActiveTrack().then((result) => {
      setGetActiveTrackResult('getActiveTrack: ' + JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getActiveTrack: ' + err.message);
    });
  }

  // 获取活动音频的索引
  const getActiveTrackIndexExample = () => {
    TrackPlayer.getActiveTrackIndex().then((result) => {
      setGetActiveTrackIndexResult('getActiveTrackIndex: ' + JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getActiveTrackIndex: ' + err.message);
    });
  }

  // 获取整个队列
  const getQueueExample = () => {
    TrackPlayer.getQueue().then((result) => {
      setGetQueueResult(JSON.stringify(result));
      console.log('TrackPlayer，getQueue: ' + JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getQueue: ' + err.message);
    });
  }

  // 清除队列中所有即将播放的曲目。
  const removeUpcomingTracksExample = () => {
    TrackPlayer.removeUpcomingTracks();
    TrackPlayer.getQueue().then((result) => {
      setRmoveUpcomingTracksResult('removeUpcomingTracks: ' + JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getQueue: ' + err.message);
    });
  }

  // 更新队列中当前播放曲目的元数据 
  const updateNowPlayingMetadataExample = () => {
    TrackPlayer.updateNowPlayingMetadata({
      "title": "中文歌03",
      "artist": "不知名的中文歌曲",
      "artwork": "https://rntp.dev/example/Soul%20Searching.jpeg",
      "duration": 77
    });
  }

  // 更新队列中曲目的元数据 
  const updateMetadataForTrackExample = () => {
    TrackPlayer.updateMetadataForTrack(0, {
      "title": "起风了",
      "artist": "买辣椒也用券",
      "artwork": "https://ting8.yymp3.com/new27/mljyyj/1.mp3",
      "duration": 323
    });
  }

  // 清除当前曲目的元数据 
  const clearNowPlayingMetadataExample = () => {
    TrackPlayer.clearNowPlayingMetadata();
  }

  // 设置播放模式
  const setRepeatModeQueueExample = () => {
    TrackPlayer.setRepeatMode(2).then((result) => {
      console.log('TrackPlayer，setRepeatMode: ' + result);
    }, err => {
      console.error('TrackPlayer setRepeatMode: ' + err.message);
    })
  }

  // 获取播放模式
  const getRepeatModeExample = () => {
    TrackPlayer.getRepeatMode().then((result) => {
      setGetRepeatModeResult('getRepeatModeResult: ' + result)
    }, err => {
      console.error('TrackPlayer getRepeatMode: ' + err.message);
    })
  }

  // 获取活动音频
  const getCurrentTrackExample = () => {
    TrackPlayer.getCurrentTrack().then((result) => {
      setGetCurrentTrackResult('getCurrentTrack: ' + JSON.stringify(result))
    }, err => {
      console.error('TrackPlayer getCurrentTrack: ' + err.message);
    });
  }



  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>TrackPlayerDemo </Text>
        <View>
          <Text style={styles.text}>添加Track</Text>
          <Button
            title="add"
            color="#9a73ef"
            onPress={addExample}
          />
          <Text style={styles.result} allowFontScaling>{getAddResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>播放Track</Text>
          <Button
            title="play"
            color="#9a73ef"
            onPress={startExample}
          />
        </View>

        <View>
          <Text style={styles.text}>暂停Track</Text>
          <Button
            title="pause"
            color="#9a73ef"
            onPress={pauseExample}
          />
        </View>

        <View>
          <Text style={styles.text}>停止Track</Text>
          <Button
            title="stop"
            color="#9a73ef"
            onPress={stopExample}
          />
        </View>

        <View>
          <Text style={styles.text}>获取播放状态</Text>
          <Button
            title="getPlaybackState"
            color="#9a73ef"
            onPress={getPlaybackStateExample}
          />
          <Text style={styles.result} allowFontScaling>{getPlaybackState}</Text>
        </View>

        <View>
          <Text style={styles.text}>Track：seekBy（50）</Text>
          <Button
            title="seekBy"
            color="#9a73ef"
            onPress={seekByExample}
          />
        </View>

        <View>
          <Text style={styles.text}>Track：seekTo（50）</Text>
          <Button
            title="seekTo"
            color="#9a73ef"
            onPress={seekToExample}
          />
        </View>

        <View>
          <Text style={styles.text}>获取当前播放位置</Text>
          <Button
            title="getPosition"
            color="#9a73ef"
            onPress={getPositionExample}
          />
          <Text style={styles.result} allowFontScaling>{getPosition}</Text>
        </View>

        <View>
          <Text style={styles.text}>设置当前音量为0.5</Text>
          <Button
            title="setVolume"
            color="#9a73ef"
            onPress={setVolumeExample}
          />
        </View>

        <View>
          <Text style={styles.text}>获取当前音量</Text>
          <Button
            title="getVolume"
            color="#9a73ef"
            onPress={getVolumeExample}
          />
          <Text style={styles.result} allowFontScaling>{getVolume}</Text>
        </View>

        <View>
          <Text style={styles.text}>设置播放速度为1.5</Text>
          <Button
            title="setRate"
            color="#9a73ef"
            onPress={setRateExample}
          />
        </View>

        <View>
          <Text style={styles.text}>获取当前播放速度</Text>
          <Button
            title="getRate"
            color="#9a73ef"
            onPress={getRateExample}
          />
          <Text style={styles.result} allowFontScaling>{getRate}</Text>
        </View>

        <View>
          <Text style={styles.text}>设置为不自动播放</Text>
          <Button
            title="setPlayWhenReady"
            color="#9a73ef"
            onPress={setPlayWhenReadyExample}
          />
        </View>

        <View>
          <Text style={styles.text}>获取当前是否是自动播放</Text>
          <Button
            title="getPlayWhenReady"
            color="#9a73ef"
            onPress={getPlayWhenReadyExample}
          />
          <Text style={styles.result} allowFontScaling>{getPlayWhenReady}</Text>
        </View>

        <View>
          <Text style={styles.text}>获取当前播放状态</Text>
          <Button
            title="getState"
            color="#9a73ef"
            onPress={getStateExample}
          />
          <Text style={styles.result} allowFontScaling>{getState}</Text>
        </View>

        <View>
          <Text style={styles.text}>获取当前各种播放进度</Text>
          <Button
            title="getProgress"
            color="#9a73ef"
            onPress={getProgressExample}
          />
          <Text style={styles.result} allowFontScaling>{getProgress}</Text>
        </View>

        <View>
          <Text style={styles.text}>获取当前曲目时长</Text>
          <Button
            title="getDuration"
            color="#9a73ef"
            onPress={getDurationExample}
          />
          <Text style={styles.result} allowFontScaling>{getDuration}</Text>
        </View>

        <View>
          <Text style={styles.text}>获取当前曲目缓冲进度</Text>
          <Button
            title="getBufferedPosition"
            color="#9a73ef"
            onPress={getBufferedPositionExample}
          />
          <Text style={styles.result} allowFontScaling>{getBufferedPosition}</Text>
        </View>

        <View>
          <Text style={styles.text}>删除队列中曲目0,2</Text>
          <Button
            title="remove"
            color="#9a73ef"
            onPress={removeExample}
          />
          <Text style={styles.result} allowFontScaling>{getRemoveResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>重新设置播放队列</Text>
          <Button
            title="setQueue"
            color="#9a73ef"
            onPress={setQueueExample}
          />
          <Text style={styles.result} allowFontScaling>{getSetQueuerackResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>替换当前播放曲目</Text>
          <Button
            title="load"
            color="#9a73ef"
            onPress={loadExample}
          />
          <Text style={styles.result} allowFontScaling>{getLoadResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>跳转到其他曲目</Text>
          <Button
            title="skip"
            color="#9a73ef"
            onPress={skipExample}
          />
        </View>

        <View>
          <Text style={styles.text}>播放下一首</Text>
          <Button
            title="skipToNext"
            color="#9a73ef"
            onPress={skipToNextExample}
          />
        </View>

        <View>
          <Text style={styles.text}>播放上一首</Text>
          <Button
            title="skipToPrevious"
            color="#9a73ef"
            onPress={skipToPreviousExample}
          />
        </View>

        <View>
          <Text style={styles.text}>移动曲目2,0</Text>
          <Button
            title="move"
            color="#9a73ef"
            onPress={moveExample}
          />
          <Text style={styles.result} allowFontScaling>{getMoveResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>清空播放队列</Text>
          <Button
            title="reset"
            color="#9a73ef"
            onPress={resetExample}
          />
          <Text style={styles.result} allowFontScaling>{getResetResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>获取播放队列中的曲目（1）</Text>
          <Button
            title="getTrack"
            color="#9a73ef"
            onPress={getTrackExample}
          />
          <Text style={styles.result} allowFontScaling>{getGetTrackResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>获取队列中正在播放的曲目</Text>
          <Button
            title="getActiveTrack"
            color="#9a73ef"
            onPress={getActiveTrackExample}
          />
          <Text style={styles.result} allowFontScaling>{getGetActiveTrackResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>获取队列中正在播放的曲目的索引</Text>
          <Button
            title="getActiveTrackIndex"
            color="#9a73ef"
            onPress={getActiveTrackIndexExample}
          />
          <Text style={styles.result} allowFontScaling>{getGetActiveTrackIndexResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>获取队列中所有曲目</Text>
          <Button
            title="getQueue"
            color="#9a73ef"
            onPress={getQueueExample}
          />
          <Text style={styles.result} allowFontScaling>{getGetQueueResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>清楚队列中即将播放的曲目</Text>
          <Button
            title="removeUpcomingTracks"
            color="#9a73ef"
            onPress={removeUpcomingTracksExample}
          />
          <Text style={styles.result} allowFontScaling>{getRemoveUpcomingTracksResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>设置播放模式，循环播放</Text>
          <Button
            title="setRepeatMode"
            color="#9a73ef"
            onPress={setRepeatModeQueueExample}
          />
        </View>

        <View>
          <Text style={styles.text}>获取当前播放模式</Text>
          <Button
            title="getRepeatMode"
            color="#9a73ef"
            onPress={getRepeatModeExample}
          />
          <Text style={styles.result} allowFontScaling>{getGetRepeatModeResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>获取当前播放曲目索引</Text>
          <Button
            title="getCurrentTrack"
            color="#9a73ef"
            onPress={getCurrentTrackExample}
          />
          <Text style={styles.result} allowFontScaling>{getGetCurrentTrackResult}</Text>
        </View>

        <View>
          <Text style={styles.text}>更新当前正在播放曲目的元数据</Text>
          <Button
            title="updateNowPlayingMetadata"
            color="#9a73ef"
            onPress={updateNowPlayingMetadataExample}
          />
        </View>

        <View>
          <Text style={styles.text}>更新当前队列中指定曲目的元数据（0）</Text>
          <Button
            title="updateMetadataForTrack"
            color="#9a73ef"
            onPress={updateMetadataForTrackExample}
          />
        </View>

        <View>
          <Text style={styles.text}>清除当前正在播放曲目的元数据</Text>
          <Button
            title="clearNowPlayingMetadata"
            color="#9a73ef"
            onPress={clearNowPlayingMetadataExample}
          />
        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'red',
  },
  result: {
    marginTop: 10,
    fontSize: 18,
    marginBottom: 10,
    color: 'green',
  }
});
export default TrackPlayerDemo;