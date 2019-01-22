import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import styles from "./styles";
import { inject, observer } from "mobx-react";

@inject("loginFormStore")
@observer
class LoginFormScreen extends React.Component {
  onLogin = () => {
    const errors = this.props.loginFormStore.validateFields();
    if (Object.keys(errors).length > 0) {
      this.props.loginFormStore.onChangeErrors(errors);
    } else {
      this.props.loginFormStore.onSubmit();
    }
  };
  render() {
    const {
      values,
      errors,
      submitting,
      onChangeInfo,
      handleBlur
    } = this.props.loginFormStore;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
            <Text style={styles.text}>Authorization</Text>
            <TextInput
              style={styles.input}
              textContentType="username"
              placeholder="Enter your name"
              name="username"
              value={values.username || ""}
              onChangeText={inputValue => {
                onChangeInfo({ name: "username", value: inputValue });
              }}
              onBlur={() => {
                handleBlur({ name: "username" });
              }}
              error={errors.username}
            />
            {errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}
            <TextInput
              style={styles.input}
              textContentType="password"
              placeholder="Enter password"
              name="password"
              value={values.password || ""}
              onChangeText={inputValue => {
                onChangeInfo({ name: "password", value: inputValue });
              }}
              onBlur={() => {
                handleBlur({ name: "password" });
              }}
              error={errors.password}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onLogin}
              disabled={submitting}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
            {errors.base && <Text style={styles.error}>{errors.base}</Text>}
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

export default LoginFormScreen;
