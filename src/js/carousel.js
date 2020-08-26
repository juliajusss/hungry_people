import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);
export const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
