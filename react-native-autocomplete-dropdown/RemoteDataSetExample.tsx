import React, { memo, useCallback, useState } from 'react'
import { Text } from 'react-native'
import type { AutocompleteDropdownItem } from 'react-native-autocomplete-dropdown'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

export const RemoteDataSetExample = memo(() => {
  const [loading, setLoading] = useState(false)
  const [lodongResult, setLodongResult] = useState('')
  const [remoteDataSet, setRemoteDataSet] = useState<AutocompleteDropdownItem[] | null>()
  const [selectedItem, setSelectedItem] = useState<AutocompleteDropdownItem | null>(null)  

  const getSuggestions = useCallback(async (q: string) => {
    const filterToken = q.toLowerCase()
    console.log('getSuggestions', filterToken)
    if (typeof q !== 'string' || q.length < 3) {
      setRemoteDataSet(null)
      return
    }
    setLoading(true)

    let flag: boolean  = true;
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          flag = false;
          setLoading(false)
          setLodongResult(`HTTP错误! 状态码: ${response.status}`)
          // throw new Error(`rmoteDataSet HTTP错误! 状态码: ${response.status}`);          
        }
      
        const data = await new Promise((resolve) => {
          setTimeout(async () => {
            resolve(await response.json());
          }, 2000);
        });
        
        return data;
      } catch (error) {
        flag = false;
        setLodongResult(`请求失败`+error);
        setLoading(false)
        // throw error;
      }
    };
    let tmp = await fetchData();
    if(!flag){
        return;
    }
    const items = (await tmp) as Record<string, string>[]    
    console.info('rmoteDataSet getSuggestions items:', items)

    const suggestions = items
      .filter(item => item.title?.toLowerCase().includes(filterToken))
      .map(item => ({
        id: item.id || '0',
        title: item.title || '',
      }))
    console.info('rmoteDataSet getSuggestions suggestions:', suggestions)
    const result = suggestions as AutocompleteDropdownItem[];
    setRemoteDataSet(result)  
    setLodongResult(JSON.stringify(result));
    setLoading(false)
  }, [])

  return (
    <>       
      <AutocompleteDropdown        
        dataSet={remoteDataSet}
        closeOnBlur={false}
        useFilter={false}
        clearOnFocus={false}
        textInputProps={{
          placeholder: 'Start typing "est"...',
        }}
        onChangeText={getSuggestions}
        onSelectItem={setSelectedItem}
        loading={loading}        
        suggestionsListTextStyle={{
          color: '#8f3c96',
        }}
        EmptyResultComponent={<Text style={{ padding: 10, fontSize: 15 }}>Oops ¯\_(ツ)_/¯</Text>}
      />
      
      <Text style={{ color: '#668', fontSize: 13 }}>Selected item: {JSON.stringify(selectedItem)}</Text>
      <Text>result: {lodongResult}</Text>
    </>
  )
})
