import { Component, h, State } from "@stencil/core";
import { autorun } from "mobx";
import { loginStore } from "../my-app.store";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  @State() authenticated: boolean;
  constructor() {
    // this updates the local component state property `this.todos`
    // to allow re-render of
    autorun(() => {
      this.authenticated = loginStore.authenticated;
    });
  }

   private handleLogout(clickEvent: MouseEvent) {
    clickEvent.preventDefault();
    // logout
     loginStore.authenticated = false;
    }
  
  render() {
    return (
      <div>
        <header>
          <h1>Stencil Demo with Mobx</h1>
          {this.authenticated && (
            <button class="logout-button" onClick={this.handleLogout.bind(this)}>
              Logout
            </button>
          )}
        </header>
        <main>
          <stencil-router>
            {this.authenticated ? (
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-profile" />
                <stencil-route url="/images/:animal" component="app-images" />
                <stencil-route-redirect url="/" />
              </stencil-route-switch>
            ) : (
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-home" exact={true} />
                <stencil-route-redirect url="/" />
              </stencil-route-switch>
            )}
          </stencil-router>
        </main>
      </div>
    );
  }
}
