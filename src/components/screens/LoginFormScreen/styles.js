import { StyleSheet, Dimensions } from "react-native";

const formHeight = Dimensions.get("window").height;
const formWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00a8ff",
    justifyContent: "center"
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  keyboard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    opacity: 0.9
  },
  input: {
    backgroundColor: "#dff9fb",
    marginTop: 20,
    height: formHeight / 17,
    width: formHeight / 2,
    borderRadius: 5,
    fontSize: 18
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
  error: {
    color: "red"
  }
});
