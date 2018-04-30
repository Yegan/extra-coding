function mostProfitableDepartment(data){
  var mostProfitDep = 0;
  var departmentList = [];
  var profit ="";

  for(var i = 0; i<data.length;i++){
  var dataSet = data[i];
  if (departmentList[dataSet.name]=== undefined){
  	  departmentList[dataSet.name]=0;
  }
    departmentList[dataSet.name]+= dataSet.total
  }

  for (var key in departmentList){
  if(departmentList[key]> mostProfitDep){
  mostProfitDep= departmentList[key];
    profit = key
  }
  }

  return profit

}
