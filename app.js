

// $('.hero-slider').slick({
//     dots: true,
//     infinite: true,
//     arrows: false,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });


const bar =document.querySelector(".sidemenu-btn")
const menu = document.querySelector(".mobail-menu")

bar.addEventListener("click", ()=>{
    menu.classList.toggle("show")
})
bar.addEventListener("click", ()=>{
    
    if(bar.firstElementChild.classList.contains("fa-bars")){

        bar.firstElementChild.classList.replace("fa-bars", "fa-times")
    }
    else{
        bar.firstElementChild.classList.replace("fa-times", "fa-bars")

    }
})

var tabElms = document.querySelectorAll('[data-bs-toggle="list"]')
var content = document.querySelectorAll('.list-group-item')

for (variable of tabElms) {
    variable.addEventListener('click', (e)=>{
        console.log(e.target.classList.toggle('active'))
    })
  }
  

