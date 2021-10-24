<!-- 节流函数-->
 export function throttle (fn,time) {
    //节流起始时间，不能是date.now，因为第一次需要执行一次
    let nowTime = 0
    return function ( event) { //event 事件对象
        if (Date.now() - nowTime >= time){
            nowTime = Date.now()
            fn.call(this,event)
        }
    }
}