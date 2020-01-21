$('.carousel').carousel({
    interval: 4000,
    pause: false, //ketika di kursor di atas, bisa hover atau false
    wrap: false, //looping kembali ke awal
    touch: true
})

$(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    // console.log(elemenTujuan.offset().top);
    // console.log($('html, body').scrollTop())

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'swing');

    e.preventDefault();
});