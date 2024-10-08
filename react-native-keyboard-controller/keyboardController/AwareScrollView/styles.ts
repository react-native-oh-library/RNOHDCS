import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  content: {
    paddingTop: 50,
  },
  switchContainerView:{
    margin: 16,
    top:80
  },
  header: {
    color: "black",
    paddingRight: 12,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
  },
  snapToOffsetsAbsoluteContainer: {
    width: "100%",
    position: "absolute",
  },
  snapToOffsetsInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  snapToOffsetsLine: {
    height: 2,
    flex: 1,
    backgroundColor: "black",
  },
});
