// 33. Create an array of objects (e.g., students with name and score) and sort them by score.

const students = [
    { name: "Amit", score: 85 },
    { name: "Priya", score: 92 },
    { name: "Rahul", score: 78 }
];

students.sort(function (a,b){
    return a.score - b.score;
});