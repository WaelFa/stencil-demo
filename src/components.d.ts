/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory, } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppImages {
        "match": MatchResults;
    }
    interface AppLoader {
    }
    interface AppProfile {
    }
    interface AppRoot {
        "history": RouterHistory;
    }
    interface ImageComponent {
        "imgSrc": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppImagesElement extends Components.AppImages, HTMLStencilElement {
    }
    var HTMLAppImagesElement: {
        prototype: HTMLAppImagesElement;
        new (): HTMLAppImagesElement;
    };
    interface HTMLAppLoaderElement extends Components.AppLoader, HTMLStencilElement {
    }
    var HTMLAppLoaderElement: {
        prototype: HTMLAppLoaderElement;
        new (): HTMLAppLoaderElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLImageComponentElement extends Components.ImageComponent, HTMLStencilElement {
    }
    var HTMLImageComponentElement: {
        prototype: HTMLImageComponentElement;
        new (): HTMLImageComponentElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-images": HTMLAppImagesElement;
        "app-loader": HTMLAppLoaderElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "image-component": HTMLImageComponentElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppImages {
        "match"?: MatchResults;
    }
    interface AppLoader {
    }
    interface AppProfile {
    }
    interface AppRoot {
        "history"?: RouterHistory;
    }
    interface ImageComponent {
        "imgSrc"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-images": AppImages;
        "app-loader": AppLoader;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "image-component": ImageComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-images": LocalJSX.AppImages & JSXBase.HTMLAttributes<HTMLAppImagesElement>;
            "app-loader": LocalJSX.AppLoader & JSXBase.HTMLAttributes<HTMLAppLoaderElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "image-component": LocalJSX.ImageComponent & JSXBase.HTMLAttributes<HTMLImageComponentElement>;
        }
    }
}
