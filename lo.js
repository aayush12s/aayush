console.log("hello");
const a = 10;
const b = 20;
console.log("a is" + a);
console.log("b is" + b);
//console.log("a is" + a);
//console.log("b is" + b);
if (a > b) {
    console.log("a is greater" + a);
} else {
    console.log("b is greater" + b);
}
const n =20
for (let i=0; i<n; i++){
    console.log(i)
}
// try{
//     throw new Error("cant divide 0");
// }catch (err) {
//     console.log(err);
// }
function print(x){
    console.log(x);
}
print(5);

print("hello");
const cowsay = require("cowsay");
const { getAllJokesWithTag } = require("one-liner-joke");
console.log(
cowsay.say({
 text: "aayush is coding",
 e: "✌️✌️✌️",
 T: "b",
})
)


const oneLinerJoke = require("one-liner-joke");


var getRandomJoke = oneLinerJoke.getRandomJoke();
const joke  = (getRandomJoke,body);

console.log(
    cowsay.say({
        text: joke,
        e: "❤️",
        T: "b",
    })
)


