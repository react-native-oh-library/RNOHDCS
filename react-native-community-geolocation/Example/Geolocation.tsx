import Geolocation from "@react-native-community/geolocation";
import { Button } from "react-native";

export function GeolocationDemo(): JSX.Element {
  const tap = () => {
    Geolocation.setRNConfiguration({
      skipPermissionRequests: true,
      authorizationLevel: "auto",
      enableBackgroundLocationUpdates: true,
      locationProvider: "auto",
    });
    console.log("tap");
  };
  const getLocation=()=>{
    Geolocation.getCurrentPosition((result)=>{
        console.log(JSON.stringify(result))
    })
  }

  return <>
  <Button title='test' onPress={tap} />
  <Button title='getLocation' onPress={getLocation} />
  </>
}