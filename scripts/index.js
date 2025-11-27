const topNoticeSwiper = new Swiper ('.notice-swiper', {
    loop : true,
    autoplay : {
        delay : 5000,
    },
    spaceBetween : 10,
    direction : 'vertical',
    slidesPerView : 1,
    draggable : false,
})

const bnrSwiper = new Swiper ('.main-bnr', {
    loop : true,
    autoplay : false,
    pagination : {
        el: '.bnr-nav',
        type : 'fraction',
    },
    navigation : {
        prevEl : '.bnr-prev',
        nextEl : '.bnr-next',
    },
    768: {
    slidesPerView: 1,
    spaceBetween: 20
    },
})

const specialSwiper = new Swiper ('.special-swiper', {
    loop : false,
    autoplay : false,
    pagination : {
        el: '.special-bar',
        type : 'progressbar',
    },
    navigation : {
        prevEl : '.special-prev',
        nextEl : '.special-next',
    },
    768: {
    slidesPerView: 1,
    spaceBetween: 0,
    },
})

const themeSwiper = new Swiper ('.theme-swiper', {
    loop : false,
    autoplay : false,
    pagination : {
        el: '.theme-bar',
        type : 'progressbar',
    },
    navigation : {
        prevEl : '.theme-prev',
        nextEl : '.theme-next',
    },
    768: {
    slidesPerView: 1,
    spaceBetween: 0,
    },
})

const bizSwiper = new Swiper ('.bizpack-swiper', {
    loop : false,
    autoplay : false,
    pagination : {
        el: '.bizpack-bar',
        type : 'progressbar',
    },
    navigation : {
        prevEl : '.bizpack-prev',
        nextEl : '.bizpack-next',
    }
})

const vacaSwiper = new Swiper ('.vacation-swiper', {
    loop : false,
    autoplay : false,
    pagination : {
        el: '.vacation-bar',
        type : 'progressbar',
    },
    navigation : {
        prevEl : '.vacation-prev',
        nextEl : '.vacation-next',
    },
    768: {
    slidesPerView: 1,
    spaceBetween: 0,
    },
})

const searchIcon = document.querySelector('.search')

searchIcon.addEventListener('click',(e)=>{
    e.preventDefault()
})

const myPage = document.querySelector('.mypage')

myPage.addEventListener('click',(e)=>{
    e.preventDefault()
})

const coupon = document.querySelector('.coupon')

coupon.addEventListener('click',(e)=>{
    e.preventDefault()
})

const gnbList = document.querySelectorAll('.gnb > li')

for(let i of gnbList){
    i.addEventListener('click', (e) => {
        e.preventDefault()
    })
}

const themeList = document.querySelectorAll('.lnb-list > li')

for(let i of themeList){
    i.addEventListener('click', (e) => {
        e.preventDefault()
    })
}