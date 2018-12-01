angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('Event', [function(){
    var Venues = [
        {
          "VenueID": "POD",
          "VenueName": "Podium, Level 6",
          "Latitude": 22.340778,
          "Longitude": 114.179943,
          "CampusID": "HSH",
          "id": 1,
        },
        {
          "VenueID": "SWT501",
          "VenueName": "Shaw Tower 501",
          "Latitude": 22.338867,
          "Longitude": 114.181909,
          "CampusID": "SHAW",
          "id": 2,
        },
    ];
      this.getAllVenues = function(){
          return Venues;
      }
      this.getVenueByID = function(id){
        return Venues[id - 1];
    }
}]);