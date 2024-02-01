class Cards extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");
    const img = document.createElement('img');
    img.src = this.getAttribute('img');
   const link = document.createElement('a');
   link.textContent = this.getAttribute('link')
   link.href = ''

    const descricao = document.createElement("p");
    descricao.textContent = this.getAttribute('texto')
    componentRoot.appendChild(img)
    componentRoot.appendChild(link)
    componentRoot.appendChild(descricao);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card{
      margin: 20px 20px 20px 20px;
      background:#c5c5c9;
      width:200px;
      height:auto;
      border-radius: 10px;
      border:1px solid yellow;
     
    }
    .card img{
      width:100%;
      border-radius:10px  10px 0 0
      
    }
    .card a{
      padding-left:5px;
      text-decoration:none;
      color:yellow;
      font-weight:bold;
      text-shadow:-1px 2px 4px black;
    }
    .card p{
      padding:5px;
      text-align:justify;
    }
   @media screen and (max-width:460px){
    .card{
      margin:20px auto;
      background:#c5c5c9;
      width:90%;
      
      height:auto;
      border-radius: 10px;
      border:1px solid yellow;
     
    }
   }
    
    
    
    `
    return style;
  }
}

customElements.define("card-padrao", Cards);
