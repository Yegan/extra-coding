describe("The function takes in a list of objects and returns the most profitable day",function(){
  it("The function must return the day that is most profitable", function(){
    var data =[
{name : "Bakery", total : 7801,day : "Monday"},
{name : "Butchery",total : 4426, day : "Wednesday"},
{name : "Bakery",total : 9976, day : "Tuesday"},
{name : "Pharmacy",total : 5648, day : "Friday",}
];

assert.deepEqual(mostProfitableDay(data), "Tuesday")

});

it("The function must return the day that is most profitable", function(){
  var data =[
{name : "Bakery", total : 7801,day : "Monday"},
{name : "Butchery",total : 14426, day : "Wednesday"},
{name : "Bakery",total : 9976, day : "Tuesday"},
{name : "Pharmacy",total : 5648, day : "Friday",}
];

assert.deepEqual(mostProfitableDay(data), "Wednesday")

});
})
