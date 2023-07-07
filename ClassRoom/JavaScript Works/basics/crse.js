var courses=[
    {id:1,name:"django",rating:4,topics:["html","css","js","bootstrap","python","angular"],databse:"postgres"},
    {id:2,name:"mearn",rating:5,topics:["html","css","js","bootstrap","node","express","angular","react"],databse:"mongo"},
    {id:3,name:"asp.net",rating:4,topics:["html","css","js","bootstrap","c#","angular"],databse:"mysql"},
    {id:4,name:"spring",rating:4,topics:["html","css","js","bootstrap","java"],databse:"mysql"},
    
]

var cnames=courses.map(c=> c.name)
console.log(cnames);


// print crse whose db is mysql

var mysql=courses.filter(c=>c.databse=="mysql").map(c=>c.name)
console.log(mysql);

// print course name with rating>4

var ratingfilter=courses.filter(c=>c.rating>4).map(c=>c.name)
courses.sort((c1,c2)=>c2.rating-c2.rating)
console.log(courses);