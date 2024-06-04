import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable,Button} from 'react-native';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

export function CollapsibleExample() {
  const [activeSections, setActiveSections] = useState([0]);
  const [collapsed, setCollapsed] = useState(true);
  const [expandFromBottom, setExpandFromBottom] = useState(false);

  function toggleExpanded() {
    setCollapsed(!collapsed);
  }

  function setSections(b: number | number[]) {
    if (typeof b === 'number') {
      for (const key of activeSections) {
        if (key == b) return;
      }
      setActiveSections([...activeSections, b]);
    } else {
      setActiveSections(b);
    }
  }

  function renderHeader(section: any, _: any, isActive: any) {
    return (
      <View style={[styles.header, isActive ? styles.active : styles.inactive]}>
        <Pressable
          onPress={() => {
            setSections(_);
          }}>
          <Text style={styles.headerText}>{section.title}</Text>
        </Pressable>
      </View>
    );
  }

  function renderContent(section: any, _: any, isActive: any) {
    return (
      <View
        style={[styles.content, isActive ? styles.active : styles.inactive]}>
        <Text> {section.content} </Text>
      </View>
    );
  }

  return (
    <View>
    <Tester>
      <TestSuite name="Collapsible">
      <TestCase
          itShould="单项目展开"
          initialState={false}
          arrange={({setState}) => (
            <View>
              <TouchableOpacity onPress={toggleExpanded}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>Single Collapsible</Text>
                </View>
              </TouchableOpacity>

              <Collapsible
                collapsed={collapsed}
                align="center"
                onAnimationEnd={() => {
                  setState(true);
                }}
                duration={1000}
                collapsedHeight={0}
                renderChildrenCollapsed={false}>
                <View style={styles.content}>
                  <Text>
                    {' '}
                    Bacon ipsum dolor amet chuck turducken landjaeger tongue
                    spare ribs{' '}
                  </Text>
                </View>
              </Collapsible>
            </View>
          )}
          assert={({expect, state}) => {
            expect(state).to.be.true;
          }}></TestCase>
        
      </TestSuite>
      <TestSuite name='Accordion'>
      <TestCase
          itShould="多项目展开"
          initialState={false}
          arrange={({setState}) => (
            <View>
              <View style={styles.selectors}>
                <Text style={styles.selectTitle}>Select:</Text>

                {SELECTORS.map(selector => (
                  <TouchableOpacity
                    key={selector.title}
                    onPress={() => {
                      if (selector.value != undefined) {
                        setSections(selector.value);
                      } else {
                        setActiveSections([]);
                      }
                      if(activeSections.length>1) setState(true)
                    }}>
                    <View style={styles.selector}>
                      <Text
                        style={
                          selector.value != undefined &&
                          activeSections.includes(selector.value) &&
                          styles.activeSelector
                        }>
                        {selector.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
          assert={({expect, state}) => {
            expect(state).to.be.ok;
          }}></TestCase>

          <TestCase itShould='从底部/顶部展开'
            initialState={false}
            arrange={({setState}) => (
              <Button title={`从${expandFromBottom?'顶部':'底部'}展开`} onPress={() => { setExpandFromBottom(!expandFromBottom);setState(true) }}></Button>
            )}
          assert={({expect, state}) => {
            expect(state).to.be.true;
          }}
          >
          </TestCase>
      </TestSuite>
    </Tester>

    <Accordion
        activeSections={activeSections}
        sections={CONTENT}
        touchableComponent={TouchableOpacity}
        expandMultiple={true}
        renderHeader={(a,b,c):React.ReactElement<{}> =>{ return renderHeader(a,b,c)}}
        renderContent={renderContent}
        duration={400}
        expandFromBottom = {expandFromBottom}
        onChange={setSections}
        renderAsFlatList={false}
      />

    </View>
  );
}

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {title: 'First', feet: '1', content: BACON_IPSUM},
  {title: 'Second', feet: '2', content: BACON_IPSUM},
  {title: 'Third', feet: '3', content: BACON_IPSUM},
  {title: 'Fourth', feet: '4', content: BACON_IPSUM},
  {title: 'Fifth', feet: '5', content: BACON_IPSUM},
];

const SELECTORS = [
  {title: 'First', value: 0},
  {title: 'Second', value: 1},
  {title: 'Third', value: 2},
  {title: 'Fourth', value: 3},
  {title: 'Fifth', value: 4},
  {title: 'None'},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  feet: {
    backgroundColor: '#00FCFF',
    padding: 1,
  },
  stitle: {
    backgroundColor: '#0000FF',
    padding: 1,
  },
  feetText: {
    textAlign: 'right',
    fontSize: 7,
    fontWeight: '500',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
