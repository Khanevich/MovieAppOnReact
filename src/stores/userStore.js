import { observable, action, computed } from "mobx";
import CallApi, { API_URL, API_KEY_3, fetchApi } from "../api/api";
import { AsyncStorage } from "react-native";

class UserStore {
  @observable user = {};
  @observable session_id = null;
  @observable favoriteMovies = [];
  @observable watchList = [];
  @observable isLoading = false;

  @computed get isAuth() {
    return Boolean(Object.keys(this.user).length);
  }

  @action
  updateAuth = (user, session_id) => {
    this.user = user;
    this.session_id = session_id;
    this.setSessionId();
  };

  @action
  setSessionId = async () => {
    try {
      await AsyncStorage.setItem("session_id", session_id);
    } catch {
      console.log("Error saving data");
    }
  };

  getSessionId = async () => {
    let session_id = "";
    try {
      session_id = await AsyncStorage.getItem("session_id", session_id);
    } catch {
      console.log("Error getting data");
    }
    return session_id;
  };

  getUserInfo = async () => {
    let session_id = this.getSessionId();
    CallApi.get("/account", {
      params: {
        session_id
      }
    })
      .then(user => {
        this.updateAuth(user, session_id);
      })
      .catch(error => {
        this.submitting = false;
        console.log("Error getting data", error);
      });
  };
}

export const userStore = new UserStore();
