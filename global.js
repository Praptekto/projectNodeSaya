
//console.log(global);

global.setTimeout(()=>{
  console.log("Mantap jiwa");
  clearInterval(int);

}, 3000 //milisecon

);

const int=setInterval(()=>{
  console.log("Interval");
},1000

);
