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
import EmojiKeyboardEnableRecentlyUsed from './EmojiKeyboardAllProperty/EmojiKeyboardEnableRecentlyUsed'
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
import EmojiKeyboardTheme from './EmojiKeyboardAllProperty/EmojiKeyboardTheme'
import EmojiKeyboardTranslated from './EmojiKeyboardAllProperty/EmojiKeyboardTranslated'

export const EmojiKeyboardExample = () => {
  return (
    <ScrollView>
      <Tester>
        <TestSuite name="EmojiKeyboardExample">
          <TestCase itShould={`render basic EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardBasic />
          </TestCase>
          <TestCase itShould={`render MultipleSelect  EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardMultipleSelect />
          </TestCase>
          <TestCase itShould={`render position EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardPosition />
          </TestCase>
          <TestCase itShould={`render order EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardOrder />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardDefaultHeight EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardDefaultHeight />
          </TestCase>
          <TestCase itShould={`render disablecategory EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardDisable />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardDisableSafeArea EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardSafeArea />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardEnmojiByCategory EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardEnmojiByCategory />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardEmojiSize EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardEmojiSize />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardEnableRecentlyUsed and persistent EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardEnableRecentlyUsed />
          </TestCase>
          <TestCase itShould={`render search EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardSearch />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardHideSearchBarClearIcon EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardHideSearchBarClearIcon />
          </TestCase>
          <TestCase itShould={`render customButton EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardCustomButton />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardEnableCategoryChangeAnimation EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardEnableCategoryChangeAnimation />
          </TestCase>
          <TestCase itShould={`render enableCategoryChangeGesture EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardEnableCategoryChangeGesture />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardEnableSearchAnimation EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardEnableSearchAnimation />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardExpandable EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardExpandable />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardExpandedHeight EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardExpandedHeight />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardEmojiHideHeader EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardEmojiHideHeader />
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardStyles EmojiKeyboard`} tags={['C_API']}>
          <EmojiKeyboardStyles/>
          </TestCase>
          <TestCase itShould={`render EmojiKeyboardTheme EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardTheme />
          </TestCase>
          <TestCase itShould={`render translated EmojiKeyboard`} tags={['C_API']}>
            <EmojiKeyboardTranslated />
          </TestCase>

        </TestSuite>
      </Tester>
    </ScrollView>
  )
}
