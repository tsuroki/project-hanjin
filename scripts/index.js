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
    slidesPerView: 2.1,
    slidesPerGroup : 2,
    spaceBetween: 0,
    loop : false,
    autoplay : false,
    breakpoints : {
        // 768px '이상'일 때 적용될 설정
        768: {
            slidesPerView: 4, // 데스크톱 설정
            slidesPerGroup : 4,
            centeredSlides: false, // 필요에 따라 변경
            spaceBetween: 0, // 필요에 따라 변경
        },
    },
    pagination : {
        el: '.special-bar',
        type : 'progressbar',
    },
    navigation : {
        prevEl : '.special-prev',
        nextEl : '.special-next',
    },
})

const themeSwiper = new Swiper ('.theme-swiper', {
    slidesPerView: 2.1,
    slidesPerGroup : 2,
    spaceBetween: 0,
    loop : false,
    autoplay : false,
    breakpoints : {
        // 768px '이상'일 때 적용될 설정
        768: {
            slidesPerView: 4, // 데스크톱 설정
            slidesPerGroup : 4,
            centeredSlides: false, // 필요에 따라 변경
            spaceBetween: 0, // 필요에 따라 변경
        },
    },
    pagination : {
        el: '.theme-bar',
        type : 'progressbar',
    },
    navigation : {
        prevEl : '.theme-prev',
        nextEl : '.theme-next',
    },
})

const vacaSwiper = new Swiper ('.vacation-swiper', {
    slidesPerView: 2.1,
    slidesPerGroup : 2,
    spaceBetween: 0,
    loop : false,
    autoplay : false,
    breakpoints : {
        // 768px '이상'일 때 적용될 설정
        768: {
            slidesPerView: 4, // 데스크톱 설정
            slidesPerGroup : 4,
            centeredSlides: false, // 필요에 따라 변경
            spaceBetween: 0, // 필요에 따라 변경
        },
    },
    pagination : {
        el: '.vacation-bar',
        type : 'progressbar',
    },
    navigation : {
        prevEl : '.vacation-prev',
        nextEl : '.vacation-next',
    },
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