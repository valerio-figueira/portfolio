export default class Technologies {

    constructor(technologies) {
        this.title = technologies.title
        this.content = technologies.content
        this.references = technologies.references
        this.images = technologies.images
        this.date = technologies.date

        this.container = document.querySelector(".popup-content")
        this.createElements()
    }

    createElements() {
        const h2 = this.createElement('h2', 'title')
        const img = this.createElement('img', 'image')
        const small = this.createElement('small', 'date')
        const div = this.createElement('div', 'paragraphs')

        h2.innerHTML = this.title
        img.setAttribute("src", this.images[0]);
        img.setAttribute("alt", this.title);

        // WARN THE USER ABOUT ESC KEY TO EXIT
        const warningTag = this.createElement('small', 'warning')
        warningTag.innerHTML = 'Press Esc to Exit';
        this.container.appendChild(warningTag);

        const titleContainer = this.createElement('div', 'title-container')
        titleContainer.appendChild(h2);
        titleContainer.appendChild(img);
        this.container.appendChild(titleContainer);
        
        this.createParagraphs(div)
        this.container.appendChild(div);
        this.container.appendChild(this.createReferencesTag());

        // INSERT DATETIME TAG INTO THE CONTAINER
        small.innerHTML = `Published: ${new Date(this.date).toLocaleDateString()}`;
        this.container.appendChild(small);

    }

    createParagraphs(div) {
        for (let paragraph of this.content) {
            let paragraphTag = this.createElement('p', 'paragraph');
            paragraphTag.innerHTML = paragraph;
            div.appendChild(paragraphTag);
        }
    }

    createReferencesTag() {
        const linksContainer = this.createElement('div', 'references');
        linksContainer.innerHTML = "References: ";

        for (let reference of this.references) {
            const referenceTag = this.createElement('a', 'reference');
            referenceTag.href = reference;
            referenceTag.target = "_blank";
            referenceTag.rel = "external";
            referenceTag.innerHTML = reference;
            linksContainer.appendChild(referenceTag);
        }

        return linksContainer
    }

    createElement(elementName, className = undefined) {
        const element = document.createElement(elementName)
        element.className = className

        return element
    }

}