class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        //div principal
        const componentRoot = document.createElement("div");
        //inserção de class="card"
        componentRoot.setAttribute("class", "card");
        
        //div cardLeft
        const cardLeft =document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        //elementos dentro da div cardLeft
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        //inserção dos elementos na div cardLeft        
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //div cardRight                
        const cardRight =document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        
        //elementos dentro da div cardRight
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "/assets/default.png";
        newsImage.alt = "Foto da Notícia";

        //inserção dos elementos na div cardRight
        cardRight.appendChild(newsImage);
        
        //inserção das divs carlLeft e cardRight na div principal
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
    

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        
        style.textContent = `
            .card{
            width: 80%;
                box-shadow: 6px 5px 9px 0px rgba(0,0,0,0.76);
                -webkit-box-shadow: 6px 5px 9px 0px rgba(0,0,0,0.76);
                -moz-box-shadow: 6px 5px 9px 0px rgba(0,0,0,0.76);;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }

            .card_left > span {
                font-weight: 500;
            }

            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }

            .card_left > p {
                color: rgb(70, 70, 70);
            }
            .card_right > img {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 25rem;
            }
            `
        return style;
    }
}

customElements.define("card-news", CardNews);