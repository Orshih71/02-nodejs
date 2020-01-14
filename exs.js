
Array.prototype.pluck = function(b){
    let val = (b?Math.max(this):Math.min(this));
    console.log();
};

console.log('start');
[1,2,3,4,5,6,7,8].pluck(true); // pluck largest
[1,2,3,4,5,6,7,8].pluck(false); // pluck smallest
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// 8
// 1