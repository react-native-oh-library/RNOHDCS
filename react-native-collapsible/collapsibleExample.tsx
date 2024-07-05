import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Button,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {TestSuite, Tester, TestCase} from '@rnoh/testerino';
import Collapsible, {EasingMode} from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

export function CollapsibleExample() {
  const [activeSections, setActiveSections] = useState([0]);
  const [collapsed, setCollapsed] = useState(true);
  const [expandFromBottom, setExpandFromBottom] = useState(false);
  const renderHeaderRef = useRef('');
  const onChangeRef = useRef('');
  const renderContentRef = useRef('');
  const renderFeetRef = useRef('');
  const renderSectionTitleRef = useRef('');
  const [data, setData] = useState({
    underlayColor:true,
    expandMultiple: true,
    duration: true,
    renderAsFlatList: false,
    keyExtractor: true,
    disabled: true,
    align: 'top',
    easing: 'linear',
    collapsedHeight: 0,
    renderChildrenCollapsed: false,
    onAnimationEnd: '',
    sections: true,
    touchableComponent: true,
  });

  function toggleExpanded() {
    setCollapsed(!collapsed);
  }

  function setSections(b: number | number[]) {
    onChangeRef.current = 'pass'
    if (typeof b === 'number' && data.expandMultiple) {
      for (const key of activeSections) {
        if (key == b) return;
      }
      setActiveSections([...activeSections, b]);
    } else {
      setActiveSections([b]);
    }
  }

  function renderHeader(section: any, _: any, isActive: any) {
    renderHeaderRef.current = 'pass'
    return (
      <View style={[styles.header, isActive ? styles.active : styles.inactive]}>
        <Pressable onPress={() => { setSections(_); }}>
          <Text style={styles.headerText}>{section.title}</Text>
        </Pressable>
      </View>
    );
  }

  function renderContent(section: any, _: any, isActive: any) {
    renderContentRef.current = 'pass'
    return (
      <View
        style={[styles.content, isActive ? styles.active : styles.inactive]}>
        <Text> {section.content} </Text>
      </View>
    );
  }

  function renderSectionTitle(section: any, _: any, isActive: any) {
    renderSectionTitleRef.current = 'pass'
    return ( <View style = {{backgroundColor:'white'}}> <Text> {section.SectionTitle} </Text> </View> );
  }

  function renderFooter(section: any, _: any, isActive: any) {
    renderFeetRef.current = 'pass'
    return ( <View style = {{backgroundColor:'white'}}> <Text> {section.feet}</Text></View> );
  }
  function tester_change(title:string,buttonTitle:string,pressEvent:Function){
      return(          
        <TestCase
          itShould = {title} initialState={false}  assert={({expect, state}) => { expect(state).to.be.true; }}
          arrange={({setState}) => ( <Button title={buttonTitle} onPress={() => { pressEvent();setState(true); }}></Button> )} >
        </TestCase>
      )
  }


  return (
    <ScrollView>
      <Tester>
        <TestSuite name="Collapsible">
          <TestCase itShould="单项目展开" >
              <TouchableOpacity onPress={toggleExpanded}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>Single Collapsible</Text>
                </View>
              </TouchableOpacity>
          </TestCase>
          <Collapsible
            collapsed={collapsed}
            align={data.align}
            onAnimationEnd={() => { setData({...data, onAnimationEnd: 'pass'}); }}
            duration={data.duration ? 400 : 4000}
            collapsedHeight={data.collapsedHeight}
            renderChildrenCollapsed={data.renderChildrenCollapsed}
            >
            <View style={styles.content}>
              <Text>
                {' '}
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs{' '}
              </Text>
            </View>
          </Collapsible>
          
          {tester_change("展开动画锚点 align: 'top'",'top',()=>{ setData({...data, align: 'top'}) })}
          {tester_change("展开动画锚点 align: 'center'",'center',()=>{ setData({...data, align: 'center'}) })}
          {tester_change("折叠高度预留 collapsedHeight: 0",'0',()=>{ setData({...data, collapsedHeight: 0}) })}
          {tester_change("折叠高度预留 collapsedHeight: 40",'40',()=>{ setData({...data, collapsedHeight: 40}) })}
          {tester_change("强制渲染折叠的子项 renderChildrenCollapsed: true",'true',()=>{ setData({...data, renderChildrenCollapsed: true}) })}
          {tester_change("强制渲染折叠的子项 renderChildrenCollapsed: false",'false',()=>{ setData({...data, renderChildrenCollapsed: false}) })}
          {tester_change("展开动画时间 duration: 400",'400',()=>{ setData({...data, duration: true}) })}
          {tester_change("展开动画时间 duration: 4000",'4000',()=>{ setData({...data, duration: false}) })}

          <TestCase itShould="动画效果结束回调"> <Text> {data.onAnimationEnd} </Text> </TestCase>
          
        </TestSuite>
        <TestSuite name="Accordion">
          <Accordion
            underlayColor = {data.underlayColor?'black':'red'}
            activeSections={activeSections}
            sections={data.sections ? CONTENT : CONTENT1}
            touchableComponent={ data.touchableComponent ? TouchableHighlight : TouchableOpacity }
            expandMultiple={data.expandMultiple}
            renderHeader={renderHeader}
            renderContent={renderContent}
            renderSectionTitle = {renderSectionTitle}
            renderFooter = {renderFooter}
            duration={data.duration ? 400 : 4000}
            expandFromBottom={expandFromBottom}
            onChange={setSections}
            renderAsFlatList={data.renderAsFlatList}
            disabled={data.disabled}
            easing={data.easing}
            keyExtractor={(item, index) => {
              if (data.keyExtractor) {
                return index;
              } else {
                return (index + 3) % 5;
              }
            }}
          />

          <TestCase
            itShould="多项目展开"
            initialState={false}
            arrange={({setState}) => (
              <View>
                <View style={{ marginBottom: 5, flexDirection: 'row', justifyContent: 'center',width : '100%'}}>
                  <Text style={{fontSize: 14, fontWeight: '500', padding: 5,}}>Select:</Text>
                  {SELECTORS.map(selector => (
                    <TouchableOpacity
                      key={selector.title}
                      onPress={() => {
                        if (selector.value != undefined) {
                          setSections(selector.value);
                        } else {
                          setActiveSections([]);
                        }
                        if (activeSections.length > 1) setState(true);
                      }}>
                      <View style={{ backgroundColor: '#F5FCFF', padding: 5,}}>
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
            assert={({expect, state}) => { expect(state).to.be.true; }}>
          </TestCase>

          {tester_change("展开动画锚点 align: 'top'",'top',()=>{setData({...data, align: 'top'})})}
          {tester_change("展开动画锚点 align: 'bottom'",'bottom',()=>{setData({...data, align: 'bottom'})})}
          {tester_change("点击头部时背景色 underlayColor: true",'black',()=>{ setData({...data, underlayColor: true}) })}
          {tester_change("点击头部时背景色 underlayColor: false",'red',()=>{ setData({...data, underlayColor: false}) })}
          {tester_change("sections 数据源 sections: {CONTENT}",'CONTENT',()=>{ setData({...data, sections: true}) })}
          {tester_change("sections 数据源 sections: {CONTENT1}",'CONTENT1',()=>{ setData({...data, sections: false}) })}
          {tester_change("交互组件 touchableComponent :TouchableHighlight",'TouchableHighlight',()=>{ setData({...data, touchableComponent: true}) })}
          {tester_change("交互组件 touchableComponent :TouchableOpacity",'TouchableOpacity',()=>{ setData({...data, touchableComponent: false}) })}
          {tester_change("可交互 disabled: true",'可交互',()=>{ setData({...data, disabled: true}) })}
          {tester_change("不可交互 disabled: false",'不可交互',()=>{ setData({...data, disabled: false}) })}
          {tester_change("从底部/顶部展开 expandFromBottom:true",'顶部',()=>{ setExpandFromBottom(true) })}
          {tester_change("从底部/顶部展开 expandFromBottom:false",'底部',()=>{ setExpandFromBottom(!false) })}

          {tester_change("多重展开 expandMultiple: true",'多重展开',()=>{ setData({...data, expandMultiple: true}) })}
          {tester_change("多重展开 expandMultiple: false",'单个展开',()=>{ setData({...data, expandMultiple: false}) })}
          {tester_change("展开时间 duration: true",'400ms',()=>{ setData({...data, duration: true}) })}
          {tester_change("展开时间 duration: false",'4000ms',()=>{ setData({...data, duration: false}) })}
          {tester_change("使用FlatList渲染 renderAsFlatList: true",'true',()=>{ setData({...data, renderAsFlatList: true}) })}
          {tester_change("使用FlatList渲染 renderAsFlatList: false",'false',()=>{ setData({...data, renderAsFlatList: false}) })}
          {tester_change("内容数组排序",'true',()=>{ setData({...data, renderAsFlatList: true,keyExtractor:true}) })}
          {tester_change("内容数组排序",'false',()=>{ setData({...data, renderAsFlatList: false,keyExtractor:true}) })}

          {tester_change("EasingMode easing: 'linear'",'linear',()=>{ setData({...data, easing: 'linear'}) })}
          {tester_change("EasingMode easing: 'easeInQuad'",'easeInQuad',()=>{ setData({...data, easing: 'easeInQuad'}) })}


          <TestCase itShould="点击展开页面标题回调 onChange"> <Text>{renderHeaderRef.current}</Text> </TestCase>
          <TestCase itShould="渲染子页面头 renderHeader"> <Text>{onChangeRef.current}</Text>  </TestCase>
          <TestCase itShould="渲染子页面内容 renderContent"> <Text>{renderContentRef.current}</Text> </TestCase>
          <TestCase itShould="渲染子页面页脚 renderFeet"> <Text>{renderFeetRef.current}</Text> </TestCase>          
          <TestCase itShould="渲染子页面标题 renderSectionTitle"> <Text>{renderSectionTitleRef.current}</Text> </TestCase>
        </TestSuite>
      </Tester>
    </ScrollView>
  );
}

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';
const BACON_IPSUM1 =
  '11Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {title: 'First', feet: '1', content: "1111",SectionTitle:'1st'},
  {title: 'Second', feet: '2', content: "2222",SectionTitle:'2st'},
  {title: 'Third', feet: '3', content: "3333",SectionTitle:'3st'},
  {title: 'Fourth', feet: '4', content: "44444",SectionTitle:'4st'},
  {title: 'Fifth', feet: '5', content: "55555",SectionTitle:'5st'},
];

const CONTENT1 = [
  {title: 'First1', feet: '1', content: "1111z"},
  {title: 'Second1', feet: '2', content: "22222z"},
  {title: 'Third1', feet: '3', content: "333333z"},
  {title: 'Fourth1', feet: '4', content: "4444z"},
  {title: 'Fifth1', feet: '5', content: "5555555z"},
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
