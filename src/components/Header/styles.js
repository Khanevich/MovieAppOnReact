import { StyleSheet, Dimensions } from "react-native";
const formHeight = Dimensions.get("window").height;
const formWidth = Dimensions.get("window").width;

export default StyleSheet.create({
	header: {
		alignItems: "center",
		justifyContent: "center",
		width: formWidth,
		height: formHeight * 0.1,
		backgroundColor: "#0984e3"
	}
});
