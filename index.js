var slideshows = document.querySelectorAll('[data-component="slideshow"]'); 
slideshows.forEach(initSlideShow);

$(".swiper").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});

function initSlideShow(slideshow) { 

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

    var index = 0, time = 5000; 
    slides[index].classList.add('active');

    setInterval( () => { 
        slides[index].classList.remove('active');
        
        index++;
        if (index === slides.length) index = 0;

        slides[index].classList.add('active');

    }, time);
}


