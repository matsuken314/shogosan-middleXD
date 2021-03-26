
$(function() {
/*よくある質問のアコーディオンメニュー
*/
$(".aco-contents .question__ttl").on("click", function() {
    $(this).next().slideToggle(300);
    });

    /*Swiperでスライダーの設定 */
    var mySwiper = new Swiper(
        
        '.swiper-container', {
        centeredSlides:true,
        slidesPerView:1.4,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
          },
          /*769px以上の時 */
          breakpoints: {
            769: {
                centeredSlides : true,
              slidesPerView: 3.5,
              loop: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true
              },
        }
      });
      

});  

$(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeGxAaapCst_nb0Kjr8HVUtVeYRuVDfy9zaVjAujgL67dPkpA/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            //$(".end-message").slideDown();
            //$(".submit-btn").fadeOut();
            window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });
/*フォームのsubmitをdisabledで制御*/
$(document).ready(function () {

    const $submitBtn = $('#js-submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="mail"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
  
      } else {
        $submitBtn.prop('disabled', true);
      }
    });
  
  });


  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - 94;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  $(function () {
    //ハンバーガーメニュー
    $(".hamburger__btn").click(function () {
      $(this).toggleClass("active");
  
      if ($(this).hasClass("active")) {
        $(".hamburger").addClass("active");
      } else {
        $(".hamburger").removeClass("active");
      }
    });
    $(".hamburger__list").click(function () {
      $(".hamburger,.hamburger__btn").removeClass("active");
    });
});

/* animation
------------------------------*/

// scroll effects
$.fn.acs = function (options) {

  const elements = this;
  const defaults = {
    screenPos: 0.8,
    className: 'is-animated'
  };
  const setting = $.extend(defaults, options);


  $(window).on('load scroll', function () {
    add_class_in_scrolling();
  });

  function add_class_in_scrolling() {
    const winScroll = $(window).scrollTop();
    const winHeight = $(window).height();
    const scrollPos = winScroll + (winHeight * setting.screenPos);

    if (elements.offset().top < scrollPos) {
      elements.addClass(setting.className);
    }
  }
}

$('.anm, [class*="anm-"], .anm-list > *').each(function () {
  $(this).acs();
});



// list animation delay
$.fn.anmDelay = function (options) {
  const elements = this;
  const defaults = {
    delay: 0.2,
    property: 'animation-delay'
  };
  const setting = $.extend(defaults, options);

  const index = elements.index();
  const time = index * setting.delay;
  elements.css(setting.property, time + 's');
}

$('.anm-list > *').each(function () {
  $(this).anmDelay();
});