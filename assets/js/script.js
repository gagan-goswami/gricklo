$(document).ready(function () {
  $(".top").hide(0);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top").fadeIn(200);
    } else {
      $(".top").fadeOut(300);
    }
  });
  $(".top").click(function () {
    event.preventDefault();

    $("html , body").animate({ scrollTop: 0 }, 500);
  });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function menuSticky() {
  if ($(".is-sticky-on").length > 0) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 250) {
        $(".is-sticky-on").addClass("is-sticky-menu");
      } else {
        $(".is-sticky-on").removeClass("is-sticky-menu");
      }
    });
  }
}
menuSticky();

$(".slider-1").owlCarousel({
  slideBy: 1,
  loop: true,
  autoplay: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 1,
    },
    991: {
      items: 1,
    },
  },
});

// JavaScript
function playVideo() {
  // JavaScript
  class VideoModalManager {
    constructor() {
      this.init();
    }
    init() {
      $(".video-btn").click(function () {
        const $videoSrc = $(this).data("src");
        $(".modal").data("videoSrc", $videoSrc);
      });
      $(".modal").on("shown.bs.modal", function (e) {
        const $videoSrc = $(this).data("videoSrc");
        console.log("Video Source in modal:", $videoSrc); // Debugging
        $(this)
          .find("#video")
          .attr("src", $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
      });
      $(".modal").on("hide.bs.modal", function (e) {
        $(this).find("#video").attr("src", "");
      });
    }
  }
  // Initialize the VideoModalManager
  const videoModalManager = new VideoModalManager();
}

playVideo();
