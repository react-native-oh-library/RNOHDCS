import React, { memo, useEffect, useState } from 'react'
import { TestCase } from '@rnoh/testerino'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { View, Text, ToastAndroid as Toast } from 'react-native';


const dataSet = [
                { id: '1', title: 'Alpha' },
                { id: '2', title: 'Beta' },
                { id: '3', title: 'Gamma' },
                { id: '4', title: 'abc' },
                { id: '5', title: 'def' },
                { id: '6', title: 'ghi' },
                { id: '7', title: 'jkl' },
                { id: '8', title: 'mno' }
              ] 

export const EventExample = memo(() => {

  return (
    <>
      <TestCase
        itShould={'onChangeText'}
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }) => {
          return (
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              showClear={true}
              onChangeText={() => {
                setState(true);
              }}
              dataSet={dataSet}
              ignoreAccents
            />
          )
        }}
        assert={({expect, state}) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase
        itShould={'onBlur'}
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }) => {
          return (
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              showClear={true}
              onBlur={() => {
                setState(true);
              }}
              dataSet={dataSet}
              ignoreAccents
            />
          )
        }}
        assert={({expect, state}) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase
        itShould={'onChevronPress'}
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }) => {
          return (
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              showClear={true}
              onChevronPress={() => {
                setState(true);
              }}
              dataSet={dataSet}
              ignoreAccents
            />
          )
        }}
        assert={({expect, state}) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase
        itShould={'onFocus'}
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }) => {
          return (
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              showClear={true}
              onFocus={() => {
                setState(true);
              }}
              dataSet={dataSet}
              ignoreAccents
            />
          )
        }}
        assert={({expect, state}) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase
        itShould={'onSelectItem'}
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }) => {
          return (
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              showClear={true}
              onSelectItem={(item) => {
                if (item) {
                  setState(true);
                }
              }}
              dataSet={dataSet}
              ignoreAccents
            />
          )
        }}
        assert={({expect, state}) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase
        itShould={'onClear'}
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }) => {
          return (
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              showClear={true}
              onClear={() => {
                setState(true);
              }}
              dataSet={dataSet}
              ignoreAccents
            />
          )
        }}
        assert={({expect, state}) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase
        itShould={'onOpenSuggestionsList'}
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }) => {
          return (
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              showClear={true}
              onOpenSuggestionsList={(item) => {
                if (item) {
                  setState(true);
                }
              }}
              dataSet={dataSet}
              ignoreAccents
            />
          )
        }}
        assert={({expect, state}) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
      <TestCase
        itShould={'onSubmit'}
        tags={['C_API']}
        initialState={false}
        arrange={({ setState }) => {
          return (
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              showClear={true}
              onSubmit={(item) => {
                setState(true);
              }}
              dataSet={dataSet}
              ignoreAccents
            />
          )
        }}
        assert={({expect, state}) => {
          expect(state).to.be.eq(true);
        }}>
      </TestCase>
    </>
  )
})
