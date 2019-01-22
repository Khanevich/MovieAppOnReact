import { StyleSheet, Dimensions } from "react-native";

const formHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  text: {
    fontSize: 28,
    backgroundColor: "#00a8ff",
    color: "#FFFF"
  },
  buttonContainer: {
    backgroundColor: "#0984e3",
    marginTop: 20,
    height: formHeight / 15,
    width: "90%",
    borderRadius: 5,
    paddingHorizontal: 50
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 22,
    lineHeight: formHeight / 15,
    opacity: 0.9
  },
  inputIOS: {
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  },
  inputAndroid: {
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  }
});
