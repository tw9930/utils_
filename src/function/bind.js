export function bind (obj,...args1){
    const fn = this
    return function (...args) {
        fn.call(obj,...args1,...args)
    }

}