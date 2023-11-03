
const fetchData = (callback)=>{
    setTimeout(()=>{
       callback('Function executed');

   },1500)
}



setTimeout(()=>{
    fetchData((result)=>{
        console.log(result);
    })
},2000);


console.log('Hi');
console.log('Hello');