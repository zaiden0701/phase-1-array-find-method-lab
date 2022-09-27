function superbowlWin(record){
    const found = record.find(isWin)
    console.log(found)
   // return found.year
   //if (found.result === 'W'){
//     return found.year
//    }
//     return 
    if (found === undefined){
        return undefined
    } else {
        return found.year
    }
}

function isWin(record) {
    return record.result === 'W'
  }
  