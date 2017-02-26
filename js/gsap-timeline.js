var leftarmTL = new TimelineMax({repeat: -1});
var ballTL = new TimelineMax({repeat: -1});
var ballBounceTL = new TimelineMax({repeat: -1, delay: 0.3,});
var rightarmTL = new TimelineMax({delay: 0.7, repeat: -1});
var topTL = new TimelineMax({repeat: -1});
var headTL = new TimelineMax({repeat: -1, delay: 0.1});
var legsTL = new TimelineMax({repeat: -1});
var flashesTL = new TimelineMax({repeat: -1});
var cameraTL = new TimelineMax({repeat: -1});

// TweenMax.set('#intro-eye-right-top', {transformOrigin: '50% 100%'});
// TweenMax.set('#intro-eye-left-top', {transformOrigin: '50% 100%'});
// TweenMax.set('#intro-eye-right-bot', {transformOrigin: '50% 0%'});
// TweenMax.set('#intro-eye-left-bot', {transformOrigin: '50% 0%'});
//
// var eyes = document.querySelectorAll("[id*='intro-eye']");

var leftArm = document.querySelector("[id='left-arm']");
var rightArm = document.querySelector("[id='right-arm']");
var ball = document.querySelector("[id='ball']");
var topHalf = document.querySelector("[id='topHalf']");
var head = document.querySelector("[id='head']");
var legs = document.querySelector("[id='legs']");

// for flashes

// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }

var flashes = document.querySelectorAll("[id*='flash']");

// flashes = shuffle(flashes);
// console.log(flashes);

TweenMax.set(leftArm, {transformOrigin: '100% 0%', rotation: '45deg'});
TweenMax.set(rightArm, {transformOrigin: '100% 0%', rotation: '-45deg'});
TweenMax.set(ball, {transformOrigin: '50% 100%'});
TweenMax.set(legs, {transformOrigin: '50% 100%'});

TweenMax.set('#dude', {scale: 1, y: 0, transformOrigin: '50% 100%'});
TweenMax.set('#floor', {transformOrigin: '50% 30%', y: 430});
TweenMax.set('#bg', {transformOrigin: '50% 50%'});

TweenMax.set(flashes, {opacity: 0});


leftarmTL
.to(leftArm, 0.2, {
    morphSVG: '#left2',
    ease: Linear.easeNone,
}, 'start')
.to(leftArm, 0.2, {
    morphSVG: '#left3',
    ease: Linear.easeNone,
})
.to(leftArm, 0.2, {
    morphSVG: '#left2',
    ease: Linear.easeNone,
})
.to(leftArm, 0.2, {
    morphSVG: '#left1',
    ease: Linear.easeNone,
})
;

rightarmTL
.to(rightArm, 0.2, {
    morphSVG: '#right2',
    ease: Linear.easeNone,
}, 'start')
.to(rightArm, 0.2, {
    morphSVG: '#right3',
    ease: Linear.easeNone,
})
.to(rightArm, 0.2, {
    morphSVG: '#right2',
    ease: Linear.easeNone,
})
.to(rightArm, 0.2, {
    morphSVG: '#right1',
    ease: Linear.easeNone,
})
;

ballTL
.to(ball, 0.2, {
    x: '-120%',
    y: '-120%',
    ease: 'easeOut'
})
.to(ball, 0.2, {
    x: '0%',
    y: '0%',
    ease: 'easeIn'
})
.to(ball, 0.2, {
    x: '120%',
    y: '-100%',
    ease: 'easeOut'
})
.to(ball, 0.2, {
    x: '0%',
    y: '0%',
    ease: 'easeIn'
}, 'ballBounce2')
;

ballBounceTL
.to(ball, 0.1, {
    scaleY: 0.7,
    ease: Linear.easeNone,
})
.to(ball, 0.1, {
    scaleY: 1,
    ease: Linear.easeNone,
})
.to(ball, 0.2, {
    scaleY: 1,
    ease: Linear.easeNone,
})
;


topTL
.set(topHalf, {
    x: '-10%',
    y:'0%',
    ease: Linear.easeNone,
})
.to(topHalf, 0.2, {
    x: '0%',
    y:'8%',
    ease: Linear.easeNone,
})
.to(topHalf, 0.2, {
    x: '10%',
    y: '0%',
    ease: Linear.easeNone,
})
.to(topHalf, 0.2, {
    x: '0%',
    y:'8%',
    ease: Linear.easeNone,
})
.to(topHalf, 0.2, {
    x: '-10%',
    y:'0%',
    ease: Linear.easeNone,
})
;

headTL
.to(head, 0.2, {
    y: '10%',
    ease: Linear.easeNone,
})
.to(head, 0.2, {
    y: '0%',
    ease: Linear.easeNone,
})
;

legsTL
.set(legs, {
  skewX: '10deg',
  scaleY: 1,
    ease: Linear.easeNone,
})
.to(legs, 0.2, {
  skewX: '0deg',
  scaleY: 0.8,
    ease: Linear.easeNone,
})
.to(legs, 0.2, {
  skewX: '-10deg',
  scaleY: 1,
    ease: Linear.easeNone,
})
.to(legs, 0.2, {
  skewX: '0deg',
  scaleY: 0.8,
    ease: Linear.easeNone,
})
.to(legs, 0.2, {
  skewX: '10deg',
  scaleY: 1,
    ease: Linear.easeNone,
})
;

CustomEase.create("onOff", "M0,0,C0,0,0.5,1,0.5,1,0.5,1,1,0,1,0");

flashesTL
.staggerTo(flashes, 0.1, {
  opacity:1,
  ease: "onOff"
}, 0.1)
;


cameraTL
.to(['#dude', '#floor'], 4, {
  scale: 1.3,
  ease: 'onOff'
}, 'startCam')
.to('#bg', 4, {
  scale: 1.1,
  ease: 'onOff'
}, 'startCam')
;
