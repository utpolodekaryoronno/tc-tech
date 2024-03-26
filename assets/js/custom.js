$(document).ready(function(){
    // Mobile Menu Icon
   $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.header_left .menu ul').slideToggle();
   });

});


