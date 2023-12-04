export interface LogTime {
    showTime: boolean;
};

export function MyLogger(param: LogTime) {
    return function (target: any, method: string, descriptor: any) {
        const originalFn = descriptor.value;
        descriptor.value = function(...args: any) {
            const timeNow = Date.now();
            const result = originalFn.apply(this, args);
            const thenTime = Date.now();
            console.log(`Method '${method}' was invoked from ${target.constructor.name} class and took ${thenTime - timeNow} ms.`);
            return result;
        };
        return descriptor;
    };
};
