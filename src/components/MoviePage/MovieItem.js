import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Card } from "react-native-elements";
import PercentageCircle from "react-native-percentage-circle";

class MovieItem extends React.Component {
	render() {
		const { item } = this.props;
		return (
			<Card
				style={styles.img}
				image={{
					uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path ||
						item.poster_path}`
				}}
			>
				<View style={styles.caption}>
					<View style={styles.descr}>
						<Text style={styles.title}>{item.title}</Text>
						<Text style={styles.release}>{item.release_date.substr(0, 4)}</Text>
					</View>
					<PercentageCircle
						radius={20}
						percent={item.vote_average * 10}
						color={"#3498db"}
					/>
				</View>
			</Card>
		);
	}
}

export default MovieItem;
