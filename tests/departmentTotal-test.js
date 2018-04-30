describe('the function should return the total sales for all departments', function(){
it('the function should return the total sales for all departments', function(){
 var total =[
   {"name" : "Bakery","total" : 7801},
   {"name":"Butchery","total":6001},
   {"name":"Butchery","total":1},
 ]

 assert.deepEqual(grandTotal(total),13803)
});

it('the function should return the total sales for all departments', function(){
 var total =[
   {"name" : "Bakery","total" : 7801},
   {"name":"Butchery","total":6001},
   {"name":"Butchery","total":10},
 ]

 assert.deepEqual(grandTotal(total),13812)
});

})
