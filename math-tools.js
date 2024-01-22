function add (a,b){
    return a+b;
}

//모듈 내부의 것을 외부로 공유해줘야함

exports.plus=add;

//외부에 공개하고 있음 exports

exports.PI =3.14;
exports.add = function add(a,b) {return a+b;};
exports.subtract = function subtract(a,b) {return a-b;};
exports.multiply = function multiply(a,b){return a*b};
exports.divide = function multiply(a,b){return a/b};

//공개하고싶은 걸 모아서 하나의 객체로 만드는 것
let calculator = {
    PI: 3.14,
    add: (a,b)=> a+b,
    subtract: (a,b) => a-b,
    multiply: (a,b) => a*b,
    divide: (a,b)=>a/b,
};

module.exports=calculator;