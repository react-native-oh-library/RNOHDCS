import { View, Button } from "react-native";
import {
  CameraRoll,
} from "@react-native-camera-roll/camera-roll";

export default function CameraDemo() {
  return (
    <View>
      <Button
        title="savePhotos"
        onPress={() => {
          CameraRoll.saveAsset("https://res.vmallres.com/uomcdn/CN/cms/202409/1078e27893e04d3d82d5e75e08745ead.jpg").then((res) => {
            console.log('res-----',res);
          });
        }}
      />
    </View>
  );
}