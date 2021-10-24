export function apply (obj,args){
    let storage = this
    //如果传入的参数是null或undefined，调用者是window
    if (obj === null || obj === undefined){
        storage(...args)
    }else {
        //改变函数的调用者为传入的第一个参数
        obj.temp = storage
        obj.temp(...args)
        delete obj.temp
    }
}