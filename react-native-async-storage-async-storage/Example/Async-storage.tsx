import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";

// Storing data
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("my-key", value);
  } catch (e) {
    // saving error
  }
};

// Reading data
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("my-key");
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

export default function AsyncStorageDemo(){
    return <>
    <Button title="setItem" onPress={storeData} />
    <Button title="getItem" onPress={getData} />
    </>
}