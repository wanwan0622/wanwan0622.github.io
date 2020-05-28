// PhotoSwipe
initPhotoSwipeFromDOM('.js-my-gallery');

$(function () {

  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });


  //ページトップへもどる
  $('#js-page-top').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  //固定ヘッダー
  $(window).scroll(function () {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass('fixed');
      $("body").css("margin-top", navHeight);
    } else {
      $nav.removeClass('fixed');
      $("body").css("margin-top", "0");
    }
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var offset = $nav.offset();
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });


});
