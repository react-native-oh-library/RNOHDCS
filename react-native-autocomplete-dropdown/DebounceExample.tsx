import React, { memo, useState } from 'react'
import { Text, View } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'


export const DebounceExample = memo((props: {debounce: number}) => {
  
  const [searchText, setsearchText] = useState('');

  return (
    <>
      <AutocompleteDropdown
        debounce={props.debounce}
        onChangeText={(text) => {
          setsearchText(text);
        }}
        closeOnBlur={true}
        initialValue={'1'}
        direction={'up'}
        dataSet={[ { id: '1', title: 'football' }]}
      />
      <View style={{margin: 10}}>
        <Text> {searchText} </Text>
      </View>
    </>
  )
})
