// Q1
var student = {
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12
};

console.log(Object.keys(student).join(','))
console.log('\n')



// Q2
delete student.rollno
console.log(student);
console.log('\n')



//Q3
var student = {
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12
};

console.log(Object.keys(student).length);
console.log('\n')



//Q4
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true } , 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
]; 

library.forEach(element => {
    console.log('BOOK_NAME:',element.title,', AUTHOR_NAME:', element.author, ', READING_STATUS:', element.readingStatus);
    
});
console.log('\n')



//Q5
class Cylinder{
    constructor(xyz, height){
        this.radius = xyz;
        this.height = height;
    }
    volume(){
        return (Math.PI * this.radius * this.radius * this.height).toFixed(4);
    }
}

let cyl = new Cylinder(2, 10);
console.log(cyl.volume());
console.log('\n')



//Q6
var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

console.log(library.sort(function(obj1, obj2){
    return obj2.libraryID - obj1.libraryID
}));
