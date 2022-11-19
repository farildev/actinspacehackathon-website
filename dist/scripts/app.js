// ;
const mobileMenu = document.querySelector('.mobile__menu');
const menuOpen = document.querySelector('.mobile-menu-burger');
const menuClose = document.querySelector('.mobile__menu-close');

menuOpen.addEventListener('click', () => {
  mobileMenu.classList.toggle('menu-active')
  // document.querySelector('body').style.overflow = 'hidden'
})
menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('menu-active');
  // document.querySelector('body').style.overflow = 'auto'
})

/*NavLink Scrool Anchor Point Configuration */
const anchorPoint = document.querySelectorAll('a[href^="#"]');
anchorPoint.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    })
  })
});

$('.team__carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '15px',
    arrows: false,
    dots:false,
    autoplaySpeed:1000,
    centerMode:true,
    responsive: [
      {
        breakpoint:1280,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          centerPadding: '10px',
        },
      },
      {
        breakpoint:1024,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint:480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ]
  });


  AOS.init();