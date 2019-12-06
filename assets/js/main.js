let slider = tns({
  mode: 'gallery',
  container: '.main-slider__slider',
  items: 1,
  autoplay: true,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  slideBy: 1,
  autoplayTimeout: 3000,
  animateDelay: 10000
});

$(document).ready(function () {
  // --- TABS
  $('.js-tabs-content > *').hide();
  $('.js-tabs-nav > *').each(function (index, el) {
    $(el).attr('data-href', index);
  })

  $('.js-tabs-nav > *').on('click', handlerClickTab)

  function handlerClickTab(e) {
    const $_tgt = $(e.currentTarget),
      href = $_tgt.attr('data-href'),
      parent = $_tgt.closest('.js-tabs-nav'),
      content = parent.next('.js-tabs-content');

    parent.children().removeClass('isActive')
    $_tgt.addClass('isActive');
    content.children().hide().eq(href).show();
  }

  $('.js-tabs-nav > *:first-child').click()
  // TABS --- 


  // --- read more
  $('.readMore__btn').on('click', handlerClickReadMore)

  function handlerClickReadMore(e) {
    const parent = this.closest('.readMore');
    if (parent.classList.contains('isReadMore')) {
      parent.classList.remove('isReadMore');
      this.innerHTML = "Подробнее"
    } else {
      parent.classList.add('isReadMore');
      this.innerHTML = "Скрыть"
    }
  }
  // read more ---

  // smooth scroll

  $("a.topLink").click(function () {

    if ($(this).attr("href") === '#') return;
    closeHB()
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });

  // smooth scroll -----

  // humburger
  $('.hb-menu').on('click', handlerClickHb)

  function handlerClickHb() {
    const tgt = $(this),
          contacts = $('.header__el--contacts')
    if (tgt.hasClass('isOpen')) {
      tgt.removeClass('isOpen');
      contacts.removeClass('isOpen');
    } else {
      tgt.addClass('isOpen')
      contacts.addClass('isOpen');
    }
  }
  function closeHB() {
    $('.hb-menu').removeClass('isOpen');
    $('.header__el--contacts').removeClass('isOpen');
  }
  // humburger ----

  // arrow-top
  $('.arrow-top').hide();
  $(document).scroll(function() {
    if ($(document).scrollTop() > 400) {
        $('.arrow-top').show();
    } else {
        $('.arrow-top').hide();
    }
  })
  $('.arrow-top').click(function(){
    $(document.documentElement).animate({scrollTop:0}, 500);
  });
  // arrow-top ----
});