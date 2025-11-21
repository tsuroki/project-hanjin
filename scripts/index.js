const bnrSwiper = new Swiper ('.main-bnr', {
    loop : true,
    autoplay : {
        delay : 5000,
    },
    pagination : {
        el: '.bnr-nav',
        type : 'fraction',
    },
    navigation : {
        prevEl : '.bnr-prev',
        nextEl : '.bnr-next',
    }
})