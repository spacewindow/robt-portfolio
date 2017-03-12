// var options = {
// useEasing : false,
// useGrouping : true,
// separator : ',',
// decimal : '.'
// }
// var amount = $('#countup').text();
// amount = parseInt(amount);
// var numAnim = new countUp("countup", 0, amount, 0, 3, options);
// numAnim.start();


// $(window).scroll(function() {
//    var hT = $('#scroll-to').offset().top,
//        hH = $('#scroll-to').outerHeight(),
//        wH = $(window).height(),
//        wS = $(this).scrollTop();
//    if (wS > (hT+hH-wH)){
//        console.log('H1 on the view!');
//    }
// });

var docHeight = $(document).height();
var scrollPercent;

$(document).scroll(function(e){
  e.preventDefault();
  $('.scrolltest').scrollTop($(this).scrollTop());
});
