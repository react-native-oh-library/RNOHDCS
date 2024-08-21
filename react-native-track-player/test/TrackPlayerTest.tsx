/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect ,useState } from "react";
import { ScrollView, Text, Button } from "react-native";
import { Tester, TestSuite, TestCase } from '@rnoh/testerino';

import TrackPlayer from 'react-native-track-player';

export const TrackPlayerTest = () => {

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
  const [getAddOneResult, setAddOneTrackResult] = useState('');
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
    },{
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
      setVolume('getVolume: '+result);
    })
  }
  //设置播放速度
  const setRateExample = () => {
    TrackPlayer.setRate(1.5);
  }

   //获取播放速度
   const getRateExample = () => {
    TrackPlayer.getRate().then((result) => {
      setRate('getRate: '+result);
    })
  }

  //获取当前播放音频的进度信息
  const getProgressExample = () => {
    TrackPlayer.getProgress().then((result) => {
      setProgress('getProgress: '+JSON.stringify(result));
    })
  }

  //设置当前播放音频的播放状态
  const getPlaybackStateExample = () => {
    TrackPlayer.getPlaybackState().then((result) => {
      setPlaybackState('getPlaybackState: '+ JSON.stringify(result));
    })
  }

  // 判断当前播放器是否会自动播放
  const getPlayWhenReadyExample = () => {
    TrackPlayer.getPlayWhenReady().then((result) => {
      setPlayWhenReady('getPlayWhenReady: '+ JSON.stringify(result));
    })
  }

  // 设置当前播放器自动播放
  const setPlayWhenReadyExample01 = () => {
    TrackPlayer.setPlayWhenReady(true).then((result) => {
    })
  }

  // 设置当前播放器自动播放
  const setPlayWhenReadyExample02 = () => {
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

  // 插入曲目
  const addOneExample = () => {
    TrackPlayer.add([{
      url: "https://ting8.yymp3.com/new27/vae13/1.mp3",
      title: "今年勇",
      artist: "许嵩",
      artwork: "https://ting8.yymp3.com/new27/vae13/1.mp3",
      iduration: 204
    },{
      url: "https://ting8.yymp3.com/new27/mljyyj/1.mp3",
      title: "起风了",
      artist: "买辣椒也用券",
      artwork: "https://ting8.yymp3.com/new27/vae13/1.mp3",
      iduration: 323
    }],0).then((result) => {
      console.log('TrackPlayer，add  result: ' + result);
    })
    TrackPlayer.getQueue().then((result) => {
      setAddOneTrackResult(JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getQueue: ' + err.message);
    });
  };

  // 删除曲目
  const removeExample = () => {
    TrackPlayer.remove([0,2]);
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
      setResetResult('resetResult: '+JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getQueue: ' + err.message);
    });
  }

  // 从队列中获取跟踪对象
  const getTrackExample = () => {
    TrackPlayer.getTrack(1).then((result) => {
      setGetTrackResult('getTrackResult: '+JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer，TrackPlayer getTrack: ' + err.message);
    });
  }

  // 获取活动音频
  const getActiveTrackExample = () => {
    TrackPlayer.getActiveTrack().then((result) => {
      setGetActiveTrackResult('getActiveTrack: '+JSON.stringify(result));
    }, err => {
      console.error('TrackPlayer getActiveTrack: ' + err.message);
    });
  }

  // 获取活动音频的索引
  const getActiveTrackIndexExample = () => {
    TrackPlayer.getActiveTrackIndex().then((result) => {
      setGetActiveTrackIndexResult('getActiveTrackIndex: '+JSON.stringify(result));
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
      setRmoveUpcomingTracksResult('removeUpcomingTracks: '+JSON.stringify(result));
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
    TrackPlayer.updateMetadataForTrack(0,{
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
  const setRepeatModeOffExample = () => {
    TrackPlayer.setRepeatMode(0).then((result) => {
      console.log('TrackPlayer，setRepeatMode: ' + result);
    }, err => {
      console.error('TrackPlayer setRepeatMode: ' + err.message);
    })
  }

  // 设置播放模式
  const setRepeatModeTrackExample = () => {
    TrackPlayer.setRepeatMode(1).then((result) => {
      console.log('TrackPlayer，setRepeatMode: ' + result);
    }, err => {
      console.error('TrackPlayer setRepeatMode: ' + err.message);
    })
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
      setGetRepeatModeResult('getRepeatModeResult: '+result)
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
    <Tester>
      <TestSuite name='Player'>
        <TestCase itShould='Method：add'>
          <Button
            title="add"
            color="#9a73ef"
            onPress={addExample}
          />
          <Text allowFontScaling>{getAddResult}</Text>
        </TestCase>

        <TestCase itShould='Method：start'>
          <Button
            title="start"
            color="#9a73ef"
            onPress={startExample}
          />
        </TestCase>

        <TestCase itShould='Method：pause'>
          <Button
            title="pause"
            color="#9a73ef"
            onPress={pauseExample}
          />
        </TestCase>

        <TestCase itShould='Method：stop'>
          <Button
            title="stop"
            color="#9a73ef"
            onPress={stopExample} 
          />
        </TestCase>

        <TestCase itShould='Method：getPlaybackState'>
          <Button
            title="getPlaybackState"
            color="#9a73ef"
            onPress={getPlaybackStateExample}
          />
          <Text allowFontScaling>{getPlaybackState}</Text>
        </TestCase>

        <TestCase itShould='Method：seekBy（50）'>
          <Button
            title="seekBy"
            color="#9a73ef"
            onPress={seekByExample}
          />
        </TestCase>

        <TestCase itShould='Method：seekTo（50）'>
          <Button
            title="seekTo"
            color="#9a73ef"
            onPress={seekToExample}
          />
        </TestCase>

        <TestCase itShould='Method：getPosition'>
          <Button
            title="getPosition"
            color="#9a73ef"
            onPress={getPositionExample}
          />
          <Text allowFontScaling>{getPosition}</Text>
        </TestCase>

        <TestCase itShould='Method：setVolume(0.5)'>
          <Button
            title="setVolume"
            color="#9a73ef"
            onPress={setVolumeExample}
          />
        </TestCase>

        <TestCase itShould='Method：getVolume'>
          <Button
            title="getVolume"
            color="#9a73ef"
            onPress={getVolumeExample}
          />
          <Text allowFontScaling>{getVolume}</Text>
        </TestCase>

        <TestCase itShould='Method：setRate(1.5)'>
          <Button
            title="setRate"
            color="#9a73ef"
            onPress={setRateExample}
          />
        </TestCase>

        <TestCase itShould='Method：getRate'>
          <Button
            title="getRate"
            color="#9a73ef"
            onPress={getRateExample}
          />
           <Text allowFontScaling>{getRate}</Text>
        </TestCase>

        <TestCase itShould='Method：setPlayWhenReady(ture)'>
          <Button
            title="setPlayWhenReady"
            color="#9a73ef"
            onPress={setPlayWhenReadyExample01}
          />
        </TestCase>

        <TestCase itShould='Method：setPlayWhenReady(false)'>
          <Button
            title="setPlayWhenReady"
            color="#9a73ef"
            onPress={setPlayWhenReadyExample02}
          />
        </TestCase>

        <TestCase itShould='Method：getPlayWhenReady'>
          <Button
            title="getPlayWhenReady"
            color="#9a73ef"
            onPress={getPlayWhenReadyExample}
          />
           <Text allowFontScaling>{getPlayWhenReady}</Text>
        </TestCase>
        
        <TestCase itShould='Method：getState'>
          <Button
            title="getState"
            color="#9a73ef"
            onPress={getStateExample}
          />
          <Text allowFontScaling>{getState}</Text>
        </TestCase>

        <TestCase itShould='Method：getProgress'>
          <Button
            title="getProgress"
            color="#9a73ef"
            onPress={getProgressExample}
          />
           <Text allowFontScaling>{getProgress}</Text>
        </TestCase>

        <TestCase itShould='Method：getDuration'>
          <Button
            title="getDuration"
            color="#9a73ef"
            onPress={getDurationExample}
          />
          <Text allowFontScaling>{getDuration}</Text>
        </TestCase>

        <TestCase itShould='Method：getBufferedPosition'>
          <Button
            title="getBufferedPosition"
            color="#9a73ef"
            onPress={getBufferedPositionExample}
          />
          <Text allowFontScaling>{getBufferedPosition}</Text>
        </TestCase>
      </TestSuite>

      <TestSuite name='Queue'>
        <TestCase itShould='Method：add'>
          <Button
            title="addOne"
            color="#9a73ef"
            onPress={addOneExample}
          />
          <Text allowFontScaling>{getAddOneResult}</Text>
        </TestCase>

        <TestCase itShould='Method：remove(0,2)'>
          <Button
            title="remove"
            color="#9a73ef"
            onPress={removeExample}
          />
           <Text allowFontScaling>{getRemoveResult}</Text>
        </TestCase>

        <TestCase itShould='Method：setQueue'>
          <Button
            title="setQueue"
            color="#9a73ef"
            onPress={setQueueExample}
          />
          <Text allowFontScaling>{getSetQueuerackResult}</Text>
        </TestCase>

        <TestCase itShould='Method：load'>
          <Button
            title="load"
            color="#9a73ef"
            onPress={loadExample}
          />
          <Text allowFontScaling>{getLoadResult}</Text>
        </TestCase>

        <TestCase itShould='Method：skip'>
          <Button
            title="skip"
            color="#9a73ef"
            onPress={skipExample}
          />
        </TestCase>

        <TestCase itShould='Method：skipToNext'>
          <Button
            title="skipToNext"
            color="#9a73ef"
            onPress={skipToNextExample}
          />
        </TestCase>

        <TestCase itShould='Method：skipToPrevious'>
          <Button
            title="skipToPrevious"
            color="#9a73ef"
            onPress={skipToPreviousExample}
          />
        </TestCase>

        <TestCase itShould='Method：move'>
          <Button
            title="move"
            color="#9a73ef"
            onPress={moveExample}
          />
          <Text allowFontScaling>{getMoveResult}</Text>
        </TestCase>

        <TestCase itShould='Method：reset'>
          <Button
            title="reset"
            color="#9a73ef"
            onPress={resetExample}
          />
          <Text allowFontScaling>{getResetResult}</Text>
        </TestCase>

        <TestCase itShould='Method：getTrack(1)'>
          <Button
            title="getTrack"
            color="#9a73ef"
            onPress={getTrackExample}
          />
          <Text allowFontScaling>{getGetTrackResult}</Text>
        </TestCase>

        <TestCase itShould='Method：getActiveTrack'>
          <Button
            title="getActiveTrack"
            color="#9a73ef"
            onPress={getActiveTrackExample}
          />
          <Text allowFontScaling>{getGetActiveTrackResult}</Text>
        </TestCase>

        <TestCase itShould='Method：getActiveTrackIndex'>
          <Button
            title="getActiveTrackIndex"
            color="#9a73ef"
            onPress={getActiveTrackIndexExample}
          />
           <Text allowFontScaling>{getGetActiveTrackIndexResult}</Text>
        </TestCase>

        <TestCase itShould='Method：getQueue'>
          <Button
            title="getQueue"
            color="#9a73ef"
            onPress={getQueueExample}
          />
          <Text allowFontScaling>{getGetQueueResult}</Text>
        </TestCase>

        <TestCase itShould='Method：removeUpcomingTracks'>
          <Button
            title="removeUpcomingTracks"
            color="#9a73ef"
            onPress={removeUpcomingTracksExample}
          />
          <Text allowFontScaling>{getRemoveUpcomingTracksResult}</Text>
        </TestCase>

        <TestCase itShould='Method：setRepeatMode(Off)'>
          <Button
            title="setRepeatMode"
            color="#9a73ef"
            onPress={setRepeatModeOffExample}
          />
        </TestCase>

        <TestCase itShould='Method：setRepeatMode(Track)'>
          <Button
            title="setRepeatMode"
            color="#9a73ef"
            onPress={setRepeatModeTrackExample}
          />
        </TestCase>

        <TestCase itShould='Method：setRepeatMode(Queue)'>
          <Button
            title="setRepeatMode"
            color="#9a73ef"
            onPress={setRepeatModeQueueExample}
          />
        </TestCase>

        <TestCase itShould='Method：getRepeatMode'>
          <Button
            title="getRepeatMode"
            color="#9a73ef"
            onPress={getRepeatModeExample}
          />
          <Text allowFontScaling>{getGetRepeatModeResult}</Text>
        </TestCase>

        <TestCase itShould='Method：getCurrentTrack'>
          <Button
            title="getCurrentTrack"
            color="#9a73ef"
            onPress={getCurrentTrackExample}
          />
           <Text allowFontScaling>{getGetCurrentTrackResult}</Text>
        </TestCase>

        <TestCase itShould='Method：updateNowPlayingMetadata'>
          <Button
            title="updateNowPlayingMetadata"
            color="#9a73ef"
            onPress={updateNowPlayingMetadataExample}
          />
        </TestCase>

        <TestCase itShould='Method：updateMetadataForTrack(0)'>
          <Button
            title="updateMetadataForTrack"
            color="#9a73ef"
            onPress={updateMetadataForTrackExample}
          />
        </TestCase>

        <TestCase itShould='Method：clearNowPlayingMetadata'>
          <Button
            title="clearNowPlayingMetadata"
            color="#9a73ef"
            onPress={clearNowPlayingMetadataExample}
          />
        </TestCase>
      </TestSuite>
    </Tester>
  </ScrollView>);  
}

