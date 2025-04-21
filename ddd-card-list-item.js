/**
 * Copyright 2025 ChrisSarpong
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

/**
 * `ddd-card-list`
 *
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardListItem extends LitElement {
  static get tag() {
    return "ddd-card-list-item";
  }

  constructor() {
    super();
    this.title = "Card List";
    this.description = "";
    this.image = "";
    this.link = "";
    this.item = {};
  }

  // Lit reactive properties
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      link: { type: String },
      image: { type: String },
      card: { type: Object },
    };
  }

  // Scoped styles
  static styles = css`
    :host {
      /* standard SYTLING  */
      display: block;
      font-family: var(--ddd-font-navigation, Arial, sans-serif);
      color: var(--ddd-theme-primary, #000);
      background-color: var(--ddd-theme-accent, #f9f9f9);
    }
    .wrapper {
      /* Wrapper stlying  */
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      border: 2px solid var(--ddd-border-color, #ccc);
      border-radius: var(--ddd-border-radius, 8px);
      box-shadow: var(--ddd-card-box-shadow, 0 4px 6px rgba(0, 0, 0, 0.1));
    }
    .img {
      /* Image styling  */
      width: 100%;
      height: auto;
      border-radius: var(--ddd-radius-lg, 8px);
      object-fit: cover;
      margin-bottom: 16px;
    }
    .title {
      /* Title styling, to change the font style this is where  */
      font-size: var(--ddd-card-title-font-size, 1.5rem);
      font-weight: bold;
      margin: 8px 0;
      text-align: center;
    }
    .description {
      font-size: var(--ddd-font-size-m, 1rem);
      color: var(--ddd-theme-default-coalyGray, #666);
      text-align: center;
      margin-bottom: 16px;
    }
    .button {
      background-color: var(--ddd-button-background-color, #005fa9);
      color: var(--ddd-button-color, #fff);
      border: none;
      padding: 12px 24px;
      border-radius: var(--ddd-border-radius, 8px);
      font-size: var(--ddd-button-font-size, 1rem);
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .button:hover {
      background-color: var(--ddd-button-background-color-hover, #003f7f);
    }
  `;

  // Render method
  render() {
    return html`
      <div class="wrapper">
        <img
          src="${this.image || ""}"
          alt="${this.title || "Card image"}"
          class="img"
        />
        <div class="title">${this.title}</div>
        <div class="description">
          <slot></slot>
        </div>
        ${this.link
          ? html`
              <button
                class="button"
                @click="${() => this._openLink(this.link)}"
              >
                Explore >
              </button>
            `
          : ""}
      </div>
    `;
  }
  _openLink(link) {
    window.open(link, "_blank");
  }
}

customElements.define(DddCardListItem.tag, DddCardListItem);
