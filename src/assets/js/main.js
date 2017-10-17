// constants
var ANIMATION_DURATION = 500;
var ANIMATION_DELAY = 50;
var ANIMATION_SCALE = 0.95;

var SECTIONS = [
  'introduction',
  'science',
  'guarantees',
  'video',
  'team',
  'team-member',
  'roadmap',
  'subscribe',
  'whitepaper',
  'footer'
];

// globals
var sr = new ScrollReveal({
  mobile: false,
  distance: '10px',
  viewFactor: 0.9,
  scale: ANIMATION_SCALE,
  duration: ANIMATION_DURATION
});

var sl = new SmoothScroll('[data-scroll]');

// elements
var goup = document.querySelector('.goup');
var header = document.querySelector('.navigation');

/**
 * @description fire when document is scrolling
 */
function onScroll() {
  var scrollTop = document.documentElement.scrollTop;
  
  if (scrollTop) {
    goup.classList.add('goup--is-visible');
    header.classList.add('navigation--is-fixed');
  } else {
    goup.classList.remove('goup--is-visible');
    header.classList.remove('navigation--is-fixed');
  }  
}

/**
 * @description reveal animation
 */
function onReveal() {
  SECTIONS.forEach(function(section) {
    sr.reveal('[data-animate-' + section + ']', {}, ANIMATION_DELAY);
  });
}

/**
 * @description when document is ready
 */
function onReady() {
  onReveal();
  document.addEventListener('scroll', onScroll);
}

// start everything
document.addEventListener('DOMContentLoaded', onReady);