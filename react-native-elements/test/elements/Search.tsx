import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

type SearchBarComponentProps = {};

const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
};

return (
  <View style={styles.view}>
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
      onKeyboardHide={()=>{
        
      }}
    />
  </View>
);
};

const styles = StyleSheet.create({
view: {
  margin: 10,
},
});

export default SwitchComponent;