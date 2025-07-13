// for of loop
// let str = "Hello World";
// let size = 0;
// for (let val of str) {
//     console.log("i = " ,val);
//     size++;
// }
// console.log("size of string is ", size);


//  for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue; // Skip the rest of the loop when i is 5
//     }
//     console.log("i = ", i);
// }


//______________username_________________
// let user = prompNt("enter your name");

// let username = "@" + user + user.length;
// console.log(username);


// let num = [45,45,43,64,64,76,86];

// let sum = 0;
// for (let i = 0; i<num.length; i++){
//     sum = sum + num[i];
// }

// let avg = sum / num.length;
// console.log("Average is ", avg);

// let n = prompt("enter a number");

// for (let i=1; i<=5; i++){
//     for (let j=i; j<=n; j++)
//         document.write("&nbsp &nbsp");
//     {
//         for (let k=1; k<=i; k++)
//             document.write("* ");
//         document.write("<br>");
//     }
    
// }for (let j=i; j<=n; j++)
//         document.write("*");
// {
// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let spaces = " ".repeat(rows - i);
//     let stars = "*".repeat(2 * i - 1);
//     console.log(spaces + stars);
// }}



// for ( let n=0; n<=50; n++)

// if (n % 2 === 0) {
//     document.write(n + " is even <br>");
// } else {
//     document.write(n + " is odd");
// }

// let a = [n];
// a.forEach((n) => {
//     if (n % 2 === 0) {
//         document.write(n + " is even <br>");
//     }
//     else {
//         document.write(n + " is odd <br>");
//     }
// });




// let n=50;
// let total =0;
// if (n % 2 === 0) {
//     total += n;
// }
// console.log("Total of even numbers is: " + total);
// if (n % 2 !== 0) {
//     total += n;
// }   
// console.log("Total of odd numbers is: " + total);



//         let even = 0, odd = 0, sum = 0;

//         for (let i = 1; i <= 50; i++) {
//             sum += i;

//             if (i % 2 == 0) {
//                 even++;
//                 document.write(i + " is Even<br>");
//             } else {
//                 odd++;
//                 document.write(i + " is Odd");
//             }
//         }

// document.write("Sum of all numbers: " + sum);
// document.write("\nTotal numbers: 50");
// document.write("Even numbers: " + even);
// document.write("Odd numbers: " + odd);
//    document.getElementById("ab").addEventListener('click' , abc);



// function abc() {
//     document.getElementById("ab").style.color = "red";
// }
// document.getElementById("ab").addEventListener("click", abc);

// let total = 0;
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
//     total = total + i;
// }

// console.log(total);
//__________________________________________
// let n = prompt("enter value");

// for (let i=0; i<=n; i++)
// {
//     for(let j=0; j=j+1; j++){
//         console.log("&nbps &nbps");

//     }
//     for (let k=n; k =n-1; k--)
//     {
//         console.log("*");
//     }
//     console.log("<br>")
// }

//_______________________________________________


// let number = 2
//   let n= prompt("enter your number");  

// for (i=0; i=n; i++){
//     if (n ===number) {
//     alert("Congratulations You guessed right number");
// }
// alert("Your number is incorrect");
// }

//___________________Guess Number_____________
// let number = 2;
// let attempts = 3;

// for (let i = 0; i < attempts; i++) {
//   let n = Number(prompt("Guess a number between 1 and 10"));

//   if (n === number) {
//     alert("🎉 Congratulations! You guessed the right number!");
//     break; // Stop the loop if guessed correctly
//   } else {
//     alert("❌ Incorrect guess. Try again.");
//   }

//   if (i === attempts - 1) {
//     alert("😢 Game over! The correct number was " + number);
//   }
// }


//___________________Average of marks______________

// let marks = [85,97,44,37,76,60];
// let total = 0;

// for (let mark of marks){
//   total += mark;
//   }
//   console.log(total);

// let avg = total/marks.length;
// console.log(avg);

//______________Offer ON Product____________10% Off

// let items = [250,645,300,900,50];
// for(let i = 0; i < items.length; i++){
//   let offer = items[i] / 10;
//   items[i] = items[i] - offer ;
// }

// console.log(items);

//__________Array Methods___________________

// let compny = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(compny.shift());
// // console.log(compny);

// console.log(compny.splice(1,1,"ola"));
// // console.log(compny);

// compny.push("Amazon");
// console.log(compny);

//______________________Functions_______________________

// function countVowels(str) {
//   let count =0;
//   for (const char of str){
//     if(char ==="a" || char ==="e" || char ==="i" || char==="o" || char ==="u")
//     {
//       count++;
//     }
//   }
//   return count;
// }



// let countV =(str) =>{
//   let count =0;
//   for (const char of str){
//     if(char ==="a" || char ==="e" || char ==="i" || char==="o" || char ==="u")
//     {
//       count++;
//     }
//   }
//   return count;

// }

// let n =prompt("enter the number");
// // n=0;2222
// console.log(n*n);

// let nums = [1,3,2,4];

// nums.forEach((num) => {
//   console.log(num * num);
// });

let numbers = [23,34,53];

numbers.forEach((val)=>{
  console.log(val*val);
});