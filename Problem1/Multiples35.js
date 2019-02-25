/* 
 Multiples of 3 and 5
    Problem 1 
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Find the sum of all the multiples of 3 or 5 below 1000.
*/

class Multiples35 {
    
        runn(){
            console.log( "hasil"+  this.Hitung35(1000) )
        }

        Hitung35(n){
            let hasil = 0;
    
            for ( let i = 3; i < n; i++  ){
                if ( i % 3 === 0 || i % 5 === 0){
                    hasil += i
                }
            }         
            return hasil;
        } 
    }

    let Multiples = new Multiples35
    console.log(Multiples.Hitung35(1000))

        
        