import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

import "@polymer/iron-flex-layout/iron-flex-layout-classes";
import '@polymer/paper-button/paper-button';
import '@polymer/paper-styles/paper-styles';
import '@polymer/paper-styles/paper-styles-classes';
import '@polymer/iron-ajax/iron-ajax';

/**
 * `polymer-greets` Description
 *
 * @customElement
 * @polymer
 * @demo
 *
 */
class PolymerGreets extends PolymerElement {
  static get properties() {
    return {
      greet:{
        type: String,
        default: ""
      }
    };
  }

  static get template() {
    return html`
      <style
        is="custom-style"
        include="flex-styles iron-flex iron-flex-alignment"
      ></style>
      <style>
        .icon{
          height: 120px;
          width: 150px;
        }
        .greet{
          width: 800px;
        }
        .greetMessage{
          height: 80px;
          font-family: "Dosis", sans-serif;
          font-size: 22px;
          @apply --layout-horizontal;
          @apply --layout-center;
        }
        .buttonDiv{
          width: 150px;
          @apply --layout-horizontal;
          @apply --layout-center;
        }
        paper-button{
          font-family: "Dosis", sans-serif;
          background-color: var(--paper-indigo-800);
          color: #fff;
          height: 40px;
          margin-left: 0px;
        }
      </style>
      <div
        style="height:calc(100vh - 100px);"
        class="layout horizontal center-center"
      >
        <div class="layout vertical center-center">
          <div class="greet">
            <img src="../resources/polymer.png" class="icon" />

            <div class="greetMessage">
              Hello, {{greet}}
            </div>
            
            <div class="buttonDiv">
              <paper-button raised on-click="nextGreet">Greet</paper-button>
            </div>
            
            
            <iron-ajax
              id="ajax_greet"
              auto
              method="GET"
              url="http://127.0.0.1:8080/api/greet"
              handle-as="json"
              on-response="handleResponse"></iron-ajax>
            
            
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local
   * DOM is initialized.
   */
  ready() {
    super.ready();
  }

  handleResponse(e){
    const response = e.detail.response;
    if(response["status"] == true){
      this.greet = response["data"]["greet"];
    }else{
      this.greet = response["error"];
    }
  }

  nextGreet(){
    this.$.ajax_greet.generateRequest();
  }
}

customElements.define("polymer-greets", PolymerGreets);
