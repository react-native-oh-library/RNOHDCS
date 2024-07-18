import React, { memo, useState } from 'react'
import { Text, View, Button } from 'react-native'
import type { AutocompleteDropdownItem } from 'react-native-autocomplete-dropdown'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

// const ItemSeparatorComponent = () => <View style={{ height: 1, width: '100%', backgroundColor: '#d8e1e6' }} />

export const CloseOnBlurExample = memo(() => {
  const [selectedItem, setSelectedItem] = useState<AutocompleteDropdownItem | null>(null);
  
  const [closeOnBlur, setcloseOnBlur] = useState(false);

  return (
    <>
      <Button title={`toggle closeOnBlur: ${closeOnBlur}`} onPress={() => {
        setcloseOnBlur(!closeOnBlur);
      }}></Button>
      <AutocompleteDropdown
        closeOnBlur={closeOnBlur}
        initialValue={'2'}
        onSelectItem={item => setSelectedItem(item)}
        dataSet={[ { id: '1', title: 'Alpha' }, { id: '2', title: 'Beta' }, { id: '3', title: 'Gamma' }, ]}
        ignoreAccents
      />
      <Text style={{ color: '#668', fontSize: 13 }}>Selected item: {JSON.stringify(selectedItem)}</Text>
    </>
  )
})
