var MunrosSelector = function(baggedList) {
  this.dropDown = document.querySelector('#munros-selector')
  this.dropDown.addEventListener('change', function(){
    baggedList.addBagged(this.dropDown.value)
  }.bind(this))
}

MunrosSelector.prototype = {

  populate: function(munros) {
    munros.forEach(function(munro, index){
      var option = document.createElement('option')
      option.value = index
      option.text = munro.name
      this.dropDown.appendChild(option)
    }.bind(this))
  }

}