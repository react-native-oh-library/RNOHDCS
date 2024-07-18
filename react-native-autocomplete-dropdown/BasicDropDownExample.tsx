import React, { memo, useState } from 'react'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import type { IAutocompleteDropdownProps } from 'react-native-autocomplete-dropdown';


export const BasicDrpExample = memo((props: Omit<IAutocompleteDropdownProps, 'dataSet' | 'ref'>) => {

  return (
    <>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        showClear={true}
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
        {...props}
      />
    </>
  )
})
