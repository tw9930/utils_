/*
1. 合并concat()
    语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]])
    功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变

 */
export function concat(array,...values) {
    const result = [...array]
    values.forEach((value)=>{
        if (Array.isArray(value)){
        result.push(...value)

        }else result.push(value)

    })
    return result
}
