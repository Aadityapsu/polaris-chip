import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.description = "";
    this.img = "";
  }

  static get styles() {
    return css` 
    
      a {
      text-decoration: none;
  }

  .btn-wrapper {
    background-color: orange;
    padding: 10px;
    margin: 64px;
    text-align: center;
  }

  h2 {text-align: center;}
  p {text-align: center;}

  .btn {
    background-color: blue;
    color: white;
    font-size: 20px;
    border-radius: 10%;
    padding: 16px 16px 16px 16px;
    margin: 4px 4px 4px 32px;
  }

  .btn:focus,
  .btn:hover {
    background-color: green;
  }
  .card-wrapper {
    background-color: orange;
    padding: 10px;
    margin: 64px;
  }

  .card {
    background-color: white;
    color: purple;
    font-size: 20px;
    border-radius: 8px;
    height: 400px;
    width: 400px;
    padding: 16px;
    margin: 16px auto;
  }

  .card:focus,
  .card:hover {
    background-color: grey;
  }

  .button{
    display: block;
    margin: 16px auto;
    padding: 12px 24px;
    margin: 0;
    text-align: center;
  
  }

  .card img{
    width: 100%;
    max-width: 350px;
    height: 200px;
    border-radius: 4px;
  }

    `;
  }

  render() { 
    return html`
    <div class="btn-wrapper">
    <h2>${this.title}</h2>

  
  <button id="detailsbtn" class="button">Details</button>
    
    <div id="details" class="details-content">
    <section class="card" id="card">
      <p>${this.description}</p>
      <img src=${this.img}> 
      <a href="https://hax.psu.edu" target="blank">
        <div></div>
      <button class="btn"> Visit HAX Website</button> 
      </a>
    </section>
    </div>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      img: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
