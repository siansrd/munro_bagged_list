var AjajHandler = function() {

}

AjajHandler.prototype = {

  getData: function(url, onComplete) {
    var request = new XMLHttpRequest();
    request.open('GET', url)
    request.onload = function() {
      if (request.status === 200) {
        var jsonString = request.response
        var data = JSON.parse(jsonString)
        onComplete(data)
      }
    }
    request.send()
  }
}