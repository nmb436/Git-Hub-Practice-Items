// We've created a function called "The Doubler"
// the function accepts a bunch of different inputs from the caller.
// It accepts strings, numbers, booleans and objects and tries to double them.

//var someNumber = 8;
// make sure to test all the possible inputs.
 var someBoolean = true;

theDoubler(someBoolean);


function theDoubler(someInput) {
	// typeof is a built in javascript tool that allows us to find the type of an object
    // for number, we have given an example of how that works

	if (typeof someInput === "number") {
	    // if type is number, log that number multiplied by 2
         
         console.log(someInput * 2);
	}

	// if type is string pass back that string twice
	// e.g. sending "someString" in, should log "someStringsomeString"

    else if (typeof someInput === "string"){
        console.log(someInput.repeat(2));
        
    }
    
    else if (typeof someInput === "boolean"){
        
        if (someInput === true) { 
            console.log("Super-duper true");
        }
        
        else if (someInput === false){
            console.log("I won't double this");   
        }
    }
    

	// if the user inputs a boolean (true or false)
	// log "I won't double this" if it is false
	// log "Super-duper true" if it is true
    else if (typeof someInput === "object"){
        console.log("everything is an object");
    }

	// if it's none of those, but it is an object, log "everything is an object"
    else {
        console.log("I can't double this");
    }

	// if it is anything else, print out "I can't double this"

};