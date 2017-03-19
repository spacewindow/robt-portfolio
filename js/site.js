var lastScroll = 0;

var scrollDirection = function(element){
  if(element.scrollTop > lastScroll){
    lastScroll = element.scrollTop;
    return 'down';
  }else{
    lastScroll = element.scrollTop;
    return 'up';
  }
};

// unless all elements are loaded, which determine the scroll distances, they will be log incorrectly and scrollTriggers will not work
$(window).on('load',function(){

  // Note - jQuery returns a nodeList, not an array. Must be converted.
  var imageSections = Array.from(document.querySelectorAll('#work__images > *'));
  imageSections.forEach(function(element, index){
    element.triggerUp = element.offsetTop + 30;
    element.triggerDown = element.offsetTop - 30;
  });

  $('.work').scroll(function() {
    var scrollPosition = this.scrollTop;
    console.log(scrollPosition);
  });

});
