import * as React from 'react';
import { List, Divider, MD2Colors, MD3Colors, PaperProvider } from 'react-native-paper';
import ScreenWrapper from '../ScreenWrapper';


import {TestSuite,TestCase,Tester} from '@rnoh/testerino';
import { ScrollView } from 'react-native-harmony';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { EllipsizeProp } from 'react-native-paper/lib/typescript/types';

type State = string | number | undefined;
type EllipsizeMode = 'head' | 'middle' | 'tail' | 'clip'
function ListAccordionDemo() { 
  

  const [expanded, setExpanded] = React.useState<boolean>(true);
  const _handlePress = () => {
    setExpanded(!expanded);
  };

  const _handlePress1 = () => {
    console.info('fuction handlePress')
  };
  const _handLongPress = () => {
    console.info('fuction handLongPress')
  };

  
  const ListAccordionBProps = [
    {
      key: ' ListAccordion style:title={"Accordions"}',
      value: {
        title:'Accordions',
      }
    },
    {
      key: ' ListAccordion style:description={"Describes the expandable list item"}',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item'
      }
    },
    {
      key: ' ListAccordion style:left={(props: { color: string }) => <List.Icon {...props} icon="folder" />}',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />
      }
    },
    {
      key: ' ListAccordion style:right={(props: { color: string }) => <List.Icon {...props} icon="folder" />}',
      value: {
        title:'Accordions',
        right:(props: { isExpanded: boolean }) => <List.Icon {...props} icon="folder" />
      }
    },
    {
      key: ' ListAccordion style:expanded={true}',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        expanded:true
      }
    },
    {
      key: ' ListAccordion style:expanded={false}',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        expanded:false
      }
    },
    {
      key: ' ListAccordion fuction:onPress',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        expanded:expanded,
        onPress:_handlePress
      }
    },
    {
      key: ' ListAccordion fuction:onLongPress',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        onLongPress:_handLongPress
      }
    },
    {
      key: ' ListAccordion style:delayLongPress={1000}(长按延时1秒)',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        onLongPress:_handLongPress,
        delayLongPress:1000
      }
    },
    {
      key: ' ListAccordion style:delayLongPress={10000}(长按延时10秒)',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        onLongPress:_handLongPress,
        delayLongPress:10000
      }
    },
    {
      key: ' ListAccordion style:theme={ colors: { primary:"green"} }',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        theme:{ colors: { primary: 'green' } }
      }
    },
    {
      key: ' ListAccordion style:background={color:MD2Colors.red100}(该属性仅限于Android)',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        background:{color:MD2Colors.red100}
      }
    },
    {
      key: ' ListAccordion style:{backgroundColor:MD2Colors.red100}',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        style:{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' ListAccordion titleStyle:{backgroundColor:MD2Colors.red100}',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        titleStyle:{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' ListAccordion descriptionStyle:{backgroundColor:MD2Colors.red100}',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item',
        descriptionStyle:{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' ListAccordion style:rippleColor={MD2Colors.red100}',
      value: {
        title:'Accordions',
        left:(props: { color: string }) => <List.Icon {...props} icon="folder" />,
        onPress:_handlePress1,
        rippleColor:MD2Colors.red100
      }
    },
    {
      key: ' ListAccordion style:titleNumberOfLines={1}',
      value: {
        title:'Accordions Accordions Accordions Accordions Accordions',
        titleNumberOfLines:1
      }
    },
    {
      key: ' ListAccordion style:titleNumberOfLines={2}',
      value: {
        title:'Accordions Accordions Accordions Accordions Accordions',
        titleNumberOfLines:2
      }
    },
    {
      key: ' ListAccordion descriptionNumberOfLines:titleNumberOfLines={1}',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item Describes the expandable list item',
        descriptionNumberOfLines:1
      }
    },
    {
      key: ' ListAccordion descriptionNumberOfLines:titleNumberOfLines={2}',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item Describes the expandable list item',
        descriptionNumberOfLines:2
      }
    },
    {
      key: ' ListAccordion style:titleMaxFontSizeMultiplier={1}(该属性用于多设备适配)',
      value: {
        title:'Accordions',
        titleMaxFontSizeMultiplier:1
      }
    },
    {
      key: ' ListAccordion style:titleMaxFontSizeMultiplier={2}(该属性用于多设备适配)',
      value: {
        title:'Accordions',
        titleMaxFontSizeMultiplier:2
      }
    },
    {
      key: ' ListAccordion style:descriptionMaxFontSizeMultiplier={1}(该属性用于多设备适配)',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item ',
        descriptionMaxFontSizeMultiplier:1
      }
    },
    {
      key: ' ListAccordion style:descriptionMaxFontSizeMultiplier={2}(该属性用于多设备适配)',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item ',
        descriptionMaxFontSizeMultiplier:2
      }
    },
    {
      key: ' ListAccordion style:id={ListAccordion}',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item ',
        id:'ListAccordion'
      }
    },
    {
      key: ' ListAccordion style:id={ListAccordion1}',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item ',
        id:'ListAccordion1'
      }
    },
    {
      key: ' ListAccordion style:testID={ListAccordion2}',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item ',
        testID:'ListAccordion2'
      }
    },
    {
      key: ' ListAccordion style:testID={ListAccordion3}',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item ',
        testID:'ListAccordion3'
      }
    },
    {
      key: ' ListAccordion style:accessibilityLabel={accessibility Label}(该属性用于无障碍功能)',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item ',
        accessibilityLabel:'accessibility Label'
      }
    },
    {
      key: ' ListAccordion style:pointerEvents={none}',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item ',
        pointerEvents:'none' as  "box-none" | "none" | "box-only" | "auto"
      }
    },
    {
      key: ' ListAccordion children :<List.Item title="First item" />',
      value: {
        title:'Accordions',
        description:'Describes the expandable list item ',
        pointerEvents:'none' as  "box-none" | "none" | "box-only" | "auto"
      }
    },
  ]

  const [expandedId, setExpandedId] = React.useState<State>(undefined);

  const _onAccordionPress = (newExpandedId: string | number) =>
    expandedId === newExpandedId
      ? setExpandedId(undefined)
      : setExpandedId(newExpandedId);
    
  const ListAccordionGroupProps = [
    {
      key: ' ListAccordionGroup style:expandedId={expandedId} onAccordionPress:_onAccordionPress',
      value: {
        expandedId:expandedId,
        onAccordionPress:_onAccordionPress
      }
    }
  ]

  const ListIconProps = [
    {
      key: ' ListIcon style:icon ={folder}',
      value: {
        icon:'folder',
        color:MD2Colors.red100
      }
    },
    {
      key: ' ListIcon style:color ={MD2Colors.blue100}',
      value: {
        icon:'folder',
        color:MD2Colors.blue100
      }
    },
    {
      key: ' ListIcon style:color ={MD2Colors.black}',
      value: {
        icon:'folder',
        color:MD2Colors.black
      }
    },
    {
      key: ' ListIcon style:{backgroundColor:MD2Colors.red100}',
      value: {
        icon:'folder',
        color:MD2Colors.black,
        style :{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' ListIcon style:theme={ colors: { primary:"green"} }',
      value: {
        icon:'folder',
        theme:{ colors: { primary: 'green' } }
      }
    }
  ]

  const ListSectionProps = [
    {
      key: ' ListSection style:title ={"Title text for the section."}',
      value: {
        title:'Title text for the section.'
      }
    },
    {
      key: ' ListSection style:children  ={<List.Subheader>Some title</List.Subheader>}',
      value: {
        style :{backgroundColor:MD2Colors.white}
      }
    },
    {
      key: ' ListSection titleStyle:{backgroundColor:MD2Colors.red100}',
      value: {
        title:'Title text for the section.',
        titleStyle :{backgroundColor:MD2Colors.red100},
        style :{backgroundColor:MD2Colors.white}
      }
    },
    {
      key: ' ListSection style:{backgroundColor:MD2Colors.red100}',
      value: {
        style :{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' ListSection theme:{ colors: { primary:"green"} }',
      value: {
        theme :{ colors: { primary: 'green' } }
      }
    },
  ]

  const ListsubheaderProps = [
    {
      key: ' Listsubheader style:{backgroundColor:MD2Colors.red100}',
      value: {
        style :{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' Listsubheader theme:{ colors: { primary: "green" } }',
      value: {
        theme :{ colors: { primary: 'green' } }
      }
    },
    {
      key: ' Listsubheader style:maxFontSizeMultiplier ={1}(该属性用于多设备适配)',
      value: {
        maxFontSizeMultiplier :1
      }
    },
    {
      key: ' Listsubheader style:maxFontSizeMultiplier ={2}(该属性用于多设备适配)',
      value: {
        maxFontSizeMultiplier :2
      }
    },
  ]

  const ListItemProps = [
    {
      key: ' ListItemProps style : title= First Item',
      value: {
        title :'First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />
      }
    },
    {
      key: ' ListItemProps style :description = Item description',
      value: {
        title :'First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />
      }
    },
    {
      key: ' ListItemProps style : left=(props: { color: string}) =><List.Icon {...props} icon="folder" />',
      value: {
        title :'First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />
      }
    },
    {
      key: ' ListItemProps style : right=(props: { color: string}) =><List.Icon {...props} icon="folder" />',
      value: {
        title :'First Item',
        description:'Item description',
        right: (props: { color: string}) =><List.Icon {...props} icon="folder" />
      }
    },
    {
      key: ' ListItemProps fuction:onPress = _handlePress1',
      value: {
        title :'First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        onPress:_handlePress1
      }
    },
    {
      key: ' ListItemProps style:theme={ colors: { primary:"green"} }',
      value: {
        title :'First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        theme :{ colors: { primary: 'green' } }
      }
    },
    {
      key: ' ListItemProps style={backgroundColor:MD2Colors.red100}',
      value: {
        title :'First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        style :{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' ListItemProps contentStyle={backgroundColor:MD2Colors.red100}',
      value: {
        title :'First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        contentStyle :{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' ListItemProps titleStyle={backgroundColor:MD2Colors.red100}',
      value: {
        title :'First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        titleStyle :{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' ListItemProps descriptionStyle={backgroundColor:MD2Colors.red100}',
      value: {
        title :'First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        descriptionStyle :{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: ' ListItemProps titleNumberOfLines=1',
      value: {
        title :'First Item First Item First Item First Item First Item First Item First Item First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        titleNumberOfLines :1
      }
    },
    {
      key: ' ListItemProps titleNumberOfLines=2',
      value: {
        title :'First Item First Item First Item First Item First Item First Item First Item First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        titleNumberOfLines :2
      }
    },
    {
      key: ' ListItemProps descriptionNumberOfLines=1',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        descriptionNumberOfLines :1
      }
    },
    {
      key: ' ListItemProps descriptionNumberOfLines=2',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        descriptionNumberOfLines :2
      }
    },
    {
      key: ' ListItemProps titleEllipsizeMode=head',
      value: {
        title :'First Item First Item First Item First Item First Item First Item First Item First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        titleEllipsizeMode :'head' as EllipsizeProp,
        titleNumberOfLines :1
      }
    },
    {
      key: ' ListItemProps titleEllipsizeMode=middle',
      value: {
        title :'First Item First Item First Item First Item First Item First Item First Item First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        titleEllipsizeMode :'middle' as EllipsizeProp,
        titleNumberOfLines :1
      }
    },
    {
      key: ' ListItemProps titleEllipsizeMode=tail',
      value: {
        title :'First Item First Item First Item First Item First Item First Item First Item First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        titleEllipsizeMode :'tail' as EllipsizeProp,
        titleNumberOfLines :1
      }
    },
    {
      key: ' ListItemProps titleEllipsizeMode=clip',
      value: {
        title :'First Item First Item First Item First Item First Item First Item First Item First Item',
        description:'Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        titleEllipsizeMode :'clip' as EllipsizeProp,
        titleNumberOfLines :1
      }
    },
    {
      key: ' ListItemProps descriptionEllipsizeMode=head',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        descriptionNumberOfLines :1,
        descriptionEllipsizeMode:'head' as EllipsizeProp
      }
    },
    {
      key: ' ListItemProps descriptionEllipsizeMode=middle',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        descriptionNumberOfLines :1,
        descriptionEllipsizeMode:'middle' as EllipsizeProp
      }
    },
    {
      key: ' ListItemProps descriptionEllipsizeMode=tail',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        descriptionNumberOfLines :1,
        descriptionEllipsizeMode:'tail' as EllipsizeProp
      }
    },
    {
      key: ' ListItemProps descriptionEllipsizeMode=clip',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        descriptionNumberOfLines :1,
        descriptionEllipsizeMode:'clip' as EllipsizeProp
      }
    },

    {
      key: ' ListItemProps titleMaxFontSizeMultiplier=1',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        titleMaxFontSizeMultiplier:1
      }
    },
    {
      key: ' ListItemProps titleMaxFontSizeMultiplier=2',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        titleMaxFontSizeMultiplier:2
      }
    },
    {
      key: ' ListItemProps descriptionMaxFontSizeMultiplier=1',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        descriptionMaxFontSizeMultiplier:1
      }
    },
    {
      key: ' ListItemProps testID=testID1',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        testID:'testID1'
      }
    },
    {
      key: ' ListItemProps testID=testID2',
      value: {
        title :'First Item ',
        description:'Item description Item description Item description Item description Item description Item description',
        left: (props: { color: string}) =><List.Icon {...props} icon="folder" />,
        testID:'testID2'
      }
    },
  ]

  return (
    <ScrollView>
    <Tester>
      <TestSuite name='ListAccordion' >
      {ListAccordionBProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
            <List.Section title="Accordions">
                <List.Accordion
                  {...item.value}>
                  <List.Item title="First item" />
                  <List.Item title="Second item" />
                </List.Accordion>
              </List.Section>
          </TestCase>
          );
      })},
      {ListAccordionGroupProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
              <List.AccordionGroup
                  expandedId={expandedId}
                  onAccordionPress={_onAccordionPress}
                >
                  <List.Section title="Controlled Accordion Group example">
                    <List.Accordion
                      left={(props) => <List.Icon {...props} icon="folder" />}
                      title="Expandable list item"
                      id="1"
                    >
                      <List.Item title="List item 1" />
                      <List.Item title="List item 2" />
                    </List.Accordion>
                    <List.Accordion
                      left={(props) => <List.Icon {...props} icon="folder" />}
                      title="Expandable list item 2"
                      id="2"
                    >
                      <List.Item title="List item 1" />
                    </List.Accordion>
                  </List.Section>
                </List.AccordionGroup>
          </TestCase>
          );
      })},
        {ListItemProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
                <List.Item {...item.value}/>
            </TestCase>
          );
      })},
      {ListIconProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
                <List.Icon {...item.value} />
            </TestCase>
          );
      })},
      {ListSectionProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
              <List.Section {...item.value}>
                  <List.Subheader>Some title</List.Subheader>
                  <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
                  <List.Item
                    title="Second Item"
                    left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
                  />
                </List.Section>
            </TestCase>
          );
      })},
      {ListsubheaderProps.map((item) => {
          return (
            <TestCase itShould={item.key}  key={item.key}>
                  <PaperProvider>
                    <List.Subheader {...item.value} >My List Title</List.Subheader>;
                  </PaperProvider>
            </TestCase>
          );
      })},
      </TestSuite>
    </Tester>
    </ScrollView>
  )
}


export default ListAccordionDemo ;