import { Component, h, Event, State, EventEmitter } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true,
})
export class AppHome {

  @State() admin: string;
  @State() password: string;
  @Event() newTodoTitle: EventEmitter<string>;

  private handleAddClick(clickEvent: MouseEvent) {
    clickEvent.preventDefault();
    // login
    this.newTodoTitle.emit(this.admin);
    console.log(this.admin, this.password);

  }

  render() {
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
          <button
            type="submit"
            class="add-button"
            onClick={this.handleAddClick.bind(this)}
          >
            Login
          </button>
        </form>

        {/* <stencil-route-link url='/profile/stencil'>
        
        </stencil-route-link> */}
      </div>
    );
  }
}
