// let arr = [1, 3, 4, 7];

// const sum = (a,b) => a+ b;
// console.log(sum(5,3));

//Foreach
// arr.forEach(function (item){
//     console.log("Item: " + item);
// })

//Map
// let temp = arr.map((item) => {
//     if(item %2 == 0) return item *2;
//     return item;
// })
// console.log(temp);

//Filter
// let temp = arr.filter((item)=>item %2 !=0);
// console.log(temp);

//Reduce
// let temp = arr.reduce((previous,current)=>{
//     return previous < current ? current : previous;
// })
// console.log(temp)

//Rest Param
// const sum = (a,b,...c)=>{
// }
// sum(3,4,5,6,7,8,9,10);

//Spread operator
//Array
// let arr1 = [1,3,4,7];
// let arr2 = [5,8];
// let result =[...arr1,...arr2]
// console.log(result);
//Object
let student = {
    className: "A03",
    address: "QN",
    name: "Trieu"
}
// let student1 ={... student}
//console.log(student1)
// let student1={
//     className: "A04",
//     address: "QN"
// }
// let temp = {...student,...student1}
// console.log(temp)

//Destructuring
// let arr = [1, 3, 5, 7]
// let [a, ...b] = arr;

// let student ={
//     id : "1",
//     name: "Trieu"
// }
// let {id:code,name} = student;

