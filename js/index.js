// 測高
$(window).scroll(function () {
    console.log($(this).scrollTop());
});

// 點與點連結滑動效果
let window_w = $(window).width();

if ($(window).width() > '960') {
    // console.log('hi');
    $('.top').on('click', function () {
        $('html,body').animate({ scrollTop: $('#home').offset().top - 100 }, 800)
    });

    $('.tohome').on('click', function () {
        $('html,body').animate({ scrollTop: $('#home').offset().top - 100 }, 800)
    });

    $('.toabout').on('click', function () {
        $('html,body').animate({ scrollTop: $('#about').offset().top - 100 }, 800)
    });

    $('.toillu').on('click', function () {
        $('html,body').animate({ scrollTop: $('#illustration').offset().top - 100 }, 800)
    });

    $('.toprint').on('click', function () {
        $('html,body').animate({ scrollTop: $('#print').offset().top - 100 }, 800)
    });

    $('.tovi').on('click', function () {
        $('html,body').animate({ scrollTop: $('#visualDesign').offset().top - 100 }, 800)
    });

    $('.tophoto').on('click', function () {
        $('html,body').animate({ scrollTop: $('#photography').offset().top - 100 }, 800)
    });

    $('.tocontact').on('click', function () {
        $('html,body').animate({ scrollTop: $('#contact').offset().top }, 800)
    });

}

// nav收合x
if ($(window).width() < '960') {

    $('.top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 800);
    });

    $('.tohome').on('click', function () {
        $('.navbar-toggler').click();
        $('html,body').animate({ scrollTop: $('#home').offset().top }, 800);
    });

    $('.toabout').on('click', function () {
        $('.navbar-toggler').click();
        $('html,body').animate({ scrollTop: $('#about').offset().top }, 800);
    });

    $('.toillu').on('click', function () {
        $('.navbar-toggler').click();
        $('html,body').animate({ scrollTop: $('#illustration').offset().top - 20 }, 800);
    });

    $('.toprint').on('click', function () {
        $('.navbar-toggler').click();
        $('html,body').animate({ scrollTop: $('#print').offset().top - 20 }, 800);
    });

    $('.tovi').on('click', function () {
        $('.navbar-toggler').click();
        $('html,body').animate({ scrollTop: $('#visual').offset().top - 60 }, 800);
    });

    $('.tophoto').on('click', function () {
        $('.navbar-toggler').click();
        $('html,body').animate({ scrollTop: $('#photography').offset().top - 50 }, 800);
    });

    $('.tocontact').on('click', function () {
        $('.navbar-toggler').click();
        $('html,body').animate({ scrollTop: $('#contact').offset().top }, 800);
    });
}

// logo點擊滑動效果
$('.yj_logo').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 800);
});

// scroll mouse 點擊滑動效果

$('.mouse_wrap').on('click', function () {
    // console.log('hi');
    $('html,body').animate({ scrollTop: $('#about').offset().top - 10 }, 800);

    $('.mouse_path').css('fill', '#8d9ba7');
});

// scroll mouse hover效果 

$('#icon-mouse-scroll').on('mouseover', function () {
    $('.mouse_path').css('fill', '#DAB49D')
        .css('transition-duration', '.5s');
});

$('#icon-mouse-scroll').on('mouseout', function () {
    $('.mouse_path').css('fill', '#8d9ba7')
        .css('transition-duration', '.5s');
});

// heart hover效果
$('.heart').on('mouseover', function () {
    $('.heart_path').css('fill', '#895737')
        .css('transition-duration', '.5s');
});

$('.heart').on('mouseout', function () {
    $('.heart_path').css('fill', '#DAB49D')
        .css('transition-duration', '.5s');
});

//contact icon RWD 
if ($(window).width() > '960') {
    $('.contact_way').css('justify-content', 'flex-end');
}

if ($(window).width() < '960') {
    $('.contact_way').css('justify-content', 'center');
}

//btn mouseove/mouseout
$('.btnbtn').on('mouseover', function () {
    $(this).addClass('border-color', '#b4c1ca');
    $(this).addClass('color', '#b4c1ca');
});
$('.btnbtn').on('mouseout', function () {
    $(this).addClass('border-color', '#DAB49D');
    $(this).addClass('color', '#DAB49D');
});

//contact send 
// if ($('.btnbtn_s').click()){

$('.btnbtn_s').on('click', function () {
    $(this).addClass('send_active');

    $(this).text('');
    $('.btnbtn_s').css('width', '45px');

    $('.btnbtn_s').css('border-color', '#b4c1ca #b4c1ca #b4c1ca #fff');

    setTimeout(function () {
        $('.btnbtn_s').addClass('send_success');
        $('.btnbtn_s').css('border-color', '#b4c1ca');
    }, 1800);

    setTimeout(function () {
        $('.btnbtn_s').removeClass('send_success');
        $('.btnbtn_s').removeClass('send_active');

        $('.btn_send').text('SEND');

        $('.btnbtn_s').css('width', '80px');
        $('.btn_send').css('border-left-color', '#DAB49D');

        $('.btnbtn_s').css('border-color', '#DAB49D');

        $('.btnbtn').css('color', '#DAB49D');

    }, 5000);

});
// }

// 小圖滾動
$('.sliderDots li').mouseover(function () {
    $(this).css('border', '3px solid #b4c1ca').css('background', '#fff').siblings().css('border', 'none').css('background', 'none');
})
$('.sliderDots li').mouseout(function () {
    $(this).css('border', 'none').css('background', '#fff').siblings().css('border', 'none').css('background', 'none');
})

$('.next').on('click', function () {
    $('.scrollmenu').animate({ scrollLeft: +2000 }, 1200);
});
$('.prev').on('click', function () {
    $('.scrollmenu').animate({ scrollLeft: -2000 }, 1200);
});




// #b4c1ca 藍
// #F3E9DC bgc粉 #fff
// #dab49d7a box-shadow
// #DAB49D title 深粉
// #533523 logo