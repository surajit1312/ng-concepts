export interface Prefixer {
    addPrefix: boolean;
}

export function MyClass(param: Prefixer) {
    return function (constructor: Function) {
        constructor.prototype.prefix = param.addPrefix;
    }
}
