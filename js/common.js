$(function(){
     $(function(){
          $(".menu").click(function(e){
               e.preventDefault();
               $(".collapse").slideToggle();
          })
     });

     $(".viewall").click(function(){
          $(".hidden-course").fadeToggle();
     });

})