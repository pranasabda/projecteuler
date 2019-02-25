// Largest palindrome product
// Problem 4 
// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

class PolindromeProduct {

    isPalindrome(x) {
        
        var n = 0;
        var m = x;

        while (x > 0) {
            n = n * 10 + x % 10;
            x = x / 10 | 0;
        }
        return n === m;
        
    }

    
    getLargestPalindrome(){

        
        var r = 0;

        for (var p = 990; p > 99; p-= 11) {

            for (var q = 999; q > 99; q--) {

            var t = p * q;

            if (r < t && this.isPalindrome(t)) {
                r = t;
                break;
            } else if (t < r) {
                break;
            }
            }
        }
        console.log(r)
        return r;
    }

}
    
var PP = new PolindromeProduct
PP.getLargestPalindrome()
