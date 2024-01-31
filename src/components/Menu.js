class Menu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("li");
    componentRoot.setAttribute("class", "menu-item");
    componentRoot.textContent = this.getAttribute('opcao')
    const link = document.createElement('a');
    link.href = this.getAttribute('link')
  

    componentRoot.appendChild(link);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .menu-item {
      list-style:none;
      color:yellow;
      border-bottom:2px solid white;
    }
    .menu-item:hover{
      color:white;
      border-bottom:2px solid yellow;
      font-size:1.1rem;
      transition: 0.600s  ;
    }
    
    `
    return style;
  }
}

customElements.define("menu-item", Menu);
