import React, { memo, useState } from 'react'
import { Text, View, Button } from 'react-native'
import type { AutocompleteDropdownItem } from 'react-native-autocomplete-dropdown'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

const ItemSeparatorComponent = () => <View style={{ height: 1, width: '100%', backgroundColor: '#d8e1e6' }} />

export const ShowChevronExample = memo(() => {
  const [selectedItem, setSelectedItem] = useState<AutocompleteDropdownItem | null>(null)
  
  const [showChevron, setshowChevron] = useState(false)

  return (
    <>
      <Button title='toggle ShowChevron' onPress={() => {
        setshowChevron(!showChevron);
      }}></Button>
      <AutocompleteDropdown
        showChevron={showChevron}
        clearOnFocus={false}
        closeOnBlur={true}
        initialValue={{ id: '2' }} // or just '2'
        onSelectItem={item => setSelectedItem(item)}
        dataSet={[ { id: '1', title: 'Alpha' }, { id: '2', title: 'Beta' }, { id: '3', title: 'Gamma' }, ]}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ignoreAccents
      />
      <Text style={{ color: '#668', fontSize: 13 }}>Selected item: {JSON.stringify(selectedItem)}</Text>
    </>
  )
})
