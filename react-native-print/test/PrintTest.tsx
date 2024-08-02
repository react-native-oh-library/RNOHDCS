import {Tester, TestSuite, TestCase} from '@rnoh/testerino';
import React, {useState} from 'react';
import {
  ScrollView,
  Button,
} from 'react-native';
import {
  pick,
  DocumentPickerOptions,
  isCancel,
} from 'react-native-document-picker';
import RNPrint from 'react-native-print';

type DirType = 'documentDirectory' | 'cachesDirectory';

interface DirOpt {
  label: DirType;
  selected: boolean;
}

export default function DocumentPickerDemo(): JSX.Element {
  const [pickResult, setPickResult] = useState('');
  const [allowMultiSelection, setAllowMultiSelection] = useState(true);
  const [fileTypes, setFileTypes] = useState<string[]>([]);
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

  return (
    <ScrollView>
      <Tester>
        <TestSuite name="filePath">
          <TestCase tags={['C_API']} itShould="filePath(本地uri打印)">
            <Button
              title="本地url打印"
              onPress={async () => {
                const res = await pickFile();
                RNPrint.print({
                  filePath: res[0].uri,
                  jobName: 'huawei',
                });
              }}
            />
          </TestCase>
          <TestCase tags={['C_API']} itShould="filePath(远程uri打印,filePath:'https://gips2.baidu.com/it/u=2055042668,1190219470&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280')">
            <Button
              title="远程uri打印"
              onPress={() => {
                RNPrint.print({
                  filePath:
                    'https://gips2.baidu.com/it/u=2055042668,1190219470&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280',
                  jobName: 'huawei1',
                });
              }}
            />
          </TestCase>
        </TestSuite>
        <TestSuite name="jobName">
          <TestCase tags={['C_API']} itShould="jobName(打印作业的名称，是打印文件在沙箱里面的名称，无法显示出来)">
            <Button
              title="本地url打印"
              onPress={async () => {
                const res = await pickFile();
                RNPrint.print({
                  filePath: res[0].uri,
                  jobName: 'huawei',
                });
              }}
            />
          </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}
