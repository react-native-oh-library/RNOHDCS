import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
// import {TestCase} from '../../components/TestCase';
import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Switch,
  ScrollView,
} from 'react-native';
import {
  pick,
  types,
  pickDirectory,
  pickSingle,
  DocumentPickerOptions,
  isCancel,
} from 'react-native-document-picker';


const typeList = Object.keys(types);

interface MultiSelectProps {
  onSelectValue?: (val: string[]) => void;
}

interface UiSelItem {
  label: keyof typeof types;
  selected: boolean;
  index: number;
}

type DirType = 'documentDirectory' | 'cachesDirectory';

interface DirOpt {
  label: DirType;
  selected: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({onSelectValue}) => {
  const [typeUi, setTypeUi] = useState<UiSelItem[]>(
    typeList.map((val, index) => ({
      label: val as keyof typeof types,
      selected: false,
      index,
    })),
  );

  const onClickSelLabel = (val: (typeof typeUi)[0]) => {
    // 选择allfile不行选择其它的
    if (
      typeUi.find(t => t.label === 'allFiles')?.selected &&
      val.label !== 'allFiles'
    ) {
      return;
    }
    let newList = [];
    if (val.label === 'allFiles') {
      newList = typeUi.map(s => {
        return s.label === 'allFiles'
          ? {...s, selected: !s.selected}
          : {...s, selected: false};
      });
    } else {
      newList = typeUi.map(s => {
        return val.index === s.index ? {...s, selected: !s.selected} : {...s};
      });
    }
    const extList = newList
      .filter(t => t.selected)
      .map(t => types[t.label])
      .reduce((res, typeStr) => {
        res.push(...typeStr.split(' '));
        return res;
      }, [] as string[]);
    if (onSelectValue) {
      onSelectValue(extList);
    }
    setTypeUi(newList);
  };

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          rowGap: 14,
        }}>
        <View style={{width: '100%'}}>
          <Text style={{fontSize: 20, fontWeight: '600', margin: 6}}>
            picker 的文件类型
          </Text>
        </View>
        {typeUi.map(s => (
          <TouchableOpacity
            key={s.label}
            onPress={() => {
              onClickSelLabel(s);
            }}>
            <View
              style={s.selected ? styles.selectBtnActive : styles.selectBtn}>
              <Text>{s.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default function DocumentPickerDemo(): JSX.Element {
  const [pickResult, setPickResult] = useState('');
  // 是否允许多选
  const [allowMultiSelection, setAllowMultiSelection] = useState(true);
  // 选择文件类型
  const [fileTypes, setFileTypes] = useState<string[]>([]);
  // copyTo 文件夹
  const [dirUi, setDirui] = useState<Array<DirOpt>>([
    {label: 'documentDirectory', selected: false},
    {label: 'cachesDirectory', selected: false},
  ]);

  const copyTo = dirUi.find(d => d.selected)?.label;

  const pickOpt: DocumentPickerOptions<'harmony'> = {
    allowMultiSelection,
    presentationStyle: 'overFullScreen',
  };
  if (copyTo) {
    pickOpt.copyTo = copyTo;
  }
  if (fileTypes.length) {
    pickOpt.type = fileTypes;
  }

  const onDirSelect = (val: DirOpt) => {
    const newUiList = dirUi.map(d => {
      if (val.label === d.label) {
        return {...d, selected: !d.selected};
      } else {
        return {...d, selected: false};
      }
    });
    setDirui(newUiList);
  };

  const pickFile = async () => {
    try {
      const res = await pick(pickOpt);
      setPickResult(JSON.stringify(res));
      return res;
    } catch (err) {
      console.log(err);
      console.log('isCancel: ' + isCancel(err));
    }
  };

  const pickS = async () => {
    try {
      const res = await pickSingle(pickOpt);
      setPickResult(JSON.stringify(res));
      return res;
    } catch (err) {
      console.log(err);
      console.log('isCancel: ' + isCancel(err));
    }
  };

  const pickDir = async () => {
    try {
      const res = await pickDirectory();
      console.log(res);
      setPickResult(JSON.stringify(res));
      return res;
    } catch (error) {
      console.log('isCancel: ' + isCancel(error));
    }

  };

  return (
    <Tester style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <Text>{JSON.stringify(pickOpt)}</Text>

        <MultiSelect onSelectValue={setFileTypes}></MultiSelect>

        <View style={{width: '100%'}}>
          <Text style={{fontSize: 20, fontWeight: '600', margin: 6}}>
            是否多选
          </Text>
        </View>

        <Switch
          value={allowMultiSelection}
          onValueChange={setAllowMultiSelection}></Switch>

        <View style={{width: '100%'}}>
          <Text style={{fontSize: 20, fontWeight: '600', margin: 6}}>
            copyTo文件夹
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            rowGap: 14,
          }}>
          {dirUi.map(s => (
            <TouchableOpacity
              key={s.label}
              onPress={() => {
                onDirSelect(s);
              }}>
              <View
                style={s.selected ? styles.selectBtnActive : styles.selectBtn}>
                <Text>{s.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TestSuite name="document picker">

          <TestCase
            itShould="选择文件"
            tags={['C_API']}
            initialState={[]}
            arrange={({setState}) => {
              return (
                <TouchableOpacity
                  onPress={async () => {
                    const res = await pickFile();
                    console.log(res);
                    setState(res);
                  }}
                  style={styles.btn}>
                  <Text style={styles.btnText}> pick file </Text>
                </TouchableOpacity>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state.length).to.be.greaterThan(0);
            }}
          />

          <TestCase
            itShould="选择单个文件"
            initialState={undefined as any}
            tags={['C_API']}
            arrange={({setState}) => {
              return (
                <TouchableOpacity
                  onPress={async () => {
                    const res = await pickS();
                    console.log(res);
                    setState(res);
                  }}
                  style={styles.btn}>
                  <Text style={styles.btnText}> pick single </Text>
                </TouchableOpacity>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.have.property('uri');
            }}
          />

          <TestCase
            itShould="选择文件夹"
            initialState={undefined as any}
            arrange={({setState}) => {
              return (
                <TouchableOpacity
                  onPress={async () => {
                    const res = await pickDir();
                    setState(res);
                  }}
                  style={styles.btn}>
                  <Text style={styles.btnText}> pick Dir </Text>
                </TouchableOpacity>
              );
            }}
            assert={async ({expect, state}) => {
              expect(state).to.have.property('uri');
            }}
          />
        </TestSuite>

        <View style={{width: '100%'}}>
          <Text style={{fontSize: 20, fontWeight: '600', margin: 6}}>
            选择结果
          </Text>
        </View>
        <Text>{pickResult}</Text>
      </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    width: '90%',
  },
  btn: {
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'blue',
  },
  btnText: {fontWeight: 'bold', color: '#fff', fontSize: 20},
  selectBtn: {
    padding: 8,
    margin: 3,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#753c13',
  },
  selectBtnActive: {
    padding: 8,
    margin: 3,
    backgroundColor: '#e2803b',
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 1,
  },
});
