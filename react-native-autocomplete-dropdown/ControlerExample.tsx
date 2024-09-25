import React, { memo, useState, useRef, useMemo } from 'react'
import { Text, View, Button } from 'react-native'
import type { IAutocompleteDropdownRef, AutocompleteDropdownItem } from 'react-native-autocomplete-dropdown'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { Smile } from 'react-native-feather'
import { generateDataSet } from './helpers'

export const ControlerExample = memo(() => {
  const dropdownController = useRef<IAutocompleteDropdownRef | null>(null)

  const dataSet = useMemo(generateDataSet, [])

  return (
    <>
      <AutocompleteDropdown
        controller={controller => {
          dropdownController.current = controller
        }}
        clearOnFocus={false}
        closeOnBlur={true}
        dataSet={dataSet}
        suggestionsListMaxHeight={80}
        direction='up'
        showChevron={true}
      />
      <View style={{margin: 8, gap: 10}}>
        <Button title='open' onPress={() => {
          dropdownController.current?.open();
        }}></Button>
        <Button title='close' onPress={() => {
          dropdownController.current?.close();
        }}></Button>
        <Button title='clear' onPress={() => {
          dropdownController.current?.clear();
        }}></Button>
        <Button title='blur' onPress={() => {
          dropdownController.current?.blur();
        }}></Button>
        <Button title='setInputText' onPress={() => {
          dropdownController.current?.setInputText('test text');
        }}></Button>
        <Button title='setItem' onPress={() => {
          dropdownController.current?.setItem({id: '2', title: 'test2'});
        }}></Button>
        <Button title='toggle' onPress={() => {
          dropdownController.current?.toggle();
        }}></Button>
      </View>
    </>
  )
})
