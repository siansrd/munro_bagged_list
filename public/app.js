var app = function(){

  var url = "https://munroapi.herokuapp.com/api/munros"
  var ajaj = new AjajHandler()
  ajaj.getData(url, function(munros){

    var baggedList = new BaggedList(munros)
    
    var dropDown = new MunrosSelector(baggedList)
    dropDown.populate(munros)

    


  })



}

window.onload = app;