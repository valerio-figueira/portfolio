export default class Page02 {
    constructor(){

    }
    static getHtml(){
        return `        
        <h2 class="portfolium-title">Meu Portfólio</h2>

        <article class="post" id="huddle">
            <a><h2>Landing Page</h2></a>
            <a><img src="imgs/Huddle-Landing-Page.png" alt="Huddle"></a>
            <p class="description"></p>
        </article>

        <article class="post" id="ipma">
            <a><h2>IPMA</h2></a>
            <a><img src="imgs/IPMA.png" alt="IPMA"></a>
            <p class="description"></p>
        </article>

        <article class="post" id="subscription-page">
            <a><h2>Subscription Page</h2></a>
            <a><img src="imgs/subscription-page.png" alt="Subscription Page"></a>
            <p class="description"></p>
        </article>

        <article class="post" id="ruby">
            <a><h2>Ruby Project</h2></a>
            <a href="https://valerio-figueira.github.io/ruby-project/" target="_blank" rel="external"><img src="imgs/Ruby.png" alt="Ruby Project"></a>
            <p class="description"></p>
        </article>

        <article class="post" id="jasper">
            <a><h2>Jasper Project</h2></a>
            <a><img src="imgs/Jasper.png" alt="Jasper Project"></a>
            <p class="description"></p>
        </article>

        <article class="post" id="black-onyx">
            <a><h2>Black Onyx</h2></a>
            <a><img src="imgs/Black Onyx.png" alt="Black Onyx"></a>
            <p class="description"></p>
        </article>
        `;
    }
}