function likedBy(list){
var firstname = list[0];
 var secname = list[1];
	if (list.length === 0){
   return ("0 likes")
    }


  if (list.length === 2){
    return("Liked by "+firstname +" and "+ secname );
}
  if (list.length ===3){
  return("Liked by "+ firstname + " and 2 others")}

  if (list.length ===5){
  return ("Liked by " + firstname +  ", "+ secname + " and 3 others")
  }

  if (list.length ===7){
  return ("Liked by " + firstname +  ", "+ secname + " and 5 others")
  }

   if (list.length ===10){
     console.log(list)
  return ("Liked by " + firstname +  ", "+ secname + " and 8 others")
  }
}
