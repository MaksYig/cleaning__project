function popup (){
  const modal = document.querySelector('.popup'),
  container =document.querySelector('.popup__container'),
  open = document.querySelectorAll('[data-popup-open]');
  modal.style.display ='none';

  open.forEach( item  =>{
    item.addEventListener('click', (e)=>{
      e.preventDefault();
        modal.style.display ='block';
        document.querySelector('body').style.overflow='hidden';
    });
  });
  modal.addEventListener('click', (e)=>{
    if (e.target == modal){
      modal.style.display ='none';
      document.querySelector('body').style.overflow='';
    }
  });
}
popup();


$(function () {
  $(".reviews__slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
  });
  // $(".burger__menu").on("click", function () {
  //   $(".burger__menu,.header__nav-menu").toggleClass("active");
  //   $("body").toggleClass("block");
  // });

    function burger (){
      const burger = document.querySelector('.burger__menu'),
            nav = document.querySelector('.header__nav-menu'),
            menuList = document.querySelectorAll('.header__nav-menu-list li a');
      
         

      function triggleBurger (){
        burger.addEventListener('click', ()=>{
          burger.classList.toggle('active');
          nav.classList.toggle('active');
          if (burger.classList.contains('active')){
            document.querySelector('body').style.overflow="hidden";
          }else{
            document.querySelector('body').style.overflow="";
          }
          menuList.forEach(menu =>{
            menu.addEventListener('click',()=>{
              burger.classList.remove('active');
              nav.classList.remove('active');
              document.querySelector('body').style.overflow="";
            });
          });
        });
        
      }
      triggleBurger();
    }
    burger();
  // $("#menu").on("click", "a", function (event) {
  //   event.preventDefault();
  //   var id = $(this).attr("href"),
  //     top = $(id).offset().top;
  //   $("body,html").animate({ scrollTop: top }, 1500);
  //   $("body").removeClass("block");
  //   $(".burger__menu,.header__nav-menu").removeClass("active");
  // });
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() != 0) {
  //     $("#toTop").fadeIn();
  //   } else {
  //     $("#toTop").fadeOut();
  //   }
  // });

  // $("#toTop").click(function () {
  //   $("body,html").animate({ scrollTop: 0 }, 800);
  // });

  


});

        // Scrolling with raf

        let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.85;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            if (event.target === link){
              
            }
            let widthTop = document.documentElement.scrollTop,
            hash = this.hash,
            toBlock = document.querySelector(hash).getBoundingClientRect().top,
            start = null;

        requestAnimationFrame(step);

        function step(time) {
            if (start === null) {
                start = time;
            }

            let progress = time - start,
                r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

            if (r != widthTop + toBlock) {
                requestAnimationFrame(step);
            } else {
                location.hash = hash;
            }
        }
    });
    });
  //  scrolling('.pageup');

