describe("the function should count the user social media likes", function(){
  it("the function should return the user social media likes", function(){
    assert.equal(likedBy(['Yegan','Andrew']),"Liked by Yegan and Andrew")
  });
  it("the function should return the user social media likes", function(){
    assert.equal(likedBy(['Yegan','Andrew', 'Anele']),"Liked by Yegan and 2 others")
  });
})
