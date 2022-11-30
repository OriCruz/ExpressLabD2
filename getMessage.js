let random = (max, min) => Math.floor(Math.random()*(max-min+1)+min);
module.exports.getMessage=(array)=>{
   
   return array[random(array.length-1, 0)];
}