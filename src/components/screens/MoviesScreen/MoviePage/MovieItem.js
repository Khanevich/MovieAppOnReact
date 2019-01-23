import React from "react";
import { View, Text, Animated } from "react-native";
import styles from "./styles";
import { Card } from "react-native-elements";
import PercentageCircle from "react-native-percentage-circle";

class MovieItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Animated.View style={[this.props.style, styles.animatedView]}>
        <Card
          imageStyle={styles.image}
          containerStyle={styles.container}
          title={item.title}
          image={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
          }}
        >
          <View>
            <View style={styles.row}>
              <Text h4>Год: </Text>
              <Text style={styles.italic}>
                {String(item.release_date).split("-")[0]}
              </Text>
            </View>
            <View style={styles.row}>
              <Text>Язык оригинала: </Text>
              <Text style={styles.italic}>{`${item.original_language}`}</Text>
            </View>
            <View style={styles.vote}>
              <PercentageCircle
                radius={16}
                percent={Number(item.vote_average) * 10}
                color="lightblue"
              />
            </View>
          </View>
        </Card>
      </Animated.View>
    );
  }
}

export default MovieItem;
