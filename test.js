// function add(){
//     let num1 = 22;
//     let num2 = 44;
//     let sum = num1+ num2;
//     return sum;
// }

console.log('start');

for(let i=0; i<5;i++){
    console.log(i);
}

console.log('end');

// output 
// start 
// 0
// 1
// 2
// 3
// 4
// end




// inbuilt js function
//takes 2 argument 
// syntax : 
// setTimeout(function(),time in milliseconds)
// time = 3000 = 3s 

console.log('start');

setTimeout(function print(){
  console.log('Inside timeout');
}, 3000);

console.log('end');

// thread of excution 
// ist line print 
// 2nd line - counting start .. 

// 3rd line 
// counting ends then it executed function print 

// dual core || octa core  || 

