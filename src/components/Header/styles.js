import { StyleSheet, Dimensions } from "react-native";
const formHeight = Dimensions.get("window").height;
const formWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: formWidth,
    height: formHeight * 0.1,
    backgroundColor: "#00a8ff"
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  icon: {
    color: "#FFFF",
    opacity: 0.9
  },
  text: {
    color: "#FFFF",
    fontSize: 20,
    opacity: 0.9
  }
});
