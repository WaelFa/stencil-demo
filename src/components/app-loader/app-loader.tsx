import { Component, h } from "@stencil/core";

@Component({
  tag: "app-loader",
  styleUrl: "app-loader.css",
  shadow: true,
})
export class AppLoader {
  render() {
    return (
      <div class="fancy-spinner">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="dot"></div>
      </div>
    );
  }
}
