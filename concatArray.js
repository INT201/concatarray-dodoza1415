const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  if (array1 == null && array2 == null ){
    return undefined
  }
  else if (array1 == undefined && array2 == undefined){
    return undefined
  }
  else if(array1 == []  && array2 == []){
    return []
  }
  else if (array1 != []  && array2 == []){
    return array1
  }
  else if (array1 == []  && array2 != []){
    return array2
  }
  else if (array1 != null  && array2 == null){
    return array1
  }
  else if (array1 == null  && array2 != null){
    return array2
  }
  else if (array1 != undefined  && array2 == undefined){
    return array1
  }
  else if (array1 == undefined  && array2 != undefined){
    return array2
  }
  else {
    let array3 = array1.concat(array2)
    return(array3)
  }
}
module.exports = concatArray

let array1 = null
let array2 = null
console.log(concatArray(array1,array2 ))

