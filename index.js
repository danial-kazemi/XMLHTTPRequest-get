"use strict";

// GET IP


// apendchild
// after
// before

// class Persone {
//     constructor(){
//         this.fname ='Danial';
//         this.fname ='Kazemi';
//     }
// }


//XML - HTTP - REQUEST
// rest spread

// let preson = new Object()
// preson = {
//     fname : 'Danial',
//     lname : 'kazemi',
//     email : 'web.kazemi@gmail.com',
//     telephone : "+989106316885"
// }
// console.log(preson.telephone);

// function Person( fname, lname, email, telephone){
//     this.fname = fname,
//     this.lname = lname,
//     this.email = email,
//     this.telephone = telephone
// }
// let person1 = new Person('Danial','Kazemi', 'web.kazemi@gmail.com', '+989106316885');
// let person2 = new Person('Behzad','pourzahraii', 'behzad.kazemi@gmail.com', '+989177777777');
// let person3 = Object.create(null);
// console.log(person2.fname);
// # Let
// let x = 20;
// function func(){
//     let x = 10;
//     if(true){
//         let x = "Danial";
//     }
//     console.log(x);    
// }
// func()
// # Const 

// const PERSON = {
//     age : 33
// }
// PERSON.age = 20
// const ARRAY = [
//     'fname' = 'Danial',
//     'lname' = 'Kazemi',
//     'age' = 33,
// ]
// console.log(ARRAY);
// function sum( a = 1 , b = 1 ){
//     //  a = typeof a == undefined ? 1 : a;
//     //  b = typeof a == undefined ? 1 : b;
//     a = a || 1;
//     b = b || 1;
//     return a + b;
// }
// console.log( sum( 5 , 7 ) );
// function sum(a,b){
//     console.log(arguments);
// }
// sum(1,2,3);
// function sum(a,...args){
//     return args.reduce( (pre , current) => pre + current 
//     , 100) 
// }
// let args = Array(1,2,3,4,5,6);
// console.log( sum(...args) );
// class Person {
//     constructor(firstName,lastName,age){
//         this.firstName = firstName
//         this.lastName = lastName;
//         this.age = age;
//     }
    
//  }

// Class
// function Person(firstName, lastName, email){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.seyHello = function(){
//         return `Hello Guys`;
//     }
// }
// let danialkazemi = new Person("Danial","Kazemi","web.kazemi@gmail.com");
// console.log(danialkazemi.email);

// class Person{    
//     constructor(firstName, lastName, email){
//         this.email = email;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.fullName = `${this.firstName} ${this.lastName}`;
//     }
//     sayHello(){
//         return "Hello";
//     }    
// }
// let danialkazemi = new Person("Danial", "Kazemi", "web.kazemi@gmail.com", );
// class Person1 extends Person{
//     constructor(firstName, lastName, email,work){
//         super();
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.work = work;
//         console.log( email );
//     }
// } 
// let AminKazemi = new Person1("Mohammad Amin","Kazemi", "amin.nightwolf@gmail.com","electronik");
// class Foo{
//     constructor(){
//         this.log = [];
//     }
//     set current(value){
//         this.log.push(value);
//     }
//       latest(){
//          if(this.log.length == 0) return undefined;
//          return this.log[this.log.length - 1];
//      }
    
// }
// let bar = new Foo();
// bar.current = "A";
// bar.current = "B";
// console.log(bar.log);
// console.log(bar.latest());
// class Person{
//     constructor(firstName, lastName, email){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//     }
//      seyHello(){
//         return "Hello";
//     }    
// }
// class extraPerson extends Person{
//     static seyHello(){
//         return "Hello";
//     }   
//     static seyHelloDeutsch(){
//         return "Hallo";
//     }
// }
// let person1= new extraPerson('Danial', 'Kazemi', 'web.kazemi@gmail.com');

// console.log( extraPerson.seyHello() );
// class AdvanceArray extends Array{
//     find(value){
//         let result = this.filter(item => item == value);
//         // let result = this.filter((item)=>{            
//         //     return item == value ;           
//         // });
//         if (result.length >= 1){
//             return result;
//         }else{
//             return "the value is not here";
//         }
        
//     }
// }
// let list = new AdvanceArray("Danial Kazemi","Mohammad Amin Kazemi");
//  console.log(list.find("Danial Kazemi"));

// let person1 = {
//     firstName : "Danial",
//     lastName : "Kazemi",
//     email : "web.kazemi@gmail.com", 
//     age : 10,
// }
// console.log(person1.firstName);
// class Person{
//     constructor(firstName, lastName, email, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//     }
// }
// let person1 = new Person("Danial", "Kazemi", "web.kazemi@gmail.com", 33);

// console.log(person1);
// let name = "Danial";
// let firstName = "fname";
// let obj = {
//     name ,
//     [firstName] : "Danial"
// }
// console.log( obj[firstName] );
// let symbol1 = Symbol();
// console.log(symbol1);

// #Array and Object Destructuring 
// let list = ['Danial', 'Kazemi', 'web.kazemi@gmail.com', 33];
// let obj = {
//     fname : 'Danial',
//     lname: 'Kazemi',
//     //email : 'web.kazemi@gmail.com'
// }
// let { fname = 'Danial', email : lname = "@gmail.com" } = obj; 
// console.log(fname, lname);

// #Symbol
//  let usernameSymbol = Symbol.for('username');
//  let passwordSymbol = Symbol('password');
//  let newUsernameSymbol = Symbol.for('username');
// //  console.log( usernameSymbol == passwordSymbol );
// let obj ={
//     name : 'Danial Kazemi',
//     age : 33,
//     [usernameSymbol] : 'danial',
//     [passwordSymbol] : '6506',
// }
// console.log(obj[newUsernameSymbol]);
// class replaceX {    
//     constructor(value){
//         this.value = value;        
//     }
//     [Symbol.replace](string){        
//         return `${string} => ${this.value}`
//     }
// }
// console.log( 'Danial'.replace(new replaceX('Danial Kazemi')) );
// #Numbers Methode
// let num = 50;
// console.log(Number.isInteger(num));
// Number.isFinite()

// let obj = {
//     fname : 'Danial',
//     lname : 'Kazemi',
//     fullName : function() {
//         return `${this.fname} ${this.lname}`;
//     }
// }

// console.log( obj.fullName() .includes('Kaz',7) );

// #Iterators
// let person = ['Danial', 'Kazemi'];
// let Person1 = {}
// // person[Symbol.iterator] = null;
// for (const iterator of person1) {
//     console.log(iterator);
// }
// let list = Array.of(1,2,3,4,5,6);
// console.log(list);
// let list2 = Array.from(list);
// console.log(list2)
// console.log(Math.sign(NaN));

//  let person1 = {
//     fname : 'Danial',
//     lname : 'Kazemi',
//     email : 'web.kazemi@gmail.com'
// }
// let person2 = {
//     fname : 'mohammad Amin',
//     lname : 'Kazemi',
//     age : 31
// }
// console.log(Object.assign(person1, person2));
// console.log(person1);


// let obj1 = {
//     'fname' : 'Danial',
//     'lname' : 'Kazemi',
// }
// console.log()

// Generator //
// let obj = {
//     fname: 'Danial',
//     lname : 'Kazemi',
//     list : [1,2,3,4,5,6],    
// }
// obj.list[Symbol.iterator] =  function(){  
//     let list = this;    
//     let step = 0;         
//        return {            
//             next(){
//                 let obj = {
//                     done : step >= list.length,
//                     value : list[step]                                    
//                 }
//                 step ++;
//                 return obj;                              
//             }    
//         }
// };
// console.log(obj.list[Symbol.iterator]().next());
// console.log(obj.list[Symbol.iterator]().next());
// console.log(obj.list[Symbol.iterator]().next());


// let obj = {
//     fname: 'Danial',
//     lname : 'Kazemi',
//     list : [1,2,3,4,5,6],    
// }
// obj.list[Symbol.iterator] =  function *(){  
//     yield ;
  
// };
// for (const iterator of obj.list) {
//    console.log(iterator);
// }

// Callback hill
// Promise
// let promise1 = new Promise((resolve, reject) => {
//     resolve('Danial resolve');
//     reject('Danial resolve');
// });
// promise1.finally(resolve => console.log(resolve));
// const welcome = new Promise(function( resolve, eject) {
    
//     setTimeout(() => {
//         console.log('1');
//         resolve();
//     }, 2000);        
// });

// welcome
//     .then(() => {
//         console.log(2);
//     })




// function loadScript(path) {
//     return new Promise(function( resolve, reject){
//         const axiosScriptTag = document.createElement('script');
//         axiosScriptTag.setAttribute('src', path);
//         axiosScriptTag.setAttribute("defer", "defer");                  
//         axiosScriptTag.onload = ()=> resolve(path);       
//         axiosScriptTag.onerror = ()=>reject( new Error('Whoops!') ); 
//         document.head.append(axiosScriptTag);                         
//     });    
// }
// let loadAxios = loadScript('https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js');
// loadAxios
//     .then( ()=> {
//         axios.get("https://randomuser.me/api")
//         .then( response => {            
//             if (response.status === 200) {
//               let data = response.data.results; 
//               for (const randomuser of data) {
//                 const imgTag = document.createElement('img');
//                 imgTag.setAttribute('src',randomuser.picture.large);
//                 imgTag.setAttribute('style',`display: block; margin: 0 auto; border-radius: 50%;`);
//                 document.body.appendChild(imgTag);
//               }                
//             }else if( response.status == 404){
                
//             }
//           })
//         .catch( error => {
//             if (error.response) {
//                 if(error.response.status === 404){
//                     {
//                         alert(`API Adress error ${ error.response.status }`);
//                     }
//                 }else{
//                     console.log(error.response.status);
//                 }
//             }
//         })  
//     })
//     .catch( reject => console.log(reject))
function getData(url){
    return new Promise((resolve, reject) => {
        let getRequest = new XMLHttpRequest();
        getRequest.open('GET',url);
      // getRequest.onload = function(){                               
        getRequest.onreadystatechange = function(){   
             
            if(this.status === 200){                          
                if(this.readyState === XMLHttpRequest.DONE){
                    let response = this.responseText;                            
                    resolve( response );
                }
            }else{                
                reject( new Error(`Error Num = ${this.status}`));
            }
        }        
        getRequest.send();
    });
}
getData('https://randomuser.me/api')

    .then( function(resolve){
        let JSONText = JSON.parse(resolve);
        console.log(JSONText.results[0])
        let name = `${JSONText.results[0].name.first} ${JSONText.results[0].name.last}`; 
        let imageSRC = JSONText.results[0].picture.large; 
        let nameTag = document.createElement('h1');
        nameTag.setAttribute('style', 'display: block; margin-bottom: 1rem ; text-align: center');
        nameTag.innerText = name;
        document.body.appendChild(nameTag);               
        let imageElemet = document.createElement('img');
        imageElemet.setAttribute('src',imageSRC);
        imageElemet.setAttribute('style','display: block; margin: 0 auto; border-radius: 50%');
        document.body.appendChild(imageElemet);
    })
    .catch((error) =>{
        console.log(error);
    })