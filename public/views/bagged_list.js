var BaggedList = function(munros) {
  this.munros = munros
  this.list = document.querySelector('#bagged-list')
}

BaggedList.prototype = {

  addBagged: function(index) {
    var munro = document.createElement('li')
    munro.innerText = this.munros[index].name
    this.list.appendChild(munro)
  }

}