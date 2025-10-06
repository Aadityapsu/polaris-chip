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
    this.fancy = "";
    this.fancy = false;
    this.min = 0;
  }

  static get properties() {
  return {
    fancy: { type: Boolean, reflect: true }
    }
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

  :host([fancy]) {
  display: block;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
}

  details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }

    `;
  }

  openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

updated(changedProperties) {
  if (super.updated) {
    super.updated(changedProperties);
  }
  if (changedProperties.has('counter')) {
    // do your testing of the value and make it rain by calling makeItRain
  }
}

makeItRain() {
  // this is called a dynamic import. It means it won't import the code for confetti until this method is called
  // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
  // will only run AFTER the code is imported and available to us
  import("@haxtheweb/multiple-choice/lib/confetti-container.js").then(
    (module) => {
      // This is a minor timing 'hack'. We know the code library above will import prior to this running
      // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
      // this "hack" ensures the element has had time to process in the DOM so that when we set popped
      // it's listening for changes so it can react
      setTimeout(() => {
        // forcibly set the poppped attribute on something with id confetti
        // while I've said in general NOT to do this, the confetti container element will reset this
        // after the animation runs so it's a simple way to generate the effect over and over 
        this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
      }, 0);
    }
  );
}

  render() { 
    return html`
    <div class="btn-wrapper">
    <h2>${this.title}</h2>
    <details ?open="${this.fancy}" @toggle="${this.openChanged}"></details>

  
  <button id="detailsbtn" class="button" ?disabled="${this.min === this.counter}">Details</button>
    
    <div id="details" class="details-content">
    <section class="card" id="card">
      
      <p>${this.description}</p>
      <img src=${this.img}> 
      <div></div>
      <a href="https://hax.psu.edu" target="blank">
        <div>
          <slot></slot>
        </div>
      <button class="btn"> Visit HAX Website</button> 
      </a>
    </section>
    </div>
    </div>`;

    <confetti-container id="confetti"></confetti-container>
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      img: { type: String },
      buttonTitle: {type: String, attribute: 'button-title'},
      fancy: {type: Boolean, reflect: true},
    };
  }
  
}

globalThis.customElements.define(MyCard.tag, MyCard);
