export interface Prop {
  prefix: boolean;
}

export function MyProperty(param: Prop) {
  return function (target: any, propertyName: string) {
    let value: any;
    const setter = function (val: string) {
        value = val;
    };
    const getter = function () {
        return value;
    };
    Object.defineProperty(target, propertyName, {
        set: setter,
        get: getter,
    });
  };
}
