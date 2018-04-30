function mostProfitableDay(data){
var dayOf = ""
var profit = 0;
var dep = {};

  for (var i = 0; i<data.length;i++){
  var dataSet = data[i];
    if(dep[dataSet.day]===undefined){
    dep[dataSet.day]=0;
    }
  dep[dataSet.day] +=dataSet.total
  }
  for (var key in dep){
  if(dep[key]>profit){
  profit = dep[key];
    dayOf = key
  }
  }

 return dayOf
}
