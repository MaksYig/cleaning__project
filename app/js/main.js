$(function () {
  $(".reviews__slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
  });
  $(".burger__menu").on("click", function () {
    $(".burger__menu,.header__nav-menu").toggleClass("active");
    $("body").toggleClass("block");
  });
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
    $("body").removeClass("block");
    $(".burger__menu,.header__nav-menu").removeClass("active");
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });
});
