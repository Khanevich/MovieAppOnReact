import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Icon } from "react-native-elements";
import { inject, observer } from "mobx-react";
import { Actions } from "react-native-router-flux";

@inject("userStore")
@observer
class Header extends React.Component {
  render() {
    const {
      userStore: { user }
    } = this.props;

    return (
      <View style={styles.header}>
        <Icon
          name="filter"
          type="foundation"
          color="#FFF"
          style={styles.icon}
          onPress={() => {
            Actions.filters();
          }}
        />
        <Text style={styles.text}>Hello</Text>
        <Image
          style={styles.avatar}
          source={{
            uri: `https://secure.gravatar.com/avatar/${
              user.avatar.gravatar.hash
            }.jpg?s=64"`
          }}
        />
      </View>
    );
  }
}

export default Header;
