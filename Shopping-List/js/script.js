$(document).ready(function(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
      var inputfield = $('#entry').val();
      console.log(inputfield);
      $('.shopping-list').append('<li>  <span class="shopping-item">'+ inputfield + '</span></li>');
      // This is incorrect, and adds an outside empty box. $('.shopping-list').append('<div class="shopping-item-controls"> <button class="shopping-item-toggle">' + '</button> </div>');
    //$('inputfield').appendTo('body').addClass('.shopping-item'); 
  });  
});