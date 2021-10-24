export  function debounce(fn,time) {// 防抖函数
    //返回处理后的函数
    return function (event){
        //判断上次回调是否存在，如果存在清除它
        // if (fn.delay){ 这个会去找原型链上，效率比较慢
        if (fn.hasOwnProperty('delay')){ // 这个不会去找原型链只会在自身上找
            clearTimeout(fn.delay)
        }
        fn.delay = setTimeout(()=>{
            fn.call(this,event)
            delete fn.delay
        },time)
    }

}