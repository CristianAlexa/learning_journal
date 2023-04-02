import { blogsData } from "./data.js"

const hamburgerBtn = document.querySelector("#hamburger")
const postsContainer = document.querySelector("#blog-posts")
const mainContent = document.querySelector("main")

let maxLoad = 3

hamburgerBtn.addEventListener('click', function () {
    document.querySelector(".nav-toggle").classList.toggle("nav-open")
    document.querySelector(".main-menu").classList.toggle("mobile-open")
})

document.addEventListener ("click", function(e){
    if (e.target.id === "view-more") {
        maxLoad = blogsData.length
        renderBlogPostsHTML(blogsData)
        e.target.parentElement.remove()
    }
} )
    
function renderViewMoreBtn () {
    if (maxLoad < blogsData.length) {
        const section = document.createElement("section")
        section.classList.add("more")
        section.innerHTML = `<button class="primary-btn" id="view-more">View more</button>`
        mainContent.appendChild(section)
    }
}
              
function renderBlogPostsHTML (blogs) {
    let PostHTML = ``
    for (let blog of blogs){
        PostHTML += `
                    <article class="card flex flex-column" id="${blog.uuid}">
                        <img
                        src="${blog.picture}"
                        alt="${blog.name}
                        class="card-img"
                        />
                        <p class="card-date">${blog.date}</p>
                        <h2 class="card-title">${blog.name}</h2>
                        <p class="card-text">
                        ${blog.description}
                        </p>
                    </article>
                    `
    }

    postsContainer.innerHTML = PostHTML
    renderViewMoreBtn()
}

renderBlogPostsHTML(blogsData.slice(0, maxLoad))



