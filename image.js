
$(function ready () {
                $('.question-defalut').click(function () {
                   var $answer= $(this).find('.pane-li');
                   if ($answer.hasClass('open')) {
                      $answer.removeClass('open');
                      $answer.slideUp();
                   }else
                   {
                     $answer.addClass('open');
                     $answer.slideDown();
                   }
                });

                var appear = false;
                var pagetop = $('#page-top');
                $(window).scroll(function (){
                  if ($(this).scrollTop() > 100) {
                    if (appear == false) {
                        appear == true;
                        pagetop.stop().animate({
                          'bottom': '50px'
                        }, 300);}
                    }else{
                           if(appear) {
                                appear = false;
                                pagetop.stop().animate({
                                  'bottom': '-50px'
                                }, 300);
                           }
                    }
                });
                pagetop.click( function(){
                  $('body , html').animate({scrollTop: 0 }, 500);
                  return false;
                });



              });
