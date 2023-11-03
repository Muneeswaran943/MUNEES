const person ={
    name:'Mukesh',
    age:21,
    greet :function(){
        console.log('Hello '+ this.name)
    }
}
person.greet()