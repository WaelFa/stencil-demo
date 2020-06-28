import { Component, Prop, State, h } from "@stencil/core";
import { MatchResults } from "@stencil/router";

interface Image {
  id: number;
  url: string;
}

@Component({
  tag: "app-images",
  styleUrl: "app-images.css",
  shadow: true,
})
export class AppImages {
  @Prop() match: MatchResults;
  @State() images: Array<Image>;
  @State() loading: boolean = true;

  normalize(animal: string): string {
    if (animal) {
      return animal.substr(0, 1).toUpperCase() + animal.substr(1).toLowerCase();
    }
    return "";
  }

  componentWillLoad() {
    let { animal } = this.match.params;
    fetch(`https://my-json-server.typicode.com/WaelFa/json-mock/${animal}`)
      .then((response) => response.json())
      .then((data) => {
        this.images = data;
      })
      .then(() => (this.loading = false));
  }

  render() {
    let { animal } = this.match.params;
    if (this.loading) {
      return (
        <div class="loader-container">
          <app-loader></app-loader>
        </div>
      );
    } else {
      return (
        <div class="app-images">
          <div class="app-images-header">
            <h1>Here are some beautiful {animal} pictures</h1>
            <stencil-route-link url="/profile">
              <h1>back &larr;</h1>
            </stencil-route-link>
          </div>
          <div class="app-images-content">
            {this.images.map((el) => (
              <image-component key={el.id} img-src={el.url}></image-component>
            ))}
          </div>
        </div>
      );
    }
  }
}
