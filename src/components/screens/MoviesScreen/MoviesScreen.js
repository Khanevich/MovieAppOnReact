import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  Animated
} from "react-native";
import { inject, observer } from "mobx-react";
import MovieItem from "./MoviePage/MovieItem";
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";
import Footer from "../../Footer/Footer";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const x = new Animated.Value(0);

const transitionAnimation = index => ({
  transform: [
    { perspective: 300 },
    {
      scale: x.interpolate({
        inputRange: [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH
        ],
        outputRange: [0.9, 1, 0.9]
      })
    },
    {
      rotateY: x.interpolate({
        inputRange: [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH
        ],
        outputRange: ["-10deg", "0deg", "10deg"]
      })
    }
  ]
});

@inject("moviesPageStore", "userStore")
@observer
class MoviesScreen extends React.Component {
  componentDidMount() {
    this.props.moviesPageStore.getMovies();
    this.props.userStore.getUserInfo();
  }

  render() {
    const { isLoading, movies } = this.props.moviesPageStore;
    return (
      <View style={styles.container}>
        <Header />
        {isLoading ? (
          <Loader />
        ) : (
          <AnimatedFlatList
            style={styles.flatlist}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x } } }],
              { useNativeDriver: true }
            )}
            data={movies}
            keyExtractor={item => String(item.id)}
            renderItem={({ item, index }) => (
              <MovieItem
                item={item}
                index={index}
                style={transitionAnimation(index)}
              />
            )}
          />
        )}
        <Footer />
      </View>
    );
  }
}

export default MoviesScreen;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2,
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFFF"
  },
  flatlist: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - 100
  }
});
