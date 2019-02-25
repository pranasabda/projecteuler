// Largest prime factor
// Problem 3 
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

class PrimeFactor{
    
     
    getPrimeFactor(){
        let value =600851475143
        
        for ( var i=2; i<value; ++i){
            while(value % i==0)
            {
                value = value/i;
                console.log(value) 
            }
        }
    }
    
}

var PF = new PrimeFactor
PF.getPrimeFactor()




