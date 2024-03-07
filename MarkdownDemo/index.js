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
import DebugPrintTree from './DebugPrintTree';
import PreProcessing from './PreProcessing';
import DefaultImageHandler from './DefaultImageHandler'


function App() {
  return (
    <NavigationContainer>
      <Page name="children: Heading">
        <Heading />
      </Page>
      <Page name="children: Horizontal">
        <Horizontal />
      </Page>
      <Page name="children: Emphasis">
        <Emphasis />
      </Page>
      <Page name="children: Blockquotes">
        <Blockquotes />
      </Page>
      <Page name="children: Lists">
        <Lists />
      </Page>
      <Page name="children: Code">
        <Code />
      </Page>
      <Page name="children: Tables">
        <Tables />
      </Page>
      <Page name="children: Links">
        <Links />
      </Page>
      <Page name="children: Images">
        <Images />
      </Page>
      <Page name="children: baseImages">
        <BaseImages />
      </Page>
      <Page name="children: Typographic">
        <Typographic />
      </Page>

      <Page name="style: Style">
        <Style />
      </Page>

      <Page name="style: MergeStyle">
        <MergeStyle />
      </Page>

      <Page name="Rules: Rules">
        <Rules />
      </Page>

      <Page name="Rules: AllRules">
        <AllRules />
      </Page>

      <Page name="OnLinkPress">
        <OnLinkPress />
      </Page>
      <Page name="MarkdownIt">
        <MarkdownIt />
      </Page>
      <Page name="PreProcessing">
        <PreProcessing />
      </Page>
      
      <Page name="MaxTopLevelChildren">
        <MaxTopLevelChildren />
      </Page>
      <Page name="DebugPrintTree">
        <DebugPrintTree />
      </Page>

      <Page name="DefaultImageHandler">
        <DefaultImageHandler />
      </Page>
      
    </NavigationContainer>


  );
}
export default App;
