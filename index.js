/*let pi = 3.14;
let radius;
let circumference;
 
 document.getElementById('mySubmit').onclick = function(){
   radius = document.getElementById('myText').value;
   radius = Number(radius);
   circumference = 2 * pi * radius;
   document.getElementById("myH3").textContent = circumference + "cm";   
 }*/

/* const decreaseBtn = document.getElementById("decreaseBtn");
 const increaseaBtn = document.getElementById("increaseBtn");
 const resetBtn = document.getElementById("resetBtn");
 const countlabel = document.getElementById("countlabel");
 let count = 0;
  
 increaseaBtn.onclick = function(){
   count++;
   countlabel.textContent = count;
 }
 decreaseBtn.onclick = function(){
   count--;
   countlabel.textContent = count;

 }
 resetBtn.onclick = function(){
   count = 0;
   countalabel.textContent = count;
 }*/
/*
function myFunction1(p1 = 0, p2 = 0) {
  return p1 + p2;
}
let result1 = myFunction1();
document.getElementById("demo1").textContent = result1;

function myFunction2 (x, y) {
  return x - y;
}
let result2 = myFunction2(8, 3);
document.getElementById("demo2").textContent = result2;
*/
/*function displayAlert() {
  console.log('test');
  alert('test');*/

// function myFunction (x,y) {
//   document.getElementById("p1").value = count;
//   document.getElementById("p2").value = count;
//   document.getElementById("p3").value = count;
//    return ;
// }
// const addBtn= document.getElementById("addBtn");
// document.getElementById("p1").value;
// document.getElementById("p2").value;

// count = x + y;
// p3.textContent = ;
// var x = document.getElementById("p1");
// var y = document.getElementById("p2");
// var z = document.getElementById("p3");
// document.getElementById("addBtn").onclick = function () {
//   document.getElementById("p3").value =Number(x.value) + Number(y.value);
// }

// document.getElementById("subBtn").onclick = function () {
//   document.getElementById("p3").value = Number(x.value) - Number(y.value);
// }
// function add() {
//   z.value = Number(x.value) + Number(y.value);
// }

// function sub() {
//   z.value = Number(x.value) - Number(y.value);
// }

// document.getElementById("p2").textContent = result;
// const addButton = document.getElementById("addButton");
// addButton.onclick = function(){
//   let result = myFunction (5, 6);
//   document.getElementById("p1").textContent = result;
//   document.getElementById("p2").textContent = result;
//   document.getElementById("p3").value;
// }
/** IF STATEMENT - START */
// let i, j;
// i = 0;
// j = 1;
// if (i < j) {
//   console.log(i);
//   j--; // i = i + 1;
// } else if (i === j) {
//   console.log(j);
//   j--;
// } else {
//   console.log('test');
// }
// console.log(i);
// console.log(j);
/** IF STATEMENT - END */

/** WHILE LOOP - START */
// let i = 10;
// while (i > 5) {
//   console.log('Hellooo');
//   i--;
// }
// let ramu = 45;
// let ravi = 45;
//   if (ramu < ravi){
//     console.log ("ravi is older than ramu");
//   }
//   else if (ramu > ravi) {
//     console.log ("ramu is older than ravi");
//   }
//   else  {
//     console.log ("ramu has same age as of Ravi");
//   }
// let x = 710; 
// let total = 1000;
// let percentage = (x / total) * 100;
// //console.log (percentage);
// if (x < 0 || x > total) {
//   console.log('Invalid marks!');
// } else if (percentage > 70) {
//   console.log ("distintion");
// } else if (percentage < 35) {
//   console.log("fail");
// } else  {
//   console.log ("pass");
// }
              
  //else if (i <= j) {
    // console.log ("ramu is younger than ravi" );
  
  //else if (i >= j){
   // console.log ("ravi is younger than ramu");
  

/** WHILE LOOP - END */

/** FOR LOOP - START */
// for (let i = 1; i < 5; i++) { 
//   console.log('HELLLOOOOO');
// }

/** FOR LOOP - END */
/** SWITCH STATEMENT - START */
// const x = 10;
// const y = 20;
// switch(x >= y) {
//   case false:
//     console.log('One');
//     //break;
//   case false:
//     console.log('Two');
//      //break;
//   case true:
//     console.log('Three');
//     break;
//   case false:
//     console.log('Four');
//      break;
//   default:
//     console.log('Default');
// }
// console.log('Finished!');
// let x = -700;
// y = 600;
// percentage = (x / y)* 100;
// switch (percentage > 70 || percentage < 35 || percentage > 35) {
//   case x < 0 || x > y :
//     console.log ("invalid marks");
//     break;
//   case percentage > 70 :
//     console.log ("distention");
//   break ;
//   case percentage < 35 :
//     console.log ("fail");
//   break ;
//   case percentage > 35:
//     console.log ("pass");
//     break;
// }
   

/** SWITCH STATEMENT - END */
 /** arrays start */
   //const nums = [1, 6, 2, 9, 10, 0, -7];
    // console.log(nums[0]);
    // console.log(nums[1]);
    // console.log (nums[2]);
    // console.log (nums[3]);
    
    // while(i < count) {
    //   console.log(persons[i]);
    //   i++;
    // }
    // let count = nums.length;
    //     for (i = 0; i < count;i++ ){
    //       if ((nums[i] % 2 ) != 0 && nums[i] > 0)  {
    //       console.log(nums[i]);
    //       }
    // }
        //  for (let i = nums.length - 1; i >= 0; i--) {
        //    console.log(nums[i]);
        //  }
           
    // if (nums[0] > 5) {
    //   console.log(nums[0]);
    // }
    // if (nums[1] > 5) {
    //   console.log(nums[1]);
    // }
    // if (nums[2] > 5) {
    //   console.log(nums[2]);
    // }

 /** arrays end */
      const n =5;
       for (let i = 1; i <= n; i++ ){
         for (let j = 1; j<=i; j++){
            document.write('*');
        }
          document.write('<br />');
        }
  //  const n = 5 ;
  //    for (let i = 1; i <= 5; i++) {
  //      str = "*"
  //      console.log (str );
  //    }