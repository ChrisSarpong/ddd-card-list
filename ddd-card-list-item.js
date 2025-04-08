/**
 * Copyright 2025 ChrisSarpong
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./ddd-card-list-item.js";

/**
 * `ddd-card-list`
 *
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardListItem extends DDD {
  static get tag() {
    return "ddd-card-list-item";
  }

  constructor() {
    super();
    this.title = "Card List";
    this.i18n = {
      en: {
        title: "Card List",
        description: "A list of cards",
      },
      es: {
        title: "Lista de Tarjetas",
        description: "Una lista de tarjetas",
      },
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      items: { type: Array },
      card: { type: Object },
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
          background-color: var(
            --ddd-theme-accent
          ); // this chnages the background color of the cards
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
          background-color: var(--ddd-card-background-color, #b3d626);
          border-radius: var(--ddd-border-radius);
          box-shadow: var(--ddd-card-box-shadow);
          padding: var(--ddd-spacing-4);
          border: var(--ddd-card-border);
          width: calc(33.33% - 16px);
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
          background-color: var(--ddd-button-background-color, #005fa9);
          color: var(--ddd-button-color, #ffffff);
          border: none;
          padding: var(--ddd-spacing-2);
          border-radius: var(--ddd-border-radius);
          width: 100%;
          font-size: var(--ddd-button-font-size, var(--ddd-font-size-m));
          cursor: pointer;
        }
        .button:hover {
          background-color: var(--ddd-button-background-color-hover, #001e44);
        }
        .img {
          object-fit: cover;
          border-radius: var(--ddd-radius-sm);
          margin-bottom: var(--ddd-spacing-2);
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .color-line {
          color: var(--ddd-card-color-line, #b3d626);
          height: 4px;
          width: 100%;
          border-radius: var(--ddd-radius-lg);
        }
      `,
    ];
  }
  // Hi chris. you left of tryign to create the card. One of you main issues was that you could not figure out how to chnage the sizing
  // Thaniks chris, current issues is nothing is showing up ! :(
  // Lit render the HTML
  render() {
    return html` <!-- /* this is the card list */ -->
      <div class="wrapper">
        <img
          src="https://images.ctfassets.net/ni9rh5nu0d99/1paFaX2Dc7iHh9Z6K7mIim/1427b9970ff21dd9c8a770067638efc1/abington-02.jpg?fm=webp&w=1200&q=75"
          height="500 px"
          width="500 px"
          class="img"
          alt="Card image"
        />
        <div class="Color-line"></div>
        <h3>Abington</h3>
        <p>
          Close to Philadelphia, Penn State Abington’s suburban campus offers
          bachelor's degrees, athletics, and a diverse student community.
        </p>
        <button class="button">Explore Button</button>
        <slot></slot>
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

globalThis.customElements.define(DddCardListItem.tag, DddCardListItem);
