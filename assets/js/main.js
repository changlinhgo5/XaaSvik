// load page
$(window).on("load", function () {
  $(".loader").delay(1000).fadeOut("lows");
  $("html, body").animate({ scrollTop: $("#home").offset().top }, 0);
});

// slick slider section__home headline
$(document).ready(function () {
  $(".headline-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1600,
    arrows: false,
    draggable: false,
    dots: false,
    vertical: true,
  });
});

// slick slider section__home logo
$(document).ready(function () {
  $(".section__home-container-slick-list").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1600,
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

// slick slider section__reviews commit
$(document).ready(function () {
  $(".section__reviews-container-slick-list").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// number counter
// $(document).ready(function () {
//   $(".section__results-container-num-count-number").counterUp({
//     delay: 10,
//     time: 1500,
//   });
// });
let check = true;
$(window).scroll(function () {
  const offsetQuestions =
    $(".section__results-container-num-count-number")[1].offsetParent.offsetTop -
    $(".section__results-container-num-count-number")[1].parentElement.parentElement.clientHeight;

  // handle counter up
  if ($(this).scrollTop() >= offsetQuestions && check === true) {
    check = false;
    const counts = $(".section__results-container-num-count-number");
    for (let i = 0; i < counts.length; i++) {
      const stop = counts[i].innerHTML;
      let countss = setInterval(updated);
      let upto = 0;
      function updated() {
        counts[i].innerHTML = ++upto;

        if (upto == stop) {
          clearInterval(countss);
        }
      }
    }
  }
});

// arrow to top
$(window).scroll(function () {
  if ($(this).scrollTop() >= 700) {
    $("#return-to-top").fadeIn(100);
  } else {
    $("#return-to-top").fadeOut(300);
  }
});
$("#return-to-top").click(function () {
  $("body,html").animate({
      scrollTop: 0,
    }, 0);
});

// header button
const header = document.querySelector(".header");
const headerBtn = document.querySelector(".header__btn");
const headerNavigationList = document.querySelector(".header__navigation-list");
const headerNavigationLinks = document.querySelectorAll(".header__navigation-link");
const whyContainerTabsPane = document.querySelectorAll(".section__why-container-tabs-pane");
const whyContainerTabsLink = document.querySelectorAll(".section__why-container-tabs-link");
const whyContainerTabsPills = document.querySelectorAll(".section__why-container-tabs-pills");
const questionsItems = document.querySelectorAll(".section__questions-container-reason-item");
const questionsBtns = document.querySelectorAll(".section__questions-container-reason-btn");

function handleMenuNav() {
  headerBtn.addEventListener("click", () => {
    headerNavigationList.classList.toggle("hide");
  });
  headerNavigationLinks.forEach((item) => {
    item.addEventListener("click", () => {
      headerNavigationList.classList.remove("hide");
    });
  });
  window.addEventListener("click", function (e) {
    if (headerNavigationList.contains(e.target) || headerBtn.contains(e.target)) {
      // Clicked in box
    } else {
      // Clicked outside the box
      headerNavigationList.classList.remove("hide");
    }
  });
}

function handleMenuStick() {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
      header.classList.add("stick-menu");
    } else {
      header.classList.remove("stick-menu");
    }
  };
}

function handleWhy() {
  whyContainerTabsPills.forEach((tabPill, index) => {
    const tabPane = whyContainerTabsPane[index];
    const tabLink = whyContainerTabsLink[index];
    tabPill.onclick = function () {
      $(".section__why-container-tabs-pane.active")[0].classList.remove("active");
      $(".section__why-container-tabs-link.active")[0].classList.remove("active");

      tabLink.classList.add("active");
      tabPane.classList.add("active");
    };
  });
}

function handleQuestions() {
  questionsBtns.forEach((questionsBtn) => {
    questionsBtn.onclick = function () {
      const btnActive = $(".section__questions-container-reason-item.active");
      const parentElementBtn = questionsBtn.parentElement.parentElement;

      if (Array.from(parentElementBtn.classList).includes("active")) {
        parentElementBtn.classList.remove("active");
      } else {
        if (btnActive.length > 0) {
          btnActive[0].classList.remove("active");
        }
        parentElementBtn.classList.add("active");
      }
    };
  });
}

function start() {
  handleMenuNav();
  handleMenuStick();
  handleWhy();
  handleQuestions();
}
start();
