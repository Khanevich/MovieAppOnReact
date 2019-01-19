import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Spinner from "react-native-loading-spinner-overlay";

class Loader extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Spinner
					visible
					textContent={"Loading..."}
					textStyle={styles.spinnerTextStyle}
				/>
			</View>
		);
	}
}

export default Loader;
