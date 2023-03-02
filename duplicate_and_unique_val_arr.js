 let number = [1,2,4,5,2,4,5,1,2];
  
//For Duplicate
  let duplicate_number = number.filter((val,i,a) => a.indexOf(val) !== i);
  let unique = duplicate_number.filter((val,i,a) => a.indexOf(val) === i);

  // Printing the duplicate value
  console.log(unique);


//For Unique val and remove duplicate value
  let unique = number.filter((val,i,a) => a.indexOf(val) === i);
console.log(unique);
