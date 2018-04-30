describe("The function takes a list of department objects and returns the most profitable department", function(){
  it("The function should take a list of department objects and return the most profitable department", function(){
    var dataset = [
{
    name : "Bakery",
    total : 7801
},{
    name : "Butchery",
    total : 4426
},{
    name : "Bakery",
    total : 9976
},{
    name : "Pharmacy",
    total : 5648
}];

assert.deepEqual(mostProfitableDepartment(dataset),"Bakery")
  })

  it("The function should take a list of department objects and return the most profitable department", function(){
    var dataset = [
{
    name : "Bakery",
    total : 7801
},{
    name : "Butchery",
    total : 4426
},{
    name : "Bakery",
    total : 9976
},{
    name : "Pharmacy",
    total : 55648
}];

assert.deepEqual(mostProfitableDepartment(dataset),"Pharmacy")
  })

})
