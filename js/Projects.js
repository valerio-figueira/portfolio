export default class Projects {

    constructor(URL) {
        this.URL = URL
        this.currentPage = 0
        this.totalProjects = 0
        this.totalPages = 0
        this.buttons = []

        this.portfolium = document.querySelector(".portfolium")
        this.loader = document.querySelector(".loader")
        this.nextButton = document.getElementById("next")
        this.prevButton = document.getElementById("prev")

        this.nextButton.addEventListener("click", this.nextPage.bind(this))
        this.prevButton.addEventListener("click", this.prevPage.bind(this))
    }

    async fetchAPI(URL) {
        this.disableBtns()

        return fetch(URL)
            .then(response => {
                return Promise.resolve(response);
            }).then(response => {
                return response.json()
            }).then(data => {
                this.enableBtns()
                return data
            }).catch(error => console.error(error))
    }

    async displayProjects(query = undefined) {
        let url = this.URL
        if (query) url = url + query

        const data = await this.fetchAPI(url)
        this.addAttributes(data)

        const html = data.projects.map(project => {
            return `
            <article class="projects" id="${project._id}">
                <div class="image-gallery">
                    <div class="images">
                        ${project.image.map(img => {
                return `
                            <a href="${project.url}" target="_blank">
                                <img src="${img}" alt="${project.title}">
                            </a>
                            `
            })}
                    </div>
                    <button class="left-btn fa fa-angle-left"></button>
                    <button class="right-btn fa fa-angle-right"></button>
                </div>
                <a href="${project.url}" target="_blank"><h3 class="name">${project.title}</h3></a>
                <a href="${project.url}" target="_blank" class="knowmore">Saiba mais <span class="fa fa-angle-double-right icon"></span></a>
            </article>
            `;
        }).join("")

        this.portfolium.innerHTML = html

        this.addButtonEvents()
        this.toggleButtons()
        this.createPaginationElements()
    }

    addAttributes(data) {
        if (data) {
            this.totalProjects = data.totalProjects
            this.currentPage = data.currentPage
            this.totalPages = data.totalPages
            return true
        }
        return false
    }

    nextPage() {
        if (this.currentPage > 0) {
            this.displayProjects(`?page=${this.currentPage - 1}`)
        }
    }

    async prevPage() {
        if (this.currentPage <= this.totalPages) {
            this.displayProjects(`?page=${this.currentPage + 1}`)
        }
    }

    toggleButtons() {
        if (this.currentPage === this.totalPages) {
            this.prevButton.disabled = true;
        } else {
            this.prevButton.disabled = false;
        }

        if (this.currentPage === 1) {
            this.nextButton.disabled = true;
        } else {
            this.nextButton.disabled = false;
        }
    }

    addButtonEvents() {
        const ImgContainers = document.querySelectorAll('.image-gallery');

        ImgContainers.forEach(container => {
            container.addEventListener('click', (e) => {
                if (e.target.matches('.left-btn')) {
                    container.children[0].scrollLeft -= 300
                } else if (e.target.matches('.right-btn')) {
                    container.children[0].scrollLeft += 300
                }
            })
        })
    }

    disableBtns() {
        this.loader.style.display = "block"
        this.prevButton.disabled = true
        this.nextButton.disabled = true
    }

    enableBtns() {
        this.loader.style.display = "none"
        this.prevButton.disabled = false
        this.nextButton.disabled = false
    }

    createPaginationElements() {
        const container = document.querySelector('.pagination-numbers')
        if(!container) {
            this.createPageNumbers()
        } else {
            this.buttons.forEach(btn => {
                btn.disabled = false
                if(btn.id == this.currentPage) btn.disabled = true
            })
        }
    }

    addEventToNumber(btn) {
        return btn.addEventListener('click', (e) => {
            this.displayProjects(`?page=${e.target.id}`)
        })
    }

    createPageNumbers() {
        const container = document.createElement('div')
        for (let i = 1; i <= this.totalPages; i++) {
            let btn = document.createElement('button')
            btn.innerHTML = i
            btn.id = i
            if(i === this.currentPage) btn.disabled = true
            this.addEventToNumber(btn)
            this.buttons.push(btn)
            container.appendChild(btn)
        }
        container.className = 'pagination-numbers'
        this.nextButton.nextSibling.after(container)
    }
}