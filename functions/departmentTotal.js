function grandTotal(departmentObjects){
var departments = 0;

  for(var i =0; i<departmentObjects.length;i++){
     departments += departmentObjects[i].total;
  }

  for(var key in departmentObjects){
    if (departmentObjects[key]> departments){
      departments= departmentObjects[key];
      departments=key
    }
  }
  console.log(departmentObjects)
return departments;

}
