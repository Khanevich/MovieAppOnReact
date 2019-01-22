import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated
} from "react-native";
import { inject, observer } from "mobx-react";
import MovieItem from "./MoviePage/MovieItem";
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

@inject("moviesPageStore", "userStore")
@observer
class MoviesScreen extends React.Component {
  componentDidMount() {
    this.props.moviesPageStore.getMovies();
    this.props.userStore.getUserInfo();
  }

  renderMovies = () =>
    this.props.moviesPageStore.movies.map((item, i) => {
      return (
        <Animated.View
          style={{ height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH }}
        >
          <Image
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover",
              borderRadius: 20
            }}
            source={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
              item.poster_path}`}
          />
        </Animated.View>
      );
    });

  render() {
    const { isLoading, movies } = this.props.moviesPageStore;
    return (
      // <View style={styles.container}>
      //   <Header />
      //   <View style={{ flex: 1 }}>
      //     {isLoading ? (
      //       <Loader />
      //     ) : (
      //       <FlatList
      //         style={{ flex: 1 }}
      //         data={movies}
      //         renderItem={({ item }) => <MovieItem item={item} />}
      //         keyExtractor={item => String(item.id)}
      //       />
      //     )}
      //   </View>
      // </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{this.renderMovies()}</View>
        <View style={{ height: 60 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF"
  }
});

export default MoviesScreen;
