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

function create_data(idLength, startDate, endDate) {
    let start = new Date(startDate)
    let end = new Date(endDate)
    const array = []
    let number = ""
    const date_obj = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }
    const datetimeformat = Intl.DateTimeFormat('DE', date_obj)
    for (y = 0; y < 10000000; y++) {
        let randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        for (i = 0; i < idLength; i++) {
            number += Math.floor(Math.random() * 10)
        }
        array.push({
            id:number,
            time: datetimeformat.format(randomDate)+" UTC"
        })
        number = ""
    }
    return array
}

console.time("test");
let fin_array = create_data(8, "December 17, 1995 03:24:00", "June 28, 2017 07:55:00")
console.timeEnd("test")
console.log(fin_array)
//test: 16:49.101 (m:ss.mmm)
// test two without console.log 
//test: 31.211s

//test three is 32.43 with correct format