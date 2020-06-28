import { Component, h } from "@stencil/core";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css",
  shadow: true,
})
export class AppProfile {
  render() {
    return (
      <div class="app-profile">
        <h1>Hello Miroslav!!</h1>
        <p>I prepared a couple of images for you! would you consider yourself a </p>
        <stencil-route-link url="/images/dogs">
          <button class="animal-button">A dog person?</button>
        </stencil-route-link>
        or
        <stencil-route-link url="/images/cats">
          <button class="animal-button">a cat person?</button>
        </stencil-route-link>
      </div>
    );
  }
}
