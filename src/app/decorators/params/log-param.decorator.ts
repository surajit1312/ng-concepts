export function MyParam () {
    return function (target: any, paramName: string, index: number) {
        console.log(`${target.constructor.name} ${paramName} ${index}`);
    };
};
