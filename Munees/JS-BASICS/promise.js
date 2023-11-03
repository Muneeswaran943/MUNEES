// let myPromise = new Promise((myResolve,myReject)=>{
//     myReject();
// })

const { prototype } = require("events");


// myPromise.then(()=>{
//     console.log('Success');
// }).catch(()=>{
//     console.log('Failed')
// })



// let numbers = [30, 60, 190];
// console.log(numbers.length)

// prototype array
        

// function isGreaterThan5(element,index,array) {
//     return element < 5;
// }

// function func() {
//     let array = [2, 5, 8, 1, 4];
//     let value = array.some(isGreaterThan5);
//     console.log(value);

// }
// func();
 let myPromise =new Promise((myResolve,myReject)=>{
    setTimeout(()=>{
        myResolve('Logesh');
    },2000)
 })

 myPromise.then((name)=>{
   return 'Name:'+name;
 }).then((name)=>{
  console.log(name);
 })
 .catch(()=>{
    console.log('failed');
 })