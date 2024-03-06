import {NavigationContainer, Page} from '../../components';
import Heading from './Heading';
import Horizontal from './Horizontal';
import Emphasis from './Emphasis';
import Blockquotes from './Blockquotes';
import Lists from './Lists';
import Code from './Code';
import Tables from './Tables';
import Links from './Links';
import Images from './Images';
import BaseImages from './BaseImages'
import Typographic from './Typographic';
import Style from './Style';
import MergeStyle from './MergeStyle';
import Rules from './Rules';
import AllRules from './AllRules';
import OnLinkPress from './OnLinkPress';
import MarkdownIt from './MarkdownIt';
import MaxTopLevelChildren from './MaxTopLevelChildren';
import DebugPrintTree from './DebugPrintTree'


function App() {
  return (
    <NavigationContainer>
      <Page naeme="children: Heading">
        <Heading />
      </Page>
      <Page naeme="children: Horizontal">
        <Horizontal />
      </Page>
      <Page naeme="children: Emphasis">
        <Emphasis />
      </Page>
      <Page naeme="children: Blockquotes">
        <Blockquotes />
      </Page>
      <Page naeme="children: Lists">
        <Lists />
      </Page>
      <Page naeme="children: Code">
        <Code />
      </Page>
      <Page naeme="children: Tables">
        <Tables />
      </Page>
      <Page naeme="children: Links">
        <Links />
      </Page>
      <Page naeme="children: Images">
        <Images />
      </Page>
      <Page naeme="children: baseImages">
        <BaseImages />
      </Page>
      <Page naeme="children: Typographic">
        <Typographic />
      </Page>

      <Page naeme="style: Style">
        <Style />
      </Page>

      <Page naeme="style: MergeStyle">
        <MergeStyle />
      </Page>

      <Page naeme="Rules: Rules">
        <Rules />
      </Page>

      <Page naeme="Rules: AllRules">
        <AllRules />
      </Page>

      <Page naeme="OnLinkPress">
        <OnLinkPress />
      </Page>
      <Page naeme="MarkdownIt">
        <MarkdownIt />
      </Page>
      <Page naeme="PreProcessing">
        <PreProcessing />
      </Page>
      
      <Page naeme="MaxTopLevelChildren">
        <MaxTopLevelChildren />
      </Page>
      <Page naeme="DebugPrintTree">
        <DebugPrintTree />
      </Page>
      
    </NavigationContainer>


  );
}
export default App;
