/**
 * Home hero carousel – bundles Swiper, no external CDN dependency.
 * CSS loaded separately via link in head for non-blocking delivery.
 */
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.home-hero-swiper', {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
  });
});
