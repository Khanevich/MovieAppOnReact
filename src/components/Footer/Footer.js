import React from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";
import styles from "./styles";
import { inject, observer } from "mobx-react";

@inject("moviesPageStore")
@observer
class Footer extends React.Component {
  render() {
    const { prevPage, nextPage } = this.props.moviesPageStore;
    return (
      <View style={styles.footer}>
        <Button title="Prev" style={styles.footerButtons} onPress={prevPage}>
          Previous
        </Button>

        <Button title="Next" style={styles.footerButtons} onPress={nextPage}>
          Next
        </Button>
      </View>
    );
  }
}

export default Footer;
