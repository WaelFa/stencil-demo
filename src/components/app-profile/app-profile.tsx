import { Component, Prop, h } from "@stencil/core";
import { MatchResults } from "@stencil/router";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css",
  shadow: true,
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return "";
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p>
            Hello! My name is {this.normalize(this.match.params.name)}. My name
            was passed in through a route param!
          </p>
          <image-component img-src="https://i.pinimg.com/originals/57/a3/78/57a378c88099a6366e5bff1b9d5f125d.jpg"></image-component>
          <image-component img-src="https://i.pinimg.com/originals/57/a3/78/57a378c88099a6366e5bff1b9d5f125d.jpg"></image-component>
          <image-component img-src="https://i.pinimg.com/originals/57/a3/78/57a378c88099a6366e5bff1b9d5f125d.jpg"></image-component>
        </div>
      );
    }
  }
}
