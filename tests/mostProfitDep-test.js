describe("The function should check for the most profitable department", function(){
  it("The function should return the most profitable department name", function(){
    var departments = [{
    name : "Cosmetics",
    total : 5601
},{
    name : "Dairy",
    total : 8609
},{
    name : "Fresh fruits",
    total : 4519
}];
    assert.deepEqual(mostProfitable(departments), "Dairy")
  });

  it("The function should return the most profitable department name", function(){
    var departments = [{
    name : "Cosmetics",
    total : 15601
},{
    name : "Dairy",
    total : 8609
},{
    name : "Fresh fruits",
    total : 4519
}];
    assert.deepEqual(mostProfitable(departments),"Cosmetics")
  });
})
