import React, { memo, useState } from 'react'
import { Text, View, Button } from 'react-native'
import type { AutocompleteDropdownItem } from 'react-native-autocomplete-dropdown'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'


export const TrimSearchTextExample = memo(() => {
  const [selectedItem, setSelectedItem] = useState<AutocompleteDropdownItem | null>(null);
  
  
  const [trimSearchText, settrimSearchText] = useState(true);

  return (
    <>
      <Button title={`toggle trimSearchText: ${trimSearchText}`} onPress={() => {
        settrimSearchText(!trimSearchText);
      }}></Button>
      <AutocompleteDropdown
        trimSearchText={trimSearchText}
        closeOnBlur={true}
        initialValue={'1'}
        onSelectItem={item => setSelectedItem(item)}
        dataSet={[ { id: '1', title: 'football' }]}
      />
      <Text style={{ color: '#668', fontSize: 13 }}>Selected item: {JSON.stringify(selectedItem)}</Text>
    </>
  )
})
