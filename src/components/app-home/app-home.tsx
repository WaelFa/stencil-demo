import { Component, h, State } from "@stencil/core";
import { loginStore } from "../my-app.store";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true,
})
export class AppHome {
  @State() admin: string;
  @State() password: string;
  @State() loginError: boolean = false;

  private handleLogin(clickEvent: MouseEvent) {
    clickEvent.preventDefault();
    // login
    loginStore.login(this.admin, this.password);
    if (!loginStore.authenticated) {
      this.loginError = true;
    }
  }
  
  render() {
    console.log(this.loginError)
    return (
      <div class="app-home">
        <p>
          You can login using these credentials: admin: 'admin' and password:
          'password'
        </p>

        <form class="login-form">
          {/* This `form`-Tag allows the `Add`-Button to be triggered by pressing `Enter` on the keyboard */}
          <label>Admin:</label>
          <input
            class="input"
            placeholder="Enter Admin Username"
            value={this.admin}
            onInput={(e: any) => {
              this.admin = e.target.value;
            }}
          />
          <label>Password:</label>
          <input
            class="input"
            placeholder="Enter password"
            type="password"
            onInput={(e: any) => {
              this.password = e.target.value;
            }}
          ></input>
          {this.loginError && (
            <p class="error-message">admin username and/or password is wrong</p>
          )}
          <button
            type="submit"
            class="add-button"
            onClick={this.handleLogin.bind(this)}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
