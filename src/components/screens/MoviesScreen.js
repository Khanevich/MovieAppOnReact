import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { inject, observer } from "mobx-react";
import MovieItem from "../MoviePage/MovieItem";
import Filters from "../Filters/Filters";

@inject("moviesPageStore")
@observer
class MoviesScreen extends React.Component {
	componentDidMount() {
		this.props.moviesPageStore.getMovies();
	}

	render() {
		const { isLoading, movies } = this.props.moviesPageStore;
		return (
			<View style={styles.container}>
				<Filters style={{ height: 150 }} />
				<View style={{ flex: 1 }}>
					{isLoading ? (
						<Text>...loading</Text>
					) : (
						<FlatList
							style={{ flex: 1 }}
							data={movies}
							renderItem={({ item }) => <MovieItem item={item} />}
							keyExtractor={item => String(item.id)}
						/>
					)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		paddingHorizontal: 20,
		backgroundColor: "#FFFF"
	}
});

export default MoviesScreen;
