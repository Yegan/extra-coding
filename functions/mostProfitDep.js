function mostProfitable(departmentObjects){
// console.log(departmentObjects)
  var mostSales = 0;
  var departmentList = {};
  var profitDep = "";

    for(var i = 0; i<departmentObjects.length; i++){
        var totalOne = departmentObjects[i];
        if(departmentList[totalOne.name]=== undefined){
          departmentList[totalOne.name]=0;
        }
      departmentList[totalOne.name] += totalOne.total
  }

  for(var key in departmentList){
  //  console.log(key)
  if(departmentList[key]>mostSales){

  mostSales=departmentList[key];
    profitDep = key;

  }
  }
  return profitDep

}
