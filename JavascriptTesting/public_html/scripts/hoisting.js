/* Many of these examples were taken directly / nearly directly from 
 * the codeschool.com lesson on hoisting.
 */

function sumOfSquares(a, b){
    var x = add(a*a, b*b);
    return x;
    
    /* This function is "hoisted" up to the top by the compiler so that
     * the add function is available when it's used above.
     * 
     * Watch out for unintended hoisting issues, though!
     */
    function add(c, d){
        var a = c + d;
        return a;
    }
}

console.log("Summing the squares of 2 and 3: " + sumOfSquares(2, 3));

//Example of (potential) unintended hoisting issues
function getMysteryNumber1(){
    function chooseMystery(){
        return 12;
    }
    
    return chooseMystery();
    
    function chooseMystery(){
        return 7;
    }
}

console.log("getMysteryNumber1 will return 7, NOT 12 [function hoisted]: " + getMysteryNumber1());

//Function expressions are NEVER hoisted
function getMysteryNumber2(){
    var chooseMystery = function (){
        return 12;
    };
    
    return chooseMystery();
    
    //This ends up being unreachable.
    var chooseMystery = function (){
        return 7;
    };
}

console.log("getMysteryNumber2 will return 12, NOT 7 [FE not hoisted]: " + getMysteryNumber2());

/* This causes an error!  BOTH FEs end up being unreachable.
 * If the functions were not FEs (and just declared), this would be fine
 */
function getMysteryNumber3(){
    return chooseMystery();
    
    var chooseMystery = function (){
        return 12;
    };
    
    //This ends up being unreachable.
    var chooseMystery = function (){
        return 7;
    };
}

//Same as above... but no errors!
function getMysteryNumber4(){
    return chooseMystery();
    
    function chooseMystery(){
        return 12;
    }
    
    function chooseMystery(){
        return 7;
    }
}

console.log("getMysteryNumber4 will return 7, NOT 12 [function hoisted]: " + getMysteryNumber4());