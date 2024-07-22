import React, { memo, useState } from 'react'
import { Text, View, Button } from 'react-native'
import type { AutocompleteDropdownItem } from 'react-native-autocomplete-dropdown'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'


export const IgnoreAccentExample = memo(() => {
  const [selectedItem, setSelectedItem] = useState<AutocompleteDropdownItem | null>(null);
  
  const [ignoreAccents, setignoreAccents] = useState(false)

  return (
    <>
      <Button title={`toggle ignoreAccents: ${ignoreAccents}`} onPress={() => {
        setignoreAccents(!ignoreAccents);
      }}></Button>
      <AutocompleteDropdown
        closeOnBlur={true}
        initialValue={'1'}
        onSelectItem={item => setSelectedItem(item)}
        dataSet={[ { id: '1', title: 'áƃĉƌ' }]}
        ignoreAccents={ignoreAccents}
      />
      <Text style={{ color: '#668', fontSize: 13 }}>Selected item: {JSON.stringify(selectedItem)}</Text>
    </>
  )
})
