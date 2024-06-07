import React from 'react';
import { View, TextInput, Text, FlatList, StyleSheet } from 'react-native';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';

async function getEmail(search?: string): Promise<string[]> {
  console.log('debounce getEmail', search);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock({ 'data|5': ['@email'] }).data);
    }, 300);
  });
}

export function DebounceDebounce() {
  const { data, loading, run } = useRequest(getEmail, {
    debounceWait: 1000,
    manual: true,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Emails"
        onChangeText={(text) => run(text)}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    fontSize: 16
  },
  list: {
    marginTop: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});