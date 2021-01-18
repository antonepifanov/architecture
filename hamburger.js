(function($) { 
  $(function() { 
    $('.header__nav-toggle').click(function() {
      $('.nav-list').slideToggle({
        start: function(){
          jQuery(this).css('display','flex');}
        })
      });
      $('.header__nav-toggle').on('click', function() {
       this.classList.toggle('active');
    });
  }); 
})(jQuery);

