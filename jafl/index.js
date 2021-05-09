function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

class cardEpisodio extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return ["img", "title", "description", 'link'];
    }
    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "img") {
            this.img = newVal;
        }
        if (attr === "title") {
            this.title = newVal;
        }
        if (attr === "description") {
            this.description = newVal;
        }
        if (attr === "link") {
            this.link = newVal;
        }
    }

    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <a href="${this.link}" target="_blank">
            <section>
                <div class="EP-contenedor">
                <p class="title">${this.title}</p>
                <span class="EP-img"></span>
                </div>
                <p class="descripcion-texto">${this.description}</p>
            </section>
        </a>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
        <style>
        a{
            text-decoration: none;
          }
        .descripcion-texto{
            position: initial;
            width: 80%;
            padding-top: 2rem;
            padding-bottom: 2rem;
            margin: 0 auto;
            text-align: center;
            color: #fff;
            font-size: 2rem;
          }
        .EP-contenedor{
            margin: 0 auto;
            margin-top: 2rem;
            width: 250px;
            height: 250px;
            position: relative;
            opacity: .95;
            font-family: 'Montserrat', sans-serif;
            background-image: url("${this.img}");
            background-size: cover;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.7);
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 1rem;
            transition: 2s;
          }
          .EP-img{
            background-image: url("${this.img}");
            background-size: cover;
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.5);
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 8rem;
            transition: 1s;
          }
          .EP-contenedor .title{
            color: rgb(255, 255, 255);
            max-width: 25rem;
            min-width: 25rem;
            min-height: 25rem;
            max-height: 25rem;
            transform: rotate(270deg);
            position: absolute;
            font-size: 2.5rem;
            opacity: 1;
            right:-1rem;
            font-weight: 700;
            text-shadow: 5px 5px 8px #5f72be;
            bottom: .5rem;
          }
          
          .EP-contenedor:hover{
            box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.993);
            transition: .2s;
            animation-duration: 3s;
            animation-name: slidein;
            transform: scale(1.1);
            position: relative;
            font-size: 7rem;
            background-image: url(".${this.img}");
            background-color:#5f72be6a;
          }
          @keyframes slidein {
                0%{
                background-position: left;
                }
                100%{
                background-position: center;
                }
            }
        </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("card-episode", cardEpisodio);