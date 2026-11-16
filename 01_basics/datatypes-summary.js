// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scores=100.3

const isloggein=false
const temp=null

const id=Symbol(15456)
const anotherid=Symbol(3546)

console.log(id==anotherid)

// Refrence (Non primitive)

//Array, Objects,Functions

const heros=["shaktiman", "naagraj", "doga"];
let myobj={
    name:"Atul",
    age:20
}

const myfunction=function(){
    console.log("hello world");
    
}
console.log(typeof id)

//************###################**********************

// Stack(Primitive), Heap (Non primitive)

let myname="Atul soni"
let anothername=myname
anothername="hitsh choudhary"
console.log(myname)
console.log(anothername)

let userone={
    email:"atul@gmail.com",
    upi:"user@ybu"
}

let usertwo=userone

userone.email="atul@google.com"

console.log(userone.email);
console.log(usertwo.email);

