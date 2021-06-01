
// "Client order"

// Your client SpaceY is creating a new AI system that tries to detect patterns in data using their new algorithm.
// You need to create a function or functions that can be used to generate data that looks like this:

// [
//     { id: "00000005", time: "21.11.2001 14:11:21 UTC" }
//     { id: "00328105", time: "01.04.2021 03:10:31 UTC" }
//     { id: "01128503", time: "11.01.2003 13:04:05 UTC" }
//     { id: "11160001", time: "10.12.1997 14:51:55 UTC" }
// ]
// Your function will need to generate data based on three different inputs:

// - idLength:number - how long should the "id" field be; how many numbers. IDs do not need to be unique.
// - startDate:string - the first date when your data should be created (from 00:00:00)
// - endDate:string - the last date when your data should be created (to 23:59:59)
// Also, add a comment where you report how long does it take to generate 10 million lines of data.

function create_data(idLength,startDate,endDate){
    let number=""
    for(i=0;i<idLength;i++){
        number+= Math.floor(Math.random()*10)
    }

    let start = new Date(startDate)
    let end = new Date(endDate)
    let randomDate= new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

         const data={
            id:number,
            time: randomDate.toLocaleString()+" UTC"
        }
        return data
}

console.time("test");
const array=[]
for(y=0;y<10000000;y++){
    array.push(create_data(8,"December 17, 1995 03:24:00","June 28, 2017 07:55:00"))
    console.log(y)
}
console.log(array)
console.timeEnd("test")

//would love to mesure it but it crashed because it is out of memory at some point. Note that i got 16 gb ram :D 
//[12760:0000020D13EAC080]   150793 ms: Scavenge (reduce) 4095.1 (4100.3) -> 4094.4 (4101.8) MB, 4.6 / 0.0 ms  (average mu = 0.271, current mu = 0.239) allocation failure