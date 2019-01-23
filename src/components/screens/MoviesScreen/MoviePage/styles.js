import { StyleSheet, Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
  image: {
    height: SCREEN_HEIGHT * 0.4
  },
  container: {
    marginTop: 20,
    height: SCREEN_HEIGHT * 0.3,
    width: SCREEN_WIDTH - 90,
    borderWidth: 1
  },
  italic: {
    fontStyle: "italic"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 12
  },
  vote: {
    position: "absolute",
    top: 0,
    right: 0
  },

  animatedView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: "center",
    justifyContent: "space-between"
  }
});
