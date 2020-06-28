import { Component, h, Prop, Element } from "@stencil/core";

@Component({
  tag: "image-component",
  styleUrl: "image-component.css",
  shadow: true,
})
export class AppRoot {
  @Prop() imgSrc: string;

  @Element() el: HTMLElement;

  private observer: IntersectionObserver;
  componentDidLoad() {
    // We are using shadowRoot because our component is shadowed from the real dom
    const img: HTMLImageElement = this.el.shadowRoot.querySelector("img");

    if (img) {
      this.observer = new IntersectionObserver(this.onIntersection);
      this.observer.observe(img);
    }
  }

  // this function is triggered when the element is in the viewport.
  // if the element (image in this case) is in the viewport the data-src
  // attribute will be replaced with the src attribute and the image will get displayed
  private onIntersection = async (entries: any) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (this.observer) {
          this.observer.disconnect();
        }
        if (entry.target.getAttribute("data-src")) {
          entry.target.setAttribute(
            "src",
            entry.target.getAttribute("data-src")
          );
          entry.target.removeAttribute("data-src");
        }
      }
    }
  };
  render() {
    return <img class="image-component" data-src={this.imgSrc} />;
  }
}
