import { observable, action } from "mobx";
import { userStore } from "./userStore";
import CallApi from "../api/api";
import { Actions } from "react-native-router-flux";

class LoginFormStore {
	@observable
	values = {
		username: "StasKhanevich",
		password: "terka2312"
	};

	@observable
	errors = {
		username: false,
		password: false,
		base: false
	};

	@observable showLoginModal = false;
	@observable isLoading = true;

	@observable
	submitting = false;

	@action
	onChangeInfo = ({ name, value }) => {
		this.values[name] = value;
		this.errors[name] = null;
		this.errors.base = null;
	};

	@action
	handleBlur = name => {
		console.log("on blur", name);
		const errors = this.validateFields();
		if (Object.keys(errors).length > 0) {
			this.errors = errors;
		}
	};

	@action
	validateFields = () => {
		const { username, password, repeatPassword } = this.values;
		const errors = {};
		if (username !== null && username.length < 5) {
			errors.username = "Username is too short";
		}

		if (password !== null && password.length < 5) {
			errors.password = "Password is too short";
		}
		return errors;
	};

	@action
	onChangeSubmitting = sub => {
		console.log("submitted");
		this.submitting = sub;
	};

	@action
	onChangeErrors = err => {
		this.errors = err;
	};

	onSubmit = () => {
		let session_id = null;
		this.onChangeSubmitting(true);
		CallApi.get("/authentication/token/new")
			.then(data => {
				return CallApi.post("/authentication/token/validate_with_login", {
					body: {
						username: this.values.username,
						password: this.values.password,
						request_token: data.request_token
					}
				});
			})
			.then(data => {
				return CallApi.post("/authentication/session/new", {
					body: {
						request_token: data.request_token
					}
				});
			})
			.then(data => {
				session_id = data.session_id;
				return CallApi.get("/account", {
					params: {
						session_id: data.session_id
					}
				});
			})
			.then(user => {
				userStore.updateAuth(user, session_id);
				console.log("getUser", user);
				this.onChangeSubmitting(false);
				Actions.movies();
			})
			.catch(error => {
				console.log("error", error);
				this.onChangeSubmitting(false);
				this.errors.base = error.status_message;
			});
	};
}

export const loginFormStore = new LoginFormStore();
