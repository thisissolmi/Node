// let m = require('./math-tools.js');


// console.log(m.plus(1,2));
// //math-tools에서 외부 공개한 걸 모두 사용하고 있음
// console.log(m.PI);
// console.log(m.add(2,4));
// console.log(m.subtract(1,2));
// console.log(m.multiply(1,2));
// console.log(m.divide(1,2));


//const os = require('os');
//os = operating system 

//console.log(os.cpus()); //내 운영체제의 정보를 출력함.
// fs.writeFileSync('new','Hello Node js!'); //new라는 파일을 만들고, 그 파일안에 뒤에 내용을 적어줌

// let fileList = fs.readdirSync('.'); //특정 디렉토리 안에 있는 파일 목록들을 배열 형식으로 출력
// console.log(fileList);


// const cowsay = require('cowsay');

// console.log(cowsay.say({
//     text:"My name is Olaf!",
// }));


// const fs = require('fs');

// console.log('Start');

// let content = fs.readFileSync('./new', 'utf8');
// console.log(content);

// console.log('Finish');

//복붙

// const fs = require('fs');

// console.log('Start');

// //arrow function 
// fs.readFile('./new', 'utf8', (error, data)=> {
//     console.log(data);
// });
// console.log('Finish');

//EventEmiiter class 전파기 
const EventEmitter = require('events'); // event라는 이름의 코어모듈

const myEmitter = new EventEmitter();

myEmitter.on('test', ()=> {
    console.log('Success!');
});

//emit 이벤트를 발생시키다 
myEmitter.emit('test');