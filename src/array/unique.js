/*
1. 理解:
    根据当前数组产生一个去除重复元素后的新数组
如: [2, 3, 2, 7, 6, 7] ==> [2, 3, 7, 6]
 */
//方案一  双重循环效率比较低
let arr = [12,3,22,1,12,3,6,5,5]
export  function unique( arr  ) {
 let result = []
    arr.forEach((item,index)=>{
        let pre = result.indexOf(item)
        if (pre == -1){
            result.push(item)
        }
    })
    return result
}
//方案二 只需要循环遍历一次数组就行，提高了效率

export function uniqueT( arr  ) {
    const  result = []
    let  obj = {}
    arr.forEach((item)=>{

        if (!obj.hasOwnProperty(item)){
            obj[item] = true
            result.push(item)
        }
    })
    obj = null
    return result
}
//方案三 ：使用新的语法 ：代码简洁
export function uniqueS(arr){
    const result = new Set( arr) //set函数可以自动去重，
    return [...result]
}

