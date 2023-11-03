//const hobbies = ['Sports','cooking'];


//console.log(hobbies.map(hobby=>'Hobby:'+hobby))



//const name = 'mukesh'; 

//name = 'mahesh';

// const hobbies = ['sports','cooking']

// hobbies.push("Programming")

// console.log(hobbies);

// const person ={name:'logesh'}

// person.name = 'mahesh';

// console.log(person);

// const hobbies1 =['sports','cooking'];
// const hobbies2 = hobbies1.slice();
// hobbies2.push('programming');

// console.log(hobbies1);
// console.log(hobbies2);

// const hobbies1 =['sports','cooking'];
// const hobbies2 = [...hobbies1];
// hobbies2.push('programming');

// console.log(hobbies1);
// console.log(hobbies2);

const person ={name:'logesh'};

const student ={...person,age:26 }

// console.log(person,student);

const toArray = (...args)=>{
    return args;
}

console.log(toArray(1,2,3,4,5,6));