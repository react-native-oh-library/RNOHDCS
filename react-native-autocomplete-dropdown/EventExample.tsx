import React, { memo, useState } from 'react'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { View, Text } from 'react-native';


export const EventExample = memo(() => {
  
  const [eventInfo, seteventInfo] = useState('');

  return (
    <>
      <View style={{margin: 8}}>
        <Text>{eventInfo}</Text>
      </View>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        showClear={true}
        onChangeText={() => seteventInfo('onChangeText')}
        onBlur={() => seteventInfo('onBlur')}
        onFocus={() => seteventInfo('onFocus')}
        onSelectItem={() => seteventInfo('onSelectItem')}
        onChevronPress={() => seteventInfo('onChevronPress')}
        onClear={() => seteventInfo('onClear')}
        onOpenSuggestionsList={() => seteventInfo('onOpenSuggestionsList')}
        dataSet={[
          { id: '1', title: 'Alpha' },
          { id: '2', title: 'Beta' },
          { id: '3', title: 'Gamma' },
          { id: '4', title: 'abc' },
          { id: '5', title: 'def' },
          { id: '6', title: 'ghi' },
          { id: '7', title: 'jkl' },
          { id: '8', title: 'mno' }
        ]}
        ignoreAccents
      />
    </>
  )
})
