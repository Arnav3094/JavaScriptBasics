// console.log(undefined);
// console.log(null);

// console.log(typeof(13871713871873731738738n))
// console.log(typeof("Hello World"))

let a = "98249284928"
var b = 1938197487194714n
var c = 128371873
var d = true

let e = "ajehcb"

const f = "iurbsc"


// const g = 13
// if (c>b){
//     const g = 11
//     console.log("c is greater than b")
// } else{
//     const g = 10
//     console.log("b is greater than c")
// }
// console.log(g)


// For Loop
const n = 5
// for (let i = 0; i<=n; i++){
//     console.log(i)
// }

let arr = [120, "diuahf", true]
// console.log(arr)
// console.log(arr[0])
// arr[0] = 4
// console.log(arr)

const json_ = {
    name: "Arnav",
    age: 18,
    schools:[
        {
            name: "TSMS",
            classes: "2-10"
        },
        {
            name: "Amity MV",
            classes: "11-12"
        }
        
    ]
}
// console.log(json_)

// try{
//     console.log(json_.schools[4].name)
// } catch (err) {
//     console.log("There was some error")
//     console.log(err)
// }

function square(x){
    return x**2;
}

console.log(square(3))


function is_odd(x){
    return x%2==1;
}
a = [1, 2, 3, 18]
const square_a = a.map((e) => square(e));
console.log("square_a: ", square_a)

const odd_a = a.filter(e => is_odd(e));
console.log("odd_a: ",odd_a)

