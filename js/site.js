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

var imagesjq;

// unless all elements are loaded, which determine the scroll distances, they will be log incorrectly and scrollTriggers will not work
$(window).on('load',function(){



  imagesjq = $('#work__images > *');
  console.log(imagesjq);

  $.each(imagesjq, function(index, element){
    element.triggerUp = element.offsetTop + 200;
    element.triggerDown = element.offsetTop - 200;
    element.triggerDirection = 'down';
  });

  console.log(imagesjq);

  $('#work').scroll(function() {

    var main = this;
    var scrollDir = scrollDirection(this); // putting this in a variable ended up being essential. Having the function result directly in the if statement was too inefficient somehow? The if statement never evaluated.

    console.log('Scroll direction is ' + scrollDir + ' ' + this.scrollTop);

    if(scrollDir === 'down'){

      $.each(imagesjq, function(index, element){
        // console.log('checking');

        if (main.scrollTop >= this.triggerDown && this.triggerDirection === 'down'){
          console.log(main.scrollTop, 'triggerDown', this.triggerDown, 'triggerDirection', this.triggerDirection);
          var newClass = this.classList[0].split('--')[1];
          console.log('adding class: ' + newClass);
          this.triggerDirection = 'up';
          // console.log('switched ' + this.classList[0] + 'triggerDirection to ' + this.triggerDirection);
          $('#work__text').attr('class', 'work__text ' + newClass);
        }
      });

    }else if(scrollDir === 'up'){

      $.each(imagesjq, function(index, element){

        if (main.scrollTop <= this.triggerUp && this.triggerDirection === 'up'){
          console.log('triggerUp', this.triggerUp, 'triggerDirection', this.triggerDirection);
          var newClass = this.classList[0].split('--')[1];
          console.log('adding class: ' + newClass);
          this.triggerDirection = 'down';
          // console.log('switched ' + this.classList[0] + 'triggerDirection to ' + this.triggerDirection);
          $('#work__text').attr('class', 'work__text ' + newClass);
        }
      });
    }else{
      console.log('error');
    }

  });

});
