export default class Projects {

    constructor(URL) {
        this.URL = URL
        this.currentPage = 0
        this.projectsPerPage = 8

        this.portfolium = document.querySelector(".portfolium")
        this.nextButton = document.getElementById("next")
        this.prevButton = document.getElementById("prev")

        this.nextButton.addEventListener("click", this.nextPage.bind(this))
        this.prevButton.addEventListener("click", this.prevPage.bind(this))
    }

    async fetchAPI(URL) {
        const loader = document.querySelector(".loader")
        const prev = document.querySelector("#prev")
        const next = document.querySelector("#next")

        loader.style.display = "block"
        prev.disabled = true
        next.disabled = true

        return fetch(URL)
            .then(response => {
                return Promise.resolve(response);
            }).then(response => {
                return response.json()
            }).then(projects => {
                loader.style.display = "none"
                prev.disabled = false
                next.disabled = false
                return projects
            })
    }

    async displayProjects() {
        const projects = await this.fetchAPI(this.URL)
        const startIndex = this.currentPage * this.projectsPerPage;
        const endIndex = startIndex + this.projectsPerPage;
        const currentPageProjects = projects.slice(startIndex, endIndex);

        const html = currentPageProjects.map(project => {
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
        this.toggleButtons(projects)
    }

    nextPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.displayProjects();
        }
    }

    async prevPage() {
        const projects = await this.fetchAPI(this.URL);
        const maxPages = Math.ceil(projects.length / this.projectsPerPage);

        if (this.currentPage < maxPages - 1) {
            this.currentPage++;
            this.displayProjects();
        }
    }

    toggleButtons(projects) {
        const maxPages = Math.ceil(projects.length / this.projectsPerPage);

        if (this.currentPage === maxPages - 1) {
            this.prevButton.disabled = true;
        } else {
            this.prevButton.disabled = false;
        }

        if (this.currentPage === 0) {
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
}