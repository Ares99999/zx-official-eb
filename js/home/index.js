window.onload = function () {
  // document.onmousemove = function (e) {
  //   e = e || window.event;
  //   var x = e.clientX / document.body.offsetWidth;
  //   var y = e.clientY / document.body.offsetHeight;
  //   document.getElementById('home-slide1-img').style.transform = 'translate(' + x * 100 + 'px,' + y * 100 + 'px)';
  //   document.getElementById('home-slide2-img').style.transform = 'translate(' + x * 100 + 'px,' + y * 100 + 'px)';
  //   document.getElementById('home-slide3-img').style.transform = 'translate(' + x * 100 + 'px,' + y * 100 + 'px)';
  // };

  var a = document.querySelector('.navbar-toggle');
  $('.navbar-nav li a').on('click', function () {
    a.click();
    $('.navbar-nav li a').blur();
  });

  // 全屏swiper
  var swiperBox = new Swiper('.swiper-box', {
    direction: 'vertical', // 垂直切换选项
    mousewheel: true,
    observer: true,
    observeParents: true,
    // 断点设定
    // breakpoints: {
    //   320: {
    //     //当屏幕宽度大于等于320 取消分页器 可以自由滑动
    //     freeMode: true,
    //   },
    //   768: {
    //     //当屏幕宽度大于等于768
    //     freeMode: true,
    //   },
    //   1280: {
    //     //当屏幕宽度大于等于1280
    //     freeMode: false,
    //     // 分页器
    //     pagination: {
    //       el: '.swiper-pagination-box',
    //       clickable: true, // 点击分页器进行切换
    //     },
    //   },
    // },
    hashNavigation: {
      watchState: true,
    },
    // 分页器
    pagination: {
      el: '.swiper-pagination-box',
      clickable: true, // 点击分页器进行切换
    },
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      },
      slideChange: function () {
        $('#nav li').removeClass('nav-li-active');
        var nav = document.getElementById('nav');
        var li = nav.getElementsByTagName('li');
        li[this.activeIndex].className = 'nav-li-active';
      },
    },
  });
  // 首页swiper
  var swiperHome = new Swiper('.swiper-home', {
    loop: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination-home',
      clickable: true, // 点击分页器进行切换
    },
    nested: true,
    observer: true,
    observeParents: true,
    followFinger: false,
    speed: 400,
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
        slide = this.slides.eq(0);
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      },
      transitionStart: function () {
        document.getElementById('line').classList.remove('line-active');
        for (i = 0; i < this.slides.length; i++) {
          slide = this.slides.eq(i);
          slide.addClass('ani-slide');
        }
      },
      transitionEnd: function () {
        document.getElementById('line').classList.add('line-active');
        slide = this.slides.eq(this.activeIndex);
        slide.removeClass('ani-slide');
      },
    },
  });
  // 服务范围swiper
  var swiperServe = new Swiper('.swiper-serve', {
    nested: true,
    observer: true,
    observeParents: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-services',
      prevEl: '.swiper-button-prev-services',
    },
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
        slide = this.slides.eq(0);
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      },
      transitionStart: function () {
        for (i = 0; i < this.slides.length; i++) {
          slide = this.slides.eq(i);
          slide.addClass('ani-slide');
        }
      },
      transitionEnd: function () {
        slide = this.slides.eq(this.activeIndex);
        slide.removeClass('ani-slide');
      },
    },
  });
  // 公司简介swiper
  var swiperAbout = new Swiper('.swiper-about', {
    nested: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 500,
    spaceBetween: 30,
    loop: true,
    observer: true,
    observeParents: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-about',
      prevEl: '.swiper-button-prev-about',
    },
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      },
    },
  });
  // 成功案例swiper
  var swiperCase = new Swiper('.swiper-case', {
    nested: true,
    observer: true,
    observeParents: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-case',
      prevEl: '.swiper-button-prev-case',
    },
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
        slide = this.slides.eq(0);
        slide.addClass('ani-slide');
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      },
      transitionStart: function () {
        for (i = 0; i < this.slides.length; i++) {
          slide = this.slides.eq(i);
          slide.removeClass('ani-slide');
        }
      },
      transitionEnd: function () {
        slide = this.slides.eq(this.activeIndex);
        slide.addClass('ani-slide');
      },
    },
  });
};
