import React, { memo, useState } from 'react'
import { Text, View, Button } from 'react-native'
import type { AutocompleteDropdownItem } from 'react-native-autocomplete-dropdown'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

// const ItemSeparatorComponent = () => <View style={{ height: 1, width: '100%', backgroundColor: '#d8e1e6' }} />

export const CloseOnSubmitExample = memo(() => {
  const [selectedItem, setSelectedItem] = useState<AutocompleteDropdownItem | null>(null);
  
  const [closeOnSubmit, setcloseOnSubmit] = useState(false);

  return (
    <>
      <Button title={`toggle closeOnSubmit: ${closeOnSubmit}`} onPress={() => {
        setcloseOnSubmit(!closeOnSubmit)
      }}></Button>
      <AutocompleteDropdown
        closeOnSubmit={closeOnSubmit}
        closeOnBlur={false}
        initialValue={'2'}
        onSelectItem={item => setSelectedItem(item)}
        dataSet={[ { id: '1', title: 'Alpha' }, { id: '2', title: 'Beta' }, { id: '3', title: 'Gamma' }, ]}
        ignoreAccents
      />
      <Text style={{ color: '#668', fontSize: 13 }}>Selected item: {JSON.stringify(selectedItem)}</Text>
    </>
  )
})
