$(function () {
    //jQery준비
    $('#menu_bg_wrap .menu_bg, #header_wrap #header_left > ul > li > ul').hide();

    $('#header_left > ul > li, #menu_bg_wrap .menu_bg').mouseenter(function () {
        $('#menu_bg_wrap .menu_bg, #header_wrap #header_left > ul > li > ul').stop().slideDown(300);
    }).mouseleave(function () {
        $('#menu_bg_wrap .menu_bg, #header_wrap #header_left > ul > li > ul').stop().slideUp(300);
    });



    //모바일 네비게이션 바 복제
    var naviClon = $('#header_left').contents().clone();
    var navi_list = $('<div id="sm_menu"></div>');
    var search = $('#header_right').contents().clone();
    navi_list.append(search);
    navi_list.append(naviClon);
    navi_list.appendTo('#mb_navi');




    $('#m_menu').click(function () {
        $('#mb_navi').toggleClass('open');
        if ($('#mb_navi').hasClass('open')) { //열린상
            $('#mb_navi').stop(true).animate({
                right: 0
            }, 500);
            $('body').css('overflow', 'hidden');

        } else { //닫힌상태
            $('#mb_navi').stop(true).animate({
                right: '-100%'
            }, 500);
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('body').css('overflow', 'scroll');
        }
        $(this).toggleClass('cross');
    });



    /*모바일 각 메뉴 클릭시 서브메뉴 펼침*/
    $('#sm_menu > ul > li > a').click(function () {
        $(this).toggleClass('selected');
        $('#sm_menu > ul > li > a ').not(this).removeClass('selected');
        $(this).find('+ul').slideToggle('fast');
        $('#sm_menu > ul > li > a').not(this).find('+ul').slideUp('fast');

    });

    /*pc화면 사이즈에서 모바일 메뉴 사라지고 초기화기*/
    $(window).resize(function () {
        if ($(this).width() > 748) {
            $('#mb_navi').css('right', '-100%');
            $('#sm_menu > ul > li > .menu_sec').hide();
            $('#sm_menu > ul > li > a').removeClass('selected');
            $('#mb_navi').removeClass('open');
            $('#m_menu').removeClass('cross');
            $('#m_menu > a').find('img').attr('src', 'img/main/main_mobile1.png');
            $('body').css('overflow', 'scroll');
        };
    });

    /*slide*/
    var swiper = new Swiper('.swiper-container1', {
        slidesPerView: 1, //보여지는 슬라이드 개수
        spaceBetween: 0, //슬라이드 사이 공간
        loop: true, // 반복 슬라이드
        keyboard: {
            enabled: true, //키보드 제어
        },
        autoplay: {
            delay: 8000, // 8초마다 슬라이드
            disableOnInteraction: true, //버튼 제어시 멈춤
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, //블릿버튼 제어
        },
        navigation: { //이전다음버튼 제어
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

}); //jQery 종료