let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax_title');

const scrollInProgress = () => {
	didScroll = true
}

const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX(-"+ window.scrollY / 10 + "%)"
		})
		didScroll = false;
	}
	requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)





// Hyundai N at the Nürburgring 24 Hours 스와이퍼

var swiper = new Swiper('.blog_slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog_slider_pagination',
    clickable: true,
  }
});
