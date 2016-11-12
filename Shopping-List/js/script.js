$(document).ready(function(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
      var inputfield = $('#entry').val();
      console.log(inputfield);
      $('.shopping-list').append('<li>  <span class="shopping-item">'+ inputfield + '</span>'
     + '<div class="shopping-item-controls">'
    + '<button class="shopping-item-toggle"><span class="button-label">check</span></button>'
     + '<button class="shopping-item-delete"><span class="button-label">delete</span></button>'
     + '</div></li>');
      // This is incorrect, and adds an outside empty box. $('.shopping-list').append('<div class="shopping-item-controls"> <button class="shopping-item-toggle">' + '</button> </div>');
    //$('inputfield').appendTo('body').addClass('.shopping-item'); 
  });  


  $('.shopping-item-toggle').on("click", function() {
$(this).closest('span','.shopping-item').toggleClass('shopping-item__checked');
  });


 $('.shopping-item-delete').mousedown(function(event) {
      var inputfield = $('#entry').val();
      event.preventDefault();
$(this).parent('div').parent('li').remove();
});
 });
