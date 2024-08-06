import { ScrollView, StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import RTNPermissions, { Permission } from "react-native-permissions";
const permissionNormal: Permission[] = [
  "ohos.permission.APPROXIMATELY_LOCATION",
  "ohos.permission.CAMERA",
  "ohos.permission.MICROPHONE",
  "ohos.permission.READ_CALENDAR",
  "ohos.permission.WRITE_CALENDAR",
  "ohos.permission.ACTIVITY_MOTION",
  "ohos.permission.READ_HEALTH_DATA",
  "ohos.permission.DISTRIBUTED_DATASYNC",
  "ohos.permission.READ_MEDIA",
  "ohos.permission.MEDIA_LOCATION",
  "ohos.permission.ACCESS_BLUETOOTH",
];
export function PermissionTest() {
  return (
    <View style={styles.sectionContainer}>
      <Button
        title="查询相机权限"
        onPress={async () => {
          let check = await RTNPermissions.check("ohos.permission.CAMERA");
          console.info("RTNPermissions===== check", check);
        }}
      />
      <Button
        title="设置相机权限"
        onPress={async () => {
          let request = await RTNPermissions.request("ohos.permission.CAMERA");
          console.info("RTNPermissions===== request", request);
        }}
      />
      <Button
        title={"查询多个权限"}
        onPress={async () => {
          let checkMultiple = await RTNPermissions.checkMultiple(
            permissionNormal
          );
          console.info("RTNPermissions===== checkMultiple", checkMultiple);
        }}
      />
      <Button
        title={"设置多个权限"}
        onPress={async () => {
          let requestMultiple = await RTNPermissions.requestMultiple(
            permissionNormal
          );
          console.info("RTNPermissions===== requestMultiple", requestMultiple);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  view: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    margin: 5,
  },
});