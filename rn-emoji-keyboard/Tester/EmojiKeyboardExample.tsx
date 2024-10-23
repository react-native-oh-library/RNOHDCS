import React from 'react'
import {ScrollView} from 'react-native'
import {TestSuite, Tester, TestCase} from '@rnoh/testerino'

import EmojiKeyboardBasic from './EmojiKeyboardAllProperty/EmojiKeyboardBasic'
import EmojiKeyboardMultipleSelect from './EmojiKeyboardAllProperty/EmojiKeyboardMultipleSelect'
import EmojiKeyboardPosition from './EmojiKeyboardAllProperty/EmojiKeyboardPosition'
import EmojiKeyboardOrder from './EmojiKeyboardAllProperty/EmojiKeyboardOrder'
import EmojiKeyboardDefaultHeight from './EmojiKeyboardAllProperty/EmojiKeyboardDefaultHeight'
import EmojiKeyboardDisable from './EmojiKeyboardAllProperty/EmojiKeyboardDisable'
import EmojiKeyboardSafeArea from './EmojiKeyboardAllProperty/EmojiKeyboardSafeArea'
import EmojiKeyboardEnmojiByCategory from './EmojiKeyboardAllProperty/EmojiKeyboardEnmojiByCategory'
import EmojiKeyboardEmojiSize from './EmojiKeyboardAllProperty/EmojiKeyboardEmojiSize'
import EmojiKeyboardEnableRecentlyUsedHaspersistent from './EmojiKeyboardAllProperty/EmojiKeyboardEnableRecentlyUsedHaspersistent'
import EmojiKeyboardSearch from './EmojiKeyboardAllProperty/EmojiKeyboardSearch'
import EmojiKeyboardHideSearchBarClearIcon from './EmojiKeyboardAllProperty/EmojiKeyboardHideSearchBarClearIcon'
import EmojiKeyboardCustomButton from './EmojiKeyboardAllProperty/EmojiKeyboardCustomButton'
import EmojiKeyboardEnableCategoryChangeAnimation from './EmojiKeyboardAllProperty/EmojiKeyboardEnableCategoryChangeAnimation'
import EmojiKeyboardEnableCategoryChangeGesture from './EmojiKeyboardAllProperty/EmojiKeyboardEnableCategoryChangeGesture'
import EmojiKeyboardEnableSearchAnimation from './EmojiKeyboardAllProperty/EmojiKeyboardEnableSearchAnimation'
import EmojiKeyboardExpandable from './EmojiKeyboardAllProperty/EmojiKeyboardExpandable'
import EmojiKeyboardExpandedHeight from './EmojiKeyboardAllProperty/EmojiKeyboardExpandedHeight'
import EmojiKeyboardEmojiHideHeader from './EmojiKeyboardAllProperty/EmojiKeyboardEmojiHideHeader'
import EmojiKeyboardStyles from './EmojiKeyboardAllProperty/EmojiKeyboardStyles'
import EmojiKeyboardOnRequestClose from './EmojiKeyboardAllProperty/EmojiKeyboardOnRequestClose'
import EmojiKeyboardTheme from './EmojiKeyboardAllProperty/EmojiKeyboardTheme'
import EmojiKeyboardTranslated from './EmojiKeyboardAllProperty/EmojiKeyboardTranslated'


export const EmojiKeyboardExample = () => {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name="EmojiKeyboardExample">
          <TestCase itShould={`render basic EmojiKeyboard example`} tags={['C_API']}>
            <EmojiKeyboardBasic />
          </TestCase>
          <TestCase itShould={`Allow select multiple emoji without dismiss keyboard.`} tags={['C_API']}>
            <EmojiKeyboardMultipleSelect />
          </TestCase>
          <TestCase itShould={`Allow to change the position of available emoji categories container.; value:bottom`} tags={['C_API']}>
            <EmojiKeyboardPosition />
          </TestCase>
          <TestCase itShould={`Allow to change order of available emoji categories. ;value:['people_body','symbols']`} tags={['C_API']}>
            <EmojiKeyboardOrder />
          </TestCase>
          <TestCase itShould={`Specify collapsed container height. ;value:50%`} tags={['C_API']}>
            <EmojiKeyboardDefaultHeight />
          </TestCase>
          <TestCase itShould={`Allow to hide specific categories by passing an array with their slugs. ;value:symbols`} tags={['C_API']}>
            <EmojiKeyboardDisable />
          </TestCase>
          <TestCase itShould={`Allow to disable SafeAreaView inside the emoji keyboard. value:true`} tags={['C_API']}>
            <EmojiKeyboardSafeArea />
          </TestCase>
          <TestCase itShould={`Set of emojis that can be displayed in the app. You can pass your own emojis set or use the one that we have prepared.`} tags={['C_API']}>
            <EmojiKeyboardEnmojiByCategory />
          </TestCase>
          <TestCase itShould={`Set size of the single emoji. value:20`} tags={['C_API']}>
            <EmojiKeyboardEmojiSize />
          </TestCase>
          <TestCase itShould={` Reveal extra category with recently used emojis and has persistent`} tags={['C_API']}>
            <EmojiKeyboardEnableRecentlyUsedHaspersistent />
          </TestCase>
          <TestCase itShould={`Reveal the search bar, used to find specific emoji`} tags={['C_API']}>
            <EmojiKeyboardSearch />
          </TestCase>
          <TestCase itShould={`Hide the search bar clear icon inside the search`} tags={['C_API']}>
            <EmojiKeyboardHideSearchBarClearIcon />
          </TestCase>
          <TestCase itShould={`Inject custom buttons into the component.`} tags={['C_API']}>
            <EmojiKeyboardCustomButton />
          </TestCase>
          <TestCase itShould={`Allow to turn off FlatList scrolling animation when category is changed. Setting this to false will also overwrite enableSearchAnimation value;value:false`} tags={['C_API']}>
            <EmojiKeyboardEnableCategoryChangeAnimation />
          </TestCase>
          <TestCase itShould={`Allow to use horizontal swipe gesture to change emoji category.;value:false`} tags={['C_API']}>
            <EmojiKeyboardEnableCategoryChangeGesture />
          </TestCase>
          <TestCase itShould={`Allow to turn off FlatList scrolling animation when search results are updated.;value:false`} tags={['C_API']}>
            <EmojiKeyboardEnableSearchAnimation />
          </TestCase>
          <TestCase itShould={`Show knob and enable expand on swipe up. value:false`} tags={['C_API']}>
            <EmojiKeyboardExpandable />
          </TestCase>
          <TestCase itShould={`Specify expanded container height; value:60%`} tags={['C_API']}>
            <EmojiKeyboardExpandedHeight />
          </TestCase>
          <TestCase itShould={`Hide labels with category names; value:true`} tags={['C_API']}>
            <EmojiKeyboardEmojiHideHeader />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardStyles EmojiKeyboard`} tags={['C_API']}>
          <EmojiKeyboardStyles/>
          </TestCase>
          <TestCase itShould={`Slip left Callback fired emoji keyboard is closing and count+1.`} tags={['C_API']}>
          <EmojiKeyboardOnRequestClose/>
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardTheme EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardTheme />
          </TestCase>
          <TestCase itShould={`render translated EmojiKeyboard language value:Korean`} tags={['C_API']}>
            <EmojiKeyboardTranslated />
          </TestCase>

        </TestSuite>
      </Tester>
    </ScrollView>
  )
}
