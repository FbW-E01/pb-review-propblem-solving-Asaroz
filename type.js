// Make a function that works like this:

//  examine({})         // ["object"]
//  examine("hi")       // ["string"]
//  examine(3, 1)       // ["number", "number"]
//  examine(3, "hi")    // ["number", "string"]
//  examine([], ()=>{}) // ["array", "function"]

function examine(...a){
    const b= []
    a.forEach(item => b.push(typeof(item)))
    return b
}
console.log(examine({},"hi",()=>{}))