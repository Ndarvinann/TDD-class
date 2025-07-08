function factorial(n){
    
    //if(n===2) return 2; // test 2
    
   // return 1; test one 
   if(n===0 || n===1) return 1
   return n* factorial(n-1); //refactoring to he real solution
}

module.exports = factorial;