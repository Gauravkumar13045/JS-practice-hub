// 31. Write a function that checks if a key exists in an object.

const person = {
    name: "Gaurav",
    age: 20,
    city: "Patna"
};

function keycheck(key){
if(key in person){
     console.log(`${key} exits!!`);

}else{
    console.log("Not existed");
}
}

keycheck("age");