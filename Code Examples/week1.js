// NOTES
// to run this example, uncomment the "Code Example" function 
// that you're interested in and type "node week1.js" into the terminal

/////////////////////
// Code Examples
/////////////////////

//showDataTypes();
//showOperators();
showExecutionFlow();


/////////////////////
// Example Functions:
/////////////////////

function showDataTypes(){

    // String
    
    var s1 = "some text";
    console.log("var s1 - type: " + typeof s1 + " value: " + s1);

    var s2 = 'some text';
    console.log("var s2 - type: " + typeof s2 + " value: " + s2);
    
    var s3 = '172';
    console.log("var s3 - type: " + typeof s3 + " value: " + s3);
    
    var s4 = '172' + 4;
    console.log("var s4 - type: " + typeof s4 + " value: " + s4);

    // Number

    var n1 = 172;
    console.log("var n1 - type: " + typeof n1 + " value: " + n1);

    var n2 = 172.45;
    console.log("var n2 - type: " + typeof s2 + " value: " + n2);

    // Boolean

    var b1 = true;
    console.log("var b1 - type: " + typeof b1 + " value: " + b1);

    var b2 = false;
    console.log("var b2 - type: " + typeof b2 + " value: " + b2);

    var b3 = !b2;
    console.log("var b3 - type: " + typeof b3 + " value: " + b3);

    // Undefined

    var c;
    console.log("var c - type: " + typeof c + " value: " + c);

    // Null

    var d = null;
    console.log("var d - type: " + typeof d + " value: " + d);
    
}

function showOperators(){

    // Addition of Numbers	
    console.log("3 + 4: " + (3 + 4) );
    
    // Concatenation of Strings	
    console.log("'Hello ' + 'World': " + ('Hello ' + 'World') );
    
    // Subtraction of Numbers	
    console.log("4 - 3: " + (4 - 3) );
    
    // Multiplication of Numbers	
    console.log("3 * 4: " + (3 * 4) );
    
    // Division of Numbers	
    console.log("2 / 4: " + (2 / 4) );
    
    // Modulo
    console.log("7 % 3: " + (7 % 3) );

    // Assignment
    var x = 5;
    console.log("x: " + x);

    // Post Increment
    console.log("x++: " + (x++))

    // Pre Increment
    console.log("++x: " + (++x));

    // Post Decrement
    console.log("x--: " + (x--))

    // Pre Decrement
    console.log("--x: " + (--x));

    // Assignment with Addition
    x += 3;
    console.log("x: " + x);

    // Assignment with Subtraction
    x -= 2;
    console.log("x: " + x);

    // Assignment with Multiplication
    x *= 2;
    console.log("x: " + x);

    // Assignment with Division
    x /= 3;
    console.log("x: " + x);

    // Logical AND
    console.log("x > 3 && x < 10: " + (x > 3 && x < 10)) ;

    // Logical OR
    console.log("x === 4 || x === 10: " + (x === 4 || x === 10) );

    // Bitwise OR
    console.log("3.1345|0: " + (3.1345|0) ); 

    // Logical NOT
    console.log("!(x === 2): " + (!(x === 2)) );

    // Equal
    console.log("1 == 1 && 1 == '1': " + (1 == 1 && 1 == '1') );

    // Strict Equal
    console.log("1 === 1 && 1 === '1': " + (1 === 1 && 1 === '1') );

    // Not Equal
    console.log("1 != 2: " + (1 != 2) );

    // Strict Not Equal
    console.log("1 !== '1': " + (1 !== '1') );

    // Greater Than
    console.log("7 > 3: " + (7 > 3) );

    // Greater Than Or Equal
    console.log("7 >= 7: " + (7 >= 7) );

    // Less Than
    console.log("3 < 10: " + (3 < 10) );

    // Less Than Or Equal
    console.log("3 <= 3: " + (3 <= 3) );

    // Type Of
    console.log("typeof 6: " + (typeof 6) );

    // Ternary
    var age = 12;
    console.log("(age >= 18) ? 'adult' : 'minor': " + ((age >= 18) ? 'adult' : 'minor') );
}

function showExecutionFlow(){
    /**
     * 1. Sequence example: each statement is executed one after the other
     **/

    var a = 3;
    var b = 6;
    var c = a + b;

    console.log("c: " + c);

    /**
     * 2. Conditional examples: a decision is made based on the evaluation of an expression,
     * and a code path (or branch) taken.
     **/

    var grade;
    var mark = 86;

    if (mark >= 90) {
        grade = 'A+';
    } else if (mark >= 80) {
        grade = 'A';
    } else if (mark >= 70) {
        grade = 'B';
    } else if (mark >= 60) {
        grade = 'C';
    } else if (mark >= 50) {
        grade = 'D';
    } else { 
        grade='F';
    }

    console.log("grade: " + grade);

    var gpa;

    switch(grade) {
        case 'A+':
            // do these steps if grade is A+
            gpa = 4.0;
            break;
        case 'A':
            // do these steps if grade is A
            gpa = 4.0;
            break;
        case 'B':
            // do these steps if grade is B
            gpa = 3.0;
            break;
        case 'C':
            // do these steps if grade is C
            gpa = 2.0;
            break;
        case 'D':
            // do these steps if grade is D
            gpa = 1.0;
            break;
        default:
            // do these steps in any other case
            gpa = 0;
            break;
    }

    console.log("gpa: " + gpa);

    /**
     * 3. Looping example: a set of statements are repeated
     **/

    var total = 0;
    for(var i = 1; i < 11; i++) {
        total += i;
        console.log("i", i, "total", total);
    }


    /**
     * 4. Transfer example: a set of statements are repeated
     **/

    function add(a, b) {        // declaring the add function
        if(!b) {                // check if the b argument exists/has a value
            return a;           // if not, simply return the value of argument a
        }
        return a + b;           // otherwise, return the two arguments added together
    }

    var addTotal;
    addTotal = add(56);            // invoking the add function with a single argument
    addTotal = add(addTotal, 92);     // invoking the add function with two arguments

    console.log("addTotal: " + addTotal);
}