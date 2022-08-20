export default class Page01 {
    constructor(){

    }
    static getHtml(){
        return `
            <h2 class="portfolium-title">Meu Portfólio</h2>
            <article class="post" id="turmalina">
                <a><h2>Turmalina</h2></a>
                <a><img src="imgs/Turmalina.png" alt="Turmalina"></a>
                <p class="description"></p>
            </article>

            <article class="post" id="lapis-lazuli">
                <a><h2>Lapis Lazuli</h2></a>
                <a><img src="imgs/Lapis Lazuli.png" alt="Lapis Lazuli"></a>
                <p class="description"></p>
            </article>
        `;
    }
}