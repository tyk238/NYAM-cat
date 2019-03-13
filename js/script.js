function selectCard1() {
  var card = document.getElementById("card-1");
  var circle = document.getElementById("circle-1");
  var taste = document.getElementById("duck-taste");
  
  if(card.className =="container__card-disabled") 
   {
    return;
   }
  else if (card.className == "container__card" && circle.className == "container__circle")
   {
    card.className += " container__card-selected";
    circle.className += " container__circle-selected";
    taste.innerHTML = "Печень утки разварная с артишоками."
   } 
  else 
  {
    card.className = "container__card";
    circle.className = "container__circle";
    taste.innerHTML = "Чего сидишь? Порадуй кота, <a href='javascript:selectCard1()'>купи</a>";
  }
}

function selectCard2() {
  var card = document.getElementById("card-2");
  var circle = document.getElementById("circle-2");
  var taste = document.getElementById("fish-taste");

  if(card.className =="container__card-disabled") 
  {
    return;
  }
  else if (card.className == "container__card" && circle.className == "container__circle") 
  {
    card.className += " container__card-selected";
    circle.className += " container__circle-selected";
    taste.innerHTML = "Головы щучьи с чесноком да свежайшая сёмгушка."
  } 
  else 
  {
    card.className = "container__card";
    circle.className = "container__circle";
    taste.innerHTML = "Чего сидишь? Порадуй кота, <a href='javascript:selectCard2()'>купи</a>";

  }
}

function selectCard3() {
  var card = document.getElementById("card-3");
  var circle = document.getElementById("circle-3");
  var taste = document.getElementById("chicken-taste");

  if(card.className =="container__card-disabled") {
    return;
  }
  else if (card.className == "container__card" && circle.className == "container__circle") 
  {
    card.className += " container__card-selected";
    circle.className += " container__circle-selected";
    taste.innerHTML= "Филе из цыплят с трюфелями в бульоне."
  } 
  else 
  {
    card.className = "container__card";
    circle.className = "container__circle";
     taste.innerHTML = "Чего сидишь? Порадуй кота, <a href='javascript:selectCard3()'>купи</a>";

  }
}
