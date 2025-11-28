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
    autoplay : {
        delay : 6000,
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
    breakpoints : {
        768: {
        spaceBetween : -25,
        slidesPerView: 1,
        spaceBetween: 0,
        },
    }
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
    breakpoints : {
        768: {
        spaceBetween : -25,
        slidesPerView: 1,
        spaceBetween: 0,
        },
    }
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
    },
    breakpoints : {
        768: {
        spaceBetween : -25,
        slidesPerView: 1,
        spaceBetween: 0,
        },
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
    breakpoints : {
        768: {
        spaceBetween : -25,
        slidesPerView: 1,
        spaceBetween: 0,
        },
    }
})

const beneSwiper = new Swiper ('.benefit-swiper', {
    slidesPerView: 2.3,
    spaceBetween: 0,
    loop : true,
    autoplay : false,
    
    breakpoints : {
        // 768px '이상'일 때 적용될 설정
        768: {
            slidesPerView: 4, // 데스크톱 설정
            centeredSlides: false, // 필요에 따라 변경
            spaceBetween: 0, // 필요에 따라 변경
        },
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

const famsite = document.querySelector('#family-site')
const famlist = document.querySelector('.site-list')
famsite.addEventListener('click', (e) => {
    e.preventDefault()
    famlist.style.display = "block"
})
famlist.addEventListener('mouseleave', () => {
    famlist.style.display = "none"
})

const lanBox = document.querySelector('#language')
const lanList = document.querySelector('.lan-list')
lanBox.addEventListener('click', (e) => {
    e.preventDefault()
    lanList.style.display = "block"
})
lanList.addEventListener('mouseleave', () => {
    lanList.style.display = "none"
})