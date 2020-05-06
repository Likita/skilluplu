$(document).ready(function() {
  $('.btn').click(function() {
    $(this).toggleClass('myActive');
  });
  // console.log()
});

window.addEventListener('resize', function(){
  console.log($(document).width());
});
