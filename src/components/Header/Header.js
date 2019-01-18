import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

class Header extends React.Component {
	render() {
		return (
			<View style={styles.header}>
				<Ionicons name="football" color="white" />
				<Text>Hello</Text>
			</View>
		);
	}
}

export default Header;
