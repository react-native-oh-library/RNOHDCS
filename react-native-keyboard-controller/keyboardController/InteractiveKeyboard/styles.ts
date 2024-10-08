import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
    height:'100%',
    backgroundColor:'white'
  },
  header: {
    color: "black",
    marginRight: 12,
  },
  inverted: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  content: {
    flex: 1,
  },
});
