"use strict";

//Question 1
//Part 1
for(let i = 1; i <= 200; i++){

  if (i % 6 === 0){

    console.log(`TIIDELAB`);

  }else if(i % 8 === 0 && i % 6 !== 0){

    console.log(`ShamsTIIDELAB`);

  }else{
    console.log(`${i}`);
  }
}

//Part 2 (Futher Modification)

for(let i = 1; i <= 200; i++){

  if(i % 8 === 0 && i % 6 === 0){

    console.log(`ShamsTIIDELAB`);

  } else if (i % 6 === 0){

    console.log(`TIIDELAB`);

  }
  else{
    console.log(`${i}`);
  }
  
}