var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendSomeoneAwesome);

function appendSomeoneAwesome() {
  var name = $('.name').val();

  cardContainer.append(`
    <p class="name-card"><input type="checkbox" class= "checkbox"> • Dude,remember to ${name}!</p>
  `);

  $('.name').val("");
  var checkbox= $('.checkbox');
  checkbox.on("click",remove);
}

function remove(){
  event.target.parentNode.remove();
}
