"use strict";

//Question 2

let gridFunc = function(width, height){

let string = " ";
let check = true;

for(let i = 1; i <= height; i++){

  for(let i = 1; i <= width; i++){
    if(check == true){
        string = string + "#";
        check = false;
    }else{
       string = string + " ";
      check = true;
    }
  }
  console.log(string);
  string = "";
}
}

alert(`Welcome to Chidi's Grid System`);
let width = prompt(`Please enter the width:`);
let height = prompt(`Please enter the height:`);

gridFunc(width, height);