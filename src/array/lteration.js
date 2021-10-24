export function map(array, fn) {
    const result = []
    for (let i=0;i<array.length;i++){
        let value2 =  fn(array[i],i,array)
        result.push(value2)
    }

    //返回一个新的数组
    return result
}


 export function reduce(array,callbackFn,initVault=false) {

            //返回的结果是初始值
            let result = initVault

    for (let index = 0 ;index<array.length ; index++){
             let item = array[index]
        let cur = callbackFn(result,item,index,array)
                  result = cur

    }

    return result
}

export function filter(arr,callbackFn) {
    let result = []
    for (let index = 0; arr.length>index; index++){
     let pre = arr[index]
        let flag = callbackFn(pre,index,arr)
        if (flag){
            result.push(pre)
        }
    }
    return result
}

export function find(arr,callbackFn) {

    for (let index = 0; index < arr.length; index++){

        let pre = arr[index]
        let flag =callbackFn(pre,index,arr)
        if (flag){
            //返回查找数组中的第一个元素
            return pre
        }

    }
    //都没有找到返回
    return undefined
}

export function findIndex(arr,callbackFn) {

    for (let index = 0; index < arr.length; index++){
        let pre = arr[index]
        let flag =callbackFn(pre,index,arr)
        if (flag){
            //返回查找数组中的第一个元素的下标
            return index
        }

    }
    //都没有找到返回-1
    return -1

}



export function every(arr,callbackFn) {
    let count = 0
    for (let index = 0; index < arr.length; index++){
        let element = arr[index]
        let flag = callbackFn(element,index,arr)
        if (flag){
            //返回查找数组中的第一个元素的下标
            count++
        }

    }
    //若果都返回true，则返回true，否则返回false
     return   count === arr.length ? true : false

}



export function some(arr,callbackFn) {
    let count = 0
    for (let index = 0; index < arr.length; index++){
        let element = arr[index]
        let flag = callbackFn(element,index,arr)
        if (flag){
            //返回查找数组中的第一个元素的下标
            count++
        }

    }
    //若果有一个返回true，则返回true，否则返回false
    return   count ? true : false

}

