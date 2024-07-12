import {
  Tester,
  Filter,
  TestSuite,
  LogicalTestCase,
  TestCase as _TestCase,
} from "@rnoh/testerino";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import performance, {
  PerformanceObserver,
  setResourceLoggingEnabled,
} from "@react-native-oh-tpl/react-native-performance";
const PALETTE = {
  REACT_CYAN_LIGHT: "hsl(193, 95%, 68%)",
  REACT_CYAN_DARK: "hsl(193, 95%, 30%)",
};
function Button({ label, onPress }: { onPress: () => void; label: string }) {
  return (
    <TouchableHighlight
      underlayColor={PALETTE.REACT_CYAN_DARK}
      style={{
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: PALETTE.REACT_CYAN_LIGHT,
        borderWidth: 2,
        borderColor: PALETTE.REACT_CYAN_DARK,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "black", fontWeight: "bold", fontSize: 12 }}>
        {label}
      </Text>
    </TouchableHighlight>
  );
}
type TesterTag = "dev";
type TesterHarmonySkipProp =
  | boolean
  | string
  | {
      arkTS: string | boolean;
      cAPI: string | boolean;
    };

type TesterSkipProp =
  | {
      android: string | boolean;
      harmony: TesterHarmonySkipProp;
    }
  | string;

function prepareSkipProp(skipProp: TesterSkipProp | undefined) {
  return skipProp
    ? typeof skipProp === "string"
      ? skipProp
      : Platform.select({
          android: skipProp?.android,
          harmony: prepareHarmonySkipProp(skipProp?.harmony),
        })
    : undefined;
}

function prepareHarmonySkipProp(
  skipProp: TesterHarmonySkipProp,
): string | boolean {
  if (typeof skipProp === "string" || typeof skipProp === "boolean") {
    return skipProp;
  } else {
    return "rnohArchitecture" in Platform.constants &&
      Platform.constants.rnohArchitecture === "C_API"
      ? skipProp?.cAPI
      : skipProp?.arkTS;
  }
}

function Example({
  itShould,
  children,
  skip,
  tags,
  modal,
}: {
  itShould: string;
  children: any;
  modal?: boolean;
  skip?: TesterSkipProp;
  tags?: TesterTag[];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      tags={tags}
      skip={prepareSkipProp(skip)}
    >
      {children}
    </_TestCase>
  );
}

function Manual<TState = undefined>({
  itShould,
  skip,
  tags,
  modal,
  initialState,
  arrange,
  assert,
}: {
  itShould: string;
  skip?: TesterSkipProp;
  tags?: TesterTag[];
  modal?: boolean;
  initialState: TState;
  arrange: SmartManualTestCaseProps<TState>["arrange"];
  assert: SmartManualTestCaseProps<TState>["assert"];
}) {
  return (
    <_TestCase
      itShould={itShould}
      modal={modal}
      tags={tags}
      skip={prepareSkipProp(skip)}
      initialState={initialState}
      arrange={arrange}
      assert={assert}
    />
  );
}

function Logical({
  itShould,
  skip,
  tags,
  fn,
}: {
  itShould: string;
  skip?: TesterSkipProp;
  tags?: TesterTag[];
  fn: React.ComponentProps<typeof LogicalTestCase>["fn"];
}) {
  return (
    <_TestCase
      itShould={itShould}
      skip={prepareSkipProp(skip)}
      tags={tags}
      fn={fn}
    />
  );
}

const TestCase = {
  Example: Example,
  Manual: Manual,
  Logical: Logical,
};

export function TestNativePerformanceDemo({ filter }: { filter: Filter }) {
  const scrollRef = React.useRef<ScrollView>(null);
  const [result1, setResult1] = React.useState(0);
  const [result11, setResult11] = React.useState(0);
  const [result2, setResult2] = React.useState("");
  const [result3, setResult3] = React.useState("");
  const [result4, setResult4] = React.useState("");
  const [result5, setResult5] = React.useState("");
  const [result6, setResult6] = React.useState("");
  const [result7, setResult7] = React.useState("");
  const [result7r, setResult7r] = React.useState(999);
  const [result8, setResult8] = React.useState("");
  const [result8r, setResult8r] = React.useState(999);
  return (
    <Tester style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <TestSuite name="React Native Performance">
          <TestCase.Logical
            itShould="Convert a performance timestamp：测试timeOrigin属性"
            fn={({ expect }) => {
              performance.mark("entry");
              let entry = performance.getEntriesByName("entry")[0];
              const timestamp =
                Date.now() - performance.timeOrigin + entry.startTime;
              setResult1(timestamp);
              expect(timestamp).to.be.a("number");
            }}
          />
          <TestCase.Example itShould="display timestamp：展示通过timeOrigin属性获取的时间戳">
            <Text>{JSON.stringify(result1)}</Text>
          </TestCase.Example>
          <TestCase.Logical
            itShould="now timestamp：测试now方法"
            fn={({ expect }) => {
              const timestamp = performance.now();
              setResult11(timestamp);
              expect(timestamp).to.be.a("number");
            }}
          />
          <TestCase.Example itShould="display timestamp：展示通过now方法获取的时间戳">
            <Text>{JSON.stringify(result11)}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Basic measure example：测试mark（'myMark'）及measure('myMeasure2', 'myMark')方法"
            initialState={false}
            arrange={({ setState }) => (
              <Button
                label="measure your mark"
                onPress={() => {
                  performance.mark("myMark");
                  performance.measure("myMeasure2", "myMark");
                  let ms = performance.getEntriesByName("myMeasure2");
                  setResult2(JSON.stringify(ms[0]));
                  setState(ms[0]);
                }}
              />
            )}
            assert={async ({ expect, state }) => {
              expect(state).to.have.property("name", "myMeasure2");
              expect(state).to.contains.all.keys(
                "name",
                "entryType",
                "startTime",
                "duration",
              );
            }}
          />
          <TestCase.Example itShould="display measure：展示measure('myMeasure2', 'myMark')方法返回值">
            <Text>{result2}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Meta data:测试mark及measure方法附加detail信息以及getEntriesByName方法"
            initialState={false}
            arrange={({ setState }) => (
              <Button
                label="measure your Meta data Mark"
                onPress={() => {
                  performance.mark("myMark", {
                    detail: {
                      screen: "settings",
                    },
                  });
                  performance.measure("myMeasure3", {
                    start: "myMark",
                    detail: {
                      category: "render",
                    },
                  });
                  let ms = performance.getEntriesByName("myMeasure3");
                  // -> [{ name: "myMeasure3", entryType: "measure", startTime: 98, duration: 123, detail: {category: 'render'} }]
                  setResult3(JSON.stringify(ms[0]));
                  setState(ms[0]);
                }}
              />
            )}
            assert={async ({ expect, state }) => {
              expect(state).to.have.property("name", "myMeasure3");
              expect(state).to.have.property("detail");
              expect(state.detail).to.have.property("category", "render");
              expect(state).to.contains.all.keys(
                "name",
                "entryType",
                "startTime",
                "duration",
                "detail",
              );
            }}
          />
          <TestCase.Example itShould="display measure attached meta data:展示mark及measure方法的返回值">
            <Text>{result3}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Subscribing to entries：测试PerformanceObserver对象的observe方法以及Performance对象的getEntries方法"
            initialState={false}
            arrange={({ setState }) => (
              <Button
                label="subscribing to entries"
                onPress={() => {
                  performance.mark("newTimeMark");
                  performance.measure("newTime", "newTimeMark");
                  const measureObserver = new PerformanceObserver(
                    (list, observer) => {
                      let res = [];
                      list.getEntries().forEach((entry) => {
                        res.push(entry);
                      });
                      setResult4(JSON.stringify(res[0]));
                      setState(res[0]);
                    },
                  );
                  measureObserver.observe({ type: "measure", buffered: true });
                }}
              />
            )}
            assert={async ({ expect, state }) => {
              expect(state).to.have.property("name");
              expect(state).to.contains.all.keys(
                "name",
                "entryType",
                "startTime",
                "duration",
              );
            }}
          />
          <TestCase.Example itShould="display subscribed measure：展示PerformanceObserver对象的observe方法监测到的performance Entry">
            <Text>{result4}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Network resources：测试setResourceLoggingEnabled API及getEntriesByType方法"
            initialState={false}
            arrange={({ setState }) => (
              <Button
                label="test network resources"
                onPress={async () => {
                  setResourceLoggingEnabled(true);
                  await fetch("https://www.baidu.com");
                  let res = performance.getEntriesByType("resource");
                  setResult5(JSON.stringify(res[0]));
                  setState(res[0]);
                }}
              />
            )}
            assert={async ({ expect, state }) => {
              expect(state).to.have.property("name");
              expect(state).to.have.property("initiatorType", "xmlhttprequest");
              expect(state).to.contains.all.keys(
                "name",
                "entryType",
                "startTime",
                "duration",
              );
            }}
          />
          <TestCase.Example itShould="display network resources">
            <Text>{result5}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Custom metrics：测试metrics方法"
            initialState={false}
            arrange={({ setState }) => (
              <Button
                label="test custom metrics"
                onPress={async () => {
                  performance.metric("myMetric", 123);
                  let res = performance.getEntriesByType("metric");
                  setResult6(JSON.stringify(res[0]));
                  setState(res[0]);
                  // -> [{ name: "myMetric", entryType: "metric", startTime: 98, duration: 0, value: 123 }]
                }}
              />
            )}
            assert={async ({ expect, state }) => {
              expect(state).to.have.property("name", "myMetric");
              expect(state).to.have.property("value", 123);
              expect(state).to.contains.all.keys(
                "name",
                "entryType",
                "startTime",
                "duration",
                "value",
              );
            }}
          />
          <TestCase.Example itShould="display custom metrics">
            <Text>{result6}</Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Clear Marks：测试clearMarks方法"
            initialState={false}
            arrange={({ setState }) => (
              <Button
                label="Test Clear Marks"
                onPress={async () => {
                  performance.mark("myMetric333");
                  let res1 = performance.getEntriesByType("mark");
                  setResult7(JSON.stringify(res1));
                  performance.clearMarks();
                  let res2 = performance.getEntriesByType("mark");
                  setResult7r(res2.length);
                  setState(res2);
                }}
              />
            )}
            assert={async ({ expect, state }) => {
              expect(state).to.be.have.lengthOf(0);
            }}
          />
          <TestCase.Example itShould="display clear marks">
            <Text>展示之前的marks{result7}</Text>
            <Text>
              展示clear之后的marks.length(default value:999){result7r}
            </Text>
          </TestCase.Example>
          <TestCase.Manual
            itShould="Clear Measures：测试clearMeasures方法"
            initialState={false}
            arrange={({ setState }) => (
              <Button
                label="Test Clear Measures"
                onPress={async () => {
                  performance.mark("myMark666");
                  performance.measure("myMeasure666", "myMark666");
                  let res1 = performance.getEntriesByType("measure");
                  setResult8(JSON.stringify(res1));
                  performance.clearMeasures();
                  let res2 = performance.getEntriesByType("measure");
                  setResult8r(res2.length);
                  setState(res2);
                }}
              />
            )}
            assert={async ({ expect, state }) => {
              expect(state).to.be.have.lengthOf(0);
            }}
          />
          <TestCase.Example itShould="display clear measures">
            <Text>展示之前的measures{result8}</Text>
            <Text>
              展示clear之后的measures.length(default value:999){result8r}
            </Text>
          </TestCase.Example>
          <View style={styles.buttomMargin}></View>
        </TestSuite>
      </ScrollView>
    </Tester>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333",
  },
  fontstyle: {
    fontSize: 32,
    fontWeight: 600,
  },
  caseStyle: {
    width: "100%",
    height: 50,
    lineHeight: 50,
    marginBottom: 20,
  },
  buttomMargin: {
    width: "100%",
    height: 60,
  },
});
