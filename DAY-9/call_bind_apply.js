const student1={
    a: 10,
    b: 10,
    name: "Ridhima",
    greet:function(a,b){
        // sum=a+b;
        console.log("Hello, " + this.name);
        console.log(a + b);
    }
};

const student2={
    name: "ridz"
};

//call
student1.greet.call(student2, 2, 4);

//apply
student1.greet.apply(student2, [2,4]);

//bind
const r = student1.greet.bind(student2, 2, 5);
r();
