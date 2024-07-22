import React, { useState } from "react";
import type { PropsWithChildren } from "react";
import {
  useColorScheme,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button
} from "react-native";

import {TestSuite,Tester,TestCase} from '@rnoh/testerino';


import Sound from "react-native-sound";

type SectionProps = PropsWithChildren<{
  title: string;
  func: () => void;
}>;

type SliderSectionProps = PropsWithChildren<{
  duration: number;
  value: number;
  func: () => void;
}>;


let sound:Sound;
let state = ""
export function TextSound(): JSX.Element {

    Sound.setCategory('PlayAndRecord');
  return (
    <TestSuite name="Sound">
      <TestCase
        itShould="Start playing audio"
        initialState={false}
        arrange={({setState}) => <AddMenuPlayTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase
        itShould="pause audio"
        initialState={false}
        arrange={({setState}) => <AddMenuPauseTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="stop audio"
        initialState={false}
        arrange={({setState}) => <AddMenuStopTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase
        itShould="reset audio"
        initialState={false}
        arrange={({setState}) => <AddMenuResetTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      
      <TestCase
        itShould="getFileName"
        initialState={false}
        arrange={({setState}) => <AddMenuFileNameTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase
        itShould="getDuration"
        initialState={false}
        arrange={({setState}) => <AddMenuDurationTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
      <TestCase
        itShould="getVolume"
        initialState={false}
        arrange={({setState}) => <AddMenuVolumeTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="setVolume"
        initialState={false}
        arrange={({setState}) => <AddMenuSetVolumeTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="getSpeed"
        initialState={false}
        arrange={({setState}) => <AddMenuSpeedTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="setSpeed"
        initialState={false}
        arrange={({setState}) => <AddMenuSetSpeedTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="getNumberOfLoops"
        initialState={false}
        arrange={({setState}) => <AddMenuLoopTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="setNumberOfLoops"
        initialState={false}
        arrange={({setState}) => <AddMenuSetLoopTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="getCurrentTime"
        initialState={false}
        arrange={({setState}) => <AddMenuGetCurrentTimeTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="setCurrentTime"
        initialState={false}
        arrange={({setState}) => <AddMenuSetCurrentTimeTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />

      <TestCase
        itShould="setActive"
        initialState={false}
        arrange={({setState}) => <AddMenuSetActiveTest setState={setState} />}
        assert={({state, expect}) => {
          expect(state).to.be.true;
        }}
      />
    </TestSuite>
  );
}

const AddMenuSetActiveTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
 
  const addCustomMenuItem = () => {
    Sound.setActive(true);
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Button title={"获取为活跃状态"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuSetCurrentTimeTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
 
  const addCustomMenuItem = () => {
    sound?.setCurrentTime(3000)
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Button title={"设置在3000毫秒播放"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuGetCurrentTimeTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [CurrentTime,setCurrentTime] = useState(0)
 
  const addCustomMenuItem = () => {
    sound?.getCurrentTime((currentTime:number, isPlaying:boolean)=>{

      setCurrentTime(currentTime)
    })
   
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>{CurrentTime}毫秒</Text>
      <Button title={"获取当前时间"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuSetLoopTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
 
  const addCustomMenuItem = () => {
    sound?.setNumberOfLoops(true)
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Button title={"设置循环播放"} onPress={addCustomMenuItem} />
    </View>
  );
};


const AddMenuLoopTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [NumberOfLoops,setNumberOfLoops] = useState("")
 
  const addCustomMenuItem = () => {
    const NumberOfLoops = sound?.getNumberOfLoops()
    setNumberOfLoops(NumberOfLoops)
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>{`${NumberOfLoops}`}</Text>
      <Button title={"获取是否循环播放"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuSetSpeedTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const addCustomMenuItem = () => {
    sound?.setSpeed(4)
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Button title={"设置播放速度"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuSpeedTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [speed,setSpeed] = useState("")
 
  const addCustomMenuItem = () => {
    const speed = sound?.getSpeed()
    setSpeed(speed)
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>{speed}</Text>
      <Button title={"获取播放速度"} onPress={addCustomMenuItem} />
    </View>
  );
};
const AddMenuSetVolumeTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const addCustomMenuItem = () => {
    sound?.setVolume(0.2)
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Button title={"设置音量为0.2"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuVolumeTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [volume,setVolume] = useState("")
 
  const addCustomMenuItem = () => {
    const volume = sound?.getVolume()
    setVolume(volume)
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>{volume}</Text>
      <Button title={"获取音量"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuDurationTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [duration,setDuration] = useState("")
 
  const addCustomMenuItem = () => {
    const duration = sound?.getDuration()
    setDuration(duration)
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>{duration}</Text>
      <Button title={"获取时长"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuFileNameTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [fileName,setFileName] = useState("")
 
  const addCustomMenuItem = () => {
    const fileName = sound?.getFilename()
    setFileName(fileName)
    props.setState(true);
  };
 
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>{fileName}</Text>
      <Button title={"获取文件名称"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuResetTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const addCustomMenuItem = () => {
    sound?.reset().release();
    state = "reset"
    props.setState(true);
  };
  return (
    <View style={styles.container}>
      <Button title="重置" onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuStopTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
 
  const addCustomMenuItem = () => {
    sound?.stop(()=>{
      state = "stop"
    }).release();
    props.setState(true);
  };
  return (
    <View style={styles.container}>
      <Button title={"停止"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuPauseTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
 
  const addCustomMenuItem = () => {
    sound?.pause(()=>{
      state = "pause"
    });
    props.setState(true);
  };
  return (
    <View style={styles.container}>
      <Button title={"暂停"} onPress={addCustomMenuItem} />
    </View>
  );
};

const AddMenuPlayTest = (props: {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const addCustomMenuItem = () => {
    if(state === "pause"){
      sound.play(() => {
        sound.release();
      });
    }else{
      sound = new Sound("https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3","",(error)=>{

        if (error) {
          return;
        }
        sound.play((a) => {
            console.log(a)
          state = ""
          sound.release();
        });
        
      });
    }
    props.setState(true);
  };
  return (
    <View style={styles.container}>
      <Button title={"播放"} onPress={addCustomMenuItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
  },
});