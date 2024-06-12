import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet, Text } from 'react-native';
import { Tester, TestSuite, TestCase } from '@rnoh/testerino'

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<
  BottomSheetComponentProps
> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <Tester>
      <TestSuite name='BottomSheet'>
        <TestCase itShould='Rounded Buttons' tags={['C_API']}>
          <Button
            title="Open Bottom Sheet with handler"
            onPress={() => setIsVisible(true)}
            buttonStyle={styles.button}
          />
          <BottomSheet
            modalProps={{}}
            onBackdropPress={() => setIsVisible(false)}
            isVisible={isVisible}
            containerStyle={{ marginBottom: 38 }}
          >
            {list.map((l, i) => (
              <ListItem
                key={i}
                containerStyle={l.containerStyle}
                onPress={l.onPress}
              >
                <ListItem.Content>
                  <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </BottomSheet>
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 24,
  }
});

export default BottomSheetComponent;
