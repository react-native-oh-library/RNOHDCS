import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {VStack, FormControl, Input, Center, Button} from 'native-base';
import {useState} from 'react';

function BuildingAFormExample() {
  const [formData, setData] = useState({});
  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired>
        <FormControl.Label
          _text={{
            bold: true,
          }}>
          Name
        </FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={value => setData({...formData, name: value})}
        />
        <FormControl.HelperText
          _text={{
            fontSize: 'xs',
          }}>
          Name should contain atleast 3 character.
        </FormControl.HelperText>
        <FormControl.ErrorMessage
          _text={{
            fontSize: 'xs',
          }}>
          Error Name
        </FormControl.ErrorMessage>
      </FormControl>
    </VStack>
  );
}

function BuildingAFormExample1() {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({...errors, name: 'Name is required'});
      return false;
    } else if (formData.name.length < 3) {
      setErrors({...errors, name: 'Name is too short'});
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');
  };

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired isInvalid={'name' in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}>
          Name
        </FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={value => setData({...formData, name: value})}
        />
        {'name' in errors ? (
          <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText>
            Name should contain atleast 3 character.
          </FormControl.HelperText>
        )}
      </FormControl>
      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Submit
      </Button>
    </VStack>
  );
}

export function FormControlExample() {
  return (
    <>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text>Basic</Text>
          <View style={styles.subSection}>
            <Center flex={1} px="3">
              <BuildingAFormExample />
            </Center>
          </View>
        </View>
        <View style={styles.section}>
          <Text>Basic1</Text>
          <View style={styles.subSection}>
            <Center flex={1} px="3">
              <BuildingAFormExample1 />
            </Center>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
  },
  section: {
    backgroundColor: '#f2f2f2',
  },
  subSection: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    width: '100%',
    padding: 10,
  },
});
