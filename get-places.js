  var images = [
    "https://www.mexperience.com/wp-content/uploads/Cozumel-Beach-Resort-Aerial-NBS.jpg",
    "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2NoaWNoZW4taXR6YS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOiIxMjAwIn19fQ==",
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/50/ed.jpg",
    "https://a.cdn-hotels.com/gdcs/production40/d811/5e89ad90-8f10-11e8-b6b0-0242ac110007.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg/1024px-St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg",
    "https://italian-riviera.com/wp-content/uploads/2019/11/portofino-fb.jpg",
    "https://www.gatlinburgskylift.com/assets//images/Gatlinburg/Collage/Gatlinburg-skylift-default-COLLAGE.jpg"
  ];
  
  var placeName = [ "Cozumel", "Chichen Itza", "Turin", "Rome", "Vatican City", "Portofino", "Gatlinburg" ];
  
  var myPictures = "";
  
  function populatePlaces() {
    for(var i = 0; i < images.length; i++) {
    myPictures += `<div class="card travel-cards" style="width: 18rem;"><img src=${images[i]} class="card-img-top travel-img" alt="Picture of city ${placeName[i]}"><div class="card-body"><p class="card-text">${placeName[i]}</p></div></div>`
  };
    $("#output-places").append(myPictures);
  };
  
  $("#see-places").click(function () {
    populatePlaces();
  });