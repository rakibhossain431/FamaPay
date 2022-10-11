

$('.hero-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });


const bar =document.querySelector(".sidemenu-btn")
const menu = document.querySelector(".mobail-menu")

bar.addEventListener("click", ()=>{
    menu.classList.toggle("show")
})

