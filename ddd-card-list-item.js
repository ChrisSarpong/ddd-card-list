/**
 * Copyright 2025 ChrisSarpong
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card-list`
 *
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardListItem extends DDDSuper(I18NMixin(LitElement)) {
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
          width: calc(33.33% - 16px);
        }
        .ddd-card:hover {
          box-shadow: var(--ddd-card-box-shadow-hover);
        }
        .ddd-card h3 {
          margin: 0;
          font-size: var(--ddd-card-title-font-size, var(--ddd-font-size-m));
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html` <div class="wrapper">
      <ddd-card-list-item>/* this is the card list */
        <ddd-card class="ddd-card">
          <h3>This is the outline for the card</h3>
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

globalThis.customElements.define(DddCardListItem.tag, DddCardListItem);
