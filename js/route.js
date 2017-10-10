function Route () {
  this._stations = []
}

Route.prototype = {
  addStation: function (station) {
    this._stations.push(station) // this push method pushes the station into the array in the constructor
  },
  getStations: function() {
    return this._stations
  }
}