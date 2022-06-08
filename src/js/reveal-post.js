
function initReveal() {
  Reveal.initialize({
    hash: true,
    embedded: true,
    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [RevealMarkdown]
  }).then(() => {
    createNavigation()
    initEvents()
  })
}

function createNavigation() {
  const navList = document.querySelector(".post-navigation > ul")
  const currentSlideId = document.querySelector(".slides section.present").id
  document.querySelectorAll(".slides > section")
    .forEach(slide => {
      const slideId = slide.id
      const listElement = navListElement(slideId)
      if (currentSlideId === slideId) {
        listElement.classList.add("active")
      }
      navList.appendChild(listElement)
    })
}

function navListElement(slideId) {
  const listElement = document.createElement("li")
  listElement.id = "list-item-" + slideId
  listElement.textContent = slideId
  return listElement
}

function initEvents() {
  
  Reveal.on('slidechanged', event => {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    const slideId = event.currentSlide.id;
    const activeElement = document.querySelector('#post-nav-list li.active')
    const currentElement = document.querySelector("#post-nav-list li#list-item-" + slideId)
    if (activeElement.id !== currentElement.id) {
      activeElement.classList.remove("active")
      currentElement.classList.add("active")
    }
});
}

initReveal()