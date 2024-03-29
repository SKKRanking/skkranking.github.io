let url = "https://skk-ranking.herokuapp.com/getRankingData";

let climbers = [];

$(document).ready(() => {
  $.getJSON(url, function(data) {
    
    for(let climber of data) {
      let name = climber.Name;
      let flashes = climber.Flashes;
      let firstAscents = climber.FirstAscents;
      let sendsList = climber.Sends;
      
      let totalPoints = 25*firstAscents + 50*flashes;
      
      sendsList.forEach((value, i) => {
        totalPoints += 20 * Math.pow(1.258498,i) * value;
      });
      
      climbers.push({"first": name.split(" ")[0], "second": name.split(" ")[1], "points": Math.round(totalPoints)});
    }
    
    climbers.sort((climber1, climber2) => {
      return climber1.points - climber2.points;
    })
    
    let climberIndex = 1;
    for(let climber of climbers.reverse()) {
      $("tbody").append('<tr><th scope="row">' + climberIndex.toString() + '</th><td>' + climber.first + '</td><td>' + climber.second + '</td><td>' + climber.points + '</td></tr>');
      
      climberIndex++;
    }
  });
})
