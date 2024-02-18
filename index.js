features = document.querySelector(".js-features")
company = document.querySelector(".js-company")
fitems = document.querySelector(".js-features-items")
citems = document.querySelector(".js-company-items")


features.addEventListener("click", () => {
    fitems.classList.toggle("disable")
})

company.addEventListener("click", () => {
    citems.classList.toggle("disable")
})