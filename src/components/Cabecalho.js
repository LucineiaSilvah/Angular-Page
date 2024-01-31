class Cabecalho extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("header");
    componentRoot.setAttribute("class", "cabecalho");

    const titulo = document.createElement("h1");
    titulo.textContent = 'GTI Info'

    componentRoot.appendChild(titulo);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .cabecalho{
  
      height:200px;
      background:black;
    }
    h1{
    display:inline-block;
     color:#fff;
     border-bottom:2px solid yellow;
     margin:20px;
    }
    
    
    
    `
    return style;
  }
}

customElements.define("cabecalho-cima", Cabecalho);
