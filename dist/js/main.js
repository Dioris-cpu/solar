$(document).ready(function() {
    $(function () {
        const $gallery = $(".gallery a").simpleLightbox();
      });

      $(function(){
          $('.toggle').click(function(){
            $('.sidebar-contact').toggleClass('active');
            $('.toggle').toggleClass('active')
          })
          
      })
})
