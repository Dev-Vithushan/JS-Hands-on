function rightRotate (arr,k){
    k=k%arr.length
    for(let i=0; i<k; i++){
        let array=arr.shift()
        arr.push(array)
        
    }
    return arr
}


let output=rightRotate([1,2,3,4,5], 2)
console.log(output)