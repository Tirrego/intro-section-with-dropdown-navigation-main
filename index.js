features = document.querySelector(".js-features")
company = document.querySelector(".js-company")
fitems = document.querySelector(".js-features-items")
citems = document.querySelector(".js-company-items")
farrow = document.querySelector(".js-arrow-f")
carrow = document.querySelector(".js-arrow-c")
burger = document.querySelector(".burger-icon")
nav = document.querySelector(".nav__links")
exit = document.querySelector(".exit")


features.addEventListener("click", () => {
    fitems.classList.toggle("disable")
    farrow.classList.toggle("open")
})

company.addEventListener("click", () => {
    citems.classList.toggle("disable")
    carrow.classList.toggle("open")
    
})

burger.addEventListener("click", () => {
    nav.classList.toggle("show")
    exit.classList.toggle("disable")
    
})

exit.addEventListener("click", () => {
    nav.classList.toggle("show")
    exit.classList.toggle("disable")
    
})

