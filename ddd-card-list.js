/**
 * Copyright 2025 ChrisSarpong
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `ddd-card-list`
 *
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDD {
  static get tag() {
    return "ddd-card-list";
  }

  constructor() {
    super();
    this.title = "Card List";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        h3 span {
          font-size: var(
            --ddd-card-list-label-font-size,
            var(--ddd-font-size-s)
          );
        }
        .card-list {
          // this is the list that holds the card
          display: flex;
          flex-wrap: wrap;
          gap: var(--ddd-spacing-2);
        }
        .ddd-card {
          // design of the first card
          background-color: var(--ddd-card-background-color, #fff);
          border-radius: var(--ddd-border-radius);
          box-shadow: var(--ddd-card-box-shadow);
          padding: var(--ddd-spacing-4);
          border: var(--ddd-card-border);
          //width: calc(33.33% - 16px);
        }
        .ddd-card:hover {
          box-shadow: var(--ddd-card-box-shadow-hover);
        }
        .ddd-card h3 {
          margin: 0;
          font-size: var(--ddd-card-title-font-size, var(--ddd-font-size-m));
        }
        .button {
          // edit
          background-color: var(--ddd-button-background-color, #007bff);
          color: var(--ddd-button-color, #fff);
          border: none;
          padding: var(--ddd-spacing-2);
          border-radius: var(--ddd-border-radius);
          width: 100%;
          font-size: var(--ddd-button-font-size, var(--ddd-font-size-m));
          cursor: pointer;
        }
        .img {
          width: 16%;
          height: 16%;
          border-radius: var(--ddd-radius-sm);
          margin-bottom: var(--ddd-spacing-2);
        }
      `,
    ];
  } // Hi chris. you left of tryign to create the card. One of you main issues was that you could not figure out how to chnage the sizing

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <ddd-card-list-item> 
        <ddd-card class="ddd-card">
          <img src="https://www.worldcampus.psu.edu/sites/default/files/2018-12/1920x840_about-us_L1_1.jpg" alt="Card image" />
          <h3>This is the outline for the card</h3>
          <button>Click me</button>
          <p>This is the test for the card</p>
        </div>
      </div>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCardList.tag, DddCardList);
